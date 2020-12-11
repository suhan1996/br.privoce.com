window.onload = () => {

    let buttons = document.querySelectorAll('.get-extension');

    if (typeof InstallTrigger !== 'undefined') {
        buttons[0].href = "https://addons.mozilla.org/firefox/addon/alora/";
    }
}


let isOn = false;


scrollToSection = (section) => {
    let offset = document.getElementById(section).offsetTop;
    $('html, body').animate({
        scrollTop: offset - 100
    }, 800);
}

toggle = () => {
    let toggler = document.getElementById("toggler");
    let togglerButton = document.getElementById("toggler-button");
    let txtOn = document.getElementById("txt-on");
    let txtOff = document.getElementById("txt-off");
    let iconAlora = document.getElementById("icon-alora");
    
    if (isOn) {
        toggler.classList.remove("toggler-on");
        toggler.classList.add("toggler-off");
        
        togglerButton.classList.remove("toggler-button-on");
        togglerButton.classList.add("toggler-button-off");
        
        txtOff.style.display = "block";
        txtOn.style.display = "none";

        iconAlora.src = "assets/icon-off.png";
    } else {
        toggler.classList.remove("toggler-off");
        toggler.classList.add("toggler-on");

        togglerButton.classList.remove("toggler-button-off");
        togglerButton.classList.add("toggler-button-on");

        txtOff.style.display = "none";
        txtOn.style.display = "block";

        iconAlora.src = "assets/icon-on.png";
    }
    isOn = !isOn;
}

$(function(){ 
    var navMain = $("#navDropdown");
    navMain.on("click", ".menu-item", null, () => {
        navMain.collapse('hide');
    });
});

window.onresize = () => {
    let card = document.getElementById("container-card");
    if (window.innerWidth < 720) {
        card.classList.remove("ml-auto");
        card.classList.add("mx-auto");
    } else {
        card.classList.remove("mx-auto");
        card.classList.add("ml-auto");
    }
}