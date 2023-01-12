import reactLogo from './assets/react.svg'
import './App.css'
import TwitterFollowCard from './components/TwiterFollowCard/TwitterFollowCard'

function App() {

  const format = (userName) => `@${userName}`;
  return (
    <>
      <TwitterFollowCard format={format} userName="REALcuba" initialIsFollowing={false}>
        Angel Matos
      </TwitterFollowCard>
      <TwitterFollowCard format={format} name="Danay Morant" userName="Titina" initialIsFollowing >
        Danay Morant
      </TwitterFollowCard>
    </>
  )
}

export default App
