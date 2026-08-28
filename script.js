/* =========================================================
   THE BRAYAN
   SCRIPT.JS
========================================================= */


/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_NUMBER =
    "51944137061";


const WHATSAPP_MESSAGE =
    "Hola THE BRAYAN, quiero información sobre tus servicios de desarrollo web, diseño gráfico y documentos profesionales.";


const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;


document
    .querySelectorAll(
        ".whatsapp-link"
    )
    .forEach(link => {

        link.href =
            whatsappURL;

    });



/* =========================================================
   ELEMENTOS
========================================================= */

const header =
    document.getElementById(
        "header"
    );


const nav =
    document.getElementById(
        "nav"
    );


const menuBtn =
    document.getElementById(
        "menuBtn"
    );


const backTop =
    document.getElementById(
        "backTop"
    );


const topTools =
    document.getElementById(
        "topTools"
    );



/* =========================================================
   RELOJ
========================================================= */

const liveClock =
    document.getElementById(
        "liveClock"
    );


function updateClock() {

    if (
        !liveClock
    ) {
        return;
    }


    const now =
        new Date();


    const hours =
        String(
            now.getHours()
        )
        .padStart(
            2,
            "0"
        );


    const minutes =
        String(
            now.getMinutes()
        )
        .padStart(
            2,
            "0"
        );


    const seconds =
        String(
            now.getSeconds()
        )
        .padStart(
            2,
            "0"
        );


    liveClock.textContent =
        `${hours}:${minutes}:${seconds}`;

}


updateClock();


setInterval(
    updateClock,
    1000
);



/* =========================================================
   MENÚ MÓVIL
========================================================= */

if (
    menuBtn &&
    nav
) {

    menuBtn.addEventListener(
        "click",
        () => {

            menuBtn
                .classList
                .toggle(
                    "active"
                );


            nav
                .classList
                .toggle(
                    "open"
                );


            document
                .body
                .classList
                .toggle(
                    "menu-open"
                );

        }
    );

}


document
    .querySelectorAll(
        ".nav a"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                menuBtn
                    ?.classList
                    .remove(
                        "active"
                    );


                nav
                    ?.classList
                    .remove(
                        "open"
                    );


                document
                    .body
                    .classList
                    .remove(
                        "menu-open"
                    );

            }
        );

    });



/* =========================================================
   SCROLL
========================================================= */

function handleScroll() {

    const scroll =
        window.scrollY;


    if (
        scroll >
        25
    ) {

        header
            ?.classList
            .add(
                "scrolled"
            );

    } else {

        header
            ?.classList
            .remove(
                "scrolled"
            );

    }


    if (
        scroll >
        520
    ) {

        backTop
            ?.classList
            .add(
                "visible"
            );

    } else {

        backTop
            ?.classList
            .remove(
                "visible"
            );

    }


    if (
        topTools
    ) {

        if (
            scroll >
            360
        ) {

            topTools.style.opacity =
                "0";


            topTools.style.pointerEvents =
                "none";


            topTools.style.transform =
                window.innerWidth <=
                768

                    ? "translateX(-50%) translateY(-8px)"

                    : "translateY(-8px)";

        } else {

            topTools.style.opacity =
                "1";


            topTools.style.pointerEvents =
                "auto";


            topTools.style.transform =
                window.innerWidth <=
                768

                    ? "translateX(-50%) translateY(0)"

                    : "translateY(0)";

        }

    }

}


window.addEventListener(
    "scroll",
    handleScroll,
    {
        passive: true
    }
);


handleScroll();



/* =========================================================
   BACK TOP
========================================================= */

backTop
    ?.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior:
                    "smooth"

            });

        }
    );



/* =========================================================
   TYPEWRITER
========================================================= */

const typingText =
    document.getElementById(
        "typingText"
    );


const typingMessages = [

    "Desarrollo páginas web modernas",

    "Creo diseños gráficos profesionales",

    "Elaboro documentos personalizados",

    "Diseño páginas para negocios",

    "Diseño para celular y computadora",

    "Creo soluciones digitales",

    "THE BRAYAN"

];


let typingMessageIndex =
    0;


let typingLetterIndex =
    0;


let deleting =
    false;


function typingAnimation() {

    if (
        !typingText
    ) {
        return;
    }


    const text =
        typingMessages[
            typingMessageIndex
        ];


    if (
        !deleting
    ) {

        typingText.textContent =
            text.substring(
                0,
                typingLetterIndex + 1
            );


        typingLetterIndex++;


        if (
            typingLetterIndex ===
            text.length
        ) {

            deleting =
                true;


            setTimeout(
                typingAnimation,
                1500
            );


            return;

        }

    } else {

        typingText.textContent =
            text.substring(
                0,
                typingLetterIndex - 1
            );


        typingLetterIndex--;


        if (
            typingLetterIndex ===
            0
        ) {

            deleting =
                false;


            typingMessageIndex =
                (
                    typingMessageIndex +
                    1
                )
                %
                typingMessages.length;

        }

    }


    setTimeout(

        typingAnimation,

        deleting
            ? 32
            : 62

    );

}


