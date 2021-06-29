import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getLocalStorage =()=> {
  let theme = 'light-theme';
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

function App() {
  const [theme, setTheme] = useState(getLocalStorage())

  useEffect(()=> {
    document.documentElement.className = theme;
    localStorage.setItem('theme',theme)
  },[theme])

  const handleToggle =()=> {
    if(theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }


  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={handleToggle}>toggle</button>
        </div>
      </nav>
      <section className="articles">
        {
          data.map(item=> {
            const {id}= item
            return <Article key={id} {...item} />
          })
        }
      </section>
    </main>
  )
}

export default App
