
// 控制台彩蛋
$(function(){
    let hert = `
   :::                                :::  
 :::::::                             ::::: 
:::::::::                          ::::::::
:::::::::::::::::::::::::::::::::::::::::::
::::    :::    ::::::::::::::::   :::  ::::
:::    Smart    :::::cool::::    Crazy  :::
:::::   :::    :::::::::::::::    :::   :::
:::::::::::::::::::::::::::::::::::::::::::

喵~加入我们吧 https: //tb.cn/iS8NBOy
    `;
    console.log(hert);
})

// window点击事件添加文字上浮动画
$(function(){
    // 阻止点击右侧按钮,事件冒泡
    var $rightnav = $('.tmall-rightnav')
    $rightnav.click(function(){
        return false
    })
    var arr= [
        '这个轮播图怎么那么大？',
        '轮播图用了img和bgi合成的',
        '听说这个导航写了3000行代码？',
        '对啊全是a标签,纯手动',
        '你的logo怎么会动啊？',
        '这个logo是gif',
        '轮播图竟然还有懒加载!',
        '懒加载是通过ready事件完成的',
        '鼠标点击右侧导航动画怎么失效了？',
        '右侧导航阻止事件冒泡了',
        '品牌logo区是什么特效？',
        '就是通过旋转与隐藏的动画',

    ]
    var index = -1
    $('body').on('click',function(e){
        var x = e.pageX
        var y = e.pageY
        index = (index + 1) % arr.length
        var $span = $('<span><i class="iconfont">&#xe510;</i>' + arr[index] + '</span>')
        $span.css({
            fontSize:14,
            display:'block',
            borderRadius:7,
            color:'#ff0036',
            position:'absolute',
            index:9999,
            opacity:1,
            top:y,
            left:x
        })
        $('body').append($span)
        $span.animate({
            opacity:0,
            top: y-50,
        },1500,function(){
            $span.remove()
        })
    })
})

// tmall-top天猫顶部
$(function(){   
    var $tmallTopMenu = $('.tmall-top .menu-hd')
    $tmallTopMenu.mouseenter(function(){
        $(this).children('.top-menu').css('display', 'block')
        $(this).siblings().children('.top-menu').css('display', 'none')
    })
    $tmallTopMenu.mouseleave(function(){
        $tmallTopMenu.children('.top-menu').css('display', 'none')
    })
})

// tmall-header天猫头部
$(function(){
    var $input = $('.tmall-header .tmall-search input')
    var $dropdown = $('.tmall-header .tmall-search .search-dropdown')
    var $search = $('.tmall-header .tmall-search')

    $input.keyup(function () {
        if ($input[0].value == '天猫') {
            $dropdown.css('display', 'block')
        } else {
            $dropdown.css('display', 'none')
        }
    })
    $search.mouseleave(function(){
         $dropdown.css('display', 'none')
    })
})

// tmall-normalnav天猫标准导航
$(function(){
    var $normalnav = $('.tmall-normalnav .normalnav-title .normalnav-menu li')
    var $minute = $('.tmall-normalnav .normalnav-minute')
    // 鼠标移入normalnav-title
    $normalnav.mouseenter(function(){
        // 盒子显示
        var idx = $(this).index();
        $minute.eq(idx).css('display','block').siblings().css('display', 'none')
        // 字体变色
        var color = 'color' + (idx + 1)
        $(this).children().addClass( color )
        $(this).children().addClass('fontweight')
        $(this).siblings().children().removeClass()
        // 背景颜色
        $(this).children().css('backgroundColor','#fff')
        $(this).siblings().children().css('backgroundColor', 'rgba(0, 0, 0, .55)')
    })
    // 鼠标移出tmall-normalnav
    $('.js-normalnav').mouseleave(function () {
        $minute.css('display', 'none')
        $normalnav.children().removeClass()
        $normalnav.children().css('backgroundColor', 'rgba(0, 0, 0, .55)')
    })
})