typingAnimation();



/* =========================================================
   SVG MURCIÉLAGO
========================================================= */

const BAT_SVG =
`
<svg
    viewBox="0 0 120 74"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
>
    <path
        d="
        M60 32
        C51 22 41 17 31 18
        C23 19 16 22 7 27
        C15 29 21 34 23 40
        C17 39 10 42 2 47
        C13 47 21 51 27 58
        C34 51 41 51 48 57
        L54 65
        L60 57
        L66 65
        L72 57
        C79 51 86 51 93 58
        C99 51 107 47 118 47
        C110 42 103 39 97 40
        C99 34 105 29 113 27
        C104 22 97 19 89 18
        C79 17 69 22 60 32
        Z
        "
    />

    <path
        d="
        M53 31
        C54 24 57 20 60 18
        C63 20 66 24 67 31
        L65 50
        L60 58
        L55 50
        Z
        "
    />
</svg>
`;



/* =========================================================
   MURCIÉLAGOS INTRO
========================================================= */

const introBats =
    document.getElementById(
        "introBats"
    );


function createIntroBats() {

    if (
        !introBats
    ) {
        return;
    }


    const amount =
        window.innerWidth <
        768
            ? 17
            : 34;


    const screenW =
        window.innerWidth;


    const screenH =
        window.innerHeight;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const bat =
            document.createElement(
                "div"
            );


        bat.className =
            "intro-bat";


        bat.innerHTML =
            BAT_SVG;


        const fromLeft =
            Math.random() >
            .5;


        const startX =
            fromLeft

                ? -200 -
                  Math.random() *
                  350

                : screenW +
                  120 +
                  Math.random() *
                  350;


        const endX =
            fromLeft

                ? screenW +
                  220 +
                  Math.random() *
                  250

                : -300 -
                  Math.random() *
                  250;


        const startY =
            Math.random() *
            screenH;


        const endY =
            Math.max(
                -100,

                Math.min(
                    screenH +
                    100,

                    startY +
                    (
                        Math.random() -
                        .5
                    )
                    *
                    480
                )
            );


        bat.style.setProperty(

            "--bat-size",

            `${
                24 +
                Math.random() *
                74
            }px`

        );


        bat.style.setProperty(

            "--bat-time",

            `${
                2.8 +
                Math.random() *
                3.8
            }s`

        );


        bat.style.setProperty(

            "--bat-delay",

            `${
                .15 +
                Math.random() *
                5.6
            }s`

        );


        bat.style.setProperty(
            "--bat-start-x",
            `${startX}px`
        );


        bat.style.setProperty(
            "--bat-start-y",
            `${startY}px`
        );


        bat.style.setProperty(
            "--bat-end-x",
            `${endX}px`
        );


        bat.style.setProperty(
            "--bat-end-y",
            `${endY}px`
        );


        bat.style.setProperty(

            "--bat-start-r",

            `${
                -25 +
                Math.random() *
                50
            }deg`

        );


        bat.style.setProperty(

            "--bat-end-r",

            `${
                -30 +
                Math.random() *
                60
            }deg`

        );


        introBats.appendChild(
            bat
        );

    }

}


createIntroBats();



/* =========================================================
   MURCIÉLAGOS BORDES
========================================================= */

const edgeBats =
    document.getElementById(
        "edgeBats"
    );


function createEdgeBats() {

    if (
        !edgeBats
    ) {
        return;
    }


    const amount =
        window.innerWidth <
        768
            ? 9
            : 20;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const bat =
            document.createElement(
                "div"
            );


        bat.className =
            "edge-bat";


        bat.innerHTML =
            BAT_SVG;


        const size =
            18 +
            Math.random() *
            34;


        bat.style.width =
            `${size}px`;


        bat.style.height =
            `${size * .62}px`;


        bat.style.top =
            `${
                5 +
                Math.random() *
                90
            }%`;


        if (
            i % 2 ===
            0
        ) {

            bat.style.left =
                `${
                    -3 +
                    Math.random() *
                    12
                }px`;

        } else {

            bat.style.right =
                `${
                    -3 +
                    Math.random() *
                    12
                }px`;

        }


        bat.style.setProperty(

            "--bat-duration",

            `${
                6 +
                Math.random() *
                9
            }s`

        );


        bat.style.setProperty(

            "--bat-move-x",

            `${
                -9 +
                Math.random() *
                18
            }px`

        );


        bat.style.setProperty(

            "--bat-move-y",

            `${
                -15 +
                Math.random() *
                30
            }px`

        );


        bat.style.setProperty(

            "--bat-rotation",

            `${
                -17 +
                Math.random() *
                34
            }deg`

        );


        edgeBats.appendChild(
            bat
        );

    }

}


createEdgeBats();



