import { Layout } from './components/Layout';
import { Counter } from './components/Counter';
import { Greeting } from './components/Greeting';

export function LandingPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome to React Learning
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore React concepts through interactive components. This project demonstrates
            fundamental React concepts like components, state management, and event handling.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <Counter 
            initialCount={0}
            title="Step Counter"
          />
          <Greeting />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">What You've Learned</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Creating and using React components</li>
            <li>Managing state with useState hook</li>
            <li>Handling events and form submissions</li>
            <li>Using props and TypeScript interfaces</li>
            <li>Styling with Tailwind CSS</li>
            <li>Conditional rendering</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default LandingPage;
