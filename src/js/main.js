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
}

createCalendar("cal", 2016, 02);
