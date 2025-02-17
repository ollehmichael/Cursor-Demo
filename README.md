# Counter App

A modern counter application built with Vite, React, and TypeScript, following best practices and SOLID principles.

## Features

- Increment, decrement, and reset counter functionality
- TypeScript for type safety
- Modern React practices with hooks
- Fast development with Vite
- Clean and maintainable code structure

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS/TailwindCSS (planned)
- Playwright (for testing)

## Project Structure

```
/counter-app
│── public/                # Static assets
│── src/                   # Application source code
│   │── components/        # Reusable UI components
│   │── hooks/            # Custom hooks
│   │── styles/           # Styling
│   │── App.tsx           # Main application component
│   │── main.tsx          # Entry point
│── tests/                # Playwright test scripts (planned)
│── index.html            # Main HTML file
│── package.json          # Project dependencies
│── vite.config.ts        # Vite configuration
│── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests (to be implemented)

## Development Guidelines

- Follow TypeScript best practices
- Use functional components with hooks
- Implement SOLID principles
- Write clean, maintainable code
- Add appropriate comments and documentation
- Include tests for new features

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License.
