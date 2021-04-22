let a = +prompt(`Введите значение 'a' квадратного уравнения вида ax^2+bx+c`);
let b = +prompt(`Введите значение 'b' квадратного уравнения вида ax^2+bx+c`);
let c = +prompt(`Введите значение 'c' квадратного уравнения вида ax^2+bx+c`);

let discriminant = b**2 - 4*a*c;
let x = -b/(2*a);
let x1 = (-b + (discriminant ** (1/2)))/(2*a);
let x2 = (-b - (discriminant ** (1/2)))/(2*a);

if(discriminant < 0){
	alert(`В данном уравнении корней нет`);
} else if(discriminant === 0){
	alert(`В данном уравнении есть 1 корень: x=${x}`);
} else {
	alert(`В данном уравнении есть 2 корня: \nx1=${x1} \nx2=${x2}`);
}