import { Counter } from './components/Counter';
import { Greeting } from './components/Greeting';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome to React Learning
          </h1>
          <p className="text-gray-600">
            Let's explore React components and their features
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <Counter initialCount={0} />
          <Greeting />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Counter initialCount={0} />
          <Greeting />
        </div>

        <footer className="text-center text-gray-500 text-sm">
          Built with React and Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
