const box = document.getElementById('box');
const clickMeBtn = document.getElementById('click-me');

const myP = document.getElementById('my-p');
let count = 0;

function showHideBox() {
	const x = box.classList.contains('hide');
	if (x === true) {
		box.classList.remove('hide');
		box.classList.add('show');
		clickMeBtn.classList.add('hide');
	} else {
		box.classList.remove('show');
		box.classList.add('hide');
		clickMeBtn.classList.remove('hide');
	}
}

function inc() {
	myP.textContent = `count is ${count}`;
	if (count <= 9) count += 1;
}

/* initial dom load  */
inc();
