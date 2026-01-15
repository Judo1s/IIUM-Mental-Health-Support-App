import React, { useState } from 'react';
import type { NavigationProps } from '../types';
import { ChevronLeft, Plus, Trash2, Circle, CheckCircle } from 'lucide-react';
import BottomNavBar from '../components/BottomNavBar';

const TodoListScreen: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Morning Zikir', completed: false },
    { id: 2, text: 'Read Quran (Surah Al-Mulk)', completed: true },
    { id: 3, text: 'Drink Water', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  return (
    <div className="container nasheed-theme" style={{ paddingBottom: '100px', minHeight: '100vh', backgroundColor: '#F8F9FA' }}>
      
      {/* --- Header with Back Button --- */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px', backgroundColor: 'white', borderBottom: '1px solid #eee' }}>
        <button 
          onClick={() => onNavigate('CalmZone')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '15px' }}
        >
          <ChevronLeft size={28} color="#333" />
        </button>
        <h2 style={{ fontSize: '20px', fontWeight: '700', margin: 0 }}>To-do List</h2>
      </div>

      <div style={{ padding: '20px' }}>
        
        {/* Input Field */}
        <div style={{ 
          display: 'flex', 
          backgroundColor: 'white', 
          padding: '10px 15px', 
          borderRadius: '25px', 
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
          marginBottom: '20px',
          alignItems: 'center'
        }}>
          <input 
            type="text" 
            placeholder="Add a new task..." 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            style={{ 
              border: 'none', 
              outline: 'none', 
              flex: 1, 
              fontSize: '16px',
              fontFamily: 'inherit'
            }} 
          />
          <button 
            onClick={addTask}
            style={{ 
              background: '#8E24AA', 
              color: 'white', 
              border: 'none', 
              borderRadius: '50%', 
              width: '32px', 
              height: '32px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <Plus size={20} />
          </button>
        </div>

        {/* List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {todos.map(todo => (
            <div 
              key={todo.id} 
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '15px',
                borderRadius: '15px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#999' : '#333'
              }}
            >
              <button 
                onClick={() => toggleTodo(todo.id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '15px', display: 'flex' }}
              >
                {todo.completed ? 
                  <CheckCircle size={24} color="#4CAF50" /> : 
                  <Circle size={24} color="#ccc" />
                }
              </button>
              
              <span style={{ flex: 1, fontSize: '16px' }}>{todo.text}</span>

              <button 
                onClick={() => deleteTodo(todo.id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ff5252' }}
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* --- Bottom Navigation --- */}
      <BottomNavBar onNavigate={onNavigate} activeTab="CalmZone" />

    </div>
  );
};

export default TodoListScreen;
