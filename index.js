function renderJoke(event){
    event.preventDefault()
var fname=document.getElementById("firstname").value
var lname=document.getElementById("lastname").value
var apii='http://api.icndb.com/jokes/random?firstName='+fname+'&lastName='+lname

fetch(apii)
  .then(response => response.json())
  .then(data => document.getElementById("joke").innerHTML=data.value.joke);
}