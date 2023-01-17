import HomePage from "./HomePage";
import { Redirect } from "../Router/Router";


const JOKES = [
    {
      id: 1,
      content: 'Gruyère, Sérac, Appenzel, Gorgonzola, Tomates',
    },
    {
      id: 2,
      content: 'Tomates, Courgettes, Oignons, Aubergines, Poivrons',
    },
    {
      id: 3,
      content: 'Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives',
    },
    {
      id: 4,
      content: 'Gruyère, Mozarella, Lardons, Tomates',
    },
    {
      id: 5,
      content: 'Tomates, Mozarella, Chorizo piquant, Jalapenos',
    },
  ];

/**
 * Render the NewPage :
 * Just an example to demonstrate how to use the router to "redirect" to a new page
 */
function AlljokesPage() {
  // Deal with your NewPage content here
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = "";
  // create a login form
  const submit = document.createElement("input");
  submit.value = "Add joke";
  // Example on how to use Bootstrap to style a Button
  submit.className = "btn btn-secondary mt-3";
  // Example on how to add an event handler : when the button is clicked, redirect
  // to the HomePage
  submit.addEventListener("click", () => {
    Redirect("/AddjokesPage");
  });
  pageDiv.appendChild(submit);
}

function getJokes() {

    fetch('http://localhost:3000/jokes')
    .then((response) => {
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      return response.json();
    })
    .then((jokes) => {
      console.log(jokes);
    })
    .catch((err) => {
      console.error('HomePage::error: ', err);
    });

}

export default AlljokesPage;
