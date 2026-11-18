/* =====================================================================
   INTRO — expérience plein écran pilotée par le scroll
   Se superpose à l'app au premier chargement (une fois par session).
   Utilise les données et fonctions globales d'app.js (TRACKS, ARTIST, ALBUM,
   icon, fmt, toSec, go, selectTrack, playCtx, state).
   ===================================================================== */
(function () {
    "use strict";

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = (id) => TRACKS.find((x) => x.id === id);

    /* ---------- Scènes : couleur de fond, étiquette du vinyle, position du vinyle ---------- */
    // x / y en % de la fenêtre (depuis le centre), s = échelle, o = opacité
    const SCENES = [
        { key: "hero",    name: "INTRO",          color: "#3b2a6b", label: ALBUM.cover,     desk: { x: 24, y: 10, s: 1.0, o: 1 },   mob: { x: 0, y: 14, s: 0.95, o: 0.9 } },
        { key: "parcours",name: "PARCOURS",       color: t(1).color, label: t(1).art,       desk: { x: -25, y: 0, s: 0.82, o: 1 },  mob: { x: 22, y: -30, s: 0.5, o: 0.55 } },
        { key: "stack",   name: "COMPÉTENCES",    color: t(3).color, label: t(3).art,       desk: { x: 0, y: 0, s: 0.62, o: 1 },    mob: { x: 0, y: 0, s: 0.75, o: 0.6 } },
        { key: "top",     name: "PROJETS",        color: t(4).color, label: t(4).art,       desk: { x: 33, y: -22, s: 0.42, o: 1 }, mob: { x: 30, y: -36, s: 0.38, o: 0.6 } },
        { key: "everial", name: "ENTREPRISE",     color: t(2).color, label: t(2).art,       desk: { x: -27, y: 4, s: 0.8, o: 1 },   mob: { x: -24, y: -30, s: 0.5, o: 0.55 } },
        { key: "veille",  name: "VEILLE TECHNO",  color: t(5).color, label: t(5).art,       desk: { x: 28, y: 2, s: 0.72, o: 1 },   mob: { x: 24, y: -32, s: 0.48, o: 0.55 } },
        { key: "end",     name: "À SUIVRE",       color: "#141414",  label: ALBUM.cover,     desk: { x: 0, y: -27, s: 0.55, o: 1 },  mob: { x: 0, y: -26, s: 0.6, o: 1 } }
    ];

    const pad = (n) => String(n).padStart(2, "0");
    const R = (d, html, tag, cls) => "<" + (tag || "div") + ' class="iv-r ' + (cls || "") + '" style="--d:' + d + 'ms">' + html + "</" + (tag || "div") + ">";
    const idx = (i) => '<span class="iv-idx">' + pad(i) + '<small>/' + pad(SCENES.length - 1) + "</small></span>";

    /* ---------- Contenu ---------- */
    function sectionsHTML() {
        const stack = ["C#", "HTML", "CSS", "C++", "MySQL", "Git", "VS Code", "Linux", "N8N"];
        const row = (dir, cls) => '<div class="iv-marquee ' + cls + '" data-dir="' + dir + '"><div>' +
            stack.concat(stack).map((s) => "<span>" + s + "</span><i>✦</i>").join("") + "</div></div>";

        const tops = [
            { n: 1, t: "KUZCO", s: "Filtre lama interactif · HTML, CSS, JS", img: "Images/KUZCO.png" },
            { n: 2, t: "KAHOOT", s: "Application de quiz · C# / POO", img: "Images/Kahoot.png" },
            { n: 3, t: "TIER LIST", s: "Glisser-déposer · Flexbox", img: "Images/TierList.png" }
        ];

        return [
            // 0 — HERO
            '<section class="iv-sec iv-hero" data-scene="0"><div class="iv-pin">' +
                R(0, "Portfolio · Premier album · " + ALBUM.year, "p", "iv-kicker") +
                '<h1 class="iv-giant" aria-label="' + ARTIST.name + '">' +
                    '<span class="iv-line" data-shift="-1">SEBASTIAN</span>' +
                    '<span class="iv-line outline" data-shift="1">MORA</span>' +
                "</h1>" +
                R(250, "Développeur d'applications · BTS SIO SLAM · Alternant chez Everial", "p", "iv-lead") +
                R(500, '<span class="iv-mouse"><i></i></span>Faites défiler pour lancer l\'album', "p", "iv-cue") +
            "</div></section>",

            // 1 — PARCOURS
            '<section class="iv-sec iv-right" data-scene="1"><div class="iv-pin">' +
                '<span class="iv-bgword" data-shift="1">PARCOURS</span>' +
                '<div class="iv-col">' +
                    R(0, idx(1) + "Face A", "p", "iv-kicker") +
                    R(100, "Le<br>virage.", "h2", "iv-title") +
                    '<ol class="iv-tracks">' +
                        R(250, '<span class="n">01</span><span><strong>Bac SES</strong><em>option Mathématiques</em></span><span class="d">intro</span>', "li") +
                        R(380, '<span class="n">02</span><span><strong>2 ans de psychologie</strong><em>rigueur, analyse, sens de l\'UX</em></span><span class="d">interlude</span>', "li") +
                        R(510, '<span class="n">03</span><span><strong>BTS SIO SLAM</strong><em>Nexa Digital School</em></span><span class="d">le drop</span>', "li") +
                        R(640, '<span class="n">04</span><span><strong>Alternance</strong><em>Technicien d\'exploitation · Everial</em></span><span class="d">en cours</span>', "li") +
                    "</ol>" +
                    R(780, "Comprendre les besoins des utilisateurs, puis construire des outils concrets qui y répondent.", "p", "iv-text") +
                "</div>" +
            "</div></section>",

            // 2 — STACK
            '<section class="iv-sec iv-stack" data-scene="2"><div class="iv-pin">' +
                '<div class="iv-center">' +
                    R(0, idx(2) + "En rotation", "p", "iv-kicker") +
                    R(100, "Ma stack", "h2", "iv-title") +
                "</div>" +
                row(-1, "") + row(1, "outline") + row(-1, "small") +
            "</div></section>",

            // 3 — TOP PROJETS
            '<section class="iv-sec iv-top" data-scene="3"><div class="iv-pin">' +
                '<div class="iv-col wide">' +
                    R(0, idx(3) + "Top titres", "p", "iv-kicker") +
                    R(100, "Mes projets<br>en boucle.", "h2", "iv-title") +
                    '<div class="iv-podium">' + tops.map((p, i) =>
                        R(250 + i * 160,
                            '<span class="iv-bignum">' + p.n + "</span>" +
                            '<span class="iv-card"><img src="' + p.img + '" alt="" loading="lazy"><span><strong>' + p.t + "</strong><em>" + p.s + "</em></span></span>",
                            "button", "iv-pick\" data-intro-track=\"4")
                    ).join("") + "</div>" +
                "</div>" +
            "</div></section>",

            // 4 — EVERIAL
            '<section class="iv-sec iv-right" data-scene="4"><div class="iv-pin">' +
                '<span class="iv-bgword" data-shift="-1">FEAT.</span>' +
                '<div class="iv-col">' +
                    R(0, idx(4) + "Featuring", "p", "iv-kicker") +
                    R(100, "Everial", "h2", "iv-title") +
                    R(200, "Technicien d'exploitation informatique : supervision des flux, debugging et maintenance de la chaîne de dématérialisation.", "p", "iv-text") +
                    '<div class="iv-stats">' +
                        R(300, '<b data-count="51">0</b><small>M€</small><em>de chiffre d\'affaires</em>') +
                        R(400, '<b data-count="600">0</b><em>collaborateurs</em>') +
                        R(500, '<b data-count="12">0</b><em>sites en France</em>') +
                        R(600, '<b data-count="4">0</b><em>filiales à l\'international</em>') +
                    "</div>" +
                "</div>" +
            "</div></section>",

            // 5 — VEILLE
            '<section class="iv-sec iv-left" data-scene="5"><div class="iv-pin">' +
                '<span class="iv-bgword" data-shift="1">VEILLE</span>' +
                '<div class="iv-col">' +
                    R(0, idx(5) + "En écoute", "p", "iv-kicker") +
                    R(100, "Ma veille<br>techno.", "h2", "iv-title") +
                    '<ol class="iv-tracks">' +
                        R(250, '<span class="n">N°1</span><span><strong>L\'introduction en bourse des géants de l\'IA</strong><em>OpenAI, Anthropic et les budgets IT</em></span>', "li") +
                        R(380, '<span class="n">N°2</span><span><strong>TrapDoor &amp; la supply chain</strong><em>quand les assistants de code deviennent une cible</em></span>', "li") +
                        R(510, '<span class="n">N°3</span><span><strong>Capifrance &amp; le Zero Trust</strong><em>Security by Design dès la première ligne</em></span>', "li") +
                    "</ol>" +
                "</div>" +
            "</div></section>",

            // 6 — FIN
            '<section class="iv-sec iv-end" data-scene="6"><div class="iv-pin">' +
                '<div class="iv-center">' +
                    R(0, "La suite de l'album", "p", "iv-kicker") +
                    '<h2 class="iv-giant small"><span class="iv-line" data-shift="-1">À SUIVRE</span></h2>' +
                    R(200, "Toutes les sections, les documents et les détails vous attendent dans l'album complet.", "p", "iv-lead") +
                    R(350, '<button class="iv-btn" data-intro-enter>' + icon("play", 20) + "Écouter l'album</button>" +
                        '<a class="iv-btn ghost" href="Images/Mon_CV.pdf" target="_blank" rel="noopener">' + icon("download", 18) + "Mon CV</a>", "div", "iv-actions") +
                "</div>" +
            "</div></section>"
        ].join("");
    }

    function shellHTML() {
        return '<div class="iv-bg" aria-hidden="true"><i class="iv-glow"></i><i class="iv-grain"></i></div>' +
            '<div class="iv-vinyl" aria-hidden="true"><div class="iv-disc"><span class="iv-label"><img alt=""></span><i class="iv-hole"></i></div></div>' +
            '<header class="iv-top">' +
                '<span class="iv-brand"><img src="' + ALBUM.cover + '" alt=""><span>' + ARTIST.name + "</span></span>" +
                '<button class="iv-skip" data-intro-enter>Passer l\'intro ' + icon("chevRight", 18) + "</button>" +
            "</header>" +
            '<div class="iv-scroll" tabindex="-1">' + sectionsHTML() + "</div>" +
            '<footer class="iv-np">' +
                '<img class="iv-np-cover" alt="">' +
                '<span class="iv-np-text"><strong></strong><em>' + ARTIST.name + "</em></span>" +
                '<span class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span>' +
                '<span class="iv-np-time">0:00</span>' +
                '<span class="iv-np-bar"><i></i></span>' +
            "</footer>";
    }

    /* ---------- Moteur ---------- */
    let root, scroller, vinyl, disc, labelImg, npCover, npTitle, npTime, npBar, secs = [], lines = [], shifts = [], marquees = [];
    let raf = 0, lastIdx = -1, open = false, startTs = 0;
    const totalSec = TRACKS.reduce((a, x) => a + toSec(x.duration), 0);

    const hexRgb = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
    const lerp = (a, b, k) => a + (b - a) * k;
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
    const ease = (k) => k * k * (3 - 2 * k);

    function build() {
        root = document.createElement("div");
        root.className = "intro";
        root.id = "intro";
        root.setAttribute("role", "dialog");
        root.setAttribute("aria-label", "Introduction du portfolio");
        root.innerHTML = shellHTML();
        document.body.appendChild(root);

        scroller = root.querySelector(".iv-scroll");
        vinyl = root.querySelector(".iv-vinyl");
        disc = root.querySelector(".iv-disc");
        labelImg = root.querySelector(".iv-label img");
        npCover = root.querySelector(".iv-np-cover");
        npTitle = root.querySelector(".iv-np-text strong");
        npTime = root.querySelector(".iv-np-time");
        npBar = root.querySelector(".iv-np-bar i");
        secs = Array.prototype.slice.call(root.querySelectorAll(".iv-sec"));
        shifts = Array.prototype.slice.call(root.querySelectorAll("[data-shift]"));
        marquees = Array.prototype.slice.call(root.querySelectorAll(".iv-marquee"));

        scroller.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        root.addEventListener("click", onClick);
        root.addEventListener("keydown", function (e) { if (e.key === "Escape") enter(false); });

        // Apparition des éléments
        const io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (!en.isIntersecting) return;
                en.target.classList.add("in");
                countUp(en.target);
            });
        }, { root: scroller, threshold: 0.35 });
        secs.forEach((s) => io.observe(s));
    }

    function countUp(sec) {
        sec.querySelectorAll("[data-count]").forEach(function (b) {
            if (b.dataset.done) return;
            b.dataset.done = "1";
            const target = parseInt(b.dataset.count, 10);
            if (reduceMotion) { b.textContent = target; return; }
            const t0 = performance.now();
            (function step(now) {
                const k = clamp((now - t0) / 1400, 0, 1);
                b.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
                if (k < 1) requestAnimationFrame(step);
            })(t0);
        });
    }

    function schedule() { if (!raf) raf = requestAnimationFrame(frame); }

    function frame(ts) {
        raf = 0;
        if (!open) return;
        const vh = scroller.clientHeight;
        const top = scroller.scrollTop;
        const mid = top + vh / 2;
        const mobile = window.innerWidth <= 820;

        // Position continue dans la suite de scènes (pos = i au centre de la scène i)
        let pos = 0;
        secs.forEach(function (s, i) {
            const local = (mid - s.offsetTop) / s.offsetHeight;
            s.style.setProperty("--p", clamp(local, 0, 1).toFixed(4));
            if (local >= 0) pos = i + clamp(local, 0, 1) - 0.5;
        });
        pos = clamp(pos, 0, SCENES.length - 1);
        const a = Math.floor(pos), b = Math.min(SCENES.length - 1, a + 1), k = ease(pos - a);
        const A = SCENES[a], B = SCENES[b];
        const sa = mobile ? A.mob : A.desk, sb = mobile ? B.mob : B.desk;

        // Couleur de fond
        const ca = hexRgb(A.color), cb = hexRgb(B.color);
        root.style.setProperty("--sc", "rgb(" + ca.map((c, i) => Math.round(lerp(c, cb[i], k))).join(",") + ")");

        // Vinyle
        const spin = reduceMotion ? 0 : ((ts - startTs) / 1000) * 24 + top * 0.12;
        vinyl.style.transform = "translate(-50%,-50%) translate(" + lerp(sa.x, sb.x, k) + "vw," + lerp(sa.y, sb.y, k) + "vh) scale(" + lerp(sa.s, sb.s, k).toFixed(3) + ")";
        vinyl.style.opacity = lerp(sa.o, sb.o, k).toFixed(3);
        disc.style.transform = "rotate(" + spin.toFixed(1) + "deg)";

        // Scène active : étiquette, mini-lecteur, compteur
        const active = Math.round(pos);
        if (active !== lastIdx) {
            lastIdx = active;
            const sc = SCENES[active];
            vinyl.classList.remove("swap");
            void vinyl.offsetWidth;
            vinyl.classList.add("swap");
            labelImg.src = sc.label;
            npCover.src = sc.label;
            npTitle.textContent = sc.name;
            root.dataset.scene = sc.key;
        }

        // Progression globale (façon barre de lecture)
        const max = Math.max(1, scroller.scrollHeight - vh);
        const prog = clamp(top / max, 0, 1);
        npBar.style.transform = "scaleX(" + prog.toFixed(4) + ")";
        npTime.textContent = fmt(prog * totalSec) + " / " + fmt(totalSec);

        // Parallaxe des grands mots et des bandeaux
        if (!reduceMotion) {
            shifts.forEach(function (el) {
                const p = parseFloat(el.closest(".iv-sec").style.getPropertyValue("--p")) || 0;
                el.style.transform = "translateX(" + ((p - 0.5) * 18 * parseFloat(el.dataset.shift)).toFixed(2) + "vw)";
            });
            marquees.forEach(function (el) {
                const p = parseFloat(el.closest(".iv-sec").style.getPropertyValue("--p")) || 0;
                el.firstChild.style.transform = "translateX(" + (-25 + (p - 0.5) * 40 * parseFloat(el.dataset.dir)).toFixed(2) + "%)";
            });
        }

        if (!reduceMotion) schedule(); // le vinyle continue de tourner
    }

    function onClick(e) {
        const enterBtn = e.target.closest("[data-intro-enter]");
        if (enterBtn) { enter(enterBtn.classList.contains("iv-btn")); return; }
        const pick = e.target.closest("[data-intro-track]");
        if (pick) { enter(false); selectTrack(parseInt(pick.dataset.introTrack, 10), "album"); }
    }

    /* ---------- Ouvrir / fermer ---------- */
    function show() {
        if (!root) build();
        open = true;
        root.classList.remove("leaving", "gone");
        document.body.classList.add("intro-open");
        scroller.scrollTop = 0;
        lastIdx = -1;
        startTs = performance.now();
        requestAnimationFrame(function () { root.classList.add("ready"); scroller.focus({ preventScroll: true }); });
        schedule();
    }

    function enter(play) {
        if (!open) return;
        open = false;
        root.classList.add("leaving");
        document.body.classList.remove("intro-open");
        setTimeout(function () { root.classList.add("gone"); root.classList.remove("ready"); }, 800);
        if (play) {
            go("album");
            if (!state.playing) playCtx("album");
        }
    }

    // Relancer l'intro depuis l'app (bibliothèque, pied de page…)
    document.addEventListener("click", function (e) {
        const el = e.target.closest("[data-intro]");
        if (!el) return;
        e.preventDefault();
        e.stopPropagation();
        show();
    }, true);

    // Premier passage de la session : l'intro remplace l'écran de démarrage
    let seen = false;
    try { seen = sessionStorage.getItem("pf_intro") === "1"; sessionStorage.setItem("pf_intro", "1"); } catch (err) { /* ignore */ }
    if (!seen && !/^#\/(?!home)./.test(location.hash)) {
        const splash = document.getElementById("splash");
        if (splash) splash.style.display = "none"; // app.js le retire lui-même ensuite
        show();
    }

    window.Intro = { show: show, enter: enter };
})();
