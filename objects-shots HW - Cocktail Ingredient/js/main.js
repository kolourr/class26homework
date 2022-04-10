//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink);

function getDrink(){

    //value user enters 
   let ingredient = document.querySelector('input').value 

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.ingredients)
      //console logging the response that came back from the server 
document.querySelector('h2').innerText = data.ingredients[0].strABV
document.querySelector('h3').innerText = data.ingredients[0].strDescription

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}



