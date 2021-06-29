import React, { useReducer, useEffect } from 'react'
import data from './data'
import Article from './Article'
import {reducer} from './reducer'

const getLocalStorage =()=> {
  let theme = 'light-theme';
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}
const initialState = {
  theme: getLocalStorage()
}
function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(()=> {
    document.documentElement.className = state.theme;
    localStorage.setItem('theme',state.theme)
  },[state.theme])

  const handleToggle =()=> {
    if(state.theme === 'light-theme') {
      dispatch({type: 'DARK_MODE', payload: 'dark-theme'})
    } else {
      dispatch({type: 'LIGHT_MODE', payload: 'light-theme'})
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
