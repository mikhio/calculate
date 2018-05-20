var div = document.querySelector('.res');

var find = function (cl, num) {
	var el = document.querySelector('.' + cl);
	var ch = function() {
		if (num === '+' || num === '-' || num === '*' || num === '/') {
			div.textContent += num;
		} else if (cl === 'delet' && div.textContent.length > 1) {
			div.textContent = div.textContent.slice(0, -1);
		} else if (cl === 'delet') {
			div.textContent = num;
		} else if (cl === 'clear') {
			div.textContent = num
		} else if (div.textContent === '0') {
			div.textContent = num;
		} else {
			div.textContent += num;
		}
	};
	el.addEventListener('click', ch);
};

find('one', 1);
find('two', 2);
find('three', 3);
find('four', 4);
find('five', 5)
find('six', 6)
find('seven', 7)
find('eight', 8)
find('nine', 9)
find('null', 0)
find('clear', 0);
find('delet', 0);
find('del', '/');
find('um', '*');
find('minus', '-');
find('plus', '+');
//find('equally', =);