import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
import './styles/tailwind.css'

/* Theme variables */
import './styles/variables.css'
import Home from './pages/home'
import Mine from './pages/mine'
import MyVideos from './pages/my-videos'
import { Contact, WapHomeO } from '@react-vant/icons'
import NotFound from './pages/not-found'
import LikeVideos from './pages/like-videos'
import Play from './pages/play'
import LoginOrRegister from './pages/login'

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/tab/*">
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/tab/home">
                <Home />
              </Route>
              <Route exact path="/tab/mine">
                <Mine />
              </Route>
              <Route render={() => <NotFound />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/tab/home">
                <WapHomeO fontSize={20} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="mine" href="/tab/mine">
                <Contact fontSize={20} />
                <IonLabel>Mine</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Route>
        <Route exact path="/my-videos">
          <MyVideos />
        </Route>
        <Route exact path="/play/:videoId">
          <Play />
        </Route>
        <Route exact path="/login">
          <LoginOrRegister />
        </Route>
        <Route exact path="/like-videos">
          <LikeVideos />
        </Route>
        <Route exact path="/">
          <Redirect to="/tab/home" />
        </Route>
        <Route render={() => <NotFound />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
