import {Part, Text, TagSection, Tag, YouTube, SoundCloud, Instagram, InText} from '../../../helpers/combo-helper'
import {useState} from "react"
import {useEffect} from "react"

var allTagsAccumulator = [];

function OriginalsSection(
    props
) {
    return <TagSection 
        allTagsAccumulator={allTagsAccumulator} {...props} 
    />
}

export default function Originals({

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
                Other originals
            </div>

            <div>
                <p>
                    Although most of my original stuff is part of my first <a href="#my-music/everyday">demo 
                    album Everyday</a>, there's still some more stuff - other studio songs or 
                    live versions of the songs on the demo album. Expect this section to grow substantially :-)
                </p>

                <hr></hr>

                Filter tags: {allTags.map((t, i) => <Tag key={i} tag={t} updateTags={updateTags} selectedTags={selectedTags} />)}
            </div>

            <OriginalsSection 
                name="When this is done"
                date="2020-04-13"
                tags={["studio", "video"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText>
                    <YouTube id="XrrHFIEW-RQ"/>
                </InText>

                <Text>
                    From the studio recording of my recent addition to the <a href="#my-music/everyday">demo 
                    album Everyday</a> - "When this is done"
                </Text>
            </OriginalsSection>

            <OriginalsSection 
                name="End solos - Sticks in the water, At the ocean shore"
                date="2020-04-13"
                tags={["studio", "video"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="flex-container">
                    <Part minWidth="300px">
                        <InText>
                            <YouTube id="v26XLa1LvFo"/>
                        </InText>
                    </Part>
                    <Part minWidth="300px">
                        <InText>
                            <YouTube id="4SG7U9Rlt9A"/>
                        </InText>
                    </Part>
                </div>

                <Text>
                    During the Covid-19 self isolation times, I was re-recording quite a bit of my 
                    music. Admittedly, I don't usually record the whole part (vocals, solo, ...) in a
                    single go, but this time that's what I was aiming for.
                </Text>
            </OriginalsSection>
        
            <OriginalsSection 
                name="Hey Dad (live in NosDa)"
                date="2019-08-28"
                tags={["cardiff", "live", "open-mic", "video"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText width='50%' float='left' minWidth='300px'>
                    <YouTube id="JIUr4QQPv6s"/>
                </InText>

                <Text>
                    NosDa is an awesome, chilled place for music, chat or a drink at the bank of Taff in Cardiff.
                    It is no wonder I did my first open mic in Cardiff here, and several more too. I did 
                    "Hey dad" here a couple months after writing the song, and it was the first time to do it
                    without a backing track and using loop station instead. 
                </Text>
            </OriginalsSection>

            <OriginalsSection 
                name="Calling at Newport (live in Cardiff :-))"
                date="2019-05-12"
                tags={["cardiff", "live", "video"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText width='50%' float='left' minWidth='300px'>
                    <YouTube id="fmxfFekWy8M"/>
                </InText>

                <Text>
                    There's several great busking spots in Cardiff, but my favorite has to be 
                    down in Cardiff Bay. Peraphs not a money-maker spot, but on a nice sunny day 
                    it's a true joy to play there. Indeed, perfect for a song
                    about coming to South Wales!
                </Text>
                
            </OriginalsSection>

            <OriginalsSection 
                name="Kak Tebja Zavut"
                date="2019-03-29"
                tags={["fun", "studio", "collab"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText>
                    <SoundCloud iframeTag='<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/664352564&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>'/>
                </InText>

                <Text>
                    Not a perfectly serious entry - but a super fun one. After this song accidentally following other 
                    songs in my playlist and listening to it a few times, I have to say - this 
                    song ROCKS! And we really nailed it. Vika's lyrics (both the initial rap + the 
                    middle Russian part is due to her) and Alex's incredible rap + really felt-through 
                    vocals make this a hit that's not only worth to publish, but listen to many times! Oh yeah!
                </Text>
            </OriginalsSection>

        </> 
    );
}
  