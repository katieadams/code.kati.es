$(document).ready(function () {
    $('#pinSlide .pinShare').hover(function () {
        $(this).animate({
            width: "40px"
        }, 200)
    }, function () {
        $(this).animate({
            width: "5px"
        }, 200)
    });
    $('.pinShare,.browser').click(function (e) {
        e.preventDefault()
        var pinBrowse = document.createElement("script");
        pinBrowse.charset = "UTF-8";
        pinBrowse.src = "http://assets.pinterest.com/js/pinmarklet.js";
        document.body.appendChild(pinBrowse);
    });
    $('.pinimage').capty({
        cWrapper: 'capty-tile'
    });
    $('.hovercard').simpleTooltip({
        title: 'Opens in new window!'
    });
    $('.pin').click(function (e) {
        e.preventDefault();
        var pinterestUrl = 'http://pinterest.com/pin/create/bookmarklet/?media=' + ($(this).attr('data-img')) + '&url=' + (location.href) + '&title=' + (document.title) + '&is_video=false';
        window.open(pinterestUrl, 'pinWindow', 'menubar=no,width=640,height=320,toolbar=no');
    })
});