footer_text = "CollatEd is a data-driven education technology NGO, the first that uses open innovation as a means of pedagogy to propel Education Sustainable Development in the Global Action Programme network. By shaping researchers into global citizens through solving our signature Challenges™ in exchange for solutions to community and institutional sustainability problems, CollatEd assists world ministries find practical policy applications of academic knowledge, all while strengthening research-based input to policymaking and working in global teams to facilitate the United Nations’ Sustainable Development Goals (SDGs). CollatEd Lab fosters sustainable development and innovation capacity building through operating as a policy consulting, strategic international-development NGO in order to empower communities and governments to more effectively respond to issues at the international, national, and regional levels.Moreover, CollatEd Lab works with Ministries of Education in order to facilitate the inaugural SDG Youth Action Festivals worldwide in partnership with the UN SDG Action Campaign."
document.getElementById('footer-text').innerText = footer_text;

if (document.title.includes("Mission")) {
    document.getElementById('mission-text').innerText = footer_text;
}

const linksul = document.querySelector('#footer-nav-links');
const linksTitle = [
    "Home",
    "Meet the Team",
    "Mission and Impact",
    "Our Partners",
    "Global Steering Committee",
    "Governmental Pathways",
    "Events",
    "Challenges"
];

const linksLocation = [
    "index",
    "team",
    "mission",
    "partners",
    "Global-Steering-Committee",
    "Governmental-Pathways",
    "events",
    "challenges"
]

for (let i = 0; i < linksTitle.length; i++) {
    let linkli = document.createElement('li');
    let link = document.createElement('a');
    link.setAttribute('href', `${linksLocation[i]}.html`);
    link.text = linksTitle[i];
    linkli.appendChild(link);
    linksul.appendChild(linkli);
}