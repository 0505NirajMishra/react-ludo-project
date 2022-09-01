import classes from './index.module.scss';
import React from 'react'
import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonPage } from '@ionic/react';
import { BattleCard, LoggedInHeader } from '../../components';
import { Typography, TextField, Box } from '@mui/material';
import { useHistory } from 'react-router';
import money from './../../assets/img/money.svg';
import battleIcon from './../../assets/img/battleicon.png';

const BattleIcon = () => <img height={22} src={battleIcon} alt="battle" style={{ verticalAlign: 'middle' }} />;

interface BattleProps { };

const battles = [
    {
        amount: 20,
        username1: "User1",
        username2: "User2"
    },
    {
        amount: 50,
        username1: "User1",
        username2: "User2"
    },
    {
        amount: 100,
        username1: "User1",
        username2: "User2"
    },
    {
        amount: 120,
        username1: "User1",
        username2: "User2"
    }
];

export const Battle = (props: BattleProps) => {
    const history = useHistory();
    return (
        <IonPage>
            <IonContent fullscreen>
                <LoggedInHeader />
                <Box sx={{
                    border: '2px solid lightgray',
                    borderRadius: '15px',
                    margin: '1rem'
                }}>
                    <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'gray', padding: '1rem' }}>Creating Battles</Typography>
                    <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '85%' }}>
                            <div style={{ maxWidth: '60%' }}>
                                <TextField label="Enter Amount" size="small" fullWidth color="primary" />
                            </div>
                            <IonButton style={{ verticalAlign: 'middle' }} shape="round" fill="outline" size="default">Set</IonButton>
                        </div>
                    </div>
                </Box>
                <Box>
                    <IonItem className={classes.cancel}>
                        <IonLabel>
                            <BattleIcon /> <span>Open Battles</span>
                        </IonLabel>
                    </IonItem>
                    <div className="ion-padding">
                        <Box sx={{ background: 'lightyellow' }}>
                            <Typography sx={{ fontWeight: '600', paddingBottom: '1rem', paddingTop: '1rem', fontSize: '.8rem' }}>
                                Challange From <span style={{ color: "darkred" }}>Challanger Name</span>
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: "100%", padding: '.5rem' }}>
                                    <div style={{ width: '30%' }}>
                                        <TextField
                                            label={"Entry Fee"}
                                            InputProps={{
                                                startAdornment: <IonIcon style={{ width: "2rem", height: "2rem", verticalAlign: "middle" }} src={money} />
                                            }}
                                            value={100}
                                            size="small"
                                            sx={{ background: 'white' }}
                                        />
                                    </div>
                                    <div style={{ width: '30%' }}>
                                        <TextField
                                            label={"Prize"}
                                            InputProps={{
                                                startAdornment: <IonIcon style={{ width: "2rem", height: "2rem", verticalAlign: "middle" }} src={money} />
                                            }}
                                            value={100}
                                            size="small"
                                            sx={{ background: 'white' }}
                                        />
                                    </div>
                                    <div style={{ width: '20%' }}>
                                        <IonButton size="small" fill="solid" shape="round">
                                            Play
                                        </IonButton>
                                    </div>
                                </Box>
                            </div>
                        </Box>
                    </div>

                </Box>
                <Box>
                    <IonItem className={classes.cancel}>
                        <IonLabel>
                            <BattleIcon /> <span>Running Battles</span>
                        </IonLabel>
                    </IonItem>
                    {battles.map((battle, index) => <BattleCard key={battle.username1 + index} amount={battle.amount} username1={battle.username1} username2={battle.username2} onClick={() => history.push('/create-battle')} />)}
                </Box>
            </IonContent>
        </IonPage >
    )
}
