$(document).ready((function () {
    $.get("https://youtubedownload.click/header.html", (function (data, status) {
        console.log(data), $("#masthead").html(data)
    }
    )),
        $.get("https://youtubedownload.click/header.htmlfooter.html",
            (function (data, status) {
                console.log(data),
                $("#contact-us").html(data)
            })
        )
}));
