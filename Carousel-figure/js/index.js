//全局变量
var index = 0,
    timer = null,
    pics = byId("banner").getElementsByTagName("div"),
    size = pics.length,
    btn = byId("nav").getElementsByTagName("a");

//封装一个获取ID的函数
function byId(id) {
    return typeof (id) ==="string"?document.getElementById(id):id;
}

//清楚定时器，停止自动播放
function stopAutoPlay() {
    if (timer){
        clearInterval(timer);
    }
}
//图片自动轮播
function startAutoPlay() {
    timer = setInterval(function () {
        index++;
        if (index >= size ){
            index = 0;
        }
        changeImg();
    },1000)
}


//切换图片
function changeImg() {
    for(var i=0,len=btn.length;i<len;i++){
        btn[i].className = "";
        pics[i].style.display = "none";
    }
    btn[index].className = "active";
    pics[index].style.display = "block";
}

function slideImg() {

    var main = byId("main");

    //鼠标滑过图片停止切换图片
    main.onmouseover = function () {
        stopAutoPlay();
    }

    //鼠标离开自动开始轮播图片
    main.onmouseout = function () {
        startAutoPlay();
    }
    main.onmouseout();

    //点击导航切换
    for(var i = 0,len=btn.length;i<len;i++){
        btn[i].id = i;
        btn[i].onclick = function () {
            index = this.id;
            changeImg();
        }
    }
}
slideImg();