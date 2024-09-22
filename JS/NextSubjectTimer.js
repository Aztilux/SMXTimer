function startCountdownNextSubject() {
    const currentTime = getCurrentSubjectTime()
    const nextTime = SubjectTimes[currentTime+1]
    document.getElementById('nextsubject').innerHTML = getNextSubject()
    
    if (currentTime >= 7) { document.getElementById('nextsubjecttime').innerHTML = 'Hasta mañana...'; return }

    var time = new Date(today.year, today.month, today.day, nextTime.hour, nextTime.minute).getTime()
    const distance = time - today.toMillis()
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);

    m = checkTime(m);
    s = checkTime(s)
    document.getElementById('nextsubjecttime').innerHTML = m + ":" + s
}