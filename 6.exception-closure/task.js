function parseCount(n) {
	let count = Number.parseInt(n, 10);
	if (isNaN(count)) {
		throw new Error("Невалидное значение");
	} else {
		return count;
	}
}

function validateCount(count) {
	try {
		return parseCount(count);
	} catch(e) {
		return e;
	}
}


class Triangle {
	constructor(a,b,c) {
		this.side1 = a;
		this.side2 = b;
		this.side3 = c;

		if (a+b<c || a+c<b || b+c<a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	getPerimeter() {
		return Number(this.side1 + this.side2 + this.side3);
	}

	getArea() {
		const p = Number((this.side1 + this.side2 + this.side3)/2);
		return Number(Math.sqrt(p*(p-this.side1)*(p-this.side2)*(p-this.side3)).toFixed(3));

	}
}

function getTriangle(a,b,c) {

	try {
		return new Triangle(a,b,c);
	} catch(e) {
		return {
			getArea() {
				return "Ошибка! Треугольник не существует";
			},
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}

 
