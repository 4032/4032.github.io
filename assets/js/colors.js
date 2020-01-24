function copyText(text) {
    var copyText = document.createElement("textarea");
    copyText.value = text;
    copyText.style.opacity = 0;

    document.body.appendChild(copyText);

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(copyText);
}

function randomColor() {
    var colorsObj = document.getElementById("colors");
    colorsObj.style.opacity = 0;

    var red = this.getRandom(0, 255);
    var green = this.getRandom(0, 255);
    var blue = this.getRandom(0, 255);

    setTimeout(function () {
        colorsObj.innerHTML =
            "<div class=\"color-matches\">" +
            "<div onclick='getColor(event)' style=\"background-color: " + getRGB(red - 10, green - 40, blue) + "\" class=\"color\"></div>" +
            "<div onclick='getColor(event)' style=\"background-color: " + getRGB(red - 10, green, blue - 40) + "\" class=\"color\"></div>" +
            "<div onclick='getColor(event)' style=\"background-color: " + getRGB(red, green, blue) + "\" class=\"color\"></div>" +
            "<div onclick='getColor(event)' style=\"background-color: " + getRGB(red + 10, green, blue + 40) + "\" class=\"color\"></div>" +
            "<div onclick='getColor(event)' style=\"background-color: " + getRGB(red + 10, green + 40, blue) + "\" class=\"color\"></div>" +

            "</div>";
        colorsObj.style.opacity = 1;
    }, 500);

}

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getColor(event) {
    var hex =  event.target.style.backgroundColor;
    console.log(hex);

    var copied = document.getElementById("m4-copied");
    copied.style.opacity = 1;
    copied.style.marginLeft = 10 + "px";

    this.copyText(hex);

    setTimeout(function () {
        document.getElementById("m4-copied").style.opacity = 0;
        document.getElementById("m4-copied").style.marginLeft = -50 + "px";
    }, 1500)
}

function getRGB(r,g,b) {
        return "rgb(" + r + ", " + g + ", " + b + ")";
}