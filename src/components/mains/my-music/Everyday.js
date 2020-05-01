import {Part, PageSection, InText, Image, SoundCloud, Text} from '../../../helpers/combo-helper'

function Song({
    name,
    children
}) {
    return <>
        <PageSection name={name}>
            <div className="flex-container">
                {children}
            </div>
        </PageSection>
    </>
}

function SoundcloudEmbed({
    title
}) {
    var embeds = {
        'everyday': `
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/799522573&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        `,
        'vices': `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/622361853&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        `,
        'let\'s go fail': `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/673315802&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        `,
        'daily ride': `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/622360437&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        `,
        'summer tune': `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/764998177&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        `,
        'fargo and pelgrim': `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/786320029&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        `,
        'calling at newport': `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/764767948&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        `,
        'hey dad': `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/801596476&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/hey-dad" title="Hey dad" target="_blank" style="color: #cccccc; text-decoration: none;">Hey dad</a></div>
        `,
        'sticks in the water': `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/796806931&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        `,
        'at the ocean shore': `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/801596386&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/at-the-ocean-shore" title="At the ocean shore" target="_blank" style="color: #cccccc; text-decoration: none;">At the ocean shore</a></div>
        `,
        'when this is done': `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/801596623&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/when-this-is-done" title="When this is done" target="_blank" style="color: #cccccc; text-decoration: none;">When this is done</a></div>        
        `,
    };

    var slugs = {
        'everyday': 'everyday',
        'vices': 'vices',
        'let\'s go fail': 'lets-go-fail',
        'daily ride': 'daily-ride',
        'summer tune': 'summer-tune',
        'fargo and pelgrim': 'fargo-and-pelgrim',
        'calling at newport': 'calling-at-newport',
        'hey dad': 'hey-dad',
        'sticks in the water': 'sticks-in-the-water',
        'at the ocean shore': 'at-the-ocean-shore',
        'when this is done': 'when-this-is-done'
    }
    
    let iframeTag = embeds[title.toLowerCase()];
    let bckSlug = slugs[title.toLowerCase()]

    return <SoundCloud iframeTag={iframeTag} bckLink={`https://soundcloud.com/ferohajnovic/${bckSlug}`} />
}

