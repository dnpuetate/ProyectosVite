import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {

    // const format = (userName) => `@${userName}`

    //const dayan = {isFollowind: true, userName: 'dnpuetate'}
    const [name, setName] = useState('dayan')

    console.log('render with name', name)
    return (
        <section className='App'>
            <TwitterFollowCard isFollowind={false} userName={name}>
                buenas tardes
            </TwitterFollowCard>
            <TwitterFollowCard isFollowind={true} userName='dayan'>
                buenas tardes
            </TwitterFollowCard>
            <TwitterFollowCard isFollowind={true} userName='coquito'>
                buenas tardes
            </TwitterFollowCard>

            <button onClick={() => setName('bola')}>Cambio nombre
            </button>
        </section>

    )

}