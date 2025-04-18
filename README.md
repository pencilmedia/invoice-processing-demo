# Invoice Processing App

A Next.js application for AI-powered invoice processing with a modern UI.

## Prerequisites

- Node.js 18+ 
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd invoice-processing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000) (or port 3003 if 3000 is in use).

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com).

#### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F[your-username]%2Finvoice-processing)

#### Option 2: Deploy via CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Your app will be deployed to a URL like: `https://invoice-processing-sepia.vercel.app/`

## Project Structure

```
invoice-processing/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       └── InvoiceProcessing.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (for icons)

## Features

- Modern, responsive UI
- PDF viewer with form field extraction
- Real-time chat interface
- Invoice processing workflow
- Authentication system
- Analytics dashboard 