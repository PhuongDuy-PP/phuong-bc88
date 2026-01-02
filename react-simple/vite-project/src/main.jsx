import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Content from './components/Content/Content'

createRoot(document.getElementById('root')).render(
  <div>
    <Header />
    <div className='h-screen flex'>
      <Navigation />
      <Content />
    </div>
  </div>
)
