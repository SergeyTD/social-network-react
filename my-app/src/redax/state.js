let state = {

    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 5 },
            { id: 2, message: "It's my first post!", likesCount: 10 }
        ]
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: "Alena" },
            { id: 2, name: "Uriy" },
            { id: 3, name: "Valeria" },
            { id: 4, name: "Artem" },
            { id: 5, name: "Ira" }
        ],
        messages: [
            { id: 1, message: "Hi!" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Nice!" }
        ]
    },

    navBarPage: {
        friends: [
            { id: 1, name: "Alena", photo: "https://cdn3.russian7.ru/wp-content/uploads/2017/10/1-1-3.jpg" },
            { id: 2, name: "Uriy", photo: "https://cdn3.russian7.ru/wp-content/uploads/2017/10/1-1-3.jpg" },
            { id: 3, name: "Valeria", photo: "https://cdn3.russian7.ru/wp-content/uploads/2017/10/1-1-3.jpg" },
            { id: 4, name: "Artem", photo: "https://cdn3.russian7.ru/wp-content/uploads/2017/10/1-1-3.jpg" },
            { id: 5, name: "Ira", photo: "https://cdn3.russian7.ru/wp-content/uploads/2017/10/1-1-3.jpg" }
        ]
    }
}

export default state;