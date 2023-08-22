import './App.css'
export function TwitterFollowCard ({children, userName = undefined, isFollowind}){

    //const addAtt = (userName) => `@${userName}`
   // console.log(isFollowind)
    const text = isFollowind ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowind
        ? 'tw-followCard-button is-followind'
        : 'tw-followCard-button'

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
                <button className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
    
}