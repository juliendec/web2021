import Christmas from '../../img/Christmas.jpg';
import Programming from '../../img/Programming.jpg';
import Pun from '../../img/Pun.jpg';
import JokesJSON from "../../utils/jokes";
let text = "";
/**
 * Render the Categories
 */

const categories = () => { 
    const pageDiv = document.querySelector("#page");
    pageDiv.innerHTML = `<div class="container">
        <div class="row flex-row" id="page_categories">
            <img src="${Christmas}" data-type="Christmas">
            <img src="${Programming}" data-type="Programming">
            <img src="${Pun}" data-type="Pun">
        </div>
    </div>`;
}

const Jokes = () => { 

    categories();

    const navbarWrapper = document.querySelectorAll("#page_categories img");
    Array.from(navbarWrapper).forEach((elem) => {
        elem.addEventListener('click', (e) => {
            let type = e.target.dataset.type;
            clearPage();
            displayJokes(type);

        })
    })
};

const clearPage = () => { 
    const pageDiv = document.querySelector("#page");
    pageDiv.innerHTML = ``;
    text = "";
}

const displayJokes = (typeJokes) => { 
    //console.log(JokesJSON);
    let arrayJokes = [];
    Array.from(JokesJSON).forEach((elem) => {
        if(elem.category.includes(typeJokes)){
            arrayJokes.push(elem);
        }
    })

    let numberIndex = Math.floor(Math.random() * ((arrayJokes.length-1) - 0 + 1) + 0);
    console.log("LA blague")
    console.log(arrayJokes[numberIndex]);
    text = arrayJokes[numberIndex].answer;
    setTimeout(displayAnswer,5000);
    const pageDiv = document.querySelector("#page");
    pageDiv.innerHTML = `<div class="container">
        <div class="row" id="info-jokes">
            <div class="question">${arrayJokes[numberIndex].question}</div>
            <div class="answer"></div>
            <div class="btn"></div>
        </div>
    </div>`;



}

const displayAnswer = () => { 
    const pageDiv = document.querySelector("#info-jokes div.answer");
    const pageDiv2 = document.querySelector("#info-jokes div.btn");
    pageDiv.innerHTML = `${text}`;
    pageDiv2.innerHTML = `<button id="reselect">Reselect a Jokes</button>`;
    const elem = document.querySelector("#reselect");
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        clearPage();
        Jokes();
    })
    
}



  
  export default Jokes;