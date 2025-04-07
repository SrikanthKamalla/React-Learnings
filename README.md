
# React Learnings


# Folder-01. DOM Elements vs React Elements
DOM Element (Browser DOM)

Heavyweight: Directly tied to browser rendering.

Imperative: You manually update them (e.g., document.getElementById('root').innerHTML = '...').

Slow updates: Changing DOM triggers reflows/repaints.

# Folder-02. React-Setup

1. Initialize Node.js project
npm init -y

2. Install React and ReactDOM
npm install react react-dom

3. Install Webpack and Webpack CLI
npm install --save-dev webpack webpack-cli

4. Create webpack.config.js file in the root of your project

5. Install Webpack Dev Server
npm install --save-dev webpack-dev-server

6. Setup CSS loaders for Webpack
npm install --save-dev style-loader css-loader

7. Install Babel for JSX and modern JavaScript support
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react

# Folder-03. RealDOMvsVirtualDOM
1. RDOM VS VDOM
2. Diffing Process
3. Reconciliation

# Folder-04. My-app
1. Call Components vs Functional Components

2. useState – To store state in functional components

3. useEffect – Run side effects (API calls, timers, etc.)

4. useRef – Access DOM elements or persist values without re-render

5. useCallback – Memoize functions to prevent unnecessary re-renders

6. useContext – Access values from React Context

# Folder-05. React-Practice

# Folder-06. Todo-List


