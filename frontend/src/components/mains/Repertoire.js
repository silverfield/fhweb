import repdataBase from '../../data/web-repe-pl-all.json'
import repdataBackground from '../../data/web-repe-pl-web-gig-background-nbt.json'
import repdataFriday from '../../data/web-repe-pl-web-gig-fri-pub-nbt.json'
import repdataOriginals from '../../data/web-repe-pl-web-gig-originals.json'
import {htmlDecode} from '../../helpers/combo-helper'
import {useState} from "react"
import {useEffect} from "react"

var tagMap = {
    'relaxed': {
        'full': 'Songs creating relaxed atmosphere (e.g. for restaurant)',
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
        'full': 'Songs I can play purely acoustically',
        'color': '#965428b9'
    },
    'instrumental': {
        'full': 'Purely instrumental songs',
        'color': '#a3a523b9'
    },
    'songwriter': {
        'full': 'Songwriter, story-telling type of songs',
        'color': '#ca3587b9'
    },
    'rocky': {
        'full': 'Loud, booming \& rocky songs',
        'color': '#6f68ceb9'
    },
    'rhythm': {
        'full': 'Rhythmic songs for vibrant venues',
        'color': '#41df41b9'
    }
}

var tick = htmlDecode('&#x2713;');
var cross = htmlDecode('&#x2717;');

function TickCross({
    yes,
    name,
    filters,
    onClickHandler
}) {
    var tooltipText = null;
    if (name === 'bt') {
        tooltipText = `${yes ? 'Has' : 'Doesn\'t have'} a backing track version`
    }
    if (name === 'nbt') {
        tooltipText = `${yes ? 'Has' : 'Doesn\'t have'} a non-backing track version`
    }
    if (name === 'orig') {
        tooltipText = `${yes ? 'Original' : 'Cover'} song`
    }
    tooltipText += ' (click to show only songs like this)'
    var isActiveTickCross = filters.filter((f) => (f['name'] === name) && (f['value'] === yes)).length > 0;

    return <>
        <span 
            className={`tickcross ${yes ? "tick" : "cross"}` + (isActiveTickCross ? ' is-active' : '')} 
            onClick={onClickHandler}
            data-toggle="tooltip" 
            title={tooltipText}
        >
            {yes ? <>{tick}</> : <>{cross}</>}
        </span>
    </>
}

function Tag({
    value,
    tagMap,
    filters,
    updateFilters
}) {
    var tooltipText = tagMap[value]['full'];
    tooltipText += ' (click to show only songs with this tag)';
    var isActiveTag = filters.filter((f) => f['name'] === 'tag' && f['value'] === value).length > 0;

    return <span 
        className={"repe-tag" + (isActiveTag ? ' is-active' : '')}
        data-toggle="tooltip" 
        title={tooltipText}
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

    var artistTooltipText = 'Click to show only this artist'

    useEffect(() => {
        $('[data-toggle="tooltip"]').tooltip();
    }, [])

    var isActiveArtist = filters.filter((f) => f['name'] === 'artist' && f['value'] === artist).length > 0;

    return <>
        <tr className={"repe-item" + (isSelected ? ' repe-selected': '')}>
            <td 
                className={"repe-artist" + (isActiveArtist ? ' is-active' : '')}
                onClick={() => updateFilters('artist', artist)}
                data-toggle="tooltip" 
                title={artistTooltipText}
            >
                {artist}
            </td>
            <td className="repe-name" onClick={() => updateSelection(artist, name)}>
                {name}
            </td>
            <td className="repe-props">
                <div className="inline-flex">
                    <TickCross 
                        yes={artist === 'Fero Hajnovic'} 
                        name="orig"
                        filters={filters}
                        onClickHandler={() => updateFilters('orig', artist === 'Fero Hajnovic')}
                    />  
                </div>
                <div className="inline-flex">
                    <TickCross 
                        yes={bt} 
                        name="bt" 
                        filters={filters}
                        onClickHandler={() => updateFilters('bt', bt)}
                    />
                </div>
                <div className="inline-flex">
                    <TickCross 
                        yes={nbt} 
                        name="nbt" 
                        filters={filters}
                        onClickHandler={() => updateFilters('nbt', nbt)}
                    />
                </div>
            </td>
            <td className="repe-tags">
                {tags.map((value, i) => {
                    return <div key={i} className="inline-flex">
                        <Tag tagMap={tagMap} value={value} filters={filters} updateFilters={updateFilters}/>
                    </div>
                })}
            </td>
        </tr>
    </>
}

