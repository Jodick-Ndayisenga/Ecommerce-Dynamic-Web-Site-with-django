document.addEventListener('DOMContentLoaded', function (){
    let Payment =document.querySelector('.pay')
    Payment.style.display = 'none';
    let Phone = document.querySelector('.code')
    Phone.style.display = 'none'
    let order = document.querySelector('#buttonorder')

    order.addEventListener('click', function(){
        document.querySelector('.cart').style.display = 'none';
        let REGISTRATION = document.querySelector('#submit')
        let formAddress = document.querySelector('.form')
        formAddress.style.display = 'block';
        formAddress.style.animationName= 'myForm';
        formAddress.style.animationPlayState = 'running';
        document.querySelector('#firstName').focus();

        document.querySelector('#firstName').onkeyup=() =>{
            let firstName = document.querySelector('#firstName')
            if (firstName.value.length<3){
                firstName.style.border = '3px solid red';
                let formArea = document.querySelector('#theFirst');
                formArea.innerHTML = ' '
                const li = document.createElement('li');
                li.innerText = 'Name should be 3 char or more!!';
                li.style.cssText = 'textDecoration:none; color:red; margin-left:140px; backgroundColor:white'
                formArea.append(li);
                
            }else{
                firstName.style.border = '1px solid black'
                document.querySelector('#theFirst').innerHTML= ' '
            }    
        }
        document.querySelector('#secondName').onkeyup=() =>{
            let secondName = document.querySelector('#secondName')
            if (secondName.value.length<4){
                firstName.style.border = '3px solid red';
                let formArea = document.querySelector('#theSecond');
                formArea.innerHTML = ' '
                const li = document.createElement('li');
                li.innerText = 'Name should be 3 char or more!!';
                li.style.cssText = 'textDecoration:none; color:red; margin-left:140px; backgroundColor:white'
                formArea.append(li);
                
            }else{
                secondName.style.border = '1px solid black'
                document.querySelector('#theSecond').innerHTML= ' '
            }      
        }

        document.querySelector('.email').onkeyup=() =>{
            const email = document.querySelector('.email');
            if (!email.value.includes('@gmail.com')){
                email.style.border = '3px solid red';
                let formArea = document.querySelector('#theEmail');
                formArea.innerHTML = ' '
                const li = document.createElement('li');
                li.innerText = 'Invalid email !';
                li.style.cssText = 'textDecoration:none; color:red; margin-left:140px; backgroundColor:white'
                formArea.append(li); 
            }else{
                email.style.border = '1px solid black'
                document.querySelector('#theEmail').innerHTML= ' '
            }
        }

        if(document.querySelector('.address').value.length<1){
            document.querySelector('#theAddress').innerText = 'Required section !!'
            document.querySelector('#theAddress').style.cssText = 'textDecoration:none; color:red; margin-left:140px; backgroundColor:white'
        }
        
        document.querySelector('.address').onkeyup = function (){
            if (document.querySelector('.address').value.length>5){
                document.querySelector('#theAddress').innerText = ' '
            }else{
                document.querySelector('#theAddress').innerText = 'Required section !!'
                document.querySelector('#theAddress').style.cssText = 'textDecoration:none; color:red; margin-left:140px; backgroundColor:white'
            }
        }

        document.querySelector('#concel').addEventListener('click', function(){
            window.location = `http://127.0.0.1:8000/addToCart/${document.querySelector('#pageReload').innerText}`
        })

        REGISTRATION.addEventListener('click', function (){
            document.querySelector('.form').style.animationName = 'myRotation';
            document.querySelector('.form').style.animationPlayState = 'running';
            document.querySelector('.register').innerHTML=' ';
            Payment.style.display = 'block';
            REGISTRATION.innerText = 'Next';

            document.querySelector('#submit').addEventListener('click', function (){
                document.querySelector('.form').style.animationName = 'moneyRotate';
                document.querySelector('.form').style.animationPlayState = 'running';
                Payment.style.display = 'none';
                Phone.style.display = 'block';
                document.querySelector('#code').focus();

                document.querySelector('#submit').addEventListener('click', function(){
                    Phone.style.display = 'none';
                    document.querySelector('.amount').innerText =
                    `The amount of ${document.querySelector('#price').innerHTML} will be transacted from your account.`;
                    REGISTRATION.style.cssText = `width:200px; background-color:green; color:#f5dd5d`
                    REGISTRATION.innerHTML = 'Send money';

                    document.querySelector('#submit').addEventListener('click', function(){
                        document.querySelector('.amount').innerText = 'Thank you very much for shopping from Raja Company.\nOur ideal goal is to serve you with the best you deserve.'
                        const conce = document.querySelector('#concel');
                        conce.remove();
                        document.querySelector('#submit').innerText = 'Done';
                        document.querySelector('#submit').addEventListener('click', function (){
                            window.location = `http://127.0.0.1:8000/addToCart/`
                        });
                    })
                })
            })
        })
    })
})