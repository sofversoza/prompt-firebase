import CreatePrompt from '../../components/prompt-add/CreatePrompt'
import PromptList from '../../components/prompt-list/PromptList'
import './Home.css'

function Home() {
  return (
    <div className="homepage">
      {/* <CreatePrompt /> */}
      <PromptList />
    </div>
  )
}

export default Home