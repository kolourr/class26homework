//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink);

function getDrink(){

    //value user enters 
   let drink = document.querySelector('input').value 

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.drinks)
      console.log(data.drinks[0])
      //console logging the response that came back from the server 
document.querySelector('h2').innerText = data.drinks[0].strDrink
document.querySelector('img').src = data.drinks[0].strDrinkThumb
document.querySelector('h3').innerText = data.drinks[0].strInstructions

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}



