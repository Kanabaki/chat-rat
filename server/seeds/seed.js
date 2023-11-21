const db = require('../config/connection');
console.log('Before require statement');
const { Group, User, Message } = require('../models');
console.log('After require statement');
const cleanDB = require('./cleanDB');

const groupData = require('./groupData.json');
const userData = require('./userData.json');
const messageData = require('./messageData.json');

db.once('open', async () => {
  const groups = await Group.insertMany(groupData);
  const users = await User.insertMany(userData);
  const messages = await Message.insertMany(messageData);

  for (const message of messages) {
    // find the user who sent the message
    const user = users.find((user) => user._id === message.userId);

    // find the group where the message belongs
    const group = groups.find((group) => group._id === user.groupId);

    // add the message to the group
    group.messages.push(message._id);
    await group.save();
  }

  console.log('all done!');
  process.exit(0);
});
