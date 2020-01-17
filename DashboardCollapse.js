var eyeCSS = "<style>.fa-eye.open {color: #2084b6;} .fa-eye.closed{color: black;}</style>"
$('body').append(eyeCSS);

$(document).on('ajaxStop', function() {
	
		var btnEyeball = '<i class="fa fa-eye open" style="float:right;"></i>';
		var widgets = $('.adf-widget-title>span')
		$.each(widgets, function (x, widget) {
			$(widget).append(btnEyeball);
		});

		$('.fa-eye').bind('click', function(e) {
			processToggle(e.currentTarget);
		})
		
		function processToggle (item){
			$(item).parent().parent().parent().parent().next().toggle();
			$(item).toggleClass('closed');
			$(item).toggleClass('open');
		}
		
		var btnEyeballCollapse = '<a class="k-button pull-right btn btn-default btn-eyeball-collapse">Collapse All</a>';
		var placement = $('.container-fluid.margin-t20.ng-scope');
		placement.append(btnEyeballCollapse);
		
		$('.k-button.pull-right.btn.btn-default.btn-eyeball-collapse').bind('click', function(e) {
			var open = $('.fa-eye.open')
			open.each(function(){
				processToggle(this);
			});
		})
		
		var btnEyeballExpand = '<a class="k-button pull-right btn btn-default btn-eyeball-expand">Expand All</a>';
		placement.append(btnEyeballExpand);
		
		$('.k-button.pull-right.btn.btn-default.btn-eyeball-expand').bind('click', function(e) {
			var closed = $('.fa-eye.closed')
			closed.each(function(){
				processToggle(this);
			});
		})
		
	$(document).off('ajaxStop');
});