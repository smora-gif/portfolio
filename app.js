/* =====================================================================
   PORTFOLIO — Sebastian Mora · édition « album »
   ===================================================================== */

/* ---------------------------------------------------------------------
   1. ICÔNES
--------------------------------------------------------------------- */
const ICONS = {
    play: '<path d="M8 5.14v13.72a1 1 0 001.52.85l11.2-6.86a1 1 0 000-1.7L9.52 4.29A1 1 0 008 5.14z"/>',
    pause: '<path d="M6 4.5h4v15H6zM14 4.5h4v15h-4z"/>',
    prev: '<path d="M6 5h2v14H6zM9.5 12L19 5.5v13z"/>',
    next: '<path d="M16 5h2v14h-2zM14.5 12L5 18.5v-13z"/>',
    shuffle: '<path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>',
    repeat: '<path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>',
    repeatOne: '<path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"/>',
    heart: '<path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>',
    heartFill: '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>',
    home: '<path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>',
    homeFill: '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>',
    search: '<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>',
    library: '<path d="M4 3h2v18H4zM9 3h2v18H9zM14.2 3.6l1.9-.6 5.4 17.4-1.9.6z"/>',
    plus: '<path d="M11.25 12.75V19h1.5v-6.25H19v-1.5h-6.25V5h-1.5v6.25H5v1.5h6.25z"/>',
    check: '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>',
    dots: '<path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>',
    clock: '<path d="M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19zM1 12a11 11 0 1122 0 11 11 0 01-22 0zm11.75-5.5a.75.75 0 00-1.5 0V12c0 .27.14.52.37.65l3.75 2.25a.75.75 0 10.77-1.29l-3.39-2.03V6.5z"/>',
    list: '<path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"/>',
    chevLeft: '<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>',
    chevRight: '<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>',
    chevDown: '<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>',
    chevUp: '<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>',
    close: '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>',
    vol3: '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>',
    vol1: '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM3 9v6h4l5 5V4L7 9H3z"/>',
    vol0: '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>',
    np: '<path fill-rule="evenodd" d="M3 4h18a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1zm1 2v12h9V6H4zm11 0v12h5V6h-5z"/>',
    verified: '<path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"/>',
    download: '<path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"/>',
    external: '<path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>',
    link: '<path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>',
    user: '<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>',
    speaker: '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>',
    mic: '<path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>',
    note: '<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>',
    sparkle: '<path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"/>',
    info: '<path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>'
};

function icon(name, size) {
    const s = size || 24;
    return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="currentColor" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
}

/* ---------------------------------------------------------------------
   2. DONNÉES
--------------------------------------------------------------------- */
const ARTIST = { name: "Sebastian Mora", img: "Images/PhotoArtist.jpeg" };
const ALBUM = { title: "PORTFOLIO", cover: "Images/Yodebebe.png", year: 2026, color: "#4b3a78" };

const extLink = (href) =>
    '<a class="btn-green" href="' + href + '" target="_blank" rel="noopener">' + icon("external", 16) + "LIRE L'ARTICLE COMPLÉMENTAIRE</a>";
const pdfLink = (href) =>
    '<a class="btn-green" href="' + href + '" target="_blank" rel="noopener">' + icon("download", 16) + "OUVRIR LE DOCUMENT COMPLET (PDF)</a>";
const arrow = '<svg class="project-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>';

function project(title, desc, photos) {
    return '<div class="project-block">' +
        '<button class="project-header-click" type="button"><span class="project-block-title">' + title + '</span>' + arrow + '</button>' +
        '<div class="project-body"><div class="project-inner">' +
            (desc ? '<div class="project-desc">' + desc + '</div>' : '') +
            '<div class="project-gallery">' + photos.map(function (p) {
                return '<figure class="project-photo-item"><img src="' + p.src + '" alt="' + p.alt + '" loading="lazy" onerror="this.parentElement.classList.add(\'missing\')">' +
                    (p.cap ? '<figcaption>' + p.cap + '</figcaption>' : '') + '</figure>';
            }).join('') + '</div>' +
        '</div></div>' +
    '</div>';
}

const TRACKS = [
    {
        id: 1, title: "PARCOURS", sub: "Mon expérience, formations, qui suis-je?", duration: "3:57",
        art: "Images/PhotoArtist.jpeg", hero: null, color: "#8d67ab",
        content: `
            <p><strong>Présentation</strong><br>Je m'appelle Sebastian Mora, j'ai 24 ans et je suis actuellement étudiant en BTS SIO option SLAM (Solution Logicielle et application Métiers) au sein de l'école Nexa Digital School.</p>
            <p><strong>Mon Parcours &amp; Réorientation</strong><br>Après un Baccalauréat SES (option Mathématiques), j'ai validé deux années d'études en psychologie. Ce premier cursus universitaire m'a permis de développer une grande rigueur, un esprit d'analyse affûté, ainsi qu'une forte sensibilité à la compréhension des besoins utilisateurs (UX) — des qualités qui s'avèrent aujourd'hui être de véritables atouts dans l'informatique.</p>
            <p>Souhaitant m'orienter vers un domaine plus technique et concret, j'ai choisi de me réorienter avec passion vers le développement d'applications.</p>
            <p><strong>Mon Projet Professionnel</strong><br>Ce qui m'anime particulièrement dans le développement de solutions logicielles, c'est la résolution de problèmes complexes et le fait de concevoir des outils concrets et fonctionnels. C'est un domaine stimulant dans lequel je me projette pleinement.</p>`
    },
    {
        id: 2, title: "ENTREPRISE", sub: "Alternant chez Everial", duration: "3:44",
        art: "Images/entreprise.png", hero: "Images/entreprise.png", color: "#1e6f8c",
        content: `
            <p><strong>Fiche d'identité de l'entreprise</strong></p>
            <ul class="bullets">
                <li><strong>Nom :</strong> EVERIAL</li>
                <li><strong>Siège social :</strong> Rillieux-la-Pape (près de Lyon)</li>
            </ul>
            <div class="stats">
                <div class="stat"><span class="stat-num" data-count="51">51</span><span class="stat-unit">M€</span><span class="stat-label">Chiffre d'affaires : 51 Millions d'euros</span></div>
                <div class="stat"><span class="stat-num" data-count="600">600</span><span class="stat-label">Taille : 600 collaborateurs</span></div>
                <div class="stat"><span class="stat-num" data-count="12">12</span><span class="stat-label">sites en France</span></div>
                <div class="stat"><span class="stat-num" data-count="4">4</span><span class="stat-label">filiales à l'international</span></div>
            </div>
            <ul class="bullets">
                <li><strong>Présence :</strong> 12 sites en France et 4 filiales à l'international (Canada, Suisse, Maurice, Monaco)</li>
            </ul>
            <hr class="divider">
            <p><strong>Historique et Évolution de la structure</strong></p>
            <p>Historiquement centrée sur l'archivage physique de documents d'entreprises, Everial a opéré une transition majeure vers le digital.</p>
            <p><strong>La Chaîne de Dématérialisation :</strong><br>Aujourd'hui, l'entreprise s'appuie sur une chaîne de dématérialisation complète et automatisée, couvrant tout le processus depuis la réception du document physique ou numérique jusqu'à sa livraison finale au client au format digital.</p>
            <p><strong>Technologies utilisées :</strong><br>Pour optimiser ces flux, Everial intègre des outils de reconnaissance automatique (LAD/RAD/OCR) capables d'extraire intelligemment les données textuelles, comme les champs d'une facture (montants, dates, fournisseurs).</p>
            <p><strong>Contrôle Qualité :</strong><br>Afin de garantir une fiabilité maximale, une équipe dédiée à la saisie et à la vérification valide et corrige manuellement les champs insérés par les outils automatiques avant l'envoi final.</p>
            <p><strong>Secteur d'activité et Logiciels Propriétaires</strong></p>
            <p>EVERIAL est un acteur majeur de la gestion documentaire, de l'archivage et de la dématérialisation. Éditeur de logiciels (EVERIAL Software), l'entreprise conçoit ses propres solutions métiers "phygitales" :</p>
            <ul class="bullets dash">
                <li><em>Wizidee</em> : Dédié à la capture intelligente de documents.</li>
                <li><em>Enoxa</em> : Solution pour la Gestion Électronique de Documents (GED).</li>
            </ul>
            <hr class="divider">
            <p><strong>Mon contexte d'alternance et fonctions exercées</strong></p>
            <p>Dans le cadre de mon parcours en BTS SIO option SLAM, j'exerce les fonctions de Technicien d'exploitation informatique au sein de la direction technique d'Everial. Mon rôle est d'assurer le bon fonctionnement et la continuité des chaînes de dématérialisation et de traitement de données (flux de documents physiques numérisés, e-mails, pièces justificatives).</p>
            <p><strong>Mes Missions principales :</strong></p>
            <ul class="bullets missions">
                <li><strong>Supervision et Exploitation :</strong> Surveillance quotidienne des flux et des traitements documentaires automatisés. Identification immédiate des anomalies ou des blocages dans la chaîne de dématérialisation (rejets de lecture automatique, erreurs d'extraction de données via l'IA, problèmes d'interopérabilité).</li>
                <li><strong>Analyse d'incidents (Debugging) :</strong> Diagnostic approfondi des pannes. Pour cela, je dispose des accès nécessaires pour analyser le code source des scripts d'exploitation et des applications logicielles d'Everial (comme les briques liées à la GED ou à la capture de documents).</li>
                <li><strong>Maintenance corrective et Évolution :</strong> Résolution des incidents par la modification et l'optimisation du code existant. Je corrige les bugs logiciels ou j'adapte les scripts pour fluidifier le traitement des données et éviter la récurrence des erreurs.</li>
            </ul>`
    },
    {
        id: 3, title: "COMPÉTENCES", sub: "Tech stack, langages et outils maîtrisés", duration: "3:36",
        art: "Images/ImageCompetences.png", hero: "Images/ImageCompetences.png", color: "#b0492e",
        content: `
            <div class="skill-group"><strong>Développement Web :</strong><div class="skill-chips"><span>HTML</span><span>CSS</span></div></div>
            <div class="skill-group"><strong>Programmation :</strong><div class="skill-chips"><span>C#</span><span>C++</span></div></div>
            <div class="skill-group"><strong>Bases de données :</strong><div class="skill-chips"><span>MySQL</span></div></div>
            <div class="skill-group"><strong>Outils &amp; Méthodes :</strong><div class="skill-chips"><span>Git</span><span>VS Code</span><span>Linux</span><span>N8N</span></div></div>`
    },
    {
        id: 4, title: "PROJETS", sub: "Projets d'école (Kuzco, Kahoot, Tier List) et Everial", duration: "3:33",
        art: "Images/ImageProjets.png", hero: "Images/ImageProjets.png", color: "#2d7a4a", explicit: true,
        content:
            '<p><strong>Projets réalisés à l\'École (BTS SIO SLAM)</strong><br>Découvrez mes réalisations interactives développées au cours de ma formation :</p>' +
            '<div class="projects-container">' +
            project("KUZCO (Système de filtre lama)",
                "<strong>Description :</strong> Projet de développement web basé sur les technologies HTML5, CSS3 et JavaScript. L'objectif principal était de concevoir une application capable de répliquer de manière dynamique un filtre visuel interactif (type Snapchat) appliquant des éléments de lama sur un flux d'image.<br>" +
                "<strong>Compétences clés :</strong> Intégration de maquettes, gestion du positionnement absolu/relatif pour superposer les éléments graphiques et manipulation dynamique du DOM en JavaScript.",
                [{ src: "Images/KUZCO.png", alt: "Kuzco 1" }]) +
            project("KAHOOT (Application dynamique de Quiz)",
                "<strong>Description :</strong> Développement éducatif d'une application de type \"Kahoot\" en C# (Windows Forms ou WPF) afin d'appréhender les concepts fondamentaux de la programmation orientée objet (POO) et la création d'interfaces graphiques. Conception et manipulation des composants graphiques (TextBox, Labels, Buttons).<br>" +
                "<strong>Livrables :</strong> Code source C#<br>" +
                "<strong>Compétences clés acquises :</strong> Manipulation des variables, gestion de l'environnement graphique (TextBox, Labels, Buttons).",
                [{ src: "Images/Kahoot.png", alt: "Kahoot 1" }, { src: "Images/Kahoot2.png", alt: "Kahoot 2" }]) +
            project("TIER LIST (Générateur personnalisé)",
                "<strong>Description :</strong> Conception et développement front-end d'une application web de type \"Tier List\" permettant la classification visuelle d'éléments par glisser-déposer (Drag and Drop).<br>" +
                "<strong>Compétences clés acquises :</strong> Fonctionnalités de glisser-déposer (Drag and Drop), structuration et alignement CSS avec Flexbox.",
                [{ src: "Images/TierList.png", alt: "Tier List 1" }]) +
            project("EVERIAL (Migration &amp; Écrans Xbound)", "",
                [{ src: "Images/everial1.png", alt: "Everial 1", cap: "Montée d'une nouvelle version d'application" },
                 { src: "Images/everial2.png", alt: "Everial 2", cap: "Écran pour l'équipe de saisie" }]) +
            '</div>'
    },
    {
        id: 5, title: "VEILLE TECHNO", sub: "Sujets d'actualité, articles et innovations", duration: "3:20",
        art: "Images/blockchain.png", hero: "Images/blockchain.png", color: "#283ea8",
        content: `
            <article class="veille">
                <span class="veille-tag">Sujet N°1</span>
                <h4>L'introduction en bourse des géants de l'IA</h4>
                <p>Le passage d'une ère d'expérimentation quasi-scientifique à celle d'une logique de marché traditionnelle dictée par Wall Street. Selon moi, l'introduction en bourse d'OpenAI et d'Anthropic représente un double défi pour les directions informatiques (DSI). D'un côté, la pression des actionnaires va inévitablement rationaliser l'offre à travers des hausses de prix et des modèles contractuels plus rigides. De l'autre, cette maturité forcée offre une opportunité majeure : elle va pousser les entreprises à structurer leur gouvernance de l'IA.</p>
                ${extLink("https://www.lemondeinformatique.fr/actualites/lire-les-ipo-d-openai-et-anthropic-une-mauvaise-nouvelle-pour-les-budgets-it-100414.html")}
            </article>
            <article class="veille">
                <span class="veille-tag">Sujet N°2</span>
                <h4>Campagne TrapDoor et sécurité de la Supply Chain</h4>
                <p>La campagne TrapDoor illustre une évolution inquiétante et majeure des attaques sur la supply chain (chaîne d'approvisionnement logicielle). Ce que je trouve particulièrement marquant, c'est que les cybercriminels ne se contentent plus de dissimuler du code malveillant ; ils conçoivent désormais une ingénierie sociale technique en manipulant les fichiers de configuration des assistants de codage IA.</p>
                <p>En militarisant (ou en détournant) les outils mêmes censés améliorer la productivité des développeurs, les attaquants ouvrent un nouveau front de vulnérabilité. Cela montre à quel point la sécurité des environnements devient de plus en plus complexe à mesure que les technologies évoluent.</p>
                ${extLink("https://www.cryptotimes.io/2026/05/25/trapdoor-malware-hits-npm-pypi-crates-io-steals-crypto-wallets-ssh-keys/")}
            </article>
            <article class="veille">
                <span class="veille-tag">Sujet N°3</span>
                <h4>Fuite de données Capifrance &amp; Architecture Zero Trust</h4>
                <p>Le piratage de Capifrance rappelle une réalité brutale en développement : la sécurité d'une plateforme est aussi forte que son maillon le plus faible. Ici, l'attaquant n'a pas exploité une faille de code complexe, mais a simplement usurpé un compte légitime.</p>
                <p>En tant que développeur, cela renforce ma conviction que la protection des données ne s'arrête pas au chiffrement des bases de données. Nous devons impérativement intégrer des architectures "Zero Trust", généraliser l'authentification multifacteur (MFA) et mettre en place des systèmes de détection d'anomalies comportementales (comme le téléchargement anormal de fichiers JSON volumineux). La récurrence de ces attaques dans le secteur immobilier prouve que la sécurité doit être pensée dès la première ligne de code (Security by Design) et non comme une option secondaire.</p>
                ${extLink("https://www.clubic.com/actualite-616375-le-reseau-de-conseillers-immobiliers-capifrance-victime-d-une-cyberattaque-pres-de-800-000-personnes-concernees.html")}
            </article>`
    },
    {
        id: 6, title: "TABLEAU DE SYNTHÈSE", sub: "Document officiel E5 - Réalisations professionnelles", duration: "3:05",
        art: "Images/tableau-e5.png", hero: null, color: "#6b6b6b",
        content: `
            <p><strong>Aperçu du document</strong></p>
            <img class="doc-preview" src="Images/tableau-e5.png" alt="Aperçu Tableau de Synthèse">
            ${pdfLink("Images/MORA Sebastian - E5---------.pdf")}`
    },
    {
        id: 7, title: "CV", sub: "Mon Curriculum Vitae", duration: "1:45",
        art: "Images/ImageCV.png", hero: "Images/ImageCV.png", color: "#a8326e",
        content: `
            <p><strong>Aperçu du document</strong></p>
            <img class="doc-preview" src="Images/ImageCV.png" alt="Aperçu CV">
            ${pdfLink("Images/Mon_CV.pdf")}`
    }
];

