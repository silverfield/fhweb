export default function About({

}) {
    return (
        <>
            <p className="section-title">
                Errr... Who are you?
            </p>

            <div>
                <p>
                    As written at the home page, "my name is Fero, and I'm a guitarist, 
                    song-writer and a busker based in London". But my friend Alex once said 
                    "London has many faces". And just like London, I too, have many faces.
                </p>

                <div className="page-section">
                    <img src={require("../../pics/grass-2.jpg")} className="float-img float-right" />

                    <p>
                        <span className="about-face">The guitar face</span>. But let's start with this one.
                        Unlike many people, who
                        start playing in their childhood and often drop the instrument when starting uni, 
                        I did the opposite and made my first strums on a classical guitar when I was
                        18. I soon realized that I enjoy improvising (or at least trying it) 
                        and after the obligatory pentatonics, I started to explore
                        more of the music theory. Luckily, my teacher - Ali Kovac - was one of the more
                        progressive ones and after a couple years of improving my technique through 
                        classical guitar, we moved on to do electric guitar, blues, extended scales and
                        much more.
                    </p>

                    <p>
                        One of the breakthroughs for me was discovering the music of Dire Straits and
                        Mark Knopfler. I still remember that moment. We were in London over the summer of 2008, 
                        sort of Work &amp; Travel thing. One day, we were in our shitty room in Walthamstow, 
                        as usual bitching 
                        about not earning enough money through our minimum-wage jobs. At some point, 
                        when we had enough, my friend Roman (a long-standing Dire Straits fan) played me 
                        the <a href="https://www.youtube.com/watch?v=_4E_924b9SU&feature=youtu.be&t=250">first solo from Telegraph road </a>.
                        I somehow got it on my iPod and that was it. Since then, literally every day on 
                        the way to and from work, I would listen to that solo over
                        and over again. I found it absolutely captivating, beautiful and somewhat 
                        special - it was simply something I never found in music before, and haven't found 
                        in the music ever since. Roman's "recommender"
                        system kicked in soon after and he suggested another one,
                        the <a href="https://youtu.be/gAirINwjaxE?t=343">outro of Tunnel of love</a>, which 
                        became the first proper solo that I learned (and subsequently played over and over 
                        again like a broken radio). 
                    </p>

                    <figure className="float-img float-left">
                        <img src={require("../../pics/london-room.jpg")} />
                        <figcaption>
                            Roman told me about Dire Straits in this (rather messy) room in London in 2008
                        </figcaption>
                    </figure>

                    <p>
                        By that time though, I was hooked enough, and I went on to listen to anything that 
                        Mark Knopfler (frontman of Dire Straits) touched, 
                        learned countless of the songs, seen him live five times and 
                        tried to unravel the beauty of his playing. If there's one thing that I know for sure
                        that I'll never get tired of, it is Mark's music. For although it has been now 
                        close to 12 years since that moment in Walthamstow, I still listen to Telegraph road
                        with the same enthusiasm and the first solo of the song is, if anything, 
                        even more beautiful than
                        it was back then.
                    </p>

                    <p>
                        Other than Dire Strais/Mark Knopfler, I find a lot of inspiration in 
                        John Mayer's music - 
                        always superbly produced, and a rare combination of relatively pop-y and 
                        mainstream genre with intelligent and melodic guitar playing, one that can be 
                        easily be deemed "cool" by any guitarist's standards.
                    </p>

                    <figure className="float-img float-right">
                        <img src={require("../../pics/with-roman.jpg")} />
                        <figcaption>With Roman in Oslo, 2015</figcaption>
                    </figure>

                    <p>
                        To mention a few more, Tommy Emmanuel's energy, technique and beautiful acoustic 
                        melodies are frequently seen on my playlists, and so are some of the more David 
                        Gilmour inspired Pink Floyd songs (e.g. Coming back to life). Bruce Springsteen, 
                        Gary Moore, Eric Clapton, Simon &amp; Garfunkel and others further 
                        shaped my taste in music and playing.
                    </p>

                    <p>
                        Finally, I am definitely a sucker for mainstream stuff too - simple, melodic songs that
                        render themselves nicely to duo-projects, harmonizing, perhaps a simple loop with a 
                        solo on top. Ed Sheeran, Katie Melua or soundtracks from musicals form considerable chunks
                        of my songbook and ocassional jam-times with singers.
                    </p>
                </div>
                
                <div className="page-section clear-float">
                    <figure className="float-img float-left">
                        <img src={require("../../pics/krakow.jpg")} />
                        <figcaption>Krakow, Quality in Official Statistics 2018</figcaption>
                    </figure>
                    <p>
                        <span className="about-face">The data face</span>. My main occupation and profession is, 
                        however, in a different industry. With a background in computer science and my main work 
                        experiences as a Big data engineer, Data scientist 
                        and most recently Lead data engineer, 
                        I think the term most reflective of my professional path is "Data science engineering". 
                        Admitedly,
                        I like to keep the "data science" bit in it mainly for that sexy touch. But then, I think 
                        it's the roles on that boundary of engineering and data science that are the most 
                        interesting to me, and where I like to position myself. 
                    </p>

                    <figure className="float-img float-right">
                        <img src={require("../../pics/ons.jpg")} />
                        <figcaption>My last day at ONS, Dec. 2019</figcaption>
                    </figure>
                    <p>
                        Other than that, I spent a year doing full-stack web dev too and I found the responsive
                        frontend work quite fun too. This led me to teaching myself some React and using it either
                        in <a href="https://onsbigdata.github.io/dcm-transcripts-new/travis/dist/index.html">work</a> or 
                        even for this website.
                    </p>
                    <p>
                        People sometimes ask me if I consider dropping the "data career" and going fulltime with
                        music. There were times when I played with the idea. And there may be those times again. But 
                        at the moment I consider myself lucky to have a job I actually like to do - not just
                        <i>"doing"</i> the programming/tech work, but mainly showing others what is possible and 
                        helping organizations getting more efficient - automating the "boring stuff" and creating 
                        space for innovation. Combined with my job being in UK's Civil service, it not only 
                        drives my motivation to see my work benefit public good, but it also provides for a 
                        good work-life balanced role - one that leaves lots of energy and time for music... And 
                        the other "faces" of mine, like...
                    </p>
                </div>

                <div className="page-section clear-float">

                    <figure className="float-img float-left">
                        <img src={require("../../pics/norway-bikes.jpg")} />
                        <figcaption>Bike trip with a guitar on board, Norway 2019</figcaption>
                    </figure>

                    <figure className="float-img float-right">
                        <img src={require("../../pics/nepal.jpg")} />
                        <figcaption>Annapurna circuit, Nepal, 2019</figcaption>
                    </figure>

                    <p>
                        <span className="about-face">The outdoors face</span>. Outdoors is awesome. There's hardly
                        a better weekend I can imagine than an overnight hike in the countryside with friends, 
                        wild-camping in the middle of nowhere. Add jumps to waterfall pools, views from the
                        mountain tops and
                        the obligatory well-deserved dinner in the pub (with a couple pints, of course), and 
                        you're good to go for another week of mentally difficult work. It's simply the ultimate cure,
                        for body and the mind alike. The only downside is that it's just hard to bring 
                        a guitar to a hike. 
                    </p>

                    <p>
                        Or is it? Arun once showed me his Klos travel guitar - a carbon-fibre 
                        3/4-sized acoustic marvel that is not only lightweight enough to add to clip on to
                        the backpack, but which is also near-indestructible thanks to the materials used. 
                        A week later, I ordered mine and it has been an excellent companion on many hikes, 
                        or simply the extra acoustic guitar I'd take when going busking.
                    </p>
                </div>

                <div className="page-section clear-float">
                    <figure className="float-img float-right">
                        <img src={require("../../pics/usa.jpg")} />
                        <figcaption>Last day at Dough Roller pizzeria, Ocean City, US, 2012</figcaption>
                    </figure>

                    <p>
                        <span className="about-face">The pizza face</span>. It started long time ago,
                        when I was still at high school in Bratislava. I realized I like to make pizzas
                        and I would frequently make - from scratch - six or so large pies 
                        for the whole family.
                        Later, in 2012 on Work &amp; Travel in US, I'd pick jobs as a pizza chef 
                        in two pizzerias
                        where I'd considerably up the game, learning how pizzerias work and 
                        participating in the whole pizza making pipeline first hand.
                    </p>

                    <figure className="float-img float-left">
                        <img src={require("../../pics/first-pizza-hunt.png")} />
                        <figcaption>My first ever official <a href="http://ferovpizzaquest.blogspot.com/2013/02/pizzeria-boccaccio-v-nitre-15.html">pizza hunt</a> in Nitra, 2013</figcaption>
                    </figure>

                    <p>
                        Shortly after, in 2013, I'd then start 
                        my <a href="http://ferovpizzaquest.blogspot.com/">pizza-hunt blog</a> which was 
                        recently renamed to "A Slice of Life" following suggestion by my friend Vinny. 
                        It now features 50 blog posts from pizzeria visits in about 20 different 
                        countries, capturing not just the taste of the pizzas, 
                        but also the adventures along the way. 
                    </p>

                    <figure className="float-img float-right">
                        <img src={require("../../pics/ripc.jpg")} />
                        <figcaption>In Real Italian Pizza Company, 2015</figcaption>
                    </figure>
                    
                    <p>
                        The last and most significant "pizza stop" in my life was working at the
                        Real Italian Pizza Company in Cardiff, following my arrival to UK in 
                        the fall of 2015. A much different experience than the one from the US, 
                        it was here where I really understood what separates "just another pizzeria"
                        from the top ranked ones (which RIPC is to this day amongst restaurants in Cardiff). 
                        The work was fun, the food was excellent and my head chef Paola and the 
                        colleagues nice people, and so I stayed for almost a whole year, 
                        albeit slowly phasing out my hours once I started a full-time 
                        software engineering job...
                    </p>
                </div>

                <div className="page-section">
                    <figure className="float-img float-right">
                        <img src={require("../../pics/oslo-jam.jpg")} />
                        <figcaption>Oslo jam session meetup, 2014</figcaption>
                    </figure>

                    <figure className="float-img float-left">
                        <img src={require("../../pics/bergen.jpg")} />
                        <figcaption>Street-play tour, Bergen, 2015</figcaption>
                        <img src={require("../../pics/ghana.jpg")} />
                        <figcaption>At AIMS, Ghana, 2015</figcaption>
                    </figure>

                    <p>
                        <span className="about-face">The blogger face</span>. 
                        <a href="http://ferovpizzaquest.blogspot.com/">The Slice of Life</a> was my 
                        entry ticket 
                        to the the blogger life, but I soon realized I enjoyed writing about other 
                        things too: life in a new place abroad, busking or the obligatory 
                        travelling experiences. Quite often these would fit at my pizza blog thanks to the odd
                        visit to a pizzeria on the way. But at times, I felt a dedicated blog 
                        would work better and make me feel less obliged seeking a slice of pizza 
                        just to put up a new blog post :-) .
                    </p>

                    <p>
                        First such addition was my blog <a href="http://zivotvosle.blogspot.com/">Life 
                        in Oslo</a>, which depicted the roughly year and half that I spent in the 
                        Norwegian capital. Another blog followed 
                        from likely the most memorable time of my life - 4 months in Ghana 
                        at the <a href="http://feroafrica.blogspot.com/">African Institute of 
                        Mathematical Sciences</a>. Shortly after, 
                        while <a href="http://ferostreetplay.blogspot.com/">busking around northern Europe</a> in 
                        June 2015, 
                        I expanded my blog family 
                        yet again before finally realizing I just need something generic where
                        I can keep writing about anything I want - leading 
                        to <a href="http://ferowrites.blogspot.com/">Fero writes</a> (kicked off 
                        with my most-read blog post ever - albeit one that I wish I wouldn't have needed 
                        to write) . 
                    </p>
                    
                    <p>
                        Writing, song-writing, composing, creating. The first step may seem hard. 
                        It may take time. But the end result is worth it. For once it's there, it is 
                        there forever - a bit of you engraved in the world... ;-)
                    </p>
                    
                </div>
                
            </div>
        </> 
    );
}
  