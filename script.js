document.addEventListener('DOMContentLoaded', function () {
	const revealItems = document.querySelectorAll('.feature-card, .testimonial-card, .gallery-card, .contact-card, .hero-trust div');

	if ('IntersectionObserver' in window) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('reveal-visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);

		revealItems.forEach((item) => observer.observe(item));
	} else {
		revealItems.forEach((item) => item.classList.add('reveal-visible'));
	}

	const buttons = document.querySelectorAll('.button-primary, .button-secondary, .text-link');
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			button.classList.add('button-pressed');
			setTimeout(() => button.classList.remove('button-pressed'), 200);
		});
	});
});
