// StickyNav
$(document).ready(function () {
    var _0xbd527e = $('#popular-category').offset().top;
    var _0x39e55a = function () {
        var _0x460ca4 = $(window).scrollTop();
        if (_0x460ca4 > _0xbd527e) {
            $('#popular-category').css({
                'position': 'fixed',
                'top': 0x0,
                'z-index': 0x9
            });
        } else {
            $('#popular-category').css({
                'position': 'relative',
                'box-shadow': 'none'
            });
        }
    };
    _0x39e55a();
    $(window).scroll(function () {
        _0x39e55a();
    });
});
$(document).ready(function () {
    if ($('#myfooter').attr('href') != 'https://web.netralid.com/') {
        window.location.href = 'https://web.netralid.com/';
    }
});
$(function () {
    if ($('#sticky-insection').length) {
        var _0x3fe42a = $('#sticky-insection'),
            _0x58442d = $('#sticky-insection').offset().top,
            _0x481107 = $('#sticky-insection').height();
        $(window).scroll(function () {
            var _0x340819 = $('#endsticky').offset().top - _0x481107 - 0x0,
                _0x5b1b33 = $(window).scrollTop();
            if (_0x5b1b33 > _0x58442d ? _0x3fe42a.css({
                    'position': 'fixed',
                    'top': 0x70
                }) : _0x3fe42a.css('position', 'static'), _0x5b1b33 > _0x340819) {
                var _0x289445 = _0x340819 - _0x5b1b33;
                _0x3fe42a.css({
                    'top': _0x289445
                });
            }
        });
    }
});
