const express = require('express');
const Sequelize = require("sequelize");
const config = require("./config/db.config");
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = 8050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = require("./models");
require('./routes/user.routes')(app);
require('./routes/blogs.routes')(app);
require('./routes/comment.routes')(app);


const Role = db.role;
const Comment = db.coment





const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});


// db.sequelize.sync({ force: true }).then(async () => {
//     // await initStates();
//     await initUserRoles();
//     // await initCarousel();
//     // await initCategories();
//     // await initProductAttributes();
//     // await initProductAttributeValues();
// });

async function initUserRoles() {
    // roles
    Role.create({
        id: 1,
        name: "user"

    });

    Role.create({
        id: 2,
        name: "admin"
    });

    Role.create({
        id: 3,
        name: "superadmin"
    });
    Role.create({
        id: 4,
        name: "modarator"
    });
}


io.on('connection', (socket) => {
    console.log('A user connected', socket.id);

    // Handle events from the client
    socket.on('chat message', async (msg) => {
        console.log('Message from client:', msg);

        // Save the message to the database using Sequelize
        // await Message.create({ text: msg });

        // Broadcast the message to all connected clients
        io.emit('chat message', msg);
    });

    // Handle disconnect event
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});


server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})