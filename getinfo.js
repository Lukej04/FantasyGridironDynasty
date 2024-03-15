function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vSapPuH4RuNbKzYEgxx-oqM_jz8klgXS8R_aR7D2b2ZYkzyJVYNthqZvRqpohMToCneB7JrRToGSk0_/pubhtml',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
