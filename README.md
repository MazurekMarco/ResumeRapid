# ResumeRapid

A modern resume builder application built with React and TypeScript.

## Deployment Instructions

This project is deployed using GitHub Pages. Follow these steps to deploy:

1. Create a new repository on GitHub named `ResumeRapid`
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ResumeRapid.git
   git push -u origin main
   ```
3. Go to your repository settings on GitHub
4. Navigate to "Pages" under "Code and automation"
5. Under "Build and deployment":
   - Source: Select "GitHub Actions"
6. The GitHub Actions workflow will automatically deploy your site when you push to the main branch

Your site will be available at: `https://YOUR_USERNAME.github.io/ResumeRapid/`

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- React Query
- Express.js
- Drizzle ORM 