// src/components/ParticlesBackground/ParticlesBackground.jsx
import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // or loadFull if needed
import { particlesConfig } from '../../config/particlesConfig'; // Import the config

const ParticlesBackground = React.memo(() => { // Wrap in React.memo for potential optimization
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing particles engine..."); // Add console log
    // Load the slim preset for tsparticles
    await loadSlim(engine);
    console.log("Slim engine loaded."); // Add console log
    // you can add custom shapes or presets here (optional)
  }, []);

  const particlesLoaded = useCallback(container => {
      console.log("Particles container loaded:", container?.id);
      // You can store the container instance if needed using useRef
  }, []);

  // Memoize the options object to prevent unnecessary re-renders
  const options = useMemo(() => (particlesConfig), []);

  return (
      <Particles
          id="tsparticles" // Ensure this matches any potential CSS selector
          className="particles-canvas" // Add class for styling
          init={particlesInit}
          loaded={particlesLoaded}
          options={options}
      />
  );
}); // End React.memo

export default ParticlesBackground;
