/* Target button */
let btn = document.querySelector(".btn");

/* Target joke div tag */
let joke = document.querySelector(".joke");

/* Add click event in button */
btn.addEventListener("click", () =>{

    /* Create p tag in jokes variable */
    let jokes = document.createElement("p");
    /* Add jokess class name of jokes variable */
    jokes.classList.add("jokess");
    /* Let move jokes tag into the joke div tag */
    joke.appendChild(jokes)

    /* Target jokess class name into jokess variable */
    let jokess = document.querySelector(".jokess");

    /* 
        Let's move onto the api part
        Api is chucknorris jokes random api
        First I've fetch the api 
    */
    fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        /* When getting a response from the api then I convert api text into the json format and return format to the next .then */
        return response.json();
    })
    .then((data) => {
        /* Then I get the json format and I got the jokes into the jokee variable */
        let jokee = data.value;
        /* When fetch the joke text then I move text into the p tag */
        jokess.innerText = jokee
    })
    .catch((error) =>{
        /* If I get any error in the fetch api then this message will display in console */
        console.log("Error is: ", error)
    });
});