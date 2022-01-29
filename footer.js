let email = document.getElementById("Email");
let github = document.getElementById("GitHub");
let updated = document.getElementById("Updated");
let emailPress = 0;
let githubPress = 0;
let updatedPress = 0;

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
        user-select=auto`;
        emailPress++;
    } else {
        email.style = `
        text-align: center;
        width: 33.3333333vw;
        height: 100%;
        color: white;
        font-size: 100%;
        user-select:none`;
        emailPress = 0;
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
        background: linear-gradient(217deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 1), rgba(0, 255, 0, 1) 70.71%), linear-gradient(336deg, rgba(0, 0, 255, 1), rgba(0, 0, 255, 0) 70.71%);
        line-height: 100vh!important;
        user-select=auto`;
        emailPress++;
    } else {
        github.style = `
        text-align: center;
        width: 33.3333333vw;
        height: 100%;
        color: white;
        font-size: 100%;
        user-select:none`;
        githubPress = 0;
    }
})
updated.addEventListener("click", () => {
    if (updatedPress == 0) {
        updated.style = `
        position: fixed;
        left: 0%;
        top: 0%;
        font-size: 100% !important;
        height: 100vh;
        width: 100vw;
        background: linear-gradient(217deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(0, 255, 0, 1), rgba(0, 255, 0, 1) 70.71%), linear-gradient(336deg, rgba(0, 0, 255, 1), rgba(0, 0, 255, 0) 70.71%);
        line-height: 100vh!important;
        user-select=auto`;
        updatedPress++;
    } else {
        updated.style = `
        text-align: center;
        width: 33.3333333vw;
        height: 100%;
        color: white;
        font-size: 100%;
        user-select:none`;
        updatedPress = 0;
    }
})