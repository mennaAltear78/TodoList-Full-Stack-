ToDo List - Full-Stack App
A modern, full-stack ToDo application built with Next.js (App Router) and TypeScript. This app lets users create, read, update, and delete tasks with full CRUD functionality, secured by Clerk authentication. Each user’s tasks are isolated and stored in MongoDB, with data validation handled by Zod and client-side caching via React Query for a smooth, performant experience. The UI is powered by shadcn/ui and styled with Tailwind CSS for a clean, responsive design.
I built this project to explore a robust Next.js stack with Prisma and MongoDB, focusing on type safety, secure authentication, and a polished user experience. It’s a great starting point for anyone looking to build a full-stack app with these technologies.
Features

User Authentication: Secure sign-up, sign-in, and session management with Clerk.
CRUD Operations: Create, read, update, and delete tasks, with each user’s tasks isolated.
Type-Safe Data: Prisma ORM for MongoDB interactions and Zod for form validation.
Performant Data Fetching: Client-side caching with React Query for fast task loading.
Responsive UI: Built with shadcn/ui and Tailwind CSS for a clean, mobile-friendly interface.
Server Actions: Next.js server actions handle CRUD operations securely.
MongoDB Backend: Tasks stored in MongoDB with a replica set for production-ready transactions.

Tech Stack

Frontend: Next.js 15 (App Router), React, TypeScript, shadcn/ui, Tailwind CSS
Backend: Next.js API routes, Prisma ORM, MongoDB
Authentication: Clerk
Data Validation: Zod
Data Fetching: React Query
Deployment: Ready for Vercel

Getting Started
Prerequisites

Node.js 18.17 or later
MongoDB instance (e.g., MongoDB Atlas with a replica set)
Clerk account for authentication
pnpm (or npm/yarn) as the package manager

Installation

Clone the Repository:



 tip   git clone https://github.com/yourusername/todolist-fullstack.git   cd todolist-fullstack

2. **Install Dependencies**:
```bash
pnpm install


Set Up Environment Variables:Create a .env file in the root directory and add the following:
DATABASE_URL="mongodb://<username>:<password>@<host>:<port>/<database>?retryWrites=true&w=majority"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
CLERK_SECRET_KEY="sk_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_URL="/"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_URL="/"


Get your MongoDB connection string from MongoDB Atlas (ensure it includes replica set parameters).
Get Clerk keys from Clerk Dashboard.


Set Up Prisma:Initialize Prisma and sync the database schema:
npx prisma generate
npx prisma db push


Run the Development Server:
pnpm dev

Open http://localhost:3000 to view the app.


Deployment

Push to GitHub:
git add .
git commit -m "Initial commit"
git push origin main


Deploy to Vercel:

Link your GitHub repo to Vercel.
Add the .env variables to Vercel’s environment variables in the project settings.
Deploy using:vercel --prod





Project Structure
├── prisma/
│   └── schema.prisma       # Prisma schema for MongoDB
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # shadcn/ui components and custom UI
│   ├── lib/              # Prisma client and utilities
│   ├── actions/          # Server actions for CRUD
│   ├── schemas/          # Zod validation schemas
├── .env                   # Environment variables
├── package.json           # Dependencies and scripts

Usage

Sign Up/Sign In: Use Clerk’s authentication to create an account or log in.
Manage Tasks: Create new tasks, mark them as complete, edit, or delete them.
Responsive Design: Access the app on desktop or mobile for a seamless experience.
Data Sync: Tasks are saved to MongoDB and cached client-side with React Query for quick access.

Contributing
Feel free to fork this repo, open issues, or submit pull requests. I’d love to hear feedback or ideas for improving the app!
License
MIT License. Use it, modify it, share it—just give credit where it’s due.
Acknowledgements

Next.js for the awesome React framework
Prisma for making MongoDB queries a breeze
Clerk for secure and easy authentication
shadcn/ui for beautiful, accessible components
Zod for type-safe validation
React Query for efficient data fetching

Happy coding! 🚀
