import "./styles.css";
import "./knightMovement.js";

if (process.env.NODE_ENV !== "production")
  console.log("Looks like we are in development mode!");

function HelloWorld() {
  const title = document.createElement("h1");
  title.innerText = "Knights Travails";

  return title;
}

document.body.appendChild(HelloWorld());
