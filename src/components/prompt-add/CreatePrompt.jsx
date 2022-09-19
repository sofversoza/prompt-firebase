
import { useState } from 'react'
import './CreatePrompt.css'

function CreatePrompt() {
  const [words, setWords] = useState('')
  const [author, setAuthor] = useState('user')

  const handleSubmit = (e) => {
    e.preventDefault()
    const post = {words, author}
    console.log(post)
  }

  return (
    <div className='create-prompt'>
      <h1>New Writing Prompt</h1>
      <form onSubmit={handleSubmit}>
        <label>Your words here...</label>
        <textarea 
          required
          value={words}
          onChange={(e) => setWords(e.target.value)}
        ></textarea>
        <label>Publish as:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value='as user'>user</option>
          <option value='anonymously'>anonymously</option>
        </select>
        <button>Submit to Prompt</button>
      </form>
    </div>
  )
}

export default CreatePrompt