const db = require('../config/connection');
const { Group, User, Message } = require('../models');
const cleanDB = require('./cleanDB');

const groupData = require('./groupData.json');
const userData = require('./userData.json');
const messageData = require('./messageData.json');

db.once('open', async () => {
  await cleanDB("Group", "groups");
  await cleanDB("User", "users");
  await cleanDB("Message", "messages");

  const groups = await Group.insertMany(groupData);
  const users = await User.insertMany(userData);
  const messages = await Message.insertMany(messageData);

  for (const message of messages) {
    const user = users.find(user => user._id.toString() === message.user.toString());

    if (user) {
      message.user = user._id;
      await message.save();
    } else {
      console.log(`User for message with ID ${message._id} not found.`);
    }
  }

  console.log('all done!');
  process.exit(0);
});
