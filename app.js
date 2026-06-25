let currentTrackId = null;
let isPlaying = false;
let progressInterval = null;
let currentProgressPercent = 0;

const trackData = {
    1: { title: "PARCOURS", sub: "Mon expérience, formations, qui suis-je?", duration: "3:57", description: "getParcoursDescription", bgImage: "" },
    2: { title: "ENTREPRISE", sub: "Alternant chez Everial", duration: "3:44", description: "getEntrepriseDescription", bgImage: "Images/entreprise.png" },
    3: { title: "COMPÉTENCES", sub: "Tech stack, langages et outils maîtrisés", duration: "3:36", description: "getCompetencesDescription", bgImage: "Images/ImageCompetences.png" },
    4: { title: "PROJETS", sub: "Projets d'école (Kuzco, Kahoot, Tier List) et Everial", duration: "3:33", description: "getProjetsDescription", bgImage: "Images/ImageProjets.png" },
    5: { title: "VEILLE TECHNO", sub: "Sujets d'actualité, articles et innovations", duration: "3:20", description: "getVeilleDescription", bgImage: "Images/blockchain.png" },
    6: { title: "TABLEAU DE SYNTHÈSE", sub: "Document officiel E5 - Réalisations professionnelles", duration: "3:05", description: "getSyntheseDescription", bgImage: "NONE" },
    7: { title: "CV", sub: "Mon Curriculum Vitae", duration: "1:45", description: "getCvDescription", bgImage: "Images/ImageC.png" }
};

const descriptionGetters = {
    getParcoursDescription: getParcoursDescription,
    getEntrepriseDescription: getEntrepriseDescription,
    getCompetencesDescription: getCompetencesDescription,
    getProjetsDescription: getProjetsDescription,
    getVeilleDescription: getVeilleDescription,
    getSyntheseDescription: getSyntheseDescription,
    getCvDescription: getCvDescription
};

const homeView = document.getElementById("home-view");
const albumView = document.getElementById("album-view");
const sidebarPanel = document.getElementById("sidebarPanel");
const sidebarTitle = document.getElementById("sidebarTitle");
const sidebarSubTitle = document.getElementById("sidebarSubTitle");
const sidebarDescription = document.getElementById("sidebarDescription");
const playerCurrentTitle = document.getElementById("player-current-title");
const playerCurrentSub = document.getElementById("player-current-sub");
const playerProgress = document.getElementById("player-progress");
const progressTimeCurrent = document.getElementById("progress-time-current");
const progressTimeTotal = document.getElementById("progress-time-total");
const playerPlayIcon = document.getElementById("player-play-icon");
const masterPlayIcon = document.getElementById("master-play-icon");

function navigateToAlbum() {
    homeView.style.display = "none";
    albumView.style.display = "block";
    window.scrollTo(0, 0);
}

function navigateToHome() {
    closeSidebar();
    albumView.style.display = "none";
    homeView.style.display = "block";
    window.scrollTo(0, 0);
}

function restoreAlbumView() {
    if (currentTrackId) {
        navigateToAlbum();
    }
}

function selectTrack(id) {
    const track = trackData[id];
    currentTrackId = id;
    isPlaying = true;

    const description = descriptionGetters[track.description]();
    openSidebar(track.title, track.sub, description, track.bgImage);

    playerCurrentTitle.innerText = track.title;
    playerCurrentSub.innerText = "Sebastian Mora \u2022 Portfolio";
    progressTimeTotal.innerText = track.duration;

    resetProgressBar();
    updatePlayButtons(true);
}