const OTHER_ARTISTS = [
    { name: "The Weeknd", img: "Images/The-WeekndArtist.png" },
    { name: "Daft Punk", img: "Images/DaftPunkArtist.png" },
    { name: "Bad Bunny", img: "Images/BadBunnyArtist.png" }
];
const OTHER_ALBUMS = [
    { title: "Random Access Memories", artist: "Daft Punk", img: "Images/RandomAccessMemories.png" },
    { title: "Starboy", artist: "The Weeknd", img: "Images/Starboy.png" }
];

const byId = (id) => TRACKS.find((t) => t.id === id);
const toSec = (d) => { const p = d.split(":"); return parseInt(p[0], 10) * 60 + parseInt(p[1], 10); };
const fmt = (s) => { s = Math.max(0, Math.floor(s)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
const plain = (html) => html.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
const norm = (s) => s.normalize("NFD").replace(new RegExp("[" + String.fromCharCode(0x300) + "-" + String.fromCharCode(0x36f) + "]", "g"), "").toLowerCase();
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* Vitesse de lecture simulée (1 = temps réel). Un titre de 3 min défile en ~1 min 30. */
const PLAYBACK_SPEED = 2;

/* ---------------------------------------------------------------------
   3. ÉTAT + STOCKAGE
--------------------------------------------------------------------- */
const store = {
    get(k, d) { try { const v = localStorage.getItem("pf_" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("pf_" + k, JSON.stringify(v)); } catch (e) { /* stockage indisponible */ } }
};

const state = {
    route: "home",
    currentId: null,
    queueName: "album",
    playing: false,
    elapsed: 0,
    shuffle: store.get("shuffle", false),
    repeat: store.get("repeat", 0), // 0 = off, 1 = tout, 2 = un titre
    volume: store.get("volume", 0.5),
    lyr: null,
    muted: false,
    liked: new Set(store.get("liked", [])),
    following: store.get("following", false),
    recent: store.get("recent", []),
    npOpen: false,
    libFilter: null,
    history: []
};

function queue() {
    if (state.queueName === "liked") {
        const ids = TRACKS.filter((t) => state.liked.has(t.id)).map((t) => t.id);
        return ids.length ? ids : TRACKS.map((t) => t.id);
    }
    return TRACKS.map((t) => t.id);
}

/* ---------------------------------------------------------------------
   4. RACCOURCIS DOM
--------------------------------------------------------------------- */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));

const main = $("#main");
const view = $("#view");
const npPanel = $("#np");

/* ---------------------------------------------------------------------
   5. COULEUR DOMINANTE (extraction depuis les pochettes)
--------------------------------------------------------------------- */
const colorCache = {
    /* Couleurs pré-calculées : le site garde ses couleurs même ouvert en double-clic (file://) */
    "Images/Yodebebe.png": "hsl(203 32% 30%)",
    "Images/PhotoArtist.jpeg": "hsl(23 27% 42%)",
    "Images/entreprise.png": "hsl(204 40% 42%)",
    "Images/ImageCompetences.png": "hsl(119 62% 30%)",
    "Images/ImageProjets.png": "hsl(336 62% 30%)",
    "Images/blockchain.png": "hsl(212 37% 35%)",
    "Images/tableau-e5.png": "hsl(343 62% 42%)",
    "Images/ImageCV.png": "hsl(179 36% 42%)",
    "Images/The-WeekndArtist.png": "hsl(89 11% 42%)",
    "Images/DaftPunkArtist.png": "hsl(42 52% 42%)",
    "Images/BadBunnyArtist.png": "hsl(11 51% 42%)",
    "Images/RandomAccessMemories.png": "hsl(47 16% 42%)",
    "Images/Starboy.png": "hsl(356 62% 42%)"
};

function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
        else if (max === g) h = (b - r) / d + 2;
        else h = (r - g) / d + 4;
        h *= 60;
    }
    return [h, s, l];
}

function extractColor(src, fallback) {
    return new Promise(function (resolve) {
        if (!src) return resolve(fallback);
        if (colorCache[src]) return resolve(colorCache[src]);
        const img = new Image();
        img.onload = function () {
            try {
                const size = 40;
                const c = document.createElement("canvas");
                c.width = c.height = size;
                const ctx = c.getContext("2d", { willReadFrequently: true });
                ctx.drawImage(img, 0, 0, size, size);
                const d = ctx.getImageData(0, 0, size, size).data;
                let r = 0, g = 0, b = 0, w = 0;
                for (let i = 0; i < d.length; i += 4) {
                    if (d[i + 3] < 125) continue;
                    const hsl = rgbToHsl(d[i], d[i + 1], d[i + 2]);
                    const lumOk = hsl[2] > 0.12 && hsl[2] < 0.88 ? 1 : 0.08;
                    const weight = (0.05 + hsl[1] * hsl[1] * 3) * lumOk;
                    r += d[i] * weight; g += d[i + 1] * weight; b += d[i + 2] * weight; w += weight;
                }
                if (!w) return resolve(fallback);
                const hsl = rgbToHsl(r / w, g / w, b / w);
                const col = "hsl(" + Math.round(hsl[0]) + " " + Math.round(Math.min(hsl[1], 0.62) * 100) + "% " + Math.round(Math.min(Math.max(hsl[2], 0.3), 0.42) * 100) + "%)";
                colorCache[src] = col;
                resolve(col);
            } catch (e) {
                resolve(fallback); // ex. ouverture en file:// (canvas « tainted »)
            }
        };
        img.onerror = function () { resolve(fallback); };
        img.src = src;
    });
}

let accentToken = 0;
function setAccent(src, fallback) {
    const token = ++accentToken;
    main.style.setProperty("--view-color", fallback);
    extractColor(src, fallback).then(function (c) {
        if (token === accentToken) main.style.setProperty("--view-color", c);
    });
}

/* ---------------------------------------------------------------------
   6. COMPOSANTS HTML
--------------------------------------------------------------------- */
const eqHTML = '<span class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span>';

function trackRow(t, i, opts) {
    opts = opts || {};
    return '<div class="track-row" data-id="' + t.id + '" data-queue="' + (opts.queue || "album") + '" role="button" tabindex="0" style="--i:' + i + '">' +
        '<div class="col-num"><span class="num">' + (i + 1) + '</span>' + eqHTML +
            '<span class="row-play">' + icon("play", 16) + '</span><span class="row-pause">' + icon("pause", 16) + '</span></div>' +
        '<div class="col-title">' +
            (opts.thumb ? '<img class="row-thumb" src="' + t.art + '" alt="" loading="lazy">' : '') +
            '<div class="col-title-text"><div class="main-text">' + (t.explicit ? '<span class="explicit-badge" title="Explicite">E</span>' : '') + t.title + '</div>' +
            '<div class="sub-text">' + t.sub + '</div></div>' +
        '</div>' +
        '<div class="col-like"><button class="icon-btn like-btn" data-like="' + t.id + '" aria-label="Ajouter aux titres likés"></button></div>' +
        '<div class="col-duration">' + t.duration + '</div>' +
        '<div class="col-more"><button class="icon-btn" data-track-menu="' + t.id + '" aria-label="Plus d\'options pour ' + esc(plain(t.title)) + '">' + icon("dots", 18) + '</button></div>' +
    '</div>';
}

function tracklistHeader() {
    return '<div class="tracklist-header"><div class="col-num">#</div><div class="col-title">Titre</div><div class="col-like"></div>' +
        '<div class="col-duration">' + icon("clock", 16) + '</div><div class="col-more"></div></div>';
}

function card(o, i) {
    // o: {title, sub, img, circle, route, playCtx, unavailable, openTrack}
    const attrs = o.route ? ' data-route="' + o.route + '"' : o.openTrack ? ' data-open-track="' + o.openTrack + '"' : ' data-unavailable="' + esc(o.title) + '"';
    const play = '<button class="play-btn card-play" ' + (o.playCtx ? 'data-play-ctx="' + o.playCtx + '"' : 'data-unavailable="' + esc(o.title) + '"') + ' aria-label="Lire ' + esc(o.title) + '">' + icon("play") + '</button>';
    return '<div class="card' + (o.circle ? ' circle' : '') + '"' + attrs + ' role="link" tabindex="0" style="--i:' + (i || 0) + '">' +
        '<div class="card-img"><img src="' + o.img + '" alt="" loading="lazy">' + play + '</div>' +
        '<div class="card-title">' + o.title + '</div>' +
        '<div class="card-sub">' + o.sub + '</div>' +
    '</div>';
}

