// sliderJS v0.0.2
// By Mikkel Lund Clausen / https://www.linkedin.com/in/mikkel-lund-clausen-a7403452/
// Repo: https://github.com/lundclausenDK/sliderJS

//// CUSTOM SETTINGS - EDIT BELOW AS YOU LIKE: ////

// Image filenames list in order as you like (without extension .jpg, .png etc)
let imageList = [
    "http://wallpoper.com/images/00/44/98/44/landscape-in-argentina_00449844",
    "http://fibrechannel-europe.com/wp-content/uploads/2018/04/landscape-wallpaper-hd-0-pleasurable-full-hd-1080p-wallpapers-desktop-backgrounds",
    "http://s1.1zoom.me/b6152/319/Scenery_Sunrises_and_sunsets_Sky_Roads_Stones_Rays_513485_1920x1080",
    "http://allpicts.in/download/86/Full_HD_Nature_Wallpapers_1080p_Desktop_Green_Landscape_with_Flower"
];

let sliderSpecs = {
    containerName: "sliderJS", // ID name for container html div
    imageFileExt: "jpg", // Image files extension
    widescreenPics: true, // Auto stretch images to 100% width, height follows relatively
    delay: 4000, // Slide scene delay before changing to next image/slide
    effect: "fade", // Slide change effects: flip / fade / slide
    reversedOrder: false // Reverse slide order
};

//// SCRIPT SETTINGS - EDIT BELOW AT YOUR OWN RISK ////
function init() {
    container = document.getElementById(sliderSpecs.containerName);
    slides = document.getElementsByClassName("sliderJS-slide");

    if (sliderSpecs.widescreenPics == true) {
        container.className += "sliderJs-widescreen "
    }

    if (sliderSpecs.reversedOrder == true) {
        imageList.reverse();
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
            case "fade":
                slides[count].className += " sliderJS-fade "
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