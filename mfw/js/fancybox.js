$(document).ready(function() {

		$("a#example1").fancybox();

		$("a#example2").fancybox({
			'overlayShow':false,
			'transitionIn':'elastic',
			'transitionOut':'elastic'
		});

		$("a#example3").fancybox({
			'transitionIn':'none',
			'transitionOut':'none'	
		});

		$("a#example4").fancybox({
			'opacity':true,
			'overlayShow':false,
			'transitionIn':'elastic',
			'transitionOut':'none'
		});

		$("a#example5").fancybox();

		$("a#example6").fancybox({
			'titlePosition':'outside',
			'overlayColor':'#000',
			'overlayOpacity':0.9
		});

		$("a#example7").fancybox({
			'titlePosition':'inside'
		});

		$("a#example8").fancybox({
			'titlePosition':'over'
		});

		$("a[rel=example_group]").fancybox({
			'titlePosition':'outside',
			'overlayColor':'#000',
			'overlayOpacity':0.9
		});

		$("#various1").fancybox({
			'titlePosition':'inside',
			'transitionIn':'none',
			'transitionOut':'none'
		});

		$("#various2").fancybox();

		$("#various3").fancybox({
			'width':'75%',
			'height':'75%',
			'autoScale':false,
			'transitionIn':'none',
			'transitionOut':'none',
			'type':'iframe'
		});

		$("#various4").fancybox({
			'padding':0,
			'autoScale':false,
			'transitionIn':'none',
			'transitionOut':'none'
		});
	});
