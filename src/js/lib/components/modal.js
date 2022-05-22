import $ from '../core';

$.prototype.modal = function()  {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });
    }

    const fadeOutElem = () => {
        $('.modal').fadeOut(500);
         document.body.style.overflow = '';
    }

    const closeElements = document.querySelectorAll('[data-close]');

    closeElements.forEach(item => {
        $(item).click(() => {
            fadeOutElem();
        });
    });

    $('.modal').click(e => {
        if (e.target.classList.contains('modal')) {
            fadeOutElem();
        }
    });
};

$('[data-toggle="modal"]').modal();