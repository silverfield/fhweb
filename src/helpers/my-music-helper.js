import {PageSection} from './combo-helper'
import InstagramEmbed from 'react-instagram-embed';

export function Section({
    name,
    date,
    tags,
    selectedTags,
    updateTags,
    children,
    allTagsAccumulator
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

    return <>
        <PageSection name={name} headerExtra={headerExtra}>
            {tags.map((t, i) => <Tag key={i} tag={t} updateTags={updateTags} selectedTags={selectedTags}/>)}<br/>
            <hr></hr>
            <div>
                {children}
            </div>
        </PageSection>
    </>
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

export function YouTube({
    id
}) {
    return <>
        <div className="iframe-div">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </>
}

export function SoundCloud({
    iframeTag
}) {
    let link = iframeTag.split('src="')[1].split('"></iframe>')[0];

    return <iframe 
        width="100%" 
        height="150" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src={link}>
    </iframe>
}

export function Instagram({
    url
}) {
    return <>
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
    </>
}