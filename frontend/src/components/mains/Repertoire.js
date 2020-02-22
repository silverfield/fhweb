import repdata from '../../data/repertoire.json'

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
                {name === 'Fero Hajnovic' ? <>&#10004;</> : <>&#10007;</>}
            </td>
            <td className="repe-bt">
                {bt ? <>&#10004;</> : <>&#10007;</>}
            </td>
            <td className="repe-nbt">
                {nbt ? <>&#10004;</> : <>&#10007;</>}
            </td>
            <td className="repe-tags">
                {tags.map((value) => <><span className="repe-tag">{value}</span>, </>)}
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
                <tr>
                    <th><div><span>Artist</span></div></th>
                    <th><div><span>Song</span></div></th>
                    <th className="rotate"><div><span>Original</span></div></th>
                    <th className="rotate"><div><span>BT version</span></div></th>
                    <th className="rotate"><div><span>Non BT version</span></div></th>
                    <th><div><span>Tags</span></div></th>
                </tr>
                {repdata.map((item) => <Item 
                    interpret={item['interpret']} 
                    name={item['name']} 
                    bt={item['bt']} 
                    nbt={item['nbt']} 
                    tags={item['tags']} 
                ></Item>)}
            </table>
        </> 
    );
}
  