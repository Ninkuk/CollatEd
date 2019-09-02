var challengeSelected = true;

function toggleHiw() {
    if (challengeSelected) {
        challengeSelected = !challengeSelected;
        document.getElementById("iworld-form").style.display = "block";
        document.getElementById("challenge-form").style.display = "none";
        document.getElementById("dropdown-selected").innerText = "policy for iWorld";
        document.getElementById("option").innerText = "Challenge";
        challengeForm.reset();
        iworldForm.reset();
    } else {
        challengeSelected = !challengeSelected;
        document.getElementById("iworld-form").style.display = "none";
        document.getElementById("challenge-form").style.display = "block";
        document.getElementById("dropdown-selected").innerText = "Challenge";
        document.getElementById("option").innerText = "policy for iWorld";
        challengeForm.reset();
        iworldForm.reset();
    }
}

document.getElementById("thanks-message").style.display = "none";
const challengeForm = document.querySelector("#challenge-form");
const iworldForm = document.querySelector("#iworld-form");

var discipline = "";
var goal = "";

function selectDiscipline(discipline) {
    this.discipline = discipline;
    document.getElementById("discipline-button").innerText = discipline;
}

function selectGoal(goal) {
    this.goal = goal;
    document.getElementById("goal-button").innerText = goal;
}

challengeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (challengeForm.name.value == "" || challengeForm.institutionName.value == "" || challengeForm.challengeTitle.value == "" || this.discipline == "" || this.goal == "" || challengeForm.problemDescription.value == "" || challengeForm.guidelinesDescription.value == "" || challengeForm.resources.value == "") {
        alert("Please enter the required fields!");
        return false;
    }

    db.collection('challenges').add({
        name: challengeForm.name.value,
        institutionName: challengeForm.institutionName.value,
        challengeTitle: challengeForm.challengeTitle.value,
        discipline: this.discipline,
        goal: this.goal,
        problemDescription: challengeForm.problemDescription.value,
        organizationDescription: challengeForm.organizationDescription.value,
        guidelinesDescription: challengeForm.guidelinesDescription.value,
        resources: challengeForm.resources.value
    });
    challengeForm.reset();
    document.getElementById("challenge-form").style.display = "none";
    document.getElementById("thanks-message").style.display = "block";
});

var status = "";

function selectStatus(status){
    this.status = status;
    document.getElementById('status-button').innerText = status;
}

iworldForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(iworldForm.namePolicy.value == "" || iworldForm.policyDescription.value == "" || this.status == "" || iworldForm.relevance.value == "") {
        alert("Please enter all required fields");
        return false;
    }

    db.collection('iworld').add({
        name: iworldForm.namePolicy.value,
        policyDescription: iworldForm.policyDescription.value,
        status: this.status,
        relevance: iworldForm.relevance.value,
        resources: iworldForm.resourcesIworld.value
    });

    iworldForm.reset();
    document.getElementById("iworld-form").style.display = "none";
    document.getElementById("thanks-message").style.display = "block";
});