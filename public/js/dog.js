//change the limit to however many images to use
/*const url = `https://api.thecatapi.com/v1/images/search?limit=10`;
const api_key = "live_PiEmMwbrtaODQWc7lEGFp7J01DS47KCd6s1Ffpu6k7DgSU7J7Gcn3hYDsfWTXEcy"

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  let imagesData = data;
  imagesData.map(function(imageData) {
    
    let image = document.createElement('img');
    //use the url from the image object
    image.src = `${imageData.url}`;
        
    let gridCell = document.createElement('div');
    gridCell.classList.add('col');
    gridCell.classList.add('col-lg');
    gridCell.appendChild(image)
      
    document.getElementById('grid').appendChild(gridCell);
    
    });
})
.catch(function(error) {
   console.log(error);
});*/


// JavaScript code
var httpRequest = new XMLHttpRequest();
httpRequest.open("get","https://dog.ceo/api/breeds/image/random");
httpRequest.send();

httpRequest.onreadystatechange = aFunction;

function aFunction() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var dogs = httpRequest.responseText;
        console.log(typeof(dogs))
        var dogsObj = JSON.parse(dogs);
        console.log(dogsObj);
        document.getElementById('pic').src=dogsObj.message;
    }
}
