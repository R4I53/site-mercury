import { forwardRef } from 'react'

import { motion } from 'framer-motion'

import i from "../../assets/linus.jpeg"
import s from "./QuoteOneLeft.module.scss"

export const QuoteOneLeft = forwardRef(({ }, ref) => {
    return (
        <div ref={ref} className={s.quote}>
            <div className={s.wrap}>
                <div className={s.rhomb}>
                    <img src={i} alt="" className={s.img} />
                </div>
                <div className={s.block}>
                    <div className={s.content}>
                        <div className={s.mercury}>
                            <div className={s.el}>
                                &#8223;
                            </div>
                        </div>
                        <div className={s.container}>
                            <div className={s.text}>Все всегда заканчивается хорошо. Если все закончилось плохо, значит это еще не конец</div>
                            <span className={s.line}></span>
                        </div>
                        <div className={s.author_info}>
                            <div className={s.author}>Пауло Коэльо</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export const MQuoteOneLeft = motion(QuoteOneLeft)