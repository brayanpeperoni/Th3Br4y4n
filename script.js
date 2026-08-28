/* =========================================================
   THE BRAYAN
   SCRIPT.JS
========================================================= */


/* =========================================================
   WHATSAPP
========================================================= */

const WHATSAPP_NUMBER =
    "51999999999";


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


const menuBtn =
    document.getElementById(
        "menuBtn"
    );


const nav =
    document.getElementById(
        "nav"
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
   RELOJ EN TIEMPO REAL
========================================================= */

const liveClock =
    document.getElementById(
        "liveClock"
    );


function updateClock() {

    if (!liveClock) {
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
   MENÚ
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

    if (
        window.scrollY >
        30
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
        window.scrollY >
        550
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
            window.scrollY >
            400
        ) {

            topTools.style.opacity =
                "0";


            topTools.style.pointerEvents =
                "none";

        } else {

            topTools.style.opacity =
                "1";


            topTools.style.pointerEvents =
                "auto";

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
   VOLVER ARRIBA
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

    "Elaboro documentos profesionales",

    "Creo páginas para negocios",

    "Diseño experiencias para celular y PC",

    "Transformo ideas en proyectos digitales",

    "THE BRAYAN"

];


let messageIndex =
    0;


let characterIndex =
    0;


let deleting =
    false;


function typeText() {

    if (
        !typingText
    ) {
        return;
    }


    const current =
        typingMessages[
            messageIndex
        ];


    if (
        !deleting
    ) {

        typingText.textContent =
            current.substring(
                0,
                characterIndex + 1
            );


        characterIndex++;


        if (
            characterIndex ===
            current.length
        ) {

            deleting =
                true;


            setTimeout(
                typeText,
                1500
            );


            return;

        }

    } else {

        typingText.textContent =
            current.substring(
                0,
                characterIndex - 1
            );


        characterIndex--;


        if (
            characterIndex ===
            0
        ) {

            deleting =
                false;


            messageIndex =
                (
                    messageIndex +
                    1
                )
                %
                typingMessages.length;

        }

    }


    setTimeout(

        typeText,

        deleting
            ? 32
            : 62

    );

}


typeText();



/* =========================================================
   SVG MURCIÉLAGO
========================================================= */

const BAT_SVG =
`
<svg
    viewBox="0 0 100 70"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="
        M50 31
        C43 23 35 19 27 19
        C21 19 15 21 9 25
        C15 28 18 32 19 37
        C14 37 9 39 4 43
        C12 44 18 47 22 52
        C27 48 33 48 38 53
        L44 60
        L50 53
        L56 60
        L62 53
        C67 48 73 48 78 52
        C82 47 88 44 96 43
        C91 39 86 37 81 37
        C82 32 85 28 91 25
        C85 21 79 19 73 19
        C65 19 57 23 50 31
        Z
        "
    />

    <path
        d="
        M44 31
        C45 25 47 22 50 20
        C53 22 55 25 56 31
        L54 48
        L50 54
        L46 48
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
            ? 15
            : 28;


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
                ? -180 -
                  Math.random() *
                  250

                : window.innerWidth +
                  100 +
                  Math.random() *
                  250;


        const endX =
            fromLeft
                ? window.innerWidth +
                  200

                : -300;


        const startY =
            Math.random() *
            window.innerHeight;


        const endY =
            startY +
            (
                Math.random() -
                .5
            )
            *
            420;


        bat.style.setProperty(

            "--bat-size",

            `${
                25 +
                Math.random() *
                65
            }px`

        );


        bat.style.setProperty(

            "--bat-time",

            `${
                2.8 +
                Math.random() *
                3.3
            }s`

        );


        bat.style.setProperty(

            "--bat-delay",

            `${
                .2 +
                Math.random() *
                4.8
            }s`

        );


        bat.style.setProperty(
            "--start-x",
            `${startX}px`
        );


        bat.style.setProperty(
            "--start-y",
            `${startY}px`
        );


        bat.style.setProperty(
            "--end-x",
            `${endX}px`
        );


        bat.style.setProperty(
            "--end-y",
            `${endY}px`
        );


        bat.style.setProperty(

            "--start-r",

            `${
                -20 +
                Math.random() *
                40
            }deg`

        );


        bat.style.setProperty(

            "--end-r",

            `${
                -25 +
                Math.random() *
                50
            }deg`

        );


        introBats.appendChild(
            bat
        );

    }

}


createIntroBats();



/* =========================================================
   MURCIÉLAGOS EN LOS BORDES
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
            : 18;


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
            i %
            2 ===
            0
        ) {

            bat.style.left =
                `${
                    Math.random() *
                    14
                }px`;

        } else {

            bat.style.right =
                `${
                    Math.random() *
                    14
                }px`;

        }


        bat.style.setProperty(

            "--duration",

            `${
                6 +
                Math.random() *
                8
            }s`

        );


        bat.style.setProperty(

            "--move-x",

            `${
                -8 +
                Math.random() *
                16
            }px`

        );


        bat.style.setProperty(

            "--move-y",

            `${
                -14 +
                Math.random() *
                28
            }px`

        );


        bat.style.setProperty(

            "--rotate",

            `${
                -15 +
                Math.random() *
                30
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


const introPieces =
    document.querySelectorAll(
        ".intro-piece"
    );


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
                    window.innerWidth
                    -
                    .5
                );


            const y =
                (
                    event.clientY /
                    window.innerHeight
                    -
                    .5
                );


            introLogoScene.style.transform =
                `
                rotateY(${x * 10}deg)
                rotateX(${y * -8}deg)
                `;

        }
    );

}


