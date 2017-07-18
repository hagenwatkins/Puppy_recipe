let section = document.querySelector('#results');
let searchButton = document.querySelector('#search');
let queryInput = document.querySelector('#query');
let url = 'https://recipe-puppy-proxy.herokuapp.com/api/recipes?q=';

searchButton.addEventListener('click', function() {
  let val = queryInput.value;
  let finalUrl = url + val;
  fetch(finalUrl)
   .then(function(response){
     return response.json();

  })
  .then(function(data){
    let html ='';

      for (let i =0; i <data.results.length; i++){
        let result = data.results[i];
        html += `<div>
        <h2>${result.title}</h2>
        <img src = "${result.thumbnail}" alt= "no image">
        <p>${result.href}</p>


        </div>`

      }
    section.innerHTML = html;
    })

  });
