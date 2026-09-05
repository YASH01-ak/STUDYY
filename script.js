/* =========================================================
   STUDY MATE - FINAL STABLE VERSION
   Class 10 RBSE Study Portal
   ========================================================= */

"use strict";

/* =========================================================
   DATA
   ========================================================= */

const subjects = {

    "Science": [
        "Chemical Reactions and Equations",
        "Acids, Bases and Salts",
        "Metals and Non-metals",
        "Carbon and Its Compounds",
        "Life Processes",
        "Control and Coordination",
        "How do Organisms Reproduce?",
        "Heredity",
        "Light - Reflection and Refraction",
        "Electricity"
    ],

    "Social Science": [
        "The Rise of Nationalism in Europe",
        "Nationalism in India",
        "The Making of a Global World",
        "The Age of Industrialisation",
        "Print Culture and the Modern World",
        "Resources and Development",
        "Forest and Wildlife Resources",
        "Water Resources",
        "Agriculture",
        "Minerals and Energy Resources",
        "Manufacturing Industries",
        "Lifelines of National Economy",
        "Power Sharing",
        "Federalism",
        "Gender, Religion and Caste",
        "Political Parties",
        "Outcomes of Democracy",
        "Challenges to Democracy",
        "Development",
        "Sectors of the Indian Economy",
        "Money and Credit",
        "Globalisation and the Indian Economy",
        "Consumer Rights"
    ],

    "Mathematics": [
        "Real Numbers",
        "Polynomials",
        "Pair of Linear Equations in Two Variables",
        "Quadratic Equations",
        "Arithmetic Progressions",
        "Triangles",
        "Coordinate Geometry",
        "Introduction to Trigonometry",
        "Some Applications of Trigonometry",
        "Circles",
        "Areas Related to Circles",
        "Surface Areas and Volumes",
        "Statistics",
        "Probability"
    ],

    "English": [
        "A Letter to God",
        "Nelson Mandela: Long Walk to Freedom",
        "Two Stories about Flying",
        "From the Diary of Anne Frank",
        "Glimpses of India",
        "Mijbil the Otter",
        "Madam Rides the Bus",
        "The Sermon at Benares",
        "The Proposal",
        "A Triumph of Surgery",
        "The Thief's Story",
        "The Midnight Visitor",
        "A Question of Trust",
        "Footprints without Feet",
        "The Making of a Scientist",
        "The Necklace",
        "Bholi",
        "The Book That Saved the Earth"
    ],

    "Hindi": [
        "Netaji Ka Chashma",
        "Balgobin Bhagat",
        "Lakhnavi Andaaz",
        "Ek Kahani Yah Bhi",
        "Sanskriti",
        "Mata Ka Anchal",
        "Sana Sana Hath Jodi",
        "Naubatkhane Mein Ibadat",
        "Manviya Karuna Ki Divya Chamak",
        "Kartoos"
    ],

    "Sanskrit": [
        "??????????????",
        "????????????? ???",
        "???????? ?????? ?????",
        "???? ???????????",
        "??????????",
        "???????? ???????? ????",
        "???????? ??????",
        "???????",
        "??????????????",
        "????????????? ?????? ??????"
    ]
};


/* =========================================================
   SCIENCE
   ========================================================= */

