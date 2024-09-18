# Here's an AI for That - AI Tools Directory

## Project Overview

"Here's an AI for That" is a modern web application that serves as a comprehensive directory for AI tools. Built with Next.js 14, TypeScript, and Supabase, this project aims to help users discover and explore the latest AI tools to enhance their productivity and creativity.

## Key Features

- AI tool listings with detailed information
- Search functionality to find specific AI tools
- User authentication and protected routes
- Responsive design with a sleek, dark-themed UI
- Server-side rendering and API routes for improved performance

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Supabase (Authentication and Database)
- Tailwind CSS
- Shadcn UI Components
- Framer Motion (for animations)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Supabase account and project

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/daytimedrinkingclub/hereisanaiforthat.git
   cd hereisanaiforthat
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/`: Contains the main application code (Next.js 14 App Router)
- `components/`: Reusable React components
- `lib/`: Utility functions and shared code
- `public/`: Static assets
- `styles/`: Global styles and Tailwind CSS configuration
- `utils/`: Helper functions and Supabase client setup

## Contributing

We welcome contributions to improve "Here's an AI for That"! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

### Coding Standards

- Follow the existing code style and structure
- Use TypeScript for type safety
- Write clear, concise comments and documentation
- Create reusable components when possible
- Use Tailwind CSS for styling
