const root = document.documentElement;
document.addEventListener('mousemove', evt => {
	let x = evt.clientX / screen.width;
	let y = evt.clientY / screen.height;
	root.style.setProperty('--cursor-x', x);
	root.style.setProperty('--cursor-y', y);
});