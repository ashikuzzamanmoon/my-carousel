const images = [
    "images/bike-1.png",
    "images/bike-2.png",
    "images/bike-3.png",
    "images/bike-4.jpg",
    "images/bike-5.png",
    "images/bike-6.png",
    "images/bike-7.png",
    "images/bike-8.png"
]

let imgIndex = 0;
const imgEl = document.getElementById('slider-img');

setInterval( () =>{
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgEl.setAttribute('src', imgUrl);
    imgIndex++;
}, 1000);