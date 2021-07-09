// menampilkan user ke DOM HTML , dan menghitung rata-rata umur
const students = [
	{ name: "Alice", age: 20 },
	{ name: "Bob", age: 21 },
	{ name: "Jane", age: 20 },
];

const tableDom = document.getElementById("student-table");
students.forEach((student, idx) => {
	let row = tableDom.insertRow(idx + 1);
	let studentCell = row.insertCell(0);
	studentCell.innerHTML = student.name;
	let ageCell = row.insertCell(1);
	ageCell.innerHTML = student.age;
});

const averageAge = (students) => {
	const totalAge = students.reduce((acc, { age }) => acc + age, 0);
	return totalAge / students.length;
};

function calculateStudents() {
	age = averageAge(students);
	console.log(age);
}

// next step : memasukan beberapa fungsi wait
