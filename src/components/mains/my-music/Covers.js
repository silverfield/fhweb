import {TagSection, Part, InText, Text, Image, Tag, YouTube, SoundCloud, Instagram} from '../../../helpers/combo-helper'
import {useState} from "react"
import {useEffect} from "react"

var allTagsAccumulator = [];

function CoverSection(
    props
) {
    return <TagSection 
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
            <div className="page-title">
                Covers
            </div>

            <div>
                <p>
                    Although I am increasingly focusing on my own work, I would 
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

                <hr></hr>

                Filter tags: {allTags.map((t, i) => <Tag key={i} tag={t} updateTags={updateTags} selectedTags={selectedTags} />)}
            </div>

            <CoverSection 
                name="Summer busking 2020"
                date="2020-08"
                tags={["mark knopfler", "video", "live", "cardiff", "bath", "london"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="flex-container">
                    <Part proportion='0.5' minWidth="200px">
                        <InText>
                            <YouTube id="l0NAJsgFK-g" caption="Busking in Cardiff: Dire Straits - Telegraph road"/>
                        </InText>
                    </Part>
                    <Part proportion='0.5' minWidth="200px">
                        <InText>
                            <YouTube id="fhDL-A-B62s" caption="Busking in Cardiff: The Notting Hillbillies - Feel like going home"/>
                        </InText>
                    </Part>
                </div>

                <div className="flex-container">
                    <Part proportion='0.5' minWidth="200px">
                        <InText>
                            <YouTube id="VZiMaWtuSuU" caption="Busking in Bath: Dire Straits - Brothers in Arms"/>
                        </InText>
                    </Part>
                    <Part proportion='0.5' minWidth="200px">
                        <InText>
                            <YouTube id="A2ZGRJwQp-A" caption="Busking in London: Mark Knopfler - Darling Pretty"/>
                        </InText>
                    </Part>
                </div>

                <div className="flex-container">
                    <Part proportion='0.5' minWidth="200px">
                        <InText>
                            <YouTube id="tMwywoVVSkI" caption="Busking in Cardiff: Fero Hajnovic - Hey Dad"/>
                        </InText>
                    </Part>
                    <Part proportion='0.5' minWidth="200px">
                        <InText>
                            <YouTube id="Jn6upYKiBQQ" caption="Busking in Cardiff: Mark Knopfler - Get Lucky"/>
                        </InText>
                    </Part>
                </div>

                <Text>
                    <p>
                        I had a great time busking this summer, despite the Covid-19 pandemic still in full swing.
                        Yet, the lockdowns were lifted temporarily during July and August and there was a certain
                        vibe of optimism in the air. 
                    </p>
                    
                    <p>
                        With the new Michael Kelly 1965 Stratocaster and the awesome Hotone Ampero One multieffect,
                        I was keen to put them to action in some new (Bath, Oxford) as well as good old (Cardiff) 
                        locations :-)
                    </p>
                </Text>
            </CoverSection>

            <CoverSection 
                name="Busking around London"
                date="2020-05-31"
                tags={["mark knopfler", "video", "live"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="flex-container">
                    <Part proportion='0.5' minWidth="200px">
                        <InText>
                            <YouTube id="CuECCdsjTkE" caption="Busking in Cambridge: Mark Knopfler - Golden Heart (custom lyrics)"/>
                        </InText>
                    </Part>
                    <Part proportion='0.5' minWidth="200px">
                        <InText>
                            <YouTube id="hynRiLvpNYc" caption="Busking in Brighton: Mark Knopfler - Local Hero"/>
                        </InText>
                    </Part>
                </div>

                <Text>
                    <p>
                        Finally back to busking, this time in the towns around London! A trio of venues was 
                        completed with playing first in 
                        Guildford, then on the Brighton beach and finally on Kings's parade in Cambridge. 
                    </p>
                    
                    <p>
                        Both songs above are played on Michael Kelly Telecaster 1957.
                    </p>
                </Text>
            </CoverSection>

            <CoverSection 
                name="Dire Straits - Telegraph road (outro)"
                date="2020-05-02"
                tags={["dire straits", "video", "studio"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText float='left' width='50%' minWidth='300px'>
                    <YouTube id="dlPK0Jfjtbo"/>
                </InText>

                <Text>
                    <p>
                        Absolutely epic outro of incredible song - the most exciting solo that I know of. 
                        Mark played this version in 2005. The licks he put in there are simply ingenious. 
                        Hope you enjoy my humble attempt at reproducing the maestro.
                    </p>
                    
                    <p>
                        Played on Michael Kelly Telecaster 1957, using Wampler Ego compressor, 
                        Boss OD-3 overdrive and Boss Rv-6 reverb
                    </p>
                </Text>
            </CoverSection>
            
            <CoverSection 
                name="Mark Knopfler - Sailing to Philadelphia"
                date="2020-04-27"
                tags={["mark knopfler", "video", "studio", "multicam"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText float='left' width='50%' minWidth='300px'>
                    <YouTube id="8aCJvAg_MAQ"/>
                </InText>

                <Text>
                    In the middle of the Covid-19 quarantine, we sailed to Philadelphia.

                    A beautiful song, made even more beautiful with Ruth's, Ellie's and 
                    Matt's vocals and harmonies.

                    I've always wanted to record this one with them, but it was 
                    difficult to find a time everyone would be free. 
                    Well, a dream came true during the quarantine - 
                    who says we need to be at the same place recording? ;-)
                </Text>
            </CoverSection>

            <CoverSection 
                name="John Mayer - I guess I just feel like"
                date="2020-03-30"
                tags={["john mayer", "video", "studio", "multicam"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText float='left' width='50%' minWidth='300px'>
                    <YouTube id="iljOosYxryo"/>
                </InText>

                <Text>
                    Cover of another gem by John Mayer. Ever since it came out in 2019,
                    it's my go-to song for almost any mood. Simple, beautiful, inspiring. 
                    And yes, Covid-19 self-isolation played its part prompting me to 
                    record something!
                </Text>
            </CoverSection>

            <CoverSection 
                name="John Mayer - Age of worry"
                date="2019-12-01"
                tags={["john mayer", "video", "studio", "multicam"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText float='left' width='50%' minWidth='300px'>
                    <YouTube id="XrU3ymYz5i4"/>
                </InText>

                <Text>
                    Smile in the Age of worry! <br/> <br/>

                    Beautiful song by John Mayer, one that was - for some reason - 
                    stuck in my mind for the whole Annapurna circuit trek in Nepal... 
                    Maybe it's the "Sleep where darkness falls!" - just like we (kind of) did on the trek!
                </Text>
            </CoverSection>

            <CoverSection 
                name="Anthony Hamilton - Freedom (Django Unchaind soundtrack)"
                date="2019-10-13"
                tags={["video", "loop"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                 <InText float='left' width='50%' minWidth='300px'>
                    <YouTube id="hqJ7fK3WvUQ"/>
                </InText>

                <Text>
                    A song I covered just before leaving for a month in Nepal - "I'm looking for freedom"...
                    Awesome energetic song from the Django Unchained soundtrack.  <br/> <br/>

                    Played on Klos electro acoustic travel guitar
                </Text>
            </CoverSection>

            <CoverSection 
                name="Mark Knopfler - Heart full of holes"
                date="2019-08-11"
                tags={["mark knopfler", "video", "studio", "multicam"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText float='left' width='50%' minWidth='300px'>
                    <YouTube id="0Y9qdeyc61E"/>
                </InText>

                <Text>
                    A song I covered just after my 30th birthday. Maybe I'm not yet 
                    battered and old - but I love this one by 
                    Mark and it speaks from the heart, be it full of holes, or not.
                </Text>
            </CoverSection>

            <CoverSection 
                name="Dire Straits - Going home"
                date="2019-06-09"
                tags={["dire straits", "video", "live", "cardiff"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText float='left' width='50%' minWidth='300px'>
                    <YouTube id="kTik4R52nQI"/>
                </InText>

                <Text>
                    The rocky version of Local Hero, and it really packs a punch this song!  <br/> <br/>

                    Live from busking at Cardiff Queen Street, 9. June 2019 <br/> <br/>

                    Played on Michael Kelly Telecaster 1957, using Wampler Ego compressor.
                </Text>
            </CoverSection>

            <CoverSection 
                name="Mark Knopfler - Matchstick Man"
                date="2019-06-01"
                tags={["mark knopfler", "video", "live", "cardiff"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText float='left' width='50%' minWidth='300px'>
                    <YouTube id="OBuieIN31C0"/>
                </InText>

                <Text>
                    Beautiful song, for me one of the pinnacles of song-writing - stripped down, 
                    minimalistic, yet with atmosphere and a story to tell. 
                    True kudos to Mark for this gem. <br/> <br/>

                    Live from busking at Cardiff Queen Street, 1. June 2019 <br/> <br/>

                    Played on Klos electro-acoustic carbon body travel guitar <br/>
                    Wampler Ego compressor
                </Text>
            </CoverSection>

            <CoverSection 
                name="John Mayer - Crossroads"
                date="2019-05-27"
                tags={["john mayer", "video", "studio"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText float='left' width='50%' minWidth='300px'>
                    <YouTube id="Q5jURpO9H7U"/>
                </InText>

                <Text>
                    Super jammy and bluesy song. Great to play with some delay and very 
                    suitable to do with a loop station. <br/> <br/>

                    Michael Kelly Telecaster 1957 <br/>
                    Wampler Ego compressor <br/>
                    Boss RC-30 loop station
                </Text>
            </CoverSection>

            <CoverSection 
                name="Dire Straits - Local Hero"
                date="2019-05-27"
                tags={["dire straits", "video", "studio"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText float='left' width='50%' minWidth='300px'>
                    <YouTube id="v0rN2LWYuNw"/>
                </InText>

                <Text>
                    Definitely one of the most beautiful melodies I've ever heard. 
                    Pleasure to listen to, pleasure to play. <br/> <br/>

                    Michael Kelly Telecaster 1957 <br/>
                    Wampler Ego compressor
                </Text>
            </CoverSection>

            <CoverSection 
                name="Dire Straits - Sultans of Swing"
                date="2019-04-20"
                tags={["dire straits", "video", "live", "bristol"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText float='left' width='50%' minWidth='300px'>
                    <YouTube id="dxoeX1rm2Lk"/> 
                </InText>

                <Text>
                    Likely the most exciting song in my repertoire. An absolute 
                    classic by Dire Straits, one always giving me the goosebumps when playing
                    that final solo. <br/> <br/>

                    20. April 2019, Bristol, Broadmead
                </Text>
            </CoverSection>

            <CoverSection 
                name="The Greatest Showman - This is me"
                date="2019-04-20"
                tags={["the greatest showman", "video", "live", "bristol"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText float='left' width='50%' minWidth='300px'>
                    <YouTube id="oD7RblhuIIY"/>
                </InText>

                <Text>
                    It was a scorching hot day in Bristol, but SO enjoyable to play
                    on the Millenium square! The nice, chilled tune from The 
                    Greatest Showman matched nicely the atmosphere on the square<br/> <br/>

                    20. April 2019, Bristol harbour, Millenium square
                </Text>
            </CoverSection>

            <CoverSection 
                name="Dire Straits - Telegraph road"
                date="2019-04-07"
                tags={["dire straits", "video", "live", "cardiff"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText float='left' width='50%' minWidth='300px'>
                    <YouTube id="bQuox6FGerE"/> 
                </InText>

                <Text>
                    Absolute masterpiece from Mark's Dire Straits days. Love over Gold 
                    album is the point in Dire Straits history where 
                    things started to get really interesting for me. Telegraph road is also
                    the very first song I heard from Dire Straits - one that "did it for me" (
                    check out <a href="#/about">about me section</a> where I write about this some more). <br/> <br/>

                    Simply epic song. <br/>

                    7. April 2019, Cardiff, The Hayes
                </Text>
            </CoverSection>

            <CoverSection 
                name="A Star is Born - Shallow"
                date="2019-03-30"
                tags={["a star is born", "video", "live", "cardiff"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText float='left' width='50%' minWidth='300px'>
                    <YouTube id="2K263TwzKFQ"/>
                </InText>

                <Text>
                    Spring of 2019 was the best busking period in my life. Somehow, all the stars aligned: 
                    weather was nice, there were no restrictions on busking in Cardiff city centre yet, the 
                    "contactless wave" was still not fully there yet. Finally, some musicals like A Star is born
                    were still fresh in people's minds - and so this was one of the popular ones to play.
                    <br/> <br/>

                    30. March 2019, Cardiff, The Hayes
                </Text>
            </CoverSection>
        </> 
    );
}
  