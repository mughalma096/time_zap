import React, { useState, useEffect }  from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import {Grid, Button, Toolbar, Container, Avatar} from '@mui/material';

import { Add, Edit, Delete } from '@mui/icons-material';

import { TimeZoneTable } from '@/routes/time_zone';
import { capitalize, capitalizeFirstChar } from "@/utils/capitalize";
import { getUser, deleteUser } from "@/services/userService";
import { logout } from "@/services/authService";


const Profile = () => {
    // Get ID from URL
    let { id } = useParams();
    const navigate = useNavigate()
    const [user, setUser] = useState( {name: "", email: "", admin: false} );

    useEffect(() => {
        fetchUser().then(r => r)
    }, [id]);

    const fetchUser = async () => {
        if (id){
            let data = await getUser(id);
            if(data)
                setUser(data)
        }
    }

    const handleDeleteButtonClick = (id) => {
        deleteUser(id);
        if(!user?.admin){
            logout();
        }
        setTimeout(() => {
            location.href = '/'
        }, 300)
    }

    return (
            <Container component="main" maxWidth="md">
                <Toolbar />
                <Grid container justifyContent="center">
                    <div style={{ width: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: 12, padding: 20, display: 'flex', gap: 16, alignItems: 'center', background: '#fff' }}>
                        <Avatar sx={{ bgcolor: 'secondary.main', width: 72, height: 72 }}>
                            {user?.name
                                ? capitalizeFirstChar(user?.name)
                                : <img src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png" alt="" style={{ width: 72, height: 72 }} />}
                        </Avatar>

                        <div style={{ flex: 1 }}>
                            <h3 style={{ margin: 0, fontSize: 20 }}>
                                {capitalize(user?.name)}
                            </h3>
                            <p style={{ margin: '6px 0 0', color: '#666', fontSize: 14 }}>
                                {user?.email}
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            <Button
                                type="button"
                                variant="outlined"
                                sx={{ textTransform: 'none' }}
                                to={`/user/${id}`}
                                component={Link}
                                startIcon={<Edit />}
                            >
                                Edit
                            </Button>

                            {!user?.admin &&
                                <Button
                                    type="button"
                                    variant="contained"
                                    color="error"
                                    sx={{ textTransform: 'none' }}
                                    onClick={() => handleDeleteButtonClick(id)}
                                    startIcon={<Delete />}
                                >
                                    Delete
                                </Button>
                            }
                        </div>
                    </div>
                </Grid>

                <div style={{ marginTop: 28 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <h3 style={{ marginBottom: 5 }}>Time Zones</h3>
                        <Button
                            sx={{ borderRadius: 5, position: 'absolute', right: 8, top: -6 }}
                            size="small"
                            to={`/${id}/add-timezone`}
                            component={Link}
                            variant="contained"
                            color="primary"
                            startIcon={<Add />}
                        >
                            Add
                        </Button>
                    </div>

                    <div style={{ marginTop: 12 }}>
                        <TimeZoneTable />
                    </div>
                </div>
            </Container>
        );
}

export default Profile;