function shelf(title, cards, more) {
    return '<section class="shelf"><header class="shelf-head"><h2>' + title + '</h2>' + (more || '') + '</header><div class="shelf-row">' + cards + '</div></section>';
}

function albumStats() {
    const total = TRACKS.reduce((a, t) => a + toSec(t.duration), 0);
    return TRACKS.length + " titres, " + Math.floor(total / 60) + " min " + String(total % 60).padStart(2, "0") + " s";
}

/* ---------------------------------------------------------------------
   7. VUES
--------------------------------------------------------------------- */
function greeting() {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) return "Bonjour";
    if (h >= 12 && h < 18) return "Bon après-midi";
    return "Bonsoir";
}

const QUICK = [
    { title: "PORTFOLIO", img: ALBUM.cover, route: "album", playCtx: "album", color: ALBUM.color },
    { title: "Sebastian Mora", img: ARTIST.img, route: "artist", playCtx: "album", color: "#7a5a3c", circle: true },
    { title: "Titres likés", liked: true, route: "liked", playCtx: "liked", color: "#4a3ab8" },
    { track: 1 }, { track: 4 }, { track: 3 }, { track: 2 }, { track: 7 }
];

const VIEWS = {
    home: function () {
        const quick = QUICK.map(function (q, i) {
            const t = q.track ? byId(q.track) : null;
            const title = t ? t.title : q.title;
            const img = t ? t.art : q.img;
            const color = t ? t.color : q.color;
            const ctx = t ? "track:" + t.id : q.playCtx;
            const attr = t ? 'data-open-track="' + t.id + '"' : 'data-route="' + q.route + '"';
            const thumb = q.liked ? '<span class="liked-thumb">' + icon("heartFill", 20) + '</span>' : '<img src="' + img + '" alt=""' + (q.circle ? ' class="circle"' : '') + '>';
            return '<div class="quick" ' + attr + ' data-color="' + color + '" data-img="' + (q.liked ? '' : img) + '" role="link" tabindex="0" style="--i:' + i + '">' +
                thumb + '<span class="quick-title">' + title + '</span>' +
                '<button class="play-btn quick-play" data-play-ctx="' + ctx + '" aria-label="Lire ' + esc(title) + '">' + icon("play", 20) + '</button>' +
                '<span class="quick-eq">' + eqHTML + '</span>' +
            '</div>';
        }).join("");

        const artists = [{ title: ARTIST.name, sub: "Artiste", img: ARTIST.img, circle: true, route: "artist", playCtx: "album" }]
            .concat(OTHER_ARTISTS.map((a) => ({ title: a.name, sub: "Artiste", img: a.img, circle: true })))
            .map(card).join("");

        const albums = [{ title: ALBUM.title, sub: ARTIST.name, img: ALBUM.cover, route: "album", playCtx: "album" }]
            .concat(OTHER_ALBUMS.map((a) => ({ title: a.title, sub: a.artist, img: a.img })))
            .map(card).join("");

        const recentIds = state.recent.filter(byId).slice(0, 6);
        const recent = recentIds.length
            ? shelf("Reprendre la lecture", recentIds.map(function (id, i) {
                const t = byId(id);
                return card({ title: t.title, sub: t.sub, img: t.art, openTrack: t.id, playCtx: "track:" + t.id }, i);
            }).join(""))
            : "";

        const tracksShelf = shelf("Les titres de PORTFOLIO", TRACKS.map(function (t, i) {
            return card({ title: t.title, sub: t.sub, img: t.art, openTrack: t.id, playCtx: "track:" + t.id }, i);
        }).join(""), '<a href="#/album" data-route="album" class="see-all">Tout afficher</a>');

        return '<div class="page home">' +
            '<div class="home-chips"><button class="chip active">Tout</button><button class="chip" data-route="album">Album</button><button class="chip" data-route="artist">Artiste</button><button class="chip" data-route="liked">Titres likés</button></div>' +
            '<h1 class="home-title">' + greeting() + '</h1>' +
            '<div class="quick-grid" id="quick-grid">' + quick + '</div>' +
            '<div class="recap-banner" data-recap role="button" tabindex="0">' +
                '<div class="rb-shapes"><i></i><i></i><i></i></div>' +
                '<div class="rb-text"><span class="rb-tag">' + icon("sparkle", 14) + ' NOUVEAU</span><strong>Ton Récap 2026 est là</strong>' +
                '<p>Parcours, stack, projets, alternance, veille : l\'année de Sebastian en 7 écrans.</p></div>' +
                '<span class="rb-btn">Découvrir</span>' +
            '</div>' +
            recent +
            shelf("Artistes populaires", artists) +
            shelf("Écoutés récemment ou suggérés", albums) +
            tracksShelf +
            footerHTML() +
        '</div>';
    },

    album: function () {
        return '<div class="page album">' +
            '<header class="hero">' +
                '<img class="hero-cover" src="' + ALBUM.cover + '" alt="Couverture Album Portfolio" data-lightbox>' +
                '<div class="hero-text">' +
                    '<span class="hero-type">Album</span>' +
                    '<h1 class="hero-title">' + ALBUM.title + '</h1>' +
                    '<div class="hero-meta"><img src="' + ARTIST.img + '" alt="" class="hero-avatar">' +
                        '<a href="#/artist" data-route="artist" class="hero-artist">' + ARTIST.name + '</a>' +
                        '<span class="dot">•</span><span>' + ALBUM.year + '</span><span class="dot">•</span><span>' + albumStats() + '</span></div>' +
                '</div>' +
            '</header>' +
            '<div class="page-body">' +
                actionBar("album") +
                '<div class="tracklist">' + tracklistHeader() + TRACKS.map((t, i) => trackRow(t, i)).join("") + '</div>' +
                '<div class="album-foot"><p class="release">' + ALBUM.year + '</p>' +
                    '<p class="copy">© ' + ALBUM.year + ' Sebastian Mora · BTS SIO SLAM · Nexa Digital School</p></div>' +
                shelf("Plus de Sebastian Mora",
                    TRACKS.map((t, i) => card({ title: t.title, sub: "Single • " + ALBUM.year, img: t.art, openTrack: t.id, playCtx: "track:" + t.id }, i)).join(""),
                    '<a href="#/artist" data-route="artist" class="see-all">Voir la discographie</a>') +
                footerHTML() +
            '</div>' +
        '</div>';
    },

    artist: function () {
        const popular = TRACKS.slice(0, 5);
        return '<div class="page artist">' +
            '<header class="artist-hero" style="--hero-img:url(\'' + ARTIST.img + '\')">' +
                '<div class="artist-hero-bg"></div>' +
                '<div class="artist-hero-text">' +
                    '<span class="verified">' + icon("verified", 22) + ' Artiste vérifié</span>' +
                    '<h1 class="hero-title">' + ARTIST.name + '</h1>' +
                    '<span class="artist-listeners">BTS SIO SLAM · Alternant chez Everial · Nexa Digital School</span>' +
                '</div>' +
            '</header>' +
            '<div class="page-body">' +
                actionBar("artist") +
                '<section class="artist-popular"><h2>Populaires</h2>' +
                    '<div class="tracklist compact" id="popular-list">' + popular.map((t, i) => trackRow(t, i, { thumb: true })).join("") + '</div>' +
                    '<button class="text-btn" id="more-popular">Plus</button>' +
                '</section>' +
                '<div class="artist-cols">' +
                    '<section class="artist-pick"><h2>Sélection de l\'artiste</h2>' +
                        '<div class="pick" data-open-track="4" role="link" tabindex="0"><div class="pick-bg" style="background-image:url(\'Images/ImageProjets.png\')"></div>' +
                            '<img src="' + ALBUM.cover + '" alt=""><div><span class="pick-badge"><img src="' + ARTIST.img + '" alt="">Publié par Sebastian Mora</span>' +
                            '<strong>PROJETS</strong><span class="muted">Kuzco, Kahoot, Tier List & Everial</span></div></div>' +
                    '</section>' +
                    '<section class="artist-disco"><h2>Discographie</h2>' +
                        '<div class="shelf-row">' + card({ title: ALBUM.title, sub: ALBUM.year + " • Album", img: ALBUM.cover, route: "album", playCtx: "album" }, 0) + '</div>' +
                    '</section>' +
                '</div>' +
                '<section class="about"><h2>À propos</h2>' +
                    '<div class="about-card" data-open-track="1" role="link" tabindex="0" style="background-image:linear-gradient(to top, rgba(0,0,0,.85) 10%, rgba(0,0,0,.05) 70%), url(\'' + ARTIST.img + '\')">' +
                        '<div class="about-text"><strong class="about-num">24 ans</strong><span class="muted">Étudiant en BTS SIO option SLAM</span>' +
                        '<p>Après un Baccalauréat SES (option Mathématiques) et deux années d\'études en psychologie, je me suis réorienté avec passion vers le développement d\'applications…</p></div>' +
                    '</div>' +
                '</section>' +
                shelf("Les fans aiment aussi", OTHER_ARTISTS.map((a, i) => card({ title: a.name, sub: "Artiste", img: a.img, circle: true }, i)).join("")) +
                footerHTML() +
            '</div>' +
        '</div>';
    },

    liked: function () {
        const liked = TRACKS.filter((t) => state.liked.has(t.id));
        const list = liked.length
            ? '<div class="tracklist">' + tracklistHeader() + liked.map((t, i) => trackRow(t, i, { thumb: true, queue: "liked" })).join("") + '</div>'
            : '<div class="empty"><span class="empty-ico">' + icon("heart", 48) + '</span><h2>Les titres que vous aimez s\'afficheront ici</h2>' +
              '<p>Enregistrez des titres en appuyant sur l\'icône en forme de cœur.</p><a href="#/album" data-route="album" class="white-btn">Explorer l\'album</a></div>';
        return '<div class="page liked">' +
            '<header class="hero">' +
                '<div class="hero-cover liked-cover">' + icon("heartFill", 80) + '</div>' +
                '<div class="hero-text"><span class="hero-type">Playlist</span><h1 class="hero-title">Titres likés</h1>' +
                    '<div class="hero-meta"><img src="' + ARTIST.img + '" alt="" class="hero-avatar"><span class="hero-artist">Vous</span><span class="dot">•</span><span>' + liked.length + ' titre' + (liked.length > 1 ? 's' : '') + '</span></div></div>' +
            '</header>' +
            '<div class="page-body">' + (liked.length ? actionBar("liked") : '') + list + footerHTML() + '</div>' +
        '</div>';
    },

    search: function () {
        return '<div class="page search"><div id="search-results"></div>' + footerHTML() + '</div>';
    },

    lyrics: function () {
        const t = byId(state.currentId);
        if (!t) {
            state.lyr = null;
            return '<div class="page lyrics"><div class="empty"><span class="empty-ico">' + icon("mic", 48) + '</span>' +
                '<h2>Lancez un titre pour afficher les paroles</h2><p>Chaque section du portfolio a ses propres « paroles », synchronisées avec la lecture.</p>' +
                '<button class="white-btn" data-open-track="1">Lancer PORTFOLIO</button></div></div>';
        }
        const lines = lyricLines(t);
        state.lyr = { id: t.id, starts: lyricStarts(lines, toSec(t.duration)), idx: -1 };
        return '<div class="page lyrics">' +
            '<div class="ly-head"><img src="' + t.art + '" alt=""><div><span>Paroles</span><strong>' + t.title + '</strong><em>' + ARTIST.name + '</em></div></div>' +
            '<div class="ly-lines">' + lines.map((l, i) => '<p class="ly-line" data-i="' + i + '" role="button" tabindex="0">' + esc(l) + '</p>').join("") + '</div>' +
            '<p class="ly-credit">Paroles écrites par Sebastian Mora · cliquez sur une ligne pour y accéder</p>' +
        '</div>';
    },

    library: function () {
        return '<div class="page library-page"><h1 class="home-title">Bibliothèque</h1><ul class="lib-list big">' + libraryItemsHTML() + '</ul></div>';
    }
};

