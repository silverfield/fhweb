import {PageSection} from '../../../helpers/combo-helper'
import {useState} from "react"
import {useEffect} from "react"

var allTagsAccumulator = [];

function Section({
    name,
    date,
    tags,
    children
}) {
    tags.forEach(tag => {
        if (!allTagsAccumulator.includes(tag)) {
            allTagsAccumulator.push(tag);
        }
    });
    
    let headerExtra = <>
        <div className="section-extra">
            {tags.map((t, i) => <Tag key={i} text={t}/>)} 
            &nbsp;
            <span className="news-date">{date}</span>
        </div>
    </>

    return <>
        <PageSection name={name} headerExtra={headerExtra}>
            {children}
        </PageSection>
    </>
}    

function Tag({
    text
}) {
    return <div className="inline-flex">
        <div className="section-tag">
            {text}
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

    return (
        /*
        * Sound cloud playlist - studio, live
        You tube stuff
        */

        <>
            <div className="section-title">
                Covers
            </div>

            <div>
                <p>
                    Content coming soon!
                </p>

                {allTags.map((t, i) => <Tag key={i} text={t} />)}
            </div>
            
            <Section 
                name="John Mayer - I guess I just feel like"
                date="2020-03-30"
                tags={["john mayer", "video", "studio"]}
            >
            </Section>

            <Section 
                name="John Mayer - Age of worry"
                date="2019-12-01"
                tags={["john mayer", "video", "studio"]}
            >
            </Section>

            <Section 
                name="Mark Knopfler - Heart full of holes"
                date="2019-12-01"
                tags={["mark knopfler", "video", "studio"]}
            >
            </Section>

            <Section 
                name="Dire Straits - Sultans of Swing"
                date="2019-12-01"
                tags={["mark knopfler", "video", "studio"]}
            >
            </Section>
        </> 
    );
}
  