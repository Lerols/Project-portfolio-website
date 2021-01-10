const burger = document.querySelector('.burger');
const navHidden = document.querySelector('.side-bar');
const contents = document.querySelector('.contents');

function handleburgerClicked(){
    navHidden.classList.toggle('active_sidebar');
    contents.classList.toggle('contents_checked');

    burger.classList.toggle("toggle");
}

function init(){
    burger.addEventListener("click",handleburgerClicked);

}

init();