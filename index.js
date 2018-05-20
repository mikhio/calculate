var find = function (cl, num) {
	var el = document.querySelector('.' + cl);
	var ch = function() {
		console.log(num);
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