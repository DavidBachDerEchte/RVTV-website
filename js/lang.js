const languageMap = {
    'en': 'en',
    'de': 'de',
    'fr': 'fr',
    'es': 'es',
    'zh': 'zh',
    'ru': 'ru',
    'pt': 'pt',
    'id': 'id',
    'ja': 'ja',
    'tr': 'tr',
};

const userLanguage = navigator.language.slice(0, 2);
selectedLanguage = languageMap[userLanguage] || 'en';


function updateContent() {
    fetch(`../language/${selectedLanguage}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cookie-consent-title').textContent = data['RVTV.cookie-consent-title'];
            document.getElementById('cookie-consent-paragraph').textContent = data['RVTV.cookie-consent-paragraph'];
            document.getElementById('acceptcookiebtn').textContent = data['RVTV.accept-cookie'];
            document.getElementById('declinecookiebtn2').textContent = data['RVTV.decline-cookie'];

            document.getElementById('first-nav-item').textContent = data['RVTV.first-nav-item'];
            document.getElementById('second-nav-item').textContent = data['RVTV.second-nav-item'];
            document.getElementById('third-nav-item').textContent = data['RVTV.third-nav-item'];
            document.getElementById('switchToEnglish').textContent = data['RVTV.fourth-nav-item'];
            document.getElementById('switchToGerman').textContent = data['RVTV.fifth-nav-item'];

            document.getElementById('about-us-title').textContent = data['RVTV.about-us-title'];
            document.getElementById('about-us-paragraph').textContent = data['RVTV.about-us-paragraph'];

            document.getElementById('video1-title').textContent = data['RVTV.video-title'];
            document.getElementById('video2-title').textContent = data['RVTV.video-title'];
            document.getElementById('video3-title').textContent = data['RVTV.video-title'];
            document.getElementById('video4-title').textContent = data['RVTV.video-title'];
            document.getElementById('video5-title').textContent = data['RVTV.video-title'];
            document.getElementById('video6-title').textContent = data['RVTV.video-title'];
        });

}

updateContent();

document.getElementById('switchToEnglish').addEventListener('click', () => {
    selectedLanguage = 'en';
    updateContent();
});

document.getElementById('switchToGerman').addEventListener('click', () => {
    selectedLanguage = 'de';
    updateContent();
});