function openSidebar(title, sub, description, bgImage) {
    sidebarTitle.innerText = title;
    sidebarSubTitle.innerText = sub;
    sidebarDescription.innerHTML = description;

    const sidebarCard = document.querySelector(".sidebar-card");

    if (bgImage === "NONE") {
        sidebarCard.style.backgroundImage = "linear-gradient(to bottom, #282828 0%, #1c1c1c 100%)";
    } else if (bgImage && bgImage !== "") {
        sidebarCard.style.backgroundImage = "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, #1c1c1c 100%), url('" + bgImage + "')";
    } else {
        sidebarCard.style.backgroundImage = "linear-gradient(to bottom, #434343 0%, #1c1c1c 100%)";
    }
    sidebarPanel.classList.add("active");
}

function closeSidebar() {
    sidebarPanel.classList.remove("active");
}

function togglePlayPause() {
    if (!currentTrackId) {
        navigateToAlbum();
        document.getElementById("track-1").click();
        return;
    }
    isPlaying = !isPlaying;
    updatePlayButtons(isPlaying);

    if (isPlaying) {
        startProgressBar();
    } else {
        clearInterval(progressInterval);
    }
}

function togglePlayPauseMaster() {
    if (currentTrackId) {
        togglePlayPause();
    } else {
        document.getElementById("track-1").click();
    }
}

function updatePlayButtons(playing) {
    const pauseSVG = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    const playSVG = '<path d="M8 5v14l11-7z"/>';

    if (playing) {
        playerPlayIcon.innerHTML = pauseSVG;
        masterPlayIcon.innerHTML = pauseSVG;
    } else {
        playerPlayIcon.innerHTML = playSVG;
        masterPlayIcon.innerHTML = playSVG;
    }
}

function changeTrack(direction) {
    if (!currentTrackId) return;
    let nextId = currentTrackId + direction;

    if (nextId >= 1 && nextId <= 7) {
        const trackElement = document.getElementById("track-" + nextId);
        if (trackElement) {
            trackElement.click();
        }
    }
}

function resetProgressBar() {
    clearInterval(progressInterval);
    currentProgressPercent = 0;
    playerProgress.style.width = "0%";
    progressTimeCurrent.innerText = "0:00";
    startProgressBar();
}

function startProgressBar() {
    clearInterval(progressInterval);
    progressInterval = setInterval(function () {
        if (currentProgressPercent < 100) {
            currentProgressPercent += 0.5;
            playerProgress.style.width = currentProgressPercent + "%";

            const track = trackData[currentTrackId];
            const totalStr = track.duration.split(":");
            const totalSeconds = parseInt(totalStr[0]) * 60 + parseInt(totalStr[1]);
            const currentSeconds = Math.floor((currentProgressPercent / 100) * totalSeconds);
            const mins = Math.floor(currentSeconds / 60);
            const secs = currentSeconds % 60;
            progressTimeCurrent.innerText = mins + ":" + (secs < 10 ? "0" : "") + secs;
        } else {
            clearInterval(progressInterval);
            changeTrack(1);
        }
    }, 500);
}

function toggleProjectGallery(event, element) {
    event.stopPropagation();
    element.classList.toggle("open");
}

function getParcoursDescription() {
    return '<strong>Pr\u00e9sentation</strong><br>Je m\'appelle Sebastian Mora, j\'ai 24 ans et je suis actuellement \u00e9tudiant en BTS SIO option SLAM (Solution Logicielle et application M\u00e9tiers) au sein de l\'\u00e9cole Nexa Digital School.<br><br><strong>Mon Parcours & R\u00e9orientation</strong><br>Apr\u00e8s un Baccalaur\u00e9at SES (option Math\u00e9matiques), j\'ai valid\u00e9 deux ann\u00e9es d\'\u00e9tudes en psychologie. Ce premier cursus universitaire m\'a permis de d\u00e9velopper une grande rigueur, un esprit d\'analyse aff\u00faut\u00e9, ainsi qu\'une forte sensibilit\u00e9 \u00e0 la compr\u00e9hension des besoins utilisateurs (UX) \u2014 des qualit\u00e9s qui s\'av\u00e8rent aujourd\'hui \u00eatre de v\u00e9ritables atouts dans l\'informatique.<br><br>Souhaitant m\'orienter vers un domaine plus technique et concret, j\'ai choisi de me r\u00e9orienter avec passion vers le d\u00e9veloppement d\'applications.<br><br><strong>Mon Projet Professionnel</strong><br>Ce qui m\'anime particuli\u00e8rement dans le d\u00e9veloppement de solutions logicielles, c\'est la r\u00e9solution de probl\u00e8mes complexes et le fait de concevoir des outils concrets et functionalit\u00e9s. C\'est un domaine stimulant dans lequel je me projette pleinement.';
}

