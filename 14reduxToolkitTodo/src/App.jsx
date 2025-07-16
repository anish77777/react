import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <Provider store={store}>
      {/* Provider injects the Redux store into your React app via context */}
      <div className="min-h-screen min-w-fit bg-gray-100 py-8">
        <h1 className="text-3xl font-bold mx-auto text-center mb-6">Todo App</h1>
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <AddTodo />
          <Todos />
        </div>
      </div>
    </Provider>
  );
}

export default App;
