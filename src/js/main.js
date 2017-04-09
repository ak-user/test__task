createCalendar("calendar", 2016, 2);

function createCalendar(id, year, month) {

    var content = document.querySelector(".content"),
        div =  document.createElement("div");
        div.setAttribute("id", id);
        content.appendChild(div);
    // створюю div з id в .content

    var date = new Date(year, month, 1);
    date.setDate(0);
    var totalDays = date.getDate();
    date.setDate(1);
    var day = date.getDay() ? date.getDay() : 7;
    // рахую дні у заданому місяці

    var table = "<table id='calendarTable'><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>нд</th>";
    // створюю шапку таблиці з назвами днів

    for (var i = 1, k = 1; i <= (7 * 5); i++) {
        if ((i - 1) % 7 == 0 || i == 1) {
            table += "<tr>";
        }
        if (i >= day && k <= totalDays) {
            table += "<td>" + (k++) + "</td>";
        } else {
            table += "<td></td>";
        }
        if (i % 7 == 0 && i != 1) {
            table += "</tr>";
        }
    }
    // заповнюю таблицю днями

    table += "</table>";
    var elem = document.getElementById(id);
    elem.innerHTML += table;
    // добавляю таблицю у створений div з id

        var monthInfo = {
        0: "Січень",
        1: "Лютий",
        2: "Березень",
        3: "Квітень",
        4: "Травень",
        5: "Червень",
        6: "Липень",
        7: "Серпень",
        8: "Вересень",
        9: "Жовтень",
        10: "Листопад",
        11: "Грудень"
    },
    // створюю об'єкт з властивостями

    dataMonth = document.querySelector(".data__month"),
    dataYear = document.querySelector(".data__year"),
    calendarTable = document.getElementById("calendarTable"),
    cells = calendarTable.getElementsByTagName("td"),
    modalWin = document.querySelector(".modal-win"),
    btnClose = document.getElementById("close"),
    hedingMonth = document.createElement("h2"),
    paragraphDate = document.createElement("p"),
    hedingYear = document.createElement("h3");
    dataMonth.innerHTML = monthInfo[month - 1];
    dataYear.innerHTML = year;
    // шукаю елементи, додаю значення місяця і року до елементів dataMonth і dataYear

    [].forEach.call(cells, function(el) {
        el.addEventListener("click", function (e) {
            if (e.target.textContent !== "") {
                modalWin.classList.remove("modal-win-hidden");
                hedingMonth.innerHTML = monthInfo[month - 1];
                paragraphDate.innerHTML = e.target.textContent;
                hedingYear.innerHTML = year;
                modalWin.appendChild(hedingMonth);
                modalWin.appendChild(paragraphDate);
                modalWin.appendChild(hedingYear);
            }
        });
        // при натисканні на td в якому є значення, появляється модальне вікно через видалення класу modal-win-hidden з місяцем, числом, роком

        el.addEventListener("mouseover", function (e) {
            if (e.target.textContent !== "") {
                e.target.style.border = "2px solid #de0b39";
            }
        });
        // подія при наведенні на td ставиться border з кольором #de0b39

        el.addEventListener("mouseout", function (e) {
            if (e.target.textContent !== "") {
                e.target.style.border = "2px solid #F5F1EE";
            }
        });
        // подія при забирання наведення з td ставиться border з кольором #F5F1EE (ефект hover)
    });

    btnClose.addEventListener("click", function () {
        modalWin.classList.add("modal-win-hidden");
    });
    // при натисканні на кнопку у модальному вікні добавляється класс modal-win-hidden і зникає вікно
}


