today = new Date("2022-01-01");
timeend = new Date();
function time() {
    day = Math.floor((timeend - today) / 1000);
    day = Math.floor(day / 60 / 60 / 24) + 1;
    if (day === 256) {
        return "С дней программиста"
    }
}
console.log(time())