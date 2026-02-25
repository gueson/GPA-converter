# GPA Converter

A free, accurate, and ad-free GPA converter tool that converts your GPA from Chinese 100-point scale/5-point scale to 4.0 scale for study abroad.

## Features

- **Multiple Scale Support**: Convert from 10 different GPA scales (Chinese 100-point, Chinese 5-point, UK 7-point, Australian 4-point, Letter Grade, Canadian 4-point, European ECTS, Japanese, Korean, and Indian) to 4.0 scale
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

### UK 7-point Scale to 4.0 Scale

| Score Range | 4.0 Scale |
|-------------|-----------|
| 7.0         | 4.0       |
| 6.5-6.9     | 3.7       |
| 6.0-6.4     | 3.3       |
| 5.5-5.9     | 3.0       |
| 5.0-5.4     | 2.7       |
| 4.5-4.9     | 2.3       |
| 4.0-4.4     | 2.0       |
| 0.0-3.9     | 0.0       |

### Australian 4-point Scale to 4.0 Scale

| Score Range | 4.0 Scale |
|-------------|-----------|
| 4.0         | 4.0       |
| 3.0-3.9     | 3.0       |
| 2.0-2.9     | 2.0       |
| 1.0-1.9     | 1.0       |
| 0.0-0.9     | 0.0       |

### Letter Grade to 4.0 Scale

| Letter Grade | 4.0 Scale |
|-------------|-----------|
| A+, A       | 4.0       |
| A-          | 3.7       |
| B+          | 3.3       |
| B           | 3.0       |
| B-          | 2.7       |
| C+          | 2.3       |
| C           | 2.0       |
| C-          | 1.7       |
| D+          | 1.3       |
| D           | 1.0       |
| F           | 0.0       |

### Canadian 4-point Scale to 4.0 Scale

| Score Range | 4.0 Scale |
|-------------|-----------|
| 4.0         | 4.0       |
| 3.7-3.9     | 3.7       |
| 3.3-3.6     | 3.3       |
| 3.0-3.2     | 3.0       |
| 2.7-2.9     | 2.7       |
| 2.3-2.6     | 2.3       |
| 2.0-2.2     | 2.0       |
| 1.7-1.9     | 1.7       |
| 1.3-1.6     | 1.3       |
| 1.0-1.2     | 1.0       |
| 0.0-0.9     | 0.0       |

### European ECTS Scale to 4.0 Scale

| Score Range | 4.0 Scale |
|-------------|-----------|
| 30          | 4.0       |
| 27-29       | 3.7       |
| 24-26       | 3.3       |
| 21-23       | 3.0       |
| 18-20       | 2.7       |
| 15-17       | 2.3       |
| 12-14       | 2.0       |
| 9-11        | 1.7       |
| 6-8         | 1.3       |
| 3-5         | 1.0       |
| 0-2         | 0.0       |

### Japanese GPA Scale to 4.0 Scale

| Letter Grade | 4.0 Scale |
|-------------|-----------|
| S           | 4.0       |
| A           | 3.5       |
| B           | 3.0       |
| C           | 2.0       |
| D           | 1.0       |
| F           | 0.0       |

### Korean GPA Scale to 4.0 Scale

| Score Range | 4.0 Scale |
|-------------|-----------|
| 4.5         | 4.0       |
| 4.0-4.4     | 3.7       |
| 3.5-3.9     | 3.3       |
| 3.0-3.4     | 3.0       |
| 2.5-2.9     | 2.7       |
| 2.0-2.4     | 2.3       |
| 1.5-1.9     | 2.0       |
| 1.0-1.4     | 1.7       |
| 0.5-0.9     | 1.3       |
| 0.0-0.4     | 0.0       |

### Indian GPA Scale to 4.0 Scale

| Score Range | 4.0 Scale |
|-------------|-----------|
| 9.0-10.0    | 4.0       |
| 8.0-8.9     | 3.7       |
| 7.0-7.9     | 3.3       |
| 6.0-6.9     | 3.0       |
| 5.0-5.9     | 2.7       |
| 4.0-4.9     | 2.3       |
| 3.0-3.9     | 2.0       |
| 0.0-2.9     | 0.0       |

## SEO Optimization

The project is optimized for search engines with:

- Proper meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Server-Side Rendering (SSR) with Next.js
- Fast loading times
- Mobile-friendly design

## Privacy Policy

The GPA Converter tool does not collect any personal information from users. For more details, please refer to our [Privacy Policy](https://gpaconverter.com/privacy).

## Disclaimer

The GPA Converter tool is provided for informational purposes only and is not intended to be used as official academic certification. Different institutions may have their own conversion formulas. For more details, please refer to our [Disclaimer](https://gpaconverter.com/disclaimer).

## License

MIT License

## Contact

For any questions or feedback, please contact us at support@gpa-converter.online
