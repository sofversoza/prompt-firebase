import { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import './PromptList.css'

function PromptList() {
  const [prompts, setPrompts] = useState([])
  const promptsColRef = collection(db, 'prompts')

  useEffect(() => {
    // const getPrompts = async () => {
    //   const data = await getDocs(db, promptsColRef)
    //   setPrompts(data.docs.map((doc) => ()))
    // }

  }, [])


  return (
    <div className="promptlist">
      {prompts.map((prompt) => {
        <div>
          <h1>{ prompt.category }</h1>
          <h1>{ prompt.title }</h1>
        </div>
      })}
    </div>
  )
}

export default PromptList