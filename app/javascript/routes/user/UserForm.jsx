import React, { useState, useEffect } from 'react';
import {useForm, Controller } from "react-hook-form";
import { useParams, useNavigate } from 'react-router-dom';
import {
    Button, CssBaseline, TextField,
    Box, Typography, Container, Paper, Toolbar
} from '@mui/material';

import { getUser, updateUser } from '@/services/userService';

export default function UserForm() {
    // Get ID from URL
    let { id } = useParams();
    const navigate = useNavigate()
    const [user, setUser] = useState( {name: "", email: ""} );

    useEffect( () => {
        fetchUser().then(r => r)
    }, [id]);

    const fetchUser = async () => {
        if (id){
            let data = await getUser(id);
            if(data)
                setUser(data);
        }
    }

    useEffect(() => {
        setValue('name', user.name)
        setValue('email', user.email)
    }, [user])

    const { handleSubmit, control, setValue, formState: { errors }} = useForm();

    const onSubmit = handleSubmit((data) => {
        let { name, email, password } = data;
        updateUser(id, name, email, password);
        navigate(`/profile/${id}`);
    });

    const changeHandler = (e) => {
    }

    return (
        <Container component="main" maxWidth="xs">
            <Toolbar />
            <CssBaseline />
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <div style={{marginTop: 10}}>
                    <Typography component="h1" variant="h5">
                        Edit {'user'}
                    </Typography>
                </div>
                <Box
                    component="form"
                    noValidate
                    onSubmit={onSubmit}
                    sx={{ mt: 3, width: '100%' }}
                >
                    <Controller
                        name="name"
                        defaultValue=""
                        control={control}
                        onChange={changeHandler}
                        render={({ field: { onChange, onBlur, value, name, ref } }) =>
                            <TextField
                                autoComplete="name"
                                variant="outlined"
                                required
                                margin="normal"
                                fullWidth
                                id="name"
                                value={value}
                                onChange={onChange}
                                label="Name"
                                autoFocus
                                helperText={errors.name}
                            />}
                    />
                    <Controller
                        name="email"
                        defaultValue=""
                        control={control}
                        onChange={changeHandler}
                        render={({ field: { onChange, onBlur, value, name, ref } }) =>
                            <TextField
                                autoComplete="email"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                value={value}
                                onChange={onChange}
                                id="email"
                                label="Email"
                                autoFocus
                                helperText={errors.name}
                            />}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        onChange={changeHandler}
                        render={({ field: { onChange, onBlur, value, name, ref } }) =>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                onChange={onChange}
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                helperText={errors.password}
                            />}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}