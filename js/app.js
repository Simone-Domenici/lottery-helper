// let luckyNumbers = parseInt(prompt('Do you have any lucky numbers?'))

let initialNumbers = [11,23]

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

    const resultsElements = document.querySelectorAll('.results p');
    for (let i = 0; i < chosenNumbers.length; i++) {
        resultsElements[i].textContent = chosenNumbers[i];
    }

}

const getStartedBtn = document.getElementById('get__started__btn')

getStartedBtn.addEventListener('click', () => newRoll(initialNumbers))

const resultsElement = document.getElementById('results')

const removeNumbersBtn = document.getElementById('remove__numbers__btn')

removeNumbersBtn.addEventListener('click', () => initialNumbers = [])