const scienceData = {

"Chemical Reactions and Equations": {
points: [
"Chemical reaction",
"Combination reaction",
"Decomposition reaction",
"Displacement reaction",
"Double displacement reaction",
"Oxidation",
"Reduction",
"Redox reaction",
"Corrosion",
"Rancidity",
"Balancing chemical equations"
],
activities: [
"Observe the reaction of an iron nail with copper sulphate solution.",
"Heat copper sulphate crystals and observe the colour change.",
"Observe oxidation of copper on heating."
],
formulas: [
"2Mg + O2 -> 2MgO",
"Zn + H2SO4 -> ZnSO4 + H2",
"Fe + CuSO4 -> FeSO4 + Cu"
]
},

"Acids, Bases and Salts": {
points: [
"Acids produce H+ ions in aqueous solution.",
"Bases produce OH- ions in aqueous solution.",
"pH scale ranges from 0 to 14.",
"pH less than 7 indicates acidic nature.",
"pH equal to 7 indicates neutral nature.",
"pH greater than 7 indicates basic nature.",
"Neutralisation is the reaction between an acid and a base.",
"Baking soda is sodium hydrogen carbonate.",
"Washing soda is sodium carbonate.",
"Plaster of Paris is calcium sulphate hemihydrate."
],
activities: [
"Test common substances using litmus paper.",
"Observe reaction of an acid with a carbonate.",
"Study the pH of common substances."
],
formulas: [
"pH < 7 -> acidic",
"pH = 7 -> neutral",
"pH > 7 -> basic"
]
},

"Metals and Non-metals": {
points: [
"Metals are generally lustrous and malleable.",
"Metals are generally good conductors of heat and electricity.",
"Non-metals generally do not show metallic properties.",
"Reactivity series helps compare metal reactivity.",
"Ionic compounds are formed by transfer of electrons.",
"Roasting is heating an ore in excess air.",
"Calcination is heating an ore in limited or no air.",
"Alloys are mixtures of metals or metals with non-metals.",
"Corrosion is the gradual destruction of metals.",
"Amphoteric oxides react with both acids and bases."
],
activities: [
"Observe displacement of copper from copper sulphate by iron.",
"Compare physical properties of metals and non-metals.",
"Study methods of preventing corrosion."
]
},

"Carbon and Its Compounds": {
points: [
"Carbon has valency 4.",
"Catenation is the ability of carbon to form chains.",
"Covalent bonds are formed by sharing electrons.",
"Hydrocarbons contain carbon and hydrogen.",
"Homologous series contains compounds with the same functional group.",
"Ethanol is an alcohol.",
"Ethanoic acid is a carboxylic acid.",
"Addition reaction occurs in unsaturated compounds.",
"Substitution reaction is common in saturated hydrocarbons.",
"Soaps are generally sodium or potassium salts of fatty acids."
],
activities: [
"Study carbon chains using a molecular model.",
"Compare soap action in hard and soft water.",
"Identify functional groups from structural formulae."
],
formulas: [
"Alkanes -> CnH2n+2",
"Alkenes -> CnH2n",
"Alkynes -> CnH2n-2"
]
},

"Life Processes": {
points: [
"Nutrition",
"Photosynthesis",
"Respiration",
"Transportation",
"Excretion",
"Human digestive system",
"Human respiratory system",
"Heart",
"Blood vessels",
"Nephron"
],
activities: [
"Demonstrate starch formation in a leaf under teacher guidance.",
"Observe breathing rate before and after normal activity.",
"Study labelled models of the heart and nephron."
]
},

"Control and Coordination": {
points: [
"Neuron",
"Reflex action",
"Reflex arc",
"Brain",
"Spinal cord",
"Plant hormones",
"Tropism",
"Animal hormones",
"Endocrine glands",
"Coordination"
],
activities: [
"Observe a simple reflex response safely.",
"Observe phototropism in a plant.",
"Identify major endocrine glands on a diagram."
]
},

"How do Organisms Reproduce?": {
points: [
"Asexual reproduction",
"Sexual reproduction",
"Binary fission",
"Vegetative propagation",
"Pollination",
"Fertilisation",
"Male reproductive system",
"Female reproductive system",
"Menstrual cycle",
"Contraception"
],
activities: [
"Study diagrams of binary fission and vegetative propagation.",
"Study labelled parts of a flower.",
"Compare asexual and sexual reproduction."
]
},

"Heredity": {
points: [
"Gene",
"DNA",
"Chromosome",
"Mendel",
"Dominant trait",
"Recessive trait",
"Genotype",
"Phenotype",
"Variation",
"Sex determination"
],
activities: [
"Solve a simple monohybrid cross.",
"Prepare a Mendelian inheritance chart.",
"Study chromosome-based sex determination."
]
},

"Light - Reflection and Refraction": {
points: [
"Laws of reflection",
"Regular reflection",
"Mirror",
"Principal axis",
"Focus",
"Centre of curvature",
"Refraction",
"Lens",
"Magnification",
"Power of lens"
],
activities: [
"Trace light rays using a plane mirror.",
"Draw ray diagrams for concave and convex mirrors.",
"Observe refraction through a transparent block under teacher guidance."
],
formulas: [
"1/f = 1/v + 1/u",
"m = hi/ho = -v/u",
"P = 1/f",
"f is measured in metre when calculating lens power"
]
},

"Electricity": {
points: [
"Electric current",
"Potential difference",
"Resistance",
"Ohm's law",
"Series combination",
"Parallel combination",
"Electric power",
"Electric energy",
"Heating effect of current"
],
activities: [
"Verify Ohm's law using a low-voltage school circuit.",
"Compare series and parallel circuits.",
"Calculate electrical power from appliance ratings."
],
formulas: [
"V = IR",
"P = VI",
"P = I^2R",
"P = V^2/R",
"E = Pt",
"R(series) = R1 + R2 + R3",
"1/R(parallel) = 1/R1 + 1/R2 + 1/R3"
]
}

};


/* =========================================================
   MATHEMATICS FORMULAS
   ========================================================= */

const mathData = {

"Real Numbers": [
"Euclid division lemma: a = bq + r",
"0 <= r < b",
"HCF x LCM = product of two positive integers"
],

"Polynomials": [
"For ax^2 + bx + c, sum of zeroes = -b/a",
"For ax^2 + bx + c, product of zeroes = c/a",
"Division algorithm: p(x) = g(x)q(x) + r(x)"
],

"Pair of Linear Equations in Two Variables": [
"a1/a2 != b1/b2 -> unique solution",
"a1/a2 = b1/b2 != c1/c2 -> no solution",
"a1/a2 = b1/b2 = c1/c2 -> infinitely many solutions"
],

"Quadratic Equations": [
"ax^2 + bx + c = 0",
"x = (-b +- sqrt(b^2 - 4ac))/2a",
"D = b^2 - 4ac",
"D > 0 -> two distinct real roots",
"D = 0 -> equal real roots",
"D < 0 -> no real roots"
],

"Arithmetic Progressions": [
"an = a + (n - 1)d",
"Sn = n/2 [2a + (n - 1)d]"
],

"Triangles": [
"Basic Proportionality Theorem",
"Pythagoras theorem: hypotenuse^2 = base^2 + perpendicular^2"
],

"Coordinate Geometry": [
"Distance = sqrt((x2-x1)^2 + (y2-y1)^2)",
"Midpoint = ((x1+x2)/2, (y1+y2)/2)",
"Section formula = ((mx2+nx1)/(m+n), (my2+ny1)/(m+n))"
],

"Introduction to Trigonometry": [
"sin theta = perpendicular/hypotenuse",
"cos theta = base/hypotenuse",
"tan theta = perpendicular/base",
"sin^2 theta + cos^2 theta = 1",
"1 + tan^2 theta = sec^2 theta",
"1 + cot^2 theta = cosec^2 theta"
],

"Some Applications of Trigonometry": [
"tan theta = height/base",
"Use angle of elevation and depression with right triangles"
],

"Circles": [
"Tangent is perpendicular to radius at point of contact",
"Tangents from an external point are equal"
],

"Areas Related to Circles": [
"Area of circle = pi r^2",
"Circumference = 2 pi r",
"Area of sector = theta/360 x pi r^2",
"Length of arc = theta/360 x 2 pi r"
],

"Surface Areas and Volumes": [
"Cylinder CSA = 2 pi r h",
"Cylinder volume = pi r^2 h",
"Cone volume = 1/3 pi r^2 h",
"Sphere volume = 4/3 pi r^3",
"Sphere surface area = 4 pi r^2"
],

"Statistics": [
"Mean = sum(fi xi) / sum(fi)",
"Median = l + [(n/2 - cf)/f]h",
"Mode = l + [(f1-f0)/(2f1-f0-f2)]h"
],

"Probability": [
"P(E) = favourable outcomes / total equally likely outcomes",
"0 <= P(E) <= 1",
"P(not E) = 1 - P(E)"
]

};


