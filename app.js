// All Query selector 
const imagesArea = document.querySelector('.images');
const gallery =  document.querySelector(".gallery")
const galleryHeader = document.querySelector('.gallery-header')
const searchBtn = document.getElementById("search-btn");


// // API KEY ADDRESS :::::::::::::::
const KEY = '27266613-bd041d09e0e0a7fa6e4b57b28';


// Show Image Ui ::::::::::::::::::::
const showImages = (images) => {
    console.log(images)
    images.forEach(image => {
        let div = document.createElement("div");
        div.className = 'col-lg-3 col-md-4 col-xs-6 img-item mb-2';
        div.innerHTML = `<img class="img-fluid img-thumbnail" src="${image.webformatURL}" alt = "">`
        gallery.appendChild(div)
    })
}

const getImages = (query) => {
    fetch(`https://pixabay.com/api/?key=${KEY}=${query}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data =>  console.log(data.hits))
  }
  

// Event click Handler
searchBtn.addEventListener('click', function(){
    const search = document.getElementById("search");
    getImages(search.value);
})




