/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}


/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vSapPuH4RuNbKzYEgxx-oqM_jz8klgXS8R_aR7D2b2ZYkzyJVYNthqZvRqpohMToCneB7JrRToGSk0_/pubhtml',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
