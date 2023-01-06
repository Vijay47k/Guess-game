//create a random number
let secnum = Math.ceil(Math.random() * 20)
console.log(secnum)

//Gets values using DOM
let scoreSpan = document.querySelector(".score-span").value

let highscore = 0
let score = 20



//Functions

function reset() {
    document.querySelector(".guess").value = ""
    document.querySelector(".number").textContent = "?"
    document.querySelector(".number").style.color = "#00FFAB"
    document.querySelector(".score-span").textContent = " 20"
    document.querySelector(".massage").textContent = "Guess Again...😄"
    document.querySelector("body").style.backgroundColor = "#222"

    //reset the secnum
    secnum = Math.ceil(Math.random() * 20)
    console.log(secnum)

    //reset the score value
    score = 20
}

// 1.Again btn works
document.querySelector(".again").addEventListener("click", reset)


// 2. Check btn works
document.querySelector(".check").addEventListener("click", function() {

    let input = Number(document.querySelector(".guess").value)

    //There no input
    if (!input) {
        document.querySelector(".massage").textContent = "Enter a number...😏"
    }


    //guess is high
    else if (secnum > input) {

        if (score > 0) {
            document.querySelector(".massage").textContent = "To Low..!👏"
            score--;
            document.querySelector(".score-span").textContent = score
        } else {
            document.querySelector(".massage").textContent = "you lost the game...😌"
        }
    }

    //guess is low
    else if (secnum < input) {

        if (score > 0) {
            document.querySelector(".massage").textContent = "To High..!👏"
            score--;
            document.querySelector(".score-span").textContent = score
        } else {
            document.querySelector(".massage").textContent = "you lost the game...😌"

        }
    }

    // user won
    else if (secnum === input) {

        document.querySelector(".number").textContent = input
        document.querySelector(".number").style.color = "red"

        document.querySelector(".massage").innerHTML = "Hurray..!! You Won😎🎉🙌"
        document.querySelector(".massage").style.color = "2E0249"
        document.querySelector("body").style.backgroundColor = "#54B435"

        // highscore
        if (score > highscore) {
            highscore = score
            document.querySelector(".highscore-span").textContent = highscore
        }
    }
})