/* =========================================================
   SST DATA
   ========================================================= */

const sstData = {

"The Rise of Nationalism in Europe": {
dates:["1789","1815","1830","1848","1871"],
persons:["Giuseppe Mazzini","Otto von Bismarck","Napoleon","Metternich"],
terms:["Nationalism","Liberalism","Conservatism","Nation-state","Suffrage"]
},

"Nationalism in India": {
dates:["1915","1919","1920","1930","1942"],
persons:["Mahatma Gandhi","Jawaharlal Nehru","Ali brothers","Sardar Patel"],
terms:["Satyagraha","Rowlatt Act","Non-Cooperation","Civil Disobedience","Salt March"]
},

"The Making of a Global World": {
dates:["19th century","1929","1944"],
persons:["Indentured labourers","Trade communities"],
terms:["Globalisation","Trade","Migration","Great Depression","Bretton Woods"]
},

"The Age of Industrialisation": {
dates:["1760s","1850s","1914"],
persons:["James Watt","Richard Arkwright"],
terms:["Industrialisation","Factory","Hand labour","Proto-industrialisation"]
},

"Print Culture and the Modern World": {
dates:["1430s","1517","19th century"],
persons:["Johann Gutenberg","Martin Luther"],
terms:["Printing press","Manuscript","Reformation","Public opinion","Censorship"]
},

"Resources and Development": {
dates:["1992","2015"],
persons:["Resource planners"],
terms:["Resource planning","Sustainable development","Land degradation","Soil conservation","Soil types"]
},

"Forest and Wildlife Resources": {
dates:["1972","1980","1988"],
persons:["Forest Department","Conservation groups"],
terms:["Biodiversity","Wildlife sanctuary","National park","Biosphere reserve","Conservation"]
},

"Water Resources": {
dates:["1954","1970s"],
persons:["Bhakra Nangal project planners"],
terms:["Multipurpose project","Dam","Rainwater harvesting","Watershed","Irrigation"]
},

"Agriculture": {
dates:["1960s","2000s"],
persons:["M. S. Swaminathan"],
terms:["Subsistence farming","Commercial farming","Rabi","Kharif","Zaid","Cropping pattern"]
},

"Minerals and Energy Resources": {
dates:["1956","1973"],
persons:["Geological Survey of India"],
terms:["Ferrous","Non-ferrous","Conventional energy","Renewable energy","Coal","Petroleum"]
},

"Manufacturing Industries": {
dates:["1991"],
persons:["Industrial sector"],
terms:["Agro-based","Mineral-based","Pollution","Industrialisation","Small scale"]
},

"Lifelines of National Economy": {
dates:["1853","1951","1956"],
persons:["Indian Railways"],
terms:["Roadways","Railways","Pipelines","Waterways","Airways","Communication"]
},

"Power Sharing": {
dates:["1948","1993"],
persons:["Belgian leaders","Sri Lankan leaders"],
terms:["Majoritarianism","Prudential reason","Moral reason","Community government"]
},

"Federalism": {
dates:["1950","1992","1993"],
persons:["Dr B. R. Ambedkar","Sardar Patel"],
terms:["Federalism","Union List","State List","Concurrent List","Decentralisation"]
},

"Gender, Religion and Caste": {
dates:["19th century","20th century"],
persons:["Social reformers"],
terms:["Gender division","Communalism","Secularism","Caste inequalities"]
},

"Political Parties": {
dates:["1950","1989"],
persons:["Election Commission","Political parties"],
terms:["National party","State party","Coalition","Manifesto","Partisan"]
},

"Outcomes of Democracy": {
dates:["1950","1990s"],
persons:["Citizens"],
terms:["Accountable","Responsive","Legitimate","Economic growth","Inequality"]
},

"Challenges to Democracy": {
dates:["1990s","2000s"],
persons:["Democratic institutions"],
terms:["Foundational challenge","Expansion challenge","Deepening challenge"]
},

"Development": {
dates:["1990s","2015"],
persons:["UNDP","Amartya Sen"],
terms:["Per capita income","HDI","Literacy","Infant mortality","Sustainability"]
},

"Sectors of the Indian Economy": {
dates:["1950s","1991"],
persons:["NSSO","Government"],
terms:["Primary","Secondary","Tertiary","Organised","Unorganised","Public sector"]
},

"Money and Credit": {
dates:["1991","2000s"],
persons:["RBI","Self-help groups"],
terms:["Collateral","Formal credit","Informal credit","Interest","Credit terms"]
},

"Globalisation and the Indian Economy": {
dates:["1991","2000s"],
persons:["WTO","MNCs"],
terms:["Globalisation","Liberalisation","Investment","Production","Trade"]
},

"Consumer Rights": {
dates:["1986","2019"],
persons:["Consumer organisations","BIS"],
terms:["Consumer rights","ISI","Hallmark","COPRA","Redressal"]
}

};


