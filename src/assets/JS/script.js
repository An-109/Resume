const topBar = document.querySelector(`.points`);
const exp1 = document.getElementById(`exps`);
const edu = document.getElementById(`edu`);
const skill = document.getElementById(`skill`);




exp1.addEventListener(`click`, function(event){
    event.preventDefault();
    console.log(`it works1`);
});

edu.addEventListener(`click`, function(event){
    event.preventDefault();
    console.log(`it works2`);
});

skill.addEventListener(`click`, function(event){
    event.preventDefault();
    console.log(`it works3`);
});