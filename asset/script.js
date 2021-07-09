// menampilkan user ke DOM HTML , dan menghitung rata-rata umur
const students = [
	{ name: "Alice", age: 20 },
	{ name: "Bob", age: 21 },
	{ name: "Jane", age: 20 },
];

tableDom = document.getElementById("student-table");
students.forEach((student, idx) => {
	let row = tableDom.insertRow(idx + 1);
	let studentCell = row.insertCell(0);
	studentCell.innerHTML = student.name;
	let ageCell = row.insertCell(1);
	ageCell.innerHTML = student.age;
});

// next step : memasukan beberapa fungsi wait

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

function calculateStudents() {
	console.log("calculation start");
	averageAge(students)
		.then((res) => console.log("age is ", res))
		.catch(console.log);
	console.log("second call started");
	wait(2000)
		.then(() => {
			console.log("second call finished");
			console.log("third call started");
			return wait(5000);
		})
		.then(() => console.log("third call finished"));
}

const averageAge = async (students) => {
	await wait(5000);
	const totalAge = students.reduce((acc, { age }) => acc + age, 0);
	return totalAge / students.length;
};
