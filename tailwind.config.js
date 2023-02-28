module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "9xl": "900px",
        50: "50px",
      },
      colors: { summaryGray: "#EAEAEC", odu: "#1C3766" },
      brightness: {
        40: ".40",
      },
      backgroundImage: {
        hero: 'linear-gradient(to bottom, #000000c7, #000000b4, #000000a0, #00000080, #00000066), url("https://travel-costarica.net/wp-content/uploads/2022/09/our-hideout.jpg")',
        resume:
          'linear-gradient(to bottom, #000000c7, #000000b4, #000000a0, #00000040, #00000030), url("https://lh3.googleusercontent.com/fODf5_3GTz6ZdHweGFEO2aOt3kDHSceEvV6BVR040YZq750O9tx3GRALkQL94UoVnPjioJN15I8Qv_hIfzOwz3i06bL3kQkTKP1uT9Q")',
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
      },
      letterSpacing: {
        0.08: "0.08em",
        1.5: "1.5px",
      },
      fontSize: {
        title: "32px",
        summary: "22px",
        iconLabel: "14px",
        technologies: "16px",
      },
      fontWeight: {
        250: "250",
        200: "200",
        225: "225",
      },
      width: {
        50: "50px",
        640: "640px",
      },
      padding: {
        68: "68px",
        resume: "22px 38px",
        6: "24px",
      },
      maxWidth: {
        256: "256px",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
