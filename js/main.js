const backToTopButton = document.querySelector('.back-to-top');  /*document representa o css ou site */

window.addEventListener('scroll', function(){
    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    }
    else{
        backToTopButton.classList.remove('show')
    }
});