/* node JSLint: true */
$("#imageGallery a").click(function (event) {
    event.preventDefault();
    var href = $(this).attr("href");
    console.log(href);
});
