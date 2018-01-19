/**
 * Created by WAXKI on 2018/1/19.
 */
document.addEventListener('DOMContentLoaded', action);
function action() {
    /****** browser version alert *************/
    if ("ActiveXObject" in window) {
        alert("亲，本页面在IE下样子怪怪的，\n推荐使用Chrome、Firefox等现代浏览器浏览！");
        console.log("本页面在IE下显示异常，请更换其它浏览器！\n珍惜生命，远离IE！！");
    }

    /****** carousel ******/
    var _bgm = document.querySelector('#bgm'),
        _carousel = document.querySelector('#carousel');

    _bgm.volume = .3;
    _carousel.addEventListener('click', function (e) {
        if (_bgm.paused) {
            _bgm.play();
            _carousel.classList.add('z-active');
        }
        else {
            _bgm.pause();
            _carousel.classList.remove('z-active');
        }
//			console.log(_bgm.paused);
        e.stopPropagation();
    });

    document.addEventListener('click', function (e) {
        if (!_bgm.paused) {
            _bgm.pause();
            _carousel.classList.remove('z-active');
        }
    });

    /**** balloons ***********/
    var _balloons = document.querySelectorAll('.balloons');
    for (var i = 0; _balloons[i]; i++) {
        _balloons[i].addEventListener('click', function (e) {
            this.classList.add('z-active');
            e.stopPropagation();
        });
    }

}
