import './App.css'
export function TwitterFollowCard ({children, userName = undefined, isFollowind}){

    //const addAtt = (userName) => `@${userName}`
   // console.log(isFollowind)
   const text = isFollowind ? 'Siguiendo' : 'Seguir'
    return (
        <article className='tw-followCard'>
            <header 
                className='tw-foll owCard-header'>
                <img className='tw-followCard-avatar'
                src={`https://unavatar.io/${userName}`}
                alt='El avatar de dayan' 
            />
            </header>
            <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infouserName'>@{userName}</span>
            </div>
            <aside>
                <button className='tw-followCard-button'>
                    {text}
                </button>
            </aside>
        </article>
    )
    
}