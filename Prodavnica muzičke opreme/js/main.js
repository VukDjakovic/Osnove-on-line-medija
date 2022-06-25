var image = document.querySelector('.hero1-img');
var variable = "j";
var variable = "k";


image.addEventListener('click', function(){
    if (variable == "j") {
        image.src = "img/content/hero2.jpg";
        variable = "k";
    }
    else {
        image.src = "img/content/hero.jpg";
        variable = "j";
    }
})

function prikaziPoruku() {
    var checkBox = document.querySelectorAll(".checkbox");

    var text = document.querySelectorAll(".hidden");
  
    for(var i = 0; i<checkBox.length; i++) {
        if (checkBox[i].checked == true) {
            text[i].style.display = "block";
        } 
        else {
            text[i].style.display = "none";
        }
    }
}

function posaljiPodatke() {
    alert("Uspesno predato!");
}

function promenaBoje() {   
    document.body.style.backgroundColor= "burlywood";
}