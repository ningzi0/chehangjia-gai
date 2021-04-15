$(function() {
	//点击选车导航事件
	$('.brand_left .numA-Z a').on('click', function(event) {
		event.preventDefault();
		var $self=$(this),
			navT=$self.text(),
			$list=$self.closest('.brand_left').find('.brand_list');

		$self.addClass('active').siblings().removeClass('active');
		$list.animate({
			scrollTop:$list.find('.name:contains('+navT+')').prop('offsetTop')
		}, 'fast');
	});

	//展开品牌列表
	$('.brand_list li').on('click', function(event) {
		event.preventDefault();
		var $self=$(this),
			$downList=$self.next('.a1');
		$downList.length>0?$downList.slideToggle('fast'):false;
	});
	
});