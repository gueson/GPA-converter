# GPA Converter

A free, accurate, and ad-free GPA converter tool that converts your GPA from Chinese 100-point scale/5-point scale to 4.0 scale for study abroad.

## Features

- **Multiple Scale Support**: Convert from Chinese 100-point scale and 5-point scale to 4.0 scale
- **Real-time Results**: Get instant conversion results as you type
- **Easy to Use**: Simple, intuitive interface with just 3 steps to convert your GPA
- **Copy to Clipboard**: One-click to copy the conversion result
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **No Ads**: Clean, distraction-free experience
- **SEO Optimized**: Built with Next.js for better search engine visibility

## Tech Stack

- **Next.js 14+** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **React Hook Form**
- **Google Analytics**
- **Vercel** (Deployment)

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment

### Deploy to Vercel

1. Sign up for a [Vercel](https://vercel.com/) account
2. Install the Vercel CLI

```bash
npm install -g vercel
```

3. Deploy the project

```bash
vercel
```

Follow the prompts to complete the deployment.

## Project Structure

```
├── app/                    # App Router pages
│   ├── components/         # Reusable components
│   ├── disclaimer/         # Disclaimer page
│   ├── privacy/            # Privacy Policy page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
└── package.json            # Project dependencies
```

## Conversion Rules

### Chinese 100-point Scale to 4.0 Scale

| Score Range | 4.0 Scale |
|-------------|-----------|
| 90-100      | 4.0       |
| 85-89       | 3.7       |
| 80-84       | 3.3       |
| 75-79       | 3.0       |
| 70-74       | 2.7       |
| 65-69       | 2.3       |
| 60-64       | 2.0       |
| 0-59        | 0.0       |

### Chinese 5-point Scale to 4.0 Scale

| Score Range | 4.0 Scale |
|-------------|-----------|
| 4.8-5.0     | 4.0       |
| 4.5-4.7     | 3.7       |
| 4.0-4.4     | 3.3       |
| 3.5-3.9     | 3.0       |
| 3.0-3.4     | 2.7       |
| 2.5-2.9     | 2.3       |
| 2.0-2.4     | 2.0       |
| 0.0-1.9     | 0.0       |

## SEO Optimization

The project is optimized for search engines with:

- Proper meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Server-Side Rendering (SSR) with Next.js
- Fast loading times
- Mobile-friendly design

## Privacy Policy

The GPA Converter tool does not collect any personal information from users. For more details, please refer to our [Privacy Policy](https://gpa-converter.vercel.app/privacy).

## Disclaimer

The GPA Converter tool is provided for informational purposes only and is not intended to be used as official academic certification. Different institutions may have their own conversion formulas. For more details, please refer to our [Disclaimer](https://gpa-converter.vercel.app/disclaimer).

## License

MIT License

## Contact

For any questions or feedback, please contact us at support@gpacalculator.com
