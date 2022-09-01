/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.scss';
import './theme/global.scss';

import React from 'react';
import { AppRoutes } from './App.Routes';
import { Route } from 'react-router-dom';
import { IonAlert, IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { IntlProvider } from 'react-intl';
import { en } from './Language';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SplashScreen } from '@capacitor/splash-screen';
import { Plugins } from "@capacitor/core";
import { App as IonicApp } from '@capacitor/app';
import { SideMenu } from './components';
import "./App.scss";

setupIonicReact();

const App: React.FC = () => {

  SplashScreen.show({
    showDuration: 5000,
    autoHide: true
  });

  const { App } = Plugins;
  const [showBackAlert, setShowBackAlert] = React.useState(false);

  document.addEventListener('ionBackButton', (ev: any) => {
    console.log({ pressedBack: ev });
    ev.detail.register(-1, () => {
      // when you are in your home(last) page
      //@ts-ignore
      // eslint-disable-next-line no-restricted-globals
      console.log({ location: history.location.pathname });
      //@ts-ignore
      // eslint-disable-next-line no-restricted-globals
      if (["/", "/login", "/dashboard"].includes(history.location.pathname)) {
        // calling alert box
        setShowBackAlert(true);
      }
    });
  });

  return (
    <IonApp>
      <Provider store={store}>
        <IntlProvider locale='en' messages={en}>
          <IonReactRouter>
            <SideMenu />
            <IonRouterOutlet>
              {AppRoutes.map((route) => <Route key={route.path} exact={route.exact} path={route.path} component={route.Component} />)}
            </IonRouterOutlet>
          </IonReactRouter>
          <IonAlert
            isOpen={showBackAlert}
            header={'Please Confirm!'}
            message={'Do you really want to exit our App?'}
            buttons={[
              {
                text: 'No',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => { }
              },
              {
                text: 'Yes!',
                handler: () => {
                  try {
                    App.exitApp();
                  } catch (error) {
                    try {
                      window.process.exit(process.exitCode);
                    } catch (error) {
                      IonicApp.exitApp();
                    }
                  }
                }
              }
            ]}
            onDidDismiss={() => setShowBackAlert(false)}
            cssClass='my-custom-class'
          />
        </IntlProvider>
      </Provider>
    </IonApp>
  )
};
export default App;