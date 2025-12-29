# Migration Guide: Replit to Cursor IDE

This document explains how to migrate your Rupesh Tiwari Portfolio project from Replit to Cursor IDE for local development.

---

## Prerequisites

Before starting, ensure you have the following installed on your computer:

1. **Node.js** (v20 or later) - [Download here](https://nodejs.org/)
2. **Git** - [Download here](https://git-scm.com/)
3. **Cursor IDE** - [Download here](https://cursor.sh/)
4. **PostgreSQL** (optional, for database features) - [Download here](https://www.postgresql.org/download/)

---

## Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/rupeshtiwari/rupeshtiwari.github.io.git
cd rupeshtiwari.github.io
```

Or clone the source code repository if you have one separate from the GitHub Pages repo.

---

## Step 2: Export Source Code from Replit

Since the GitHub Pages repo only contains built files, you need the source code:

### Option A: Download from Replit
1. In Replit, click the three dots menu (⋮) in the Files panel
2. Select "Download as zip"
3. Extract the zip to your local folder
4. Open the folder in Cursor IDE

### Option B: Use Git (if connected)
If your Replit is connected to a source code repository:
```bash
git clone <your-source-repo-url>
cd <project-folder>
```

---

## Step 3: Open in Cursor IDE

1. Open Cursor IDE
2. Click **File → Open Folder**
3. Select your project folder
4. Cursor will detect it as a Node.js project

---

## Step 4: Install Dependencies

Open the integrated terminal in Cursor (Ctrl+` or Cmd+`) and run:

```bash
npm install
```

This installs all packages listed in `package.json`.

---

## Step 5: Environment Variables Setup

Create a `.env` file in the project root:

```bash
touch .env
```

Add the following variables (get values from Replit Secrets tab):

```env
# Required for GitHub deployment
GITHUB_TOKEN=your_github_personal_access_token

# Required for email functionality (Resend)
RESEND_API_KEY=your_resend_api_key

# Optional: Database connection (if using PostgreSQL)
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio

# Optional: For development
NODE_ENV=development
PORT=5000
```

### Getting a GitHub Token:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `repo`, `workflow`
4. Copy and save the token

---

## Step 6: Database Setup (Optional)

If you want to use the leads/newsletter features with a real database:

### Install PostgreSQL locally:
```bash
# macOS (using Homebrew)
brew install postgresql
brew services start postgresql

# Windows: Download installer from postgresql.org

# Linux (Ubuntu/Debian)
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

### Create the database:
```bash
createdb portfolio
```

### Run migrations:
```bash
npm run db:push
```

---

## Step 7: Project Structure Overview

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Route pages
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities
│   │   └── App.tsx         # Main app component
│   └── index.html          # HTML entry point
├── server/                 # Backend Express server
│   ├── routes.ts           # API endpoints
│   ├── storage.ts          # Database interface
│   └── index.ts            # Server entry point
├── shared/                 # Shared code (types, schemas)
│   └── schema.ts           # Database schema (Drizzle)
├── scripts/                # Build/deploy scripts
├── dist/                   # Built output (generated)
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuration
├── drizzle.config.ts       # Database configuration
└── tsconfig.json           # TypeScript configuration
```

---

## Step 8: Running the Development Server

Start the development server:

```bash
npm run dev
```

The app will be available at: **http://localhost:5000**

### What this command does:
- Starts Vite dev server for frontend (with hot reload)
- Starts Express server for backend API
- Proxies API requests from frontend to backend

---

## Step 9: Building for Production

To create a production build:

```bash
npm run build
```

This creates:
- `dist/public/` - Frontend static files
- `dist/index.cjs` - Backend server bundle

---

## Step 10: Deploying to GitHub Pages

### From Local Machine:

1. Ensure your `.env` has a valid `GITHUB_TOKEN`
2. Run:
```bash
npm run build
npx tsx scripts/deploy-to-github.ts
```

### Manual Deployment:
1. Build the project: `npm run build`
2. Copy contents of `dist/public/` to your GitHub Pages repo
3. Commit and push

---

## Step 11: Key Differences from Replit

| Feature | Replit | Cursor/Local |
|---------|--------|--------------|
| Environment Variables | Secrets tab | `.env` file |
| Database | Built-in PostgreSQL | Local PostgreSQL or cloud DB |
| Deployment | Built-in workflows | Manual or CI/CD scripts |
| Server Restart | Automatic | Manual (`Ctrl+C` then `npm run dev`) |
| Port | Auto-assigned | Default 5000 |

---

## Step 12: Common Commands Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npx tsx scripts/deploy-to-github.ts

# Push database schema changes
npm run db:push

# Type checking
npx tsc --noEmit

# Format code
npx prettier --write .
```

---

## Step 13: Cursor IDE Tips

### AI Features:
- **Cmd+K** (Mac) / **Ctrl+K** (Windows): Open AI command palette
- **Cmd+L** (Mac) / **Ctrl+L** (Windows): Open AI chat
- Select code and press **Cmd+K** to edit with AI

### Extensions to Install:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

### Settings:
Add to `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

---

## Step 14: Troubleshooting

### "Module not found" errors:
```bash
rm -rf node_modules
npm install
```

### Port already in use:
```bash
# Find process using port 5000
lsof -i :5000
# Kill it
kill -9 <PID>
```

### Database connection errors:
- Ensure PostgreSQL is running
- Check DATABASE_URL in `.env`
- Verify database exists: `psql -l`

### TypeScript errors:
```bash
npx tsc --noEmit
```

### Build failures:
```bash
rm -rf dist
npm run build
```

---

## Step 15: Continuous Deployment (Optional)

For automatic deployment on push, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

---

## Summary

1. Clone/download the source code
2. Install Node.js and dependencies
3. Create `.env` with your API keys
4. Run `npm run dev` to start developing
5. Use `npm run build` and deploy script to publish

Your portfolio will work identically in Cursor IDE as it does in Replit!

---

## Need Help?

- Check the [Vite docs](https://vitejs.dev/)
- Check the [Drizzle ORM docs](https://orm.drizzle.team/)
- Check the [Tailwind CSS docs](https://tailwindcss.com/)
