const root = document.documentElement;
document.addEventListener('mousemove', evt => {
	let x = evt.clientX / innerWidth;
	let y = evt.clientY / innerHeight;
	root.style.setProperty('--cursor-x', x);
	root.style.setProperty('--cursor-y', y);
});