function getCompetencesDescription() {
    return '<strong>D\u00e9veloppement Web :</strong> HTML, CSS.<br><strong>Programmation :</strong> C#, C++.<br><strong>Bases de donn\u00e9es :</strong> MySQL.<br><strong>Outils & M\u00e9thodes :</strong> Git, VS Code, Linux, N8N.';
}

function getProjetsDescription() {
    return '<strong>Projets r\u00e9alis\u00e9s \u00e0 l\'\u00c9cole (BTS SIO SLAM)</strong><br>' +
        'D\u00e9couvrez mes r\u00e9alisations interactives d\u00e9velopp\u00e9es au cours de ma formation :<br><br>' +
        '<div class="projects-container">' +
            '<div class="project-block" onclick="toggleProjectGallery(event, this)">' +
                '<div class="project-header-click"><span class="project-block-title"> KUZCO (Syst\u00e8me de filtre lama)</span>' +
                '<svg class="project-arrow" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></div>' +
                '<div class="project-gallery-flexbox">' +
                    '<div style="width:100%; color:#b3b3b3; font-size:13px; margin-bottom:10px; line-height:1.5;">' +
                        '<strong>Description :</strong> Projet de d\u00e9veloppement web bas\u00e9 sur les technologies HTML5, CSS3 et JavaScript. L\'objectif principal \u00e9tait de concevoir une application capable de r\u00e9pliquer de mani\u00e8re dynamique un filtre visuel interactif (type Snapchat) appliquant des \u00e9l\u00e9ments de lama sur un flux d\'image.<br>' +
                        '<strong>Comp\u00e9tences cl\u00e9s :</strong> Int\u00e9gration de maquettes, gestion du positionnement absolu/relatif pour superposer les \u00e9l\u00e9ments graphiques et manipulation dynamique du DOM en JavaScript.' +
                    '</div>' +
                    '<div class="project-photo-item"><img src="Images/KUZCO.png" alt="Kuzco 1"></div>' +
                '</div>' +
            '</div>' +
            '<div class="project-block" onclick="toggleProjectGallery(event, this)">' +
                '<div class="project-header-click"><span class="project-block-title">KAHOOT (Application dynamique de Quiz)</span>' +
                '<svg class="project-arrow" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></div>' +
                '<div class="project-gallery-flexbox">' +
                    '<div style="width:100%; color:#b3b3b3; font-size:13px; margin-bottom:10px; line-height:1.5;">' +
                        '<strong>Description :</strong> D\u00e9veloppement \u00e9ducatif d\'une application de type "Kahoot" en C# (Windows Forms ou WPF) afin d\'appr\u00e9hender les concepts fondamentaux de la programmation orient\u00e9e objet (POO) et la cr\u00e9ation d\'interfaces graphiques. Conception et manipulation des composants graphiques (TextBox, Labels, Buttons).<br>' +
                        '<strong>Livrables :</strong> Code source C#<br>' +
                        '<strong>Comp\u00e9tences cl\u00e9s acquises :</strong> Manipulation des variables, gestion de l\'environnement graphique (TextBox, Labels, Buttons).' +
                    '</div>' +
                    '<div class="project-photo-item"><img src="Images/Kahoot.png" alt="Kahoot 1"></div>' +
                    '<div class="project-photo-item"><img src="Images/Kahoot2.png" alt="Kahoot 2"></div>' +
                '</div>' +
            '</div>' +
            '<div class="project-block" onclick="toggleProjectGallery(event, this)">' +
                '<div class="project-header-click"><span class="project-block-title">TIER LIST (G\u00e9n\u00e9rateur personnalis\u00e9)</span>' +
                '<svg class="project-arrow" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></div>' +
                '<div class="project-gallery-flexbox">' +
                    '<div style="width:100%; color:#b3b3b3; font-size:13px; margin-bottom:10px; line-height:1.5;">' +
                        '<strong>Description :</strong> Conception et d\u00e9veloppement front-end d\'une application web de type "Tier List" permettant la classification visuelle d\'\u00e9l\u00e9ments par glisser-d\u00e9poser (Drag and Drop).<br>' +
                        '<strong>Comp\u00e9tences cl\u00e9s acquises :</strong> Fonctionnalit\u00e9s de glisser-d\u00e9poser (Drag and Drop), structuration et alignement CSS avec Flexbox.' +
                    '</div>' +
                    '<div class="project-photo-item"><img src="Images/TierList.png" alt="Tier List 1"></div>' +
                '</div>' +
            '</div>' +
            '<div class="project-block" onclick="toggleProjectGallery(event, this)">' +
                '<div class="project-header-click"><span class="project-block-title"> EVERIAL (Migration &amp; \u00c9crans Xbound)</span>' +
                '<svg class="project-arrow" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></div>' +
                '<div class="project-gallery-flexbox">' +
                    '<div class="project-photo-item">' +
                        '<img src="Images/everial1.png" alt="Everial 1">' +
                        '<div style="color: #b3b3b3; font-size: 11px; margin-top: 5px; text-align: center;">Mont\u00e9e d\'une nouvelle version d\'application</div>' +
                    '</div>' +
                    '<div class="project-photo-item">' +
                        '<img src="Images/everial2.png" alt="Everial 2">' +
                        '<div style="color: #b3b3b3; font-size: 11px; margin-top: 5px; text-align: center;">\u00c9cran pour l\'\u00e9quipe de saisie</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
}

