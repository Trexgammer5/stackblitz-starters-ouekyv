import React from 'react';
import ReactDOM from 'react-dom';
import Taskbar from './Taskbar';
import StartMenu from './StartMenu';
import Explorer from './Explorer';

const App = () => {
  return (
    <div className="app">
      <Taskbar />
      <StartMenu />
      <Explorer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// Add event listeners for taskbar icons
document.addEventListener('DOMContentLoaded', () => {
  const taskbarIcons = document.querySelectorAll('.taskbar-icon');
  taskbarIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      // Launch application or open file explorer
      console.log(`Icon clicked: ${icon.textContent}`);
    });
  });
});

// Add event listener for start button
document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('.start-button');
  startButton.addEventListener('click', () => {
    // Toggle start menu
    const startMenu = document.querySelector('.start-menu');
    startMenu.style.display =
      startMenu.style.display === 'block' ? 'none' : 'block';
  });
});
