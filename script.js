let productEl = document.querySelector('#product');
let productdropdown = document.querySelector('.product-dropdown-wrapper')
let dropdown = document.querySelector('.drop')

let companyEl = document.querySelector('#company')
let companydropdown = document.querySelector('.company-dropdown-wrapper')
let dropdown1 = document.querySelector('.drop1')

let connectEl = document.querySelector('#connect')
let connectdropdown = document.querySelector('.connect-dropdown-wrapper')
let dropdown2 = document.querySelector('.drop2')

 let hamburger = document.querySelector(".icon2");
let menudropdown = document.querySelector(".menu");
let closed = document.querySelector(".icon3");

hamburger.addEventListener("click", () => {
menudropdown.classList.add('active')
closed.classList.add('is-active')
hamburger.classList.add('is-active')

})

closed.addEventListener('click', () => {
    hamburger.classList.remove('is-active')
   closed.classList.remove('is-active')
    menudropdown.classList.remove('active')

    productdropdown.classList.remove('active')
    dropdown.classList.remove('is-active')

    companydropdown.classList.remove('active')
    dropdown1.classList.remove('is-active')

    connectdropdown.classList.remove('active')
    dropdown2.classList.remove('is-active')

})



productEl.addEventListener('click', ()=>{
    productdropdown.classList.toggle('active')
    dropdown.classList.toggle('is-active')

    companydropdown.classList.remove('active')
    dropdown1.classList.remove('is-active')

    connectdropdown.classList.remove('active')
    dropdown2.classList.remove('is-active')

})

companyEl.addEventListener('click',()=>{
companydropdown.classList.toggle('active')
dropdown1.classList.toggle('is-active')

productdropdown.classList.remove('active')
dropdown.classList.remove('is-active')

connectdropdown.classList.remove('active')
dropdown2.classList.remove('is-active')


})


connectEl.addEventListener('click',()=>{
connectdropdown.classList.toggle('active')
dropdown2.classList.toggle('is-active')

productdropdown.classList.remove('active')
dropdown.classList.remove('is-active')

companydropdown.classList.remove('active')
dropdown1.classList.remove('is-active')
})
