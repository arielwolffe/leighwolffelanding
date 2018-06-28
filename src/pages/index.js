import React from 'react'
import Link from 'gatsby-link'
import styles from '../layouts/index.module.css'
import Wolf from '../assets/images/logo1.png'
import Leigh from '../assets/images/logo2.png'
import LeighBlack from '../assets/images/logo-black.png'

const IndexPage = () => (
  <div className={styles.mainContainer}>
    <div className={styles.divLeft}>
      <img
        src={Wolf}
        alt="Leigh Wolffe Digital Labs"
        className={styles.whiteLogo}
      />
      <div className={styles.mailbox}>
        <h1>Hello,</h1>
        <p>
          We are <u>Leigh Wolffe Digital Labs</u>.
          <br />
          We're building a lab that will help you bring your business and
          creativity together.
          <br />
          <br />
          <p className={styles.digitalOrange}>
            <b>
              Sign up for our mailing list to keep up to date the 411 on digital
              business and know exactly when we launch!
            </b>
          </p>
          <div>
            <form name="Email-SignUp" method="POST" netlify>
              <div>
                <input
                  className={styles.emailField}
                  type="email"
                  name="email"
                  placeholder="Enter Your Email here!"
                />
              </div>
              <div className={styles.btnDiv}>
                <button type="submit" className={styles.btnSubmit}>
                  Send
                </button>
              </div>
            </form>
          </div>
          <br />
          <br />
        </p>
      </div>
    </div>
    <img
      src={Leigh}
      alt="Leigh Wolffe Digital Labs"
      style={{
        maxWidth: '8%',
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginRight: '70px',
      }}
    />
    <img
      src={LeighBlack}
      alt="Leigh Wolffe Digital Labs"
      className={styles.blackLogo}
    />
  </div>
)

export default IndexPage