/* =========================================================
   RBSE LINKS
   ========================================================= */

const rbseLinks = {
    syllabus:
    "https://rajeduboard.rajasthan.gov.in/anudeshika-etc/vivranika_cls10_2026.pdf",

    contents:
    "https://rajeduboard.rajasthan.gov.in/contents.htm",

    papers2025:
    "https://rajeduboard.rajasthan.gov.in/books/PAPERS-2025/index.htm",

    papers2024:
    "https://rajeduboard.rajasthan.gov.in/books/PAPERS-2024/index.htm",

    papers2023:
    "https://rajeduboard.rajasthan.gov.in/books/PAPERS-2023/index.htm",

    papers2022:
    "https://rajeduboard.rajasthan.gov.in/books/PAPERS-2022/index.htm",

    scienceModel:
    "https://rajeduboard.rajasthan.gov.in/books/MODALPAPER2026/sec_model2026.pdf"
};


/* =========================================================
   STATE
   ========================================================= */

let currentSubject = "";
let currentChapter = "";

let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;

let timerInterval = null;
let timerSeconds = 25 * 60;


/* =========================================================
   HELPERS
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&#039;");
}


function getRoot() {

    let root = document.getElementById("studyDynamic");

    if (!root) {

        root = document.createElement("div");
        root.id = "studyDynamic";

        const main = document.querySelector("main");

        if (main) {
            main.appendChild(root);
        } else {
            document.body.appendChild(root);
        }
    }

    return root;
}


/* =========================================================
   HOME
   ========================================================= */

function showHome() {

    const root = getRoot();

    root.innerHTML = `
        <div class="note-box">
            <h2>Study Mate</h2>

            <p>
                Class 10 study portal for Science, Social Science,
                Mathematics, English, Hindi and Sanskrit.
            </p>

            <p>
                Select a subject below and open any chapter.
            </p>
        </div>

        <div class="subject-container">

            ${Object.keys(subjects).map(subject => `
                <div class="subject-card">

                    <h3>${escapeHTML(subject)}</h3>

                    <p>
                        ${subjects[subject].length}
                        chapters / topics
                    </p>

                    <button
                        onclick='showSubject(${JSON.stringify(subject)})'>
                        Open Subject
                    </button>

                </div>
            `).join("")}

        </div>
    `;

    window.scrollTo(0,0);
}


/* =========================================================
   SUBJECTS
   ========================================================= */

function showSubjects() {
    showHome();
}


function showSubject(subject) {

    currentSubject = subject;

    const root = getRoot();
    const list = subjects[subject] || [];

    root.innerHTML = `

        <button onclick="showHome()">
            Back to Home
        </button>

        <h2>${escapeHTML(subject)}</h2>

        <p>
            Total chapters/topics:
            <b>${list.length}</b>
        </p>

        <div class="subject-container">

            ${list.map((chapter,index) => `

                <div class="subject-card">

                    <h3>
                        ${index + 1}.
                        ${escapeHTML(chapter)}
                    </h3>

                    <button
                        onclick='openChapter(${JSON.stringify(subject)},${JSON.stringify(chapter)})'>
                        Open Chapter
                    </button>

                </div>

            `).join("")}

        </div>
    `;

    window.scrollTo(0,0);
}


/* =========================================================
   CHAPTER INFORMATION
   ========================================================= */

function getPoints(subject,chapter) {

    if (subject === "Science") {

        return scienceData[chapter]?.points ||
        [
            "Important definition",
            "Main concept",
            "Important example",
            "Important process",
            "Exam point"
        ];
    }

    if (subject === "Mathematics") {

        return mathData[chapter] ||
        [
            "Important theorem",
            "Formula",
            "Method",
            "Example",
            "Exam point"
        ];
    }

    if (subject === "Social Science") {

        const data = sstData[chapter];

        if (data) {

            return [
                ...data.dates,
                ...data.persons,
                ...data.terms
            ];
        }
    }

    return [
        "Central idea",
        "Important concept",
        "Main character or topic",
        "Important event",
        "Important term",
        "Theme",
        "Reason",
        "Effect",
        "Example",
        "Exam point"
    ];
}


/* =========================================================
   FORMULA PANEL
   ========================================================= */

function formulaPanel(subject,chapter) {

    let formulas = [];

    if (subject === "Mathematics") {

        formulas = mathData[chapter] || [];
    }

    if (subject === "Science") {

        formulas = scienceData[chapter]?.formulas || [];
    }

    if (!formulas.length) {
        return "";
    }

    return `

        <div class="note-box">

            <h3>
                Formula / Quick Revision
            </h3>

            ${formulas.map(f => `
                <div class="formula">
                    ${escapeHTML(f)}
                </div>
            `).join("")}

        </div>
    `;
}


