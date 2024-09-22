var DateTime = luxon.DateTime;

var today
function startTime() {
    const localdate = DateTime.now().toISO()
    today = DateTime.fromISO(localdate).setZone('UTC+2')
    document.getElementById('weekday').innerHTML = today.toLocaleString(DateTime.DATE_HUGE, { locale: 'es-ES'})
    startCountdownNextSubject()
    let h = today.hour;
    let m = today.minute;
    let s = today.second;
    h = checkTime(h)
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('currentsubject').innerHTML = getCurrentSubject()
    document.getElementById('maintime').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 500);
}
  
function checkTime(i) {
if (i < 10) {i = "0" + i}; 
return i;
}

function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById('toggledarkmodeicon')
    if (button.className=="bx bxs-sun") {
        button.className = "bx bxs-moon"
    } else {
        button.className="bx bxs-sun"
    }
    body.classList.toggle("dark-mode");
 }