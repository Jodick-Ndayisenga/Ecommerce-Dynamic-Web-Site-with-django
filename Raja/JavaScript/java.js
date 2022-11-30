var stic = document.getElementById('haso')
var jo = document.getElementById('joy')
window.onscroll= () => {
    if (window.pageYOffset >= jo.offsetTop){
        stic.classList.add('sticky');
    }else{
        if (window.pageYOffset<jo.offsetTop){
            stic.classList.remove('sticky');}
        
    }
    
}