const { Server } = require("socket.io");
// const db = require("./db");
// Initialize Socket.IO
const io = (server) => {
    const io_ = new Server(server, {
        pingTimeout: 30000, // 30 seconds
        pingInterval: 25000, // 25 seconds
        cors: {
            //   origin: "https://qa.event-feed.com", // Allow your React app's origin
            origin: "http://localhost:3001", // Allow your React app's origin
            methods: ["GET", "POST"], // Specify allowed methods
            allowedHeaders: ["Content-Type"], // Allow custom headers
        }
    })
    // Handle Socket.IO connections
    io_.on("connection", (socket) => {

        socket.on("join-room", (uuid, type) => {
            // get user by type 
            // and return the data the connect to him

            const roomName = "defaultRoom"; // Specify the room name
            socket.join(roomName);
            rooms["default"] = { ...rooms["default"], [uuid]: socket.id }
            console.log(`User joined room: ${roomName}`);
            socket.emit("user-join-room", uuid)
        })



        // Handle disconnection
        socket.on("disconnect", () => {
            console.log("User disconnected");
            // rooms["default"] = { ...rooms["default"] , [uuid]:false}
        });
    });


    return io_
}
module.exports = io; // Export the io instance