function getCvDescription() {
    return '<strong>Aper\u00e7u du document</strong><br><br>' +
        '<img src="Images/ImageCV.png" alt="Aper\u00e7u CV" style="width:100%; border-radius:6px; margin-bottom:15px; border:1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 4px 15px rgba(0,0,0,0.3);">' +
        '<a href="Images/Mon_CV.pdf" target="_blank" style="display: inline-flex; align-items: center; background-color: #1ed760; color: black; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-size: 14px; margin-top: 10px; transition: transform 0.2s;" onmouseover="this.style.transform=\'scale(1.04)\'" onmouseout="this.style.transform=\'scale(1)\'">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="black" style="margin-right:8px;">' +
                '<path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"/>' +
            '</svg>OUVRIR LE DOCUMENT COMPLET (PDF)' +
        '</a>';
}

function getVeilleDescription() {
    return '<strong>Sujet N\u00b01 : L\'introduction en bourse des g\u00e9ants de l\'IA</strong><br><br>' +
        'Le passage d\'une \u00e8re d\'exp\u00e9rimentation quasi-scientifique \u00e0 celle d\'une logique de march\u00e9 traditionnelle dict\u00e9e par Wall Street. Selon moi, l\'introduction en bourse d\'OpenAI et d\'Anthropic repr\u00e9sente un double d\u00e9fi pour les directions informatiques (DSI). D\'un c\u00f4t\u00e9, la pression des actionnaires va in\u00e9vitablement rationaliser l\'offre \u00e0 travers des hausses de prix et des mod\u00e8les contractuels plus rigides. De l\'autre, cette maturit\u00e9 forc\u00e9e offre une opportunit\u00e9 majeure : elle va pousser les entreprises \u00e0 structurer leur gouvernance de l\'IA.<br><br>' +
        '<a href="https://www.lemondeinformatique.fr/actualites/lire-les-ipo-d-openai-et-anthropic-une-mauvaise-nouvelle-pour-les-budgets-it-100414.html" target="_blank" style="display: inline-flex; align-items: center; background-color: #1ed760; color: black; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-size: 14px; margin-top: 5px; margin-bottom: 25px; transition: transform 0.2s;" onmouseover="this.style.transform=\'scale(1.04)\'" onmouseout="this.style.transform=\'scale(1)\'">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="black" style="margin-right:8px;">' +
                '<path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>' +
            '</svg>LIRE L\'ARTICLE COMPL\u00c9MENTAIRE' +
        '</a>' +
        '<hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;">' +
        '<strong>Sujet N\u00b02 : Campagne TrapDoor et s\u00e9curit\u00e9 de la Supply Chain</strong><br><br>' +
        'La campagne TrapDoor illustre une \u00e9volution inqui\u00e9tante et majeure des attaques sur la supply chain (cha\u00eene d\'approvisionnement logicielle). Ce que je trouve particuli\u00e8rement marquant, c\'est que les cybercriminels ne se contentent plus de dissimuler du code malveillant ; ils con\u00e7oivent d\u00e9sormais une ing\u00e9nierie sociale technique en manipulant les fichiers de configuration des assistants de codage IA.<br><br>' +
        'En militarisant (ou en d\u00e9tournant) les outils m\u00eames cens\u00e9s am\u00e9liorer la productivit\u00e9 des d\u00e9veloppeurs, les attaquants ouvrent un nouveau front de vuln\u00e9rabilit\u00e9. Cela montre \u00e0 quel point la s\u00e9curit\u00e9 des environnements devient de plus en plus complexe \u00e0 mesure que les technologies \u00e9voluent.<br><br>' +
        '<a href="https://www.cryptotimes.io/2026/05/25/trapdoor-malware-hits-npm-pypi-crates-io-steals-crypto-wallets-ssh-keys/" target="_blank" style="display: inline-flex; align-items: center; background-color: #1ed760; color: black; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-size: 14px; margin-top: 5px; margin-bottom: 25px; transition: transform 0.2s;" onmouseover="this.style.transform=\'scale(1.04)\'" onmouseout="this.style.transform=\'scale(1)\'">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="black" style="margin-right:8px;">' +
                '<path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>' +
            '</svg>LIRE L\'ARTICLE COMPL\u00c9MENTAIRE' +
        '</a>' +
        '<hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;">' +
        '<strong>Sujet N\u00b03 : Fuite de donn\u00e9es Capifrance &amp; Architecture Zero Trust</strong><br><br>' +
        'Le piratage de Capifrance rappelle une r\u00e9alit\u00e9 brutale en d\u00e9veloppement : la s\u00e9curit\u00e9 d\'une plateforme est aussi forte que son maillon le plus faible. Ici, l\'attaquant n\'a pas exploité une faille de code complexe, mais a simplement usurp\u00e9 un compte l\u00e9gitime.<br><br>' +
        'En tant que d\u00e9veloppeur, cela renforce ma conviction que la protection des donn\u00e9es ne s\'arr\u00eate pas au chiffrement des bases de donn\u00e9es. Nous devons imp\u00e9rativement int\u00e9grer des architectures "Zero Trust", g\u00e9n\u00e9raliser l\'authentification multifacteur (MFA) et mettre en place des syst\u00e8mes de d\u00e9tection d\'anomalies comportementales (comme le t\u00e9l\u00e9chargement anormal de fichiers JSON volumineux). La r\u00e9currence de ces attaques dans le secteur immobilier prouve que la s\u00e9curit\u00e9 doit \u00eatre pens\u00e9e d\u00e8s la premi\u00e8re ligne de code (Security by Design) et non comme une option secondaire.<br><br>' +
        '<a href="https://www.clubic.com/actualite-616375-le-reseau-de-conseillers-immobiliers-capifrance-victime-d-une-cyberattaque-pres-de-800-000-personnes-concernees.html" target="_blank" style="display: inline-flex; align-items: center; background-color: #1ed760; color: black; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-size: 14px; margin-top: 5px; transition: transform 0.2s;" onmouseover="this.style.transform=\'scale(1.04)\'" onmouseout="this.style.transform=\'scale(1)\'">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="black" style="margin-right:8px;">' +
                '<path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>' +
            '</svg>LIRE L\'ARTICLE COMPL\u00c9MENTAIRE' +
        '</a>';
}

