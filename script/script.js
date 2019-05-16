$('.carousel').carousel({
    interval: 10,
    touch: true
})

var i = 0;

function nextImage() {
    var images = ['images/first-slide.png', 'images/second-slide.png', 'images/third-slide.png', 'images/fourth-slide.png', 'images/fifth-slide.png', 'images/sixth-slide.png', 'images/seventh-slide.png'];
    if (i + 3 < images.length) {
        i++;
    } else {
        i = 0;
    }
    document.getElementById('first').src = images[i]
    document.getElementById('second').src = images[i + 1]
    document.getElementById('third').src = images[i + 2]
    console.log(i, images[i])
}

function prevImage() {
    var images = ['images/first-slide.png', 'images/second-slide.png', 'images/third-slide.png', 'images/fourth-slide.png', 'images/fifth-slide.png', 'images/sixth-slide.png', 'images/seventh-slide.png'];
    if (i == 0) {
        i = 4;
    } else {
        i--;
    }
    document.getElementById('first').src = images[i]
    document.getElementById('second').src = images[i + 1]
    document.getElementById('third').src = images[i + 2]
    console.log(i, images[i])
}

var nav = responsiveNav(".nav-collapse");

