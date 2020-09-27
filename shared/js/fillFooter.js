window.addEventListener('load', fillFooter);

function fillFooter() {
	const copyrightYear = document.getElementById('copyright-year');
	const lastUpdatedTime = document.getElementById('last-updated-time');

	const currentTime = new Date();

	copyrightYear.textContent = currentTime.getFullYear();
	lastUpdatedTime.textContent = currentTime.toLocaleString();
}
