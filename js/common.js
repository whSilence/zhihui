
$(function(){
		//年月日联动
		var selYear=$('select[name=year]');
		var selMonth=$('select[name=month]');
		var selday=$('select[name=day]');

		creatDate();

		function creatDate(){
			var myDate = new Date();
			console.log(myDate.getFullYear());
			addOpt(selYear,[myDate.getFullYear(),myDate.getFullYear()-80]);
			addOpt(selMonth,[1,12]);

			selYear.change(function(e) {
                creatDay(selYear.val(),selMonth.val());
            });

			selMonth.change(function(e) {
                creatDay(selYear.val(),selMonth.val());
            });
		}
		/**
		 *  月份改变
		 */
		function creatDay(year,month){//m为改变的月份值
			selday.empty().html('<option>日</option>');
			var day;
			console.log('year:'+year);
			console.log('month:'+month);
			if(year!='年' && month!='月'){
				year=parseInt(year);
				month=parseInt(month);
				if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12 ) day = 31;
				else if(month==4 || month==6 || month==9 || month==11) day = 30
				else{
					if ((year%4==0 && year%100!=0) || (year%400==0)) day = 29; //闰年公式，判断是否为闰年
					else day=28;
				}
				console.log('day:'+day);
				addOpt(selday,[1,day])
			}
		}
		function addOpt(box,range){
			if(range[1]>=range[0]){
				for(var i=range[0]; i<=range[1]; i++){
					var opt=$('<option></option>').attr({value:i}).text(i).appendTo(box);
				}
			}
			else{
				for(var i=range[0]; i>=range[1]; i--){
					var opt=$('<option></option>').attr({value:i}).text(i).appendTo(box);
				}
			}
		}

	// 快速预约-服务分类
	$('.fast_dl dd').click(function() {
		$(this).addClass('fast_active').siblings('dd').removeClass('fast_active');
	})

	// 快速预约-服务日期
	laydate({
	    elem: '#label_date',
	    format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
	    festival: true, //显示节日
	    choose: function(datas){ //选择日期完毕的回调
	    }
	});
	
	// 快速预约-服务项目修改
	$('.fast_span').click(function() {
		$('.fast_mask').slideToggle();
	});
	$(document).bind('click', function(e){
		var target = $(e.target);
		if(target.closest('.fast_span').length == 0){
			$('.fast_mask').slideUp();
		}
	})
	$('.fast_ul li').click(function() {
		var H4 = $(this).children('.fast_img').children('h4').text();
		var P = $(this).children('p').text();
		$('.fast_dd').text( H4+"  "+P );
	});

})
