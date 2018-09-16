$(function () {

    // 轮播图
    let imgs = $(".ban");
    let btn = $(".banner>ul>li");
    let bbtnl=$(".banner .leftbtn");
    let bbtnr=$(".banner .rightbtn");
    console.log(imgs, btn,bbtnl,bbtnr);
    let now = imgs.index();
    imgs.first().css("display", "block");
    btn.first().addClass("active");
    setInterval(bmove, 5000);
    // 自动轮播
    function bmove() {
        now++;
        if (now == imgs.length) {
            now = 0;
        }
        imgs.css("display", "none").eq(now).css("display", "block");
        btn.removeClass("active").eq(now).addClass("active");
    }
    // 点击左箭头
    function bmovel() {
        now--;
        if (now<0){
            now=imgs.length-1;
        }
        imgs.css("display", "none").eq(now).css("display", "block");
        btn.removeClass("active").eq(now).addClass("active");
    }
    bbtnl.click(function () {
        bmovel();
    })
    bbtnr.click(function () {
        bmove();
    })

// 倒计时
    let numtimes=$(".numtimes");
    console.log(numtimes);

    timesmove();
    let ts = setInterval(timesmove,1000);
    console.log(ts);

    function timesmove() {
        let arr = fn();
        numtimes.eq(0).html(arr[0]);
        numtimes.eq(1).html(arr[1]);
        numtimes.eq(2).html(arr[2]);
    }

    function fn() {
        let now = new Date();
        let future = new Date(2018, 10, 1,18);
        let time = Math.floor((future.getTime() - now.getTime()) / 1000);
        let arr = [];
        // console.log(time);
        let hour = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) / (60 * 60));
        arr.push(hour);
        // console.log(hour);
        let m = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) / 60);
        arr.push(m);
        // console.log(m);
        let s = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) % 60);
        arr.push(s);
        // console.log(s);
        return arr;
    }






    // 购物车
    let gou=$(".header .con .right2");
    let infor=$(".header .con .right2 .information");
    console.log(gou, infor);
    gou.mouseenter(function () {
        infor.slideDown("slow");
    })
    gou.mouseleave(function () {
        infor.slideUp("slow");
    })
    // gou.hover(function() {
    //     infor.slideDown();
    // }, function() {
    //     infor.stop(true,false).slideUp();
    // });


    // 选项卡
    let box = $(".banner .box .good");
    let son = $(".banner .box .good .son");
    // console.log(box, son);
    box.mouseenter(function () {
        let i = $(this).index();
        son.css("display", "none").eq(i).css("display", "block");
    })
    box.mouseleave(function () {
        son.css("display", "none");
    })

    // 家电
    let choosees = $(".background .goods2 .top .right .choose");
    let rightcards = $(".background .goods2 .bottom .rightcard");
    // console.log(choosees, rightcards);
    choosees.mouseenter(function () {
        let j = $(this).index();
        rightcards.css("display", "none").eq(j).css("display", "block");
        choosees.removeClass("choose1").eq(j).addClass("choose1");
    })
    choosees.triggerHandler("mouseenter");

    // 内容
    let bigboxes = $(".goods9 .star .bottom2 .box .bigbox1");
    let btns = $(".goods9 .star .bottom2 .box ol li.dotss");
    // console.log(bigboxes, btns);
    bigboxes.eq(0).css("display", "block");
    btns.eq(0).addClass("active1");
    btns.click(function () {
        let k=$(this).index();
        btns.removeClass("active1").eq(k).addClass("active1");
        bigboxes.css("display","none").eq(k).css("display","block");
    })

    // 为你推荐
    let btnl=$(".goods7 .star .right .btnLeft1");
    let btnr=$(".goods7 .star .right .btnRight1");
    let bottom=$(".goods7 .bottom1 .boxes");
    let w=$(".goods7 .bottom1").width();
    // let w=bottom.offset().left;
    console.log(btnl, btnr, bottom,w);
    let t=0;

    btnr.click(function () {
        t++;
        if (t==3){
            t=2;
        }
        // 点击bottom左移1212px;
        bottom.animate({left:`${-t*w-14}`},"slow");

    })
    btnl.click(function () {
        t--;
        if (t==-1){
            t=0;
        }
        // 点击bottom右移1212px;
        bottom.animate({left:`${-t*w-14}`},"slow");
    })

})