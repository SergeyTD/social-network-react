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
    }
}

export default state;