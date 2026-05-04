import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

// MongoDB connection with error handling
const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('suncart-summer-store');

export const auth = betterAuth({
    //  CRITICAL: baseURL must be set
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
    },
    
    //  Trusted origins with exact URLs
    trustedOrigins: [
        process.env.BETTER_AUTH_URL,
        "http://localhost:3000",
        "http://localhost:3001",
        "https://*.vercel.app",
    ].filter(Boolean),
    
    //  Add allowed origins for better compatibility
    allowedOrigins: [
        process.env.BETTER_AUTH_URL,
        "http://localhost:3000",
        "https://*.vercel.app",
    ].filter(Boolean),
    
    // CORS configuration
    cors: {
        enabled: true,
        allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowHeaders: ["Content-Type", "Authorization"],
        allowCredentials: true,
    },
    
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
    
    database: mongodbAdapter(db, {
        client,
    }),
    
    // Account linking settings
    account: {
        accountLinking: {
            enabled: true,
            trustedProviders: ["google"],
        },
    },
    
    // Session configuration
    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24, // 1 day
    },
});