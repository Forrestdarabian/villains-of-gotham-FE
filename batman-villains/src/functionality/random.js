import React from "react";

function myFunction() {
  var x = document.getElementById("demo");
  alert(
    "Your chances of defeating Batman are " +
      (x.innerHTML = Math.floor(Math.random() * 100 + 1) + "%")
  );
}
function Random() {
  return (
    <div className="random">
      <button className="chances" onClick={() => myFunction()}>
        Chances of defeating Batman
      </button>
    </div>
  );
}

export default Random;
