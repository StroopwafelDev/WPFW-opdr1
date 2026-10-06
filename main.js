const factdump = document.querySelector(".random-fact")

fetch("https://meowfacts.herokuapp.com/?count=10")
    .then(myData => myData.json())
    .then(jsonData => showRandomFact(jsonData.data))



function showRandomFact(data){
    let randomIndex = Math.floor(Math.random() * data.length);
    console.log(randomIndex);
    
    factdump.innerHTML = `${data[randomIndex]}`
}