import React from 'react';
import { Link } from 'react-router-dom';
import {Add} from '@mui/icons-material';
import {Grid, Button, Typography, Toolbar, Container} from '@mui/material';

import UserTable from './UserTable';
import { getCurrentUser } from "./../../services/authService";

const Users = ({user}) => {
    let admin_user = user && user.admin;
    let admin_user_id = user && user.admin && user.id;
    let help_text = user ? <Link to={`/profile/${user.id}`}>Go to Profile</Link> :
        <><Link to={`/login`}>Login</Link> or <Link to={`/register`}>Register</Link></>
    return (
        <Container component="main" maxWidth="xs">
            <Toolbar />
            <Grid>
                { admin_user ?
                    (<>
                        <Grid style={{display: 'flex', height: 50, justifyContent: "center"}}>
                            <h2>User List</h2>
                            {/*<Button*/}
                            {/*  style={{borderRadius: 5, position: "absolute", right: 22}}*/}
                            {/*  className="btn btn-light"*/}
                            {/*  size="small"*/}
                            {/*  to="/add-timezone"*/}
                            {/*  component={Link}*/}
                            {/*>*/}
                            {/*  <Add />*/}
                            {/*</Button>*/}
                        </Grid>
                        <UserTable admin_user_id={admin_user_id} />
                    </>) :
                    <Grid style={{display: 'flex', height: 50, justifyContent: "center"}}>
                        <h3 >Welcome to ECommerce! {help_text}</h3>
                    </Grid>
                }
            </Grid>
        </Container>
    );
};

export default Users;