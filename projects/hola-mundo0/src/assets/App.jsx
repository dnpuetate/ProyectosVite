import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'ronaa',
        name: 'rona pona bona',
        isFollowind: true

    },
    {
        userName: 'luna',
        name: 'mar cielo noche',
        isFollowind: true

    },
    {
        userName: 'jose',
        name: 'jose pablo noche',
        isFollowind: true

    },
    {
        userName: 'lula',
        name: 'lulan cielo noche',
        isFollowind: false

    }

]

export function App() {

    // const format = (userName) => `@${userName}`

    //const dayan = {isFollowind: true, userName: 'dnpuetate'}
    // const [name, setName] = useState('dayan')

    // console.log('render with name', name)

    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowind }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowind={isFollowind}
                    >
                        {name}
                    </TwitterFollowCard>
                )
                )
            }
        </section>

    )

}

/* <button onClick={() => setName('bola')}>Cambio nombre
            </button>*/