function showPage() {

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
                115
            );

        }
    );

}


/* INTRO MÁS LENTA */

if (
    introScreen
) {

    setTimeout(
        () => {

            introScreen
                .classList
                .add(
                    "intro-exit"
                );

        },
        6000
    );


    setTimeout(
        () => {

            showPage();


            introScreen
                .classList
                .add(
                    "intro-hide"
                );

        },
        6750
    );


    setTimeout(
        () => {

            introScreen.remove();

        },
        7600
    );

} else {

    showPage();

}



/* =========================================================
   RAYOS ROJOS
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


    let bolts =
        [];


    function resizeLightning() {

        const dpr =
            Math.min(
                window.devicePixelRatio ||
                1,
                1.5
            );


        lightningWidth =
            window.innerWidth;


        lightningHeight =
            window.innerHeight;


        lightningCanvas.width =
            lightningWidth *
            dpr;


        lightningCanvas.height =
            lightningHeight *
            dpr;


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


    function generateBoltPoints(
        startX,
        startY,
        endX,
        endY,
        segments = 20
    ) {

        const points =
            [];


        for (
            let i = 0;
            i <= segments;
            i++
        ) {

            const progress =
                i /
                segments;


            let x =
                startX +
                (
                    endX -
                    startX
                )
                *
                progress;


            let y =
                startY +
                (
                    endY -
                    startY
                )
                *
                progress;


            const strength =
                Math.sin(
                    progress *
                    Math.PI
                )
                *
                60;


            x +=
                (
                    Math.random() -
                    .5
                )
                *
                strength;


            y +=
                (
                    Math.random() -
                    .5
                )
                *
                strength;


            points.push({
                x,
                y
            });

        }


        return points;

    }


    function createBolt(
        startX,
        startY,
        endX,
        endY
    ) {

        const points =
            generateBoltPoints(
                startX,
                startY,
                endX,
                endY,
                19 +
                Math.floor(
                    Math.random() *
                    8
                )
            );


        bolts.push({

            points,

            life:
                0,

            maxLife:
                8 +
                Math.random() *
                7,

            width:
                .7 +
                Math.random() *
                1.4,

            alpha:
                .75 +
                Math.random() *
                .25

        });

    }


    function randomBolt() {

        const centerX =
            lightningWidth /
            2;


        const centerY =
            lightningHeight /
            2;


        const side =
            Math.floor(
                Math.random() *
                4
            );


        let x;
        let y;


        if (
            side ===
            0
        ) {

            x =
                Math.random() *
                lightningWidth;

            y =
                -20;

        } else if (
            side ===
            1
        ) {

            x =
                lightningWidth +
                20;

            y =
                Math.random() *
                lightningHeight;

        } else if (
            side ===
            2
        ) {

            x =
                Math.random() *
                lightningWidth;

            y =
                lightningHeight +
                20;

        } else {

            x =
                -20;

            y =
                Math.random() *
                lightningHeight;

        }


        createBolt(

            x,

            y,

            centerX +
            (
                Math.random() -
                .5
            )
            *
            300,

            centerY +
            (
                Math.random() -
                .5
            )
            *
            260

        );

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


            const alpha =
                Math.max(
                    0,
                    1 -
                    bolt.life /
                    bolt.maxLife
                )
                *
                bolt.alpha;


            lightningCtx.beginPath();


            lightningCtx.moveTo(
                bolt.points[0].x,
                bolt.points[0].y
            );


            for (
                let j = 1;
                j < bolt.points.length;
                j++
            ) {

                lightningCtx.lineTo(

                    bolt.points[j].x,

                    bolt.points[j].y

                );

            }


            /* GLOW ROJO */

            lightningCtx.strokeStyle =
                `rgba(255,0,25,${alpha * .20})`;


            lightningCtx.lineWidth =
                bolt.width *
                9;


            lightningCtx.shadowBlur =
                25;


            lightningCtx.shadowColor =
                "#ff001d";


            lightningCtx.stroke();


            /* CENTRO ROJO */

            lightningCtx.beginPath();


            lightningCtx.moveTo(
                bolt.points[0].x,
                bolt.points[0].y
            );


            for (
                let j = 1;
                j < bolt.points.length;
                j++
            ) {

                lightningCtx.lineTo(

                    bolt.points[j].x,

                    bolt.points[j].y

                );

            }


            lightningCtx.strokeStyle =
                `rgba(255,45,65,${alpha})`;


            lightningCtx.lineWidth =
                bolt.width;


            lightningCtx.shadowBlur =
                8;


            lightningCtx.shadowColor =
                "#ff1028";


            lightningCtx.stroke();


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


    function burst(
        amount,
        delay
    ) {

        for (
            let i = 0;
            i < amount;
            i++
        ) {

            setTimeout(

                randomBolt,

                i *
                delay

            );

        }

    }


    setTimeout(
        () => {
            burst(4, 110);
        },
        500
    );


    setTimeout(
        () => {
            burst(6, 85);
        },
        1900
    );


    setTimeout(
        () => {
            burst(5, 100);
        },
        3700
    );


    setTimeout(
        () => {
            burst(10, 55);
        },
        5650
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
                "0px 0px -25px 0px"
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


function updateNavigation() {

    const scroll =
        window.scrollY;


    sections.forEach(
        section => {

            const top =
                section.offsetTop -
                170;


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
    updateNavigation,
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
                alpha: false
            }
        );


    let width = 0;

    let height = 0;

    let dpr = 1;


    let stars = [];

    let dust = [];

    let redParticles = [];

    let shootingStars = [];


    let mouseX = 0;
    let mouseY = 0;

    let smoothX = 0;
    let smoothY = 0;


    let nextShootingStar =
        performance.now() +
        5000;


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


        createStars();

        createDust();

        createRedParticles();

    }


    function createStars() {

        stars = [];


        let amount =
            Math.floor(
                width *
                height /
                1800
            );


        if (
            width <
            768
        ) {

            amount =
                Math.floor(
                    amount *
                    .62
                );

        }


        amount =
            Math.min(
                amount,
                1050
            );


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            const random =
                Math.random();


            let color =
                "235,238,255";


            if (
                random <
                .08
            ) {

                color =
                    "170,195,255";

            } else if (
                random >
                .94
            ) {

                color =
                    "255,220,185";

            }


            stars.push({

                x:
                    Math.random() *
                    width,

                y:
                    Math.random() *
                    height,

                size:
                    .12 +
                    Math.random() *
                    1.2,

                alpha:
                    .06 +
                    Math.random() *
                    .62,

                phase:
                    Math.random() *
                    Math.PI *
                    2,

                speed:
                    .003 +
                    Math.random() *
                    .012,

                depth:
                    Math.random(),

                color

            });

        }

    }


    function createDust() {

        dust = [];


        const amount =
            width <
            768
                ? 55
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
                    .055,

                vy:
                    (
                        Math.random() -
                        .5
                    )
                    *
                    .055,

                size:
                    .15 +
                    Math.random() *
                    .7,

                alpha:
                    .01 +
                    Math.random() *
                    .07

            });

        }

    }


    function createRedParticles() {

        redParticles = [];


        const amount =
            width <
            768
                ? 12
                : 28;


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            redParticles.push({

                x:
                    Math.random() *
                    width,

                y:
                    Math.random() *
                    height,

                size:
                    .2 +
                    Math.random() *
                    1.1,

                alpha:
                    .015 +
                    Math.random() *
                    .075,

                speed:
                    .01 +
                    Math.random() *
                    .035

            });

        }

    }


    function createShootingStar() {

        shootingStars.push({

            x:
                width *
                (
                    .25 +
                    Math.random() *
                    .7
                ),

            y:
                Math.random() *
                height *
                .35,

            vx:
                -9 -
                Math.random() *
                8,

            vy:
                5 +
                Math.random() *
                5,

            length:
                100 +
                Math.random() *
                140,

            life:
                0,

            maxLife:
                38 +
                Math.random() *
                28

        });

    }


    function drawNebulas() {

        const red =
            ctx.createRadialGradient(

                width *
                .12,

                height *
                .36,

                0,

                width *
                .12,

                height *
                .36,

                Math.max(
                    width,
                    height
                )
                *
                .55

            );


        red.addColorStop(
            0,
            "rgba(105,0,14,.09)"
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
                .48,

                0,

                width *
                .80,

                height *
                .48,

                Math.max(
                    width,
                    height
                )
                *
                .50

            );


        purple.addColorStop(
            0,
            "rgba(55,38,110,.065)"
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


            mouseX =
                (
                    event.clientX /
                    width
                    -
                    .5
                )
                *
                2;


            mouseY =
                (
                    event.clientY /
                    height
                    -
                    .5
                )
                *
                2;

        },
        {
            passive: true
        }
    );


    function animateUniverse(
        time
    ) {

        smoothX +=
            (
                mouseX -
                smoothX
            )
            *
            .02;


        smoothY +=
            (
                mouseY -
                smoothY
            )
            *
            .02;


        const background =
            ctx.createRadialGradient(

                width *
                .5,

                height *
                .40,

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
            .33,
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


        drawNebulas();


        /* ESTRELLAS */

        stars.forEach(
            star => {

                star.phase +=
                    star.speed;


                let alpha =
                    star.alpha +
                    Math.sin(
                        star.phase
                    )
                    *
                    .08;


                alpha =
                    Math.max(
                        .02,
                        alpha
                    );


                const parallax =
                    star.depth *
                    7;


                const x =
                    star.x +
                    smoothX *
                    parallax;


                const y =
                    star.y +
                    smoothY *
                    parallax;


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

        redParticles.forEach(
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
                    `rgba(255,20,38,${particle.alpha})`;


                ctx.fill();

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
                Math.sqrt(
                    star.vx *
                    star.vx +
                    star.vy *
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
                "rgba(220,225,255,0)"
            );


            gradient.addColorStop(
                1,
                `rgba(210,220,255,${opacity * .55})`
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