/* =========================================================
   SST PANEL
   ========================================================= */

function sstPanel(chapter) {

    const data = sstData[chapter];

    if (!data) {
        return "";
    }

    return `

        <div class="note-box">

            <h3>
                Important Dates, Persons and Terms
            </h3>

            <h4>Important Dates</h4>

            <ul>
                ${data.dates.map(x =>
                    `<li>${escapeHTML(x)}</li>`
                ).join("")}
            </ul>

            <h4>Important Persons / Groups</h4>

            <ul>
                ${data.persons.map(x =>
                    `<li>${escapeHTML(x)}</li>`
                ).join("")}
            </ul>

            <h4>Important Terms</h4>

            <ul>
                ${data.terms.map(x =>
                    `<li>${escapeHTML(x)}</li>`
                ).join("")}
            </ul>

        </div>
    `;
}


/* =========================================================
   SCIENCE ACTIVITIES
   ========================================================= */

function activityPanel(subject,chapter) {

    if (subject !== "Science") {
        return "";
    }

    const activities =
        scienceData[chapter]?.activities || [];

    if (!activities.length) {
        return "";
    }

    return `

        <div class="note-box">

            <h3>
                Science Activities / Experiments
            </h3>

            ${activities.map((activity,index) => `

                <div class="activity">

                    <b>
                        Activity ${index + 1}
                    </b>

                    <p>
                        ${escapeHTML(activity)}
                    </p>

                    <p>
                        <b>Write:</b>
                        Aim, materials, procedure,
                        observation and conclusion.
                    </p>

                </div>

            `).join("")}

        </div>
    `;
}


/* =========================================================
   DIAGRAMS
   ========================================================= */

function diagramPanel(subject,chapter) {

    if (subject !== "Science") {
        return "";
    }


    /* HEART */

    if (chapter === "Life Processes") {

        return `

        <div class="note-box">

            <h3>
                Labelled Human Heart
            </h3>

            <div class="diagram">

                <svg viewBox="0 0 600 350"
                     width="100%"
                     height="300">

                    <rect x="230"
                          y="60"
                          width="140"
                          height="220"
                          rx="60"
                          fill="none"
                          stroke="black"
                          stroke-width="4"/>

                    <line x1="230"
                          y1="120"
                          x2="80"
                          y2="80"
                          stroke="black"
                          stroke-width="3"/>

                    <text x="10"
                          y="75"
                          font-size="18">
                        Vena cava
                    </text>

                    <line x1="370"
                          y1="120"
                          x2="520"
                          y2="80"
                          stroke="black"
                          stroke-width="3"/>

                    <text x="510"
                          y="75"
                          font-size="18">
                        Aorta
                    </text>

                    <line x1="230"
                          y1="210"
                          x2="70"
                          y2="250"
                          stroke="black"
                          stroke-width="3"/>

                    <text x="5"
                          y="270"
                          font-size="18">
                        Right ventricle
                    </text>

                    <line x1="370"
                          y1="210"
                          x2="520"
                          y2="250"
                          stroke="black"
                          stroke-width="3"/>

                    <text x="430"
                          y="270"
                          font-size="18">
                        Left ventricle
                    </text>

                    <text x="265"
                          y="180"
                          font-size="18">
                        Heart
                    </text>

                </svg>

            </div>

            <p>
                Exam tip: label every part clearly.
            </p>

        </div>
        `;
    }


    /* ELECTRIC CIRCUIT */

    if (chapter === "Electricity") {

        return `

        <div class="note-box">

            <h3>
                Labelled Electric Circuit
            </h3>

            <div class="diagram">

                <svg viewBox="0 0 650 300"
                     width="100%"
                     height="280">

                    <line x1="80"
                          y1="70"
                          x2="270"
                          y2="70"
                          stroke="black"
                          stroke-width="4"/>

                    <circle cx="325"
                            cy="70"
                            r="30"
                            fill="none"
                            stroke="black"
                            stroke-width="4"/>

                    <text x="315"
                          y="78"
                          font-size="20">
                        R
                    </text>

                    <line x1="355"
                          y1="70"
                          x2="560"
                          y2="70"
                          stroke="black"
                          stroke-width="4"/>

                    <line x1="560"
                          y1="70"
                          x2="560"
                          y2="220"
                          stroke="black"
                          stroke-width="4"/>

                    <line x1="560"
                          y1="220"
                          x2="80"
                          y2="220"
                          stroke="black"
                          stroke-width="4"/>

                    <line x1="80"
                          y1="220"
                          x2="80"
                          y2="70"
                          stroke="black"
                          stroke-width="4"/>

                    <line x1="65"
                          y1="130"
                          x2="65"
                          y2="160"
                          stroke="black"
                          stroke-width="5"/>

                    <line x1="95"
                          y1="125"
                          x2="95"
                          y2="165"
                          stroke="black"
                          stroke-width="5"/>

                    <text x="45"
                          y="115"
                          font-size="18">
                        Cell
                    </text>

                    <text x="290"
                          y="40"
                          font-size="18">
                        Resistor
                    </text>

                    <text x="430"
                          y="210"
                          font-size="18">
                        Wire
                    </text>

                </svg>

            </div>

        </div>
        `;
    }


    /* LIGHT */

    if (chapter === "Light - Reflection and Refraction") {

        return `

        <div class="note-box">

            <h3>
                Concave Mirror Ray Diagram
            </h3>

            <div class="diagram">

                <svg viewBox="0 0 700 300"
                     width="100%"
                     height="280">

                    <line x1="50"
                          y1="220"
                          x2="650"
                          y2="220"
                          stroke="black"
                          stroke-width="3"/>

                    <path d="M560 70 Q460 220 560 270"
                          fill="none"
                          stroke="black"
                          stroke-width="5"/>

                    <circle cx="350"
                            cy="220"
                            r="5"
                            fill="black"/>

                    <circle cx="260"
                            cy="220"
                            r="5"
                            fill="black"/>

                    <text x="340"
                          y="250"
                          font-size="20">
                        F
                    </text>

                    <text x="250"
                          y="250"
                          font-size="20">
                        C
                    </text>

                    <line x1="150"
                          y1="220"
                          x2="150"
                          y2="100"
                          stroke="black"
                          stroke-width="4"/>

                    <text x="110"
                          y="90"
                          font-size="18">
                        Object
                    </text>

                    <line x1="150"
                          y1="100"
                          x2="560"
                          y2="100"
                          stroke="black"
                          stroke-width="2"
                          stroke-dasharray="8 6"/>

                    <text x="565"
                          y="70"
                          font-size="18">
                        Mirror
                    </text>

                    <text x="270"
                          y="285"
                          font-size="18">
                        Principal axis
                    </text>

                </svg>

            </div>

        </div>
        `;
    }


    return `

        <div class="note-box">

            <h3>
                Diagram Practice
            </h3>

            <p>
                Draw the important textbook diagram
                for this chapter and label every part.
            </p>

        </div>
    `;
}


