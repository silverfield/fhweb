import repdata from '../../data/repertoire.json'
import {htmlDecode} from '../../helpers/combo-helper'  

var tagMap = {
    'ambient': {
        'full': 'Songs for ambient atmosphere',
        'color': '#7ed4e9b9'
    },
    'dsmk': {
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
        'color': '#8f9122b9'
    },
    'songwrite': {
        'full': 'Songwriter type of songs',
        'color': '#ca3587b9'
    },
    'rocky': {
        'full': 'Loud, booming \& rocky songs',
        'color': '#4b41dfb9'
    },
    'rhythm': {
        'full': 'Rhythmic songs, suitable for Fri/Sat evening',
        'color': '#41df41b9'
    }
}

function TickCross({
    yes,
    name
}) {
    var tick = htmlDecode('&#x2713;');
    var cross = htmlDecode('&#x2717;');

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

function Item({
    interpret,
    name,
    bt=false,
    nbt=false,
    tags=[]
}) {
    return <>
        <tr className="repe-item">
            <td className="repe-interpret">
                {interpret}
            </td>
            <td className="repe-name">
                {name}
            </td>
            <td className="repe-orig">
                <TickCross yes={name === 'Fero Hajnovic'} name="Original" />
            </td>
            <td className="repe-bt">
                <TickCross yes={bt} name="Backing track version" />
            </td>
            <td className="repe-nbt">
                <TickCross yes={nbt} name="Non-backing track version" />
            </td>
            <td className="repe-tags">
                {tags.map((value, i) => {
                    return <>
                        <span 
                            className="repe-tag" 
                            data-toggle="tooltip" 
                            title={tagMap[value]['full']}
                            style={{'background-color': tagMap[value]['color']}}
                        >
                            {value}
                        </span>
                    </>
                })}
            </td>
        </tr>
    </>
}

export default function Repertoire({

}) {
    repdata.sort((a, b) => a['interpret'] - b['interpret']);

    return (
        <>
            <table className="repertoire-tbl">
                <thead>
                <tr>
                    <th><div><span>Artist</span></div></th>
                    <th><div><span>Song</span></div></th>
                    <th className="rotate"><div><span>Original</span></div></th>
                    <th className="rotate"><div><span>BT version</span></div></th>
                    <th className="rotate"><div><span>Non BT version</span></div></th>
                    <th><div><span>Tags</span></div></th>
                </tr>
                </thead>
                <tbody>
                {repdata.map((item) => <Item 
                    key={item['name'] + item['interpret']}
                    interpret={item['interpret']} 
                    name={item['name']} 
                    bt={item['bt']} 
                    nbt={item['nbt']} 
                    tags={item['tags']}
                ></Item>)}
                </tbody>
            </table>
        </> 
    );
}
  