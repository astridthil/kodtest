import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import CloseSymbol from '../images/close-symbol.svg';
import Logo from '../images/test-logga.svg';

function PopupPage(props) {
  const { setUsername, handleInput, linkStyle } = props;
  return (
    <div className='popup-body'>
      <nav className='header'>
        <div className='navbar'>
          <img src={Logo} alt="Logo" />
          <motion.p
            whileHover={{ color: '#ffffff' }}
            className='nav-item'>
            PRODUKTER
          </motion.p>

          <motion.p
            whileHover={{ color: '#ffffff' }}
            className='nav-item'>
            OM OSS
          </motion.p>

          <motion.p
            whileHover={{ color: '#ffffff' }}
            className='nav-item'>
            BESTÄLLNINGAR
          </motion.p>

          <div className='nav-right'>
            <motion.p
              whileHover={{ backgroundColor: '#f3e5ab' }}
              whileTap={{ scale: 0.9 }}
              className='nav-login-btn'>
              <Link
                style={linkStyle} to='/popup'>
                LOGGA IN
              </Link>
            </motion.p>
          </div>
        </div>
      </nav>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
        }}
        className='popup-open'>
        <button
          className='popup-close' ><Link to='/'><img src={CloseSymbol}></img></Link></button>
        <div className='popup-items'>
          <p className='popup-open-items' ><b>Logga in</b></p>
          <p className='popup-open-items' className='popup-text' >Använd ditt namn för att logga in</p>

          <form className='popup-form'>
            <input
              placeholder='Namn' type='text' onChange={e => setUsername(e.target.value)} className='input-name'></input>
            <motion.button
              whileHover={{ backgroundColor: '#f3e5ab' }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleInput()}
              className='input-btn' >
              <Link style={linkStyle} to='/loggedin'>Logga in</Link>
            </motion.button>
            <p className='popup-small'>Genom att logga in godkänner du <u>våra villkor</u></p>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default PopupPage