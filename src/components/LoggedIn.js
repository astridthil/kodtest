import React from 'react'
import Logo from '../images/test-logga.svg';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

function LoggedIn(props) {
  const { username, linkStyle } = props;

  return (
    <div className='loggedin-body'>
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
            <p className='login-name'> Du är inloggd som <b>{username}</b></p>
            <motion.p
              whileHover={{ backgroundColor: '#f3e5ab' }}
              whileTap={{ scale: 0.9 }}
              className='nav-login-btn'>
              <Link
                style={linkStyle} to='/'>
                LOGGA UT
              </Link>
            </motion.p>
          </div>
        </div>
      </nav>
      <div className='startpage-body'>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: .1 }}
          className='startpage-title' >ETT NYTT SÄTT ATT UPPTÄCKA
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: .4 }}
          className='startpage-title-big'>Silkeslena produkter med glansiga detaljer
        </motion.h1>
      </div>
    </div>
  )
}

export default LoggedIn