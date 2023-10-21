let button = document.querySelector('.switch');
let price1 = document.querySelector('.bundles .basic .price');
let price2 = document.querySelector('.bundles .pro .price');
let price3 = document.querySelector('.bundles .master .price');

let prices = [19, 24, 39];
let i=-1;
button.addEventListener('click', ()=>{
    document.querySelector('.circle').style.transform = `translateX(${i*50}%)`;
    
    for(let j=1; j <=3; j++){
        eval("price"+j).innerHTML = `$ ${prices[j-1]+((i == -1)? '9':'')}.99`;
    }
    
    i *= -1;
})