/* =========================================================
   QUESTIONS
   ========================================================= */

function makeQuestions(subject,chapter) {

    const points = getPoints(subject,chapter);

    const questions = [];

    for (let i = 0; i < 30; i++) {

        const point =
            points[i % points.length];

        questions.push({

            question:
            `What is ${point} in the context of ${chapter}?`,

            answer:
            `${point} is an important concept/topic related to ${chapter}. Learn its definition, explanation and relevant example from the chapter.`

        });
    }

    return questions;
}


function questionPanel(subject,chapter) {

    const questions =
        makeQuestions(subject,chapter);

    return `

        <div class="note-box">

            <h3>
                30 Important Questions with Answers
            </h3>

            ${questions.map((q,index) => `

                <div class="question-box">

                    <p>
                        <b>
                            Q${index + 1}.
                            ${escapeHTML(q.question)}
                        </b>
                    </p>

                    <details>

                        <summary>
                            Show Answer
                        </summary>

                        <p>
                            <b>Answer:</b>
                            ${escapeHTML(q.answer)}
                        </p>

                    </details>

                </div>

            `).join("")}

        </div>
    `;
}


/* =========================================================
   MCQs
   ========================================================= */

function makeMCQs(subject,chapter) {

    const points =
        getPoints(subject,chapter);

    const mcqs = [];

    for (let i = 0; i < 30; i++) {

        const correct =
            points[i % points.length];

        const wrong1 =
            points[(i + 1) % points.length];

        const wrong2 =
            points[(i + 2) % points.length];

        const wrong3 =
            points[(i + 3) % points.length];

        mcqs.push({

            question:
            `Which of the following is related to ${chapter}?`,

            options:[
                correct,
                wrong1,
                wrong2,
                wrong3
            ],

            answer:correct

        });
    }

    return mcqs;
}


function mcqPanel(subject,chapter) {

    const mcqs =
        makeMCQs(subject,chapter);

    return `

        <div class="note-box">

            <h3>
                30 MCQs with Answers
            </h3>

            ${mcqs.map((mcq,index) => `

                <div class="mcq-box">

                    <p>
                        <b>
                            Q${index + 1}.
                            ${escapeHTML(mcq.question)}
                        </b>
                    </p>

                    ${mcq.options.map((option,letter) => `

                        <label style="display:block;margin:8px 0">

                            <input
                                type="radio"
                                name="question-${index}">

                            ${String.fromCharCode(65 + letter)}.
                            ${escapeHTML(option)}

                        </label>

                    `).join("")}

                    <details>

                        <summary>
                            Show Answer
                        </summary>

                        <p>
                            <b>
                                Correct Answer:
                            </b>

                            ${escapeHTML(mcq.answer)}
                        </p>

                    </details>

                </div>

            `).join("")}

        </div>
    `;
}


/* =========================================================
   CHAPTER PAGE
   ========================================================= */

