function _table(r, c) {
	let table = "<table>";
	for (let i = 0; i < r; i++) {
		table += "<tr>"
		for (let k = 0; k < c; k++) {
			table += "<td>";
			//функция которая будет заполнять ячейки или красить их
			table += "</td>";
		}
		table += "</tr>"
	}
	table += "</table>";
	document.querySelector("table").innerHTML = table;
}

function _randTD(arg) {
	let arr = document.querySelectorAll("td");
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		let element = document.querySelectorAll("td")[i];
		element.classList.remove("colorBG")
		let r = Math.round(Math.random() * 10);
		if (r % 2 == 0) {
			element.classList.add("colorBG")
			element.innerHTML = "";
			element.style.background = _randcolor();
		} else {
			element.classList.remove("colorBG")
			r = Math.round(Math.random() * (1000000));
			let text = r.toString(36);
			element.innerHTML = text;
			element.style.background = "";
		}
	}
	document.getElementById("count").innerHTML = "Количество ячеек с background=" + _count();
}

function _randcolor() {
	var r = Math.floor(Math.random() * (256));
	var g = Math.floor(Math.random() * (256));
	var b = Math.floor(Math.random() * (256));
	var c = '#' + r.toString(16) + g.toString(16) + b.toString(16);
	return c;
}

function _count() {
	let arr = document.querySelectorAll("td");
	let len = arr.length;
	let _count = 0;
	for (let i = len; i--;) {
		let element = document.querySelectorAll("td")[i];
		if (element.classList.contains("colorBG")) _count++;
	}
	return _count;
}

function gogo() {
	let _row = document.querySelectorAll("input[type='number']")[0].value;
	let _col = document.querySelectorAll("input[type='number']")[1].value;
	_table(_row, _col);
}




// document.write(_table(2,2))
