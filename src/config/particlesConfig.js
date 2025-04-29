// src/config/particlesConfig.js
export const particlesConfig = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#00f0ff", // Cyan Particle color
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: { enable: false },
      },
      links: { // Corrected property name from line_linked
        enable: true,
        distance: 150,
        color: "#9400d3", // Purple Line color
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: { // Corrected property name
          default: "out",
        },
        bounce: false,
        attract: { enable: false },
      },
    },
    interactivity: {
      detectsOn: "canvas", // Corrected property name
      events: {
        onHover: { // Corrected property name
          enable: true,
          mode: "repulse",
        },
        onClick: { // Corrected property name
          enable: true,
          mode: "push",
        },
        resize: { enable: true } // Ensure resize is explicitly enabled
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 4, // Corrected property name
        },
      },
    },
    detectRetina: true, // Corrected property name
  };