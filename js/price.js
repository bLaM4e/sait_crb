'use strict'

const pricelist = document.querySelector('.pricelist_wrapper');

pricelist.addEventListener('click', event => {
    if (event.target.className !== 'pricelist') {
        const parentBlock = event.target.closest('.pricelist_block');
        const priceBlockDown = parentBlock.querySelector('.pricelist_price_wrapper');
        const x = parentBlock.querySelector('span');

        x.classList.toggle('price_list_open');

        let sumHeight = 0;
        if ([...x.classList].includes('price_list_open')) {
            priceBlockDown.classList.add('pricelist_price_active');

            const rows = priceBlockDown.querySelectorAll('.pricelist_price_item');
            for (const el of rows) {
                sumHeight += el.clientHeight;
            }

            setTimeout(() => {
                priceBlockDown.classList.add('pricelist_price_down');
                priceBlockDown.style.height = sumHeight + "px";
            }, 0);
        } else {
            sumHeight = 0;
            priceBlockDown.classList.remove('pricelist_price_down');
            priceBlockDown.style.height = sumHeight + "px";
            setTimeout(() => {
                priceBlockDown.classList.remove('pricelist_price_active');
            }, 500);
        }
    }
});
