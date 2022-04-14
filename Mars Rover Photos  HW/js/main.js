

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const startDate = document.querySelector('#start-date').value
  // const endDate = document.querySelector('#end-date').value

   
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${startDate}&api_key=fXPhKWqnqHqF0ImopJvnrIadUXryU1jDrjE0Klbj`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.photos[0].img_src)


        document.querySelector('img').src = data.photos[0].img_src
    

        document.querySelector('#id').innerText = data.photos[0].id
        document.querySelector('#rover-name').innerText = data.photos[0].rover.name
        document.querySelector('#camera-name').innerText = data.photos[0].camera.name


   
     

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

