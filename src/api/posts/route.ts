// src/api/posts/route.ts
import { auth } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const user = auth();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!user) return res.status(401).json({ error: "Not authorized" });
  switch (req.method) {
    case "GET":
      // Retrieve all posts
      try {
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch posts" });
      }
      break;

    case "POST":
      // Create a new post
      try {
        const { title, content, authorId } = req.body; // Make sure to validate and sanitize in real apps!
        const newPost = await prisma.post.create({
          data: {
            title,
            content,
            authorId,
          },
        });
        res.status(201).json(newPost);
      } catch (error) {
        res.status(500).json({ error: "Failed to create post" });
      }
      break;

    // You can add more cases for other methods (PUT, DELETE) as needed.

    default:
      // Handle any unhandled HTTP methods
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
