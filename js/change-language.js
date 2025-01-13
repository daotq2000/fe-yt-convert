const locales = ["en-GB", "vi-VN"];

function getFlagSrc(countryCode) {
    return /^[A-Z]{2}$/.test(countryCode)
        ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
        : "";
}

const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("dropdown-content");

function setSelectedLocale(locale) {
    const intlLocale = new Intl.Locale(locale);
    const langName = new Intl.DisplayNames([locale], {
        type: "language",
    }).of(intlLocale.language);
    if (!dropdownContent) return;

    const otherLocales = locales.filter((loc) => loc !== locale);
    otherLocales.forEach((otherLocale) => {
        const otherIntlLocale = new Intl.Locale(otherLocale);
        const otherLangName = new Intl.DisplayNames([otherLocale], {
            type: "language",
        }).of(otherIntlLocale.language);

        const listEl = document.createElement("li");
        listEl.innerHTML = `${otherLangName}<img  src="${getFlagSrc(
            otherIntlLocale.region
        )}" />`;
        listEl.value = otherLocale;
        listEl.addEventListener("mousedown", function () {
            var currentUrl = location.href;
            var host = location.host.includes('youtubedownload.click') ? `https://${location.host}` : `http://${location.host}`;
            debugger
            switch (otherLocale) {
                case "en-GB":
                    if (currentUrl.includes("index.html")) {
                        location.href = `${host}/index.html`;
                    } else if (currentUrl.includes("facebook")) {
                        location.href = `${host}/download-facebook-video.html`;
                    } else if (currentUrl.includes("tiktok")) {
                        location.href = `${host}/download-tiktok-video.html`;
                    } else {
                        location.href = `${host}/index.html`;
                    }
                    break;
                case "vi-VN":
                    if (currentUrl.includes("index.html")) {
                        location.href = `${host}/languagues/vi/index.html`;
                    } else if (currentUrl.includes("facebook")) {
                        location.href = `${host}/languagues/vi/download-facebook-video.html`;
                    } else if (currentUrl.includes("tiktok")) {
                        location.href = `${host}/languagues/vi/download-tiktok-video.html`;
                    }else {
                        location.href = `${host}/languagues/vi/index.html`;
                    }
                    break;
            }
            setSelectedLocale(otherLocale);
        });
        dropdownContent.appendChild(listEl);
    });

    dropdownBtn.innerHTML = `<img  src="${getFlagSrc(
        intlLocale.region
    )}" />${langName}<span class="arrow-down"></span>`;
}
var lang = document.getElementsByTagName("html");
var languageDefault = lang[0].getAttribute("lang");
var langFilter = locales.filter((f) => f.includes(languageDefault));
setSelectedLocale(langFilter[0]);