export default function Everyday({

}) {
    return (
        <>
            <a className="everyday-album page-title" href="https://soundcloud.com/ferohajnovic/sets/everyday">
                Everyday - demo album
            </a>

            <div className="pre-section flex-container">
                <Part proportion='0.4' minWidth='250px'>
                    <InText minHeight='500px'>
                        <div className="iframe-div">
                            <iframe width="100%" height='100%' scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/781852491&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        </div>
                    </InText>
                </Part>

                <Part proportion='0.6' minWidth="400px">
                    <Text>
                        <p>
                            My first (demo) album is slowly coming together. Named after one of the 
                            songs - Everyday - its beginnings date to my after-university times in 
                            Oslo when I made that step from "bedroom guitar playing" and started doing
                            open mics, jamming, duo-projects and eventually my most favorite 
                            activity: <a href="#busking">busking</a>.
                        </p>

                        <p>
                            It was there in Oslo, where the first of the songs came together, with some 
                            eventually making my first demo recordings (and some still waiting on
                            my hard drive to get their chance for some studio time!). 
                        </p>

                        <p>
                            The next round of inspiration came 
                            during <a href="http://feroafrica.blogspot.com/">my time in Ghana</a> and the 
                            following <a href="http://ferostreetplay.blogspot.com/">2015 stret play tour</a> of 
                            northern Europe, both unforgettable experiences out of the ordinary. 
                        </p>

                        <p>
                            Finally, the UK cities of Newport, London, and especially Cardiff, were home
                            to my most recent ideas and work. 
                        </p>

                        <p>
                            The songs on the album are not in chronological order, but below you can enjoy a 
                            cut through my life expressed via the songs, as the time went.
                        </p>
                    </Text>
                </Part>                
            </div>
            <div className="clear-float">
                <Song name="Everyday">
                    <Part proportion='0.3' minWidth="200px">
                        <InText>
                            <Image
                                imgSrc={require("../../../pics/oslo-aker.jpg")}
                                caption="Oslo, Aker Brygge - the most memorable busking place"
                            />
                        </InText>
                    </Part>
                    
                    <Part proportion='0.7' minWidth="200px">
                        <InText where='right'>
                            <SoundcloudEmbed title="Everyday" />
                        </InText>
                        <Text>
                            <p>
                                This song is really about Oslo and some of my experiences there, 
                                but also about the time I started to focus on music, guitar and 
                                songwriting a bit more seriously than before...
                            </p>

                            <a href="https://drive.google.com/file/d/1Di-44alLplaT_RoVP9_ZoVCiSLsCgMnc">Chords and lyrics</a>
                        </Text>
                    </Part>
                </Song>

                <Song name="Vices">
                    <InText>
                        <SoundcloudEmbed title="Vices" />
                    </InText>
                    
                    <Text>
                        <p>
                            This is a song about one of my friends, a quite unique character. 
                            Not much more is needed to be said, just listen to the song and you'll 
                            find out more...
                        </p>

                        <a href="https://drive.google.com/file/d/1C6uYILWab7q74PpC8gPYo6kyxOgqC8E6">Chords and lyrics</a>
                    </Text>
                </Song>

                <Song name="Let's go fail">
                    <InText>
                        <SoundcloudEmbed title="Let's go fail" />
                    </InText>

                    <Text>
                        <p>
                            A song I wrote in a train, returning from a visit to my friend Laco, 
                            who's the most "yes attitude" person I've ever met. Indeed, saying 
                            "Laco, let's go fail" is likely to be met with "all right, let's do that!". 
                            It's just hard NOT to write a song about a person like this!
                        </p>

                        <a href="https://drive.google.com/file/d/1uyVyDSwf5BAG6KvRg5Kf6wr4hnmmdghW">Chords and lyrics</a>
                    </Text>
                </Song>

                <Song name="Daily ride">
                    <InText>
                        <SoundcloudEmbed title="Daily ride" />
                    </InText>
                    <Part minWidth='300px' proportion='0.6'>                            
                        <Text>
                            <p>
                                This song is indeed about my daily ride that I had while in Biriwa, Ghana. 
                                I was working at the institute of mathematical sciences at the other 
                                end of the village. The ride on my bicycle through the hot night 
                                amidst frequent power cut in total darkness was simply unique and ultimately 
                                prompted me to write this song...
                            </p>

                            <a href="https://drive.google.com/file/d/1yoMogwnQjyaBGwSiJRNHH2TF0sKLRmeQ">Chords and lyrics</a>
                        </Text>
                    </Part>
                    <Part minWidth='150px' proportion='0.4'>
                        <InText>
                            <Image 
                                imgSrc={require("../../../pics/biriwa.JPG")}
                                caption='Biriwa with AIMS - the "castle on the hill" in top right'
                            />
                        </InText>
                    </Part>
                </Song>

                <Song name="Summer tune">
                    <InText>
                        <SoundcloudEmbed title="Summer tune" />
                    </InText>
                    
                    <Text>
                        <p>
                            One of my few purely instrumental tracks. This came together spontaneously one 
                            sunny day in Prague, just after coming back from Ghana. I liked it straight away, 
                            named it "Summer tune" and played it ever since.
                        </p>

                        <a href="https://drive.google.com/file/d/1KzFUAV5ewzaEHcn-geI7OEYxQsEMZjfi">Chords and lyrics</a>
                    </Text>
                </Song>

                <Song name="Fargo and Pelgrim">
                    <InText>
                        <SoundcloudEmbed title="Fargo and Pelgrim" />
                    </InText>
                    
                    <Text>
                        <p>
                            This song is from one moment in Czech republic, when we were watching 
                            a sunset on a horse pasture and my girlfriend was explaining 
                            to me how horses communicate and behave. There's no maybes, 
                            problems are resolved with fights and things are generally more 
                            black or white. Seems so simple, yet beautiful...
                        </p>

                        <a href="https://drive.google.com/file/d/18cNkcaIGDkd_HiWtYIpwmdqQQlWMhgOm">Chords and lyrics</a>
                    </Text>
                </Song>

                <Song name="Calling at Newport">
                    <InText>
                        <SoundcloudEmbed title="Calling at Newport" />
                    </InText>
                    <Part minWidth='300px' proportion='0.6'>                            
                        <Text>
                            <p>
                                One of my favorite songs to play - the time we came to UK, 
                                south Wales was indeed special. It was October, sun shining every day 
                                and I was asking myself if the "rainy UK" is just a myth. 
                                Shortly after writing the lyrics and the music, the winter kicked in 
                                along with the many storms. But still, nothing can take away those sunny 
                                days from my memory - journeys on Arriva Trains Wales to Cardiff 
                                or the vibrant rugby days of World cup 2015...
                            </p>

                            <a href="https://drive.google.com/file/d/17H0500WCxY1-izSiqTQFt8XGuX6EXzAb">Chords and lyrics</a>
                        </Text>
                    </Part>
                    <Part minWidth='250px' proportion='0.4'>
                        <InText>
                            <Image
                                imgSrc={require("../../../pics/clyffard.JPG")} 
                                caption="Clyffard Crescent in Newport"
                            />
                        </InText>
                    </Part>
                </Song>

                <Song name="Hey dad">
                    <InText>
                        <SoundcloudEmbed title="Hey dad" />
                    </InText>
                    
                    <Text>
                        <p>
                            I made this for my dad's recent birthday. He's a true inspiration ;-)
                        </p>

                        <a href="https://drive.google.com/file/d/1KHBDmHPLcmMYg6efRG58HPyiH_aekGWi">Chords and lyrics</a>
                    </Text>
                </Song>

                <Song name="Sticks in the water">
                    <InText>
                        <SoundcloudEmbed title="Sticks in the water" />
                    </InText>
                    
                    <Text>
                        <p>
                            This song's lyrics were written mainly by Martin Buckridge, 
                            a friend from my Toastmasters club back in Cardiff. Martin's take on it is simply 
                            inspiring and the lyrics send an important message in today's world - there's too 
                            much rush and not enough time to pause. Give it a listen and find out more!
                        </p>

                        <a href="https://drive.google.com/open?id=1GPm6GK45xovabba0uAGg3eC_w5CXvAk9">Chords and lyrics</a>
                    </Text>
                </Song>

                <Song name="At the ocean shore">
                    <InText>
                        <SoundcloudEmbed title="At the ocean shore" />
                    </InText>

                    <Part proportion="0.6">
                        <Text>
                            <p>
                                A song with roots from Llantwit Major. Here we once saw a bunch of youngsters 
                                jumping
                                from the cliffs, some 5-6 meters above the water. An elderly couple was observing
                                them from a bench nearby. It turned out it was grandparents of one of the boys
                                and when we asked "how do they know it's deep enough?" they explained: when the tide
                                is low, you can see the rocky bottom and so you're safe to jump when it's high...
                            </p>

                            <a href="https://drive.google.com/file/d/1dzi1WxR66otirdY8aVwhw4oyIyQOo6As/view">Chords and lyrics</a>
                        </Text>
                    </Part>
                    <Part minWidth="250px" proportion="0.4">
                        <InText>
                            <Image
                                imgSrc={require("../../../pics/llantwit.JPG")}
                                caption='The "jumping cliff" in Llantwit Major'
                            />
                        </InText>
                    </Part> 
                </Song>

                <Song name="When this is done">
                    <Part proportion="0.6">
                        <InText>
                            <SoundcloudEmbed title="When this is done" />
                        </InText>
                        
                        <Text>
                            <p>
                            A song made in the tough times of self-isolation. 
                                And although tough times, for many, I believe, it has been an 
                                opportunity for reflection as to how they would want to change 
                                and what kind of world they'd like to see ... When this is done
                            </p>

                            <a href="https://drive.google.com/file/d/1NtTP0NpnIHD4yHjomHuUEeeAxFCxbpX4/view">Chords and lyrics</a>
                        </Text>
                    </Part>
                    <Part minWidth="250px" proportion="0.4">
                        <InText>
                            <Image
                                imgSrc={require("../../../pics/terrace.jpg")}
                                caption='Self isolation times in London'
                            />
                        </InText>
                    </Part> 
                </Song>
            </div>            
        </> 
    );
}
  