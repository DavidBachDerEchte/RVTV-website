window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("../service-worker.js");
    }
});

const checkOnlineStatus = () => navigator.onLine;

const checkNetworkAndReload = async () => {
    if (!checkOnlineStatus()) {
        window.location.reload();
        return;
    }

    try {
        const response = await fetch('.');
        if (response.status >= 200 && response.status < 500) {
            window.location.reload();
        }
    } catch (error) {
        console.error('Error checking network:', error);
    }

    window.setTimeout(checkNetworkAndReload, 2500);
};

window.addEventListener('offline', () => {
    checkNetworkAndReload();
});

const acceptCookiesBtn = document.getElementById('acceptcookiebtn');
const declineCookiesBtn2 = document.getElementById('declinecookiebtn2');
const myModal = document.getElementById("myModal");
const myModalInstance = new bootstrap.Modal(myModal, { backdrop: 'static', keyboard: false, mouse: false });

const cookieConsent = document.getElementById('cookieConsent');

cookieConsent.addEventListener('click', () => {
    myModalInstance.show();
})

document.addEventListener("DOMContentLoaded", () => {
    if (getCookie("modalShown") === null) {
        myModalInstance.show();
    }
    if (getCookie("modalShown") === "true") {
        handleCookiesAccepted();
    }
});

acceptCookiesBtn.addEventListener('click', () => {
    setCookie("modalShown", "true", 365);
    myModalInstance.hide();
    handleCookiesAccepted();
});

const handleCookiesAccepted = () => {
    loadYouTubeIframes();
};

const loadYouTubeIframes = () => {
    /* Weekly Rally */

    const video1Container = document.getElementById('video1-container');
    const video2Container = document.getElementById('video2-container');
    const video3Container = document.getElementById('video3-container');
    video1Container.innerHTML = `<iframe width="100%" height="225" src="https://www.youtube.com/embed/Fd8S9lnfO6Y?si=ejxGKXPWaC7RcGSp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    video2Container.innerHTML = `<iframe width="100%" height="225" src="https://www.youtube.com/embed/OemuSVeFdLg?si=6D1Pknkgz111VNrO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    video3Container.innerHTML = `<iframe width="100%" height="225" src="https://www.youtube.com/embed/3yU2-T49Cz8?si=N4IYV1wRIffaxX-b" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

    /* Up To The Valley */

    const video4Container = document.getElementById('video4-container');
    const video5Container = document.getElementById('video5-container');
    const video6Container = document.getElementById('video6-container');
    video4Container.innerHTML = `<iframe width="100%" height="225" src="https://www.youtube.com/embed/FQe2y6yUzUQ?si=DjCAE_HOp07tU7CG" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    video5Container.innerHTML = `<iframe width="100%" height="225" src="https://www.youtube.com/embed/QUCwPzTZ5cE?si=1T5t1dAkiqX79vjq" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    video6Container.innerHTML = `<iframe width="100%" height="225" src="https://www.youtube.com/embed/ayBw5hEi6jA?si=mbKPvDDUjG8q7tww" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
};

declineCookiesBtn2.addEventListener('click', () => {
    setCookie("modalShown", "false", 365);
    myModalInstance.hide();
    window.location.reload();
});

const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

const getCookie = (name) => {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
};

const goupbtn = document.getElementById('gobackup');
goupbtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
})