function getEntrepriseDescription() {
    return '<strong>Fiche d\'identit\u00e9 de l\'entreprise</strong><br><br>' +
        '\u2022 <strong>Nom :</strong> EVERIAL<br>' +
        '\u2022 <strong>Si\u00e8ge social :</strong> Rillieux-la-Pape (pr\u00e8s de Lyon)<br>' +
        '\u2022 <strong>Chiffre d\'affaires :</strong> 51 Millions d\'euros<br>' +
        '\u2022 <strong>Taille :</strong> 600 collaborateurs<br>' +
        '\u2022 <strong>Pr\u00e9sence :</strong> 12 sites en France et 4 filiales \u00e0 l\'international (Canada, Suisse, Maurice, Monaco)<br><br>' +
        '<hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 15px 0;">' +
        '<strong>Historique et \u00c9volution de la structure</strong><br><br>' +
        'Historiquement centr\u00e9e sur l\'archivage physique de documents d\'entreprises, Everial a op\u00e9r\u00e9 une transition majeure vers le digital.<br><br>' +
        '<strong>La Cha\u00eene de D\u00e9mat\u00e9rialisation :</strong><br>' +
        'Aujourd\'hui, l\'entreprise s\'appuie sur une cha\u00eene de d\u00e9mat\u00e9rialisation compl\u00e8te et automatis\u00e9e, couvrant tout le processus depuis la r\u00e9ception du document physique ou num\u00e9rique jusqu\'\u00e0 sa livraison finale au client au format digital.<br><br>' +
        '<strong>Technologies utilis\u00e9es :</strong><br>' +
        'Pour optimiser ces flux, Everial int\u00e8gre des outils de reconnaissance automatique (LAD/RAD/OCR) capables d\'extraire intelligemment les donn\u00e9es textuelles, comme les champs d\'une facture (montants, dates, fournisseurs).<br><br>' +
        '<strong>Contr\u00f4le Qualit\u00e9 :</strong><br>' +
        'Afin de garantir une fiabilit\u00e9 maximale, une \u00e9quipe d\u00e9di\u00e9e \u00e0 la saisie et \u00e0 la v\u00e9rification valide et corrige manuellement les champs ins\u00e9r\u00e9s par les outils automatiques avant l\'envoi final.' +
        '<strong>Secteur d\'activit\u00e9 et Logiciels Propri\u00e9taires</strong><br><br>' +
        'EVERIAL est un acteur majeur de la gestion documentaire, de l\'archivage et de la d\u00e9mat\u00e9rialisation. \u00c9diteur de logiciels (EVERIAL Software), l\'entreprise con\u00e7oit ses propres solutions m\u00e9tiers "phygitales" :<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;- <em>Wizidee</em> : D\u00e9di\u00e9 \u00e0 la capture intelligente de documents.<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;- <em>Enoxa</em> : Solution pour la Gestion \u00c9lectronique de Documents (GED).<br><br>' +
        '<hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 15px 0;">' +
        '<strong>Mon contexte d\'alternance et fonctions exerc\u00e9es</strong><br><br>' +
        'Dans le cadre de mon parcours en BTS SIO option SLAM, j\'exerce les fonctions de Technicien d\'exploitation informatique au sein de la direction technique d\'Everial. Mon r\u00f4le est d\'assurer le bon fonctionnement et la continuit\u00e9 des cha\u00eenes de d\u00e9mat\u00e9rialisation et de traitement de donn\u00e9es (flux de documents physiques num\u00e9ris\u00e9s, e-mails, pi\u00e8ces justificatives).<br><br>' +
        '<strong>Mes Missions principales :</strong><br><br>' +
        '\u2022 <strong>Supervision et Exploitation :</strong> Surveillance quotidienne des flux et des traitements documentaires automatis\u00e9s. Identification imm\u00e9diate des anomalies ou des blocages dans la cha\u00eene de d\u00e9mat\u00e9rialisation (rejets de lecture automatique, erreurs d\'extraction de donn\u00e9es via l\'IA, probl\u00e8mes d\'interop\u00e9rabilit\u00e9).<br><br>' +
        '\u2022 <strong>Analyse d\'incidents (Debugging) :</strong> Diagnostic approfondi des pannes. Pour cela, je dispose des acc\u00e8s n\u00e9cessaires pour analyser le code source des scripts d\'exploitation et des applications logicielles d\'Everial (comme les briques li\u00e9es \u00e0 la GED ou \u00e0 la capture de documents).<br><br>' +
        '\u2022 <strong>Maintenance corrective et \u00c9volution :</strong> R\u00e9solution des incidents par la modification et l\'optimisation du code existant. Je corrige les bugs logiciels ou j\'adapte les scripts pour fluidifier le traitement des donn\u00e9es et \u00e9viter la r\u00e9currence des erreurs.<br><br>' +
        '<hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 15px 0;">';
}

