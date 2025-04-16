# React Learning Project

This project demonstrates fundamental React concepts through practical implementation. It's built with React, TypeScript, and Tailwind CSS.

## Concepts Learned

### 1. Components and JSX
- Components are the building blocks of React applications
- JSX allows writing HTML-like code in JavaScript/TypeScript
- Components can be functional or class-based (we used functional components)

Example:
```tsx
function Greeting() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2>Greeting Component</h2>
    </div>
  );
}
```

### 2. Props and TypeScript Interfaces
- Props are how data is passed from parent to child components
- TypeScript interfaces define the shape of props
- Optional props can have default values

Example:
```tsx
interface CounterProps {
  initialCount?: number;  // Optional prop
}

function Counter({ initialCount = 0 }: CounterProps) {
  return <div>Count: {initialCount}</div>;
}
```

### 3. State Management with useState
- useState hook manages component state
- State updates trigger re-renders
- State should be immutable

Example:
```tsx
const [count, setCount] = useState(0);
const [name, setName] = useState('');
const increment = () => setCount(count + 1);
```

### 4. Event Handling
- Events are handled with functions
- Event objects provide information about the event
- preventDefault() stops default browser behavior

Example:
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();  // Stops form from refreshing page
  setIsSubmitted(true);
};
```

### 5. Conditional Rendering
- Different content can be shown based on conditions
- Uses JavaScript operators like && and ?:
- Helps create dynamic UIs

Example:
```tsx
{!isSubmitted ? (
  <form>...</form>
) : (
  <div>Hello, {name}!</div>
)}
```

### 6. Component Composition
- Components can be nested inside other components
- Creates a tree-like structure
- Promotes reusability and maintainability

Example:
```tsx
function LandingPage() {
  return (
    <div>
      <Counter initialCount={0} />
      <Greeting />
    </div>
  );
}
```

### 7. Form Handling
- Controlled inputs link form elements to state
- Form submission can be customized
- Input validation can be implemented

Example:
```tsx
<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

### 8. TypeScript in React
- Provides type safety
- Catches errors during development
- Improves code documentation

Example:
```tsx
// Event types
(e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value);
}
```

## Project Structure
```
src/
  ├── components/
  │   ├── Counter.tsx
  │   └── Greeting.tsx
  ├── LandingPage.tsx
  ├── main.tsx
  └── tailwind.css
```

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

## Technologies Used
- React
- TypeScript
- Tailwind CSS
- Vite
