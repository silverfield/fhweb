import repdata from '../../data/repertoire.json'
import {htmlDecode} from '../../helpers/combo-helper'
import {useState} from "react"

var tagMap = {
    'relaxed': {
        'full': 'Songs for relaxed/ambient restaurant atmosphere',
        'color': '#7ed4e9b9'
    },
    'dsmk': {
        'show': 'DS/MK',
        'full': 'Dire Straits and Mark Knopfler classics',
        'color': '#e95656b9'
    },
    'guitary': {
        'full': 'Guitar-focused songs',
        'color': '#37913ab9'
    },
    'famous': {
        'full': 'Well know and popular songs',
        'color': '#e9da56b9'
    },
    'singing': {
        'full': 'Songs suitable for vocalists',
        'color': '#56e9b8b9'
    },
    'acoustic': {
        'full': 'Songs I can play purely acoustic',
        'color': '#965428b9'
    },
    'instrumental': {
        'full': 'Instrumental songs',
        'color': '#a3a523b9'
    },
    'songwrite': {
        'full': 'Songwriter type of songs',
        'color': '#ca3587b9'
    },
    'rocky': {
        'full': 'Loud, booming \& rocky songs',
        'color': '#6f68ceb9'
    },
    'rhythm': {
        'full': 'Rhythmic songs for vibrant pubs',
        'color': '#41df41b9'
    }
}

var tick = htmlDecode('&#x2713;');
var cross = htmlDecode('&#x2717;');

function TickCross({
    yes,
    name
}) {
    name = (`${yes ? tick : cross} - ${name}`);

    return <>
        <span 
            className={`tickcross ${yes ? "tick" : "cross"}`} 
            data-toggle="tooltip" 
            title={name}
        >
            {yes ? <>{tick}</> : <>{cross}</>}
        </span>
    </>
}

function Tag({
    value,
    tagMap,
    updateFilters
}) {
    return <span 
        className="repe-tag" 
        data-toggle="tooltip" 
        title={tagMap[value]['full']}
        style={{'backgroundColor': tagMap[value]['color']}}
        onClick={() => updateFilters('tag', value)}
    >
        {tagMap[value]['show'] ? tagMap[value]['show'] : value}
    </span>
}

function passFilters(
    filters, 
    artist,
    bt,
    nbt,
    tags
) {
    for (var i in filters) {
        var f = filters[i];
        if (f['name'] === 'artist' && f['value'] !== artist) {
            return false;
        }
        if (f['name'] === 'bt' && bt !== f['value']) {
            return false;
        }
        if (f['name'] === 'nbt' && nbt !== f['value']) {
            return false;
        }
        if (f['name'] === 'orig' && (artist === 'Fero Hajnovic') !== f['value']) {
            return false;
        }
        if (f['name'] === 'tag' && !(tags.includes(f['value']))) {
            return false;
        }
    }

    return true;
}

function Item({
    artist,
    name,
    bt=false,
    nbt=false,
    tags=[],
    filters=null,
    updateFilters=null,
    selection=null,
    updateSelection=null
}) {
    if (!passFilters(filters, artist, bt, nbt, tags)) {
        return <></>
    }

    var isSelected = selection.filter((s) => s['name'] === name && s['artist'] === artist).length > 0;

    return <>
        <tr className={"repe-item" + (isSelected ? ' repe-selected': '')}>
            <td className="repe-artist" onClick={() => updateFilters('artist', artist)}>
                {artist}
            </td>
            <td className="repe-name" onClick={() => updateSelection(artist, name)}>
                {name}
            </td>
            <td className="repe-props" onClick={() => updateFilters('orig', artist === 'Fero Hajnovic')}>
                <div className="inline-flex">
                    <TickCross yes={artist === 'Fero Hajnovic'} name="Original" />  
                </div>
                <div className="inline-flex">
                    <TickCross yes={bt} name="Backing track version" />
                </div>
                <div className="inline-flex">
                    <TickCross yes={nbt} name="Non-backing track version" />
                </div>
            </td>
            <td className="repe-tags">
                {tags.map((value) => {
                    return <div className="inline-flex">
                        <Tag tagMap={tagMap} value={value} updateFilters={updateFilters}/>
                    </div>
                })}
            </td>
        </tr>
    </>
}

