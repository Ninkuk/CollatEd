const challengeForm = document.querySelector("#challenge-form");

var discipline = "";
var goal = "";

function selectDiscipline(discipline){
    this.discipline = discipline;
}

function selectGoal(goal){
    this.goal = goal;
}

challengeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('cafes').add({
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
})