const SubjectTimes = [
    { hour: 21, minute: 55 },
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
      'Montaje y mantenimiento',
      'Montaje y mantenimiento',
      'Redes locales',
      'Patio',
      'Redes locales',
      'Aplicaciones ofimáticas',
      'Aplicaciones ofimáticas',
    ],
    [
      'Inglés profesional',
      'Montaje y mantenimiento',
      'Aplicaciones ofimáticas',
      'Patio',
      'Aplicaciones ofimáticas',
      'Sistemas operativos',
      'Sistemas operativos'
    ],
    [
      'Aplicaciones ofimáticas',
      'Montaje y mantenimiento',
      'Montaje y mantenimiento',
      'Patio',
      'Itinerario personal',
      'Redes locales',
      'Redes locales'
    ],
    [
      'Aplicaciones ofimáticas',
      'Aplicaciones ofimáticas',
      'Montaje y mantenimiento',
      'Patio',
      'Montaje y mantenimiento',
      'Redes locales',
      'Redes locales'
    ],
    [
      'Itinerario personal',
      'Itinerario personal',
      'Inglés profesional',
      'Patio',
      'Redes locales',
      'Sistemas operativos',
      'Sistemas operativos'
    ],
    []
  ];
  

function getClosestTime() {
    var lowestTime = Number.MAX_VALUE
    var index = 0
    var subjectIndex = -1
    for (var subjectTime of SubjectTimes) {
        const time = new Date(today.getFullYear(), today.getMonth(), today.getDate(), subjectTime.hour, subjectTime.minute);
        const difference = time - today
        if (difference < lowestTime && difference > 0) {
            lowestTime = difference
            subjectIndex = index
        }
        index += 1
    }
    return subjectIndex

}

function getNextSubject() {
    const subjectIndex = getClosestTime()
    var closestSubject
    if (subjectIndex != -1 && subjectIndex != 7) { closestSubject = Subjects[today.getDay()][subjectIndex] } else { closestSubject = 'Casa' }
    return closestSubject
}

function getCurrentSubject() {
    var subjectIndex = getClosestTime()
    subjectIndex -= 1
    var currentSubject
    if (subjectIndex != -1) { currentSubject = Subjects[today.getDay()][subjectIndex] } else { currentSubject = 'Casa' }
    console.log(currentSubject)
    return currentSubject
}