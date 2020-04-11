import {PageSection} from '../../../helpers/combo-helper'
import {useState} from "react"
import {useEffect} from "react"

var allTagsAccumulator = [];

function Section({
    name,
    date,
    tags,
    selectedTags,
    updateTags,
    children
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

function Tag({
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

export default function Covers({

}) {
    const [allTags, setAllTags] = useState([]);
    useEffect(() => {
        setAllTags(allTagsAccumulator);
    }, [])

    const [selectedTags, setSelectedTags] = useState([]);

    function updateTags(tag) {
        let newSelectedTags;

        if (selectedTags.includes(tag)) {
            newSelectedTags = selectedTags.filter((t) => t != tag);
        }
        else {
            newSelectedTags = selectedTags.slice();
            newSelectedTags.push(tag);
        }

        setSelectedTags(newSelectedTags);
    }

    return (
        <>
            <div className="section-title">
                Covers
            </div>

            <div>
                <p>
                    Although I am increasingly focusing on (and enjoying) my own work, I would 
                    have never gotten to this point without inspirations of Mark Knopfler, 
                    John Mayer or others. Trying to work out what it is that makes your idol's music
                    so appealing and attempting to reproduce that is essentially how one creates
                    their own style in the end. Here is some more complete cover work I've done, 
                    for more frequent updates, check out my 
                    Instagram <a href="https://www.instagram.com/fero.hajnovic">@fero.hajnovic</a> or 
                    <a href="https://www.youtube.com/channel/UCbFZJZ1bf8nMcLPJie5-mTA">YouTube channel</a> .
                </p>

                <p>
                    Enjoy :-)
                </p>

                <hr></hr>

                Filter tags: {allTags.map((t, i) => <Tag key={i} tag={t} updateTags={updateTags} selectedTags={selectedTags} />)}
            </div>
            
            <Section 
                name="John Mayer - I guess I just feel like"
                date="2020-03-30"
                tags={["john mayer", "video", "studio", "multicam"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img" style={{'width': '50%'}}>
                    <div className="iframe-div">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/iljOosYxryo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

                Cover of another gem by John Mayer. Ever since it came out in 2019,
                it's my go-to song for almost any mood. Simple, beautiful, inspiring. 
                And yes, Covid-19 self-isolation played its part prompting me to 
                record something!
            </Section>

            <Section 
                name="John Mayer - Age of worry"
                date="2019-12-01"
                tags={["john mayer", "video", "studio", "multicam"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img float-right" style={{'width': '50%'}}>
                    <div className="iframe-div">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/XrU3ymYz5i4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                Smile in the Age of worry!

                Beautiful song by John Mayer, one that was - for some reason - 
                stuck in my mind for the whole Annapurna circuit trek in Nepal... 
                Maybe it's the "Sleep where darkness falls!" - just like we did.
            </Section>

            <Section 
                name="Anthony Hamilton - Freedom (Django Unchaind soundtrack)"
                date="2019-11-29"
                tags={["video", "loop"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                 <div className="float-img float-right" style={{'width': '50%'}}>
                    <div className="iframe-div">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/hqJ7fK3WvUQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                "I'm looking for freedom"... Awesome energetic song from Django Unchained soundtrack. 

                Played on Klos electro acoustic travel guitar
            </Section>

            <Section 
                name="Mark Knopfler - Heart full of holes"
                date="2019-12-01"
                tags={["mark knopfler", "video", "studio", "multicam"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img float-right" style={{'width': '50%'}}>
                    <div className="iframe-div">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/0Y9qdeyc61E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                Maybe I'm not yet battered and old - but I love this song by 
                Mark and it speaks from the heart, be it full of holes, or not.
            </Section>

            <Section 
                name="Dire Straits - Going home"
                date="2019-06-09"
                tags={["dire straits", "video", "live", "cardiff"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img float-right" style={{'width': '50%'}}>
                    <div className="iframe-div">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/kTik4R52nQI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                The rocky version of Local Hero, and it really packs a punch this song! 

                Live from busking at Cardiff Queen Street, 9. June 2019

                Played on Michael Kelly Telecaster 1957, using Wampler Ego compressor.
            </Section>

            <Section 
                name="Mark Knopfler - Matchstick Man"
                date="2019-06-01"
                tags={["mark knopfler", "video", "live", "cardiff"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img float-right" style={{'width': '50%'}}>
                    <div className="iframe-div">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/OBuieIN31C0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                Beautiful song, for me one of pinnacles of song-writing - stripped down, 
                minimalistic, yet with atmosphere and a story to tell. True kudos to Mark for this gem.

                Live from busking at Cardiff Queen Street, 1. June 2019

                Played on Klos electro-acoustic carbon body travel guitar
                Wampler Ego compressor
            </Section>

            <Section 
                name="John Mayer - Crossroads"
                date="2019-05-27"
                tags={["john mayer", "video", "studio"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img float-right" style={{'width': '50%'}}>
                    <div className="iframe-div">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Q5jURpO9H7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                Super jammy and bluesy song. Great to play with some delay and very 
                suitable to use with loop station.

                Michael Kelly Telecaster 1957
                Wampler Ego compressor
                Boss RC-30 loop station

            </Section>
        </> 
    );
}
  