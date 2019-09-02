const challengeForm = document.querySelector("#challenge-form");
document.getElementById("thanks-message").style.display = "none";

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
})