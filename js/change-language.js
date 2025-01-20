var data = [{
    name: "Tiếng Việt",
    image: "https://flagsapi.com/VN/shiny/64.png",
    code: "vi"
},
{
    name: "English",
    image: "https://flagsapi.com/GB/shiny/64.png",
    code: "en"
}
]
if (localStorage.getItem('language') == null || localStorage.getItem('language') == undefined) {
    var userLang = navigator.language || navigator.userLanguage;
    console.log(userLang)
    var filterLang = data.filter(f => f.code == userLang.toString().substr(0, 2));
    var mainLang = 'us';
    if (filterLang) {
        mainLang = filterLang.code;
        localStorage.setItem('language', mainLang);
    }
    changeLanguage(mainLang);
} else {
    
    // changeLanguage(localStorage.getItem('language'))
}
 
function changeLanguage(lang) {
    data.forEach(f => {
        if (f.code == lang) {
            var currentHost = location.host =='youtubedownload.click'?`https://${location.host}`:`http://${location.host}` ;
            var currentUrl = location.pathname;
            debugger
            if (lang == 'en') {
                if (currentUrl == `` || currentUrl == null || currentUrl.includes('index.html') || currentUrl.includes('/')) {
                    location.href = currentHost+'/index.html';
                } else if (currentUrl.includes(`facebook`)) {
                    location.href = currentHost + `/download-facebook-video.html`;
                } else if (currentUrl.includes(`tiktok`)) {
                    location.href = currentHost + `/download-tiktok-video.html`;
                } else if (currentUrl.includes(`youtube`)) {
                    location.href = currentHost + `/download-youtube-video.html`;
                } else if (currentUrl.includes(`instagram`)) {
                    location.href = currentHost + `/instagram-download-video.html`;
                }
            } else {
                if (currentUrl == `` || currentUrl == null | currentUrl.includes('index.html') || currentUrl.includes('/')) {
                    location.href =  currentHost + `/languagues/${lang}/index.html`;
                } else if (currentUrl.includes(`facebook`)) {
                    location.href = currentHost + `/languagues/${lang}/download-facebook-video.html`;
                } else if (currentUrl.includes(`tiktok`)) {
                    location.href = currentHost + `/languagues/${lang}/download-tiktok-video.html`;
                } else if (currentUrl.includes(`youtube`)) {
                    location.href = currentHost + `/languagues/${lang}/download-youtube-video.html`;
                } else if (currentUrl.includes(`instagram`)) {
                    location.href = currentHost + `/languagues/${lang}/instagram-download-video.html`;
                }
            }
        }
    })
}