/* =========================================================
   INTRO
========================================================= */

const introScreen =
    document.getElementById(
        "introScreen"
    );


const introLogoScene =
    document.getElementById(
        "introLogoScene"
    );


const introRedFlash =
    document.getElementById(
        "introRedFlash"
    );


const introLoadingBar =
    document.getElementById(
        "introLoadingBar"
    );


const introPercent =
    document.getElementById(
        "introPercent"
    );


const introPieces =
    document.querySelectorAll(
        ".intro-piece"
    );



/* =========================================================
   INTRO 3D
========================================================= */

if (
    introScreen &&
    introLogoScene
) {

    introScreen.addEventListener(
        "pointermove",
        event => {

            if (
                window.innerWidth <=
                768
            ) {
                return;
            }


            const x =
                (
                    event.clientX /
                    window.innerWidth -
                    .5
                );


            const y =
                (
                    event.clientY /
                    window.innerHeight -
                    .5
                );


            introLogoScene.style.transform =
                `
                    rotateY(${x * 11}deg)
                    rotateX(${y * -9}deg)
                `;

        }
    );

}



/* =========================================================
   LOADING INTRO
========================================================= */

let introProgress =
    0;


function updateIntroLoading() {

    if (
        !introLoadingBar ||
        !introPercent
    ) {
        return;
    }


    const target =
        Math.min(
            100,
            introProgress
        );


    introLoadingBar.style.width =
        `${target}%`;


    introPercent.textContent =
        `${Math.floor(target)}%`;

}


const loadingInterval =
    setInterval(
        () => {

            if (
                introProgress <
                30
            ) {

                introProgress +=
                    1 +
                    Math.random() *
                    2.5;

            } else if (
                introProgress <
                65
            ) {

                introProgress +=
                    .7 +
                    Math.random() *
                    1.8;

            } else if (
                introProgress <
                91
            ) {

                introProgress +=
                    .4 +
                    Math.random() *
                    1.2;

            } else {

                introProgress +=
                    .18 +
                    Math.random() *
                    .45;

            }


            if (
                introProgress >=
                100
            ) {

                introProgress =
                    100;


                clearInterval(
                    loadingInterval
                );

            }


            updateIntroLoading();

        },
        55
    );



/* =========================================================
   FLASH ROJO
========================================================= */

function triggerRedFlash() {

    if (
        !introRedFlash
    ) {
        return;
    }


    introRedFlash
        .classList
        .remove(
            "flash"
        );


    void introRedFlash.offsetWidth;


    introRedFlash
        .classList
        .add(
            "flash"
        );

}



/* =========================================================
   MOSTRAR PÁGINA
========================================================= */

function showMainPage() {

    document
        .body
        .classList
        .remove(
            "intro-active"
        );


    introPieces.forEach(
        (
            piece,
            index
        ) => {

            setTimeout(
                () => {

                    piece
                        .classList
                        .add(
                            "intro-piece-show"
                        );

                },
                index *
                105
            );

        }
    );

}



/* INTRO MÁS ÉPICA Y LENTA */

if (
    introScreen
) {

    setTimeout(
        triggerRedFlash,
        700
    );


    setTimeout(
        triggerRedFlash,
        2200
    );


    setTimeout(
        triggerRedFlash,
        4200
    );


    setTimeout(
        () => {

            introProgress =
                100;


            updateIntroLoading();


            triggerRedFlash();

        },
        6000
    );


    setTimeout(
        () => {

            introScreen
                .classList
                .add(
                    "intro-exit"
                );

        },
        6250
    );


    setTimeout(
        () => {

            showMainPage();


            introScreen
                .classList
                .add(
                    "intro-hide"
                );

        },
        7000
    );


    setTimeout(
        () => {

            introScreen.remove();

        },
        7900
    );

} else {

    showMainPage();

}



/* =========================================================
   RAYOS ROJOS REALISTAS
========================================================= */

const lightningCanvas =
    document.getElementById(
        "lightningCanvas"
    );


