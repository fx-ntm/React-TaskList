# React TaskList

This is a portfolio/personal project for demonstrating React architecture; utilizing TypeScript, Tailwind and Vite.

## Features

- **Basic CRUD**: Create, edit, and delete tasks with inline editing
- **Dynamic Update**: On data change, components are updated without harming the performance via React's useMemo() and useCallback()
- **Front-End Storage**: Data is saved to the browser's local storage
- **Responsive Design**: User interface using mobile-friendly design rules with Tailwind's responsive classes
- **Context API**: Using React's Context API to keep the template code easy to read
- **Custom Hooks**: Custom Hooks with React for state management are implemented as well, however are not used in favor of Context API and only are kept in the repository for demonstration purposes.

## Tech Stack

- **Code**: React 19 with TypeScript
- **Styling**: Tailwind 4
- **Build Tool**: Vite
- **Development**: ESLint, JSDoc

## Project Architecture
The project contains many .tsx files that are programmed to be used modularly (e.g. nullable props for colors or callback functions) while also featuring main core components that are imported into App.tsx
```
resources/
├── App.tsx                     # Main Application File
├── main.tsx                    # Entry Point
└── js/
    ├── components/             # React Components
    │   ├── Inputs/             # Reusable Modular Components
    ├── contexts/               # React Context Providers
    ├── hooks/                  # React Custom Hooks for State Management 
    │                            (Replaced, still here only for showcasing purposes)
    ├── types/                  # TypeScript Custom Type Definitions
    └── styles/                 # CSS
```

## Quick Start

### Prerequisites

- Node.js and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fx-ntm/React-TaskList.git
   cd React-TaskList
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## Docker Support
The project includes Dockerfile and compose.yaml for containerization:

**Generate the container image while in directory:**
```bash
docker compose up --build
```

## Key Implementation Highlights
- **Abstraction**: The amount of logic code in components is kept to minimal to have more room for the view
- **Optimization**: Using React's memo and useCallback for optimizing rendering
- **Modular Components**: Smaller components are coded to be fully modular by having props such as the function to call back to and the color, thus making components reusable everywhere reliably even outside this project
- **Responsive Design**: Using Tailwind's responsive class prefixes like `sm:` to keep the application mobile-friendly
- **<u>Context API</u> & Custom Hooks**: The application uses Context API to share props between components, however an approach with using state management (and thus some prop drilling) via custom hooks is still in the project structure. It is there for showcase/demonstration purposes.

## Contributing
While this is primarily a personal portfolio project, any suggestions on implementation/improvement is welcome!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
**fx-ntm**
- GitHub: [@fx-ntm](https://github.com/fx-ntm)

---
