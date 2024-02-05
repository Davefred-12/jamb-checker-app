// design an application that checks jamb score of candidates
// so a new user, comes to the application, puts in his score for the 4 subjects 
// if the user inputs a score more than 100, you console log, score is higher than designated input
// after they input the score, you add it all up and check if its is above the cutoff mark, 300, if he doesn't pass the cutoff, we console log that you didn't pass the cutoff, else, we console log that he passes the cutoff

const engResultInput = document.querySelector('.engResult')
console.log(engResultInput);

const matResultInput = document.querySelector('.matResult')
console.log(matResultInput);

const phyResultInput = document.querySelector('.phyResult')
console.log(phyResultInput);

const cheResultInput = document.querySelector('.cheResult')
console.log(cheResultInput);

const buttonInput = document.querySelector('.login')
console.log(buttonInput);

buttonInput.addEventListener( 'click', function collectDetails (){
    let engResultInputValue = Number(engResultInput.value)
    let matResultInputValue = Number(matResultInput.value)
    let phyResultInputValue = Number(phyResultInput.value)
    let cheResultInputValue = Number(cheResultInput.value)

    if  (engResultInputValue > 100 || matResultInputValue > 100 || phyResultInputValue > 100 || cheResultInputValue > 100)
    console.log('Wrong Score');

    let totalScore = (engResultInputValue + matResultInputValue + phyResultInputValue + cheResultInputValue)
    
    if (totalScore >= 300){
    console.log('You Passed the Cutoff Mark')
   } else {
    console.log('You failed to pass the Cutoff Mark')
   }
})
