$(document).ready(function () {
    $.get("../header.html", function (data, status) {
        console.log(data);
        $('#masthead').html(data);
    });
    $.get("../footer.html", function (data, status) {
        console.log(data);
        $('#contact-us').html(data);
    });
});