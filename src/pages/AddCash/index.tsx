import classes from './index.module.scss';
import React from 'react'
import { IonButton, IonContent, IonFooter, IonItem, IonLabel, IonPage } from '@ionic/react';
import { AmountCard, LoggedInHeader } from '../../components';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { AllPay, GPay, NetBanking, UPI } from '../../Icons';

export const AddCash = () => {

    const [amount, setAmount] = React.useState<string>("");
    const [step, setStep] = React.useState<number>(1);

    return (
        <IonPage>
            <IonContent fullscreen>
                <LoggedInHeader />
                {step === 1 && <div className="ion-padding" style={{ paddingTop: '5%' }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: 'gray' }}>
                        <FormattedMessage id="add_cash.declaration" />
                    </Typography>
                    <Stack spacing={3}>
                        <div className="ion-padding" style={{ paddingTop: '5rem' }}>
                            <TextField
                                label="Amount"
                                type="number"
                                id="outlined-size-small"
                                size="medium"
                                fullWidth
                                color="primary"
                                value={amount}
                                onChange={(_e) => setAmount(_e.target.value)}
                            />
                        </div>
                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around'
                        }}>
                            <AmountCard amount={100} onClick={amount => setAmount(String(amount))} />
                            <AmountCard amount={200} onClick={amount => setAmount(String(amount))} />
                            <AmountCard amount={300} onClick={amount => setAmount(String(amount))} />
                            <AmountCard amount={400} onClick={amount => setAmount(String(amount))} />
                        </Box>
                    </Stack>
                </div>}

                {step === 2 && <div className="ion-padding" style={{ paddingTop: '5%', background: '#ededed' }}>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        padding: '.5rem',
                        border: '2px solid #d2d2d2',
                        paddingInline: '0.5rem'
                    }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold", color: 'gray', paddingTop: '.5rem' }}>
                            <FormattedMessage id="add_cash.added" /> <span className="color-primary">{amount}</span>
                        </Typography>
                        <IonButton shape='round' fill="outline" className={classes.edit} onClick={() => setStep(1)}>
                            <FormattedMessage id="add_cash.edit_button" />
                        </IonButton>
                    </Box>

                    <div style={{ paddingTop: '3rem' }}>
                        <Typography style={{ textAlign: 'left', padding: '0', fontWeight: 'bold', color: 'gray' }}>Pay Via</Typography>
                        <Stack spacing={3}>
                            <GPay />
                            <UPI />
                            <NetBanking />
                            <AllPay />
                        </Stack>
                    </div>
                </div>}

            </IonContent>
            {step === 1 && <IonFooter>
                <IonButton expand="full" shape="round" size="large" style={{ margin: "2rem" }} onClick={() => setStep(2)} disabled={!amount}>NEXT </IonButton>
            </IonFooter>}
        </IonPage>
    )
}
