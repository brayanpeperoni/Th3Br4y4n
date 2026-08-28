"use strict";

/* =========================================================
   THE BRAYAN
   SCRIPT.JS OPTIMIZADO
   PC + CELULAR
========================================================= */


/* =========================================================
   CONFIGURACIÓN GENERAL
========================================================= */

const IS_MOBILE =
    window.matchMedia("(max-width: 768px)").matches;

const HAS_FINE_POINTER =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;


/* =========================================================
   SELECTORES
========================================================= */

const header =
    document.getElementById("header");

const nav =
    document.getElementById("nav");

const menuBtn =
    document.getElementById("menuBtn");

const backTop =
    document.getElementById("backTop");

const topTools =
    document.getElementById("topTools");

const liveClock =
    document.getElementById("liveClock");

const typingText =
    document.getElementById("typingText");

const year =
    document.getElementById("year");

const introScreen =
    document.getElementById("introScreen");

const introLogoScene =
    document.getElementById("introLogoScene");

const introRedFlash =
    document.getElementById("introRedFlash");

const introLoadingBar =
    document.getElementById("introLoadingBar");

const introPercent =
    document.getElementById("introPercent");

const introPieces =
    document.querySelectorAll(".intro-piece");

const introBats =
    document.getElementById("introBats");

const edgeBats =
    document.getElementById("edgeBats");

const lightningCanvas =
    document.getElementById("lightningCanvas");

const universeCanvas =
    document.getElementById("universeCanvas");

const heroLogoScene =
    document.getElementById("heroLogoScene");


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
    .querySelectorAll(".whatsapp-link")
    .forEach(link => {

        link.href =
            whatsappURL;

    });


/* =========================================================
   AÑO
========================================================= */

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   RELOJ
========================================================= */