function openChapter(subject,chapter) {

    currentSubject = subject;
    currentChapter = chapter;

    const root = getRoot();

    const points =
        getPoints(subject,chapter);

    root.innerHTML = `

        <button
            onclick='showSubject(${JSON.stringify(subject)})'>
            Back to ${escapeHTML(subject)}
        </button>

        <h2>
            ${escapeHTML(chapter)}
        </h2>


        <div class="note-box">

            <h3>
                Quick Revision
            </h3>

            <ul>

                ${points.map(point => `
                    <li>
                        ${escapeHTML(point)}
                    </li>
                `).join("")}

            </ul>

        </div>


        ${formulaPanel(subject,chapter)}

        ${sstPanel(chapter)}

        ${activityPanel(subject,chapter)}

        ${diagramPanel(subject,chapter)}

        ${questionPanel(subject,chapter)}

        ${mcqPanel(subject,chapter)}


        <div class="note-box">

            <h3>
                Revision Checklist
            </h3>

            <label style="display:block;margin:10px">
                <input type="checkbox">
                I revised the chapter.
            </label>

            <label style="display:block;margin:10px">
                <input type="checkbox">
                I revised important points.
            </label>

            <label style="display:block;margin:10px">
                <input type="checkbox">
                I revised formulas/dates/terms.
            </label>

            <label style="display:block;margin:10px">
                <input type="checkbox">
                I practised diagrams and activities.
            </label>

            <label style="display:block;margin:10px">
                <input type="checkbox">
                I solved the questions.
            </label>

        </div>
    `;

    window.scrollTo(0,0);
}


/* =========================================================
   RBSE PAPERS
   ========================================================= */

function showPapers() {

    const root = getRoot();

    root.innerHTML = `

        <div class="note-box">

            <h2>
                RBSE Previous Year Papers
            </h2>

            <p>
                These buttons open official RBSE resources.
            </p>

        </div>


        <div class="paper-box">

            <h3>
                RBSE 2025 Papers
            </h3>

            <a href="${rbseLinks.papers2025}"
               target="_blank">

                Open Official 2025 Papers

            </a>

        </div>


        <div class="paper-box">

            <h3>
                RBSE 2024 Papers
            </h3>

            <a href="${rbseLinks.papers2024}"
               target="_blank">

                Open Official 2024 Papers

            </a>

        </div>


        <div class="paper-box">

            <h3>
                RBSE 2023 Papers
            </h3>

            <a href="${rbseLinks.papers2023}"
               target="_blank">

                Open Official 2023 Papers

            </a>

        </div>


        <div class="paper-box">

            <h3>
                RBSE 2022 Papers
            </h3>

            <a href="${rbseLinks.papers2022}"
               target="_blank">

                Open Official 2022 Papers

            </a>

        </div>


        <div class="paper-box">

            <h3>
                Official RBSE 2026 Syllabus
            </h3>

            <a href="${rbseLinks.syllabus}"
               target="_blank">

                Open 2026 Syllabus

            </a>

        </div>


        <div class="paper-box">

            <h3>
                RBSE 2026 Science Model Paper
            </h3>

            <a href="${rbseLinks.scienceModel}"
               target="_blank">

                Open Science Model Paper

            </a>

        </div>
    `;

    window.scrollTo(0,0);
}


/* =========================================================
   STUDY TIPS
   ========================================================= */

function showTips() {

    const root = getRoot();

    root.innerHTML = `

        <h2>
            Study Tips
        </h2>

        <div class="tip">
            <h3>1. Learn the concept first</h3>
            <p>
                Do not only memorise. Understand the meaning
                and then revise.
            </p>
        </div>

        <div class="tip">
            <h3>2. Practise questions</h3>
            <p>
                Solve textbook questions and practice questions.
            </p>
        </div>

        <div class="tip">
            <h3>3. Revise formulas</h3>
            <p>
                Keep Mathematics and Science formulas
                in a separate revision list.
            </p>
        </div>

        <div class="tip">
            <h3>4. Practise diagrams</h3>
            <p>
                Draw and label important Science diagrams.
            </p>
        </div>

        <div class="tip">
            <h3>5. Use short revision sessions</h3>
            <p>
                Study one topic at a time and revise it
                before moving to another topic.
            </p>
        </div>
    `;

    window.scrollTo(0,0);
}


/* =========================================================
   QUIZ
   ========================================================= */

function startQuiz() {

    quizQuestions = [];

    Object.keys(subjects).forEach(subject => {

        subjects[subject].slice(0,3).forEach(chapter => {

            makeMCQs(subject,chapter)
            .slice(0,2)
            .forEach(q => {

                quizQuestions.push({

                    subject:subject,
                    chapter:chapter,
                    question:q.question,
                    options:q.options,
                    answer:q.answer

                });

            });

        });

    });


    quizQuestions.sort(() => Math.random() - 0.5);

    quizQuestions =
        quizQuestions.slice(0,20);

    quizIndex = 0;
    quizScore = 0;

    renderQuiz();
}


function renderQuiz() {

    const root = getRoot();

    if (!quizQuestions.length) {

        root.innerHTML = `

            <div class="note-box">

                <h2>
                    Quiz
                </h2>

                <button onclick="startQuiz()">
                    Start Quiz
                </button>

            </div>
        `;

        return;
    }


    if (quizIndex >= quizQuestions.length) {

        root.innerHTML = `

            <div class="note-box">

                <h2>
                    Quiz Complete
                </h2>

                <h3>
                    Score:
                    ${quizScore}/${quizQuestions.length}
                </h3>

                <button onclick="startQuiz()">
                    Try Again
                </button>

            </div>
        `;

        return;
    }


    const q =
        quizQuestions[quizIndex];


    root.innerHTML = `

        <div class="note-box">

            <h2>
                Class 10 Mixed Quiz
            </h2>

            <p>
                Question
                ${quizIndex + 1}
                of
                ${quizQuestions.length}
            </p>

            <p>
                <b>
                    ${escapeHTML(q.subject)}
                    -
                    ${escapeHTML(q.chapter)}
                </b>
            </p>

            <h3>
                ${escapeHTML(q.question)}
            </h3>


            <div id="quizOptions">

                ${q.options.map(option => `

                    <button
                        class="quiz-option"
                        onclick='answerQuiz(${JSON.stringify(option)})'>

                        ${escapeHTML(option)}

                    </button>

                `).join("")}

            </div>

            <p id="quizMessage"></p>

        </div>
    `;
}


