const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger__active');
    navigation.classList.toggle('navigation__active')
});