function actionBar(ctx) {
    const isAlbum = ctx === "album";
    return '<div class="action-bar">' +
        '<button class="play-btn lg" data-play-ctx="' + (ctx === "liked" ? "liked" : "album") + '" aria-label="Lecture"></button>' +
        '<button class="icon-btn toggle big" data-action="shuffle" aria-label="Lecture aléatoire">' + icon("shuffle", 28) + '</button>' +
        (ctx === "artist"
            ? '<button class="outline-btn" data-follow>Suivre</button>'
            : isAlbum ? '<button class="icon-btn big circle-outline" data-like-all aria-label="Ajouter tout l\'album aux titres likés">' + icon("plus", 22) + '</button>' : '') +
        '<button class="icon-btn big" data-menu="' + ctx + '" aria-label="Plus d\'options">' + icon("dots", 28) + '</button>' +
        (isAlbum ? '<span class="action-right">Liste ' + icon("list", 16) + '</span>' : '') +
    '</div>';
}

function footerHTML() {
    return '<footer class="page-foot">' +
        '<div class="foot-cols">' +
            '<div><h4>Portfolio</h4><a href="#/album" data-route="album">L\'album</a><a href="#/artist" data-route="artist">L\'artiste</a><a href="#/search" data-route="search">Rechercher</a><a href="#/lyrics" data-route="lyrics">Paroles</a><a href="#" data-recap>Récap 2026</a><a href="#" data-intro>Revoir l\'intro</a></div>' +
            '<div><h4>Documents</h4><a href="Images/Mon_CV.pdf" target="_blank" rel="noopener">Curriculum Vitae (PDF)</a><a href="Images/MORA Sebastian - E5---------.pdf" target="_blank" rel="noopener">Tableau de synthèse E5 (PDF)</a></div>' +
            '<div><h4>Raccourcis</h4><span><kbd>Espace</kbd> Lecture / pause</span><span><kbd>Ctrl</kbd> + <kbd>→</kbd> Suivant</span><span><kbd>/</kbd> Rechercher</span><span><kbd>L</kbd> Liker le titre</span><span><kbd>M</kbd> Couper le son</span></div>' +
        '</div>' +
        '<p class="foot-copy">© ' + ALBUM.year + ' Sebastian Mora — Portfolio BTS SIO SLAM</p>' +
    '</footer>';
}

/* ---------- Recherche ---------- */
function renderSearchResults() {
    const box = $("#search-results");
    if (!box) return;
    const q = norm($("#search-input").value.trim());

    if (!q) {
        box.innerHTML = '<h2 class="section-title">Parcourir tout</h2><div class="browse-grid">' +
            TRACKS.map(function (t, i) {
                return '<div class="browse-tile" data-open-track="' + t.id + '" role="link" tabindex="0" style="--c:' + t.color + ';--i:' + i + '">' +
                    '<span>' + t.title + '</span><img src="' + t.art + '" alt="" loading="lazy"></div>';
            }).join("") +
            '<div class="browse-tile" data-route="artist" role="link" tabindex="0" style="--c:#7a5a3c;--i:7"><span>L\'ARTISTE</span><img src="' + ARTIST.img + '" alt=""></div>' +
            '<div class="browse-tile" data-route="liked" role="link" tabindex="0" style="--c:#4a3ab8;--i:8"><span>TITRES LIKÉS</span><img src="' + ALBUM.cover + '" alt=""></div>' +
        '</div>';
        return;
    }

    const results = TRACKS.map(function (t) {
        const hay = norm(t.title + " " + t.sub);
        const body = norm(plain(t.content));
        let score = 0;
        if (norm(t.title).indexOf(q) === 0) score += 10;
        if (hay.indexOf(q) > -1) score += 5;
        const pos = body.indexOf(q);
        if (pos > -1) score += 2;
        let snippet = "";
        if (pos > -1) {
            const raw = plain(t.content);
            const start = Math.max(0, pos - 40);
            const piece = raw.substr(start, q.length + 90);
            const local = norm(piece).indexOf(q);
            snippet = (start > 0 ? "…" : "") + esc(piece.substr(0, local)) + "<mark>" + esc(piece.substr(local, q.length)) + "</mark>" + esc(piece.substr(local + q.length)) + "…";
        }
        return { t: t, score: score, snippet: snippet };
    }).filter((r) => r.score > 0).sort((a, b) => b.score - a.score);

    if (!results.length) {
        box.innerHTML = '<div class="empty"><h2>Aucun résultat trouvé pour « ' + esc($("#search-input").value) + ' »</h2><p>Vérifiez l\'orthographe ou essayez d\'autres mots-clés (ex : C#, Everial, IA, Kahoot…).</p></div>';
        return;
    }

    const top = results[0].t;
    box.innerHTML = '<div class="search-top">' +
        '<section><h2 class="section-title">Meilleur résultat</h2>' +
            '<div class="top-result" data-open-track="' + top.id + '" role="link" tabindex="0">' +
                '<img src="' + top.art + '" alt="">' +
                '<strong>' + top.title + '</strong>' +
                '<span class="muted"><span class="tag">Titre</span> ' + ARTIST.name + '</span>' +
                '<button class="play-btn card-play" data-play-ctx="track:' + top.id + '" aria-label="Lire">' + icon("play") + '</button>' +
            '</div>' +
        '</section>' +
        '<section class="search-tracks"><h2 class="section-title">Titres</h2><div class="tracklist compact">' +
            results.map((r, i) => trackRow(r.t, i, { thumb: true })).join("") +
        '</div></section>' +
    '</div>' +
    (results.some((r) => r.snippet) ? '<h2 class="section-title">Dans le contenu</h2><div class="snippets">' +
        results.filter((r) => r.snippet).map((r) => '<button class="snippet" data-open-track="' + r.t.id + '"><strong>' + r.t.title + '</strong><span>' + r.snippet + '</span></button>').join("") +
    '</div>' : '');
    sync();
}

/* ---------- Bibliothèque (sidebar) ---------- */
function libraryItems() {
    return [
        { type: "playlist", title: "Titres likés", meta: "Playlist • " + state.liked.size + " titre" + (state.liked.size > 1 ? "s" : ""), liked: true, route: "liked", ctx: "liked" },
        { type: "album", title: ALBUM.title, meta: "Album • " + ARTIST.name, img: ALBUM.cover, route: "album", ctx: "album" },
        { type: "artist", title: ARTIST.name, meta: "Artiste", img: ARTIST.img, route: "artist", circle: true, ctx: "album" }
    ];
}

function libraryItemsHTML() {
    return libraryItems().filter((it) => !state.libFilter || it.type === state.libFilter).map(function (it, i) {
        const attr = it.intro ? 'data-intro' : it.recap ? 'data-recap' : it.route ? 'data-route="' + it.route + '"' : 'data-unavailable="' + esc(it.title) + '"';
        return '<li class="lib-item" ' + attr + ' data-lib-ctx="' + (it.ctx || "") + '" data-lib-route="' + (it.route || "") + '" role="link" tabindex="0" style="--i:' + i + '">' +
            (it.intro ? '<span class="recap-thumb intro-thumb">' + icon("play", 18) + '</span>' : it.recap ? '<span class="recap-thumb">' + icon("sparkle", 18) + '</span>' : it.liked ? '<span class="liked-thumb sm">' + icon("heartFill", 16) + '</span>' : '<img src="' + it.img + '" alt=""' + (it.circle ? ' class="circle"' : '') + ' loading="lazy">') +
            '<span class="lib-text"><span class="lib-name">' + it.title + '</span><span class="lib-meta">' + it.meta + '</span></span>' +
            '<span class="lib-speaker">' + icon("speaker", 16) + '</span>' +
        '</li>';
    }).join("");
}

function renderLibrary() {
    $("#lib-list").innerHTML = libraryItemsHTML();
    $$("#lib-chips .chip").forEach((c) => c.classList.toggle("active", c.dataset.filter === state.libFilter));
    if (state.route === "library") { const l = $(".library-page .lib-list"); if (l) l.innerHTML = libraryItemsHTML(); }
}