if (
    lightningCanvas &&
    introScreen
) {

    const lightningCtx =
        lightningCanvas
            .getContext(
                "2d"
            );


    let lightningWidth =
        0;


    let lightningHeight =
        0;


    let dpr =
        1;


    const bolts =
        [];


    function resizeLightning() {

        lightningWidth =
            window.innerWidth;


        lightningHeight =
            window.innerHeight;


        dpr =
            Math.min(
                window.devicePixelRatio ||
                1,
                1.75
            );


        lightningCanvas.width =
            Math.floor(
                lightningWidth *
                dpr
            );


        lightningCanvas.height =
            Math.floor(
                lightningHeight *
                dpr
            );


        lightningCanvas.style.width =
            `${lightningWidth}px`;


        lightningCanvas.style.height =
            `${lightningHeight}px`;


        lightningCtx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

    }


    resizeLightning();



    function midpointDisplacement(
        x1,
        y1,
        x2,
        y2,
        displacement,
        generations
    ) {

        let points = [

            {
                x: x1,
                y: y1
            },

            {
                x: x2,
                y: y2
            }

        ];


        let currentDisplacement =
            displacement;


        for (
            let generation = 0;
            generation < generations;
            generation++
        ) {

            const newPoints =
                [];


            for (
                let i = 0;
                i < points.length - 1;
                i++
            ) {

                const a =
                    points[i];


                const b =
                    points[i + 1];


                newPoints.push(
                    a
                );


                const dx =
                    b.x -
                    a.x;


                const dy =
                    b.y -
                    a.y;


                const length =
                    Math.hypot(
                        dx,
                        dy
                    ) || 1;


                const normalX =
                    -dy /
                    length;


                const normalY =
                    dx /
                    length;


                const offset =
                    (
                        Math.random() -
                        .5
                    )
                    *
                    currentDisplacement;


                newPoints.push({

                    x:
                        (
                            a.x +
                            b.x
                        )
                        /
                        2
                        +
                        normalX *
                        offset,

                    y:
                        (
                            a.y +
                            b.y
                        )
                        /
                        2
                        +
                        normalY *
                        offset

                });

            }


            newPoints.push(
                points[
                    points.length -
                    1
                ]
            );


            points =
                newPoints;


            currentDisplacement *=
                .57;

        }


        return points;

    }



    function createBranch(
        source,
        direction,
        distance
    ) {

        const endX =
            source.x +
            Math.cos(
                direction
            )
            *
            distance;


        const endY =
            source.y +
            Math.sin(
                direction
            )
            *
            distance;


        return midpointDisplacement(

            source.x,
            source.y,

            endX,
            endY,

            distance *
            .38,

            4

        );

    }



    function createLightning(
        startX,
        startY,
        endX,
        endY,
        strength = 1
    ) {

        const distance =
            Math.hypot(
                endX -
                startX,

                endY -
                startY
            );


        const points =
            midpointDisplacement(

                startX,
                startY,

                endX,
                endY,

                Math.max(
                    70,
                    distance *
                    .20
                ),

                6

            );


        const branches =
            [];


        const branchCount =
            2 +
            Math.floor(
                Math.random() *
                4
            );


        for (
            let i = 0;
            i < branchCount;
            i++
        ) {

            const index =
                Math.floor(
                    points.length *
                    (
                        .20 +
                        Math.random() *
                        .58
                    )
                );


            const source =
                points[
                    Math.min(
                        points.length -
                        1,
                        index
                    )
                ];


            const angle =
                Math.atan2(
                    endY -
                    startY,
                    endX -
                    startX
                )
                +
                (
                    Math.random() >
                    .5
                        ? 1
                        : -1
                )
                *
                (
                    .35 +
                    Math.random() *
                    .7
                );


            const branchDistance =
                45 +
                Math.random() *
                130;


            branches.push(
                createBranch(
                    source,
                    angle,
                    branchDistance
                )
            );

        }


        bolts.push({

            points,

            branches,

            life: 0,

            maxLife:
                9 +
                Math.random() *
                8,

            strength,

            flicker:
                Math.random() *
                Math.PI *
                2

        });

    }



    function randomEdgePoint() {

        const side =
            Math.floor(
                Math.random() *
                4
            );


        if (
            side ===
            0
        ) {

            return {

                x:
                    Math.random() *
                    lightningWidth,

                y:
                    -20

            };

        }


        if (
            side ===
            1
        ) {

            return {

                x:
                    lightningWidth +
                    20,

                y:
                    Math.random() *
                    lightningHeight

            };

        }


        if (
            side ===
            2
        ) {

            return {

                x:
                    Math.random() *
                    lightningWidth,

                y:
                    lightningHeight +
                    20

            };

        }


        return {

            x:
                -20,

            y:
                Math.random() *
                lightningHeight

        };

    }



    function createRandomBolt(
        strength =
            1
    ) {

        const start =
            randomEdgePoint();


        const centerX =
            lightningWidth /
            2;


        const centerY =
            lightningHeight /
            2;


        createLightning(

            start.x,
            start.y,

            centerX +
            (
                Math.random() -
                .5
            )
            *
            lightningWidth *
            .35,

            centerY +
            (
                Math.random() -
                .5
            )
            *
            lightningHeight *
            .34,

            strength

        );

    }



    function drawLightningPath(
        points,
        alpha,
        strength,
        branch =
            false
    ) {

        if (
            points.length <
            2
        ) {
            return;
        }


        /* GRAN RESPLANDOR */

        lightningCtx.beginPath();


        lightningCtx.moveTo(
            points[0].x,
            points[0].y
        );


        for (
            let i = 1;
            i < points.length;
            i++
        ) {

            lightningCtx.lineTo(
                points[i].x,
                points[i].y
            );

        }


        lightningCtx.lineCap =
            "round";


        lightningCtx.lineJoin =
            "round";


        lightningCtx.strokeStyle =
            `rgba(255,0,22,${alpha * .10})`;


        lightningCtx.lineWidth =
            (
                branch
                    ? 8
                    : 18
            )
            *
            strength;


        lightningCtx.shadowBlur =
            40;


        lightningCtx.shadowColor =
            "#ff001c";


        lightningCtx.stroke();



        /* RESPLANDOR MEDIO */

        lightningCtx.beginPath();


        lightningCtx.moveTo(
            points[0].x,
            points[0].y
        );


        for (
            let i = 1;
            i < points.length;
            i++
        ) {

            lightningCtx.lineTo(
                points[i].x,
                points[i].y
            );

        }


        lightningCtx.strokeStyle =
            `rgba(255,0,30,${alpha * .33})`;


        lightningCtx.lineWidth =
            (
                branch
                    ? 3.2
                    : 6.5
            )
            *
            strength;


        lightningCtx.shadowBlur =
            22;


        lightningCtx.shadowColor =
            "#ff001d";


        lightningCtx.stroke();



        /* NÚCLEO */

        lightningCtx.beginPath();


        lightningCtx.moveTo(
            points[0].x,
            points[0].y
        );


        for (
            let i = 1;
            i < points.length;
            i++
        ) {

            lightningCtx.lineTo(
                points[i].x,
                points[i].y
            );

        }


        lightningCtx.strokeStyle =
            `rgba(255,45,62,${alpha})`;


        lightningCtx.lineWidth =
            (
                branch
                    ? .65
                    : 1.25
            )
            *
            strength;


        lightningCtx.shadowBlur =
            8;


        lightningCtx.shadowColor =
            "#ff122d";


        lightningCtx.stroke();

    }



    function drawLightning() {

        lightningCtx.clearRect(
            0,
            0,
            lightningWidth,
            lightningHeight
        );


        lightningCtx.globalCompositeOperation =
            "lighter";


        for (
            let i =
                bolts.length -
                1;

            i >= 0;

            i--
        ) {

            const bolt =
                bolts[i];


            bolt.life++;


            bolt.flicker +=
                .7;


            const life =
                Math.max(
                    0,
                    1 -
                    bolt.life /
                    bolt.maxLife
                );


            const flicker =
                .72 +
                Math.random() *
                .28;


            const alpha =
                life *
                flicker;


            drawLightningPath(

                bolt.points,

                alpha,

                bolt.strength,

                false

            );


            bolt.branches.forEach(
                branch => {

                    drawLightningPath(

                        branch,

                        alpha *
                        .55,

                        bolt.strength *
                        .75,

                        true

                    );

                }
            );


            if (
                bolt.life >=
                bolt.maxLife
            ) {

                bolts.splice(
                    i,
                    1
                );

            }

        }


        lightningCtx.shadowBlur =
            0;


        requestAnimationFrame(
            drawLightning
        );

    }


    drawLightning();



    function lightningBurst(
        amount,
        gap,
        strength =
            1
    ) {

        for (
            let i = 0;
            i < amount;
            i++
        ) {

            setTimeout(
                () => {

                    createRandomBolt(
                        strength *
                        (
                            .8 +
                            Math.random() *
                            .45
                        )
                    );


                    if (
                        Math.random() >
                        .45
                    ) {

                        triggerRedFlash();

                    }

                },
                i *
                gap
            );

        }

    }



    /* PRIMER IMPACTO */

    setTimeout(
        () => {

            lightningBurst(
                5,
                95,
                .85
            );

        },
        450
    );



    /* SEGUNDO IMPACTO */

    setTimeout(
        () => {

            lightningBurst(
                7,
                80,
                1
            );

        },
        1800
    );



    /* TERCER IMPACTO */

    setTimeout(
        () => {

            lightningBurst(
                6,
                90,
                1
            );

        },
        3550
    );



    /* FINAL MÁS FUERTE */

    setTimeout(
        () => {

            lightningBurst(
                12,
                50,
                1.15
            );

        },
        5850
    );


    window.addEventListener(
        "resize",
        resizeLightning
    );

}