function getSyntheseDescription() {
    return '<strong>Aper\u00e7u du document</strong><br><br>' +
        '<img src="Images/tableau-e5.png" alt="Aper\u00e7u Tableau de Synth\u00e8se" style="width:100%; border-radius:4px; margin-bottom:15px; border:1px solid #333;">' +
        '<a href="Images/MORA Sebastian - E5---------.pdf" target="_blank" style="display: inline-flex; align-items: center; background-color: #1ed760; color: black; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-size: 14px; margin-top: 10px; transition: transform 0.2s;" onmouseover="this.style.transform=\'scale(1.04)\'" onmouseout="this.style.transform=\'scale(1)\'">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="black" style="margin-right:8px;">' +
                '<path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"/>' +
            '</svg>OUVRIR LE DOCUMENT COMPLET (PDF)' +
        '</a>';
}

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".track-row").forEach(function (row) {
        row.addEventListener("click", function () {
            var id = parseInt(this.getAttribute("data-track-id"));
            selectTrack(id);
        });
        row.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                var id = parseInt(this.getAttribute("data-track-id"));
                selectTrack(id);
            }
        });
    });

    document.querySelectorAll(".navigate-to-album").forEach(function (el) {
        el.addEventListener("click", function () {
            navigateToAlbum();
        });
    });

    document.getElementById("btn-back-home").addEventListener("click", function () {
        navigateToHome();
    });

    document.getElementById("btn-restore-album").addEventListener("click", function () {
        restoreAlbumView();
    });

    document.getElementById("btn-restore-player").addEventListener("click", function () {
        restoreAlbumView();
    });

    document.getElementById("btn-master-play").addEventListener("click", function () {
        togglePlayPauseMaster();
    });

    document.getElementById("btn-player-prev").addEventListener("click", function () {
        changeTrack(-1);
    });

    document.getElementById("btn-player-play").addEventListener("click", function () {
        togglePlayPause();
    });

    document.getElementById("btn-player-next").addEventListener("click", function () {
        changeTrack(1);
    });

    document.getElementById("btn-close-sidebar").addEventListener("click", function () {
        closeSidebar();
    });
});
