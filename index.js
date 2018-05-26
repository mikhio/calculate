var div = document.querySelector('.res');

var ch = function(key) {
	if (key === 'Enter') {
		div.textContent = eval(div.textContent);
	} else if (key === '+' || key === '-' || key === '*' || key === '/') {
		div.textContent += key;
	} else if (key === 'Backspace' && div.textContent.length > 1) {
		div.textContent = div.textContent.slice(0, -1);
	} else if (key === 'Backspace') {
		div.textContent = '0';
	} else if (key === 'c') {
		div.textContent = '0';
	} else if (div.textContent === '0' && /\d/.test(key)) {
		div.textContent = key;
	} else if (key === '.') {
		div.textContent += key;
	} else if (/\d/.test(key)) {
		div.textContent += key;
	} else {
		console.log('wrong key', key);
	}
};

var find = function (cl, key) {
	var el = document.querySelector('.' + cl);
	el.addEventListener('click', function() {
		ch(key);
	});
};

find('one', 1);
find('two', 2);
find('three', 3);
find('four', 4);
find('five', 5);
find('six', 6);
find('seven', 7);
find('eight', 8);
find('nine', 9);
find('null', 0);
find('clear', 'c');
find('delet', 'Backspace');
find('del', '/');
find('um', '*');
find('minus', '-');
find('plus', '+');
find('equally', 'Enter');
find('dot', '.');

document.body.addEventListener('keydown', function(event) {
	ch(event.key);
});