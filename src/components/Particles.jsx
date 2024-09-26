"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

const particleOptions = {
  fullScreen: {
    enable: true,
    zIndex: -1,
    // IMPORTANT
  },
  background: {
    color: {
      value: "#060121",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 2,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

// eslint-disable-next-line react/prop-types
export const ParticlesBackrgound = ({ children }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);

    // LOAD ANY ONE
    // await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
      />
      {children}
    </>
  );
};

export default ParticlesBackrgound;
