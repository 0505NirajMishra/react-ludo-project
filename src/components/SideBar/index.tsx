import './index.scss';
import React from "react";
import { useHistory } from "react-router";
import { IonMenu, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonRouterOutlet, IonMenuToggle } from "@ionic/react";
import { IonAvatar, IonFooter, IonLabel } from '@ionic/react';
import profile from '../../assets/img/profile.png'
import { AccountBalanceWalletSharp, HomeSharp } from '@mui/icons-material';
import { GiTrophyCup } from 'react-icons/gi'
import { CgLogOut } from 'react-icons/cg'
import { AiOutlineTransaction } from 'react-icons/ai'
import { MdNotifications, MdOutlineContactSupport } from 'react-icons/md';
import { clearStore } from '../../apis/constants';

export const SideMenu = () => {

    const history = useHistory();

    const logout = () => {
        clearStore();
        history.push('/login');
    };

    const onClick = async (path: string) => {
        history.push(path);
    };

    return (
        <>
            <IonMenu swipeGesture={false} contentId="main">
                <IonHeader>
                    <IonToolbar>
                        <div className='menu-header'>
                            <IonAvatar>
                                <img src={profile} alt="" />
                            </IonAvatar>
                        </div>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <div className={'profileList'}>
                        <IonList>
                            <IonMenuToggle onClick={() => onClick('/dashboard')}>
                                <IonItem>
                                    <IonLabel>
                                        <HomeSharp /> Home
                                    </IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle onClick={() => onClick('/wallet')}>
                                <IonItem>
                                    <IonLabel>
                                        <AccountBalanceWalletSharp /> My Wallet
                                    </IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle onClick={() => onClick('/game-history')}>
                                <IonItem>
                                    <IonLabel>
                                        <GiTrophyCup /> Game History
                                    </IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle onClick={() => onClick('/transaction-history')}>
                                <IonItem>
                                    <IonLabel>
                                        <AiOutlineTransaction /> Transaction History
                                    </IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle onClick={() => onClick('/notifications')}>
                                <IonItem>
                                    <IonLabel>
                                        <MdNotifications /> Notifications
                                    </IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                            <IonMenuToggle onClick={() => onClick('')}>
                                <IonItem>
                                    <IonLabel>
                                        <MdOutlineContactSupport /> Support
                                    </IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        </IonList>
                    </div>
                </IonContent>
                <IonFooter className={'profileList'}>
                    <IonMenuToggle>
                        <IonItem onClick={() => logout()}>
                            <IonLabel>
                                <CgLogOut /> Sign Out
                            </IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonFooter>
            </IonMenu>
            <IonRouterOutlet id="main"></IonRouterOutlet>
        </>
    );
};