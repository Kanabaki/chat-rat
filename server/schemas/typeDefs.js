const typeDefs=`
type Group {
    id: ID!
    name: String!
    users: [User]!
    messages: [Message]!
  }
  
  type User {
    id: ID!
    name: String!
  }
  
  type Message {
    id: ID!
    text: String!
    user: User!
  }
  
  type Query {
    groups: [Group]!
    users: [User]!
    messages: [Message]!
  }
  `;

  module.exports = typeDefs;