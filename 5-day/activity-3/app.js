// Create a slide show app which shows each image for 1 second and then display the next image.Make sure that the slide show is circular meaning, when it reaches the last image it should reset back to the first image. 

let pictures = document.getElementById("pictures")

let imgArr = [
    "url('poster1.png')",
    "url('poster2.png')",
    "url('poster3.png')",
    "url('poster4.png')",
    "url('poster5.png')"
]


setInterval(() => {
    let randomIndex = Math.floor(Math.random() * 5)
    document.body.style.background = imgArr[randomIndex]
    console.log('test')

}, 1000);