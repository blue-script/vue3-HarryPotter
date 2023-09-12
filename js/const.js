// Вопросы и ответы игры
const questions = [
    [
        "Ваше главное качество?",
        ["Чувство юмора", "Ум и рассудительность", "Находчивость"],
        [
            "this.score.hufflepuff++; this.score.gryffindor++",
            "this.score.ravenclaw++;this.score.gobline++",
            "this.score.muggle++; this.score.gryffindor++",
        ]
    ],
    [
        "Ваше поведение в стрессовой ситуации?",
        ["Паникую и теряюсь", "Сразу действую не думая", "Сначала думаю, потом делаю"],
        [
            "this.score.hufflepuff++; this.score.muggle++",
            "this.score.gryffindor++;this.score.slizerin++",
            "this.score.muggle++; this.score.gobline++",
        ]
    ],
    [
        "Как проводите свое свободное время?",
        ["Сон, буду спать!", "Поиграю, почитаю, погуляю", "У меня нет свободного времени"],
        [
            "this.score.hufflepuff++; this.score.muggle++",
            "this.score.slizerin++;this.score.gryffindor++",
            "this.score.ravenclaw++; this.score.gobline++",
        ]
    ],
    [
        "Много ли у вас врагов?",
        ["Возможно есть один или два", "Много", "Нету"],
        [
            "this.score.gryffindor++; this.score.gobline++",
            "this.score.slizerin++;this.score.muggle++",
            "this.score.ravenclaw++; this.score.hufflepuff++",
        ]
    ],
    [
        "Правила созданы для того, чтобы...",
        ["Их нарушать", "Их менять", "Их соблюдать"],
        [
            "this.score.slizerin++; this.score.muggle++",
            "this.score.ravenclaw++;this.score.gryffindor++",
            "this.score.gobline++; this.score.hufflepuff++",
        ]
    ],
    [
        "Главное в людях – это...",
        ["Преданность", "Доброта", "Честность", "Находчивость"],
        [
            "this.score.gryffindor++",
            "this.score.hufflepuff++",
            "this.score.ravenclaw++;",
            "this.score.slizerin++",
        ]
    ],
]
// Данные для результатов, кем ты являешься во вселенной
const results = {
    'muggle': {
        name: "Магл",
        description: "Вы человек, не обладающий магическими способностями, причём ваши родители также ими не обладают. Официальное название всех маглов — немагическое население. Маглами является подавляющее большинство людей, и подавляющее большинство маглов не подозревает о существовании волшебства и мира волшебников.",
        points: "60",
    },
    'gobline': {
        name: "Гоблин",
        description: "Вы высокоразвитое волшебное существо небольшого роста с удлинёнными ступнями и кистями. В рацион гоблинов входят мясо, коренья и грибы. Родной язык гоблинов называется гоббледук. Гоблины известны в волшебном сообществе как искусные ремесленники, кузнецы и ювелиры; гоблины заведуют единственным волшебным банком Гринготтс и чеканят монеты для волшебников. Гоблины владеют особой магией, которую могут применять без использования волшебных палочек.",
        points: "80",
    },
    'slizerin': {
        name: "Слизерин",
        description: "Вы волшебник на факультете Слизерин. Отличительные качества учеников этого факультета: хитрость, умение добиться своей цели любым способом. Слизеринцы не глупее когтевранцев, но отличаются своим остроумием и частым переходом границ нравственности, что с самого основания Хогвартса закрепило за Слизерином дурную репутацию ",
        points: "160",
    },
    'gryffindor': {
        name: "Гриффиндор",
        description: "Вы волшебник на факультете Гриффиндор. Этот факультет, просто-напросто, лучший в Хогвартсе. Здесь учились самые храбрые и смелые волшебники, к примеру — Альбус Дамблдор! Да, сам Дамблдор, величайший мастер нашего времени, был Гриффиндорцем! Если этого вам не достаточно, я не знаю, что и сказать.",
        points: "200",
    },
    'hufflepuff': {
        name: "Пуффендуй",
        description: "Вы волшебник на факультете Пуффендуй. Ученики Пуффендуя надежные и верные. Они не болтают по пустякам, но поддержат вас в трудной ситуации. Поскольку герб Пуффендуйцев барсук, то они будут защищать себя, ихних друзей и семьи от кого бы то ни было. Их не испугает никто. Ваш факультет выпустил наименьшее количество тёмных волшебников.",
        points: "100",
    },
    'ravenclaw': {
        name: "Когтевран",
        description: "Вы волшебник на факультете Когтевран. На вашем факультете учатся умные волшебники и волшебницы. Другой интересной особенностью Когтеврана является то, что ученики вашего факультета — настоящие индивидуальности. Некоторых из них можно даже назвать чудаками. Но зачастую Гении не идут в ногу с обычными людьми, и в отличие от некоторых других факультетов мы могли бы сказать, что на наш взгляд у вас есть право носить то, что нравится, верить в то, во что хотите и говорить то, что чувствуете.",
        points: "130",
    },
}