//function called when document loads to browser
window.onload = function () {
  console.log("it works");

  //current option switched on
  let tool = 1;
  let color = "#000";

  //switching on a chosen option
  document.querySelector("#submit").onclick = function (e) {
    tool = parseInt(document.querySelector("#tool").value);
    color = document.querySelector("#color").value;
    console.log("tool", tool);
    console.log("color", color);
  };

  const allDivs = document.querySelectorAll("#right div");

  const handleClick = (event) => {
    event.stopPropagation();
    switch (tool) {
      case 1:
        // Add background color
        event.target.style.backgroundColor = color;
        break;
      case 2: {
        const div = document.createElement("div");
        event.target.appendChild(div);
        break;
      }
      case 3:
        event.target.parentNode.removeChild(event.target);
        break;
      case 4:
        event.target.style.borderColor = color;
        break;
      case 5: {
        const div = document.createElement("div");
        div.style.borderRadius = "20px";
        event.target.appendChild(div);
        break;
      }
    }
  };

  allDivs.forEach((child) => {
    child.addEventListener("click", handleClick);
  });
};
