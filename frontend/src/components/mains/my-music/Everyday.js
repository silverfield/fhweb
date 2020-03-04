import {PageSection} from '../../../helpers/combo-helper'

function Song({
    name,
    children
}) {
    return <>
        <PageSection name={name}>
            {children}
        </PageSection>
    </>
}

export default function Everyday({

}) {
    return (
        <>
            <a className="everyday-album section-title" href="https://soundcloud.com/ferohajnovic/sets/everyday">
                Everyday - demo album
            </a>

            <div>
                <div className="float-img" style={{'width': '40%', 'minWidth': '300px'}}>
                    <div className="iframe-div" style={{'paddingBottom': '100%'}}>
                        <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/781852491&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    </div>
                </div>

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
                    In loosely chronological order, I hope you enjoy the cut through my 
                    life expressed through the songs of this album :-)
                </p>
            </div>
            <div className="clear-float">
                <Song name="Sticks in the water">
                    <iframe 
                        width="100%" 
                        height="300" 
                        scrolling="no" 
                        frameBorder="no" 
                        allow="autoplay" 
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/745913461&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    >
                    </iframe>
                </Song>
            </div>            
        </> 
    );
}
  