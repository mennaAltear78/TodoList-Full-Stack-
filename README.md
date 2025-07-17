# 📝 ToDo List - Full-Stack Application

Welcome to my full-stack **ToDo app**! This project is a modern task manager built with **Next.js (App Router)** and **TypeScript**, using **Prisma with MongoDB** for data storage, **Clerk** for user authentication, **Zod** for form validation, and **shadcn/ui with Tailwind CSS** for a clean, responsive interface. I’ve added **React Query** for client-side caching to make task loading fast and smooth.

I built this to experiment with a robust Next.js stack, focusing on **type safety**, **secure authentication**, and a **great user experience**. Whether you’re a developer looking to learn or just want a solid ToDo app template, this repo has you covered!

---
<img width="1368" height="805" alt="Screenshot 2025-07-17 220922" src="https://github.com/user-attachments/assets/0d855182-2412-47e2-9bcb-fc541e015f2c" />


## 🚀 Features

-  **Secure Authentication**: Sign up and log in with Clerk, keeping user sessions safe.
-  **Full CRUD**: Create, read, update, and delete tasks, with data isolated per user.
-  **Type-Safe Data**: Prisma for MongoDB queries and Zod for bulletproof form validation.
-  **Fast Data Fetching**: React Query caches tasks client-side for quick access.
-  **Polished UI**: Built with shadcn/ui and Tailwind CSS for a sleek, responsive design.
-  **Server Actions**: Next.js server actions handle CRUD securely without API routes.
-  **MongoDB Backend**: Persistent storage with MongoDB, set up for production with replica sets.

---

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, shadcn/ui, Tailwind CSS, React Query  
- **Backend**: Next.js server actions, Prisma, MongoDB  
- **Authentication**: Clerk  
- **Validation**: Zod  
- **Deployment**: Optimized for Vercel  

---

## 📦 Prerequisites

Make sure you have the following installed:

- **Node.js** v18.17 or later  
- **MongoDB** instance (e.g., MongoDB Atlas with replica set)  
- **Clerk** account → [dashboard.clerk.com](https://dashboard.clerk.com)  
- **pnpm** (recommended, or use npm/yarn)

---

## ⚙️ Installation

### 1. Clone the Repo:

```bash
git clone https://github.com/yourusername/TodoList-Full-Stack-.git
cd todolist-fullstack

