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
    updateFilter
}) {
    return <span 
        className="repe-tag" 
        data-toggle="tooltip" 
        title={tagMap[value]['full']}
        style={{'backgroundColor': tagMap[value]['color']}}
        onClick={() => updateFilter('tag', value)}
    >
        {tagMap[value]['show'] ? tagMap[value]['show'] : value}
    </span>
}

function Item({
    artist,
    name,
    bt=false,
    nbt=false,
    tags=[],
    filter=null,
    updateFilter=null
}) {
    function passFilter() {
        for (var i in filter) {
            var f = filter[i];
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

    if (!passFilter()) {
        return <></>
    }

    return <>
        <tr className="repe-item">
            <td className="repe-artist" onClick={() => updateFilter('artist', artist)}>
                {artist}
            </td>
            <td className="repe-name">
                {name}
            </td>
            <td className="repe-props" onClick={() => updateFilter('orig', artist === 'Fero Hajnovic')}>
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
                        <Tag tagMap={tagMap} value={value} updateFilter={updateFilter}/>
                    </div>
                })}
            </td>
        </tr>
    </>
}

export default function Repertoire({

}) {
    repdata.sort((a, b) => a['artist'] - b['artist']);

    const [filter, setFilter] = useState([])

    function updateFilter(name, value) {
        var matchFilters = filter.filter((f) => (f['name'] === name) && (f['value'] === value));
        
        if (matchFilters.length > 0) {
            setFilter(filter.filter((f) => (f['name'] !== name) || (f['value'] !== value)));
            return;
        }

        var newFilter = filter.slice().concat([{
            'name': name,
            'value': value
        }])
        setFilter(newFilter);
    }

    var allTags = [...new Set(repdata.map((item) => item['tags']).flat())];
    allTags.sort();

    return (
        <>
            <div className="repe-top row">
                <div className="col-sm-4">
                    Active filters: {filter.length === 0 ? 'none' : ''}
                    {filter.map((f) => {
                        var name = {
                            'orig': 'Original',
                            'tag': 'Tag',
                            'artist': 'Artist',
                            'bt': 'Backing track version',
                            'nbt': 'Non-backing track version',
                        }[f['name']]

                        var value = f['value'];
                        var text = value;
                        if (f['name'] === 'artist') {
                            text = `Only artist "${value}"`;
                        }
                        if (f['name'] === 'tag') {
                            text = <>Tag <Tag tagMap={tagMap} value={value} updateFilter={updateFilter}/></>
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

                        return <div className="active-filter" onClick={() => updateFilter(f['name'], f['value'])}>
                            <span>{text}</span>
                            <span className="remove-filter">{cross}</span>
                        </div>
                    })}
                    <hr></hr>
                </div>
                <div className="col-sm-8">
                    {allTags.map((value) => {
                        return <div className="tag-div row">
                            <div className="col-3">
                                <div className="tag-float-right">
                                    <Tag tagMap={tagMap} value={value} updateFilter={updateFilter}/>
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
                    filter={filter}
                    updateFilter={updateFilter}
                ></Item>)}
                </tbody>
            </table>
        </> 
    );
}
  