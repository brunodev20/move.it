import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={ styles.profileContainer }>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHqMbVtH7FRUA/profile-displayphoto-shrink_800_800/0/1608071005114?e=1619654400&v=beta&t=zsgIiBEplwZcEsaTJ-N4yL3nUGZmfuD6-8du49DD1Oo" alt="Bruno Carnavalli" />
            <div>
                <strong>Bruno Carnavalli</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}