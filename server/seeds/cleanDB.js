const mongoose = require('mongoose');

module.exports = async (modelName, collectionName, dbConnection) => {
  try {
    const model = mongoose.model(modelName);
    const collectionList = await dbConnection.db.listCollections({ name: collectionName }).toArray();

    if (collectionList.length) {
      await dbConnection.dropCollection(collectionName);
      console.log(`Collection ${collectionName} dropped successfully.`);
    } else {
      console.log(`Collection ${collectionName} does not exist.`);
    }
  } catch (err) {
    console.error(`Error in dropping collection ${collectionName}:`, err);
    throw err;
  }
};
