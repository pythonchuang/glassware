var toggle_toast = function (timeout) {
    if (typeof (timeout) == "undefined") timeout = 3000;
    var c = $(".toast-container");
    c.fadeIn();
    setTimeout(function () {
        c.fadeOut();
    }, timeout);
};
show_toast = function (msg, timeout) {
    $(".toast_content").html(msg);
    toggle_toast(timeout);
};