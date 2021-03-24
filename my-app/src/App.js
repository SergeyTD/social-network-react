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



const App = (props) => {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <Header />
        <Navbar 
          state={props.state.navBarPage}/>
        <div className={s.appWrapperContent}>
          <Route path="/profile" 
            render={ () => <Profile 
              state={props.state.profilePage} /> } />
          <Route path="/dialogs" 
            render={ () => <Dialogs 
              state={props.state.dialogsPage} /> } />
          <Route path="/news" render={ () => <News /> } />
          <Route path="/music" render={ () => <Music /> } />
          <Route path="/setting" render={ () => <Setting /> } />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;