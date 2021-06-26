// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
            response.json().then( function(json) {
               document.getElementById("missionTarget").innerHTML = `<h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[2].name}</li>
                  <li>Diameter: ${json[2].diameter}</li>
                  <li>Star: ${json[2].star}</li>
                  <li>Distance from Earth: ${json[2].distance}</li>
                  <li>Number of Moons: ${json[2].moons}</li>
               </ol>
               <img src="${json[2].image}">`
               console.log(json);
            });
} );
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault()
      let pilot = document.querySelector("input[name=pilotName]");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuel = document.querySelector("input[name=fuelLevel]");
      let cargo = document.querySelector("input[name=cargoMass]");
      if (pilot.value === "" || copilot.value === ""|| fuel.value === ""|| cargo.value === ""){
         alert("All fields are required!")
      } else if (!isNaN(pilot.value) || !isNaN(copilot.value) || isNaN(fuel.value) || isNaN(cargo.value)) {
         alert("Incorrect input");
      } else {
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("pilotStatus").innerHTML = "Pilot " + pilot.value + " is ready for launch." 
      document.getElementById("copilotStatus").innerHTML = "Copilot " + copilot.value + " is ready for launch." 
      document.getElementById("fuelStatus").innerHTML = fuel.value + " (L) is enough fuel for launch." 
      document.getElementById("cargoStatus").innerHTML =  cargo.value + " is lightweight enough for launch." 

      if(pilot.value === "")document.getElementById("pilotStatus").innerHTML = "Pilot is not ready." 
      if(copilot.value === "")document.getElementById("copilotStatus").innerHTML =  "Copilot is not ready."
      if(Math.round(fuel.value) < 10000)document.getElementById("fuelStatus").innerHTML = "Shuttle does not have enough fuel."
      if(Math.round(cargo.value) >= 10000)document.getElementById("cargoStatus").innerHTML = "Shuttle is too heavy."
      validateitems(fuel.value, cargo.value)
      }
      });
});
function validateitems(fuel,cargo){
   document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch"
   document.getElementById("launchStatus").style.color = "green"
   console.log(Math.round(fuel) , Math.round(cargo), fuel,cargo)
   if (Math.round(fuel) <= 10000 || Math.round(cargo) >= 10000) {
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
      document.getElementById("launchStatus").style.color = "red"
   }
}

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
