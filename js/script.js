(function (argument) {
	function handle_radiobtn() {
			const pay_later_btn = document.querySelector('input#payment_choice1');
			const pay_now_btn = document.querySelector('input#payment_choice2');
			const account_details = document.querySelector('#account_details');
			const style_if_checked = {
				opacity: 1, visibility: "visible"
			};
			const style_if_unchecked = {
				opacity: 0, visible: 'hidden'
			};

			// pay_later_btn.addEventListener('click', function (element) {
			// 	const is_checked = element.target.checked;
			// 	if (is_checked) {
			// 		account_details.style = style_if_checked
			// 	}
			// })
			pay_now_btn.addEventListener('click', function (element) {
				const is_checked = element.target.checked;
				if (is_checked) {
					account_details.style.opacity = 1
					account_details.style.visibility = "visible"
				}
			})

	};
	handle_radiobtn()

	function handle_mobile_nav() {
		const menu_icon = document.querySelector('#menu_icon');
		const menu_items = document.querySelector('#menu_items');
		menu_icon.addEventListener('click', function ({target: element}) {
			const is_open = element.dataset.open;
			if (is_open === "true") {
				menu_items.style.visibility = 'hidden';
				menu_items.style.opacity = 0;
			} else {
				menu_items.style.visibility = 'visible';
				menu_items.style.opacity = 1;
			}
			element.dataset.open = is_open === "true" ? "false" : "true"
		})
	};
	handle_mobile_nav()

	// function handle_form() {
	// 	const form = document.querySelector("#form_raw");
	// 	const form_obj = {
	// 		name: form.name,
	// 		phone_no: form.phone_no,
	// 		email: form.phone_no,
	// 		participant_count: 1,
	// 		booking_choice: form.myself.checked ? 'book_myself' : 'book_for_me',
	// 	}

}())