import FingerprintJS from '@fingerprintjs/fingerprintjs'

import s from "./AccessDenied.module.scss"

const AccessDenied = () => {

  return (
    <section className={s.info}>
      <div className={s.block}>
        <h1 className={s.title}>Доступ для данного IP-адреса запрещен</h1>

        <div className={s.button_block}>
          <button className={s.button}> <a target="_blank" href="https://youtu.be/dQw4w9WgXcQ?t=40">все равно перейти</a></button>
        </div>
      </div>
    </section>
  );
}

export default AccessDenied;