/* =========================================================
   HERO LOGO 3D
========================================================= */

const heroLogoScene =
    document.getElementById(
        "heroLogoScene"
    );


if (
    heroLogoScene
) {

    heroLogoScene.addEventListener(
        "pointermove",
        event => {

            if (
                window.innerWidth <=
                768
            ) {
                return;
            }


            const rect =
                heroLogoScene
                    .getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                )
                /
                rect.width
                -
                .5;


            const y =
                (
                    event.clientY -
                    rect.top
                )
                /
                rect.height
                -
                .5;


            heroLogoScene.style.transform =
                `
                    rotateY(${x * 12}deg)
                    rotateX(${y * -10}deg)
                `;

        }
    );


    heroLogoScene.addEventListener(
        "pointerleave",
        () => {

            heroLogoScene.style.transform =
                `
                    rotateX(0deg)
                    rotateY(0deg)
                `;

        }
    );

}



/* =========================================================
   REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "show"
                            );


                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },

        {

            threshold:
                .08,

            rootMargin:
                "0px 0px -20px 0px"

        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



/* =========================================================
   NAVEGACIÓN ACTIVA
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


function updateActiveNavigation() {

    const scroll =
        window.scrollY;


    sections.forEach(
        section => {

            const top =
                section.offsetTop -
                160;


            const bottom =
                top +
                section.offsetHeight;


            if (
                scroll >= top &&
                scroll < bottom
            ) {

                navLinks.forEach(
                    link => {

                        link
                            .classList
                            .remove(
                                "active"
                            );

                    }
                );


                document
                    .querySelector(
                        `.nav-link[href="#${section.id}"]`
                    )
                    ?.classList
                    .add(
                        "active"
                    );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {
        passive: true
    }
);



/* =========================================================
   AÑO
========================================================= */

