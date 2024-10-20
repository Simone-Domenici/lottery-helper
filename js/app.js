// let luckyNumbers = parseInt(prompt('Do you have any lucky numbers?'))

const initialNumbers = [11,23]

let chosenNumbers = [initialNumbers]

function newRoll(initialNumbers) {
    chosenNumbers = [...initialNumbers]
    while (chosenNumbers.length < 6) {
        extractedNumber = Math.floor(Math.random() * 90 + 1)
        if (!chosenNumbers.includes(extractedNumber)) {
            chosenNumbers.push(extractedNumber)
        }
    }
    console.log(chosenNumbers)

    const resultsElements = document.querySelectorAll('.results');
    for (let i = 0; i < chosenNumbers.length; i++) {
        resultsElements[i].textContent = chosenNumbers[i];
    }

}

const getStartedBtn = document.getElementById('get__started__btn')

getStartedBtn.addEventListener('click', () => newRoll(initialNumbers))

const resultsElement = document.getElementById('results')
