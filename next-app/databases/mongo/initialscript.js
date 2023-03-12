const { MongoClient } = require("mongodb");

async function createDatabaseAndCollections(uri) {
  console.log("START CONNECT--------", uri);
  const client = new MongoClient(uri);
  console.log("CREATE CONNECTION SUCCESSFULLY--------");

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Create a new database
    const database = client.db("sale_web");

    // Create the products collection
    try {
      const productCollection = database.collection("products");
      if (productCollection) {
        await productCollection.drop();
      }
    } catch (error) {}
    await database.createCollection("products", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["name", "description", "price", "imageUrls"],
          properties: {
            name: { bsonType: "string" },
            description: { bsonType: "string" },
            price: { bsonType: "number", minimum: 0 },
            imageUrls: {
              bsonType: "array",
              items: { bsonType: "string" },
            },
            created_at: { bsonType: "date" },
            updated_at: { bsonType: "date" },
          },
        },
      },
    });

    // Create the orders collection
    try {
      const orderCollection = database.collection("orders");
      if (orderCollection) {
        await orderCollection.drop();
      }
    } catch (error) {}
    await database.createCollection("orders", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["product_id", "quantity"],
          properties: {
            product_id: { bsonType: "objectId" },
            quantity: { bsonType: "int", minimum: 1 },
            created_at: { bsonType: "date" },
            updated_at: { bsonType: "date" },
            status: {
              bsonType: "string",
              enum: ["pending", "in progress", "completed"],
            },
          },
        },
      },
    });

    // Create the category collection
    try {
      const categoryCollection = database.collection("category");
      if (categoryCollection) {
        await categoryCollection.drop();
      }
    } catch (error) {}
    await database.createCollection("category", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["name"],
          properties: {
            name: { bsonType: "string" },
            parent: { bsonType: "string" },
            created_at: { bsonType: "date" },
            updated_at: { bsonType: "date" },
          },
        },
      },
    });

    // Create the user collection
    try {
      const userCollection = database.collection("user");
      if (userCollection) {
        await userCollection.drop();
      }
    } catch (error) {}
    await database.createCollection("user", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { bsonType: "string" },
            email: { bsonType: "string", pattern: "^\\S+@\\S+\\.\\S+$" },
            password: { bsonType: "string", minLength: 6 },
            created_at: { bsonType: "date" },
            updated_at: { bsonType: "date" },
            role: {
              bsonType: "string",
              enum: ["customer", "admin"],
            },
          },
        },
      },
    });

    console.log("Database and collections created successfully");
  } catch (err) {
    console.error("Error creating database and collections:", err);
  } finally {
    // Close the MongoDB client
    await client.close();
  }
}

module.exports = createDatabaseAndCollections;
