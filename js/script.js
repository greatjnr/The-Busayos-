(function (argument) {
	function handle_elements() {
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
	
	handle_elements()
}())