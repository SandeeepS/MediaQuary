const header = document.querySelector('.show');
console.log(header);

const deviceWidth = window.matchMedia("(max-width:767px)");
if(deviceWidth.matches){
    header.classList.add("hide");
}