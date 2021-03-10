import s from './Header.module.css';

const Header = () => {
  return (
  <header className={s.header}>
    <img src="https://cdn4.iconfinder.com/data/icons/Birdies_by_arrioch/png%20512/twitter%20follow%20me.png"/>
    <span>Follow me</span>
  </header>
  )
} 

export default Header;