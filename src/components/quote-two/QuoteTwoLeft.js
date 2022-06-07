import { forwardRef, useRef } from 'react'

import { motion } from "framer-motion"

import dark from "../../assets/dark.jpg"
import milereheim from "../../assets/milereheim.jpg"
import cheh from "../../assets/cheh.jpg"
import cor from "../../assets/cor.jpg"

import s from "./QuoteTwoLeft.module.scss"

export const QuoteTwoLeft = forwardRef(({ photo, author, text }, ref) => {

    const changeText = (node, text) => {
        if (node) return (node.innerHTML = text);
    };

    return (
        <div ref={ref} className={s.quote}>
            <div className={s.wrap}>
                <div className={s.container}>
                    <div ref={(node) => {
                        changeText(node, text)
                    }} className={s.text}>{text}</div>
                </div>
                <div className={s.mercury}>
                    <div className={s.el}>
                        &#8221;
                    </div>
                </div>
                <div className={s.author_info}>
                    <div className={s.block_photo}>
                        {photo == "dark" && <img className={s.photo} src={dark} alt="hi"></img>}
                        {photo == "milereheim" && <img className={s.photo} src={milereheim} alt="hi"></img>}
                        {photo == "Корсак" && <img className={s.photo} src={cor} alt="hi"></img>}
                        {photo == "Чехонте" && <img className={s.photo} src={cheh} alt="hi"></img>}
                    </div>
                    <div className={s.author}>{author}</div>
                </div>
            </div>
        </div>
    )
})

export const MQuoteTwoLeft = motion(QuoteTwoLeft)

