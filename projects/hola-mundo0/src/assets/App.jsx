import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {

    // const format = (userName) => `@${userName}`

    //const dayan = {isFollowind: true, userName: 'dnpuetate'}
   // const [name, setName] = useState('dayan')

   // console.log('render with name', name)
    return (
        <section className='App'>
            <TwitterFollowCard initialIsFollowind={true} userName='pony'>
                buenas tardes
            </TwitterFollowCard>
           
            <TwitterFollowCard initialIsFollowind={false} userName='pony'>
                buenas tardes
            </TwitterFollowCard>
        </section>

    )

}

/* <button onClick={() => setName('bola')}>Cambio nombre
            </button>*/