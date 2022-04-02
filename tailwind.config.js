module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      75: "75vh",
    },
    extend: {
      backgroundImage: {
        wave: "url('./assets/wave.svg')",
        me: "url('./assets/me.jpg')",
        contact: "url('./assets/contact.svg')",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        colorChange: {
          "0%": { color: "#4FACF7" },
          "50%": { color: "#0066FF" },
          "100%": { color: "#0C4A6E" }
        },
        moveWave: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-25%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in": "fadein 1.5s ease-out",
        "color-change": "colorChange 3s infinite alternate",
        "wave-fast": "moveWave 10s linear infinite alternate",
        "wave-slow": "moveWave 15s linear infinite alternate",
        "wave-fast-mobile": "moveWave 3s linear infinite alternate",
        "wave-slow-mobile": "moveWave 5s linear infinite alternate"
      },
      width: {
        "double": "200%"
      },
      backgroundPosition: {
        "top-70": "0% 70%",
        "top-80": "0% 80%",
      }
    },
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    extend: {
      animation: ["motion-safe", "motion-reduce"],
    },
  },
  plugins: [],
};
