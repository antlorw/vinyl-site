function greet() {
    alert("Привет! Это сайт про винил новой школы");
}

function askFavorite() {
    let track = prompt("Какой твой любимый трек этого исполнителя?");
    if (track) {
        alert("Отличный выбор! «" + track + "» — это круто.");
    } else {
        alert("Ты не ввел трек :(");
    }
}