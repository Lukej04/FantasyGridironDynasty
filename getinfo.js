function init() {
          Papa.parse( { key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vSapPuH4RuNbKzYEgxx-oqM_jz8klgXS8R_aR7D2b2ZYkzyJVYNthqZvRqpohMToCneB7JrRToGSk0_/pub?output=csv',
          download: true,
          header: true,
          complete: function(results) {
            var data = results.data
            console.log(data)
          }
        })
window.addEventListener(‘DOMContentLoaded’, init)
