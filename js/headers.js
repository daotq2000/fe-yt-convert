$(document).ready((function () {
    $.get("https://youtubedownload.click/header.html", (function (data, status) {
        console.log(data), $("#masthead").html(data)
    }
    ))
}));
