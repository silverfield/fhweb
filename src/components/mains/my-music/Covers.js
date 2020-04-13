import {Section, Tag, YouTube} from '../../../helpers/my-music-helper'
import {useState} from "react"
import {useEffect} from "react"

var allTagsAccumulator = [];

function CoverSection(
    props
) {
    return <Section 
        allTagsAccumulator={allTagsAccumulator} {...props} 
    />
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
                    have never gotten to this point without the inspirations of Mark Knopfler, 
                    John Mayer or others. Trying to work out what it is that makes their music
                    so appealing and attempting to reproduce that is essentially how one creates
                    their own style. 
                </p>
                <p>    
                    Here is some more complete cover work thatI've done.
                    For more frequent updates, check out my 
                    Instagram <a href="https://www.instagram.com/fero.hajnovic">@fero.hajnovic</a> or 
                    the <a href="https://www.youtube.com/channel/UCbFZJZ1bf8nMcLPJie5-mTA">YouTube channel</a> .
                </p>

                <p>
                    Enjoy :-)
                </p>

                <hr></hr>

                Filter tags: {allTags.map((t, i) => <Tag key={i} tag={t} updateTags={updateTags} selectedTags={selectedTags} />)}
            </div>
            
            <CoverSection 
                name="John Mayer - I guess I just feel like"
                date="2020-03-30"
                tags={["john mayer", "video", "studio", "multicam"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img" style={{'width': '50%'}}>
                    <YouTube id="iljOosYxryo"/>
                </div>

                Cover of another gem by John Mayer. Ever since it came out in 2019,
                it's my go-to song for almost any mood. Simple, beautiful, inspiring. 
                And yes, Covid-19 self-isolation played its part prompting me to 
                record something!
            </CoverSection>

            <CoverSection 
                name="John Mayer - Age of worry"
                date="2019-12-01"
                tags={["john mayer", "video", "studio", "multicam"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img" style={{'width': '50%'}}>
                    <YouTube id="XrU3ymYz5i4"/>
                </div>

                Smile in the Age of worry! <br/> <br/>

                Beautiful song by John Mayer, one that was - for some reason - 
                stuck in my mind for the whole Annapurna circuit trek in Nepal... 
                Maybe it's the "Sleep where darkness falls!" - just like we (kind of) did on the trek!
            </CoverSection>

            <CoverSection 
                name="Anthony Hamilton - Freedom (Django Unchaind soundtrack)"
                date="2019-10-13"
                tags={["video", "loop"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                 <div className="float-img" style={{'width': '50%'}}>
                    <YouTube id="hqJ7fK3WvUQ"/>
                </div>

                A song I covered just before leaving for a month in Nepal - "I'm looking for freedom"...
                Awesome energetic song from the Django Unchained soundtrack.  <br/> <br/>

                Played on Klos electro acoustic travel guitar
            </CoverSection>

            <CoverSection 
                name="Mark Knopfler - Heart full of holes"
                date="2019-08-11"
                tags={["mark knopfler", "video", "studio", "multicam"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img" style={{'width': '50%'}}>
                    <YouTube id="0Y9qdeyc61E"/>
                </div>

                A song I covered just after my 30th birthday. Maybe I'm not yet 
                battered and old - but I love this one by 
                Mark and it speaks from the heart, be it full of holes, or not.
            </CoverSection>

            <CoverSection 
                name="Dire Straits - Going home"
                date="2019-06-09"
                tags={["dire straits", "video", "live", "cardiff"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img" style={{'width': '50%'}}>
                    <YouTube id="kTik4R52nQI"/>
                </div>

                The rocky version of Local Hero, and it really packs a punch this song!  <br/> <br/>

                Live from busking at Cardiff Queen Street, 9. June 2019 <br/> <br/>

                Played on Michael Kelly Telecaster 1957, using Wampler Ego compressor.
            </CoverSection>

            <CoverSection 
                name="Mark Knopfler - Matchstick Man"
                date="2019-06-01"
                tags={["mark knopfler", "video", "live", "cardiff"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img" style={{'width': '50%'}}>
                    <YouTube id="OBuieIN31C0"/>
                </div>

                Beautiful song, for me one of the pinnacles of song-writing - stripped down, 
                minimalistic, yet with atmosphere and a story to tell. 
                True kudos to Mark for this gem. <br/> <br/>

                Live from busking at Cardiff Queen Street, 1. June 2019 <br/> <br/>

                Played on Klos electro-acoustic carbon body travel guitar <br/>
                Wampler Ego compressor
            </CoverSection>

            <CoverSection 
                name="John Mayer - Crossroads"
                date="2019-05-27"
                tags={["john mayer", "video", "studio"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img" style={{'width': '50%'}}>
                    <YouTube id="Q5jURpO9H7U"/>
                </div>

                Super jammy and bluesy song. Great to play with some delay and very 
                suitable to do with a loop station. <br/> <br/>

                Michael Kelly Telecaster 1957 <br/>
                Wampler Ego compressor <br/>
                Boss RC-30 loop station

            </CoverSection>

            <CoverSection 
                name="Dire Straits - Local Hero"
                date="2019-05-27"
                tags={["dire straits", "video", "studio"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img" style={{'width': '50%'}}>
                    <YouTube id="v0rN2LWYuNw"/>
                </div>

                Definitely one of the most beautiful melodies I've ever heard. 
                Pleasure to listen to, pleasure to play. <br/> <br/>

                Michael Kelly Telecaster 1957 <br/>
                Wampler Ego compressor
            </CoverSection>

            <CoverSection 
                name="Dire Straits - Sultans of Swing"
                date="2019-04-20"
                tags={["dire straits", "video", "live", "bristol"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img" style={{'width': '50%'}}>
                    <YouTube id="dxoeX1rm2Lk"/> 
                </div>

                Likely the most exciting song in my repertoire. An absolute 
                classic by Dire Straits, one always giving me the goosebumps when playing
                that final solo. <br/> <br/>

                20. April 2019, Bristol, Broadmead
            </CoverSection>

            <CoverSection 
                name="The Greatest Showman - This is me"
                date="2019-04-20"
                tags={["the greatest showman", "video", "live", "bristol"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img" style={{'width': '50%'}}>
                    <YouTube id="oD7RblhuIIY"/>
                </div>

                It was a scorching hot day in Bristol, but SO enjoyable to play
                on the Millenium square! The nice, chilled tune from The 
                Greatest Showman matched nicely the atmosphere on the square<br/> <br/>

                20. April 2019, Bristol harbour, Millenium square
            </CoverSection>

            <CoverSection 
                name="Dire Straits - Telegraph road"
                date="2019-04-07"
                tags={["dire straits", "video", "live", "cardiff"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img" style={{'width': '50%'}}>
                    <YouTube id="bQuox6FGerE"/> 
                </div>

                Absolute masterpiece from Mark's Dire Straits days. Love over Gold 
                album is the point in Dire Straits history where 
                things started to get really interesting for me. Telegraph road is also
                the very first song I heard from Dire Straits - one that "did it for me" (
                check out <a href="#/about">about me section</a> where I write about this some more). <br/> <br/>

                Simply epic song. <br/>

                7. April 2019, Cardiff, The Hayes
            </CoverSection>

            <CoverSection 
                name="A Star is Born - Shallow"
                date="2019-03-30"
                tags={["a star is born", "video", "live", "cardiff"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img" style={{'width': '50%'}}>
                    <YouTube id="2K263TwzKFQ"/>
                </div>

                Spring of 2019 was the best busking period in my life. Somehow, all the stars aligned: 
                weather was nice, there were no restrictions on busking in Cardiff city centre yet, the 
                "contactless wave" was still not fully there yet. Finally, some musicals like A Star is born
                were still fresh in people's minds - and so this was one of the popular ones to play.
                <br/> <br/>

                30. March 2019, Cardiff, The Hayes
            </CoverSection>
        </> 
    );
}
  