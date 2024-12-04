import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '/assets/github.json'; // Adjust the path to your JSON file

const GithubAnimation = () => {
    const animationContainer = useRef(null);

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: animationContainer.current, // Reference to the container div
            renderer: 'svg', // Render as SVG
            loop: true, // Loop the animation
            autoplay: true, // Start playing automatically
            animationData: animationData, // JSON animation data
        });

        return () => {
            animation.destroy(); // Cleanup on component unmount
        };
    }, []);

    return <div ref={animationContainer} style={{ width: 100, height: 100 }} />;
};

export default GithubIcon;
