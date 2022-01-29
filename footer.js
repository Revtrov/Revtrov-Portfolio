let email = document.getElementById("Email");
let github = document.getElementById("GitHub");
let updated = document.getElementById("Updated");
let emailPress = 0;
let githubPress = 0;
let updatedPress = 0;
if (window.innerWidth < 985) {
    email.addEventListener("click", () => {
        if (emailPress == 0) {
            email.style = `
        position: fixed;
        left: 0%;
        top: 0%;
        font-size: 100% !important;
        height: 100vh;
        width: 100vw;
        background: linear-gradient(217deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 1), rgba(0, 255, 0, 1) 70.71%), linear-gradient(336deg, rgba(0, 0, 255, 1), rgba(0, 0, 255, 0) 70.71%);
        line-height: 100vh!important;
        z-index: 100;
        user-select=auto`;
            emailPress++;
            document.getElementById("emailLink").href = "#";
        } else {
            email.style = `
        text-align: center;
        width: 33.3333333vw;
        height: 8vh!importand;
        color: white;
        font-size: 100%;
        transition: height 300ms ease;
        user-select:none`;
            emailPress = 0;
            document.getElementById("emailLink").href = "https://mail.google.com/mail/?view=cm&fs=1&to=RevtrovBusiness@gmail.com";

        }
    })
    github.addEventListener("click", () => {
        if (githubPress == 0) {
            github.style = `
        position: fixed;
        left: 0%;
        top: 0%;
        font-size: 100% !important;
        height: 100vh;
        width: 100vw;
        z-index: 100;
        background: linear-gradient(217deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 1), rgba(0, 255, 0, 1) 70.71%), linear-gradient(336deg, rgba(0, 0, 255, 1), rgba(0, 0, 255, 0) 70.71%);
        line-height: 100vh!important;
        user-select=auto`;
            document.getElementById("githubLink").href = "#";
            githubPress++;
        } else {
            github.style = `
        text-align: center;
        width: 33.3333333vw;
        height: 8vh!important;
        color: white;
        font-size: 100%;
        user-select:none`;
            githubPress = 0;
            document.getElementById("githubLink").href = "https://github.com/Revtrov";
        }
    })
    updated.addEventListener("click", () => {
        if (updatedPress == 0) {
            updated.style = `
        position: fixed;
        left: 0%;
        top: 0%;
        font-size: 100% !important;
        height: 100vh!important;
        width: 100vw;
        z-index: 100;
        background: linear-gradient(217deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 1), rgba(0, 255, 0, 1) 70.71%), linear-gradient(336deg, rgba(0, 0, 255, 1), rgba(0, 0, 255, 0) 70.71%);
        line-height: 100vh!important;
        user-select=auto`;
            updatedPress++;
        } else {
            updated.style = `
        text-align: center;
        width: 33.3333333vw;
        height: 8vh;
        color: white;
        font-size: 100%;
        user-select:none`;
            updatedPress = 0;
        }
    })
} else {
    document.getElementById("githubLinkD").href = "https://github.com/Revtrov";
    document.getElementById("emailLinkD").href = "https://mail.google.com/mail/?view=cm&fs=1&to=RevtrovBusiness@gmail.com";
    document.querySelector(".egg").addEventListener("click", () => {
        if (updatedPress == 0) {
            console.log("sdfsdf")
            document.querySelector(".egg").style = `    position: relative;
            text-align: center;
            width: 33.3333333vw;
            height: 100%;
            color: white;
            font-size: 100%;`;
            document.querySelector("#egg").style = `
                opacity:0;
                pointer-events:none;
            position:fixed;
            right:0;
            bottom:0;
            `
            try {
                document.getElementById("canFrame").style = `
                opacity:0;pointer-events:none`;
            } catch { null }
            updatedPress++;
            console.log(updatedPress)
        } else {
            updatedPress++;
            if (updatedPress == 3) {
                console.log(updatedPress)
                document.querySelector(".egg").style = `
            position: fixed;
            left: 0%;
            top: 0%;
            font-size: 100% !important;
            height: 100vh!important;
            width: 100vw;
            z-index: 100;
            background: linear-gradient(217deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 1), rgba(0, 255, 0, 1) 70.71%), linear-gradient(336deg, rgba(0, 0, 255, 1), rgba(0, 0, 255, 0) 70.71%);
            line-height: 100vh!important;
            user-select=auto`;
                document.querySelector("#egg").style = `
                opacity:1;
                pointer-events:auto;
            position:fixed;
            right:0;
            bottom:0;
            `;
                document.querySelector("#egg").addEventListener("click", () => {
                    if (!document.getElementById("canFrame")) {
                        let canFrame = document.createElement("iframe");
                        canFrame.setAttribute("id", "canFrame");
                        document.body.appendChild(canFrame);
                        canFrame = document.getElementById("canFrame");
                        canFrame.style = `
                    position:fixed;
                    top:calc(50% - 25vh);
                    left:calc(50% - 25vw);
                    height:50vh;width:50vw;`;
                        canFrame.src = "can/can.html"
                    } else {
                        document.getElementById("canFrame").style = `
                    position:fixed;
                    top:calc(50% - 25vh);
                    left:calc(50% - 25vw);
                    height:50vh;width:50vw;`;

                    }

                });
            }
            if (updatedPress > 2) {
                console.log(updatedPress)
                updatedPress = 0;
            }
        }
    })
}