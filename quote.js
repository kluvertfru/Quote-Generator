let btn = document.getElementById("btn");
let outPut = document.getElementById("output");

let quotes = [
    '"The Precimist sees difficulty in every Oppotunity, the optimist sees oppotunity in every difficulty" - Winston Church Hill',
    '"There is no scandal like rags, nor any crime so shameful as poverty." - George Farquhar',
    '"To avail yourself of His certain wisdom, ask of Him whatever questions you have. But do not entreat Him, for that will never be necessary." - Hugh Prather',
    '"We need the courage to start and continue what we should do, and courage to stop what we should not do" - Richard L. Evans',
    '"Laws grind the poor, and rich men rule the law." - Oliver Goldsmith',
]

btn.addEventListener("click", function(){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    outPut.innerHTML = randomQuote;
    console.log(randomQuote)
})


// btn.addEventListener("click", function(){
//     alert("I am Loving this")
//     console.log(btn)
// })
