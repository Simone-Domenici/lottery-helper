// let luckyNumbers = parseInt(prompt('Do you have any lucky numbers?'))

let chosenNumbers = [11,23]

while (chosenNumbers.length < 6) {
    extractedNumber = Math.floor(Math.random() * 90 + 1)
    if (!chosenNumbers.includes(extractedNumber)) {
        chosenNumbers.push(extractedNumber)
    }
}
console.log(chosenNumbers)


