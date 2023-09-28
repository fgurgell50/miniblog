import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini <span>Blog</span></h2>
      <p>Esse projeto consiste em um Blog feito com Reactjs no Front-end e Firebase no Back-end</p>
      <Link to='/posts/create' className='btn'>
        Criar Posts
      </Link>
    </div>
  )
}

export default About