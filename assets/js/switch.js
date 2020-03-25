var prev = "m4-home";
var canChange = true;

function keyPressForward(event) {
    console.log(event);

    if(event.keyCode == 39) {
        if(prev == "m4-home") this.switchTo("m4-aboutme");
        else if(prev == "m4-aboutme") this.switchTo("m4-projects");
        else if(prev == "m4-projects") this.switchTo("m4-home");
    } else if(event.keyCode == 37) {
        if(prev == "m4-home") this.switchTo("m4-projects");
        else if(prev == "m4-aboutme") this.switchTo("m4-home");
        else if(prev == "m4-projects") this.switchTo("m4-aboutme");
    }
}

function switchTo(name) {
    if(!canChange) return;
    this.change(name, prev);
    prev = name;

}

function change(name, prev) {
    canChange = false;
    var header = document.getElementById("m4-header");
    header.style.height = 98 + "vh";
    this.update(name);
    setTimeout(function () {
        this.hide(prev);
        this.show(name);
        if(name=="m4-projects") {
            header.getElementsByTagName("h1").item(0).style.opacity = "0";
            header.style.height = 15 + "vh";
        } else {
            header.style.height = 40 + "vh";
            header.getElementsByTagName("h1").item(0).style.opacity = "1";
        }
    }, 1030);

    setTimeout(function () {
        canChange = true;
    }, 1400)
}

function update(name) {
    $htmlText = "";
    if(name == "m4-home") {
        $htmlText += " <a id=\"m4-current-page\">Home</a>";
        document.title = "moritz :: HOME"
    }
    else $htmlText += " <a onclick=\"switchTo('m4-home')\">Home</a>";

    if(name == "m4-aboutme") {
        $htmlText += " <a id=\"m4-current-page\"\">About me</a>";
        document.title = "moritz :: ABOUT"
    }
    else $htmlText += " <a onclick=\"switchTo('m4-aboutme')\">About me</a>";

    if(name == "m4-projects") {
        $htmlText += " <a id=\"m4-current-page\"\">Projects</a>";
        document.title = "moritz :: PROJECTS"
    }
    else $htmlText += " <a onclick=\"switchTo('m4-projects')\">Projects</a>";

    document.getElementById("m4-navigation").innerHTML = $htmlText;
}

function show(name) {
    document.getElementById(name).style.display = 'block';
}

function hide(name) {
    document.getElementById(name).style.display = 'none';
}