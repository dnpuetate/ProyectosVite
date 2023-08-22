import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {

  // const format = (userName) => `@${userName}`

   //const dayan = {isFollowind: true, userName: 'dnpuetate'}
   

    return (
        <section className='App'>

        <TwitterFollowCard isFollowind={false} userName='bolita'>
           buenas tardes
        </TwitterFollowCard>
        <TwitterFollowCard isFollowind={true} userName='dayan'>
            buenas tardes
        </TwitterFollowCard>
        <TwitterFollowCard isFollowind={true} userName='coquito'>
            buenas tardes
        </TwitterFollowCard>
        </section>

    )

}