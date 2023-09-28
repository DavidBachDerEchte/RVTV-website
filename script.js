window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js");
    }
});

function checkOnlineStatus() {
    return navigator.onLine;
}

async function checkNetworkAndReload() {
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
}

window.addEventListener('offline', () => {
    checkNetworkAndReload();
});