/* ---------------------------------------------------------------------
   8. ROUTEUR
--------------------------------------------------------------------- */
function currentRoute() {
    const r = location.hash.replace(/^#\/?/, "") || "home";
    return VIEWS[r] ? r : "home";
}

function go(route) {
    if (currentRoute() === route && location.hash) { render(); return; }
    location.hash = "#/" + route;
}

function render() {
    const route = currentRoute();
    state.route = route;
    main.dataset.view = route;
    view.innerHTML = VIEWS[route]();
    view.classList.remove("view-enter");
    void view.offsetWidth;
    view.classList.add("view-enter");
    main.scrollTop = 0;
    onScroll();

    $$("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === route));

    const sticky = { album: ALBUM.title, artist: ARTIST.name, liked: "Titres likés" };
    $("#topbar-title").textContent = sticky[route] || "";
    $("#topbar-play").dataset.playCtx = route === "liked" ? "liked" : "album";

    switch (route) {
        case "home": setAccent(ALBUM.cover, ALBUM.color); bindQuickHover(); break;
        case "album": setAccent(ALBUM.cover, ALBUM.color); break;
        case "artist": setAccent(ARTIST.img, "#7a5a3c"); bindPopularMore(); break;
        case "liked": main.style.setProperty("--view-color", "hsl(250 55% 38%)"); break;
        case "search": main.style.setProperty("--view-color", "#121212"); renderSearchResults(); break;
        case "lyrics": { const lt = byId(state.currentId); setAccent(lt ? lt.art : ALBUM.cover, lt ? lt.color : ALBUM.color); updateLyrics(); break; }
        default: main.style.setProperty("--view-color", "#222");
    }
    if (route === "search") setTimeout(() => $("#search-input").focus(), 50);
    renderLibrary();
    sync();
    fitHeroTitle();
}

/* Ajuste la taille du grand titre pour qu'il tienne sur une ligne (comme sur les pages d'album) */
function fitHeroTitle() {
    const el = $(".hero-title", view);
    if (!el) return;
    const max = window.innerWidth <= 820 ? 48 : 96;
    let size = max;
    el.style.fontSize = size + "px";
    while (el.scrollWidth > el.clientWidth && size > 24) {
        size -= 2;
        el.style.fontSize = size + "px";
    }
    el.style.whiteSpace = el.scrollWidth > el.clientWidth ? "normal" : "nowrap";
}

function bindQuickHover() {
    const grid = $("#quick-grid");
    if (!grid) return;
    $$(".quick", grid).forEach(function (q) {
        q.addEventListener("mouseenter", function () {
            if (q.dataset.img) setAccent(q.dataset.img, q.dataset.color);
            else main.style.setProperty("--view-color", q.dataset.color);
        });
    });
    grid.addEventListener("mouseleave", function () { setAccent(ALBUM.cover, ALBUM.color); });
}

function bindPopularMore() {
    const btn = $("#more-popular");
    if (!btn) return;
    btn.addEventListener("click", function () {
        const list = $("#popular-list");
        const expanded = btn.dataset.expanded === "1";
        const tracks = expanded ? TRACKS.slice(0, 5) : TRACKS;
        list.innerHTML = tracks.map((t, i) => trackRow(t, i, { thumb: true })).join("");
        btn.dataset.expanded = expanded ? "0" : "1";
        btn.textContent = expanded ? "Plus" : "Moins";
        sync();
    });
}

/* ---------------------------------------------------------------------
   9. LECTEUR
--------------------------------------------------------------------- */
function selectTrack(id, queueName, opts) {
    opts = opts || {};
    const t = byId(id);
    if (!t) return;
    state.currentId = id;
    state.queueName = queueName || state.queueName || "album";
    state.elapsed = 0;
    state.playing = opts.autoplay !== false;

    state.recent = [id].concat(state.recent.filter((r) => r !== id)).slice(0, 8);
    store.set("recent", state.recent);

    fillNowPlaying(t);
    if (state.route === "lyrics") render();
    if (opts.openPanel !== false) openNP();
    updatePlayerInfo();
    sync();
}

function fillNowPlaying(t) {
    $("#np-title").innerHTML = t.title;
    $("#np-sub").textContent = t.sub;
    $("#np-context").textContent = state.queueName === "liked" ? "Titres likés" : ALBUM.title;
    $("#np-context").dataset.route = state.queueName === "liked" ? "liked" : "album";
    $("#np-like").dataset.like = t.id;

    const heroImg = $("#np-hero-img");
    const hero = $("#np-hero");
    hero.style.setProperty("--np-color", t.color);
    if (t.hero) {
        heroImg.innerHTML = '<img src="' + t.hero + '" alt="" data-lightbox>';
        hero.classList.remove("no-img");
    } else {
        heroImg.innerHTML = '<div class="np-hero-fallback"><img src="' + t.art + '" alt=""><span>' + t.title + '</span></div>';
        hero.classList.add("no-img");
    }
    extractColor(t.hero || t.art, t.color).then((c) => hero.style.setProperty("--np-color", c));

    const desc = $("#np-desc");
    desc.innerHTML = t.content;
    desc.classList.remove("rich-enter");
    void desc.offsetWidth;
    desc.classList.add("rich-enter");
    animateCounts(desc);
    fillLyricsPreview(t);
    $("#np-scroll").scrollTop = 0;
    renderNext();
}

function nextId(auto) {
    const q = queue();
    if (!state.currentId) return q[0];
    if (state.shuffle && q.length > 1) {
        let n;
        do { n = q[Math.floor(Math.random() * q.length)]; } while (n === state.currentId);
        return n;
    }
    const i = q.indexOf(state.currentId);
    if (i < q.length - 1) return q[i + 1];
    return (!auto || state.repeat === 1) ? q[0] : null;
}

function prevId() {
    const q = queue();
    const i = q.indexOf(state.currentId);
    return i > 0 ? q[i - 1] : q[q.length - 1];
}

function renderNext() {
    const box = $("#np-next");
    const n = state.shuffle ? null : nextId(false);
    const t = n ? byId(n) : null;
    box.innerHTML = state.shuffle
        ? '<p class="muted small">Lecture aléatoire activée — surprise ! 🎲</p>'
        : t ? '<div class="next-item" data-open-track="' + t.id + '" role="button" tabindex="0"><img src="' + t.art + '" alt=""><div><strong>' + t.title + '</strong><span class="muted">' + t.sub + '</span></div>' + icon("play", 18) + '</div>' : '';
}

function updatePlayerInfo() {
    const t = byId(state.currentId);
    if (!t) return;
    const title = $("#pl-title");
    title.innerHTML = '<a href="#/album" data-route="' + (state.queueName === "liked" ? "liked" : "album") + '">' + t.title + '</a>';
    $("#pl-sub").textContent = ARTIST.name + " • " + (state.queueName === "liked" ? "Titres likés" : "Portfolio");
    const cover = $("#pl-cover");
    cover.classList.remove("swap");
    void cover.offsetWidth;
    cover.src = t.art;
    cover.classList.add("swap");
    $("#pl-like").dataset.like = t.id;
    extractColor(t.art, t.color).then((c) => document.body.style.setProperty("--track-color", c));
    $$("[data-time-total]").forEach((el) => (el.textContent = t.duration));
    document.body.classList.add("has-track");
}

function togglePlay() {
    if (!state.currentId) { selectTrack(queue()[0], state.queueName); return; }
    state.playing = !state.playing;
    sync();
}

function next(auto) {
    if (state.repeat === 2 && auto) { state.elapsed = 0; return; }
    const n = nextId(auto);
    if (n === null) { state.playing = false; state.elapsed = 0; sync(); renderProgress(true); return; }
    selectTrack(n, state.queueName, { openPanel: state.npOpen });
}

function prev() {
    if (!state.currentId) return selectTrack(queue()[0], state.queueName);
    if (state.elapsed > 3) { state.elapsed = 0; renderProgress(true); return; }
    selectTrack(prevId(), state.queueName, { openPanel: state.npOpen });
}

function ctxActive(ctx) {
    if (!state.currentId) return false;
    if (ctx.indexOf("track:") === 0) return state.currentId === parseInt(ctx.slice(6), 10);
    if (ctx === "liked") return state.queueName === "liked";
    return state.queueName === "album";
}

function playCtx(ctx) {
    if (ctxActive(ctx)) { togglePlay(); return; }
    if (ctx.indexOf("track:") === 0) { selectTrack(parseInt(ctx.slice(6), 10), "album"); return; }
    if (ctx === "liked") {
        const ids = TRACKS.filter((t) => state.liked.has(t.id)).map((t) => t.id);
        if (!ids.length) { toast("Aucun titre liké pour le moment ❤"); return; }
        state.queueName = "liked";
        selectTrack(state.shuffle ? ids[Math.floor(Math.random() * ids.length)] : ids[0], "liked");
        return;
    }
    selectTrack(state.shuffle ? 1 + Math.floor(Math.random() * TRACKS.length) : 1, "album");
}

/* Boucle de progression */
let lastTs = null;
let lastShownSec = -1;
function tick(ts) {
    if (state.playing && state.currentId && !dragging) {
        if (lastTs !== null) state.elapsed += ((ts - lastTs) / 1000) * PLAYBACK_SPEED;
        const d = toSec(byId(state.currentId).duration);
        if (state.elapsed >= d) { state.elapsed = d; next(true); }
        renderProgress();
        updateLyrics();
        lastTs = ts;
    } else {
        lastTs = null;
    }
    visuals(ts);
    requestAnimationFrame(tick);
}

function renderProgress(force) {
    if (!state.currentId) return;
    const d = toSec(byId(state.currentId).duration);
    const p = Math.min(1, state.elapsed / d);
    $$("[data-progress]").forEach((el) => el.style.setProperty("--p", p));
    const sec = Math.floor(state.elapsed);
    if (force || sec !== lastShownSec) {
        lastShownSec = sec;
        $$("[data-time-cur]").forEach((el) => (el.textContent = fmt(sec)));
    }
}

/* Sliders (progression + volume) */
let dragging = false;
function makeSlider(el, onMove, onEnd) {
    function ratio(e) {
        const r = el.getBoundingClientRect();
        return Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    }
    el.addEventListener("pointerdown", function (e) {
        dragging = el.hasAttribute("data-progress");
        el.classList.add("dragging");
        el.setPointerCapture(e.pointerId);
        onMove(ratio(e));
        function move(ev) { onMove(ratio(ev)); }
        function up(ev) {
            el.classList.remove("dragging");
            el.removeEventListener("pointermove", move);
            el.removeEventListener("pointerup", up);
            el.removeEventListener("pointercancel", up);
            dragging = false;
            if (onEnd) onEnd(ratio(ev));
        }
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerup", up);
        el.addEventListener("pointercancel", up);
    });
}

function seek(r) {
    if (!state.currentId) return;
    state.elapsed = r * toSec(byId(state.currentId).duration);
    renderProgress(true);
    updateLyrics();
}

function setVolume(v) {
    state.volume = v;
    state.muted = v === 0;
    store.set("volume", v);
    renderVolume();
    Sound.applyVolume();
}

function renderVolume() {
    const v = state.muted ? 0 : state.volume;
    $("#volume").style.setProperty("--p", v);
    const btn = $("#btn-mute");
    btn.innerHTML = icon(v === 0 ? "vol0" : v < 0.5 ? "vol1" : "vol3", 20);
    btn.setAttribute("aria-label", v === 0 ? "Réactiver le son" : "Couper le son");
}

/* ---------------------------------------------------------------------
   10. PANNEAU « EN LECTURE »
--------------------------------------------------------------------- */
function openNP() {
    state.npOpen = true;
    document.body.classList.add("np-open");
    npPanel.setAttribute("aria-hidden", "false");
    sync();
}
function closeNP() {
    state.npOpen = false;
    document.body.classList.remove("np-open");
    npPanel.setAttribute("aria-hidden", "true");
    sync();
}
function toggleNP() {
    if (!state.currentId) { selectTrack(1, "album"); return; }
    state.npOpen ? closeNP() : openNP();
}

function animateCounts(root) {
    $$("[data-count]", root).forEach(function (el) {
        const target = parseInt(el.dataset.count, 10);
        const token = (el._countToken = {});
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = target; return; }
        const start = performance.now();
        const dur = 1100;
        function step() {
            if (el._countToken !== token) return;
            const k = Math.min(1, Math.max(0, (performance.now() - start) / dur));
            el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
            if (k < 1) requestAnimationFrame(step);
        }
        el.textContent = 0;
        requestAnimationFrame(step);
        // Garantit la valeur finale même si l'onglet est en arrière-plan
        setTimeout(function () { if (el._countToken === token) el.textContent = target; }, dur + 100);
    });
}

/* ---------------------------------------------------------------------
   11. LIKES, SUIVRE, TOAST, MENU, LIGHTBOX
--------------------------------------------------------------------- */
function toggleLike(id) {
    const t = byId(id);
    if (!t) return;
    if (state.liked.has(id)) { state.liked.delete(id); toast("Supprimé des Titres likés"); }
    else { state.liked.add(id); toast("Ajouté aux Titres likés", true); }
    store.set("liked", Array.from(state.liked));
    if (state.route === "liked") { const y = main.scrollTop; render(); main.scrollTop = y; }
    renderLibrary();
    sync();
    $$('[data-like="' + id + '"]').forEach(function (b) { b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop"); });
}

function likeAll() {
    const all = TRACKS.every((t) => state.liked.has(t.id));
    TRACKS.forEach((t) => (all ? state.liked.delete(t.id) : state.liked.add(t.id)));
    store.set("liked", Array.from(state.liked));
    toast(all ? "Album retiré des Titres likés" : "Album ajouté aux Titres likés", !all);
    renderLibrary();
    sync();
}

function toggleFollow() {
    state.following = !state.following;
    store.set("following", state.following);
    toast(state.following ? "Vous suivez désormais Sebastian Mora 🎉" : "Vous ne suivez plus Sebastian Mora");
    sync();
}

let toastTimer = null;
function toast(msg, withLink) {
    const el = $("#toast");
    el.innerHTML = '<span>' + msg + '</span>' + (withLink ? '<a href="#/liked" data-route="liked">Afficher</a>' : '');
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2800);
}

function openMenu(x, y, items) {
    const m = $("#ctx-menu");
    m.innerHTML = items.map(function (it, i) {
        if (it === "-") return '<hr>';
        return it.href
            ? '<a role="menuitem" href="' + it.href + '" target="_blank" rel="noopener" data-mi="' + i + '">' + icon(it.icon, 16) + it.label + '</a>'
            : '<button role="menuitem" data-mi="' + i + '">' + icon(it.icon, 16) + it.label + '</button>';
    }).join("");
    m._items = items;
    m.classList.add("show");
    const r = m.getBoundingClientRect();
    m.style.left = Math.min(x, window.innerWidth - r.width - 8) + "px";
    m.style.top = Math.min(y, window.innerHeight - r.height - 8) + "px";
    const first = m.querySelector("button, a");
    if (first) first.focus({ preventScroll: true });
}
function closeMenu() { $("#ctx-menu").classList.remove("show"); }

function trackMenuItems(id) {
    const t = byId(id);
    return [
        { label: "Lire", icon: "play", run: () => selectTrack(id, "album") },
        { label: state.liked.has(id) ? "Supprimer des Titres likés" : "Ajouter aux Titres likés", icon: state.liked.has(id) ? "heartFill" : "heart", run: () => toggleLike(id) },
        { label: "Voir les détails", icon: "info", run: () => { selectTrack(id, "album", { autoplay: state.playing && state.currentId === id }); } },
        "-",
        { label: "Accéder à l'artiste", icon: "user", run: () => go("artist") },
        { label: "Accéder à l'album", icon: "library", run: () => go("album") },
        { label: "Copier le lien", icon: "link", run: () => copyLink("#/album", t.title) }
    ];
}

function pageMenuItems(ctx) {
    return [
        ctx === "album"
            ? { label: TRACKS.every((t) => state.liked.has(t.id)) ? "Retirer l'album des Titres likés" : "Ajouter l'album aux Titres likés", icon: "heart", run: likeAll }
            : { label: state.following ? "Ne plus suivre" : "Suivre", icon: "user", run: toggleFollow },
        { label: "Accéder à l'artiste", icon: "user", run: () => go("artist") },
        "-",
        { label: "Télécharger le CV (PDF)", icon: "download", href: "Images/Mon_CV.pdf" },
        { label: "Tableau de synthèse E5 (PDF)", icon: "download", href: "Images/MORA Sebastian - E5---------.pdf" },
        "-",
        { label: "Copier le lien", icon: "link", run: () => copyLink("#/" + ctx, ctx === "artist" ? ARTIST.name : ALBUM.title) }
    ];
}

function copyLink(hash, label) {
    const url = location.href.split("#")[0] + hash;
    const done = () => toast("Lien de « " + plain(label) + " » copié dans le presse-papiers");
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(url).then(done, () => fallbackCopy(url, done));
    else fallbackCopy(url, done);
}
function fallbackCopy(text, done) {
    const ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); } catch (e) { toast(text); }
    ta.remove();
}

function openLightbox(src, alt) {
    const lb = $("#lightbox");
    $("#lightbox-img").src = src;
    $("#lightbox-img").alt = alt || "";
    $("#lightbox-cap").textContent = alt || "";
    lb.classList.add("show");
    lb.setAttribute("aria-hidden", "false");
}
function closeLightbox() {
    const lb = $("#lightbox");
    lb.classList.remove("show");
    lb.setAttribute("aria-hidden", "true");
}

