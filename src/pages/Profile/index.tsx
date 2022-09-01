import styles from './index.module.scss';
import React from 'react';
import { IonAvatar, IonContent, IonFooter, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Header } from '../../components';
import { arrowUndoSharp } from 'ionicons/icons';
import { useHistory } from 'react-router';
import profile from '../../assets/img/profile.png'
import { AccountBalanceWalletSharp, HomeSharp, PersonSharp } from '@mui/icons-material';
import { GiTrophyCup } from 'react-icons/gi'
import { CgLogOut } from 'react-icons/cg'
import { AiOutlineTransaction } from 'react-icons/ai'
import { MdNotifications, MdOutlineContactSupport } from 'react-icons/md'

interface ProfileProps { };

export const Profile = (props: ProfileProps) => {
    const history = useHistory();
    return (
        <IonPage>
            <IonContent fullscreen>
                <Header icon={arrowUndoSharp} onIconClick={() => history.goBack()} />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <IonAvatar style={{ height: '7rem', width: 'auto' }}>
                        <img src={profile} alt="" />
                    </IonAvatar>
                </div>
                <div className={styles.profileList}>
                    <IonList>
                        <IonItem onClick={() => history.push('/dashboard')}>
                            <IonLabel>
                                <HomeSharp /> Home
                            </IonLabel>
                        </IonItem>
                        <IonItem onClick={() => history.push('/wallet')}>
                            <IonLabel>
                                <AccountBalanceWalletSharp /> My Wallet
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>
                                <GiTrophyCup /> Game History
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>
                                <AiOutlineTransaction /> Transaction History
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>
                                <MdNotifications /> Notifications
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>
                                <MdOutlineContactSupport /> Support
                            </IonLabel>
                        </IonItem>
                    </IonList>
                </div>
            </IonContent>
            <IonFooter className={styles.profileList}>
                <IonItem>
                    <IonLabel>
                        <CgLogOut /> Sign Out
                    </IonLabel>
                </IonItem>
            </IonFooter>
        </IonPage >
    )
};