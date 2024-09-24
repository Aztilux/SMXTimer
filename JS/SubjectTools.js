const SubjectTimes = [
    { hour: 7, minute: 55 },
    { hour: 8, minute: 45 },
    { hour: 9, minute: 40 },
    { hour: 10, minute: 35 },
    { hour: 11, minute: 0 },
    { hour: 11, minute: 55 },
    { hour: 12, minute: 50 },
    { hour: 13, minute: 45 },
  ];

  const Subjects = [
    [],
    [
      '🖥️ Montaje y mantenimiento',
      '🖥️ Montaje y mantenimiento',
      '🛜 Redes locales',
      '🥪 Patio',
      '🛜 Redes locales',
      '📄Aplicaciones ofimáticas',
      '📄Aplicaciones ofimáticas',
    ],
    [
      '🇬🇧 Inglés profesional',
      '🖥️ Montaje y mantenimiento',
      '📄Aplicaciones ofimáticas',
      '🥪 Patio',
      '📄 Aplicaciones ofimáticas',
      '💿 Sistemas operativos',
      '💿 Sistemas operativos'
    ],
    [
      '📄Aplicaciones ofimáticas',
      '🖥️ Montaje y mantenimiento',
      '🖥️ Montaje y mantenimiento',
      '🥪 Patio',
      '🧯 Itinerario personal',
      '🛜 Redes locales',
      '🛜 Redes locales'
    ],
    [
      '📄 Aplicaciones ofimáticas',
      '📄 Aplicaciones ofimáticas',
      '🖥️ Montaje y mantenimiento',
      '🥪 Patio',
      '🖥️ Montaje y mantenimiento',
      '🛜 Redes locales',
      '🛜 Redes locales'
    ],
    [
      '🧯 Itinerario personal',
      '🧯 Itinerario personal',
      '🇬🇧 Inglés profesional',
      '🥪Patio',
      '🛜 Redes locales',
      '💿 Sistemas operativos',
      '💿 Sistemas operativos'
    ],
    [],
    [],
  ];
  

var DateTime = luxon.DateTime;  

function getCurrentSubjectTime() {
    var lowestTime = -Infinity
    var index = 0
    var subjectIndex = 7
    for (var subjectTime of SubjectTimes) {
        var time = DateTime.local(today.year, today.month, today.day, subjectTime.hour, subjectTime.minute, { zone: "UTC" }).toMillis()
        const difference = time - today.toMillis()
        if (difference > lowestTime && difference < 0) {
            lowestTime = difference
            subjectIndex = index
        }
        index += 1
    }
    return subjectIndex

}

function getCurrentSubject() {
    const timeIndex = getCurrentSubjectTime()
    const dayOfWeek = today.weekday
    var closestSubject
    if (timeIndex != 7 && today.weekday < 6) { closestSubject = Subjects[dayOfWeek][timeIndex] } else { closestSubject = '🏠 Casa' }
    return closestSubject
}

function getNextSubject() {
    const timeIndex = getCurrentSubjectTime()
    const dayOfWeek = today.weekday
    var currentSubject
    if (timeIndex != 7 && dayOfWeek < 6) { currentSubject = Subjects[dayOfWeek][timeIndex+1] } else { currentSubject = '💤 FIN DE CLASE' }
    return currentSubject
}