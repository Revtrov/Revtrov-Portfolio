let logo = document.getElementById("logo"),
    logoPress = 0;
if (window.innerWidth < 985) {
    logo.addEventListener("click", () => {
        if (logoPress == 0) {
            document.getElementById("mobileNavMenu").style.left = "0%";
            document.getElementById("mobileNavMenu").style.opacity = "1";
            document.getElementById("mobileNavMenu").style.pointerEvents = "auto";
            logoPress++;
        } else {
            document.getElementById("mobileNavMenu").style.left = "-100%";
            setTimeout(() => {
                document.getElementById("mobileNavMenu").style.opacity = "0";
                document.getElementById("mobileNavMenu").style.pointerEvents = "none";
            }, 300)
            logoPress = 0;
        }
    })
}