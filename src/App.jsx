import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PostCard from './components/PostCard/PostCard'
import Jobs from './components/Jobs/Jobs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='relative'>
        <Header/>
        <Hero/>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 py-10'>
        <PostCard title="For developers" text="Browse our developers jobs now!" button="Browse Jobs"/>
        <PostCard title="For Employers" text="List your jobs for professional developers now!" button="Add a Job"/>
        </div>
        <div className='p-6'>
        <Jobs/>
        </div>

      </div>
    </>
  )
}

export default App
