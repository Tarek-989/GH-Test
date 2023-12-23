const Body = document.querySelector('body');
const openNav = document.querySelector('.menu-bar');
const closeNav = document.querySelector('.close-nav button');
const Navbar = document.querySelector('.navbar');

function bodyScroll() {
	if (Navbar.classList.contains('show')) {
		Body.classList.add('hide-scroll');
	} else if (Body.classList.contains('hide-scroll')) {
		Body.classList.remove('hide-scroll');
	}
}

function showHide() {
	Navbar.classList.toggle('show');
	bodyScroll();
}

openNav.onclick = showHide;
closeNav.onclick = showHide;

const accordionItems = document.querySelectorAll(".acc-item");
accordionItems.forEach((item) => {
	const content = item.querySelector(".acc-item-text");
	const arrow = item.querySelector(".acc-image");

	arrow.addEventListener("click", () => {
		const isExpanded = content.classList.contains("active");

		accordionItems.forEach((otherItem) => {
			if (otherItem !== item) {
				otherItem.querySelector(".acc-item-text").classList.remove("active");
				otherItem.querySelector(".acc-image").style.transform = "rotate(0deg)";
			}
		});

		content.classList.toggle("active", !isExpanded);
		arrow.style.transform = isExpanded ? "rotate(0deg)" : "rotate(180deg)";
	});
});