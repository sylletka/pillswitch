(function ($) {
	$.fn.pillswitch = function (options) {
		var settings = $.extend({
				yes : "yes",
				no : "no"
			}, options);
		this.filter("input[type='checkbox']").each(function () {
			var checkbox = $(this);
			checkbox.css({
				'display' : 'none'
			}).addClass('switchValue');
			checkbox.wrap("<span class='pillSwitch'></span>");
			var status = checkbox.prop('checked');
			if (status) {
				checkbox.after("<span class='off inactive'>" + settings.no + "</span>");
				checkbox.after("<span class='on active'>" + settings.yes + "</span>");
			} else {
				checkbox.after("<span class='off active'>" + settings.no + "</span>");
				checkbox.after("<span class='on inactive'>" + settings.yes + "</span>");
			}
			var width = Math.max(checkbox.siblings('.on').width(), checkbox.siblings('.off').width());
			checkbox.siblings('span').each(function () {
				$(this).css({
					'width' : width
				});
			});
		});
		$('body').on('click','.pillSwitch',function(){
			var pillSwitch = $(this);
			var checkbox = pillSwitch.find("input[type='checkbox'].switchValue");
			pillSwitch.find('.off').toggleClass('active').toggleClass('inactive');
			pillSwitch.find('.on').toggleClass('active').toggleClass('inactive');
			var status = checkbox.prop('checked');
			if (status == true) {
				checkbox.prop('checked', false).removeAttr('checked');
			} else {
				checkbox.prop('checked', true).attr({'checked' : 'checked'});
			}
		});
		return this;
	};
}
	(jQuery));
