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






    // 小米闪购
    let btnl1s=$(".star .top .right .btnLeft");
    let btnr1s=$(".star .top .right .btnRight");
    // 长盒子
    let bottoms1=$(".star .bottom .bigbox");
    // 小盒子宽
    let l=$(".star .bottom .smallbox").width();
    // let w=bottom.offset().left;
    console.log(btnl1s, btnr1s, bottoms1,l);
    let y=0;    

    btnr1s.click(function () {
        y++;
        if (y==3){
            y=2;
        }
        bottoms1.animate({left:`${-y*l-14}`},"slow");
    })
    btnl1s.click(function () {
        y--;
        if (y==-1){
            y=0;
        }
        bottoms1.animate({left:`${-y*l-14}`},"slow");
    })

// 内容一
    let bigboxes = $(".goods9 .star .bottom2 .box .bigbox1");
    let btns = $(".goods9 .star .bottom2 .box ol li.dotss");
    let lbtn1=$(".left_btn");
    let rbtn1=$(".right_btn");
    // console.log(bigboxes, btns);
    bigboxes.eq(0).css("display", "block");
    btns.eq(0).addClass("active1");
    btns.click(function () {
        let k=$(this).index();
        btns.removeClass("active1").eq(k).addClass("active1");
        bigboxes.css("display","none").eq(k).css("display","block");
    })
    let nows=0;
    function nmovel() {
        nows--;
        if (nows<0){
            nows=0;
        }
        bigboxes.css("display", "none").eq(nows).css("display", "block");
        btns.removeClass("active1").eq(nows).addClass("active1");
    }
    function nmove(){
        nows++;
        if (nows==3){
            nows=2;
        }
        // console.log(nows);
        bigboxes.css("display", "none").eq(nows).css("display", "block");
        btns.removeClass("active1").eq(nows).addClass("active1");
    }
    lbtn1.click(function () {
        nmovel();
    })
    rbtn1.click(function () {
        nmove();
    })


// 内容二
    let bigboxes2 = $(".goods9 .star .bottom2 .box .bigbox2");
    let btns2 = $(".goods9 .star .bottom2 .box ol li.dotss1");
    let lbtn2=$(".left_btn1");
    let rbtn2=$(".right_btn1");
    // console.log(bigboxes, btns);
    bigboxes2.eq(0).css("display", "block");
    btns2.eq(0).addClass("active2");
    btns2.click(function () {
        let q=$(this).index();
        btns2.removeClass("active2").eq(q).addClass("active2");
        bigboxes2.css("display","none").eq(q).css("display","block");
    })
    let nows2=0;
    function nmovel2() {
        nows2--;
        if (nows2<0){
            nows2=0;
        }
        bigboxes2.css("display", "none").eq(nows2).css("display", "block");
        btns2.removeClass("active2").eq(nows2).addClass("active2");
    }
    function nmove2(){
        nows2++;
        if (nows2==3){
            nows2=2;
        }
        // console.log(nows);
        bigboxes2.css("display", "none").eq(nows2).css("display", "block");
        btns2.removeClass("active2").eq(nows2).addClass("active2");
    }
    lbtn2.click(function () {
        nmovel2();
    })
    rbtn2.click(function () {
        nmove2();
    })


// 内容三
    let bigboxes3 = $(".goods9 .star .bottom2 .box .bigbox3");
    let btns3 = $(".goods9 .star .bottom2 .box ol li.dotss2");
    let lbtn3=$(".left_btn2");
    let rbtn3=$(".right_btn2");
    // console.log(bigboxes, btns);
    bigboxes3.eq(0).css("display", "block");
    btns3.eq(0).addClass("active3");
    btns3.click(function () {
        let p=$(this).index();
        btns3.removeClass("active3").eq(p).addClass("active3");
        bigboxes3.css("display","none").eq(p).css("display","block");
    })
    let nows3=0;
    function nmovel3() {
        nows3--;
        if (nows3<0){
            nows3=0;
        }
        bigboxes3.css("display", "none").eq(nows3).css("display", "block");
        btns3.removeClass("active3").eq(nows3).addClass("active3");
    }
    function nmove3(){
        nows3++;
        if (nows2==3){
            nows2=2;
        }
        // console.log(nows);
        bigboxes3.css("display", "none").eq(nows3).css("display", "block");
        btns3.removeClass("active3").eq(nows3).addClass("active3");
    }
    lbtn3.click(function () {
        nmovel3();
    })
    rbtn3.click(function () {
        nmove3();
    })


// 内容四
    let bigboxes4 = $(".goods9 .star .bottom2 .box .bigbox4");
    let btns4 = $(".goods9 .star .bottom2 .box ol li.dotss3");
    let lbtn4=$(".left_btn3");
    let rbtn4=$(".right_btn3");
    // console.log(bigboxes, btns);
    bigboxes4.eq(0).css("display", "block");
    btns4.eq(0).addClass("active4");
    btns4.click(function () {
        let z=$(this).index();
        btns4.removeClass("active4").eq(z).addClass("active4");
        bigboxes4.css("display","none").eq(z).css("display","block");
    })
    let nows4=0;
    function nmovel4() {
        nows4--;
        if (nows4<0){
            nows4=0;
        }
        bigboxes4.css("display", "none").eq(nows2).css("display", "block");
        btns4.removeClass("active4").eq(nows2).addClass("active4");
    }
    function nmove4(){
        nows4++;
        if (nows4==3){
            nows4=2;
        }
        // console.log(nows);
        bigboxes4.css("display", "none").eq(nows4).css("display", "block");
        btns4.removeClass("active4").eq(nows4).addClass("active4");
    }
    lbtn4.click(function () {
        nmovel4();
    })
    rbtn4.click(function () {
        nmove4();
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
        bottom.animate({left:`${-t*w-14}`},"slow");

    })
    btnl.click(function () {
        t--;
        if (t==-1){
            t=0;
        }
        bottom.animate({left:`${-t*w-14}`},"slow");
    })




})