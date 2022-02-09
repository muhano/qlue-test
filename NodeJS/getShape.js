//CIRCLE if divisible by 2, STAR if divisible by 3, CIRCLE STAR if divisible by 2 & 3

function getShape(input) {
    if (input % 2 === 0 && input % 3 === 0) return "CIRCLE STAR"
    else if (input % 2 === 0) return "CIRCLE"
    else if (input % 3 === 0) return "STAR"
    else return null
}

const input = 5

console.log(getShape(input));