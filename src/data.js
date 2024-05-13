
const projects = [

    { // id: 1; U-talent
        id: 1,
        isReady: true,
        title: 'U-Talent',
        image: 'u-talent.jpg',
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
                title: 'js'
            },                         
        ]
    },

    { // id: 2; Reminder
        id: 2,
        isReady: false,
        title: 'Reminder',
        image: 'reminder.jpg',
        github: 'https://github.com/Alwongs/laravel-8',
        website: 'http://alwong9h.beget.tech/',
        description: 'Помогает пользователю не забыть о важных событиях',
        comments: 'Сайт в разработке',
        stack: [
            {
                id: 1,
                title: 'Laravel'
            },   
            {
                id: 1,
                title: 'Blade'
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

    { // id: 3; Gallery
        id: 3,
        isReady: false,
        title: 'Gallery',
        image: 'gallery.png',
        github: 'https://github.com/Alwongs/gallery',
        website: 'https://alwong.ru',
        description: 'Альбом фотографий',
        comments: 'Сайт в разработке',
        stack: [
            {
                id: 1,
                title: 'Laravel'
            },   
            {
                id: 1,
                title: 'Blade'
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