import React from "react";
import Particles from "react-tsparticles";

const Space = () => {
    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    color: "#000" // Dark space background
                },
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ffffff" // White stars
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: 0.5,
                        random: true
                    },
                    size: {
                        value: 3,
                        random: true
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out"
                    }
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse"
                        }
                    }
                }
            }}
        />
    );
};

export default Space;