const buttonsOrder = document.querySelectorAll('.product__button__order');
const overlayOrder = document.querySelector('.overlay__order');
const order = overlayOrder.querySelector('.model__order')


buttonsOrder.forEach(buttonOrder => {
    buttonOrder.addEventListener('click', () => {
        overlayOrder.classList.add('overlay__active');
        order.value = buttonOrder.dataset.order;
    })
});

overlayOrder.addEventListener('click', event => {
    const target = event.target;
    console.log('target: ', target);
    
    if (target === overlayOrder || target.closest('.model__close')) {
        overlayOrder.classList.remove('overlay__active');
    }
})