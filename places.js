const sliders = document.querySelectorAll(".slider");

const places = [
    [
        "images/swiss1.png",
        "images/swiss2.png",
        "images/swiss3.png",
        "images/swiss4.png"
    ],

    [
        "images/georgia1.png",
        "images/georgia2.png",
        "images/georgia3.png",
        "images/georgia4.png"
    ],

    [
        "images/sweden1.png",
        "images/sweden2.png",
        "images/sweden3.png",
        "images/sweden4.png",
        "images/sweden5.png",
    ],
    [
        "images/italy1.png",
        "images/italy2.png",
        "images/italy3.png",
        "images/italy4.png",
        "images/italy5.png",
    ],
      [
        "images/uk1.png",
        "images/uk2.png",
        "images/uk3.png",
        "images/uk4.png",
        "images/uk5.png",
    ],

    [
        "images/norw1.png",
        "images/norw2.png",
        "images/norw3.png",
        "images/norw4.png",
        "images/norw5.png",
    ],
];
sliders.forEach((slider, index) => {

    const image = slider.querySelector(".place-image");
    const next = slider.querySelector(".next");
    const prev = slider.querySelector(".prev");

    let currentImage = 0;

    next.addEventListener("click", () => {

        currentImage++;

        if (currentImage >= places[index].length) {
            currentImage = 0;
        }

        image.src = places[index][currentImage];
    });

    prev.addEventListener("click", () => {

        currentImage--;

        if (currentImage < 0) {
            currentImage = places[index].length - 1;
        }

        image.src = places[index][currentImage];
    });

});