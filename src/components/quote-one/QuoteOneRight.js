import { forwardRef } from 'react'

import { motion } from 'framer-motion'

import ilon from "../../assets/ilon.jpeg"
import s from "./QuoteOneRight.module.scss"

export const QuoteOneRight = forwardRef(({ }, ref) => {
    return (
        <div ref={ref} className={s.quote}>
            <div className={s.wrap}>
                <div className={s.rhomb}>
                    <img src={ilon} alt="" className={s.img} />
                </div>
                <div className={s.block}>
                    <div className={s.content}>
                        <div className={s.mercury}>
                            <div className={s.el}>&#8221;</div>
                        </div>
                        <div className={s.container}>
                            <span className={s.line}></span>
                            <div className={s.text}> Ошибки совершать не страшно. Главное каждый раз ошибаться в чем-то новом</div>
                        </div>

                        <div className={s.author_info}>
                            <div className={s.author}>Илон Маск</div>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    )
})

export const MQuoteOneRight = motion(QuoteOneRight)