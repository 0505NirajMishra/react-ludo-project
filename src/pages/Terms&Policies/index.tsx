import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Header } from '../../components';
import { arrowUndoSharp } from 'ionicons/icons';
import { useHistory } from 'react-router';

export const TermsAndPolicies = () => {

    const history = useHistory();

    return (
        <IonPage>
            <IonContent fullscreen>
                <Header icon={arrowUndoSharp} onIconClick={() => history.goBack()} title={"Terms & Conditions"} />
            </IonContent>
        </IonPage>
    )
}
