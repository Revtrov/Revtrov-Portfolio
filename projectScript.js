// portfolio code
document.getElementById("left-button").addEventListener("click", () => {
    console.log("left button clicked")
    if (window.innerWidth > 900) {
        document.getElementById("ySpinL").style.transform = "rotateY(180deg)";
        document.getElementById("zSpinL").style.transform = "rotateZ(90deg)";
        document.getElementById("card-left").style.position = "fixed";
        document.getElementById("card-left").style.zIndex = "5";
        document.getElementById("card-left").style.top = "50vh";
        document.getElementById("card-left").style.left = "75vw";
        document.getElementById("back-left").style.width = "100vh";
        document.getElementById("back-left").style.height = "200vh";
        document.getElementById("card-left").style.transform = "scale(1)"
    }
    setTimeout(function() {
        window.location = "/typingPractice/index.html";
    }, 400)
})
document.getElementById("right-button").addEventListener("click", () => {

    if (window.innerWidth > 900) {
        document.getElementById("ySpinR").style.transform = "rotateY(180deg)";
        document.getElementById("zSpinR").style.transform = "rotateZ(90deg)";
        document.getElementById("back-right").style.width = "100vh";
        document.getElementById("back-right").style.height = "200vh";
        document.getElementById("card-right").style.position = "fixed";
        document.getElementById("card-right").style.top = "50vh";
        document.getElementById("card-right").style.left = "75vw";
        document.getElementById("card-right").style.zIndex = "5";
        document.getElementById("card-right").style.transform = "scale(1)"
    }
    setTimeout(function() {
        window.location = "https://coolacansat.epizy.com";
    }, 400)
})
document.getElementById("middle-button").addEventListener("click", () => {

    if (window.innerWidth > 900) {
        document.getElementById("ySpinM").style.transform = "rotateY(180deg)";
        document.getElementById("zSpinM").style.transform = "rotateZ(90deg)";
        document.getElementById("back-middle").style.width = "100vh";
        document.getElementById("back-middle").style.height = "200vh";
        document.getElementById("card-middle").style.position = "fixed";
        document.getElementById("card-middle").style.top = "50vh";
        document.getElementById("card-middle").style.left = "75vw";
        document.getElementById("card-middle").style.zIndex = "5";
        document.getElementById("card-middle").style.transform = "scale(1)"
    }
    setTimeout(function() {
        window.location = "/solarSystem/index.html";
    }, 400)

})
document.getElementById("middle-right-button").addEventListener("click", () => {

    if (window.innerWidth > 900) {
        document.getElementById("ySpinM").style.transform = "rotateY(180deg)";
        document.getElementById("zSpinM").style.transform = "rotateZ(90deg)";
        document.getElementById("back-middle").style.width = "100vh";
        document.getElementById("back-middle").style.height = "200vh";
        document.getElementById("card-middle").style.position = "fixed";
        document.getElementById("card-middle").style.top = "50vh";
        document.getElementById("card-middle").style.left = "75vw";
        document.getElementById("card-middle").style.zIndex = "5";
        document.getElementById("card-middle").style.transform = "scale(1)"
    }
    setTimeout(function() {
        window.location = "/circleAnim/index.html";
    }, 400)

})
document.getElementById("left-button").addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        console.log("left button clicked")
        if (window.innerWidth > 900) {
            document.getElementById("ySpinL").style.transform = "rotateY(180deg)";
            document.getElementById("zSpinL").style.transform = "rotateZ(90deg)";
            document.getElementById("card-left").style.position = "fixed";
            document.getElementById("card-left").style.zIndex = "5";
            document.getElementById("card-left").style.top = "50vh";
            document.getElementById("card-left").style.left = "75vw";
            document.getElementById("back-left").style.width = "100vh";
            document.getElementById("back-left").style.height = "200vh";
            document.getElementById("card-left").style.transform = "scale(1)"
        }
        setTimeout(function() {
            window.location = "/typingPractice/index.html";
        }, 400)
    }
})
document.getElementById("right-button").addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        if (window.innerWidth > 900) {
            document.getElementById("ySpinR").style.transform = "rotateY(180deg)";
            document.getElementById("zSpinR").style.transform = "rotateZ(90deg)";
            document.getElementById("back-right").style.width = "100vh";
            document.getElementById("back-right").style.height = "200vh";
            document.getElementById("card-right").style.position = "fixed";
            document.getElementById("card-right").style.top = "50vh";
            document.getElementById("card-right").style.left = "75vw";
            document.getElementById("card-right").style.zIndex = "5";
            document.getElementById("card-right").style.transform = "scale(1)"
        }
        setTimeout(function() {
            window.location = "https://coolacansat.epizy.com";
        }, 400)
    }
})
document.getElementById("middle-button").addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        if (window.innerWidth > 900) {
            document.getElementById("ySpinM").style.transform = "rotateY(180deg)";
            document.getElementById("zSpinM").style.transform = "rotateZ(90deg)";
            document.getElementById("back-middle").style.width = "100vh";
            document.getElementById("back-middle").style.height = "200vh";
            document.getElementById("card-middle").style.position = "fixed";
            document.getElementById("card-middle").style.top = "50vh";
            document.getElementById("card-middle").style.left = "75vw";
            document.getElementById("card-middle").style.zIndex = "5";
            document.getElementById("card-middle").style.transform = "scale(1)"
        }
        setTimeout(function() {
            window.location = "/solarSystem/index.html";
        }, 400)
    }
})