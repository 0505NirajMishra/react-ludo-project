import { IonButton, IonIcon } from '@ionic/react';
import { addCircleSharp } from 'ionicons/icons';
import React from 'react';
import { useHistory } from 'react-router';
import { Header } from '../Header';
import './indexheader.scss'

export const LoggedInHeader = () => {

    const history = useHistory();

    return (
        <>
            <div id="headerset">
                <Header
                    isMenu
                    onIconClick={() => history.push('/profile')}
                    rightAlignIcon={<IonButton shape="round" size="small" className="cashbutton">Cash <IonIcon icon={addCircleSharp} /> </IonButton>}
                    rightAlignIconOnClick={() => history.push('/add-cash')}
                />
            </div>

        </>
    )
};