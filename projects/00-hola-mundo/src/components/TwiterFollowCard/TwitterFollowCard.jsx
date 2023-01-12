import { useState } from 'react'

const TwitterFollowCard = ({ children, userName, format, initialIsFollowing }) => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const text = isFollowing ? 'siguiendo' : 'seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following' :
        'tw-followCard-button';
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="Angel avatar" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUsername'>{format(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>

    )
}

export default TwitterFollowCard
