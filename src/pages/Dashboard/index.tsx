import classes from './index.module.scss';
import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { LoggedInHeader } from '../../components';
import { useHistory } from 'react-router';
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import d1 from './../../assets/img/d1.png';
import d2 from './../../assets/img/d2.jpg';
import d3 from './../../assets/img/d3.jpg';
import d4 from './../../assets/img/d4.jpg';
import { CgLivePhoto } from 'react-icons/cg';

const diceMap = [d4, d2, d3, d4];

interface DashboardProps { };

export const Dashboard = (props: DashboardProps) => {

    const history = useHistory();

    return (
        <IonPage>

            <IonContent fullscreen>
                
                <LoggedInHeader />

                <Typography className={classes.head}>
                    <FormattedMessage id="dashboard.our_games" />
                </Typography>

                <Box className={classes.ourGames} onClick={() => history.push('/battle')} />

                <Typography className={classes.head}>
                    <FormattedMessage id="dashboard.trending_games" />
                </Typography>

                <ImageList>
                    {diceMap.map((d, index) => <ImageListItem className={classes.imageGrid} key={"dice" + index}>
                        <label className={classes.live}> <CgLivePhoto style={{ verticalAlign: "middle" }} /> Live</label>
                        <img
                            src={d}
                            srcSet={d}
                            loading="lazy"
                            style={{ borderRadius: '25px', objectFit: 'revert' }}
                            alt=""
                        />
                    </ImageListItem>
                    )}
                </ImageList>
            </IonContent>
        </IonPage>
    )
}