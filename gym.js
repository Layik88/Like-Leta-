document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.Gall img');
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');

    images.forEach((image) => {
        image.addEventListener('click', function () {
            popupImage.src = image.src;
            popup.style.display = 'flex';
        });
    });
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
