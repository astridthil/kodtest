import Logo from '../images/test-logga.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function StartPage(props) {
  const { linkStyle } = props;
  return (
    <div className='staertpage-body'>
      <nav className='header'>
        <div className='navbar'>
          <img src={Logo} alt="Logo" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            whileHover={{ color: '#ffffff' }}
            className='nav-item'>
            PRODUKTER
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: .4 }}
            whileHover={{ color: '#ffffff' }}
            className='nav-item'>
            OM OSS
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: .8 }}
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
      <div className='startpage-body'>
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 10,
            duration: 5,
            delay: 1.5
          }}
          className='startpage-title'>ETT NYTT SÄTT ATT UPPTÄCKA
        </motion.p>
        <motion.h1
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 10,
            duration: 5,
            delay: 2.5
          }}
          className='startpage-title-big'>Silkeslena produkter med glansiga detaljer</motion.h1>
      </div>
    </div>
  )
}

export default StartPage