import {Part, PageSection, Text, InText, Image} from '../../helpers/combo-helper'

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
            <p className="page-title">
                Welcome to my website, good music lover!
            </p>

            <div className="float-container">
                <InText float='left' width='40%' minWidth='300px'>
                    <Image 
                        imgSrc={require("../../pics/grass-1.jpg")}
                    />
                </InText>
                <p>
                    Hi! I'm Fero, and I'm a guitarist, song-writer and a busker based in London. 
                    Mainly inspired by the likes of Mark Knopfler or John Mayer, my style is
                    very much "the guitar music": from melodic, at times ambient lead guitar, through
                    rocky or bluesy vibes, all the way to acoustic and folky type of 
                    songs.
                </p>

                <p>
                    If you're looking for a musician to get some nice vibes going at your venue, 
                    check out my <a href="#repertoire">repertoire</a> and <a href="#contact">get in touch</a>. 
                    For my original songs, collaborations or covers, see <a href="#my-music">my music</a> page. 
                    Finally, 
                    don't forget to visit the <a href="#busking">busking for good</a> section and see
                    why busking should be supported!
                </p>

                <p>
                    And if you'd just like to find out more about me, there will be some 
                    answers <a href="#about">here</a> :-)
                </p>
            </div>
            
            <span className="news-title">News:</span>

            <News name="Back to busking!" date="05/2020">
                <div className="flex-container">
                    <Part proportion='0.4' minWidth="200px">
                        <InText>
                            <Image 
                                imgSrc={require("../../pics/cambridge.jpg")}
                            />
                        </InText>
                    </Part>
                    <Part proportion='0.6' minWidth="200px">
                        <Text>
                            After about half a year, I finally got back on the street again, brushing the dust off my 
                            card reader and trying some of the new songs in the live setting. London South bank,
                            Guildford, Brighton and (most of all) Cambridge were beautiful spots and I'm bound to
                            be back for more. Check out <a href="#my-music/originals">other originals</a> or 
                            the <a href="#my-music/covers">covers</a> sections for some videos, or 
                            see my  <a href="https://www.facebook.com/feromusician">instagram</a> for 
                            most recent updates.
                        </Text>
                    </Part>
                </div>
            </News>

            <News name="Demo album reaching completion!" date="05/2020">
                <div className="flex-container">
                    <Part proportion='0.4' minWidth="200px">
                        <InText>
                            <Image 
                                imgSrc={require("../../pics/everyday-cover.jpeg")}
                            />
                        </InText>
                    </Part>
                    <Part proportion='0.6' minWidth="200px">
                        <Text>
                            Check out the <a href="#my-music">11 tracks</a> from album "Everyday" that are already near finished!
                            I'm re-recording some of the parts during the Covid-19 self-isolation - so that once the
                            lock-down ceases, I'll be ready to hit the streets and bars again! 
                        </Text>
                    </Part>
                </div>
            </News>

            <News name="Website is live!" date="05/2020">
                <Text>
                    Aand the website is live! You should be probably aware of that as you 
                    are just looking at it, but it's a milestone that deserves to be here!
                </Text>
            </News>
        </>
    );
}
