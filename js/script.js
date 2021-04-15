$(".js-disAll").click(function(){
	$(".dd-all").toggleClass('block');
	var flag = $(this).data('flag');
	$(this).text(!flag ? '收起' : '全部').data('flag', !flag);
	
})

$('#lightgallery li').click(function(){
	$('.carpicbtn').show();
})
$('lg-backdrop').click(function(){
	alert(1)
	$('.carpicbtn').hide();
})






// 更多车辆品牌
$('.more_car').click(function(){
	$('.brand_wrap').fadeIn()
})

$('.brand_head .close').click(function(){
	$('.brand_wrap').hide()
})



// 条件选车
$('.condition_item ul li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
})


$('.condition_btn').click(function(){
	$('.condition_screen').fadeIn();
})
$('.condition_title .close').click(function(){
	$('.condition_screen').hide();
})



