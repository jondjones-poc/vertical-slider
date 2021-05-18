const slider = document.querySelector('.container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('.slide').length;

let activeSlider = slidesLength;

const refreshSlider = () => {
    slideLeft.style.top = `-${(activeSlider - 1) * 100}vh`;
}

const updateSlide = (direction) => {
    const height = slider.clientHeight;
    if (direction === 'up') {
        activeSlider++
        if (activeSlider > slidesLength -1) {
            activeSlider = 0;
        }

    } else {
        activeSlider--;
        if (activeSlider < 0) {
            activeSlider = slidesLength - 1;
        }
    }
    slideRight.style.transform = `translateY(-${activeSlider * height}px`;
    slideLeft.style.transform = `translateY(${activeSlider * height}px`;
}

upButton.addEventListener('click', () => updateSlide('up' ));
downButton.addEventListener('click', () => updateSlide('down' ));

refreshSlider();