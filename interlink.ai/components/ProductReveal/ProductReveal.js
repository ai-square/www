import React, { useRef, useLayoutEffect } from 'react';


const ProductReveal = () => {
    const iphoneStyle = {
        position: 'absolute',
        border: 'none',
        height: '100%',
    };

    const widgetsStyle = {
        position: 'absolute',
        zIndex: -1,
        transform: 'scale(0)', // CSS transforms can be used for scaling
        borderRadius: '30px',
    };

    const widgetsStyle2 = {
        position: 'absolute',
        zIndex: 1,
        transform: 'scale(0)', // CSS transforms can be used for scaling
        borderRadius: '30px',
        width: '20%',
        maxWidth: '400px',
    };

    const widgetsStyle3 = {
        position: 'absolute',
        zIndex: 1,
        transform: 'scale(0)', // CSS transforms can be used for scaling
        borderRadius: '30px',
        width: '15%',
        maxWidth: '300px',
    };

    const sectionStyle = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center', // Changed from justify-content to justifyContent
        alignItems: 'center',     // Changed from align-items to alignItems
        height: '100vh',
        width: '100vw',
    };

    const wrapperRef = useRef(null);

    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            Promise.all([
                import('gsap'),
                import('gsap/ScrollTrigger')
            ]).then(([gsapModule, ScrollTriggerModule]) => {
                const gsap = gsapModule.gsap;
                const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

                gsap.registerPlugin(ScrollTrigger);

                // Accessing elements using gsap.utils.selector
                const iphone = gsap.utils.selector(wrapperRef)('.iphone');
                const widgets = gsap.utils.selector(wrapperRef)('.widgets');

                // Set initial states
                gsap.set(iphone, { x: -575, scale: 1 });
                gsap.set(widgets, { opacity: 0, scale: 0 });
                
                // Animations array setup
                const animations = [
                    // {
                    //     selector: '#app-store',
                    //     duration: 3,
                    //     scale: 0.9,
                    //     x: 500,
                    //     y: 100,
                    //     ease: 'power4.out'
                    // },
                    {
                        selector: "#screen-time",
                        duration: 3,
                        scale: 1.2,
                        x: -600,
                        y: -200,
                        ease: 'power2.out'
                    },
                    {
                        selector: "#weather",
                        duration: 3,
                        scale: 1.1,
                        x: -400,
                        y: 350,
                        ease: 'power4.out'
                    },
                    {
                        selector: "#stocks",
                        duration: 3,
                        scale: 0.9,
                        x: 750,
                        y: -170,
                        ease: 'power4.out'
                    },
                    // {
                    //     selector: "#fitness",
                    //     duration: 3,
                    //     scale: 1.1,
                    //     x: -350,
                    //     y: -100,
                    //     ease: 'power2.out'
                    // },
                    // {
                    //     selector: "#find-my",
                    //     duration: 3,
                    //     scale: 1.1,
                    //     x: 400,
                    //     y: -360,
                    //     ease: 'power4.out'
                    // },
                    {
                        selector: "#calendar",
                        duration: 3,
                        scale: 0.9,
                        x: -730,
                        y: 200,
                        ease: 'power2.out'
                    },

                    // {
                    //     selector: "#wallet",
                    //     duration: 3,
                    //     scale: 1,
                    //     x: -280,
                    //     y: 100,
                    //     ease: 'power4.out'
                    // },
                    {
                        selector: "#apple-tv",
                        duration: 3,
                        scale: 1,
                        x: 600,
                        y: 300,
                        ease: 'power4.out'
                    },
                    // {
                    //     selector: "#sleep",
                    //     duration: 3,
                    //     scale: 0.9,
                    //     x: 270,
                    //     y: -50,
                    //     ease: 'power2.out'
                    // },
                    // {
                    //     selector: "#socials",
                    //     duration: 3,
                    //     scale: 1,
                    //     x: 330,
                    //     y: 120,
                    //     ease: 'power2.out'
                    // }
                ];

                // Iterate over the animations array to create a ScrollTrigger for each widget
                animations.forEach(({ selector, duration, scale, x, y, ease }, index) => {
                    gsap.fromTo(gsap.utils.selector(wrapperRef)(selector),
                        { opacity: 0, scale: 0 },
                        {
                            duration: duration,
                            scale: scale,
                            x: x,
                            y: y,
                            ease: ease,
                            opacity: 1,
                            scrollTrigger: {
                                trigger: wrapperRef.current,
                                start: "top center", // customize as needed
                                end: "top bottom" + ((animations.length - index - 1) * 100), // customize as needed
                                scrub: true,
                                markers: false
                            }
                        }
                    );
                });

                // Create a ScrollTrigger for the iPhone animation
                ScrollTrigger.create({
                    trigger: wrapperRef.current,
                    start: "top center",
                    end: "top bottom",
                    scrub: 3,
                    pin: true,
                    markers: false,
                    animation: gsap.timeline()
                        .to(iphone, { x: 0, rotation: 0, scale: 0.9, duration: 3 })
                        .to(iphone, { scale: 1, duration: 3 }) // Continue the timeline
                });

            }).catch(err => console.error("Failed to load GSAP modules:", err));
        }
    }, []);

    return (
        <div ref={wrapperRef} id="product-reveal" className="product-reveal" style={sectionStyle} >
            <style jsx="true">{`
                .bokeh {
                    height: 100vh;
                    width: 100vw;
                    z-index: -300;
                    background-color: #20014d; /* Changed to first dominant color */
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    filter: blur(50px);
                    transform: translateZ(0);
                    backface-visibility: hidden;
                }
                
                .bokeh circle {
                    animation: rotate 6s linear infinite;
                    fill: #002569; /* Dark purple */
                    opacity: 0.43;
                    transform-origin: 50%;
                }
                
                .bokeh circle:nth-child(2n) {
                    fill: #ff005c; /* Deep blue */
                    transform-origin: 20% 110%;
                    animation-delay: -3s;
                    animation-duration: 16.1316s;
                    opacity: 0.2;
                }
                
                .bokeh circle:nth-child(3n) {
                    opacity: 0.65;
                    fill: #780191; /* Darker purple */
                    transform-origin: 70% 30%;
                    animation-delay: -1.5s;
                    animation-duration: 28.9998s;
                }
                
                .bokeh circle:nth-child(4n) {
                    fill: #170142; /* Dark violet */
                    transform-origin: 110% 70%;
                    animation-delay: -2s;
                    animation-duration: 32.77996s;
                }

                @keyframes rotate {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
            <svg className="bokeh" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10%" cy="85%" r="75%" />
                <circle cx="45%" cy="50%" r="15%" />
                <circle cx="85%" cy="35%" r="30%" />
                <circle cx="60%" cy="85%" r="20%" />
                <circle cx="45%" cy="50%" r="30%" />
                <circle cx="35%" cy="25%" r="20%" />
                <circle cx="90%" cy="-25%" r="35%" />
                <circle cx="-15%" cy="30%" r="30%" />
                <circle cx="65%" cy="85%" r="55%" />
                <circle cx="45%" cy="50%" r="20%" />
            </svg>
            <iframe className="iphone" style={iphoneStyle} src="/assets/interlink-ai-product-demo/index.html"></iframe>



            {/* <iframe className="iphone" style={iphoneStyle}
                src="https://cdpn.io/cpe/boomboom/index.html?key=index.html-16b46083-edbf-5aa4-93b3-4e83b14da794">
            </iframe> */}
            {/* <img className="iphone" style={iphoneStyle} src="https://sqware.ai/Interlink-Solver.png" alt="" /> */}
            {/* <img id='app-store' className='widgets' style={widgetsStyle} src="https://assets.codepen.io/8292695/appstore-widget.svg" alt="" /> */}
            <img id='screen-time' className='widgets' style={widgetsStyle2} src="/assets/interlink-ai-product-demo/OCR.gif" alt="Smart Key Value Pair OCR Extraction with Inter-Link AI" />
            <img id='weather' className='widgets' style={widgetsStyle3} src="/assets/interlink-ai-product-demo/ASR.gif" alt="Compare Audio file with documents with Inter-Link AI" />
            <img id='stocks' className='widgets' style={widgetsStyle} src="assets/interlink-ai-product-demo/PDF.png" alt="Compare 2 PDF files with Inter-Link AI" />
            <img id='calendar' className='widgets' style={widgetsStyle3} src="/assets/interlink-ai-product-demo/fax-data.gif" alt="Compare Faxed documents and PDF with Inter-Link AI" />
            {/* <img id='fitness' className='widgets' style={widgetsStyle} src="https://assets.codepen.io/8292695/fitness-widget.svg" alt="" /> */}
            {/* <img id='find-my' className='widgets' style={widgetsStyle} src="https://assets.codepen.io/8292695/find-my-widget.svg" alt="" /> */}
            {/* <img id='sleep' className='widgets' style={widgetsStyle} src="https://assets.codepen.io/8292695/sleep-widget.svg" alt="" /> */}
            <img id='apple-tv' className='widgets' style={widgetsStyle3} src="/assets/interlink-ai-product-demo/paper-to-digital.gif" alt="Extract information from paper documents with Inter-Link-AI" />
            {/* <img id='wallet' className='widgets' style={widgetsStyle} src="https://assets.codepen.io/8292695/wallet.svg" alt="" /> */}
        </div>
    );
};

export default ProductReveal;