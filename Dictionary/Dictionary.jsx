import React, { useState } from 'react'
import './dictionary.css'
import Axios from 'axios'
import { motion } from 'framer-motion'

const Dictionary = () => {
    const [inputValue, setInputValue] = useState('')

    const [word, setWord] = useState('')
    const [phonetic, setPhonetic] = useState('')
    const [meaning, setMeaning] = useState('')
    const [secondMeaning, setSecondMeaning] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [show, setShow] = useState(false)

    const inputChange = (e) => {
        setInputValue(e.target.value)
        setWord(e.target.value)
    }
    const clickIt = (e) => {
        e.preventDefault()
        Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
            .then((response) => {
                setPhonetic(response.data[0].phonetic)
                setMeaning(response.data[0].meanings[0].definitions[0].definition)
                if (response.data[0].meanings[0].definitions.length > 1) {
                    setSecondMeaning(response.data[0].meanings[0].definitions[1].definition)
                }

                // Set show to toggle between true and false if the clickIt button is clicked
                setShow(prevState => !prevState)
            })
            .catch((error) => {
                if (error.message === 'Network Error') {
                    setShow(false)
                    setErrorMessage('There was an error, please check your network and try again')
                }

                if (error.request) {
                    setShow(false)
                    setErrorMessage('There was an error, please check your spelling')
                }
            })

    }
    return (
        <motion.div className='dic__meaning' initial={{ x: 200 }} animate={{ x: 0, transition: { type: 'spring' } }}>
            <form className='search-bar'>
                <input type='text' value={inputValue} onChange={inputChange} className='dic__input' />
                <button onClick={clickIt} className='search-button'>SEARCH</button>
            </form>

            <div className='word-section'>
                <h1>{word}</h1>
            </div>

            {/*if the show state is true render the below*/}

            {show ? <div className='definition'>
                <p className='phonetic'>{phonetic}</p>
                <ol className='meaning-section'>
                    <li><p className='meaning'>{meaning}</p></li>
                    <li><p className='meaning'>{secondMeaning}</p></li>
                </ol>
            </div> : <span className='error-message'>{errorMessage}</span>}

        </motion.div>
    )
}

export default Dictionary