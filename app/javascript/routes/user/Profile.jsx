import React, { useState, useEffect }  from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import {Grid, Button, Toolbar, Container, Avatar} from '@mui/material';

import { Add, Edit, Delete } from '@mui/icons-material';

import { TimeZoneTable } from '@/routes/time_zone';
import { capitalize } from "@/utils/capitalize";
import { getUser, deleteUser } from "@/services/userService";
import { logout, getCurrentUser } from "@/services/authService";


const Profile = () => {
    // Get ID from URL
    let { id } = useParams();
    const navigate = useNavigate()

    const [profileUser, setProfileUser] = useState( null );

    useEffect(async () => {
        if (id == null){
            let currentUser = getCurrentUser();
            if(currentUser){
                setProfileUser(currentUser);
            }
            else{
                navigate('/');
            }
        }
        else{
            setProfileUser(await getUser(id))
        }
    }, [id]);

    const handleDeleteButtonClick = (id) => {
        deleteUser(id);
        let current_user = getCurrentUser();
        if(current_user && !current_user.admin){
            logout();
        }
        setTimeout(() => {
            location.href = '/'
        }, 300)
    }

    let admin_user = profileUser?.admin;
    let name = profileUser?.name

    return (
        <Container component="main" maxWidth="xs">
            <Toolbar />
            <Grid container justify="center">
                <div className="card">
                    <div className="card-body">
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <div>
                                <img
                                    src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png"
                                    className="card-img-top"
                                    alt=""
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <div style={{marginTop: 0, marginLeft: 10}}>
                                <h3 className="card-title">
                                    {capitalize(name)}
                                </h3>
                                <p className="card-text">
                                    <span className="phone">{profileUser && profileUser.email}</span>
                                </p>
                            </div>
                        </Avatar>
                        {/*<div className="avatar" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>*/}
                        {/*    <div>*/}
                        {/*        <img*/}
                        {/*            src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png"*/}
                        {/*            className="card-img-top"*/}
                        {/*            alt=""*/}
                        {/*            width={60}*/}
                        {/*            height={60}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*    <div style={{marginTop: 0, marginLeft: 10}}>*/}
                        {/*        <h3 className="card-title">*/}
                        {/*            {capitalize(name)}*/}
                        {/*        </h3>*/}
                        {/*        <p className="card-text">*/}
                        {/*            <span className="phone">{profileUser && profileUser.email}</span>*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div>
                            <Button
                                type="button"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                to={`/user/${id || profileUser.id}`}
                                component={Link}
                            >
                                <Edit></Edit>
                            </Button>
                            {!admin_user &&
                                <Button
                                    type="button"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, ml: 20}}
                                    onClick={ e => handleDeleteButtonClick(profileUser?.id)}
                                >
                                    <Delete></Delete>
                                </Button>}
                        </div>
                    </div>
                </div>
            </Grid>
            <div>
                <div style={{display: 'flex', justifyContent: 'center' }}>
                    <h3 style={{marginBottom: 5}}>Time Zones</h3>
                    <Button
                        sx={{borderRadius: 5, position: "absolute", right: 22}}
                        className="btn btn-light"
                        size="small"
                        to={`/${id}/add-timezone`}
                        component={Link}
                    >
                        <Add />
                    </Button>
                </div>
                <TimeZoneTable user_id={id} />
            </div>
        </Container>
    );
}

export default Profile;
