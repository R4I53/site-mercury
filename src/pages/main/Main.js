import React from 'react'

import { Link } from "react-router-dom"

import v from "../../assets/bg.mp4"
import s from "./Main.module.scss"

import { motion, AnimatePresence } from "framer-motion"

import { MQuoteOneLeft } from '../../components/quote-one/QuoteOneLeft'
import { MQuoteOneRight } from '../../components/quote-one/QuoteOneRight'

import { MQuoteTwoRight } from '../../components/quote-two/QuoteTwoRight'
import { MQuoteTwoLeft } from '../../components/quote-two/QuoteTwoLeft'

const Main = () => {

    const [animation, setAnimation] = React.useState(window.scrollY)

    React.useEffect(() => {
        const html = document.getElementsByTagName("html")[0]
        html.style.overflowY = "scroll"

        window.addEventListener('scroll', () => {
            let scrollTop = window.scrollY;
            console.log(scrollTop);

            if (scrollTop >= 7900) {
                html.style.overflowY = "hidden"
                setAnimation(true)
            }
        });
    }, [])


    // приперезагрузке страницы проверять скроллтоп чтобы не было задержек с анимацией
    // убирать возможность прокрутки страницы при достяжении опредленной точки и делать фулл экран темным

    const endElA = {
        hidden: {
            opacity: 0
        },
        visible: custom => ({
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 3,
            }
        })
    }

    const endTextA = {
        hidden: {
            opacity: 0,
            y: 70
        },
        visible: custom => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2,
                duration: 2,
            }
        })
    }

    const quoteRightA = {
        hidden: {
            opacity: 0,
            x: 80
        },
        visible: custom => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * 0.2,
                duration: 1.6,
            }
        }),
    }

    const quoteLeftA = {
        hidden: {
            opacity: 0,
            x: -80
        },
        visible: custom => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * 0.2,
                duration: 1.6,
            }
        })
    }

    return (
        <main className={s.main}>
            <AnimatePresence>
                {!animation &&
                   
                    <motion.video
                     initial={{ opacity: 0 }}  animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{
                        delay: 0.5,
                        duration: 4.5
                    }}
                        className={s.video} loop autoPlay muted>
                        <source src={v}
                            type="video/mp4" ></source>
                        Sorry, your browser doesn't support embedded videos.
                    </motion.video>
                }

            </AnimatePresence>

            {!animation &&
                <>
                    <div className={s.quote_constainer_1}>
                        <div className={s.q_one_1}>
                            <MQuoteOneLeft
                                initial="hidden"
                                whileInView="visible" custom={5} variants={quoteLeftA} viewport={{ amount: 0.1, once: true }} />
                        </div>
                        <div className={s.q_one_2}>
                            <MQuoteOneRight
                                initial="hidden"
                                whileInView="visible" custom={3} variants={quoteRightA} viewport={{ amount: 0, once: true }} />
                        </div>
                    </div>
                    <div className={s.quote_constainer_2}>
                        <div className={s.q_two_1}>
                            <MQuoteTwoLeft whileInView="visible" custom={3} variants={quoteLeftA} viewport={{ amount: 0, once: true }} photo={"milereheim"} author={"cats on mars"} initial="hidden" text={"Даша, из всех планет ты выбрала Меркурий потому, что и ты славишься своей скоростью? Ты так же неутомима, как и Меркурий, – усердно занята учёбой, двигаешься вперёд быстрым темпом. Я верю, что твои усилия дадут превосходный результат. Главное, Даша, помни, что учёба учёбой, но волноваться не стоит. Жизнь идёт параллельно поступлению и учёбе, и ими не ограничивается. В любой ситуации мы либо побеждаем, либо учимся. Всё есть опыт.<br/>И да, поделай легкие физические упражнения, это поможет настроиться.<p>Мы тебя очень любим❤️</p>"} />
                        </div>
                        <div className={s.q_two_2}>
                            <MQuoteTwoRight
                                photo={"Корсак"} author={"Корсак"}
                                initial="hidden"
                                whileInView="visible" custom={1} variants={quoteRightA} viewport={{ amount: 0, once: true }} text={"При сдаче экзаменов главное не волноваться, ведь после экзаменов ты сможешь отдохнуть!) Это время до сдачи документов в ВУЗ будут самыми свободными для тебя. Наконец ты сможешь заняться тем, о чем планировала все это время. Дальше тебя ждет ВУЗ — новый этап твоей жизни. Он будет намного интереснее экзаменов!) Ты это поймешь, а когда поймешь тебя этот экзамен уже волновать не будет. Поэтому, не стоит волноваться, ведь самое главное ты готовилась к ним. Сейчас твоя главная задача — готовится усерднее =)"} />
                        </div>
                        <div className={s.q_two_3}>
                            <MQuoteTwoLeft initial="hidden" whileInView="visible" custom={3} variants={quoteLeftA} viewport={{ amount: 0, once: true }} photo={"dark"} author={"Dark"} text={"Ты готовилась к этому моменту достаточно много времени, тратя на это свои силы, сон и свободное время, поэтому в ключевой момент нужно быть максимально собранной и внимательной. Сверяй ответы на черновике с ответами на бланке, не забывай перечитывать задания <p>Пусть ошибки остаются только в черновике, а спокойствие и успех не покидает тебя, пока ты не покинешь экзамен...</p>"} />
                        </div>
                        <div className={s.q_two_4}>
                            <MQuoteTwoRight
                                initial="hidden"
                                whileInView="visible" custom={3} variants={quoteRightA} viewport={{ amount: 0, once: true }} photo={"Чехонте"} author={"Чехонте"} text={"Мерк, ты большая молодец, поэтому я желаю тебе, чтобы ты почаще встречалась в реальной жизни со своими интернет-друзьями. И, конечно же, хорошей сдачи ЕГЭ, ибо я знаю, как это важно для тебя <p>Мя, люблю тебя</p>"} />
                        </div>
                    </div>
                </>
            }



            <AnimatePresence>
                {animation &&
                    <div className={s.end}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible" custom={35} variants={endTextA} className={s.text1}>Даш,</motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible" custom={46} variants={endTextA} className={s.text2}>у тебя всё получится, </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible" custom={57} variants={endTextA} className={s.text3}>мы в тебя верим </motion.div>
                        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{
                            delay: 70 * 0.2,
                            duration: 2.6
                        }} className={s.button}><Link to="/">на главную</Link></motion.button>
                    </div>
                }
            </AnimatePresence>

        </main >
    )
}





export default Main


