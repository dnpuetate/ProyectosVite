import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {

  // const format = (userName) => `@${userName}`

   //const dayan = {isFollowind: true, userName: 'dnpuetate'}
   

    return (
        <section className='App'>
            
            <TwitterFollowCard isFollowind userName='dayan'>
                buenas tardes
            </TwitterFollowCard>


          
            


        </section>

    )

}