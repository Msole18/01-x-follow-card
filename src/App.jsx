import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const users = [
  {
    userName: 'miriamgonp',
    name: 'Mìríam González',
    isFollowing: true
  },
  {
    userName: 'ledvarela',
    name: 'Led Varela.',
    isFollowing: true
  },
  {
    userName: 'escueladenada',
    name: 'Escuela de Nada',
    isFollowing: false
  },
  {
    userName: 'nanutria',
    name: 'Victor Medina',
    isFollowing: false
  }
]

function App() {

  return (
    <section className='App'>
      {
        users.map(({userName, name, isFollowing}) => (
          <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing} >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
    
  )
}

export default App
