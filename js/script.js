jQuery(function ($) {
	$("#js-menu").click(function () {
		$("body").toggleClass("is-drawerActive");
		if ($(this).attr("aria-expanded") == "false") {
			$(this).attr("aria-expanded", true);
			$("#js-drawer").attr("aria-hidden", "false");
			// $("#js-drawer").addClass("is-active");
			$("html,body").css("overflow", "hidden");
		} else {
			$(this).attr("aria-expanded", false);
			$("#js-drawer").attr("aria-hidden", "true");
			// $("#js-drawer").removeClass("is-active");
			$("html,body").css("overflow", "initial");
			$(".js-sub-menu").attr("aria-expanded", false);
			$(".js-sub-menu").attr("aria-expanded", false);
			$("#js-sub-drawer").attr("aria-hidden", "true");
		}
	});

	$(".js-sub-menu").click(function () {
		const this_category = $(this).data("category");
		console.log(this_category);

		// サブメニューの開閉
		if ($(this).attr("aria-expanded") == "false") {
			$(this).attr("aria-expanded", true);
			$("#js-sub-drawer").attr("aria-hidden", "false");
		} else {
			$(this).attr("aria-expanded", false);
			$("#js-sub-drawer").attr("aria-hidden", "true");
		}

		// 該当するサブメニューを表示
		$(".js-sub-drawer-menu").each(function () {
			const target_data = $(this).data("target");
			$(this).removeClass("is-active");

			if (this_category === target_data) {
				console.log(target_data);
				$(this).addClass("is-active");
			}
		});
	});
});
