import HomePage from "./HomePage";
import { Redirect } from "../Router/Router";

/**
 * Render the NewPage :
 * Just an example to demonstrate how to use the router to "redirect" to a new page
 */
function AddjokesPage() {
  // Deal with your NewPage content here
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = "";



  submit.addEventListener("click", () => {
    Redirect("/");
  });
  pageDiv.appendChild(submit);
}

export default AddjokesPage;