const year =
    document.getElementById(
        "year"
    );


if (
    year
) {

    year.textContent =
        new Date()
            .getFullYear();

}



/* =========================================================
   UNIVERSO REALISTA
========================================================= */

const universeCanvas =
    document.getElementById(
        "universeCanvas"
    );


if (
    universeCanvas
) {

    const ctx =
        universeCanvas.getContext(
            "2d",
            {
                alpha:
                    false
            }
        );


    let width =
        0;


    let height =
        0;


    let dpr =
        1;


    let stars =
        [];


    let dust =
        [];


    let redDust =
        [];


    let distantClouds =
        [];


    let shootingStars =
        [];


    let pointerX =
        0;


    let pointerY =
        0;


    let smoothX =
        0;


    let smoothY =
        0;


    let nextShootingStar =
        performance.now() +
        4500;



    function resizeUniverse() {

        width =
            window.innerWidth;


        height =
            window.innerHeight;


        dpr =
            Math.min(
                window.devicePixelRatio ||
                1,
                1.5
            );


        universeCanvas.width =
            Math.floor(
                width *
                dpr
            );


        universeCanvas.height =
            Math.floor(
                height *
                dpr
            );


        universeCanvas.style.width =
            `${width}px`;


        universeCanvas.style.height =
            `${height}px`;


        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );


        generateStars();

        generateDust();

        generateRedDust();

        generateDistantClouds();

    }



    /* =====================================================
       ESTRELLAS
    ====================================================== */

    function generateStars() {

        stars =
            [];


        let amount =
            Math.floor(
                width *
                height /
                1550
            );


        if (
            width <
            768
        ) {

            amount =
                Math.floor(
                    amount *
                    .56
                );

        }


        amount =
            Math.min(
                amount,
                1200
            );


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            const randomColor =
                Math.random();


            let color =
                "235,238,255";


            if (
                randomColor <
                .075
            ) {

                color =
                    "165,190,255";

            } else if (
                randomColor >
                .94
            ) {

                color =
                    "255,218,180";

            }


            stars.push({

                x:
                    Math.random() *
                    width,

                y:
                    Math.random() *
                    height,

                size:
                    .10 +
                    Math.random() *
                    1.25,

                alpha:
                    .045 +
                    Math.random() *
                    .62,

                phase:
                    Math.random() *
                    Math.PI *
                    2,

                twinkle:
                    .002 +
                    Math.random() *
                    .012,

                depth:
                    Math.random(),

                color,

                flare:
                    Math.random() >
                    .987

            });

        }

    }



    /* =====================================================
       POLVO
    ====================================================== */

    function generateDust() {

        dust =
            [];


        const amount =
            width <
            768
                ? 48
                : 120;


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            dust.push({

                x:
                    Math.random() *
                    width,

                y:
                    Math.random() *
                    height,

                vx:
                    (
                        Math.random() -
                        .5
                    )
                    *
                    .045,

                vy:
                    (
                        Math.random() -
                        .5
                    )
                    *
                    .045,

                size:
                    .12 +
                    Math.random() *
                    .65,

                alpha:
                    .01 +
                    Math.random() *
                    .065

            });

        }

    }



    /* =====================================================
       POLVO ROJO
    ====================================================== */

    function generateRedDust() {

        redDust =
            [];


        const amount =
            width <
            768
                ? 10
                : 27;


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            redDust.push({

                x:
                    Math.random() *
                    width,

                y:
                    Math.random() *
                    height,

                size:
                    .20 +
                    Math.random() *
                    1.2,

                alpha:
                    .012 +
                    Math.random() *
                    .07,

                speed:
                    .008 +
                    Math.random() *
                    .030

            });

        }

    }



    /* =====================================================
       NUBES LEJANAS
    ====================================================== */

    function generateDistantClouds() {

        distantClouds =
            [];


        const amount =
            6;


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            distantClouds.push({

                x:
                    Math.random() *
                    width,

                y:
                    Math.random() *
                    height,

                radius:
                    180 +
                    Math.random() *
                    330,

                alpha:
                    .008 +
                    Math.random() *
                    .015,

                red:
                    Math.random() >
                    .45,

                drift:
                    (
                        Math.random() -
                        .5
                    )
                    *
                    .018

            });

        }

    }



    /* =====================================================
       ESTRELLA FUGAZ
    ====================================================== */

    function createShootingStar() {

        shootingStars.push({

            x:
                width *
                (
                    .25 +
                    Math.random() *
                    .70
                ),

            y:
                Math.random() *
                height *
                .36,

            vx:
                -8 -
                Math.random() *
                8,

            vy:
                4.5 +
                Math.random() *
                5,

            length:
                90 +
                Math.random() *
                150,

            life:
                0,

            maxLife:
                35 +
                Math.random() *
                30

        });

    }



    /* =====================================================
       NEBULOSAS CANVAS
    ====================================================== */

    function drawMainNebulas() {

        const red =
            ctx.createRadialGradient(

                width *
                .12,

                height *
                .35,

                0,

                width *
                .12,

                height *
                .35,

                Math.max(
                    width,
                    height
                )
                *
                .55

            );


        red.addColorStop(
            0,
            "rgba(105,0,14,.085)"
        );


        red.addColorStop(
            .42,
            "rgba(50,0,8,.028)"
        );


        red.addColorStop(
            1,
            "rgba(0,0,0,0)"
        );


        ctx.fillStyle =
            red;


        ctx.fillRect(
            0,
            0,
            width,
            height
        );



        const purple =
            ctx.createRadialGradient(

                width *
                .80,

                height *
                .46,

                0,

                width *
                .80,

                height *
                .46,

                Math.max(
                    width,
                    height
                )
                *
                .52

            );


        purple.addColorStop(
            0,
            "rgba(50,35,105,.060)"
        );


        purple.addColorStop(
            1,
            "rgba(0,0,0,0)"
        );


        ctx.fillStyle =
            purple;


        ctx.fillRect(
            0,
            0,
            width,
            height
        );



        /* BANDA GALÁCTICA */

        ctx.save();


        ctx.translate(
            width *
            .49,
            height *
            .48
        );


        ctx.rotate(
            -.28
        );


        ctx.scale(
            1.75,
            .33
        );


        const galaxy =
            ctx.createRadialGradient(

                0,
                0,
                0,

                0,
                0,

                Math.max(
                    width,
                    height
                )
                *
                .48

            );


        galaxy.addColorStop(
            0,
            "rgba(95,65,135,.027)"
        );


        galaxy.addColorStop(
            .4,
            "rgba(55,28,85,.017)"
        );


        galaxy.addColorStop(
            1,
            "rgba(0,0,0,0)"
        );


        ctx.fillStyle =
            galaxy;


        ctx.beginPath();


        ctx.arc(

            0,
            0,

            Math.max(
                width,
                height
            )
            *
            .5,

            0,

            Math.PI *
            2

        );


        ctx.fill();


        ctx.restore();

    }



    window.addEventListener(
        "pointermove",
        event => {

            if (
                window.innerWidth <=
                768
            ) {
                return;
            }


            pointerX =
                (
                    event.clientX /
                    width -
                    .5
                )
                *
                2;


            pointerY =
                (
                    event.clientY /
                    height -
                    .5
                )
                *
                2;

        },
        {
            passive: true
        }
    );



    /* =====================================================
       LOOP UNIVERSO
    ====================================================== */

    function animateUniverse(
        time
    ) {

        smoothX +=
            (
                pointerX -
                smoothX
            )
            *
            .018;


        smoothY +=
            (
                pointerY -
                smoothY
            )
            *
            .018;



        /* FONDO */

        const background =
            ctx.createRadialGradient(

                width *
                .5,

                height *
                .38,

                0,

                width *
                .5,

                height *
                .5,

                Math.max(
                    width,
                    height
                )

            );


        background.addColorStop(
            0,
            "#08080c"
        );


        background.addColorStop(
            .32,
            "#040407"
        );


        background.addColorStop(
            .70,
            "#010102"
        );


        background.addColorStop(
            1,
            "#000000"
        );


        ctx.fillStyle =
            background;


        ctx.fillRect(
            0,
            0,
            width,
            height
        );


        drawMainNebulas();



        /* NUBES DISTANTES */

        distantClouds.forEach(
            cloud => {

                cloud.x +=
                    cloud.drift;


                const gradient =
                    ctx.createRadialGradient(

                        cloud.x,
                        cloud.y,
                        0,

                        cloud.x,
                        cloud.y,
                        cloud.radius

                    );


                if (
                    cloud.red
                ) {

                    gradient.addColorStop(
                        0,
                        `rgba(100,0,14,${cloud.alpha})`
                    );

                } else {

                    gradient.addColorStop(
                        0,
                        `rgba(45,35,100,${cloud.alpha})`
                    );

                }


                gradient.addColorStop(
                    1,
                    "rgba(0,0,0,0)"
                );


                ctx.fillStyle =
                    gradient;


                ctx.fillRect(
                    0,
                    0,
                    width,
                    height
                );

            }
        );



        /* ESTRELLAS */

        stars.forEach(
            star => {

                star.phase +=
                    star.twinkle;


                let alpha =
                    star.alpha +
                    Math.sin(
                        star.phase
                    )
                    *
                    .08;


                alpha =
                    Math.max(
                        .015,
                        alpha
                    );


                const offset =
                    star.depth *
                    7;


                const x =
                    star.x +
                    smoothX *
                    offset;


                const y =
                    star.y +
                    smoothY *
                    offset;


                ctx.beginPath();


                ctx.arc(

                    x,
                    y,

                    star.size,

                    0,

                    Math.PI *
                    2

                );


                ctx.fillStyle =
                    `rgba(${star.color},${alpha})`;


                ctx.fill();



                if (
                    star.flare
                ) {

                    ctx.strokeStyle =
                        `rgba(${star.color},${alpha * .20})`;


                    ctx.lineWidth =
                        .45;


                    ctx.beginPath();


                    ctx.moveTo(
                        x -
                        star.size *
                        5,
                        y
                    );


                    ctx.lineTo(
                        x +
                        star.size *
                        5,
                        y
                    );


                    ctx.moveTo(
                        x,
                        y -
                        star.size *
                        5
                    );


                    ctx.lineTo(
                        x,
                        y +
                        star.size *
                        5
                    );


                    ctx.stroke();

                }

            }
        );



        /* POLVO */

        dust.forEach(
            particle => {

                particle.x +=
                    particle.vx;


                particle.y +=
                    particle.vy;


                if (
                    particle.x <
                    0
                ) {
                    particle.x =
                        width;
                }


                if (
                    particle.x >
                    width
                ) {
                    particle.x =
                        0;
                }


                if (
                    particle.y <
                    0
                ) {
                    particle.y =
                        height;
                }


                if (
                    particle.y >
                    height
                ) {
                    particle.y =
                        0;
                }


                ctx.beginPath();


                ctx.arc(

                    particle.x,
                    particle.y,

                    particle.size,

                    0,

                    Math.PI *
                    2

                );


                ctx.fillStyle =
                    `rgba(155,160,185,${particle.alpha})`;


                ctx.fill();

            }
        );



        /* PARTÍCULAS ROJAS */

        redDust.forEach(
            particle => {

                particle.y -=
                    particle.speed;


                if (
                    particle.y <
                    -10
                ) {

                    particle.y =
                        height +
                        10;


                    particle.x =
                        Math.random() *
                        width;

                }


                ctx.beginPath();


                ctx.arc(

                    particle.x,
                    particle.y,

                    particle.size,

                    0,

                    Math.PI *
                    2

                );


                ctx.fillStyle =
                    `rgba(255,18,38,${particle.alpha})`;


                ctx.shadowBlur =
                    6;


                ctx.shadowColor =
                    "#ff1028";


                ctx.fill();


                ctx.shadowBlur =
                    0;

            }
        );



        /* ESTRELLAS FUGACES */

        if (
            time >
            nextShootingStar
        ) {

            createShootingStar();


            nextShootingStar =
                time +
                5500 +
                Math.random() *
                8500;

        }


        for (
            let i =
                shootingStars.length -
                1;

            i >= 0;

            i--
        ) {

            const star =
                shootingStars[i];


            star.x +=
                star.vx;


            star.y +=
                star.vy;


            star.life++;


            const opacity =
                Math.max(
                    0,
                    1 -
                    star.life /
                    star.maxLife
                );


            const magnitude =
                Math.hypot(
                    star.vx,
                    star.vy
                );


            const dirX =
                star.vx /
                magnitude;


            const dirY =
                star.vy /
                magnitude;


            const tailX =
                star.x -
                dirX *
                star.length;


            const tailY =
                star.y -
                dirY *
                star.length;


            const gradient =
                ctx.createLinearGradient(

                    tailX,
                    tailY,

                    star.x,
                    star.y

                );


            gradient.addColorStop(
                0,
                "rgba(225,230,255,0)"
            );


            gradient.addColorStop(
                1,
                `rgba(220,228,255,${opacity * .55})`
            );


            ctx.strokeStyle =
                gradient;


            ctx.lineWidth =
                1;


            ctx.beginPath();


            ctx.moveTo(
                tailX,
                tailY
            );


            ctx.lineTo(
                star.x,
                star.y
            );


            ctx.stroke();


            if (
                star.life >=
                star.maxLife
            ) {

                shootingStars.splice(
                    i,
                    1
                );

            }

        }


        requestAnimationFrame(
            animateUniverse
        );

    }



    resizeUniverse();


    requestAnimationFrame(
        animateUniverse
    );



    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    resizeUniverse,
                    150
                );

        }
    );

}
