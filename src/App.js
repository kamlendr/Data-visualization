import { useState } from 'react';
import './App.css';
import wineData from './Utils/Wine-Data.json';
import Table from './Components/Table/Table';
import tabs from './Constants/tabs';

function App() {
  const [activeTab, setActiveTab] = useState('flavanoids');

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Wine Data</h2>
      </header>
      <nav>
        {Object.values(tabs).map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </nav>
      <main>
        <Table data={wineData} {...tabs[activeTab]} />
      </main>
      <footer>
        <b>Note:</b> Gamma = (Ash * Hue) / Magnesium
      </footer>
    </div>
  );
}

export default App;