export default function Repertoire({

}) {
    repdata.sort((a, b) => a['artist'] - b['artist']);

    const [filters, setFilters] = useState([])
    const [selection, setSelection] = useState([]);

    function updateSelection(artist, name) {
        var matchSelection = selection.filter((s) => (s['name'] === name) && (s['artist'] === artist));

        if (matchSelection.length > 0) {
            setSelection(selection.filter((s) => (s['name'] !== name) || (s['artist'] !== artist)));
            return;
        }

        var newSelection = selection.slice().concat([{
            'name': name,
            'artist': artist
        }])
        setSelection(newSelection);
    }

    function selectAll() {
        var repdataFiltered = repdata.filter((x) => passFilters(filters, x['artist'], x['bt'], x['nbt'], x['tags']));
        setSelection(repdataFiltered.map((r) => {
            return {
                artist: r['artist'], name: r['name']
            }
        }));
    }
    function deselectAll() {
        setSelection([]);
    }

    function exportSelection() {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(selection, null, 2));
        var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", "selection.txt");
        dlAnchorElem.click();
    }

    function updateFilters(name, value) {
        var matchFilters = filters.filter((f) => (f['name'] === name) && (f['value'] === value));
        
        if (matchFilters.length > 0) {
            setFilters(filters.filter((f) => (f['name'] !== name) || (f['value'] !== value)));
            return;
        }

        var newFilters = filters.slice().concat([{
            'name': name,
            'value': value
        }])
        setFilters(newFilters);
    }

    var allTags = [...new Set(repdata.map((item) => item['tags']).flat())];
    allTags.sort();

    var noFilters = <div className="active-filter">
        No filters
    </div>

    return (
        <>
            <div className="section-title">
                My repertoire
            </div>
            <div className="repe-intro">
                <p>
                    Below is a (rather long) list of songs I play, have playes, or are
                    planning to play - on open mics, gigs or when busking. 
                </p>
                <p>
                    Some of them require a backing track or accompaniment, but for most songs
                    I have a version which does not require a backing track - singing, guitar and a
                    loop station are enough. Many of the songs can be also done in a pure acoustic
                    version.
                </p>

                <a className="repe-button" onClick={() => selectAll()}>Select all</a>
                <a className="repe-button" onClick={() => deselectAll()}>Deselect all</a>
                <a className="repe-button" onClick={() => exportSelection()}>Export selection</a>
                <a id="downloadAnchorElem"></a>
            </div>
            <div className="repe-top row">
                <div className="col-sm-4">
                    <hr></hr>
                    <span className="active-filters-heading">Active filters</span>
                    {filters.length === 0 ? noFilters : <></>}
                    {filters.map((f) => {
                        var value = f['value'];
                        var text = value;
                        if (f['name'] === 'artist') {
                            text = `Only artist "${value}"`;
                        }
                        if (f['name'] === 'tag') {
                            text = <>Tag <Tag tagMap={tagMap} value={value} updateFilters={updateFilters}/></>
                        }
                        if (f['name'] === 'orig') {
                            text = value ? 'Only originals' : 'Only covers';
                        }
                        if (f['name'] === 'bt') {
                            text = value ? 'Has backing track version' : 'Does not have backing track version';
                        }
                        if (f['name'] === 'nbt') {
                            text = value ? 'Has non-backing track version' : 'Does not have non-backing track version';
                        }

                        return <div className="active-filter" onClick={() => updateFilters(f['name'], f['value'])}>
                            <span>{text}</span>
                            <span className="remove-filter">{cross}</span>
                        </div>
                    })}
                </div>
                <div className="col-sm-8">
                    <hr></hr>
                    <span className="tags-heading">Tags explained</span>
                    {allTags.map((value) => {
                        return <div className="tag-div row">
                            <div className="col-3">
                                <div className="tag-float-right">
                                    <Tag tagMap={tagMap} value={value} updateFilters={updateFilters}/>
                                </div>
                            </div>
                            <div className="col-9">
                                {tagMap[value]['full']}
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <table className="repertoire-tbl">
                <thead>
                <tr>
                    <th className="th-artist"><div><span>Artist</span></div></th>
                    <th className="th-song"><div><span>Song</span></div></th>
                    <th className="th-props"><div><span>Props</span></div></th>
                    <th className="th-tags"><div><span>Tags</span></div></th>
                </tr>
                </thead>
                <tbody>
                {repdata.map((item) => <Item 
                    key={item['name'] + item['artist']}
                    artist={item['artist']} 
                    name={item['name']} 
                    bt={item['bt']} 
                    nbt={item['nbt']} 
                    tags={item['tags']}
                    filters={filters}
                    updateFilters={updateFilters}
                    selection={selection}
                    updateSelection={updateSelection}
                ></Item>)}
                </tbody>
            </table>
        </> 
    );
}
  