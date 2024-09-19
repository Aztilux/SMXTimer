var today
function startTime() {
    today = new Date();
    const parsedutctime = today.getTime() + (today.getTimezoneOffset() * 60000);
    today = new Date(parsedutctime + (2 * 60 * 60000))
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('maintime').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 500);
}
  
function checkTime(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;
}