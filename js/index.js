/*window.onload = function(){
	hengshuping();
}*/

//屏幕方向监测
function hengshuping() {
    if (window.orientation == 180 || window.orientation == 0) {
        // alert("please hengping");
    }
    if (window.orientation == 90 || window.orientation == -90) {
        // alert("hengping");
    }
}

window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
var v_h = null,
    direction = 1,
    e, e1, e2,
    pageno = 0,
    out,
    newM = null;
var isok = true;

function init_pageH() {
    var fn_h = function () {
        if (document.compatMode == "BackCompat")
            var Node = document.body;
        else
            var Node = document.documentElement;
        return Math.max(Node.scrollHeight, Node.clientHeight);
    }
    var page_h = fn_h();
    var m_h = $(".m-page").height();
    page_h <= m_h ? v_h = page_h : v_h = m_h;
    $(".m-page").height(v_h);
    $(".p-index").height(v_h);
}

init_pageH();

//audio
var audio1 = document.getElementById("audio1");

function audioPlay() {
    var currentTime = Date.now();
    var protectTime = 100;
    if ((currentTime - lastRunTime) < protectTime) {
        return;
    }
    if (playStatus) {
        audio1.pause();
    } else {
        audio1.play();
    }
    playStatus = !playStatus;
    lastRunTime = Date.now();
}

$(".startbut").bind("click", function () {
    $(".start").hide();
    $(".rule").show();
});
$(".rule p").bind("click", function () {
    $(".rule").hide();
    $(".part1").show();
    $(".text1").addClass("text-animate").show();
    setTimeout(function () {
        $("#audio1").attr("src", "audio/swim.mp3");
        audio1.play();
    }, 500)
    $(".quizzes1 p:nth-child(1)").addClass("quizzes-animate").show();
    $(".quizzes1 p:nth-child(2)").addClass("quizzes-animate1").show();
    audio1.addEventListener('ended', function () {
        part1sport();
        $(".text1").bind("click", function () {
            $("#audio1").attr("src", "audio/swim.mp3");
            audio1.play();
        });
    });
});
var pClickDataNum = 0;

function part1sport() {

    $(".quizzes1 p").click(function () {
        var dataNum1 = $(this).attr("data-opation1-num");
        pClickDataNum = dataNum1;
        if (dataNum1 == 1) {
            $(".right1").show();
            $('.swim').addClass('run_swim');
            $(".bingo").show();
            $("#audio1").attr("src", "audio/cheer.mp3");
            audio1.play();
            setTimeout(function () {
                $(".next1").show();
            }, 1000);
            $(".quizzes1 p").unbind("click");
        } else {
            $(".false1").addClass("smiling-animate").show();
            $("#audio1").attr("src", "audio/TRY AGAIN.mp3");
            audio1.play();
            setTimeout(function () {
                $(".false1").removeClass("smiling-animate").hide();
            }, 1500);
        }
    });
}

$(".next1").bind("click", function () {
    $(".bingo").hide();
    $(".part1").hide();
    $(".part2").show();
    $(".text2").addClass("text-animate").show();
    setTimeout(function () {
        $("#audio1").attr("src", "audio/drive.mp3");
        audio1.play();
    }, 500)
    $(".quizzes2 p:nth-child(1)").addClass("quizzes-animate1").show();
    $(".quizzes2 p:nth-child(2)").addClass("quizzes-animate").show();
    audio1.addEventListener('ended', function () {
        part2sport();
        $(".text2").bind("click", function () {
            $("#audio1").attr("src", "audio/drive.mp3");
            audio1.play();
        });
    });
});

function part2sport() {
    $(".quizzes2 p").bind("click", function () {
        var dataNum2 = $(this).attr("data-opation2-num");
        pClickDataNum = dataNum2;
        if (dataNum2 == 1) {
            $('.drive').addClass("run_drive")
            $(".right2").show();
            $(".bingo").show();
            setTimeout(function () {
                $(".next2").show();
            }, 1000);
            $("#audio1").attr("src", "audio/cheer.mp3");
            audio1.play();
            $(".quizzes2 p").unbind("click");
        } else {
            $(".false2").addClass("smiling-animate").show();
            $("#audio1").attr("src", "audio/TRY AGAIN.mp3");
            audio1.play();
            setTimeout(function () {
                $(".false2").removeClass("smiling-animate").hide();
            }, 1500);

        }
    });
}

$(".next2").bind("click", function () {
    $(".bingo").hide();
    $(".part2").hide();
    $(".part3").show();
    $(".text3").addClass("text-animate").show();
    setTimeout(function () {
        $("#audio1").attr("src", "audio/havetea.mp3");
        audio1.play();
    }, 500);
    $(".quizzes3 p:nth-child(1)").addClass("quizzes-animate").show();
    $(".quizzes3 p:nth-child(2)").addClass("quizzes-animate1").show();
    audio1.addEventListener('ended', function () {
        part3sport();
        $(".text3").bind("click", function () {
            $("#audio1").attr("src", "audio/havetea.mp3");
            audio1.play();
        });
    });
})

function part3sport() {
    $(".quizzes3 p").bind("click", function () {
        var dataNum3 = $(this).attr("data-opation3-num");
        pClickDataNum = dataNum3;
        if (dataNum3 == 0) {
            $(".right3").show();
            $(".bingo").show();
            $('.tea').addClass('run_tea');
            setTimeout(function () {
                $(".end").show();
            }, 3000);
            $("#audio1").attr("src", "audio/cheer.mp3");
            audio1.play();
            $(".quizzes3 p").unbind("click");
        } else {
            $(".false3").addClass("smiling-animate").show();
            $("#audio1").attr("src", "audio/TRY AGAIN.mp3");
            audio1.play();
            setTimeout(function () {
                $(".false3").removeClass("smiling-animate").hide();
            }, 1500);
        }
    });
}

//end
//再来一次
$(".playangin").click(function () {
    window.location.href = window.location.href + "?id=" + 10000 * Math.random();
});
//预加载
var num = 0;
var the_images = [
    "images/backImg.png",
    "images/bingo.png",
    "images/car1.png",
    "images/car2.png",
    "images/car3.png",
    "images/car4.png",
    "images/car5.png",
    "images/car6.png",
    "images/swim1.png",
    "images/swim2.png",
    "images/swim3.png",
    "images/drivetext.png",
    "images/end_bg.png",
    "images/end_img.png",
    "images/false.png",
    "images/finger.png",
    "images/gbut.png",
    "images/homePage.png",
    "images/loading.gif",
    "images/next0.png",
    "images/playagain1.png",
    "images/rule.jpg",
    "images/starbut.png",
    "images/swimtext.png",
    "images/tea1.png",
    "images/tea2.png",
    "images/teatext.png",
    "audio/cheer.mp3",
    "audio/drive.mp3",
    "audio/havetea",
    "audio/swim.mp3",
    "audio/TRY AGAIN.mp3"
];
jQuery.imgpreload(the_images, {
    each: function () {
        var status = $(this).data('loaded') ? 'success' : 'error';
        if (status == "success") {
            ++num;
            $("#lodingnum").html((num / the_images.length * 100).toFixed(0) + "%");
        }
    },
    all: function () {
        $("#lodingnum").html("100%");
        setTimeout(function () {
            document.getElementById('loading').style.display = "none";
            $(".p-index").css("display", "block");
        }, 300)
    }
})