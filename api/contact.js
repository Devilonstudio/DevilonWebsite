import { connectDB } from "./lib/mongodb.js";
import ContactMessage from "./models/ContactMessage.js";

// Pre-warm DB connection at module load (avoids cold start delays)
const dbPromise = connectDB();

export default async function handler(req, res) {
  const start = Date.now();

  // --- CORS headers ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    // Wait for DB connection (pre-warmed)
    await dbPromise;

    // Create the message
    const message = await ContactMessage.create(req.body);

    // Minimal response for speed
    res.status(201).json({ success: true, id: message._id });

    console.log("DB Write Time:", Date.now() - start, "ms");
  } catch (err) {
    console.error("API ERROR:", err);
    res.status(500).json({ success: false, error: err.message });
  }
}
