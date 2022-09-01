import classes from './index.module.scss';
import React from 'react';
import { IonButton, IonContent, IonFooter, IonHeader, IonPage, IonSkeletonText, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';
import { ImageCard } from '../../components';
import splash from './../../assets/img/splash.png';
import { FormattedMessage } from 'react-intl';
import { Typography } from '@mui/material';
import dice1 from './../../assets/img/dice1.jpg';
import dice2 from './../../assets/img/dice2.png';

interface GetStartedProps { };

export const GetStarted = (props: GetStartedProps) => {

    const history = useHistory();

    return (
        <IonPage>
            <IonHeader style={{ zIndex: "999" }}>
                <div className="ion-padding" style={{ display: 'flex', justifyContent: 'space-between', height: '4rem', paddingTop: '1rem', paddingBottom: '4rem' }}>
                    <IonSkeletonText animated={false} className={"ion-skeleton-circle primary"} />
                    <span className={classes.heading}>Ludo King</span>
                    <button className={classes.button} onClick={() => history.push('/login')} > <FormattedMessage id='login.button_text' /> </button>
                </div>
            </IonHeader>
            <IonContent scrollY={true}>
                <div className="ion-padding">
                    <Typography variant="h5" className={classes.head}>
                        <FormattedMessage id="welcome" />
                    </Typography>
                    <ImageCard link={dice1} style={{ borderRadius: '15px', width: '100%', height: '40%' }} />
                    <ImageCard link={dice2} style={{ borderRadius: '15px', width: '100%' }} />
                </div>
                <div className="ion-padding">
                    <Typography variant="h5" className={classes.head}>
                        <FormattedMessage id="aboutus.title" />
                    </Typography>
                    <Typography className={classes.head} sx={{ fontSize: 'small' }}>
                        <FormattedMessage id="aboutus.description" />
                    </Typography>
                </div>
            </IonContent>
        </IonPage >
    )
};