// tmall-banner天猫轮播图（打开懒加载）
$(function () {
    var $bannerBox = $('.tmall-banner .banner-box')
    var $right = $('#arr-right')
    var $banners = $('.tmall-banner .banner-big')
    var $lis = $('.tmall-banner .banner-btn li')
    var $brandimg = $('.tmall-brand .item-img a')
    // 模拟懒加载
    var index = 0
    $(document).ready(function(){
        setTimeout(function(){
            $banners.removeClass('loading')
            $lis.removeClass('loading')
            $brandimg.removeClass('loading')
        },300)
    })
    $lis.on('mouseenter', function () {
        index = $(this).index()
        $banners.eq(index).fadeIn().siblings().fadeOut()
        $lis.eq(index).addClass('active').siblings().removeClass()
    })
    $right.click(function (e) {
        index++
        if (index > 5) {
            index = 0
        }
        $banners.eq(index).fadeIn().siblings().fadeOut()
        $lis.eq(index).addClass('active').siblings().removeClass()
        return false;//阻止事件冒泡，导致监听点击事件
    })
    var timeid
    // 延迟轮播图
    setTimeout(function(){
        timeid = setInterval(function () {
                $right.click()
        }, 4000)
    },300)
    $bannerBox.on('mouseenter', function () {
        clearInterval(timeid)
    })
    $bannerBox.on('mouseleave', function () {
        clearInterval(timeid);//防止鼠标打开页面就在轮播图上开启两个定时器
        timeid = setInterval(function () {
            $right.click()
        }, 4000)
    })
});

// tmall-topsearch天猫滚动顶部固定搜索
$(function(){
    var $topsearch = $('.tmall-topsearch .topsearch')
    // var $barrage = $('.tmall-topsearch .barrage')
    // var $btn = $('.tmall-topsearch .topsearch a')

    $(window).scroll(function(){
        var x = $(window).scrollTop()
        if(x >= 715){
            $topsearch.fadeIn(500)
        }
        else{
            $topsearch.fadeOut(500)
        }
    })
    // $btn.click(function(){
    //     console.log(1);
    //     var x = $(window).width()
    //     var y = $(window).height()
    //     $barrage.eq(0).css({
    //         // width: x,
    //         height:y,
    //         display:'block'
    //     })
    //     var $span = $(<span></span>)
        
    // })

})

 // tmall-rightnav天猫右侧固定导航
$(function(){
    var $tab = $('.tmall-rightnav .tab')
    // 移入效果
    $tab.mouseenter(function(){
        $(this).css('backgroundColor', '#ff0036').siblings().css('backgroundColor', '')
        $(this).children('.note').css('display', 'block')
        $(this).children('.note').stop().animate({
            opacity:1,
            left:-95
        },500)
    })
    $tab.mouseleave(function(){
        $(this).children('.note').stop().animate({
            opacity: 0,
            left: -145
        }, 200)
        $(this).children('.note').css('display', 'none')
        $tab.css('backgroundColor', '')
    })


    // 回到顶部监听
    var $gotop = $('.tmall-rightnav .rightnav-bottom .gotop')
    $(document).scroll(function(){
        var x = $(window).scrollTop()
        // console.log($gotop);
        
        if(x > 5){
            $gotop.css('display','block')
        }
        else{
            $gotop.css('display','none')
        }
    })
    $gotop.click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000)
    })


    // 二维码效果
    var $tabCode = $('.tmall-rightnav .rightnav-bottom .tab-code')
    $tabCode.click(function(){
        $(this).children('#code').fadeToggle()
    })


})

// tmall - brand天猫品牌区
$(function(){
    var $brandBtn = $('.tmall-brand .brand-logo #brand-btn')
    var $lis = $('.tmall-brand .brand-logo .brand-3d')
    var $mask1 = $('.tmall-brand #mask1')
    var $mask2 = $('.tmall-brand #mask2')
    var $masks = $('.tmall-brand .brand-logo .brand-masks')
    var clicks = 0 //记录点击次数
    var lines = 10 //li的列数
    // console.log($lis);
    
    $brandBtn.click(function(){
        clicks++
        // 翻转动画
        $lis.each(function(index,ele){
            var colNum = parseInt(index/ lines);
            var rowNum = index % lines;
            var delayTime = (colNum + rowNum) * 100;
            $lis[index].style.transition = ".3s " + delayTime + "ms linear";
            $lis[index].style.transform = "rotateY(" + 180 * clicks + "deg)";
        })
        //判断修改mask显示内容
        if(clicks % 2 == 1){
            $mask1.css('display','none')
            $mask2.css('display','block')    
        }
        else{
            $mask1.css('display','block')
            $mask2.css('display','none')    
        }
        
    })
    // 移入移出mask动画
    $masks.mouseenter(function(){
        $(this).stop().animate({
            opacity : 1
        },200)
    })
    $masks.mouseleave(function () {
        $(this).stop().animate({
            opacity: 0
        }, 200)
    })

})

