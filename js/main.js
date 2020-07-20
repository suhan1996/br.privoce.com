let toggler = document.getElementById("toggler");
let togglerButton = document.getElementById("toggler-button");
let txtOn = document.getElementById("txt-on");
let txtOff = document.getElementById("txt-off");
let iconAlora = document.getElementById("icon-alora");
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