function RepeIntro({
    setRepdata
}) {
    return <>
        <div className="repe-intro">
            <p>
                Below is a (rather long) list of songs I play, have played, or are
                planning to play - on open mics, gigs or when busking. 
            </p>
            <p>
                Some of the songs need a backing track or accompaniment, but for most 
                I have a version which does not require a backing track, so singing and guitar with a
                loop station are enough. Many of the songs can be also done in a pure acoustic
                version.
            </p>
            <p>
                Explore and build the repertoire you'd like me to play! 
                <li>Filter by (clicking the song's) artist, tags or attributes</li>
                <li>Build a selection by clicking the names of the song</li>
                <li>Finally, export the selection and send it to me by email</li>
            </p>
            <p>
                Or check out these predefined setlists aimed at different situations and venues:
            </p>
            <div className="predef-setlists">
                <div className="predef-set" onClick={()=>setRepdata(repdataOriginals)}>
                    The originals
                </div>

                <div className="predef-set" onClick={()=>setRepdata(repdataFriday)}>
                    Friday pub
                </div>

                <div className="predef-set" onClick={()=>setRepdata(repdataBackground)}>
                    Relaxed restaurant
                </div>

                <div className="predef-set last" onClick={()=>setRepdata(repdataBase)}>
                    Back to full list
                </div>
            </div>
        </div>
    </>
}

function RepeTop({
    repdata,
    filters,
    updateFilters,
}) {
    var allTags = [...new Set(repdata.map((item) => item['tags']).flat())];
    allTags.sort();

    return <>
        <div className="repe-top row">
            <div className="col-sm-4">
                <hr></hr>
                <span className="active-filters-heading">Active filters</span>
                {filters.length === 0 ? <div>No filters</div> : <></>}
                {filters.map((f, i) => {
                    var value = f['value'];
                    var text = value;
                    if (f['name'] === 'artist') {
                        text = `Only artist "${value}"`;
                    }
                    if (f['name'] === 'tag') {
                        text = <>Tag <Tag tagMap={tagMap} value={value} filters={filters} updateFilters={updateFilters}/></>
                    }
                    if (f['name'] === 'orig') {
                        text = value ? 'Only originals' : 'Only covers';
                    }
                    if (f['name'] === 'bt') {
                        text = value ? 'Has backing track version' : 'Doesn\'t have a backing track version';
                    }
                    if (f['name'] === 'nbt') {
                        text = value ? 'Has non-backing track version' : 'Doesn\'t have a non-backing track version';
                    }

                    return <div key={i} className="active-filter" onClick={() => updateFilters(f['name'], f['value'])}>
                        <span>{text}</span>
                        <span className="remove-filter">{cross}</span>
                    </div>
                })}
            </div>
            <div className="col-sm-8">
                <hr></hr>
                <span className="tags-heading">Tags explained</span>
                {allTags.map((value, i) => {
                    return <div key={i} className="tag-div row">
                        <div className="col-3">
                            <div className="tag-float-right">
                                <Tag tagMap={tagMap} value={value} filters={filters} updateFilters={updateFilters}/>
                            </div>
                        </div>
                        <div className="col-9">
                            {tagMap[value]['full']}
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}

function RepeTable({
    repdata,
    filters,
    updateFilters,
    selection,
    setSelection,
    updateSelection
}) {
    function getFiltered() {
        var repdataFiltered = repdata.filter((x) => passFilters(filters, x['artist'], x['bt'], x['nbt'], x['tags']));
        return repdataFiltered;
    }

    function getSelectedFiltered() {
        var filtered = getFiltered()
        return selection.filter((s) => filtered.find((f) => f['name'] === s['name'] && f['artist'] === s['artist']))
    }

    function selectAll() {
        var repdataFiltered = getFiltered()

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
        var string = ''
        for (var i in selection) {
            string += `${selection[i]['artist']} - ${selection[i]['name']}\n`
        }
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(string);
        var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", "selection.txt");
        dlAnchorElem.click();
    }

    return <>
        <div className="repe-buttons">
            <a className="repe-button" onClick={() => selectAll()}>Select all</a>
            <a className="repe-button" onClick={() => deselectAll()}>Deselect all</a>
            <a className="repe-button" onClick={() => exportSelection()}>Export selection</a>
            <a id="downloadAnchorElem"></a>
        </div>
        <div className="repe-count">
            {getFiltered().length} items, {getSelectedFiltered().length} selected
        </div>
        <table className="repertoire-tbl">
            <thead>
            <tr>
                <th className="th-artist"><div><span>Artist</span></div></th>
                <th className="th-song"><div><span>Song</span></div></th>
                <th className="th-props"><div><span>Attributes</span></div></th>
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
        <div className="repe-count">
            {getFiltered().length} items, {getSelectedFiltered().length} selected
        </div>
    </>
}

export default function Repertoire({

}) {
    repdataBase.sort((a, b) => a['artist'] - b['artist']);

    const [repdata, setRepdata] = useState(repdataBase);
    const [filters, setFilters] = useState([]);
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

    return (
        <>
            <div className="section-title">
                This is what I play
            </div>
            <RepeIntro
                setRepdata={setRepdata}
            />
            <RepeTop
                repdata={repdata}
                filters={filters}
                updateFilters={updateFilters}
            />
            <RepeTable
                repdata={repdata}
                filters={filters}
                updateFilters={updateFilters}
                selection={selection}
                setSelection={setSelection}
                updateSelection={updateSelection}
            />
        </> 
    );
}
  