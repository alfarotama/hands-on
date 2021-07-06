// task 1: menampilkan user ke DOM HTML
const users = [
	{
		name: "josh",
		age: 22,
	},
	{
		name: "rush",
		age: 20,
	},
];

const usersContainer = document.querySelector(".users");

users.forEach((user) => {
	usersContainer.innerHTML += `
		<tr>
			<td>${user.name}</td>
			<td>${user.age}</td>
		</tr>
	`;
});

// task 2: menghitung rata-rata

const buttonContainer = document.querySelector(".hitung");

buttonContainer.addEventListener("click", () => {
	let jumlahUmur = 0;
	let rataRata = 0;

	users.forEach((user) => {
		jumlahUmur += user.age;
	});

	rataRata = jumlahUmur / users.length;

	alert(`Rata rata umur: ${rataRata}`);
});