/* ---------------------------------------------------------------------
   15. MUSIQUE GÉNÉRATIVE (Web Audio — aucun fichier audio)
   Chaque section a sa propre grille d'accords et son tempo, façon lo-fi.
--------------------------------------------------------------------- */
const SONGS = {
    1: { bpm: 84, chords: [[60, 64, 67, 71], [57, 60, 64, 67], [53, 57, 60, 64], [55, 59, 62, 65]] },
    2: { bpm: 90, chords: [[62, 65, 69, 72], [55, 59, 62, 65], [60, 64, 67, 71], [57, 60, 64, 67]] },
    3: { bpm: 94, chords: [[57, 60, 64, 67], [53, 57, 60, 64], [60, 64, 67, 72], [55, 59, 62, 67]] },
    4: { bpm: 98, chords: [[52, 55, 59, 62], [60, 64, 67, 71], [55, 59, 62, 67], [62, 66, 69, 72]] },
    5: { bpm: 86, chords: [[53, 57, 60, 64], [52, 55, 59, 62], [50, 53, 57, 60], [48, 52, 55, 59]] },
    6: { bpm: 78, chords: [[51, 55, 58, 62], [48, 51, 55, 58], [56, 60, 63, 67], [58, 62, 65, 68]] },
    7: { bpm: 92, chords: [[55, 59, 62, 66], [52, 55, 59, 62], [60, 64, 67, 71], [62, 66, 69, 72]] }
};

const Sound = {
    ctx: null,
    enabled: store.get("sound", true),
    running: false,
    timer: null,
    step: 0,
    nextTime: 0,
    id: null,
    song: SONGS[1],
    data: null,

    ensure() {
        if (this.ctx) return true;
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return false;
        const c = (this.ctx = new AC());
        this.master = c.createGain();
        this.master.gain.value = 0;
        this.analyser = c.createAnalyser();
        this.analyser.fftSize = 128;
        this.analyser.smoothingTimeConstant = 0.75;
        this.data = new Uint8Array(this.analyser.frequencyBinCount);

        this.bus = c.createGain();
        const tone = c.createBiquadFilter();
        tone.type = "lowpass";
        tone.frequency.value = 5200;
        const comp = c.createDynamicsCompressor();
        comp.threshold.value = -18;
        comp.ratio.value = 3;
        this.bus.connect(tone); tone.connect(comp); comp.connect(this.master);
        this.master.connect(this.analyser); this.analyser.connect(c.destination);

        // Réponse impulsionnelle de la réverb (partagée, calculée une seule fois)
        this.irBuffer = this.impulse(2.8);

        // Bruit (percussions)
        this.noise = c.createBuffer(1, c.sampleRate, c.sampleRate);
        const nd = this.noise.getChannelData(0);
        for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
        return true;
    },

    impulse(sec) {
        const c = this.ctx, len = Math.floor(c.sampleRate * sec), b = c.createBuffer(2, len, c.sampleRate);
        for (let ch = 0; ch < 2; ch++) {
            const d = b.getChannelData(ch);
            for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
        }
        return b;
    },

    hz(m) { return 440 * Math.pow(2, (m - 69) / 12); },

    /* Chaque lecture a sa propre chaîne (sortie + écho + réverb).
       En changeant de titre, l'ancienne chaîne est coupée en fondu puis débranchée :
       les notes déjà programmées et les queues d'écho/réverb ne peuvent plus se superposer. */
    makeChain() {
        const c = this.ctx;
        const out = c.createGain();
        out.connect(this.bus);

        const delay = c.createDelay(1);
        delay.delayTime.value = 0.33;
        const fb = c.createGain(); fb.gain.value = 0.3;
        const dlp = c.createBiquadFilter(); dlp.type = "lowpass"; dlp.frequency.value = 1800;
        const delaySend = c.createGain(); delaySend.gain.value = 0.3;
        delaySend.connect(delay); delay.connect(dlp); dlp.connect(fb); fb.connect(delay); dlp.connect(out);

        const rev = c.createConvolver();
        rev.buffer = this.irBuffer;
        const revSend = c.createGain(); revSend.gain.value = 0.5;
        revSend.connect(rev); rev.connect(out);

        return { out: out, delaySend: delaySend, revSend: revSend, nodes: [delaySend, delay, dlp, fb, revSend, rev] };
    },

    retire(chain) {
        if (!chain) return;
        const t = this.ctx.currentTime;
        const g = chain.out.gain;
        g.cancelScheduledValues(t);
        g.setValueAtTime(g.value, t);
        g.linearRampToValueAtTime(0, t + 0.12);
        setTimeout(function () {
            try { chain.out.disconnect(); } catch (e) { /* déjà débranché */ }
            chain.nodes.forEach(function (n) { try { n.disconnect(); } catch (e) { /* ignore */ } });
        }, 250);
    },

    play(id) {
        if (!this.enabled || !this.ensure()) return;
        if (this.ctx.state === "suspended") this.ctx.resume();
        const changed = id !== this.id;
        this.id = id;
        this.song = SONGS[id] || SONGS[1];
        if (!this.running || changed || !this.chain) {
            this.retire(this.chain);
            this.chain = this.makeChain();
            this.step = 0;
            this.nextTime = this.ctx.currentTime + 0.06;
        }
        if (!this.running) {
            this.running = true;
            clearInterval(this.timer);
            this.timer = setInterval(() => this.schedule(), 25);
        }
        this.applyVolume();
    },

    pause() {
        if (!this.ctx || !this.running) return;
        this.running = false;
        clearInterval(this.timer);
        this.applyVolume();
    },

    applyVolume() {
        if (!this.ctx) return;
        const v = this.running && this.enabled ? (state.muted ? 0 : state.volume) : 0;
        const t = this.ctx.currentTime;
        this.master.gain.cancelScheduledValues(t);
        this.master.gain.setTargetAtTime(v * v * 0.8, t, 0.12);
    },

    schedule() {
        const s16 = 60 / this.song.bpm / 4;
        while (this.nextTime < this.ctx.currentTime + 0.15) {
            this.playStep(this.step, this.nextTime, s16);
            this.nextTime += s16;
            this.step = (this.step + 1) % 64;
        }
    },

    playStep(step, t, s16) {
        const s = step % 16, bar = Math.floor(step / 16);
        const ch = this.song.chords[bar % this.song.chords.length];
        const swing = s % 4 === 2 ? s16 * 0.2 : 0;
        if (s === 0) this.pad(ch, t, s16 * 16);
        if (s === 0 || s === 10) this.kick(t);
        if (s === 4 || s === 12) this.snare(t);
        if (s % 2 === 0) this.hat(t + swing, s % 4 === 0 ? 0.02 : 0.04);
        if (s === 0 || s === 6 || s === 10) this.bass(ch[0] - 12, t, s16 * (s === 6 ? 3 : 5));
        if (s % 2 === 0 && (bar % 2 === 1 || s < 12)) {
            const pat = [0, 2, 1, 3, 2, 1, 3, 2];
            this.pluck(ch[pat[(s / 2) % 8]] + 12, t + swing);
        }
    },

    env(g, t, peak, a, d) {
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(peak, t + a);
        g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
    },

    osc(type, f, t, dur, out) {
        const o = this.ctx.createOscillator();
        o.type = type;
        o.frequency.setValueAtTime(f, t);
        o.connect(out);
        o.start(t);
        o.stop(t + dur + 0.05);
        return o;
    },

    pad(ch, t, dur) {
        const c = this.ctx;
        const f = c.createBiquadFilter();
        f.type = "lowpass";
        f.frequency.setValueAtTime(500, t);
        f.frequency.linearRampToValueAtTime(1300, t + dur * 0.5);
        f.frequency.linearRampToValueAtTime(600, t + dur);
        const g = c.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.022, t + 0.8);
        g.gain.setValueAtTime(0.022, t + dur - 0.3);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.9);
        f.connect(g); g.connect(this.chain.out); g.connect(this.chain.revSend);
        ch.forEach((m) => [-7, 7].forEach((det) => { this.osc("sawtooth", this.hz(m), t, dur + 1, f).detune.value = det; }));
    },

    pluck(m, t) {
        const g = this.ctx.createGain();
        this.env(g, t, 0.08, 0.005, 0.5);
        g.connect(this.chain.out); g.connect(this.chain.delaySend); g.connect(this.chain.revSend);
        this.osc("triangle", this.hz(m), t, 0.6, g);
    },

    bass(m, t, dur) {
        const g = this.ctx.createGain();
        this.env(g, t, 0.26, 0.02, dur);
        g.connect(this.chain.out);
        this.osc("sine", this.hz(m), t, dur + 0.05, g);
    },

    kick(t) {
        const c = this.ctx, g = c.createGain();
        this.env(g, t, 0.55, 0.003, 0.32);
        g.connect(this.chain.out);
        const o = c.createOscillator();
        o.type = "sine";
        o.frequency.setValueAtTime(120, t);
        o.frequency.exponentialRampToValueAtTime(42, t + 0.12);
        o.connect(g); o.start(t); o.stop(t + 0.4);
    },

    noiseHit(t, type, freq, peak, dec, rev) {
        const c = this.ctx, src = c.createBufferSource();
        src.buffer = this.noise;
        const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq;
        const g = c.createGain();
        this.env(g, t, peak, 0.002, dec);
        src.connect(f); f.connect(g); g.connect(this.chain.out);
        if (rev) g.connect(this.chain.revSend);
        src.start(t, Math.random() * 0.5);
        src.stop(t + dec + 0.05);
    },

    snare(t) { this.noiseHit(t, "bandpass", 1900, 0.15, 0.18, true); },
    hat(t, v) { this.noiseHit(t, "highpass", 7500, v, 0.05, false); },

    levels() {
        if (!this.ctx || !this.running) return null;
        this.analyser.getByteFrequencyData(this.data);
        return this.data;
    }
};

function toggleSound() {
    Sound.enabled = !Sound.enabled;
    store.set("sound", Sound.enabled);
    if (Sound.enabled && state.playing && state.currentId) Sound.play(state.currentId);
    else Sound.pause();
    toast(Sound.enabled ? "Musique d'ambiance activée 🎧" : "Musique d'ambiance désactivée");
    sync();
}

/* ---------------------------------------------------------------------
   16. VISUELS AU RYTHME (beat + visualiseur)
--------------------------------------------------------------------- */
let beat = 0;
let lastBeatStr = "";
const vizVals = new Float32Array(40);

function visuals(ts) {
    const data = state.playing ? Sound.levels() : null;
    let target = 0;
    if (data) {
        const low = (data[1] + data[2] + data[3]) / 765;
        target = Math.max(0, (low - 0.35) / 0.65);
    } else if (state.playing && state.currentId) {
        const bpm = (SONGS[state.currentId] || SONGS[1]).bpm;
        target = Math.pow(1 - (((ts / 1000) * bpm) / 60) % 1, 5) * 0.8;
    }
    beat += (target - beat) * (target > beat ? 0.5 : 0.1);
    const str = beat.toFixed(3);
    if (str !== lastBeatStr) {
        lastBeatStr = str;
        document.documentElement.style.setProperty("--beat", str);
    }
    if (state.npOpen) drawViz(data, ts);
}

function drawViz(data, ts) {
    const cv = $("#np-viz");
    if (!cv) return;
    const w = cv.clientWidth, h = cv.clientHeight, dpr = window.devicePixelRatio || 1;
    if (!w || !h) return;
    if (cv.width !== Math.round(w * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); }
    const x = cv.getContext("2d");
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    x.clearRect(0, 0, w, h);
    const n = vizVals.length, gap = 3, bw = (w - gap * (n - 1)) / n;
    for (let i = 0; i < n; i++) {
        let target = 0;
        if (state.playing) {
            target = data
                ? data[1 + Math.floor((i * 18) / n)] / 255 * (0.75 + 0.25 * Math.sin(ts / 180 + i))
                : (0.3 + 0.25 * Math.sin(ts / 260 + i * 0.55) * Math.sin(ts / 610 + i * 0.21)) * (0.6 + beat * 0.7);
        }
        vizVals[i] += (target - vizVals[i]) * 0.22;
        const bh = Math.max(2, vizVals[i] * h);
        x.fillStyle = "rgba(255,255,255," + (0.18 + vizVals[i] * 0.55).toFixed(3) + ")";
        x.fillRect(i * (bw + gap), h - bh, bw, bh);
    }
}

/* ---------------------------------------------------------------------
   17. PAROLES SYNCHRONISÉES
--------------------------------------------------------------------- */
let userScrollTs = 0;

