function nogree() {
    return false;
}

function returnTip(tip, num) {
    i = 0;
    result = [];
    while (i < num) {
        rand = Math.floor(Math.random() * tip.length);
        if (result.indexOf(tip[rand]) < 0) {
            result.push(tip[rand]);
            i++;
        }
    }
    return result;
}

function refresh() {
    return window.location.reload();
}

function logg() {
    var per = 10;
    var bill = document.querySelector(".bill").value;
    var service = document.querySelector(".service").value;
    var server = document.querySelector(".server").value;
    if (bill > 50000) {
        per = returnTip(percen, 1);
        per = Number(per);
    }
    var tips = ((per / 100) * bill);
    var caltip;
    if (bill == "" || bill < 1) {
        alert("Enter Bill");
        nogree();
    }
    if (service == -1) {
        alert("Rate Service");
        nogree();
    } else {
        if (service == 1) {
            caltip = tips;
        } else if (service == 2) {
            caltip = ((65 / 100) * tips)
        } else if (service == 3) {
            caltip = ((25 / 100) * tips)
        } else if (service == 4) {
            caltip = (0 * tips);
        }
    }
    if (caltip > 6000) {
        var randtip = returnTip(money, 1);
        caltip = randtip;
    }
    if (server == "" || server < 1) {
        alert("Enter Number of Servers");
        nogree();
    } else {
        caltip = caltip / server;
        caltip = caltip.toFixed(2);
        write.textContent = caltip;
        document.querySelector(".result").style.display = "block";
        document.querySelector(".clear").style.display = "block";
    }
}