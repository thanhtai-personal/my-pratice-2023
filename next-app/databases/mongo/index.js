const createDatabaseAndCollections = require("./initialscript");

const initialDatabase = async () => {
  try {
    await createDatabaseAndCollections(process.env.DATABASE_URL);
  } catch (error) {
    console.log("error", error);
  }
};

initialDatabase();
