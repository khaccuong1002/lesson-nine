for (let i = 0; i < 6; i++) {
    if (i == 1) {
        document.write("*" + "<br>");
    } else if (i == 2) {
        document.write("*" + "*" + "<br>");
    } else if (i == 3) {
        document.write("*" + "*" + "*" + "<br>");
    } else if (i == 4) {
        document.write("*" + "*" + "*" + "*" +"<br>");
    } else if (i == 5) {
        document.write("*" + "*" + "*" + "*" + "*" + "<br>");
    } else {
        document.write("<br>");
    }
}

for (let i = 0; i < 6; i++) {
    if (i == 1) {
        document.write("*" + "*" + "*" + "*" + "*" + "<br>");
    } else if (i == 2) {
        document.write("*" + "*" + "*" + "*" +"<br>");
    } else if (i == 3) {
        document.write("*" + "*" + "*" + "<br>");
    } else if (i == 4) {
        document.write("*" + "*" + "<br>");
    } else if (i == 5) {
        document.write("*" + "<br>");
    } else {
        document.write("<br>");
    }
}

for (let i = 0; i < 6; i++) {
    if (i == 1) {
        document.write("&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "*" + "<br>");
    } else if (i == 2) {
        document.write("&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "*" + "*" + "<br>");
    } else if (i == 3) {
        document.write("&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "*" + "*" + "*" + "<br>");
    } else if (i == 4) {
        document.write("&nbsp" + "&nbsp" + "*" + "*" + "*" + "*" + "<br>");
    } else if (i == 5) {
        document.write("*" + "*" + "*" + "*" + "*" + "<br>");
    } else {
        document.write("<br>");
    }
}


for (let i = 0; i < 6; i++) {
    if (i == 1) {
        document.write("*" + "*" + "*" + "*" + "*" + "<br>");
    } else if (i == 2) {
        document.write("&nbsp" + "&nbsp" + "*" + "*" + "*" + "*" +"<br>");
    } else if (i == 3) {
        document.write("&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "*" + "*" + "*" + "<br>");
    } else if (i == 4) {
        document.write("&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "*" + "*" + "<br>");
    } else if (i == 5) {
        document.write("&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "*" + "<br>");
    } else {
        document.write("<br>");
    }
}


for (let i = 0; i < 25; i++) {
    document.write("*");
}
let count = 0;
while (count < 7) {
    document.write("*" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" +
        "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" +
        "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" +
        "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" +
        "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" +"*" + "<br>");
    count++;
}
for (let i = 0; i < 26; i++) {
    document.write("*");
}

let money = parseInt(prompt("Nhập số tiền gửi ngân hàng: "));
let months = prompt("Nhập số tháng gửi: ");
let interestRate = parseFloat(prompt("Nhập lãi suất hàng tháng: "));
let interest = money;
for (i = 1; i <= months; i++) {
    let interestM = money * i * (interestRate/100);
    interest += interestM;
}
alert("Số tiền lãi sau khi gửi ngân hàng là: " + interest);
