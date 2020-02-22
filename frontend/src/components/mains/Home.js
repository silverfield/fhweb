import {PageSection} from '../../helpers/combo-helper'

function News({
    name,
    date,
    children
}) {
    return <>
        <PageSection name={name} headerExtra={<span className="news-date">{date}</span>}>
            {children}
        </PageSection>
    </>
}

export default function Home({

}) {
    return (
        <>
            <p className="section-title">
                Welcome to my website, good music lover!
            </p>

            <div>
                <img src={require("../../pics/grass-1.jpg")} className="float-img" />

                <p>
                    My name is Fero, and I'm a guitarist, song-writer and a busker based in London. 
                    Mainly inspired by the likes of Mark Knopfler or John Mayer, my style is
                    very much "the guitar music": from melodic, at times ambient lead guitar, through
                    rocky or bluesy vibes, all the way to acoustic, folky and song-writer type of 
                    songs.
                </p>

                <p>
                    If you're looking for a musician to get that nice vibe going at your venue, 
                    pick what works for you from my <a href="#repertoire">repertoire</a> page or
                    just <a href="#contact">get in touch</a>. For my original stuff
                    or other music I do, check out <a href="#my-music">my music</a> page. Finally, 
                    don't forget to visit the <a href="#busking">busking for good</a> section and see
                    why busking should be supported!
                </p>

                <p>
                    And if you're just wondering who the hell am I, you may find some 
                    answers <a href="#about">here</a> ;-). 
                </p>
            </div>
            
            <span className="news-title">News:</span>

            <News name="New song - Sticks in the water!" date="01/2020">
                
            </News>
        </>
    );
}
