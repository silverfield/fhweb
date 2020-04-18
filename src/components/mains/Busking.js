import {PageSection, InText, Text, Part, FlexContainer, Image, YouTube} from '../../helpers/combo-helper'
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
            <div className="page-title">
                Total good cause donations: <span className="raised-sum">£{totalSum}</span>
            </div>
            <div>
                <InText width="40%" float='left' minWidth="350px">
                    <YouTube id='jAXI18tFkUM'/>
                </InText>
                <Text>
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
                </Text>
            </div>

            <Causes name="2019 - Various causes" sum={500}>
                <InText width="40%" float='left' minWidth="350px">
                    <Image 
                        imgSrc={require("../../pics/library-2.jpg")}
                    />
                </InText>
                <Text>
                    <p>
                        Throughout the year of 2019, I've used the ever increasing "busking fund" 
                        to support various causes, donating in total over £1000. Much of this is 
                        mentioned on this page, however other causes I supported included:
                    </p>
                    <p>
                        <li>Ocean cleanup</li>
                        <li>Alzheimer society</li>
                        <li>School bus for local school</li>
                        <li>Wikipedia</li>
                        <li>...</li>
                    </p>
                </Text>
            </Causes>

            <Causes name="Dec 2019 - Christmas busking choir" sum={112}>
                <Text>
                    A repeat of the successfuly Christmas choir busking, this time in front of
                    Cardiff's Central market, again with all donations going to homelessness 
                    charity Llamau.
                </Text>

                <FlexContainer>
                    <Part proportion="0.41" minWidth="300px">
                        <InText>
                            <Image 
                                imgSrc={require("../../pics/xmas-busk-2.jpg")}
                                caption="2nd edition of Christmas choir busking"
                            />
                        </InText>
                    </Part>
                    <Part proportion="0.59" minWidth="300px">
                        <InText>
                            <YouTube 
                                id="lDT0HmsCoSo"
                                caption="Second Christams Choir busking took place by Cardiff Central Market"
                            />
                        </InText>
                    </Part>
                </FlexContainer>
            </Causes>

            <Causes name="July 2019 - Education trips for kids" sum={150}>
                <Text>
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
                </Text>
                <div className="flex-container">
                    <Part proportion="0.535" minWidth="250px">
                        <InText>
                            <Image 
                                imgSrc={require('../../pics/triathlon.jpg')}
                                caption="Triathlon done!"
                            />
                        </InText>
                    </Part>
                    <Part proportion="0.465" minWidth="250px">
                        <InText>
                            <Image
                                imgSrc={require("../../pics/bay-prof-1.jpg")}
                                caption="A paparazzi snapshot by a photographer Jayne"
                            />
                        </InText>
                    </Part>
                </div>
            </Causes>

            <Causes name="Spring 2019 - Busking for Llamau" sum={150}>
                <div className="float-container">
                    <InText float='left' width='40%' minWidth='300px'>
                        <Image 
                            imgSrc={require("../../pics/queen-street-03.png")}
                            caption="Busking at Queen street"
                        />
                    </InText>

                    <Text>
                        As a busker, I witnessed first hand the deteriorating state of homelessness on 
                        the streets of Cardiff. This prompted me to donate some more of the raised money to 
                        the homelessness charity Llamau, which works with young and vulnerable people
                        at the risk of becoming homeless. 
                    </Text>
                </div>

                <FlexContainer>
                    <Part proportion="0.53" minWidth="300px">
                        <InText>
                            <Image
                                imgSrc={require("../../pics/cardiff-library.jpg")}
                                caption="By Cardiff Central library"
                            />
                        </InText>
                        <InText>
                            <YouTube 
                                id='gq2l-B-4TXo' 
                                caption="Lights of Taormina in my favorite spot in Cardiff Bay"
                            />
                        </InText>
                    </Part>
                    <Part proportion="0.47" minWidth="300px">
                        <InText>
                            <Image
                                imgSrc={require("../../pics/prof-pic-1.png")}
                                caption={<>
                                    Busking at The Hayes. Pic 
                                    by <a href="https://www.instagram.com/garethsphotography/">Gareth</a>, 
                                    truly the best photographer I know of!
                                </>}
                            />
                        </InText>
                    </Part>
                </FlexContainer>
            </Causes>

            <Causes name="Dec 2018 - Christmas busking choir" sum={126}>
                <Text>
                    In December 2018, I organized a busking performance with the choir
                    I've been attending at my former workplace (Office for National Statistics). The performances
                    took place at The Hayes in Cardiff and all raised money
                    was donated to a homelessness charity Llamau.
                </Text>
                
                <FlexContainer>
                    <Part proportion="0.41" minWidth="250px">
                        <InText>
                            <Image 
                                imgSrc={require("../../pics/xmas-busk-1.jpg")}
                                caption="Christmas choir busking at The Hayes"
                            />
                        </InText>
                    </Part>
                    <Part proportion="0.59" minWidth="250px">
                        <InText>
                            <YouTube 
                                id="rEIFkwG7Iz8"
                                caption="Have yourself a merry little Christmas"
                            />
                        </InText>
                    </Part>
                </FlexContainer>
            </Causes>

            <Causes name="Oct 2014 - Guitar for SOS childrens village in Bergen" sum={250}>
                <div className="float-container">
                    <InText float='right' minWidth='300px' width='40%'>
                        <Image
                            imgSrc={require("../../pics/sos-1.jpg")}
                            caption="Delivering the guitar to SOS Children's village central in Oslo"
                        />
                    </InText>

                    <Text>
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
                        
                        <p>
                            For more on the journey of my busking in Norway, 
                            check out <a href="http://zivotvosle.blogspot.com/">my blog post</a>.
                        </p>
                    </Text>
                </div>

                <FlexContainer>
                    <Part proportion="0.4" minWidth="250px">
                        <InText>
                            <Image
                                imgSrc={require("../../pics/oslo-aker.jpg")}
                                caption="THE busking spot!"
                            />
                        </InText>
                        <InText>
                            <Image
                                imgSrc={require("../../pics/sos-2.jpg")}
                                caption="The Gretsch electric guitar bought for Children's village in Bergen"
                            />
                        </InText>
                    </Part>
                    <Part proportion="0.6" minWidth="250px">
                        <InText>
                            <Image
                                imgSrc={require("../../pics/oslo-marco.jpg")}
                                caption="With Marco, busking in Aker Brygge"
                            />
                        </InText>
                        <InText>
                            <Image
                                imgSrc={require("../../pics/oslo-moni.jpg")}
                                caption={<>
                                    With Moni, busking in Aker Brygge. Check 
                                    out the <a href="#my-music/collaborations">collaborations</a> section!
                                </>}
                            />
                        </InText>
                        <InText>
                            <YouTube 
                                id='EIn1qxRQBrU'
                                caption="Busking at Aker Brygge - as usual"
                            />
                        </InText>
                    </Part>
                </FlexContainer>
            </Causes>
        </> 
    );
}
  