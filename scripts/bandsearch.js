// import autocomplete from 'autocompleter';
// const { response } = require('express');

//const { json } = require("sequelize");

let cityform = document.getElementById('form12');

// autocomplete({
//     input: input,
// })

// autocomplete({
//     input: cityform,
//     fetch: function(text, update) {
//         text = text.toLowerCase();
//         // you can also use AJAX requests instead of preloaded data
//         var suggestions = bands.filter(band => band.city.toLowerCase().startsWith(text))
//         update(suggestions);
//     },
//     onSelect: function(item) {
//         input.value = item.label;
//     }
// }); 



let url = '/api/bands'
let bands 
let bandList = document.getElementById('band-list');
//and click event on data list and filter through value
function init(){
    fetch(url)
    .then(response => {return response.json()})
    .then(bands => {
        bands.forEach(band => {
            // addEventListener('onClick');
            let bandOption = document.createElement('option');
            bandOption.value = band.city;
            bandOption.innerHTML = band.band;
            bandList.appendChild(bandOption);
        });
    })
    
}
cityform.addEventListener('DOMContentLoaded', event => {
    bandList.autocomplete();
},false);
init();

function searchband(){
    let searchCityElement = document.getElementById("form12");
    //do call to database route.
    var searchElm = {
        cityName: searchCityElement.value
    };
    let data = JSON.stringify(searchElm);
    let url = '/api/bands/search'
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'       
      },
      body: data
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => { 
        document.getElementById("container");
        var elem = document.getElementById("document-template").style.display = "none";
        var source = document.getElementById("document-template").innerHTML;
var template = Handlebars.compile(source);
var html = template(json);
document.getElementById('DocumentResults').innerHTML = html;

        console.log(json);
    }).catch(err => console.error('error:' + err));
}


function bandpage(bandName){
        window.location = "bandaccount?band=" + bandName;
};

