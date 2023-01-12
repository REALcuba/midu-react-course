import reactLogo from './assets/react.svg'
import './App.css'
import TwitterFollowCard from './components/TwiterFollowCard/TwitterFollowCard'

const users = [
  {
    userName: 'REALcuba',
    name: 'Angel Matos',
    isFollowing: true
  },
  {
    userName: 'Titina',
    name: ' Danay Morant',
    isFollowing: false
  }
]
function App() {

  const format = (userName) => `@${userName}`;
  return (
    <section>
      {
        users.map(user => {
          const { userName, name, isFollowing } = user;
          return (
            <TwitterFollowCard
              format={format}
              userName={userName}
              initialIsFollowing={isFollowing}
              key={userName}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}

export default App
