import classes from './index.module.scss';
import React from 'react'
import { IonButton, IonCheckbox, IonContent, IonFooter, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import { BattleCard, LoggedInHeader } from '../../components';
import { Box, Stack, Typography } from '@mui/material';

interface CreateBattleProps { };

export const CreateBattle = (props: CreateBattleProps) => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <LoggedInHeader />
                <BattleCard amount={50} username1="Username" username2="Username" />
                <Box sx={{
                    textAlign: 'center',
                    height: '12rem',
                    background: '#ebebeb',
                    margin: '1rem',
                    borderRadius: '15px',
                }}>
                    <div className={classes.code} style={{ paddingTop: '2rem', fontWeight: 'bold', fontSize: 'x-large', color: 'gray' }}>
                        <div>Room Code</div>
                        <div style={{ color: '#60b783' }}>10245670</div>
                        <IonButton size="default" shape="round">Copy Code</IonButton>
                    </div>
                </Box>
                <Box>
                    <Typography sx={{ textAlign: 'center' }}>Play Ludo game in Ludo King App</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '2rem'
                    }}>
                        <Box className={classes.playStore}></Box>
                        <Box className={classes.appStore}></Box>
                    </Box>
                </Box>
                <Box className="ion-padding" sx={{ backgroundColor: 'lightyellow' }}>
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>Game Rules</Typography>
                    <IonList className="ion-padding">
                        <IonItem style={{ fontSize: '.8rem' }}>Record Every Game While Playing</IonItem>
                        <IonItem style={{ fontSize: '.8rem' }}>For Cancellation of game, video proof is necessary</IonItem>
                        <IonItem style={{ fontSize: '.8rem' }}>50 Penality will be charged for updating wrong result</IonItem>
                        <IonItem style={{ fontSize: '.8rem' }}>25 penality will be charged for not updating result</IonItem>
                    </IonList>
                </Box>

                <Box className="ion-padding">
                    <Typography sx={{ textAlign: 'left', fontWeight: 'bold', padding: '0', paddingLeft: '.5rem' }}>Match Status</Typography>
                    <p style={{ padding: '0' }}>After completion of your game, select the status of the game and post your screenshot below.</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <IonItem>
                            <IonCheckbox />
                            <IonLabel> I WON</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonCheckbox />
                            <IonLabel> I LOST</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonCheckbox />
                            <IonLabel> Cancel</IonLabel>
                        </IonItem>
                    </div>
                    <IonButton size="default" shape="round" fill="solid" expand="block">Post Result</IonButton>
                </Box>
            </IonContent>
            {/* <IonFooter>
                <Typography sx={{ textAlign: 'center' }}>Play Ludo game in Ludo King App</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '2rem'
                }}>
                    <Box className={classes.playStore}></Box>
                    <Box className={classes.appStore}></Box>
                </Box>
            </IonFooter> */}
        </IonPage>
    )
}
