import InstagramEmbed from 'react-instagram-embed';
import $ from "jquery";

export function randomId() {
    return 'a' + Math.random().toString(36).substr(2, 9);
};
  

export function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

export function PageSection({
    name,
    headerExtra=null,
    children
}) {
    return <>
        <div className="page-section">
            <div className="section-header">
                <span className="page-sec-title">{name}</span>{headerExtra}
            </div>
            {children}
        </div>
    </>
}

export function TagSection({
    name,
    date,
    tags,
    selectedTags,
    updateTags,
    allTagsAccumulator,
    flexi=false,
    children,
}) {
    tags.forEach(tag => {
        if (!allTagsAccumulator.includes(tag)) {
            allTagsAccumulator.push(tag);
        }
    });
    
    let headerExtra = <>
        <div className="section-extra">
            <span className="news-date">{date}</span>
        </div>
    </>

    let showSection = (selectedTags.every((tag) => tags.includes(tag))) || (selectedTags.length == 0);
    if (!showSection) {
        return <></>
    }

    let bodyTag = children;
    if (flexi === true) {
        bodyTag = <div className="flex-container">
            {bodyTag}
        </div>
    }

    return <>
        <PageSection name={name} headerExtra={headerExtra}>
            <div style={{'display': 'block'}}>
                {tags.map((t, i) => <Tag key={i} tag={t} updateTags={updateTags} selectedTags={selectedTags}/>)}<br/>
                <hr></hr>
                {bodyTag}
            </div>
        </PageSection>
    </>
}

export function FlexContainer({
    children
}) {
    return <div className="flex-container">
        {children}
    </div>
}

export function Tag({
    tag,
    updateTags,
    selectedTags
}) {
    let isActiveTag = selectedTags.includes(tag);

    return <div className="inline-flex">
        <div 
            className={"section-tag" + (isActiveTag ? " is-active" : '')} 
            onClick={() => updateTags(tag)}
            data-toggle="tooltip" 
            title={`Filter for items tagged with "${tag}"`}
        >
            {tag}
        </div>
    </div>
}

export function InText({
    float=null,
    width='100%',
    minWidth=null,
    minHeight=null,
    children
}) {
    let style = {};
    if (float) {
        style['float'] = float;
    }
    if (width) {
        style['width'] = width;
    }
    if (minWidth) { 
        style['minWidth'] = minWidth;
    }
    if (minHeight) {
        style['minHeight'] = minHeight;
    }

    return <div className="in-text" style={style}>
        {children}
    </div>
}

export function Image({
    imgSrc,
    caption=null
}) {
    let captionTag = <></>
    if (caption !== null) {
        captionTag = <figcaption className="caption">
            {caption}
        </figcaption>
    }

    return <figure>
        <img src={imgSrc} />
        {captionTag}
    </figure>
}

export function YouTube({
    id,
    caption=null
}) {
    return <div>
        <div className="iframe-div">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        {caption ? <div className='caption'>{caption}</div> : <></>}
    </div>
}

export function SoundCloud({
    iframeTag,
    bckLink,
}) {
    let link = iframeTag.split('src="')[1].split('"></iframe>')[0];

    let bckLinkTag = <div className="soundcloud-bck">
        If the SoundCloud content above does not load, click <a href={bckLink}>here</a>
    </div>

    return <div className="soundcloud-wrap">
        <iframe 
            width="100%" 
            height="150" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src={link}>
        </iframe>
        {bckLink ? bckLinkTag : <></>}
    </div>
}

export function Instagram({
    url,
}) {
    return <div className="instagram-wrap">
        <InstagramEmbed
            url={url}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
        />
    </div>
}

export function Text({
    children
}) {
    return <div className="text">
        {children}
    </div>
}

export function Part({
    proportion,
    minWidth=null,
    children
}) {
    let style = {
        'flexBasis': `${proportion*100}%`
    };
    if (minWidth) {
        style['minWidth'] = minWidth;
    }

    return <div className="flex-part" style={style}>
        {children}
    </div>
}