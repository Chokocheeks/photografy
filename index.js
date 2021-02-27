import {bootstrap} from 'bootstrap';

document.addEventListener('DOMContentLoaded', function(){
    const menuButton = document.querySelector('#navbarExtendedButton');
    const extendedMenu = document.querySelector('#extendedMenu');
    menuButton.addEventListener('click', function(){
        extendedMenu.classList.toggle('right-animated');
    });

    //сщздаем элементы с помощью create Element
    const popupWindow = document.querySelector('#popupWindow');
    const imageBlock = document.createElement('div');
    imageBlock.classList.add('image-block');
    const fullImage = document.createElement('img');
    fullImage.classList.add('full-image');
    const buttonClose = document.createElement('button');
    buttonClose.classList.add('button-close');

    //добавляем жлементы внутри дргуих
    imageBlock.insertAdjacentElement('afterbegin', fullImage);
    popupWindow.insertAdjacentElement('afterbegin', imageBlock);
    popupWindow.insertAdjacentElement('afterbegin', buttonClose);

    const gallerySection = document.querySelector('#gallerySection');
    gallerySection.addEventListener('click', function(event){
        const currentObj = event.target;
        if(currentObj.tagName === 'IMG'){
            popupWindow.classList.add('active');
            const fullImageSrc = currentObj.getAttribute('src');
            if(fullImageSrc !== null){
                fullImage.src = fullImageSrc;
            }
        }
    });

    //делаем что бы крестик закрывал
    buttonClose.addEventListener('click', function(){
        popupWindow.classList.remove('active');
    });

    const decorationMouseBlock = document.querySelector('#decorationMouseBlock');
    const decorationMouse = document.querySelector('#decorationMouse');
    decorationMouseBlock.addEventListener('mousemove', function(event){
        event.stopPropagation();
        decorationMouse.style.left = (event.offsetX - 20) + 'px';
        decorationMouse.style.top = (event.offsetY + 20) + 'px';
    });
});
