// import autocomplete from 'autocompleter';
// const { response } = require('express');

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

