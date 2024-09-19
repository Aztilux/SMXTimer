function startCountdownNextSubject() {
    closestTimeIndex = getClosestTime()
    getCurrentSubject();
    const closestTime = SubjectTimes[closestTimeIndex]
    document.getElementById('nextclass').innerHTML = getNextSubject()
    const time = new Date(today.getFullYear(), today.getMonth(), today.getDate(), closestTime?.hour, closestTime?.minute).getTime();
    const distance = time - today.getTime();
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);
    m = checkTime(m);
    s = checkTime(s)
    document.getElementById('nextclasstime').innerHTML = m + ":" + s
    if (closestTimeIndex == -1) { document.getElementById('nextclasstime').innerHTML = 'FIN DE CLASE' }
    setTimeout(startCountdownNextSubject, 500);
}