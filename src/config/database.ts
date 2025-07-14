import mongoose from "mongoose";

interface MongoDBConnectOptions {
  uri: string;
  dbName: string;
}

export class MongoDB {
    static async connect(options: MongoDBConnectOptions) {
        const { uri, dbName } = options;
        try {
            await mongoose.connect(uri, {
                dbName,
            });
            console.log("✅ MongoDB connected successfully");
        } catch (error) {
            console.error("❌ MongoDB connection error:");
            throw error;
        }
    }
}