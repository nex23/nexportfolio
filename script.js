let visibleMenu=false;

//Hide and show menu
function showHideMenu(){
    if(visibleMenu){
        document.getElementById("nav").classList ="";
        visibleMenu=false;
    }else{
        document.getElementById("nav").classList ="responsive";
        visibleMenu=true;
    }
}

//Hide menu on select
function select(){
    document.getElementById("nav").classList="";
    visibleMenu=false;
}

//animation skills bars
function skillsEffect(){
    var skills =document.getElementById("skills");
    var skills_distance = window.innerHeight - skills.getBoundingClientRect().top;
    if(skills_distance >= 300){
        let habilidades = document.getElementsByClassName("progress");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("nodejs");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("hacking");
        habilidades[5].classList.add("comunication");
        habilidades[6].classList.add("teamwork");
        habilidades[7].classList.add("creativity");
        habilidades[8].classList.add("crisism");
        habilidades[9].classList.add("dataa");
    }
}

//scroll detect for bar animation
window.onscroll = function(){
    skillsEffect();
}

let previusTitle = document.title;
window.addEventListener('blur', () => {
    previusTitle=document.title
    document.title='No te vayas! :('
})
window.addEventListener('focus', () => {
    document.title=previusTitle
})