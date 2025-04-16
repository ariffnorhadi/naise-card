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

## Upcoming Concepts to Learn

### 1. useEffect Hook
- Handling side effects in components
- Data fetching
- Subscriptions and cleanup
- Dependency arrays

Example (to be implemented):
```tsx
useEffect(() => {
  // Code to run on component mount
  const fetchData = async () => {
    const response = await fetch('api/data');
    const data = await response.json();
    setData(data);
  };
  
  fetchData();
  
  // Cleanup function
  return () => {
    // Cleanup code
  };
}, []); // Dependency array
```

### 2. useRef Hook
- Accessing DOM elements
- Storing mutable values
- Persisting values between renders

Example (to be implemented):
```tsx
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  inputRef.current?.focus();
}, []);
```

### 3. Custom Hooks
- Creating reusable logic
- Sharing stateful logic between components
- Following the "use" naming convention

Example (to be implemented):
```tsx
function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

### 4. Context API
- Managing global state
- Avoiding prop drilling
- Creating and consuming context

Example (to be implemented):
```tsx
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
}
```

### 5. React Router
- Client-side routing
- Route parameters
- Navigation guards
- Nested routes

Example (to be implemented):
```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/users/:id" element={<UserProfile />} />
</Routes>
```

### 6. Form Validation
- Input validation
- Error messages
- Form submission handling
- Custom validation rules

Example (to be implemented):
```tsx
const [errors, setErrors] = useState({});
const validateForm = () => {
  const newErrors = {};
  if (!formData.name) newErrors.name = 'Name is required';
  if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```

### 7. Performance Optimization
- React.memo
- useMemo
- useCallback
- Code splitting
- Lazy loading

Example (to be implemented):
```tsx
const MemoizedComponent = React.memo(function MyComponent(props) {
  // Component code
});

const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

### 8. Testing
- Jest
- React Testing Library
- Component testing
- Mocking
- Testing hooks

Example (to be implemented):
```tsx
test('renders counter with initial count', () => {
  render(<Counter initialCount={0} />);
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
});
```

### 9. State Management Libraries
- Redux
- Zustand
- Jotai
- Recoil

Example (to be implemented):
```tsx
// Using Zustand
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

### 10. API Integration
- Fetch API
- Axios
- React Query
- SWR

Example (to be implemented):
```tsx
const { data, isLoading, error } = useQuery('todos', fetchTodos);

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
```
