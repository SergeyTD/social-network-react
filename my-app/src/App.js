import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import s from './App.module.css';


const App = () => {
  return (
    <div className={s.appWrapper}>
      <Header />
      <Navbar />
      <div className={s.appWrapperContent}>
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  )
}

export default App;