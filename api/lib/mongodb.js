import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) throw new Error("MONGO_URI not defined");

let cached = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null, promise: null };

// Immediately start connection at import time
if (!cached.promise) {
  cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose);
}

export async function connectDB() {
  if (cached.conn) return cached.conn;
  cached.conn = await cached.promise;
  return cached.conn;
}