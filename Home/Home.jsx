import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { animate, motion } from 'framer-motion'

const Home = () => {

    const variant = {
        hidden: {
            x: 100,
            opacity: 0
        },

        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1,
                staggerChildren: 0.5
            }
        }
    }

    const childVariant = {
        hidden: {
            x: 100,
            opacity: 0
        },

        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1,
            }
        }
    }

    return (
        <motion.div className='lyric__home-page' exit={{ x: -100, opacity: 0, transition: { type: 'spring', } }}>
            <motion.h1 className='dic__header' variants={variant} initial='hidden' animate='visible'>
                <motion.span variants={childVariant}>YOUR</motion.span>
                <motion.span variants={childVariant}>PERSONAL</motion.span>
                <motion.span variants={childVariant}>DICTIONARY</motion.span>
            </motion.h1>

            <Link to='/lyric'>
                <motion.button className='dic__button' initial={{ scale: 0 }} animate={{ scale: 1, transition: { type: 'spring', delay: 1.5 } }}>START</motion.button>
            </Link>
        </motion.div>
    )
}

export default Home