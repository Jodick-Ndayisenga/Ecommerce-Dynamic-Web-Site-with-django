document.addEventListener('DOMContentLoaded', function (){
    let order = document.querySelector('#buttonorder')
    let priceif =document.querySelector('#price').innerHTML;
    let money  = parseInt(priceif.slice(0, -2))
    document.querySelector('#numberOfItems').value = 1
    document.querySelector('#numberOfItems').focus();


    document.querySelector('#numberOfItems').addEventListener('change', function(){
        let cart = document.querySelector('#numberOfItems').value;
        const numberItems = parseInt(cart)
        document.querySelector('#price').innerText = `${money*numberItems} $`
    })

    
    order.addEventListener('click', function(){
        let formAddress = document.querySelector('.form')
        formAddress.style.display = 'block'
    })
})
