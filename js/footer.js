$(document).ready((function () {
    $.get("https://youtubedownload.click/footer.html",
        (function (data, status) {
            console.log(data),
                $("#contact-us").html(data)
        })
    )
}));
