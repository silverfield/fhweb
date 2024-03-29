import {Part, PageSection, Text, InText, Image, YouTube} from '../../helpers/combo-helper'

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

            <News name="Everyday is on Spotify!!!" date="17/01/2021">
                <div className="flex-container">
                    <Part proportion='0.6' minWidth="200px">
                        <Text>
                            <p>
                                Everyday is now live 
                                on <a href="https://open.spotify.com/album/5oJHG1rt76a39Ttqw7LQBZ">Spotify</a>, <a href="https://www.amazon.com/gp/product/B08STLKWX5">Amazon</a> and <a href="https://music.apple.com/us/album/everyday/1548556040?uo=4&app=apple+music">Apple music & iTunes</a>!!!
                            </p>
                            <p>
                                Is that it? Hah. I'm already working on a new album with a single 
                                "Like I do" well in progress. It will be new, and... different. Stat tuned!
                            </p>
                        </Text>
                    </Part>
                    <Part proportion='0.4' minWidth="200px">
                        <InText>
                            <a href="https://open.spotify.com/album/5oJHG1rt76a39Ttqw7LQBZ">
                                <Image 
                                    imgSrc={require("../../pics/spotify.png")}
                                />
                            </a>
                            
                        </InText>
                    </Part>
                </div>
            </News>


            <News name="EVERYDAY IS HERE!" date="31/12/2020">
                <div className="flex-container">
                    <Part proportion='0.5' minWidth="200px">
                        <Text>
                            <p>
                                After 7 years of off-and-on song-writing, recording and producing, I am 
                                immensely proud to say that my first album titled "Everyday" is now public!
                            </p>
                            <p>
                                Head to <a href="#my-music/everyday">everyday</a> for more info, get the album
                                on <a href="https://fero.bandcamp.com/album/everyday">Bandcamp</a>, or read
                                my <a href="https://ferowrites.blogspot.com/2020/12/everyday.html">blog post</a> about
                                making the album
                            </p>
                        </Text>
                    </Part>
                    <Part proportion='1' minWidth="200px">
                        <InText>
                            <a href="#my-music/everyday">
                                <Image 
                                    imgSrc={require("../../pics/everyday-release-banner.png")}
                                />
                            </a>
                            
                        </InText>
                    </Part>
                </div>
            </News>

            <News name="New-ish song!" date="11/2020">
                <div className="flex-container">
                    <Part proportion='0.5' minWidth="200px">
                        <Text>
                            <p>
                                I composed and even recorded African bird years ago already, but was 
                                never too happy with the recording. Now I've re-recorded most of the parts
                                and one of my most favourite tunes I have composed can now happily sit in 
                                my album as the 
                                concluding song. Just head to <a href="#my-music/everyday">my-music</a> section!
                            </p>
                        </Text>
                    </Part>
                    <Part proportion='0.5' minWidth="200px">
                        <InText>
                            <YouTube id="fRfyfcghFFI"/>
                        </InText>
                    </Part>
                </div>
            </News>

            <News name="Summer busking!" date="09/2020">
                <div className="flex-container">
                    <Part proportion='0.5' minWidth="200px">
                        <InText>
                            <YouTube id="VZiMaWtuSuU"/>
                        </InText>
                    </Part>
                    <Part proportion='0.5' minWidth="200px">
                        <Text>
                            <p>
                                Summer of 2020 was actually excellent for busking. Check it out 
                                in <a href="#my-music/covers">covers</a> section!
                            </p>
                            <p>
                                Also see 
                                the <a href="https://www.besttubeto.co.uk/images/socialmedia/FeroHajnovic.mp4">result</a> of 
                                the project with BestTubeTo!
                            </p>
                        </Text>
                    </Part>
                </div>
            </News>

            <News name="Recording with BestTubeTo!" date="07/2020">
                <div className="flex-container">
                    <Part proportion='0.5' minWidth="200px">
                        <InText>
                            <YouTube id="0HU8MWE2jLU"/>
                        </InText>
                    </Part>
                    <Part proportion='0.5' minWidth="200px">
                        <InText>
                            <Image 
                                imgSrc={require("../../pics/besttubeto.jpg")}
                            />
                        </InText>
                    </Part>
                    <Text>
                        <p>
                            Filming with BestTubeTo in Southwark park for an interesting 
                            project to promote London's landmarks, even in the lockdown times.
                        </p>
                        <p>
                            Check out the <a href="#my-music/originals">originals</a> section for more!
                        </p>
                    </Text>
                </div>
            </News>

            <News name="Walking on - now live!" date="06/2020">
                <div className="flex-container">
                    <Part proportion='0.6' minWidth="200px">
                        <Text>
                            <p>
                                A new song, first one from my time in London. Check out the <a href="#my-music">my music</a> section!
                            </p>
                        </Text>
                    </Part>
                    <Part proportion='0.4' minWidth="200px">
                        <InText>
                            <YouTube id="o6nnCW7Rn1Y"/>
                        </InText>
                    </Part>
                    
                </div>
            </News>

            <News name="NEW SONG! How I'll remember Cardiff is now live!" date="06/2020">
                <div className="flex-container">
                    <Part proportion='0.4' minWidth="200px">
                        <InText>
                            <YouTube id="e1BE3NQ2KHA"/>
                        </InText>
                    </Part>
                    <Part proportion='0.6' minWidth="200px">
                        <Text>
                            <p>
                                "How I'll remember Cardiff" is finally live! It took me a while to record this one
                                as I not only wanteed to tweak the music, but also record a videoclip. The result is 
                                quite simply the epitome of the title: how I'll always remember Cardiff!
                            </p>
                            <p>
                                See more in <a href="#my-music">my music</a> section!
                            </p>
                        </Text>
                    </Part>
                </div>
            </News>

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
