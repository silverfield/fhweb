import {TagSection, InText, Image, Tag, YouTube, SoundCloud, Instagram} from '../../../helpers/combo-helper'
import {useState} from "react"
import {useEffect} from "react"

var allTagsAccumulator = [];

function CollabSection(
    props
) {
    return <TagSection 
        allTagsAccumulator={allTagsAccumulator} {...props} 
    />
}

export default function Collaborations({

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
                Collaborations
            </div>

            <div>
                <p>
                    A lot of my guitar skills I owe to my former guitar teacher Ali Kovac as well as 
                    to <a href="https://www.justinguitar.com/">Justin's great online content</a>, but 
                    I think the quickest way to improve is simply to play with others - not just 
                    learning from each and picking up new styles. Cause everyone has a different style. 
                </p>

                <p>
                    Over the years there was quite a bit of jamming and playing with people, little projects
                    here and there. Some grew to see a studio recording, recorded jam sessions, 
                    or an open mic performance. Here's some
                    of the top picks ;-)
                </p>

                <hr></hr>

                Filter tags: {allTags.map((t, i) => <Tag key={i} tag={t} updateTags={updateTags} selectedTags={selectedTags} />)}
            </div>
            
            <CollabSection 
                name="With Ben"
                date="2019/2020"
                tags={["ben jamon", "cardiff"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <p>
                    Ben's definitely one of the best musicians I've played with. Hard-working, dedicated 
                    and talented - and if you consider the fact that he's a <i>drummer</i>, 
                    it's quite a rare thing to find! 
                </p>

                <p>
                    Admittedly, my guitar style simply needs someone 
                    to "<a href="https://youtu.be/wTP2RUD_cL0?t=191">bang on those bongos like 
                    a chimpanzee</a>" which is probably not the most fun for a drummer, but in a few
                    jams we had, some good stuff emerged, definitely pushing me to try stuff outside of
                    my ordinary repertoire.
                </p>

                <div className="row">
                    <div className="col-md-12">
                        <InText>
                            <SoundCloud iframeTag='<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/743549404&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>' />
                        </InText>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <InText>
                            <Instagram url="https://www.instagram.com/p/BysrTdyB0K4/" />
                        </InText>
                        <InText>
                            <Instagram url="https://www.instagram.com/p/BxQT7YxHplo/" />
                        </InText>
                    </div>
                    <div className="col-md-6">
                        <InText>
                            <Instagram url="https://www.instagram.com/p/B6Wh6C9hjoj" />
                        </InText>
                        <InText>
                            <Instagram url="https://www.instagram.com/p/B3hXw0KBusl" />
                        </InText>
                    </div>
                </div>                
            </CollabSection>

            <CollabSection 
                name="ONS Choir"
                date="2018/2019"
                tags={["ons choir", "cardiff"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <p>
                    I never really thought of myself as a singer (and that holds to this day). But joining
                    a choir at ONS was fantastic for realizing that even with the little singing I can do, 
                    there's still lot that can be done! Using harmonies, using the voice in a proper way or
                    improving the technique. There's definitely long way to go, but looking back at some of 
                    my old recordings, there's much improvement already!
                </p>

                <p>
                    The bonus was a couple Christmas busking sessions where we raised money for a charity. 
                    Check out <a href="#/busking">busking section</a> for it went!
                </p>

                <div className="row">
                    <div className="col-md-6">
                        <InText>
                            <YouTube id="rEIFkwG7Iz8" />
                        </InText>
                    </div>
                    <div className="col-md-6">
                        <InText>
                            <YouTube id="lDT0HmsCoSo" />
                        </InText>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <InText>
                            <YouTube id="tL9XG9F50cQ" />
                        </InText>
                    </div>
                </div>
            </CollabSection>

            <CollabSection 
                name="With Sophie"
                date="2018/2019"
                tags={["sophie", "cardiff"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="row col-md-12">
                    The jams with Sophie came as a spin-out of other jams with people from the 
                    ONS choir. We wanted to focus on fewer songs, but more thoroughly. With Sophie's 
                    piano and beautiful vocals, as well as custom harmonies that we often added, we 
                    managed to record quite a few really nice covers, as well as slip in a few open 
                    mics!
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <InText>
                            <div className="iframe-div">
                                <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/755723442&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                            </div>
                        </InText>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <InText>
                            <YouTube id="YAsS-kElxNg" />
                        </InText>
                    </div>
                    <div className="col-md-6">
                        <InText>
                            <YouTube id="-DToKaDE_VM" />
                        </InText>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <InText>
                            <YouTube id="zQeXbiSlLlo" />
                        </InText>
                    </div>
                    <div className="col-md-6">
                        <InText>
                            <YouTube id="VyZoL9tP-2Y" />
                        </InText>
                    </div>
                </div>
            </CollabSection>

            <CollabSection
                name="With Alex and Vika"
                date="2019"
                tags={["fun stuff", "cardiff"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="row">
                    <div className="col-md-4">
                        <InText where='left'>
                            <Image 
                                imgSrc={require('../../../pics/alex-vika.jpg')} 
                                caption='Recording "Kak Tebja Zavut"' 
                            />
                        </InText>
                    </div>
                    <div className="col-md-8">
                        <InText>
                            <SoundCloud iframeTag='<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/664352564&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>' />
                        </InText>

                        Not a perfectly serious entry - but a super fun one. After this accidentally following other
                        songs in my playlist and listening to it a few times, I have to say - this
                        song ROCKS! And we really nailed it. Vika's lyrics (both the initial rap + the
                        middle Russian part is due to her) and Alex's incredible rap + really felt-through
                        vocals make this a hit that's not only worth to publish, but listen to many times! Oh yeah!
                    </div>
                </div>
            </CollabSection>

            <CollabSection 
                name="With Moni"
                date="2014"
                tags={["moni", "oslo"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="row">
                    <div className="col-md-6">
                        <InText>
                            <YouTube id="KVP8ZfpweCk" />
                        </InText>
                    </div>
                    <div className="col-md-6">
                        <InText>
                            <YouTube id="vdJF_Be4580" />
                        </InText>
                    </div>
                </div>

                <InText width='40%'>
                    <Image 
                        imgSrc={require("../../../pics/oslo-moni.jpg")} 
                        caption="With Moni, busking in Aker Brygge"
                    />
                </InText>

                <p>
                    I met Moni in one of the Oslo Jam Session meetups. She had an amazing voice
                    and was up for practicing some songs a bit more properly. Layla, More than Words, 
                    Let it be... 
                </p>
                
                <p>
                    We ended up doing an open mic, as well as busking at Aker Brygge until she 
                    left Oslo. Good times!
                </p>
            </CollabSection>

            <CollabSection 
                name="Brainlive"
                date="2013/2014"
                tags={["brainlive", "oslo"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <InText>
                    <SoundCloud iframeTag='<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/175703523&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>' />
                </InText>

                <div className="row">
                    <div className="col-md-6">
                        <InText>
                            <Image 
                                imgSrc={require("../../../pics/mada.jpg")}
                                caption="Busking with Mada at Aker Brygge"
                            />
                        </InText>
                        <p>
                            One of the first collaborations came round in Oslo with a fellow AIESEC intern Mada. 
                            Mada liked to sing, I liked to play
                            guitar and so we started to practice some songs. The vision was to do 
                            an open mic or two. Eventually we did that, plus recorded a cover of Just my imagination, 
                            and Mada (and Tom) were also the people with whom I discovered busking with!
                        </p>
                    </div>
                    <div className="col-md-6">
                        <InText>
                            <Image 
                                imgSrc={require("../../../pics/tom.jpg")}
                                caption="My first ever busking session - with Tom"
                            />
                        </InText>
                    </div>
                </div>
            </CollabSection>

            <CollabSection 
                name="Oslo Jam Session"
                date="2013/2014"
                tags={["oslo"]}
                selectedTags={selectedTags}
                updateTags={updateTags}
            >
                <div className="float-img" style={{'width': '100%'}}>
                    <YouTube id="pEWAgngcc98?start=125"/>
                </div>
                
                <InText width='50%'>
                    <Image 
                        imgSrc={require("../../../pics/oslo-jam.jpg")}
                        caption="With people from the Oslo Jam Session"
                    />
                </InText>

                <p>
                    Not really a serious collaboration - but this holds a special place in my 
                    mind and my heart! These little sessions organized by Monika were enjoyable,
                    full of laughter and good times, making my time in Oslo even more memorable. 
                    In addition, I also met Moni here whom we teamed up for some more jamming 
                    (see above), as well as other awesome people :-)
                </p>

                <p>
                    It was also through one of the meetups here that I got the idea for the very
                    first song of my demo album <a href="#/my-music/everyday">Everyday</a>. I honestly
                    can't remember the details, but it was a presentation or a play of some sorts. At 
                    one point, an idea was presented: we tend to live some days to the fullest, while
                    other times we waste the day away. Fridays we tend to drink after work, Saturdays
                    are for trips, Sunday for relax... But what if we had another day, where we really 
                    are our best selves, where we do what we like and do it well. What if we called 
                    that day...
                </p>

                <p>
                    Everyday?
                </p>
            </CollabSection>
        </> 
    );
}
  