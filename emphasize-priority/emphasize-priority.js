(function () {
    var emphasizepriority = function (taskElement) {
        if ($(taskElement).has('div i.kt-icon-up-bold').length == 1) {
            $(taskElement).addClass('taskHigh');
        } else {
            $(taskElement).removeClass('taskHigh');
        }
        if ($(taskElement).has('div i.kt-icon-down-bold').length == 1) {
            $(taskElement).addClass('taskLow');
        } else {
            $(taskElement).removeClass('taskLow');
        }
    };

    $(window).on('kt-task:render', function (e) {
        return emphasizepriority(e.target);
    });

    KT.onInit(function () {
        $('head').append("<style>.taskHigh {border-color: red;border-width: 3px; border-style:solid;} .taskLow {opacity: .5}</style>")


        return setTimeout(function () {
            return $('kt-task').each(function () {
                return emphasizepriority(this);
            });
        }, 750);
    });
}).call(this);