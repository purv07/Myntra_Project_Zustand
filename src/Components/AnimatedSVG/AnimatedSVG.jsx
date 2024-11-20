import React, { useEffect, useRef } from 'react';
import Vivus from 'vivus';

const AnimatedSVG = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        new Vivus(svgRef.current, {
            type: 'oneByOne',
            duration: 200,
            start: 'inViewport',
        });
    }, []);

    return (
        <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className='absolute top-0 right-0 m-3'
            width="24"
            height="24"
            color="#000000"
            fill="none"
        >
            <path
                d="M14.9994 15L9 9M9.00064 15L15 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="oWhVCBhn_0"
            />
            <path
                d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                className="oWhVCBhn_1"
            />
            <style data-made-with="vivus-instant">
                {`
                    .oWhVCBhn_0 {
                        stroke-dasharray: 17 19;
                        stroke-dashoffset: 18;
                        animation: oWhVCBhn_draw_0 4100ms linear infinite,
                                   oWhVCBhn_fade 4100ms linear infinite;
                    }
                    .oWhVCBhn_1 {
                        stroke-dasharray: 63 65;
                        stroke-dashoffset: 64;
                        animation: oWhVCBhn_draw_1 4100ms linear infinite,
                                   oWhVCBhn_fade 4100ms linear infinite;
                    }
                    @keyframes oWhVCBhn_draw_0 {
                        to { stroke-dashoffset: 0; }
                    }
                    @keyframes oWhVCBhn_draw_1 {
                        to { stroke-dashoffset: 0; }
                    }
                    @keyframes oWhVCBhn_fade {
                        to { stroke-opacity: 0; }
                    }
                `}
            </style>
        </svg>
    );
};

export default AnimatedSVG;