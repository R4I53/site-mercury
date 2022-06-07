import React from 'react'

import {Link} from "react-router-dom"

import s from "./Start.module.scss"
import { motion } from "framer-motion"


import v from "../../assets/start.mp4"

const titleA = {
    hidden: {
        x: 120,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,

        transition: {
            delay: custom * 0.2,
            duration: 1.4,
        }


    })
}

const buttonA = {
    hidden: {
        x: 120,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,

        transition: {
            delay: custom * 0.2,
            duration: 1.4,
           
        }


    })
}

const Start = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"

            className={s.block}>
            <video className={s.video} loop autoPlay muted>
                <source src={v}
                    type="video/mp4" />

                Sorry, your browser doesn't support embedded videos.
            </video>
            <div className={s.info}>
                <motion.h1 custom={5} variants={titleA} className={s.title}>Mercury</motion.h1>
                <motion.h3 custom={13} variants={titleA} className={s.text}>Предлагаю отправиться в небольшое путешествие</motion.h3>
                <motion.div custom={20} variants={buttonA} className={s.block_button}>

                    <button className={s.learn}>
                        <Link to="/m">
                            <span className={s.circle} aria-hidden="true">
                                <span className={s.icon + " " + s.arrow}></span>
                            </span>
                            <span className={s.button_text}>в путь</span>
                        </Link>
                    </button>
                </motion.div>

            </div>
        </motion.section>
    )
}

//f11 уязмивость получение доступа к эмуляции нажатия клавишь

export default Start