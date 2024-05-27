document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0; // aktualny indeks zdjęcia
    const images = ["image/plandeka.png", "image/plandeka2.png"]; // lista ścieżek do zdjęć

    function showImages(index) {
        const imageElement1 = document.getElementById("image-container");
        const imageElement2 = document.getElementById("image-container-2");
        imageElement1.src = images[index];
        imageElement2.src = images[(index + 1) % images.length];
    }

    function scrollLeft() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImages(currentIndex);
    }

    function scrollRight() {
        currentIndex = (currentIndex + 1) % images.length;
        showImages(currentIndex);
    }

    // Ustawienie pierwszych zdjęć
    showImages(currentIndex);

    // Obsługa przycisków do przewijania
    document.getElementById("scroll-left-button").addEventListener("click", scrollLeft);
    document.getElementById("scroll-right-button").addEventListener("click", scrollRight);

    var imageContainer = document.getElementById('image-container');
    var imageZoomContainer = document.getElementById('image-zoom-container');
    var imageZoom = document.getElementById('image-zoom');

    imageContainer.addEventListener('mousemove', function(event) {
        imageZoomContainer.style.display = 'block';
        var x = event.pageX - imageContainer.offsetLeft;
        var y = event.pageY - imageContainer.offsetTop;
        var width = imageContainer.offsetWidth;
        var height = imageContainer.offsetHeight;
        x = (x / width) * 100;
        y = (y / height) * 100;
        imageZoomContainer.style.left = x + '%';
        imageZoomContainer.style.top = y + '%';
        imageZoom.style.transform = 'translate(-' + x + '%, -' + y + '%) scale(5)';
    });

    imageContainer.addEventListener('mouseout', function() {
        imageZoomContainer.style.display = 'none';
    });
});