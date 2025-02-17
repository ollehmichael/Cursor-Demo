# Counter App Demo

A simple, modern counter application built with Vite to demonstrate AI-assisted development using Cursor. This project serves as an educational tool to showcase efficient code generation while maintaining best practices and proper architecture.

## Project Overview

This counter application provides basic counting functionality with a clean, responsive interface. It's designed to be lightweight, performant, and easily extensible.

### Key Features

- Basic counter operations (increment, decrement, reset)
- Keyboard shortcuts support
- Responsive design for both desktop and mobile
- Fast development and build process using Vite
- Lightweight and performant implementation

## Technology Stack

- **Frontend Framework:** React (or Vanilla JavaScript)
- **Build Tool:** Vite
- **Styling:** CSS or TailwindCSS
- **State Management:** React useState
- **Testing:** Playwright for end-to-end testing

## Project Structure

```
/counter-app
│── public/                # Static assets
│── src/                   # Application source code
│   │── components/        # Reusable UI components
│   │── hooks/            # Custom hooks (if needed)
│   │── styles/           # Styling (CSS or TailwindCSS)
│   │── App.jsx           # Main application component
│   │── main.jsx          # Entry point
│── tests/                # Playwright test scripts
│── index.html            # Main HTML file
│── package.json          # Project dependencies
│── vite.config.js        # Vite configuration
│── playwright.config.js  # Playwright configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd counter-app
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

4. Open your browser and navigate to `http://localhost:5173`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run Playwright tests

### Testing

The application uses Playwright for end-to-end testing. Tests cover:

- UI component rendering
- Counter functionality
- Keyboard accessibility
- Responsive design

## Future Enhancements

- Dark mode support
- Custom increment/decrement step
- Local storage persistence
- Additional unit tests

## Contributing

This project is meant for demonstration purposes, but contributions are welcome. Please feel free to submit issues and pull requests.

## License

This project is open source and available under the MIT License.
