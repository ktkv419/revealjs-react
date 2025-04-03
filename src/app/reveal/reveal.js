import Reveal from "reveal.js"
import Boardmarker from "../../shared/plugin/chalkboard/img/boardmarker-black.png"

const colors = {
    blue0: "rgb(61, 89, 161)",
    blue: "rgb(122, 162, 247)",
    cyan: "rgb(125, 207, 255)",
    magenta: "rgb(187, 154, 247)",
    orange: "rgb(255, 158, 100)",
    yellow: "rgb(224, 175, 104)",
    green: "rgb(158, 206, 106)",
    teal: "rgb(26, 188, 156)",
    red: "rgb(255, 117, 127)",
    red1: "rgb(219, 75, 75)",
    fg: "rgb(192, 202, 245)",
    bg: "rgb(26, 27, 38)",
    transparent: "#00000000",
}

export const initReveal = () =>
    Reveal.initialize({
        hash: true,
        // Learn about plugins: https://revealjs.com/plugins/
        plugins: [
            window.RevealMarkdown,
            window.RevealHighlight,
            // window.RevealNotes,
            window.RevealMermaid,
            window.RevealChalkboard,
            window.RevealCustomControls,
        ],

        slideNumber: true,

        customcontrols: {
            controls: [
                {
                    icon: "<div></div>",
                    title: "Clear canvas (DEL)",
                    action: "RevealChalkboard.clear();",
                },
                {
                    icon: "<div></div>",
                    title: "Toggle chalkboard (B)",
                    action: "RevealChalkboard.toggleChalkboard();",
                },
                {
                    icon: "<div></div>",
                    title: "Toggle notes canvas (C)",
                    action: "RevealChalkboard.toggleNotesCanvas();",
                },
            ],
        },

        chalkboard: {
            boardmarkerWidth: 5,
            boardmarkers: [
                {
                    color: colors.bg,
                    cursor: `url(${Boardmarker}), auto`,
                },
                {
                    color: colors.fg,
                    cursor: "url(" + "" + "img/boardmarker-black.png), auto",
                },
                {
                    color: colors.blue,
                    cursor: "url(" + "" + "img/boardmarker-black.png), auto",
                },
                {
                    color: colors.red,
                    cursor: "url(" + "" + "img/boardmarker-black.png), auto",
                },
                {
                    color: colors.green,
                    cursor: "url(" + "" + "img/boardmarker-black.png), auto",
                },
                {
                    color: colors.yellow,
                    cursor: "url(" + "" + "img/boardmarker-black.png), auto",
                },
                {
                    color: colors.teal,
                    cursor: "url(" + "" + "img/boardmarker-black.png), auto",
                },
                {
                    color: colors.orange,
                    cursor: "url(" + "" + "img/boardmarker-black.png), auto",
                },
            ],
            chalks: [
                {
                    color: colors.bg,
                    cursor: "url(" + "" + "img/chalk-white.png), auto",
                },
                {
                    color: colors.fg,
                    cursor: "url(" + "" + "img/chalk-white.png), auto",
                },
                {
                    color: colors.blue,
                    cursor: "url(" + "" + "img/chalk-white.png), auto",
                },
                {
                    color: colors.red,
                    cursor: "url(" + "" + "img/chalk-white.png), auto",
                },
                {
                    color: colors.green,
                    cursor: "url(" + "" + "img/chalk-white.png), auto",
                },
                {
                    color: colors.yellow,
                    cursor: "url(" + "" + "img/chalk-white.png), auto",
                },
                {
                    color: colors.teal,
                    cursor: "url(" + "" + "img/chalk-white.png), auto",
                },
                {
                    color: colors.orange,
                    cursor: "url(" + "" + "img/chalk-white.png), auto",
                },
            ],
        },

        mermaid: {
            securityLevel: "loose",
            theme: "dark",
            themeVariables: {
                darkMode: true,
                textColor: colors.fg,
                background: colors.bg,
                mainBkg: colors.bg,
                lineColor: colors.fg,
            },
        },
    })
