module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "9xl": "900px",
      },
      colors: { summaryGray: "#EAEAEC" },
      brightness: {
        40: ".40",
      },
      backgroundImage: {
        hero: 'linear-gradient(to bottom, #000000c7, #000000b4, #000000a0, #00000080, #00000066), url("https://travel-costarica.net/wp-content/uploads/2022/09/our-hideout.jpg")',
        resume: 'linear-gradient(to bottom, #000000c7, #000000b4, #000000a0, #00000040, #00000030), url("./src/assets/landscape.jpg")',
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
      },
      letterSpacing: {
        0.08: "0.08em",
      },
      fontSize: {
        title: "32px",
        summary: "22px",
        iconLabel: "14px",
      },
      fontWeight: {
        250: "250",
        200: "200",
      },
      width: {
        50: "50px",
        640: "640px",
      },
      height: {
        50: "50px"
      },
      padding: {
        68: '68px',
        "resume": "22px 38px",
      },
      letterSpacing: {
        1.5: "1.5px"
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
