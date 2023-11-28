 const router = require("express").Router();
 const chatRoomRoutes = require("./chatroom.js");
 const usersRoutes = require("./user.js");
 const chatMessageRoutes = require("./chatmessage.js");

 router.use("/room", chatRoomRoutes);
 router.use("/users", usersRoutes);
 router.use("/messages", chatMessageRoutes);
 module.exports = router;