function lyricLines(t) {
    const raw = t.content
        .replace(/<(br|\/p|\/li|\/h4|\/div|\/figcaption|\/button)[^>]*>/gi, "\n")
        .replace(/<[^>]+>/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&nbsp;/g, " ");
    const out = [];
    function chunk(s) {
        s = s.trim();
        if (!s) return;
        if (s.length <= 110) { out.push(s); return; }
        const mid = s.length / 2;
        let best = -1;
        s.replace(/, | : | ; | \(/g, function (m, idx) {
            if (best < 0 || Math.abs(idx - mid) < Math.abs(best - mid)) best = idx;
            return m;
        });
        if (best < 25) { out.push(s); return; }
        const cut = s.charAt(best) === "," ? best + 1 : best;
        chunk(s.slice(0, cut));
        chunk(s.slice(cut));
    }
    raw.split("\n").forEach(function (block) {
        block = block.replace(/\s+/g, " ").trim();
        if (!block || /^(LIRE L'ARTICLE|OUVRIR LE DOCUMENT)/.test(block)) return;
        block.split(/(?<=[.!?;])\s+/).forEach(chunk);
    });
    return out;
}

function lyricStarts(lines, dur) {
    const weights = lines.map((l) => l.length + 25);
    const total = weights.reduce((a, b) => a + b, 0);
    const usable = Math.max(10, dur - 4);
    let acc = 2;
    return weights.map(function (w) { const s = acc; acc += (w / total) * usable; return s; });
}

function updateLyrics() {
    if (state.route !== "lyrics" || !state.lyr || state.lyr.id !== state.currentId) return;
    const st = state.lyr.starts;
    let idx = -1;
    for (let i = 0; i < st.length; i++) if (state.elapsed >= st[i]) idx = i;
    if (idx === state.lyr.idx) return;
    state.lyr.idx = idx;
    $$(".ly-line", view).forEach(function (l, i) {
        l.classList.toggle("active", i === idx);
        l.classList.toggle("past", i < idx);
    });
    const el = $('.ly-line[data-i="' + idx + '"]', view);
    if (el && Date.now() - userScrollTs > 2500) {
        main.scrollTo({ top: Math.max(0, el.offsetTop - main.clientHeight * 0.35), behavior: "smooth" });
    }
}

function fillLyricsPreview(t) {
    const card = $("#np-lyrics");
    card.style.setProperty("--ly", t.color);
    extractColor(t.art, t.color).then((c) => card.style.setProperty("--ly", c));
    $("#np-lyrics-lines").innerHTML = lyricLines(t).slice(0, 4).map((l) => "<p>" + esc(l) + "</p>").join("");
}

/* ---------------------------------------------------------------------
   18. RÉCAP 2026 (stories plein écran)
--------------------------------------------------------------------- */
const recap = { i: 0, open: false, holdTimer: null, downAt: 0 };

function recapHTML() {
    const ri = (d, html, cls) => '<div class="ri ' + (cls || "") + '" style="--d:' + d + 'ms">' + html + "</div>";
    const projects = [
        { t: "KUZCO", s: "Filtre lama · HTML, CSS, JS", img: "Images/KUZCO.png" },
        { t: "KAHOOT", s: "Quiz · C# / POO", img: "Images/Kahoot.png" },
        { t: "TIER LIST", s: "Drag & Drop · Flexbox", img: "Images/TierList.png" },
        { t: "EVERIAL", s: "Migration & écrans Xbound", img: "Images/entreprise.png" }
    ];
    const stack = ["C#", "HTML", "CSS", "C++", "MySQL", "Git", "VS Code", "Linux", "N8N"];
    const slides = [
        // 1. Intro
        '<section class="rs" style="--g:linear-gradient(160deg,#ff4ecd,#7a2bf5 55%,#1e1e8f)">' +
            '<i class="blob b1"></i><i class="blob b2"></i><i class="blob b3"></i>' +
            ri(0, "Récap 2026", "r-kicker") +
            ri(150, "Sebastian<br>Mora", "r-big") +
            ri(400, "Une année de code, d'alternance et de veille. On remonte le fil ?", "r-text") +
            ri(700, '<img class="r-cover" src="' + ALBUM.cover + '" alt="">') +
        "</section>",
        // 2. Parcours
        '<section class="rs dark-text" style="--g:linear-gradient(160deg,#eaff8a,#d4ff3f 55%,#5c7a00)">' +
            ri(0, "Ton parcours", "r-kicker") +
            ri(150, "Cette année, tu as pris un virage.", "r-mid") +
            '<ol class="r-steps">' +
                ri(450, "<li><strong>Bac SES</strong><span>option Mathématiques</span></li>") +
                ri(750, "<li><strong>2 ans de psychologie</strong><span>rigueur, analyse, sens de l'UX</span></li>") +
                ri(1050, "<li><strong>BTS SIO SLAM</strong><span>Nexa Digital School</span></li>") +
            "</ol>" +
            ri(1400, "Et la compréhension des besoins utilisateurs est restée dans tes bagages.", "r-text") +
        "</section>",
        // 3. Stack
        '<section class="rs" style="--g:linear-gradient(160deg,#a238ff,#3d1a78)">' +
            '<i class="blob b2"></i>' +
            ri(0, "Ta stack en rotation", "r-kicker") +
            ri(150, "Les langages et outils que tu as le plus fait tourner.", "r-mid") +
            '<div class="r-chips">' + stack.map((s, i) => ri(400 + i * 110, s, "chip-" + (i % 3))).join("") + "</div>" +
        "</section>",
        // 4. Projets
        '<section class="rs" style="--g:linear-gradient(160deg,#4d8bff,#0e2a7a)">' +
            ri(0, "Tes projets en boucle", "r-kicker") +
            '<ol class="r-list">' + projects.map((p, i) =>
                ri(250 + i * 220, '<li><span class="r-num">' + (i + 1) + '</span><img src="' + p.img + '" alt=""><span><strong>' + p.t + "</strong><em>" + p.s + "</em></span></li>")
            ).join("") + "</ol>" +
        "</section>",
        // 5. Alternance
        '<section class="rs" style="--g:linear-gradient(160deg,#16d1b9,#0b4f6c 70%)">' +
            ri(0, "Ton alternance", "r-kicker") +
            ri(150, "Technicien d'exploitation chez <strong>EVERIAL</strong>", "r-mid") +
            '<div class="r-stats">' +
                ri(400, '<span class="r-stat"><b data-count="51">51</b><small>M€</small><em>de chiffre d\'affaires</em></span>') +
                ri(550, '<span class="r-stat"><b data-count="600">600</b><em>collaborateurs</em></span>') +
                ri(700, '<span class="r-stat"><b data-count="12">12</b><em>sites en France</em></span>') +
                ri(850, '<span class="r-stat"><b data-count="4">4</b><em>filiales à l\'international</em></span>') +
            "</div>" +
            ri(1100, "Supervision des flux, debugging et maintenance corrective de la chaîne de dématérialisation.", "r-text") +
        "</section>",
        // 6. Veille
        '<section class="rs" style="--g:linear-gradient(160deg,#ff8a3d,#c2185b)">' +
            '<i class="blob b1"></i>' +
            ri(0, "Ta veille techno", "r-kicker") +
            ri(150, "Les sujets qui t'ont fait réfléchir.", "r-mid") +
            '<div class="r-topics">' +
                ri(400, "<span>N°1</span><strong>L'introduction en bourse des géants de l'IA</strong>") +
                ri(650, "<span>N°2</span><strong>TrapDoor &amp; la sécurité de la supply chain</strong>") +
                ri(900, "<span>N°3</span><strong>Capifrance &amp; l'architecture Zero Trust</strong>") +
            "</div>" +
        "</section>",
        // 7. Résumé
        '<section class="rs" style="--g:linear-gradient(160deg,#1a1a2e,#000)">' +
            ri(0, '<div class="r-card">' +
                '<div class="r-card-photo"><img src="' + ARTIST.img + '" alt=""></div>' +
                '<div class="r-card-cols">' +
                    "<div><h4>Top sections</h4><ol>" + TRACKS.slice(0, 5).map((t) => "<li>" + plain(t.title) + "</li>").join("") + "</ol></div>" +
                    "<div><h4>Stack</h4><ol>" + stack.slice(0, 5).map((s) => "<li>" + s + "</li>").join("") + "</ol></div>" +
                "</div>" +
                '<div class="r-card-foot"><div><h4>Genre</h4><strong>Développement d\'applications</strong></div><div><h4>Durée</h4><strong>' + Math.round(TRACKS.reduce((a, t) => a + toSec(t.duration), 0) / 60) + " min</strong></div></div>" +
                '<div class="r-card-brand">Récap 2026 · Sebastian Mora</div>' +
            "</div>") +
            ri(400, '<div class="r-actions"><button class="r-btn" data-recap-play>' + icon("play", 18) + "Écouter PORTFOLIO</button>" +
                '<a class="r-btn ghost" href="Images/Mon_CV.pdf" target="_blank" rel="noopener">' + icon("download", 18) + "Mon CV</a></div>") +
        "</section>"
    ];
    return '<div class="recap-frame" id="recap-frame">' +
        '<div class="recap-bars">' + slides.map(() => "<span><i></i></span>").join("") + "</div>" +
        '<div class="recap-top"><img src="' + ARTIST.img + '" alt=""><span>Récap 2026</span>' +
            '<button class="icon-btn" data-recap-close aria-label="Fermer le Récap">' + icon("close", 26) + "</button></div>" +
        slides.join("") +
    "</div>" +
    '<button class="recap-arrow prev" data-recap-prev aria-label="Précédent">' + icon("chevLeft", 28) + "</button>" +
    '<button class="recap-arrow next" data-recap-next aria-label="Suivant">' + icon("chevRight", 28) + "</button>";
}

function openRecap() {
    const el = $("#recap");
    el.innerHTML = recapHTML();
    el.classList.remove("paused");
    el.classList.add("show");
    el.setAttribute("aria-hidden", "false");
    recap.open = true;
    showSlide(0);
    if (!state.playing) selectTrack(1, "album", { openPanel: false });
}

function closeRecap() {
    const el = $("#recap");
    el.classList.remove("show");
    el.setAttribute("aria-hidden", "true");
    recap.open = false;
    setTimeout(function () { if (!recap.open) el.innerHTML = ""; }, 400);
}

function showSlide(i) {
    const slides = $$("#recap .rs");
    if (i < 0) i = 0;
    if (i >= slides.length) { closeRecap(); return; }
    recap.i = i;
    slides.forEach((s, k) => s.classList.toggle("active", k === i));
    $$("#recap .recap-bars span").forEach(function (b, k) {
        b.className = "";
        void b.offsetWidth;
        b.className = k < i ? "done" : k === i ? (i === slides.length - 1 ? "done" : "run") : "";
    });
    animateCounts(slides[i]);
}

function bindRecap() {
    const el = $("#recap");
    el.addEventListener("animationend", function (e) {
        if (e.animationName === "rfill" && recap.open) showSlide(recap.i + 1);
    });
    el.addEventListener("pointerdown", function (e) {
        if (!e.target.closest("#recap-frame") || e.target.closest("button, a")) return;
        recap.downAt = Date.now();
        recap.holdTimer = setTimeout(() => el.classList.add("paused"), 180);
    });
    el.addEventListener("pointerup", function (e) {
        clearTimeout(recap.holdTimer);
        el.classList.remove("paused");
        if (!recap.downAt || e.target.closest("button, a")) return;
        const quick = Date.now() - recap.downAt < 250;
        recap.downAt = 0;
        if (!quick) return;
        const r = $("#recap-frame").getBoundingClientRect();
        showSlide(e.clientX - r.left < r.width * 0.3 ? recap.i - 1 : recap.i + 1);
    });
    el.addEventListener("click", function (e) {
        if (e.target === el) closeRecap();
    });
}

/* ---------------------------------------------------------------------
   12. SYNCHRONISATION DE L'INTERFACE
--------------------------------------------------------------------- */
function sync() {
    const playing = state.playing;

    $$("[data-play-toggle]").forEach(function (b) {
        b.innerHTML = icon(playing ? "pause" : "play", b.classList.contains("xl") ? 32 : 20);
        b.setAttribute("aria-label", playing ? "Pause" : "Lecture");
    });
    $$("[data-play-ctx]").forEach(function (b) {
        const on = playing && ctxActive(b.dataset.playCtx);
        const size = b.classList.contains("lg") ? 28 : b.classList.contains("quick-play") ? 20 : b.classList.contains("sm") ? 18 : 24;
        b.innerHTML = icon(on ? "pause" : "play", size);
        b.classList.toggle("is-on", on);
        b.setAttribute("aria-label", on ? "Pause" : "Lecture");
    });
    $$(".track-row").forEach(function (r) {
        const id = parseInt(r.dataset.id, 10);
        const isCur = id === state.currentId;
        r.classList.toggle("is-current", isCur);
        r.classList.toggle("is-playing", isCur && playing);
    });
    $$(".quick[data-open-track], .card[data-open-track]").forEach(function (q) {
        q.classList.toggle("is-playing", playing && parseInt(q.dataset.openTrack, 10) === state.currentId);
    });
    $$(".quick[data-route]").forEach(function (q) {
        const r = q.dataset.route;
        q.classList.toggle("is-playing", playing && ((r === "liked" && state.queueName === "liked") || (r !== "liked" && state.queueName === "album" && !!state.currentId)));
    });
    $$("[data-like]").forEach(function (b) {
        const on = state.liked.has(parseInt(b.dataset.like, 10));
        b.classList.toggle("is-on", on);
        b.innerHTML = icon(on ? "heartFill" : "heart", b.classList.contains("big") ? 26 : 18);
        b.setAttribute("aria-label", on ? "Supprimer des Titres likés" : "Ajouter aux Titres likés");
    });
    $$("[data-like-all]").forEach(function (b) {
        const all = TRACKS.every((t) => state.liked.has(t.id));
        b.classList.toggle("is-on", all);
        b.innerHTML = icon(all ? "check" : "plus", 22);
    });
    $$("[data-follow]").forEach(function (b) {
        b.textContent = state.following ? "Abonné(e)" : "Suivre";
        b.classList.toggle("is-on", state.following);
    });
    $$('[data-action="shuffle"]').forEach((b) => b.classList.toggle("is-on", state.shuffle));
    $$('[data-action="repeat"]').forEach(function (b) {
        b.classList.toggle("is-on", state.repeat > 0);
        b.innerHTML = icon(state.repeat === 2 ? "repeatOne" : "repeat", b.closest(".np-controls") ? 24 : 20);
        b.setAttribute("aria-label", ["Activer la répétition", "Répéter un titre", "Désactiver la répétition"][state.repeat]);
    });
    $$(".lib-item").forEach(function (li) {
        const ctx = li.dataset.libCtx;
        const route = li.dataset.libRoute;
        li.classList.toggle("is-playing", !!ctx && playing && ctxActive(ctx) && route !== "artist");
        li.classList.toggle("is-active", !!route && route === state.route);
    });
    $("#btn-np").classList.toggle("is-on", state.npOpen);
    $("#btn-lyrics").classList.toggle("is-on", state.route === "lyrics");
    $("#btn-sound").classList.toggle("is-on", Sound.enabled);
    if (playing && state.currentId) Sound.play(state.currentId); else Sound.pause();
    document.body.classList.toggle("is-playing", playing);

    const t = byId(state.currentId);
    document.title = t && playing ? plain(t.title) + " • " + ARTIST.name : "Sebastian Mora — Portfolio";
    if (state.npOpen) renderNext();
}

/* ---------------------------------------------------------------------
   13. DÉFILEMENT (topbar dynamique)
--------------------------------------------------------------------- */
function onScroll() {
    const y = main.scrollTop;
    const hero = $(".hero, .artist-hero", view);
    const limit = hero ? hero.offsetHeight - 40 : 9999;
    $("#topbar-bg").style.opacity = Math.min(1, y / (hero ? limit : 120));
    $("#topbar").classList.toggle("show-sticky", !!hero && y > limit);
    const bg = $(".artist-hero-bg", view);
    if (bg) bg.style.transform = "translateY(" + y * 0.35 + "px) scale(" + (1 + y / 2500) + ")";
}

/* ---------------------------------------------------------------------
   14. ÉVÉNEMENTS
--------------------------------------------------------------------- */
function onActivate(e) {
    const t = e.target;

    if (t.closest("#ctx-menu")) {
        const mi = t.closest("[data-mi]");
        if (mi) {
            const item = $("#ctx-menu")._items[parseInt(mi.dataset.mi, 10)];
            closeMenu();
            if (item.run) { e.preventDefault(); item.run(); }
        }
        return;
    }
    closeMenu();

    if (t.closest("#recap")) {
        if (t.closest("[data-recap-close]")) closeRecap();
        else if (t.closest("[data-recap-prev]")) showSlide(recap.i - 1);
        else if (t.closest("[data-recap-next]")) showSlide(recap.i + 1);
        else if (t.closest("[data-recap-play]")) { closeRecap(); go("album"); if (!state.playing) playCtx("album"); }
        return;
    }

    if (t.closest("[data-recap]")) { e.preventDefault(); openRecap(); return; }

    const ly = t.closest(".ly-line");
    if (ly && state.lyr) {
        state.elapsed = state.lyr.starts[parseInt(ly.dataset.i, 10)] + 0.01;
        userScrollTs = 0;
        if (!state.playing) togglePlay();
        renderProgress(true);
        updateLyrics();
        return;
    }

    if (t.closest(".lightbox")) { closeLightbox(); return; }

    const like = t.closest("[data-like]");
    if (like) { e.preventDefault(); e.stopPropagation(); toggleLike(parseInt(like.dataset.like, 10)); return; }

    if (t.closest("[data-like-all]")) { likeAll(); return; }
    if (t.closest("[data-follow]")) { toggleFollow(); return; }

    const action = t.closest("[data-action]");
    if (action) {
        const a = action.dataset.action;
        if (a === "shuffle") { state.shuffle = !state.shuffle; store.set("shuffle", state.shuffle); toast(state.shuffle ? "Lecture aléatoire activée" : "Lecture aléatoire désactivée"); }
        if (a === "repeat") { state.repeat = (state.repeat + 1) % 3; store.set("repeat", state.repeat); }
        if (a === "prev") prev();
        if (a === "next") next(false);
        sync();
        return;
    }

    if (t.closest("[data-play-toggle]")) { togglePlay(); return; }

    const ctx = t.closest("[data-play-ctx]");
    if (ctx) { e.preventDefault(); e.stopPropagation(); playCtx(ctx.dataset.playCtx); return; }

    const menuBtn = t.closest("[data-track-menu], [data-menu]");
    if (menuBtn) {
        e.stopPropagation();
        const r = menuBtn.getBoundingClientRect();
        const items = menuBtn.dataset.trackMenu ? trackMenuItems(parseInt(menuBtn.dataset.trackMenu, 10)) : pageMenuItems(menuBtn.dataset.menu);
        openMenu(r.left, r.bottom + 6, items);
        return;
    }

    const lb = t.closest(".rich img, [data-lightbox]");
    if (lb && lb.tagName === "IMG") { openLightbox(lb.src, lb.alt); return; }

    const proj = t.closest(".project-header-click");
    if (proj) { proj.parentElement.classList.toggle("open"); return; }

    const row = t.closest(".track-row");
    if (row) {
        const id = parseInt(row.dataset.id, 10);
        const q = row.dataset.queue || "album";
        if (id === state.currentId && state.queueName === q) {
            if (t.closest(".col-num")) togglePlay();
            else { fillNowPlaying(byId(id)); openNP(); if (!state.playing) togglePlay(); }
        } else {
            selectTrack(id, q);
        }
        return;
    }

    const open = t.closest("[data-open-track]");
    if (open) { selectTrack(parseInt(open.dataset.openTrack, 10), "album"); return; }

    const na = t.closest("[data-unavailable]");
    if (na) { toast("« " + na.dataset.unavailable + " » n'est pas dans ce portfolio… mais PORTFOLIO, oui 😉"); return; }

    const route = t.closest("[data-route]");
    if (route) { e.preventDefault(); go(route.dataset.route); if (window.innerWidth <= 820 && state.npOpen && route.closest("#np")) closeNP(); return; }

    const chip = t.closest("#lib-chips .chip");
    if (chip) { state.libFilter = state.libFilter === chip.dataset.filter ? null : chip.dataset.filter; renderLibrary(); sync(); return; }
}

document.addEventListener("DOMContentLoaded", function () {
    // Icônes statiques
    $$("[data-icon]").forEach(function (el) {
        const size = el.closest(".pl-buttons, .pl-right") ? 20 : el.closest(".mobile-nav, .sb-nav") ? 24 : 22;
        el.innerHTML = icon(el.dataset.icon, size);
    });

    document.addEventListener("click", onActivate);

    // Accessibilité clavier : Entrée / Espace sur les éléments role=link/button non natifs
    document.addEventListener("keydown", function (e) {
        const el = e.target;
        if ((e.key === "Enter" || e.key === " ") && el.matches && el.matches('[role="link"], [role="button"]:not(button), .lib-item')) {
            e.preventDefault();
            onActivate({ target: el, preventDefault: function () {}, stopPropagation: function () {} });
        }
    });

    // Raccourcis globaux
    document.addEventListener("keydown", function (e) {
        const tag = (e.target.tagName || "").toLowerCase();
        const typing = tag === "input" || tag === "textarea";
        if (recap.open) {
            if (e.key === "Escape") closeRecap();
            else if (e.key === "ArrowRight") showSlide(recap.i + 1);
            else if (e.key === "ArrowLeft") showSlide(recap.i - 1);
            else if (e.key === " ") { e.preventDefault(); $("#recap").classList.toggle("paused"); }
            return;
        }
        if (e.key === "Escape") {
            closeMenu();
            if ($("#lightbox").classList.contains("show")) closeLightbox();
            else if (typing) e.target.blur();
            else if (state.npOpen) closeNP();
            return;
        }
        if (typing) return;
        if (e.key === " " && !e.target.closest("button, a, [role]")) { e.preventDefault(); togglePlay(); }
        else if (e.key === "ArrowRight" && (e.ctrlKey || e.metaKey || e.shiftKey)) { e.preventDefault(); next(false); }
        else if (e.key === "ArrowLeft" && (e.ctrlKey || e.metaKey || e.shiftKey)) { e.preventDefault(); prev(); }
        else if (e.key === "/" || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) { e.preventDefault(); go("search"); }
        else if (e.key.toLowerCase() === "l" && !e.ctrlKey && !e.metaKey && state.currentId) toggleLike(state.currentId);
        else if (e.key.toLowerCase() === "m" && !e.ctrlKey && !e.metaKey) $("#btn-mute").click();
    });

    // Clic droit sur un titre = menu contextuel
    document.addEventListener("contextmenu", function (e) {
        const row = e.target.closest(".track-row");
        if (!row) return;
        e.preventDefault();
        openMenu(e.clientX, e.clientY, trackMenuItems(parseInt(row.dataset.id, 10)));
    });

    window.addEventListener("resize", closeMenu);
    main.addEventListener("scroll", function () { closeMenu(); onScroll(); }, { passive: true });

    $("#nav-back").addEventListener("click", () => history.back());
    $("#nav-fwd").addEventListener("click", () => history.forward());
    $("#np-close").addEventListener("click", closeNP);
    $("#np-collapse").addEventListener("click", closeNP);
    $("#btn-np").addEventListener("click", toggleNP);
    $("#pl-open").addEventListener("click", toggleNP);
    $(".pl-text").addEventListener("click", function (e) { if (window.innerWidth <= 820 && !e.target.closest("a")) toggleNP(); });
    $("#btn-mute").addEventListener("click", function () {
        if (state.muted || state.volume === 0) { state.muted = false; if (state.volume === 0) state.volume = 0.5; }
        else state.muted = true;
        renderVolume();
        Sound.applyVolume();
    });

    let searchTimer;
    $("#search-input").addEventListener("input", function () {
        if (state.route !== "search") go("search");
        clearTimeout(searchTimer);
        searchTimer = setTimeout(renderSearchResults, 80);
    });
    $("#search-input").addEventListener("focus", function () { if (state.route !== "search") go("search"); });

    $$("[data-progress]").forEach((el) => { if (!el.classList.contains("pl-mobile-progress")) makeSlider(el, seek); });
    makeSlider($("#volume"), setVolume);

    window.addEventListener("hashchange", render);
    $("#btn-sound").addEventListener("click", toggleSound);
    $("#btn-lyrics").addEventListener("click", function () { if (state.route === "lyrics") history.back(); else go("lyrics"); });
    ["wheel", "touchmove"].forEach((ev) => main.addEventListener(ev, () => { userScrollTs = Date.now(); }, { passive: true }));
    bindRecap();

    // Écran de démarrage (une fois par session)
    const splash = $("#splash");
    let seen = false;
    try { seen = sessionStorage.getItem("pf_splash") === "1"; sessionStorage.setItem("pf_splash", "1"); } catch (err) { /* ignore */ }
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) splash.remove();
    else {
        setTimeout(() => splash.classList.add("hide"), 1300);
        setTimeout(() => splash.remove(), 2100);
        splash.addEventListener("click", () => splash.classList.add("hide"));
    }
    if (window.ResizeObserver) new ResizeObserver(fitHeroTitle).observe(view);

    renderVolume();
    render();
    requestAnimationFrame(tick);
});
