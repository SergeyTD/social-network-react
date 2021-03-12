import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import s from './App.module.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';



const App = () => {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <Header />
        <Navbar />
        <div className={s.appWrapperContent}>
          <Route path="/profile" component={ Profile } />
          <Route path="/dialogs" component={ Dialogs } />
          <Route path="/news" component={ News } />
          <Route path="/music" component={ Music } />
          <Route path="/setting" component={ Setting } />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;