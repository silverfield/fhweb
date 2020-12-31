import { Image, InText, PageSection, Part, SoundCloud, Text, YouTube } from '../../../helpers/combo-helper';

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
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956017933&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/everyday" title="Everyday" target="_blank" style="color: #cccccc; text-decoration: none;">Everyday</a></div>
        `,
        'vices': `
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956011222&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/vices" title="Vices" target="_blank" style="color: #cccccc; text-decoration: none;">Vices</a></div>
        `,
        'let\'s go fail': `
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956009014&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/lets-go-fail" title="Let&#x27;s go fail" target="_blank" style="color: #cccccc; text-decoration: none;">Let&#x27;s go fail</a></div>
        `,
        'daily ride': `
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956009752&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/daily-ride" title="Daily ride" target="_blank" style="color: #cccccc; text-decoration: none;">Daily ride</a></div>
        `,
        'summer tune': `
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956012803&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/summer-tune" title="Summer tune" target="_blank" style="color: #cccccc; text-decoration: none;">Summer tune</a></div>
        `,
        'fargo and pelgrim': `
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956006527&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/fargo-and-pelgrim" title="Fargo and Pelgrim" target="_blank" style="color: #cccccc; text-decoration: none;">Fargo and Pelgrim</a></div>
        `,
        'calling at newport': `
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956014690&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/calling-at-newport" title="Calling at Newport" target="_blank" style="color: #cccccc; text-decoration: none;">Calling at Newport</a></div>
        `,
        'hey dad': `
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956007094&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/hey-dad" title="Hey dad" target="_blank" style="color: #cccccc; text-decoration: none;">Hey dad</a></div>
        `,
        'sticks in the water': `
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956005681&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/sticks-in-the-water" title="Sticks in the water" target="_blank" style="color: #cccccc; text-decoration: none;">Sticks in the water</a></div>
        `,
        'at the ocean shore': `
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956015530&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/at-the-ocean-shore" title="At the ocean shore" target="_blank" style="color: #cccccc; text-decoration: none;">At the ocean shore</a></div>    
        `,
        'when this is done': `
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956014099&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/when-this-is-done" title="When this is done" target="_blank" style="color: #cccccc; text-decoration: none;">When this is done</a></div>
        `,
        'how i\'ll remember cardiff': `
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956008360&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/how-ill-remember-cardiff" title="How I&#x27;ll remember Cardiff" target="_blank" style="color: #cccccc; text-decoration: none;">How I&#x27;ll remember Cardiff</a></div>
        `,
        'walking on': `
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956010568&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/walking-on" title="Walking on" target="_blank" style="color: #cccccc; text-decoration: none;">Walking on</a></div>
        `,
        'african bird': `
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/956016352&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ferohajnovic" title="Fero Hajnovic" target="_blank" style="color: #cccccc; text-decoration: none;">Fero Hajnovic</a> · <a href="https://soundcloud.com/ferohajnovic/african-bird" title="African bird" target="_blank" style="color: #cccccc; text-decoration: none;">African bird</a></div>
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
        'when this is done': 'when-this-is-done',
        'how i\'ll remember cardiff': 'how-ill-remember-cardiff',
        'walking on': 'walking-on',
        'african bird': 'african-bird',
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
                Everyday (debut album)
            </a>

            <div className="pre-section flex-container">
                <Text>
                    <InText>
                        <a href="https://fero.bandcamp.com/album/everyday">
                            <Image
                                imgSrc={require("../../../pics/everyday-release-banner.png")}
                            />
                        </a>
                    </InText>

                    <p> 
                        My debut album "Everyday" is here! After 7 years of off-and-on making, enjoy the 
                        14 tracks packed with guitar music!
                    </p>

                    <p> 
                        Get the album on <a href="https://fero.bandcamp.com/album/everyday">Bandcamp</a> and check out
                        the <a href="./everyday-booklet.pdf">album booklet</a>!
                    </p>
                </Text>

                <Part proportion='0.4' minWidth='250px'>
                    <InText minHeight='330px'>
                        <div className="iframe-div">
                            <iframe width="100%" height='100%' scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/781852491&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        </div>
                    </InText>
                    <InText>
                        <a href="./everyday-booklet.pdf">
                            <Image
                                imgSrc={require("../../../pics/booklet-ad.png")} 
                                caption="Check out the album booklet!"
                            />
                        </a>
                    </InText>
                </Part>

                <Part proportion='0.6' minWidth="350px">
                    <Text>
                        <iframe 
                            style={{'border': '0', 'width': '100%', 'height': '120px'}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=4224310120/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                            seamless
                        >
                            <a href="https://fero.bandcamp.com/album/everyday">Everyday by Fero Hajnovic</a>
                        </iframe>

                        <p>
                            Named after one of the songs - Everyday - the album's beginnings 
                            date back to my post-university times in 
                            Oslo when I made that step from "bedroom guitar playing" to doing
                            open mics, jamming, <a href="#my-music/collaborations">collaborative</a> projects 
                            and eventually my most favorite 
                            activity: <a href="#busking">busking</a>.
                        </p>

                        <p>
                            It was there in Oslo, where the first of my songs came together, with some 
                            eventually being my first demo recordings (and some still waiting on
                            my hard drive to get their chance for some studio time!). 
                        </p>

                        <p>
                            The next round of inspiration came 
                            during my unforgettable <a href="http://feroafrica.blogspot.com/">time in Ghana</a> and the 
                            following <a href="http://ferostreetplay.blogspot.com/">2015 stret play tour</a> of 
                            northern Europe, both completely life-changing experiences. 
                        </p>

                        <p>
                            Finally, the UK cities of Newport, London, and especially Cardiff, were home
                            to my most recent ideas and work. 
                        </p>

                        <p>
                            Check out my <a href="https://ferowrites.blogspot.com/2020/12/everyday.html">blog post</a> about
                            making the album. Hope you'll enjoy the music, do drop me a line ;-)
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
                                songwriting a bit more seriously than before.
                            </p>

                            <a href="https://drive.google.com/file/d/1Di-44alLplaT_RoVP9_ZoVCiSLsCgMnc">Chords and lyrics</a>
                        </Text>
                    </Part>
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
                            much rush and not enough time to pause. Give it a listen and find out more ;-)
                        </p>

                        <a href="https://drive.google.com/open?id=1GPm6GK45xovabba0uAGg3eC_w5CXvAk9">Chords and lyrics</a>
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
                            black or white. Simple, but inspiring.
                        </p>

                        <a href="https://drive.google.com/file/d/18cNkcaIGDkd_HiWtYIpwmdqQQlWMhgOm">Chords and lyrics</a>
                    </Text>
                </Song>

                <Song name="Hey dad">
                    <Part minWidth='250px' proportion='0.65'>
                        <InText>
                            <SoundcloudEmbed title="Hey dad" />
                        </InText>
                    </Part>
                    <Part minWidth='250px' proportion='0.35'>
                    <InText>
                            <Image
                                imgSrc={require("../../../pics/tato.jpg")} 
                            />
                        </InText>
                    </Part>
                    <Text>
                        <p>
                            I made this one for my dad's round birthday, and I was surprised how smoothly 
                            it came together once I started. But then, I should not be surprised, he's 
                            a true inspiration, a dad I'll always be grateful for.
                        </p>

                        <a href="https://drive.google.com/file/d/1KHBDmHPLcmMYg6efRG58HPyiH_aekGWi">Chords and lyrics</a>
                    </Text>
                </Song>

                <Song name="How I'll remember Cardiff">
                    <Part minWidth="250px" proportion="0.4">
                        <InText>
                            <YouTube id="e1BE3NQ2KHA"/>
                        </InText>
                    </Part> 
                    <Part proportion="0.6">
                        <InText>
                            <SoundcloudEmbed title="How I'll remember Cardiff" />
                        </InText>
                    </Part>
                    <Text>
                        <p>
                            "You can take the boy out of Cardiff, but you can NEVER take Cardiff out of the boy!". That 
                            was the message wrote by one of my friends on my leaving card, when I was leaving Cardiff 
                            in December 2019. 
                        </p>
                        <p>
                            Some time before, Alex said I "should write a song about Cardiff before I go". 
                        </p>
                        <p>
                            And so I did. I wrote this back then in December 2019, with the emotions of leaving 
                            still fresh. 
                            But half a year later, I wouldn't change a thing. 
                            For THIS, ladies and gents, is "How I'll remember Cardiff".
                        </p>

                        <a href="https://drive.google.com/file/d/1kWvkRV3OG_zlcQAiRrBCmLRVdJFhLHNN/view?usp=sharing">Chords and lyrics</a>
                    </Text>
                </Song>

                <Song name="Let's go fail">
                    <Part proportion='0.65' minWidth="200px">
                        <InText>
                            <SoundcloudEmbed title="Let's go fail" />
                        </InText>

                        <Text>
                            <p>
                                I wrote this one in a train, returning from a visit of my friend Laco, 
                                who's the most "yes attitude" person I've ever met. Indeed, saying 
                                "Laco, let's go fail" is likely to be met with "all right, let's do that!". 
                                It's just hard NOT to write a song about someone like this!
                            </p>

                            <a href="https://drive.google.com/file/d/1uyVyDSwf5BAG6KvRg5Kf6wr4hnmmdghW">Chords and lyrics</a>
                        </Text>
                    </Part>

                    <Part proportion='0.35' minWidth="200px">
                        <InText>
                            <Image
                                imgSrc={require("../../../pics/laco.jpg")}
                                caption={<>A rather old pic, but I love it. Did I say that other than 
                                YES attitude master, Laco is also accomplished musician having his 
                                own <a href="http://www.lafamiliasalsaband.com/">Salsa Band</a>?</>}
                            />
                        </InText>
                    </Part>
                </Song>

                <Song name="Daily ride">
                    <InText>
                        <SoundcloudEmbed title="Daily ride" />
                    </InText>
                    <Part minWidth='150px' proportion='0.4'>
                        <InText>
                            <Image 
                                imgSrc={require("../../../pics/biriwa.JPG")}
                                caption='Biriwa with AIMS - the "castle on the hill" in top right'
                            />
                        </InText>
                    </Part>
                    <Part minWidth='300px' proportion='0.6'>                            
                        <Text>
                            <p>
                                When I was in Biriwa, Ghana, I used to do a daily ride on my bike to and from work,
                                the Institute of Mathematical Sciences at the other 
                                end of the village. The ride, especially back home, often through the hot night 
                                amidst frequent power cuts and in total darkness was simply surreal and ultimately 
                                prompted me to write this song.
                            </p>

                            <a href="https://drive.google.com/file/d/1yoMogwnQjyaBGwSiJRNHH2TF0sKLRmeQ">Chords and lyrics</a>
                        </Text>
                    </Part>
                </Song>

                <Song name="Walking on">
                    <Part proportion="0.6">
                        <InText>
                            <SoundcloudEmbed title="Walking on" />
                        </InText>
                        
                        <Text>
                            <p>
                                I went for a walk. And wrote a song about it.

                                It was the prime lockdown time and I took an advice from a friend to go 
                                for a walk and just leave my phone at home. The result: getting soaked in a 
                                storm, lost in Canada water and walking through the dreaded Rotherhithe tunnel. 
                                In other words, the most inspiring walk ever, which was bound to be turned into a song!
                            </p>

                            <p>
                                See also the video for the song, which was filmed a couple weeks after the song (as I 
                                really did not have a phone, neither my camera during the actual walk! :-))
                            </p>

                            <a href="https://drive.google.com/file/d/1fCGITnBk2r_qaPdIBWLHzM7JvMDN47zP/view?usp=sharing">Chords and lyrics</a>
                        </Text>
                    </Part>
                    <Part minWidth="250px" proportion="0.4">
                        <InText>
                            <Image
                                imgSrc={require("../../../pics/greenwhich.jpg")}
                                caption={<>
                                    View from the original destination of my walk <br/>
                                    (taken on another day, as I did not have phone or camera that time!)
                                </>}
                            />
                        </InText>

                        <InText>
                            <YouTube id="o6nnCW7Rn1Y"/>
                        </InText>
                    </Part>
                </Song>

                <Song name="Vices">
                    <InText>
                        <SoundcloudEmbed title="Vices" />
                    </InText>
                    
                    <Text>
                        <p>
                            A song about one of my friends from back home, a quite unique character. 
                            Not much more is needed to be said, just listen to the song and you'll 
                            find out more ;-)
                        </p>

                        <a href="https://drive.google.com/file/d/1C6uYILWab7q74PpC8gPYo6kyxOgqC8E6">Chords and lyrics</a>
                    </Text>
                </Song>

                <Song name="Summer tune">
                    <InText>
                        <SoundcloudEmbed title="Summer tune" />
                    </InText>
                    
                    <Text>
                        <p>
                            One of my few purely instrumental tracks. This came together spontaneously one 
                            sunny day in Prague, just after coming back from Ghana. I liked the tune straight away, 
                            and since it was summer at its best, I named it "Summer tune" and played it ever since.
                        </p>

                        <a href="https://drive.google.com/file/d/1KzFUAV5ewzaEHcn-geI7OEYxQsEMZjfi">Chords and lyrics</a>
                    </Text>
                </Song>

                <Song name="When this is done">
                    <Part minWidth="250px" proportion="0.4">
                        <InText>
                            <Image
                                imgSrc={require("../../../pics/terrace.jpg")}
                                caption='Self isolation times in London'
                            />
                        </InText>
                    </Part> 
                    <Part proportion="0.6">
                        <InText>
                            <SoundcloudEmbed title="When this is done" />
                        </InText>
                        
                        <Text>
                            <p>
                                A song made in the tough times of self-isolation. 
                                And although tough times for many, I believe, it has been an 
                                opportunity for reflection as to how one wants to change 
                                and what kind of world they'd like to see on the other side... 
                                When this is done
                            </p>

                            <a href="https://drive.google.com/file/d/1NtTP0NpnIHD4yHjomHuUEeeAxFCxbpX4/view">Chords and lyrics</a>
                        </Text>
                    </Part>
                </Song>

                <Song name="Calling at Newport">
                    <InText>
                        <SoundcloudEmbed title="Calling at Newport" />
                    </InText>
                    <Part minWidth='300px' proportion='0.6'>                            
                        <Text>
                            <p>
                                One of my favorite songs to play, about the time we came to South Wales
                                . A special time indeed. It was October, but sun was shining every day 
                                and I was asking myself if the "rainy UK" is just a myth. 
                                Shortly after writing the lyrics and the music, the winter kicked in 
                                along with the many storms. But still, nothing can take away those sunny 
                                days from my memory - journeys on the Arriva Trains Wales to Cardiff 
                                or the vibrant rugby days of World cup, that was the autumn of 2015...
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

                <Song name="African bird">
                    <Part minWidth="250px" proportion="0.4">
                        <InText>
                            <YouTube id="fRfyfcghFFI"/>
                        </InText>
                    </Part> 
                    <Part proportion="0.6">
                        <InText>
                            <SoundcloudEmbed title="African bird" />
                        </InText>
                    </Part>
                    

                    <Part minWidth="250px" proportion="0.4">
                        <InText>
                            <Image
                                imgSrc={require("../../../pics/ocean-ghana.JPG")}
                                caption='The beach to the east of the institute'
                            />
                        </InText>
                    </Part> 

                    <Part proportion="0.6">
                        <Text>
                            <p>
                                A song that emerged suddenly in my mind one warm evening on a 
                                beach in Biriwa, Ghana, in early 2015. I was about half-way 
                                through with my tutoring and Python teaching stint at the African
                                Institute of Mathematical Sciences. 
                            </p>
                            <p>
                                I'd take a stroll sometime along the beach. The Sun was setting, I was 
                                in thoughts, and a bird flew by and landed on the sand
                                nearby. And so the song was born.
                            </p>

                            <a href="https://drive.google.com/file/d/1JlFMCe-lDqRga4e0HcbXcah_o92htbkF/view">Chords and lyrics</a>
                        </Text>
                    </Part>
                </Song>
            </div>            
        </> 
    );
}
  