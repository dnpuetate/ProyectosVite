//hooks
import { useState } from 'react'
import './App.css'
export function TwitterFollowCard({ children, userName, initialIsFollowind}) {

    //const addAtt = (userName) => `@${userName}`
    //console.log(isFollowind)

    const [isFollowind, setIsFollowind] = useState(initialIsFollowind)
    /*const state = useState(false)
    const isFollowind = state[0]
    const setIsFollowind = state[1]*/

    const text = isFollowind ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowind
        ? 'tw-followCard-button is-followind'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowind(!isFollowind)
    }
        

    return (
        <article className='tw-followCard'>
            <header
                className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt='El avatar de dayan'
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infouserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )

}