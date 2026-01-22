import { connectDB } from "./lib/mongodb.js";
import ContactMessage from "./models/ContactMessage.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  try {
    await connectDB();
    const message = await ContactMessage.create(req.body);
    return res.status(201).json({ success: true, message });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}