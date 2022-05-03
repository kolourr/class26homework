//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink);



function getDrink(){

   let drink = document.querySelector('input').value 

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      //console logging the response that came back from the server 

        const carousel = document.querySelector(".carousel")
        //function for starting the carousel and changing the image every 1 second 
        const interval = setInterval(function() {
            startCarousel()
        }, 1000)
        let index = 0

        startCarousel = () => {
   
            document.querySelector('h2').innerText = data.drinks[index].strDrink
            document.querySelector('img').src = data.drinks[index].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[index].strInstructions
            index++
            if(index > data.drinks.length - 1) index = 0; 
            console.log(index)

        }

      

        //Stop the carousel from running 
        document.getElementById('stopButton').addEventListener('click', () => {
            window.clearInterval(interval) 
        })

            //Continue  carousel
            document.getElementById('continueButton').addEventListener('click', startCarousel)
 

           //Go Back  carousel
           document.getElementById('goButton').addEventListener('click', backCarousel)

           function backCarousel (){
            index--
            document.querySelector('h2').innerText = data.drinks[index].strDrink
            document.querySelector('img').src = data.drinks[index].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[index].strInstructions
           
            if(index ==0) index = data.drinks.length 
            console.log(index)
           }
      
       

        
 
 

    
         

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}



