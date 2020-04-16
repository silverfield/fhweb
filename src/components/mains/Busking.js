import {PageSection} from '../../helpers/combo-helper'
import {useState} from "react"
import { useEffect } from "react";

var totalSumAccumulator = 0;

function Causes({
    name,
    sum,
    children
}) {
    totalSumAccumulator += sum;

    return <>
        <PageSection name={name} headerExtra={<span className="cause-sum">£{sum}</span>}>
            {children}
        </PageSection>
    </>
}

export default function Busking({

}) {
    const [totalSum, setTotalSum] = useState(0);

    useEffect(() => {
        setTotalSum(totalSumAccumulator);
        totalSumAccumulator = -totalSumAccumulator;
    }, [])

    return (
        <>
            <div className="section-title">
                Total good cause donations: <span className="raised-sum">£{totalSum}</span>
            </div>
            <div>
                <div className="float-img" style={{'width': '40%'}}>
                    <div className="iframe-div">
                        <iframe src="https://www.youtube.com/embed/jAXI18tFkUM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                    </div>
                </div>
                <p>
                    I started to busk in 2014 and I love it ever since. 
                    For me, it's not about money - I enjoy playing for people, connecting 
                    with the street and seeing how people react. When busking, I feel alive and 
                    the instant feedback, be it a small donation or just a thumb up from the passers
                    by, is simply irreplaceable. 
                </p>
                <p>
                    When busking, I have a "<b>50% for good</b>" rule. This means that 50% of what
                    I raise goes for a good cause - check out the causes I supported over the years below.
                    And if this is not a good enough reason to support me busking, watch this video :-)
                </p>
            </div>

            <Causes name="2019 - Various causes" sum={500}>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={require("../../pics/library-2.jpg")} />
                    </div>
                    <div className="col-sm-6">
                        <p>
                            Throughout the year of 2019, I've used the ever increasing "busking fund" 
                            to support various causes, donating in total over £1000. Much of this is 
                            mentioned on this page, however other causes I supported included:
                        </p>
                        <ul>
                            <li>Ocean cleanup</li>
                            <li>Alzheimer society</li>
                            <li>School bus for local school</li>
                            <li>Wikipedia</li>
                            <li>...</li>
                        </ul> 
                    </div>
                </div>
            </Causes>

            <Causes name="Dec 2019 - Christmas busking choir" sum={112}>
                A repeat of the successfuly Christmas choir busking, this time in front of
                Cardiff's Central market, again with all donations going to homelessness 
                charity Llamau.

                <div className="row">
                    <div className="col-sm-5">
                        <figure className="float-img float-left" style={{'width': '100%'}}>
                            <img src={require("../../pics/xmas-busk-2.jpg")} />
                            <figcaption>
                                2nd edition of Christmas choir busking
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-sm-7">
                        <div className="iframe-div">
                            <iframe src="https://www.youtube.com/embed/lDT0HmsCoSo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                        </div>
                    </div>
                </div>
            </Causes>

            <Causes name="July 2019 - Education trips for kids" sum={150}>
                <div className="row">
                    <div className="col-sm-4">
                        <figure className="float-img float-left" style={{'width': '100%'}}>
                            <img src={require("../../pics/triathlon.jpg")} />
                            <figcaption>
                                Triathlon done
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-sm-4">
                        <p>
                            In July 2019, I participated the Cardiff Bay triathlon, as part of which
                            I was raising money for education programmes for school kids from poor parts 
                            of my home country. I
                            contributed £150 to the fund, eventually reaching the target of £500.
                        </p>
                        <p>
                            Even better, I finished the triathlon! Read more about this experience
                            on <a href="http://ferowrites.blogspot.com/2019/07/cardiff-bay-triathlon.html">this blog post.</a>
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col">
                                <img src={require("../../pics/bay-prof-1.jpg")} />
                            </div>
                        </div>
                    </div>
                </div>
            </Causes>

            <Causes name="Spring 2019 - Busking for Llamau" sum={150}>
                As a busker, I witnessed first hand the deteriorating state of homelessness on 
                the streets of Cardiff. This prompted me to donate some more of the raised money to 
                the homelessness charity Llamau, which works with young and vulnerable people
                at the risk of becoming homeless. 

                <div className="row">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <img src={require("../../pics/cardiff-library.jpg")} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src={require("../../pics/queen-street-03.png")} />
                            </div>
                        </div>
                            <div className="col">
                        <div className="row">
                                <div className="iframe-div">
                                    <iframe src="https://www.youtube.com/embed/gq2l-B-4TXo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 center-content-vert">
                        <div className="row">
                            <div className="col">
                                <figure className="float-img float-left" style={{'width': '100%'}}>
                                    <img src={require("../../pics/prof-pic-1.png")} />
                                    <figcaption>
                                        Pic by <a href="https://www.instagram.com/garethsphotography/">Gareth</a>, the best
                                        photographer I know
                                    </figcaption>
                                </figure>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Causes>

            <Causes name="Dec 2018 - Christmas busking choir" sum={126}>
                In December 2018, I organized a busking performance with the choir
                I've been attending at my former workplace (Office for National Statistics). The performances
                took place at The Hayes in Cardiff and all raised money
                was donated to a homelessness charity Llamau.
                
                <div className="row">
                    <div className="col-sm-5">
                        <img src={require("../../pics/xmas-busk-1.jpg")} />
                    </div>
                    <div className="col-sm-7 center-content-vert">
                        <div className="iframe-div">
                            <iframe src="https://www.youtube.com/embed/rEIFkwG7Iz8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                        </div>
                        
                    </div>
                </div>
            </Causes>

            <Causes name="Oct 2014 - Guitar for SOS childrens village in Bergen" sum={250}>
                <p>
                    The idea of "busking for good" originated when I started busking 2014 in Oslo. 
                    I realized I have 
                    quite a bit of fun simply doing it and that the money is secondary. And that's
                    when I set myself the "<b>50% for good</b>" rule - setting aside 50% of the
                    raised money for a good cause. 
                </p>
                
                <p>
                    I got in touch with a few charities and the SOS Childrens' Village
                    responded - they would love if I could "busk out" a new guitar for their centre
                    in Bergen, where music is used as a means of therapy. 
                </p>

                <p>
                    The new goal turned out to be more than achievable and by the end of autumn 2014,
                    I raised enough to buy and hand over the beautiful Gretsch electric guitar.
                </p>
                
                <div className="row">
                    <div className="col-sm-5">
                        <div className="row">
                            <div className="col">
                                <p>
                                    For more on the journey of my busking in Norway, 
                                    check out <a href="http://zivotvosle.blogspot.com/">my blog post</a>.
                                </p>
                                
                                <img src={require("../../pics/oslo-aker.jpg")} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <figure className="float-img float-left" style={{'width': '100%'}}>
                                    <img src={require("../../pics/sos-2.jpg")} />
                                    <figcaption>
                                        The Gretsch electric guitar bought for Children's village in Bergen
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="row">
                            <div className="col">
                                <figure className="float-img float-left" style={{'width': '100%'}}>
                                    <img src={require("../../pics/sos-1.jpg")} />
                                    <figcaption>
                                        Delivering the guitar to SOS Children's village central in Oslo
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <figure className="float-img float-left" style={{'width': '100%'}}>
                                    <img src={require("../../pics/oslo-marco.jpg")} />
                                    <figcaption>
                                        With Marco, busking in Aker Brygge
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <figure className="float-img float-left" style={{'width': '100%'}}>
                                    <img src={require("../../pics/oslo-moni.jpg")} />
                                    <figcaption>
                                    With Moni, busking in Aker Brygge. Check 
                                    out the <a href="#my-music/collaborations">collaborations</a> section!
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="iframe-div">
                                    <iframe src="https://www.youtube.com/embed/EIn1qxRQBrU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Causes>
        </> 
    );
}
  