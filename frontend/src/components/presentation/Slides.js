import React from "react";

export default function Slides({
    
}) {
    var slides = [];

    var slideStepX = 1200;
    var slideStepY = 1000;
    var slideStepZ = 1000;
    var startX = 0;
    var startY = 0;

    var slideNo = 0;

    function addSlide({
            content, 
            id=null, 
            cssClasses="",
            x=null,
            y=null,
            z=0,
            yRot=0,
            others={}
    }={}) {
        // eval('debugger');

        var mainDivProps = {
            'className': "step slide " + cssClasses,
            'data-x': x,
            'data-y': y,
            'data-z': z,
            'data-rotate-y': yRot,
            'data-transition-duration': 800,
            ...others
        };

        if (id) {
            mainDivProps['id'] = id;
        }

        slides.push(
            <div {...mainDivProps} key={`${slideNo}`}>
                {content}
            </div>
        );

        slideNo += 1;
    }


    addSlide({
        x: startX,
        y: startY,
        id: 'title-slide',
        content: <>
            <div className="slide-center">
                <div className="main">My leadership <br/> <b className="aha-title">AHA!</b><br/> moments</div>
                <div className="author">
                    <div className="name">Fero Hajnovic</div>
                    <div className="affiliation">Office for National Statistics</div>
                </div>
            </div>

        </>
    });
    
    addSlide({
        x: startX + slideStepX,
        y: startY,
        id: 'intro',
        content: <>
            <div className="slide-heading">Once upon a time...</div>
            <div className="slide-body">
                <div className="slide-center">
                    hello
                </div>
            </div>
        </>
    });

    addSlide({
        id: 'overview',
        x: 0,
        y: 0,
        z: 0,
        others: {
            'data-scale':3.4
        },
        content: <div></div>
    });

    console.log(slides);

    return (
        <>
            {slides}
        </>
    )
}