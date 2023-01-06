import styles from './Help.module.css'

function Help({ email, pesan }: { email: string, pesan: string }) {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path
            d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z" />
        </svg>
      </div>
      <div className={styles.content}>
        <div className={styles.message}>
          <p>Halo <b>{email}</b>,</p>
          <p>Terima kasih telah mengirimkan pesan kepada kami. Kami akan menanggapi pesan Anda secepatnya.</p>
        </div>
        <div className={styles.log}>
          <p><b>Pesan Anda</b></p>
          <p>{pesan}</p>
        </div>
      </div>
      <div className={styles.credits}>
        ©2023. All Rights Reserved. by Lab Jaringan 2022
      </div>
    </div>
  )
}

export default Help