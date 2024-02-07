//change the limit to however many images to use
const url = `https://api.thecatapi.com/v1/images/search?limit=10`;
const api_key = "live_WYeHDCdMYLqo0UA0hO6JlDLxHC0tGXSEBRzFryXuhxGSAkrnfRZLOMpUd9pu7KaF"

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
});