function updateClock() {

    if (!liveClock) {
        return;
    }

    const now =
        new Date();

    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    const seconds =
        String(now.getSeconds()).padStart(2, "0");

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

function closeMobileMenu() {

    menuBtn
        ?.classList
        .remove("active");

    nav
        ?.classList
        .remove("open");

    document
        .body
        .classList
        .remove("menu-open");

}

if (
    menuBtn &&
    nav
) {

    menuBtn.addEventListener(
        "click",
        () => {

            const opened =
                nav.classList.toggle("open");

            menuBtn
                .classList
                .toggle("active", opened);

            document
                .body
                .classList
                .toggle("menu-open", opened);

        }
    );

}

document
    .querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


/* =========================================================
   SCROLL OPTIMIZADO
========================================================= */

let scrollTicking =
    false;

function updateScrollUI() {

    const scroll =
        window.scrollY;

    header
        ?.classList
        .toggle(
            "scrolled",
            scroll > 25
        );

    backTop
        ?.classList
        .toggle(
            "visible",
            scroll > 520
        );

    if (topTools) {

        const hidden =
            scroll > 360;

        topTools.style.opacity =
            hidden
                ? "0"
                : "1";

        topTools.style.pointerEvents =
            hidden
                ? "none"
                : "auto";

        if (
            window.innerWidth <= 768
        ) {

            topTools.style.transform =
                hidden

                    ? "translateX(-50%) translateY(-8px)"

                    : "translateX(-50%) translateY(0)";

        } else {

            topTools.style.transform =
                hidden

                    ? "translateY(-8px)"

                    : "translateY(0)";

        }

    }

    scrollTicking =
        false;

}

window.addEventListener(
    "scroll",
    () => {

        if (!scrollTicking) {

            scrollTicking =
                true;

            requestAnimationFrame(
                updateScrollUI
            );

        }

    },
    {
        passive: true
    }
);

updateScrollUI();


/* =========================================================
   VOLVER ARRIBA
========================================================= */

backTop
    ?.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


/* =========================================================
   TYPEWRITER
========================================================= */

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

let typingStarted =
    false;

let typingTimer =
    null;

function typingAnimation() {

    if (!typingText) {
        return;
    }

    if (document.hidden) {

        typingTimer =
            setTimeout(
                typingAnimation,
                500
            );

        return;

    }

    const text =
        typingMessages[
            typingMessageIndex
        ];

    if (!deleting) {

        typingLetterIndex++;

        typingText.textContent =
            text.substring(
                0,
                typingLetterIndex
            );

        if (
            typingLetterIndex >=
            text.length
        ) {

            deleting =
                true;

            typingTimer =
                setTimeout(
                    typingAnimation,
                    1450
                );

            return;

        }

    } else {

        typingLetterIndex--;

        typingText.textContent =
            text.substring(
                0,
                typingLetterIndex
            );

        if (
            typingLetterIndex <= 0
        ) {

            typingLetterIndex =
                0;

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

    typingTimer =
        setTimeout(

            typingAnimation,

            deleting
                ? 32
                : 60

        );

}

function startTyping() {

    if (
        typingStarted ||
        !typingText
    ) {
        return;
    }

    typingStarted =
        true;

    typingAnimation();

}


/* =========================================================
   SVG MURCIÉLAGO
========================================================= */

const BAT_SVG = `
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
   MURCIÉLAGOS DE INTRO
   MISMO EFECTO, CREACIÓN EN BLOQUE
========================================================= */

function createIntroBats() {

    if (!introBats) {
        return;
    }

    const amount =
        IS_MOBILE
            ? 17
            : 34;

    const screenW =
        window.innerWidth;

    const screenH =
        window.innerHeight;

    const fragment =
        document.createDocumentFragment();

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const bat =
            document.createElement("div");

        bat.className =
            "intro-bat";

        bat.innerHTML =
            BAT_SVG;

        const fromLeft =
            Math.random() > .5;

        const startX =
            fromLeft

                ? -200 -
                    Math.random() * 350

                : screenW +
                    120 +
                    Math.random() * 350;

        const endX =
            fromLeft

                ? screenW +
                    220 +
                    Math.random() * 250

                : -300 -
                    Math.random() * 250;

        const startY =
            Math.random() *
            screenH;

        const endY =
            Math.max(
                -100,
                Math.min(
                    screenH + 100,

                    startY +
                    (
                        Math.random() -
                        .5
                    ) * 480
                )
            );

        bat.style.setProperty(
            "--bat-size",
            `${
                24 +
                Math.random() * 74
            }px`
        );

        bat.style.setProperty(
            "--bat-time",
            `${
                2.8 +
                Math.random() * 3.8
            }s`
        );

        bat.style.setProperty(
            "--bat-delay",
            `${
                .10 +
                Math.random() * 4.2
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
                Math.random() * 50
            }deg`
        );

        bat.style.setProperty(
            "--bat-end-r",
            `${
                -30 +
                Math.random() * 60
            }deg`
        );

        fragment.appendChild(
            bat
        );

    }

    introBats.appendChild(
        fragment
    );

}


/* =========================================================
   MURCIÉLAGOS DE LOS BORDES
========================================================= */

function createEdgeBats() {

    if (!edgeBats) {
        return;
    }

    const amount =
        IS_MOBILE
            ? 9
            : 20;

    const fragment =
        document.createDocumentFragment();

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const bat =
            document.createElement("div");

        bat.className =
            "edge-bat";

        bat.innerHTML =
            BAT_SVG;

        const size =
            18 +
            Math.random() * 34;

        bat.style.width =
            `${size}px`;

        bat.style.height =
            `${size * .62}px`;

        bat.style.top =
            `${
                5 +
                Math.random() * 90
            }%`;

        if (
            i % 2 === 0
        ) {

            bat.style.left =
                `${
                    -3 +
                    Math.random() * 12
                }px`;

        } else {

            bat.style.right =
                `${
                    -3 +
                    Math.random() * 12
                }px`;

        }

        bat.style.setProperty(
            "--bat-duration",
            `${
                6 +
                Math.random() * 9
            }s`
        );

        bat.style.setProperty(
            "--bat-move-x",
            `${
                -9 +
                Math.random() * 18
            }px`
        );

        bat.style.setProperty(
            "--bat-move-y",
            `${
                -15 +
                Math.random() * 30
            }px`
        );

        bat.style.setProperty(
            "--bat-rotation",
            `${
                -17 +
                Math.random() * 34
            }deg`
        );

        fragment.appendChild(
            bat
        );

    }

    edgeBats.appendChild(
        fragment
    );

}

createIntroBats();

createEdgeBats();


/* =========================================================
   FLASH ROJO
========================================================= */

function triggerRedFlash() {

    if (
        !introRedFlash ||
        !introRedFlash.isConnected
    ) {
        return;
    }

    introRedFlash
        .classList
        .remove("flash");

    void introRedFlash.offsetWidth;

    introRedFlash
        .classList
        .add("flash");

}


/* =========================================================
   RAYOS REALISTAS OPTIMIZADOS
========================================================= */

let lightningBurst =
    () => {};

let destroyLightning =
    () => {};

if (
    lightningCanvas &&
    introScreen
) {

    const ctx =
        lightningCanvas.getContext(
            "2d",
            {
                alpha: true
            }
        );

    let width =
        window.innerWidth;

    let height =
        window.innerHeight;

    let dpr =
        1;

    let lightningRAF =
        null;

    let resizeTimer =
        null;

    const bolts =
        [];

    function resizeLightning() {

        width =
            window.innerWidth;

        height =
            window.innerHeight;

        dpr =
            IS_MOBILE

                ? 1

                : Math.min(
                    window.devicePixelRatio || 1,
                    1.45
                );

        lightningCanvas.width =
            Math.max(
                1,
                Math.round(
                    width * dpr
                )
            );

        lightningCanvas.height =
            Math.max(
                1,
                Math.round(
                    height * dpr
                )
            );

        lightningCanvas.style.width =
            `${width}px`;

        lightningCanvas.style.height =
            `${height}px`;

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

    }

    resizeLightning();


    /* =====================================================
       GENERAR FORMA NATURAL DEL RAYO
    ====================================================== */

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

        let current =
            displacement;

        for (
            let generation = 0;
            generation < generations;
            generation++
        ) {

            const next =
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

                next.push(a);

                const dx =
                    b.x - a.x;

                const dy =
                    b.y - a.y;

                const distance =
                    Math.hypot(
                        dx,
                        dy
                    ) || 1;

                const nx =
                    -dy / distance;

                const ny =
                    dx / distance;

                const offset =
                    (
                        Math.random() -
                        .5
                    ) * current;

                next.push({

                    x:
                        (
                            a.x +
                            b.x
                        ) / 2 +
                        nx * offset,

                    y:
                        (
                            a.y +
                            b.y
                        ) / 2 +
                        ny * offset

                });

            }

            next.push(
                points[
                    points.length - 1
                ]
            );

            points =
                next;

            current *=
                .57;

        }

        return points;

    }


    function pointsToPath(
        points
    ) {

        const path =
            new Path2D();

        if (!points.length) {
            return path;
        }

        path.moveTo(
            points[0].x,
            points[0].y
        );

        for (
            let i = 1;
            i < points.length;
            i++
        ) {

            path.lineTo(
                points[i].x,
                points[i].y
            );

        }

        return path;

    }


    function createBranch(
        source,
        direction,
        distance
    ) {

        const endX =
            source.x +
            Math.cos(direction) *
            distance;

        const endY =
            source.y +
            Math.sin(direction) *
            distance;

        return midpointDisplacement(
            source.x,
            source.y,
            endX,
            endY,
            distance * .36,
            IS_MOBILE
                ? 3
                : 4
        );

    }


    function randomEdgePoint() {

        const side =
            Math.floor(
                Math.random() * 4
            );

        switch (side) {

            case 0:

                return {
                    x:
                        Math.random() *
                        width,

                    y: -20
                };

            case 1:

                return {
                    x:
                        width + 20,

                    y:
                        Math.random() *
                        height
                };

            case 2:

                return {
                    x:
                        Math.random() *
                        width,

                    y:
                        height + 20
                };

            default:

                return {
                    x: -20,

                    y:
                        Math.random() *
                        height
                };

        }

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
                endX - startX,
                endY - startY
            );

        const points =
            midpointDisplacement(
                startX,
                startY,
                endX,
                endY,
                Math.max(
                    65,
                    distance * .19
                ),
                IS_MOBILE
                    ? 5
                    : 6
            );

        const branchPaths =
            [];

        const branchCount =
            IS_MOBILE

                ? 2 +
                    Math.floor(
                        Math.random() * 3
                    )

                : 2 +
                    Math.floor(
                        Math.random() * 4
                    );

        for (
            let i = 0;
            i < branchCount;
            i++
        ) {

            const index =
                Math.min(
                    points.length - 1,

                    Math.floor(
                        points.length *
                        (
                            .20 +
                            Math.random() * .58
                        )
                    )
                );

            const source =
                points[index];

            const angle =
                Math.atan2(
                    endY - startY,
                    endX - startX
                )
                +
                (
                    Math.random() > .5
                        ? 1
                        : -1
                )
                *
                (
                    .35 +
                    Math.random() * .7
                );

            const branchDistance =
                45 +
                Math.random() * 130;

            const branch =
                createBranch(
                    source,
                    angle,
                    branchDistance
                );

            branchPaths.push(
                pointsToPath(
                    branch
                )
            );

        }

        bolts.push({

            path:
                pointsToPath(
                    points
                ),

            branchPaths,

            life: 0,

            maxLife:
                IS_MOBILE
                    ? 7 +
                        Math.random() * 6
                    : 9 +
                        Math.random() * 8,

            strength

        });

        startLightningLoop();

    }


    function createRandomBolt(
        strength = 1
    ) {

        const start =
            randomEdgePoint();

        const centerX =
            width / 2;

        const centerY =
            height / 2;

        createLightning(

            start.x,
            start.y,

            centerX +
            (
                Math.random() -
                .5
            )
            *
            width *
            .38,

            centerY +
            (
                Math.random() -
                .5
            )
            *
            height *
            .36,

            strength

        );

    }


    /* =====================================================
       PINTAR RAYO
    ====================================================== */

    function strokeLightning(
        path,
        alpha,
        strength,
        branch = false
    ) {

        ctx.lineCap =
            "round";

        ctx.lineJoin =
            "round";


        /* RESPLANDOR GRANDE */

        ctx.strokeStyle =
            `rgba(255,0,22,${alpha * .10})`;

        ctx.lineWidth =
            (
                branch
                    ? 7
                    : 17
            ) * strength;

        ctx.shadowBlur =
            branch
                ? 22
                : 34;

        ctx.shadowColor =
            "#ff001c";

        ctx.stroke(path);


        /* RESPLANDOR MEDIO */

        ctx.strokeStyle =
            `rgba(255,0,30,${alpha * .36})`;

        ctx.lineWidth =
            (
                branch
                    ? 2.8
                    : 6
            ) * strength;

        ctx.shadowBlur =
            branch
                ? 12
                : 19;

        ctx.stroke(path);


        /* NÚCLEO ROJO */

        ctx.strokeStyle =
            `rgba(255,58,72,${alpha})`;

        ctx.lineWidth =
            (
                branch
                    ? .7
                    : 1.25
            ) * strength;

        ctx.shadowBlur =
            6;

        ctx.shadowColor =
            "#ff1530";

        ctx.stroke(path);

    }


    function renderLightning() {

        lightningRAF =
            null;

        if (
            !lightningCanvas.isConnected
        ) {

            bolts.length =
                0;

            return;

        }

        ctx.clearRect(
            0,
            0,
            width,
            height
        );

        ctx.globalCompositeOperation =
            "lighter";

        for (
            let i =
                bolts.length - 1;
            i >= 0;
            i--
        ) {

            const bolt =
                bolts[i];

            bolt.life++;

            const life =
                Math.max(
                    0,
                    1 -
                    bolt.life /
                    bolt.maxLife
                );

            const flicker =
                .70 +
                Math.random() * .30;

            const alpha =
                life * flicker;

            strokeLightning(
                bolt.path,
                alpha,
                bolt.strength
            );

            for (
                const branchPath
                of bolt.branchPaths
            ) {

                strokeLightning(
                    branchPath,
                    alpha * .54,
                    bolt.strength * .76,
                    true
                );

            }

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

        ctx.shadowBlur =
            0;

        if (
            bolts.length > 0
        ) {

            lightningRAF =
                requestAnimationFrame(
                    renderLightning
                );

        } else {

            ctx.clearRect(
                0,
                0,
                width,
                height
            );

        }

    }


    function startLightningLoop() {

        if (
            lightningRAF === null
        ) {

            lightningRAF =
                requestAnimationFrame(
                    renderLightning
                );

        }

    }


    lightningBurst =
        function (
            amount,
            gap,
            strength = 1
        ) {

            for (
                let i = 0;
                i < amount;
                i++
            ) {

                setTimeout(
                    () => {

                        if (
                            !introScreen ||
                            !introScreen.isConnected
                        ) {
                            return;
                        }

                        createRandomBolt(
                            strength *
                            (
                                .84 +
                                Math.random() * .32
                            )
                        );

                        if (
                            Math.random() > .58
                        ) {

                            triggerRedFlash();

                        }

                    },
                    i * gap
                );

            }

        };


    destroyLightning =
        function () {

            if (
                lightningRAF !== null
            ) {

                cancelAnimationFrame(
                    lightningRAF
                );

                lightningRAF =
                    null;

            }

            bolts.length =
                0;

        };


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );

            resizeTimer =
                setTimeout(
                    resizeLightning,
                    180
                );

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   INTRO 3D
========================================================= */

if (
    introScreen &&
    introLogoScene &&
    HAS_FINE_POINTER
) {

    let introTiltRAF =
        null;

    let targetX =
        0;

    let targetY =
        0;

    introScreen.addEventListener(
        "pointermove",
        event => {

            targetX =
                (
                    event.clientX /
                    window.innerWidth -
                    .5
                );

            targetY =
                (
                    event.clientY /
                    window.innerHeight -
                    .5
                );

            if (
                introTiltRAF !== null
            ) {
                return;
            }

            introTiltRAF =
                requestAnimationFrame(
                    () => {

                        introLogoScene.style.transform =
                            `
                                rotateY(${targetX * 11}deg)
                                rotateX(${targetY * -9}deg)
                            `;

                        introTiltRAF =
                            null;

                    }
                );

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   UNIVERSO OPTIMIZADO
========================================================= */

let startUniverse =
    () => {};

if (universeCanvas) {

    const ctx =
        universeCanvas.getContext(
            "2d",
            {
                alpha: false
            }
        );

    const backgroundCanvas =
        document.createElement(
            "canvas"
        );

    const backgroundCtx =
        backgroundCanvas.getContext(
            "2d",
            {
                alpha: false
            }
        );

    const starLayers =
        [
            document.createElement("canvas"),
            document.createElement("canvas"),
            document.createElement("canvas")
        ];

    const starContexts =
        starLayers.map(
            canvas =>
                canvas.getContext("2d")
        );

    const redParticleSprite =
        document.createElement(
            "canvas"
        );

    const redParticleSpriteCtx =
        redParticleSprite.getContext(
            "2d"
        );

    redParticleSprite.width =
        32;

    redParticleSprite.height =
        32;

    let width =
        0;

    let height =
        0;

    let dpr =
        1;

    let dust =
        [];

    let redDust =
        [];

    let twinkleStars =
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

    let universeStarted =
        false;

    let universeRAF =
        null;

    let lastFrame =
        0;

    let resizeTimer =
        null;

    let nextShootingStar =
        performance.now() +
        4800;

    const TARGET_FPS =
        IS_MOBILE
            ? 45
            : 60;

    const FRAME_INTERVAL =
        1000 /
        TARGET_FPS;


    /* =====================================================
       SPRITE DE PARTÍCULA ROJA
    ====================================================== */

    function buildRedParticleSprite() {

        const gradient =
            redParticleSpriteCtx
                .createRadialGradient(
                    16,
                    16,
                    0,
                    16,
                    16,
                    16
                );

        gradient.addColorStop(
            0,
            "rgba(255,70,85,1)"
        );

        gradient.addColorStop(
            .15,
            "rgba(255,20,45,.75)"
        );

        gradient.addColorStop(
            .45,
            "rgba(255,0,30,.20)"
        );

        gradient.addColorStop(
            1,
            "rgba(255,0,30,0)"
        );

        redParticleSpriteCtx.fillStyle =
            gradient;

        redParticleSpriteCtx.fillRect(
            0,
            0,
            32,
            32
        );

    }

    buildRedParticleSprite();


    /* =====================================================
       FONDO ESTÁTICO DEL UNIVERSO
       LOS GRADIENTES YA NO SE CALCULAN 60 VECES/SEGUNDO
    ====================================================== */

    function buildUniverseBackground() {

        backgroundCanvas.width =
            Math.max(
                1,
                Math.floor(width)
            );

        backgroundCanvas.height =
            Math.max(
                1,
                Math.floor(height)
            );


        /* NEGRO PROFUNDO */

        const background =
            backgroundCtx.createRadialGradient(
                width * .5,
                height * .38,
                0,
                width * .5,
                height * .50,
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

        backgroundCtx.fillStyle =
            background;

        backgroundCtx.fillRect(
            0,
            0,
            width,
            height
        );


        /* NEBULOSA ROJA */

        const red =
            backgroundCtx.createRadialGradient(
                width * .12,
                height * .35,
                0,
                width * .12,
                height * .35,
                Math.max(
                    width,
                    height
                ) * .55
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

        backgroundCtx.fillStyle =
            red;

        backgroundCtx.fillRect(
            0,
            0,
            width,
            height
        );


        /* NEBULOSA MORADA */

        const purple =
            backgroundCtx.createRadialGradient(
                width * .80,
                height * .46,
                0,
                width * .80,
                height * .46,
                Math.max(
                    width,
                    height
                ) * .52
            );

        purple.addColorStop(
            0,
            "rgba(50,35,105,.06)"
        );

        purple.addColorStop(
            1,
            "rgba(0,0,0,0)"
        );

        backgroundCtx.fillStyle =
            purple;

        backgroundCtx.fillRect(
            0,
            0,
            width,
            height
        );


        /* BANDA GALÁCTICA */

        backgroundCtx.save();

        backgroundCtx.translate(
            width * .49,
            height * .48
        );

        backgroundCtx.rotate(
            -.28
        );

        backgroundCtx.scale(
            1.75,
            .33
        );

        const galaxy =
            backgroundCtx.createRadialGradient(
                0,
                0,
                0,
                0,
                0,
                Math.max(
                    width,
                    height
                ) * .48
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

        backgroundCtx.fillStyle =
            galaxy;

        backgroundCtx.beginPath();

        backgroundCtx.arc(
            0,
            0,
            Math.max(
                width,
                height
            ) * .5,
            0,
            Math.PI * 2
        );

        backgroundCtx.fill();

        backgroundCtx.restore();


        /* NUBES LEJANAS */

        const cloudAmount =
            6;

        for (
            let i = 0;
            i < cloudAmount;
            i++
        ) {

            const x =
                Math.random() *
                width;

            const y =
                Math.random() *
                height;

            const radius =
                180 +
                Math.random() * 330;

            const alpha =
                .008 +
                Math.random() * .015;

            const redCloud =
                Math.random() > .45;

            const cloudGradient =
                backgroundCtx
                    .createRadialGradient(
                        x,
                        y,
                        0,
                        x,
                        y,
                        radius
                    );

            cloudGradient.addColorStop(
                0,

                redCloud

                    ? `rgba(100,0,14,${alpha})`

                    : `rgba(45,35,100,${alpha})`
            );

            cloudGradient.addColorStop(
                1,
                "rgba(0,0,0,0)"
            );

            backgroundCtx.fillStyle =
                cloudGradient;

            backgroundCtx.fillRect(
                Math.max(
                    0,
                    x - radius
                ),
                Math.max(
                    0,
                    y - radius
                ),
                radius * 2,
                radius * 2
            );

        }

    }


    /* =====================================================
       CAPAS DE ESTRELLAS
       SE DIBUJAN UNA SOLA VEZ
    ====================================================== */

    function configureStarLayers() {

        starLayers.forEach(
            canvas => {

                canvas.width =
                    Math.max(
                        1,
                        Math.floor(width)
                    );

                canvas.height =
                    Math.max(
                        1,
                        Math.floor(height)
                    );

            }
        );

    }


    function drawStaticStar(
        starCtx,
        x,
        y,
        size,
        alpha,
        color,
        flare
    ) {

        starCtx.fillStyle =
            `rgba(${color},${alpha})`;

        if (
            size <= .85
        ) {

            starCtx.fillRect(
                x,
                y,
                Math.max(.6, size),
                Math.max(.6, size)
            );

        } else {

            starCtx.beginPath();

            starCtx.arc(
                x,
                y,
                size,
                0,
                Math.PI * 2
            );

            starCtx.fill();

        }

        if (flare) {

            starCtx.strokeStyle =
                `rgba(${color},${alpha * .20})`;

            starCtx.lineWidth =
                .45;

            starCtx.beginPath();

            starCtx.moveTo(
                x - size * 5,
                y
            );

            starCtx.lineTo(
                x + size * 5,
                y
            );

            starCtx.moveTo(
                x,
                y - size * 5
            );

            starCtx.lineTo(
                x,
                y + size * 5
            );

            starCtx.stroke();

        }

    }


    function generateStars() {

        twinkleStars =
            [];

        starContexts.forEach(
            starCtx => {

                starCtx.clearRect(
                    0,
                    0,
                    width,
                    height
                );

            }
        );

        let amount =
            Math.floor(
                width *
                height /
                1550
            );

        if (
            width < 768
        ) {

            amount =
                Math.floor(
                    amount * .56
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
                randomColor < .075
            ) {

                color =
                    "165,190,255";

            } else if (
                randomColor > .94
            ) {

                color =
                    "255,218,180";

            }

            const x =
                Math.random() *
                width;

            const y =
                Math.random() *
                height;

            const size =
                .10 +
                Math.random() * 1.25;

            const alpha =
                .045 +
                Math.random() * .62;

            const depth =
                Math.random();

            const flare =
                Math.random() > .987;

            const layerIndex =
                depth < .34
                    ? 0
                    : depth < .68
                        ? 1
                        : 2;

            const twinkles =
                Math.random() <
                (
                    IS_MOBILE
                        ? .10
                        : .12
                );

            if (twinkles) {

                twinkleStars.push({

                    x,
                    y,
                    size,
                    alpha,

                    phase:
                        Math.random() *
                        Math.PI *
                        2,

                    twinkle:
                        .002 +
                        Math.random() * .012,

                    depth,

                    color,

                    flare

                });

            } else {

                drawStaticStar(
                    starContexts[
                        layerIndex
                    ],
                    x,
                    y,
                    size,
                    alpha,
                    color,
                    flare
                );

            }

        }

    }


    /* =====================================================
       POLVO ESTELAR
    ====================================================== */

    function generateDust() {

        dust =
            [];

        const amount =
            width < 768
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
                    ) * .045,

                vy:
                    (
                        Math.random() -
                        .5
                    ) * .045,

                size:
                    .12 +
                    Math.random() * .65,

                alpha:
                    .01 +
                    Math.random() * .065

            });

        }

    }


    /* =====================================================
       PARTÍCULAS ROJAS
    ====================================================== */

    function generateRedDust() {

        redDust =
            [];

        const amount =
            width < 768
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
                    Math.random() * 1.2,

                alpha:
                    .012 +
                    Math.random() * .07,

                speed:
                    .008 +
                    Math.random() * .030

            });

        }

    }


    /* =====================================================
       ESTRELLAS FUGACES
    ====================================================== */

    function createShootingStar() {

        shootingStars.push({

            x:
                width *
                (
                    .25 +
                    Math.random() * .70
                ),

            y:
                Math.random() *
                height *
                .36,

            vx:
                -8 -
                Math.random() * 8,

            vy:
                4.5 +
                Math.random() * 5,

            length:
                90 +
                Math.random() * 150,

            life: 0,

            maxLife:
                35 +
                Math.random() * 30

        });

    }


    /* =====================================================
       RESIZE
    ====================================================== */

    function resizeUniverse() {

        width =
            window.innerWidth;

        height =
            window.innerHeight;

        dpr =
            IS_MOBILE

                ? 1

                : Math.min(
                    window.devicePixelRatio || 1,
                    1.4
                );

        universeCanvas.width =
            Math.max(
                1,
                Math.round(
                    width * dpr
                )
            );

        universeCanvas.height =
            Math.max(
                1,
                Math.round(
                    height * dpr
                )
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

        buildUniverseBackground();

        configureStarLayers();

        generateStars();

        generateDust();

        generateRedDust();

    }


    /* =====================================================
       PARALLAX
    ====================================================== */

    if (HAS_FINE_POINTER) {

        window.addEventListener(
            "pointermove",
            event => {

                pointerX =
                    (
                        event.clientX /
                        width -
                        .5
                    ) * 2;

                pointerY =
                    (
                        event.clientY /
                        height -
                        .5
                    ) * 2;

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       DIBUJAR UNIVERSO
    ====================================================== */

    function drawUniverse(
        time,
        delta
    ) {

        const speedFactor =
            Math.min(
                2,
                delta /
                16.666
            );

        smoothX +=
            (
                pointerX -
                smoothX
            ) * .025;

        smoothY +=
            (
                pointerY -
                smoothY
            ) * .025;


        /* FONDO CACHÉ */

        ctx.drawImage(
            backgroundCanvas,
            0,
            0,
            width,
            height
        );


        /* CAPAS DE ESTRELLAS CON PROFUNDIDAD */

        const parallaxStrengths =
            [
                1.6,
                3.7,
                6.5
            ];

        for (
            let i = 0;
            i < starLayers.length;
            i++
        ) {

            const move =
                parallaxStrengths[i];

            ctx.drawImage(
                starLayers[i],
                smoothX * move,
                smoothY * move
            );

        }


        /* ESTRELLAS QUE PARPADEAN */

        for (
            const star
            of twinkleStars
        ) {

            star.phase +=
                star.twinkle *
                speedFactor;

            let alpha =
                star.alpha +
                Math.sin(
                    star.phase
                ) * .09;

            alpha =
                Math.max(
                    .015,
                    alpha
                );

            const offset =
                star.depth * 7;

            const x =
                star.x +
                smoothX * offset;

            const y =
                star.y +
                smoothY * offset;

            ctx.fillStyle =
                `rgba(${star.color},${alpha})`;

            if (
                star.size <= .85
            ) {

                ctx.fillRect(
                    x,
                    y,
                    Math.max(
                        .6,
                        star.size
                    ),
                    Math.max(
                        .6,
                        star.size
                    )
                );

            } else {

                ctx.beginPath();

                ctx.arc(
                    x,
                    y,
                    star.size,
                    0,
                    Math.PI * 2
                );

                ctx.fill();

            }

            if (star.flare) {

                ctx.strokeStyle =
                    `rgba(${star.color},${alpha * .20})`;

                ctx.lineWidth =
                    .45;

                ctx.beginPath();

                ctx.moveTo(
                    x -
                    star.size * 5,
                    y
                );

                ctx.lineTo(
                    x +
                    star.size * 5,
                    y
                );

                ctx.moveTo(
                    x,
                    y -
                    star.size * 5
                );

                ctx.lineTo(
                    x,
                    y +
                    star.size * 5
                );

                ctx.stroke();

            }

        }


        /* POLVO */

        ctx.fillStyle =
            "rgba(155,160,185,.045)";

        for (
            const particle
            of dust
        ) {

            particle.x +=
                particle.vx *
                speedFactor;

            particle.y +=
                particle.vy *
                speedFactor;

            if (
                particle.x < 0
            ) {
                particle.x =
                    width;
            }

            if (
                particle.x > width
            ) {
                particle.x =
                    0;
            }

            if (
                particle.y < 0
            ) {
                particle.y =
                    height;
            }

            if (
                particle.y > height
            ) {
                particle.y =
                    0;
            }

            ctx.globalAlpha =
                particle.alpha;

            ctx.fillRect(
                particle.x,
                particle.y,
                Math.max(
                    .6,
                    particle.size
                ),
                Math.max(
                    .6,
                    particle.size
                )
            );

        }

        ctx.globalAlpha =
            1;


        /* PARTÍCULAS ROJAS */

        for (
            const particle
            of redDust
        ) {

            particle.y -=
                particle.speed *
                speedFactor;

            if (
                particle.y < -10
            ) {

                particle.y =
                    height + 10;

                particle.x =
                    Math.random() *
                    width;

            }

            const spriteSize =
                10 +
                particle.size * 11;

            ctx.globalAlpha =
                Math.min(
                    1,
                    particle.alpha * 8
                );

            ctx.drawImage(
                redParticleSprite,
                particle.x -
                spriteSize / 2,
                particle.y -
                spriteSize / 2,
                spriteSize,
                spriteSize
            );

        }

        ctx.globalAlpha =
            1;


        /* GENERAR ESTRELLA FUGAZ */

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


        /* PINTAR ESTRELLAS FUGACES */

        for (
            let i =
                shootingStars.length - 1;

            i >= 0;

            i--
        ) {

            const star =
                shootingStars[i];

            star.x +=
                star.vx *
                speedFactor;

            star.y +=
                star.vy *
                speedFactor;

            star.life +=
                speedFactor;

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
                ) || 1;

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

    }


    /* =====================================================
       LOOP DEL UNIVERSO
       60 FPS PC / 45 FPS CELULAR
    ====================================================== */

    function universeLoop(
        time
    ) {

        universeRAF =
            requestAnimationFrame(
                universeLoop
            );

        if (
            document.hidden
        ) {
            return;
        }

        const elapsed =
            time -
            lastFrame;

        if (
            elapsed <
            FRAME_INTERVAL
        ) {
            return;
        }

        lastFrame =
            time -
            (
                elapsed %
                FRAME_INTERVAL
            );

        drawUniverse(
            time,
            elapsed
        );

    }


    startUniverse =
        function () {

            if (
                universeStarted
            ) {
                return;
            }

            universeStarted =
                true;

            resizeUniverse();

            lastFrame =
                performance.now();

            universeRAF =
                requestAnimationFrame(
                    universeLoop
                );

        };


    window.addEventListener(
        "resize",
        () => {

            if (
                !universeStarted
            ) {
                return;
            }

            clearTimeout(
                resizeTimer
            );

            resizeTimer =
                setTimeout(
                    resizeUniverse,
                    180
                );

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   MOSTRAR CONTENIDO PRINCIPAL
========================================================= */

let mainPageShown =
    false;

function showMainPage() {

    if (mainPageShown) {
        return;
    }

    mainPageShown =
        true;

    document
        .body
        .classList
        .remove("intro-active");

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
                index * 75
            );

        }
    );

    startTyping();

    startUniverse();

}


/* =========================================================
   CARGA NATURAL DE LA INTRO
========================================================= */

let introProgress =
    0;

let pageLoaded =
    false;

let introFinished =
    false;

let introProgressRAF =
    null;

let displayedPercent =
    -1;

const introStartedAt =
    performance.now();


/*
   LA INTRO NO TIENE 8 SEGUNDOS FIJOS.
   SE ADAPTA A LA CARGA REAL.
*/

const MIN_INTRO_TIME =
    IS_MOBILE
        ? 2200
        : 2400;

const MAX_INTRO_TIME =
    5000;


/* =========================================================
   BARRA GPU
========================================================= */

if (introLoadingBar) {

    introLoadingBar.style.width =
        "100%";

    introLoadingBar.style.transformOrigin =
        "left center";

    introLoadingBar.style.transform =
        "scaleX(0)";

    introLoadingBar.style.willChange =
        "transform";

}


function updateIntroLoading() {

    const value =
        Math.max(
            0,
            Math.min(
                100,
                introProgress
            )
        );

    if (introLoadingBar) {

        introLoadingBar.style.transform =
            `scaleX(${value / 100})`;

    }

    const rounded =
        Math.floor(
            value
        );

    if (
        introPercent &&
        rounded !==
        displayedPercent
    ) {

        displayedPercent =
            rounded;

        introPercent.textContent =
            `${rounded}%`;

    }

}


/* =========================================================
   PROGRESO SUAVE Y NATURAL
========================================================= */

function introProgressLoop(
    time
) {

    if (introFinished) {
        return;
    }

    const elapsed =
        time -
        introStartedAt;

    let target;

    if (!pageLoaded) {

        /*
           AVANZA NATURALMENTE.
           NO LLEGA A 100 HASTA QUE LA WEB HAYA CARGADO.
        */

        target =
            Math.min(
                93,

                8 +
                87 *
                (
                    1 -
                    Math.exp(
                        -elapsed /
                        1050
                    )
                )
            );

    } else {

        target =
            100;

    }


    /*
       SUAVIZADO PARA EVITAR SALTOS
    */

    introProgress +=
        (
            target -
            introProgress
        )
        *
        (
            pageLoaded
                ? .095
                : .045
        );


    if (
        pageLoaded &&
        elapsed >=
        MIN_INTRO_TIME &&
        introProgress >=
        98.7
    ) {

        finishIntro();

        return;

    }

    updateIntroLoading();

    introProgressRAF =
        requestAnimationFrame(
            introProgressLoop
        );

}

if (introScreen) {

    introProgressRAF =
        requestAnimationFrame(
            introProgressLoop
        );

}


/* =========================================================
   DETECTAR CARGA REAL
========================================================= */

function markPageLoaded() {

    pageLoaded =
        true;

}

if (
    document.readyState ===
    "complete"
) {

    markPageLoaded();

} else {

    window.addEventListener(
        "load",
        markPageLoaded,
        {
            once: true
        }
    );

}


/* =========================================================
   RAYOS DURANTE INTRO
========================================================= */

if (introScreen) {

    setTimeout(
        () => {

            if (!introFinished) {

                lightningBurst(
                    4,
                    95,
                    .85
                );

            }

        },
        350
    );

    setTimeout(
        () => {

            if (!introFinished) {

                lightningBurst(
                    5,
                    80,
                    .95
                );

            }

        },
        1150
    );

    setTimeout(
        () => {

            if (!introFinished) {

                lightningBurst(
                    6,
                    65,
                    1.03
                );

            }

        },
        2050
    );

}


/* =========================================================
   FINALIZAR INTRO
========================================================= */

function finishIntro() {

    if (introFinished) {
        return;
    }

    introFinished =
        true;

    pageLoaded =
        true;

    if (
        introProgressRAF !==
        null
    ) {

        cancelAnimationFrame(
            introProgressRAF
        );

        introProgressRAF =
            null;

    }

    introProgress =
        100;

    updateIntroLoading();


    /* RAYO FINAL */

    lightningBurst(
        IS_MOBILE
            ? 5
            : 8,
        45,
        1.08
    );

    triggerRedFlash();


    /* SALIDA DEL LOGO */

    setTimeout(
        () => {

            introScreen
                ?.classList
                .add(
                    "intro-exit"
                );

        },
        170
    );


    /* MOSTRAR WEB */

    setTimeout(
        () => {

            showMainPage();

            introScreen
                ?.classList
                .add(
                    "intro-hide"
                );

        },
        700
    );


    /* BORRAR INTRO */

    setTimeout(
        () => {

            destroyLightning();

            introScreen
                ?.remove();

        },
        1450
    );

}


/* =========================================================
   SEGURIDAD DE CARGA
========================================================= */

if (introScreen) {

    setTimeout(
        () => {

            if (!introFinished) {

                finishIntro();

            }

        },
        MAX_INTRO_TIME
    );

} else {

    showMainPage();

}


/* =========================================================
   LOGO HERO 3D OPTIMIZADO
========================================================= */

if (
    heroLogoScene &&
    HAS_FINE_POINTER
) {

    let heroTiltRAF =
        null;

    let targetX =
        0;

    let targetY =
        0;

    heroLogoScene.addEventListener(
        "pointermove",
        event => {

            const rect =
                heroLogoScene
                    .getBoundingClientRect();

            targetX =
                (
                    event.clientX -
                    rect.left
                )
                /
                rect.width
                -
                .5;

            targetY =
                (
                    event.clientY -
                    rect.top
                )
                /
                rect.height
                -
                .5;

            if (
                heroTiltRAF !==
                null
            ) {
                return;
            }

            heroTiltRAF =
                requestAnimationFrame(
                    () => {

                        heroLogoScene.style.transform =
                            `
                                rotateY(${targetX * 12}deg)
                                rotateX(${targetY * -10}deg)
                            `;

                        heroTiltRAF =
                            null;

                    }
                );

        },
        {
            passive: true
        }
    );

    heroLogoScene.addEventListener(
        "pointerleave",
        () => {

            heroLogoScene.style.transform =
                "rotateX(0deg) rotateY(0deg)";

        }
    );

}


/* =========================================================
   REVEAL AL HACER SCROLL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );

if (
    "IntersectionObserver"
    in window
) {

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
                                .add("show");

                            revealObserver
                                .unobserve(
                                    entry.target
                                );

                        }

                    }
                );

            },

            {
                threshold: .08,
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

} else {

    revealElements.forEach(
        element => {

            element
                .classList
                .add("show");

        }
    );

}


/* =========================================================
   NAVEGACIÓN ACTIVA
   INTERSECTIONOBSERVER EN VEZ DE CALCULAR TODO EN SCROLL
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );

function activateNavigation(
    sectionId
) {

    navLinks.forEach(
        link => {

            link.classList.remove(
                "active"
            );

        }
    );

    document
        .querySelector(
            `.nav-link[href="#${sectionId}"]`
        )
        ?.classList
        .add("active");

}

if (
    "IntersectionObserver"
    in window
) {

    const navigationObserver =
        new IntersectionObserver(

            entries => {

                const visible =
                    entries
                        .filter(
                            entry =>
                                entry.isIntersecting
                        )
                        .sort(
                            (
                                a,
                                b
                            ) =>
                                b.intersectionRatio -
                                a.intersectionRatio
                        );

                if (
                    visible.length
                ) {

                    activateNavigation(
                        visible[0]
                            .target
                            .id
                    );

                }

            },

            {
                rootMargin:
                    "-30% 0px -55% 0px",

                threshold:
                    [
                        0,
                        .1,
                        .25,
                        .5
                    ]
            }

        );

    sections.forEach(
        section => {

            navigationObserver.observe(
                section
            );

        }
    );

}


/* =========================================================
   VISIBILIDAD DE PESTAÑA
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        /*
           El navegador pausa automáticamente
           los canvas cuando la pestaña no está visible.
           Aquí evitamos que el typewriter intente recuperar
           cientos de animaciones al volver.
        */

        if (
            !document.hidden &&
            typingStarted &&
            !typingTimer
        ) {

            typingAnimation();

        }

    }
);


/* =========================================================
   PRECARGA SUAVE DE IMÁGENES IMPORTANTES
========================================================= */

function preloadImportantImages() {

    const sources = [
        "./img/brayan.png",
        "./img/logo.jpg",
        "./img/logobra.png"
    ];

    sources.forEach(
        source => {

            const image =
                new Image();

            image.decoding =
                "async";

            image.src =
                source;

        }
    );

}

preloadImportantImages();


/* =========================================================
   FIN
========================================================= */
