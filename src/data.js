
const projects = [
    { // id: 2; Organizer
        id: 2,
        isReady: true,
        title: 'Органайзер',
        image: 'organizer',
        github: 'https://github.com/Alwongs/org',
        website: 'http://organizer.alwong9h.beget.tech/',
        description: 'Органайзер содержит приложение напоминающее о важных делах и событий',
        comments: 'Планируется пополнять другими полезными приложениями',
        stack: [
            {
                id: 1,
                title: 'Vue.js'
            },                        
            {
                id: 3,
                title: 'Laravel'
            },                        
            {
                id: 3,
                title: 'beget.tech'
            },                        
        ]
    },

    { // id: 3; Speak-art73
        id: 3,
        isReady: false,
        title: 'Speak-Art73',
        image: 'speak-art73',
        github: 'https://github.com/Alwongs/speak-art73',
        website: 'https://alwongs.github.io/speak-art73/',
        description: 'Школа Английского и Китайского языков',
        comments: '',
        stack: [
            {
                id: 1,
                title: 'Vue.js'
            },                         
        ]
    },

    { // id: 4; Like73
        id: 4,
        isReady: false,
        title: 'Like73',
        image: 'like73',
        github: 'https://github.com/Alwongs/like',
        website: 'https://alwongs.github.io/like/',
        description: 'Клуб активного отдыха',
        comments: 'планируется перевести на Laravel',
        stack: [
            {
                id: 1,
                title: 'Vue.js'
            },                         
            {
                id: 2,
                title: 'Firebase'
            },                         
        ]
    },

    { // id:5; Links
        id: 5,
        isReady: false,
        title: 'Links',
        image: 'links',
        github: 'https://github.com/Alwongs/links',
        website: 'https://alwongs.github.io/links/',
        description: 'Архив полезных ссылок по категориям',
        comments: 'Планируется перенести в Органайзер',
        stack: [
            {
                id: 1,
                title: 'Vue.js'
            },                         
            {
                id: 2,
                title: 'Firebase'
            },                         
        ]
    },

    { // id: 6; U-talent
        id: 6,
        isReady: true,
        title: 'U-Talent',
        image: 'u-talent',
        github: 'https://github.com/Alwongs/u-talent',
        website: 'https://alwongs.github.io/u-talent/',
        description: 'Конкурс читателей на английском языке',
        comments: 'Сайт завершен полностью',
        stack: [
            {
                id: 1,
                title: 'html'
            },                         
            {
                id: 2,
                title: 'scss'
            },                         
            {
                id: 3,
                title: 'javascript'
            },                         
        ]
    },

    // { // id: 7; Shop
        // id: 7,
        // isReady: true,
        // title: 'Shop',
        // image: 'shop',
        // github: 'https://github.com/Alwongs/dns',
        // website: 'http://alwong.h1n.ru/',
        // description: 'Интернет магазин',
        // comments: 'В процессе разработки',
        // stack: [
        //     {
        //         id: 1,
        //         title: 'js'
        //     },                         
        //     {
        //         id: 2,
        //         title: 'scss'
        //     },                         
        //     {
        //         id: 3,
        //         title: 'laravel 9'
        //     },                         
        //     {
        //         id: 4,
        //         title: 'hostiman.ru'
        //     },                         
        // ]
    // },

    { // id: 8; Air Bridges
        id: 8,
        isReady: true,
        title: 'Авиакомпания "Air Bridges"',
        image: 'airlines',
        github: '',
        website: 'http://airbridges.alwong9h.beget.tech/',
        description: 'Итоговая работа для аттестации на курсе повышения квалификации в ТГУ (Томский Государственный Университет). Создан на CMS Drupal 9.',
        comments: 'Разработка окончена',
        stack: [
            {
                id: 1,
                title: 'Drupal 9'
            },                         
            {
                id: 2,
                title: 'html'
            },                         
            {
                id: 3,
                title: 'css'
            },                         
            {
                id: 4,
                title: 'beget.tech'
            },                         
        ]
    },
    { // id: 8; Air Bridges
        id: 9,
        isReady: true,
        title: 'Спецтранспорт UAZ GAZ',
        image: 'uaz-gaz',
        github: 'https://github.com/Alwongs/test-task.git',
        website: 'https://alwongs.github.io/test-task/',
        description: 'Тестовое задание на вакансию web-разработчик',
        comments: 'Разработка окончена',
        stack: [                       
            {
                id: 1,
                title: 'html'
            },                         
            {
                id: 2,
                title: 'scss'
            },                         
            {
                id: 3,
                title: 'js'
            },                         
        ]
    },
];

export default projects;