// sliderJS v0.0.1
// By Mikkel Lund Clausen / https://www.linkedin.com/in/mikkel-lund-clausen-a7403452/
// Repo: https://github.com/lundclausenDK/sliderJS

//// CUSTOM SETTINGS - EDIT BELOW AS YOU LIKE: ////

// Image filenames list in order as you like (without extension .jpg, .png etc)
let imageList = [
    "http://via.placeholder.com/350x150?text=foo",
    "http://via.placeholder.com/350x150?text=bar",
    "http://via.placeholder.com/350x150?text=yolo",
    "http://via.placeholder.com/350x150?text=piri"
];

let sliderSpecs = {
    containerName: "sliderJS", // ID name for container html div
    imageFileExt: "jpg", // Image files extension
    widescreenPics: true, // Auto stretch images to 100% width, height follows relatively
    delay: 2000, // Slide scene delay before changing to next image/slide
    effect: "flip" // Slide change effects: flip / fade / slide
};

//// SCRIPT SETTINGS - EDIT BELOW AT YOUR OWN RISK ////
function init() {
    container = document.getElementById(sliderSpecs.containerName);
    slides = document.getElementsByClassName("sliderJS-slide");

    if (sliderSpecs.widescreenPics == true) {
        container.className += "sliderJs-widescreen "
    }
}

function print() {
    // Correct according to html stack order
    imageList.reverse();

    // Create images in html container
    for (let i = 0; i < imageList.length; i++) {
        container.innerHTML += "<img src='" + imageList[i] + "." + sliderSpecs.imageFileExt +"' class='sliderJS-slide'>";
    }
    sceneChanger();
}

function sceneChanger() {
    // Start from the bottom
    let count = imageList.length - 1;
    
    // Change slides
    setInterval(effect, sliderSpecs.delay);

    function effect() {
        // Apply selected effect
        switch(sliderSpecs.effect) {
            case "flip":
                slides[count].className += " sliderJs-flip "
        }

        count--;
        
        // Reset when last slide is reached
        if (count == -1) {
            // Delete added classes and restart slideshow
            for (let i = 0; i < slides.length; i++) {
                slides[i].className = "sliderJS-slide";
            }
            
            // Reset counter
            count = imageList.length - 1;
        }
    }
}

function nextSlide() {

}

function prevSlide() {

}

function run() {
    init();
    print();
}

run();