function answerQuiz(answer) {

    const q =
        quizQuestions[quizIndex];

    const message =
        document.getElementById("quizMessage");

    if (!message) {
        return;
    }


    if (answer === q.answer) {

        quizScore++;

        message.innerHTML =
        "<b>Correct answer.</b>";

    } else {

        message.innerHTML =
        "<b>Correct answer:</b> " +
        escapeHTML(q.answer);
    }


    document
    .querySelectorAll(".quiz-option")
    .forEach(button => {
        button.disabled = true;
    });


    setTimeout(() => {

        quizIndex++;

        renderQuiz();

    },800);
}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

    clearInterval(timerInterval);

    timerSeconds = 25 * 60;

    renderTimer();

    timerInterval =
    setInterval(() => {

        if (timerSeconds <= 0) {

            clearInterval(timerInterval);

            alert(
                "Study session complete."
            );

            return;
        }

        timerSeconds--;

        updateTimerDisplay();

    },1000);
}


function pauseTimer() {

    clearInterval(timerInterval);
}


function resetTimer() {

    clearInterval(timerInterval);

    timerSeconds = 25 * 60;

    renderTimer();
}


function renderTimer() {

    const root = getRoot();

    root.innerHTML = `

        <div class="note-box">

            <h2>
                Study Timer
            </h2>

            <div id="timer-display"
                 style="
                    font-size:60px;
                    text-align:center;
                    font-weight:bold;
                 ">

                25:00

            </div>

            <div style="text-align:center">

                <button onclick="startTimer()">
                    Start
                </button>

                <button onclick="pauseTimer()">
                    Pause
                </button>

                <button onclick="resetTimer()">
                    Reset
                </button>

            </div>

        </div>
    `;
}


function updateTimerDisplay() {

    const display =
        document.getElementById("timer-display");

    if (!display) {
        return;
    }


    const minutes =
        Math.floor(timerSeconds / 60);

    const seconds =
        timerSeconds % 60;


    display.textContent =
        String(minutes).padStart(2,"0")
        + ":" +
        String(seconds).padStart(2,"0");
}


/* =========================================================
   SEARCH
   ========================================================= */

function searchStudy() {

    const input =
        document.getElementById("studySearch");

    if (!input) {
        return;
    }


    const query =
        input.value.toLowerCase().trim();


    if (!query) {

        showHome();

        return;
    }


    const results = [];


    Object.keys(subjects).forEach(subject => {

        subjects[subject].forEach(chapter => {

            if (
                subject.toLowerCase().includes(query) ||
                chapter.toLowerCase().includes(query)
            ) {

                results.push({
                    subject,
                    chapter
                });

            }

        });

    });


    const root = getRoot();


    root.innerHTML = `

        <h2>
            Search Results
        </h2>

        ${
            results.length

            ?

            results.map(result => `

                <div class="chapter">

                    <h3>
                        ${escapeHTML(result.subject)}
                    </h3>

                    <p>
                        ${escapeHTML(result.chapter)}
                    </p>

                    <button
                        onclick='openChapter(${JSON.stringify(result.subject)},${JSON.stringify(result.chapter)})'>

                        Open Chapter

                    </button>

                </div>

            `).join("")

            :

            `
                <div class="note-box">

                    <p>
                        No chapter found.
                    </p>

                </div>
            `
        }
    `;

    window.scrollTo(0,0);
}


/* =========================================================
   EXTRA NAV BUTTONS
   ========================================================= */

function addPortalButtons() {

    const nav =
        document.querySelector("nav");

    if (!nav) {
        return;
    }


    if (
        !document.getElementById(
            "studyMateExtraButtons"
        )
    ) {

        const container =
            document.createElement("span");

        container.id =
            "studyMateExtraButtons";


        const buttons = [

            ["All Subjects",showHome],

            ["RBSE Papers",showPapers],

            ["Mixed Quiz",startQuiz],

            ["Study Timer",renderTimer],

            ["Study Tips",showTips]

        ];


        buttons.forEach(([text,action]) => {

            const button =
                document.createElement("button");

            button.textContent = text;

            button.onclick = action;

            container.appendChild(button);

        });


        nav.appendChild(container);
    }
}


/* =========================================================
   COMPATIBILITY WITH OLD HTML BUTTONS
   ========================================================= */

function showSection(id) {

    const sections =
        document.querySelectorAll("section");

    sections.forEach(section => {

        section.style.display = "none";

    });


    const selected =
        document.getElementById(id);

    if (selected) {

        selected.style.display = "block";
    }


    if (id === "home") {
        showHome();
    }

    if (id === "subjects") {
        showHome();
    }

    if (id === "papers") {
        showPapers();
    }

    if (id === "quiz") {
        startQuiz();
    }

    if (id === "timer") {
        renderTimer();
    }

    if (id === "tips") {
        showTips();
    }

    window.scrollTo(0,0);
}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        addPortalButtons();

        showHome();

    }
);


/* =========================================================
   END
   ========================================================= */