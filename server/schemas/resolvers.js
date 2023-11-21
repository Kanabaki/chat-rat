const { Group, User, Message } = require('../models');

const resolvers = {
  Query: {
    groups: async () => {
      return await Group.find({}).populate('users').populate('messages');
    },
    users: async () => {
      return await User.find({});
    },
    messages: async () => {
      return await Message.find({}).populate('user');
    }
  }
};

module.exports = resolvers;
