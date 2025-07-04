import { useState, useEffect } from 'react'
import './App.css'
import Search from './components/Search.jsx';
import RenderCards from './components/RenderCards.jsx';
import data from './script.js'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [filtered, setFiltered] = useState([])

  return (
    <main>
      <div className='searchWrapper'>
        <Search setFiltered={setFiltered} data={data} />
      </div>
      <div className='cardsWrapper'>
        <RenderCards filtered={filtered} data={data} />
      </div>
    </main>
  )
}

export default App