// tmall - mart天猫超市部分
$(function(){
    var $banner1 = $('.tmall-mart .mart-body .mart-banner .banner1 ')
    var $banner2 = $('.tmall-mart .mart-body .mart-banner .banner2 ')
    
    $banner1.children('.head').on('mouseenter', function () {
        $banner1.addClass('mark-active')
        $banner2.removeClass('mark-active')
        return false
    })
    $banner2.children('.head').on('mouseenter', function () {
        $banner2.addClass('mark-active')
        $banner1.removeClass('mark-active')
        return false
    })




    
    var $imgs = $('.tmall-mart .mart-body .mart-banner .fl img')
    $imgs.on('mouseenter',function(){
        clearInterval(timeid1)
        clearInterval(timeid2)
        return false
    })
     $imgs.on('mouseleave',function(){
         timeid1 = setInterval(function () {
             $banner1.children('.head').mouseenter()
         }, 2000)
         timeid2 = setInterval(function () {
             $banner2.children('.head').mouseenter()
         }, 4000)
         return false
     })
    var timeid1 = setInterval(function(){
        $banner1.children('.head').mouseenter()
    },2000)
    var timeid2 = setInterval(function(){
        $banner2.children('.head').mouseenter()
    },4000)
})
// tmall-leftnav天猫左侧固定导航
$(function(){
    var $leftnav = $('.tmall-leftnav .nav-box')
    var $navBtn = $('.tmall-leftnav .nav-box .nav-left')
    //arr是动态获取页面盒子到顶部的距离,减去顶部固定导航及其他的
    var arr = [1400,2095,2855,3545,4300,4985,5740,6435,0]
    // var arr = [
    //     $('.tmall-mart').offset().top - 55,
    //     $('.tmall-hk').offset().top - 55,
    //     $('.tmall-fashion').offset().top + 20,
    //     $('.tmall-ele').offset().top - 55,
    //     $('.tmall-live').offset().top + 20,
    //     $('.tmall-home').offset().top - 55,
    //     $('.tmall-outdoors').offset().top + 20,
    //     $('.tmall-like').offset().top - 55,
    //     0,
    // ]
    // console.log(arr);
    $(window).scroll(function(){
        var x = $(window).scrollTop()
        if( x > 700){
            $leftnav.stop(true)
            $leftnav.animate({
                width : '35px',
                height : '369px',
                opacity : '1',
            },100)
        } else {
            // console.log($leftnav.animate())
            $leftnav.stop(true)
            $leftnav.animate({
                width : '0px',
                height : '0px',
                opacity : '0'
            },100)
        }
        for (var i = 0; i < 8; i++) { //8是要实时监听的页面盒子的个数
            if ($(window).scrollTop() > (arr[i]-100)) {
                $navBtn.eq(i).addClass('nav-color').siblings().removeClass('nav-color');     
            }
        }
    })
    $navBtn.on('click',function(){
        $(this).addClass('nav-color').siblings().removeClass('nav-color')     
        var index = $(this).index() 
        $('html,body').stop().animate({//stop防止点击多次抽风现象
            scrollTop:arr[index-1]
        },1000)
    })  
})
// tmall-login天猫登录框部分
$(function(){
    var $content1 = $('.login-show .tmall-login .login-content1')
    var $content2 = $('.login-show .tmall-login .login-content2')
    var $mmBtn = $('.login-show .tmall-login .login-content1 .mm-btn')
    var $smBtn = $('.login-show .tmall-login .login-content2 .sm-btn')
    //登录切换
    $mmBtn.click(function(){
        $content1.css('display','none')
        $content2.css('display','block')
    })
    $smBtn.click(function(){
        $content2.css('display','none')
        $content1.css('display','block')
    })
    // 登录框打开关闭
    var $login = $('.login-show')
    var $add = $('.login')
    var $close = $(' .tmall-login .login-head a')
    // console.log($close);
    // console.log($add)
    
    $close.click(function(){
        $login.css('display','none')
    })
    $add.click(function(){
        $login.css('display','block')
    })

})



