// import React, { useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
//
// import { useForm, Controller } from "react-hook-form";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { makeStyles, Link, Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container } from '@material-ui/core';
// import { login, getCurrentUser } from './../../services/authService';
//
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));
//
// export default function Login({reload, setReload}) {
//
//   const navigate = useNavigate()
//
//   useEffect(() => {
//     if(getCurrentUser()){
//       navigate('/');
//     }
//   }, []);
//
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm();
//
//   const onSubmit = handleSubmit((data) => {
//     let { email, password } = data;
//     login(email, password);
//     setReload(!reload);
//     setTimeout(() => {
//       location.href = '/'
//     }, 300)
//   });
//   const classes = useStyles();
//
//   return (
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form className={classes.form} noValidate onSubmit={onSubmit}>
//             <Controller
//               name="email"
//               control={control}
//               defaultValue=""
//               render={({ field }) =>
//                 <TextField
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   fullWidth
//                   label="Email Address"
//                   autoComplete="email"
//                   autoFocus
//                   helperText={errors.email}
//                   {...field}
//               />}
//             />
//             <Controller
//               name="password"
//               control={control}
//               defaultValue=""
//               render={({ field }) =>
//                 <TextField
//                   variant="outlined"
//                   margin="normal"
//                   required
//                   fullWidth
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                   helperText={errors.password}
//                   {...field}
//                 />}
//             />
//             <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//             />
//             <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 className={classes.submit}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/home/asim/time_zap/app/javascript/routes/authentication/Register" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//       </Container>
//   );
// }

import React from "react";
import {
    Form,
    redirect,
    useNavigate,
    useLoaderData,
} from "react-router-dom";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    console.log(updates);
}

function Login() {
    const contact = {};
    const navigate = useNavigate();

    return (
        <Form method="post" id="contact-form">
            <p>
                <span>Name</span>
                <input
                    placeholder="First"
                    aria-label="First name"
                    type="text"
                    name="first"
                    defaultValue={contact?.first}
                />
                <input
                    placeholder="Last"
                    aria-label="Last name"
                    type="text"
                    name="last"
                    defaultValue={contact?.last}
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    type="text"
                    name="twitter"
                    placeholder="@jack"
                    defaultValue={contact?.twitter}
                />
            </label>
            <label>
                <span>Phone</span>
                <input
                    type="phone"
                    name="phone"
                    placeholder="xxxx-xxxxxxx"
                    defaultValue={contact?.phone}
                />
            </label>

            <label>
                <span>Avatar URL</span>
                <input
                    placeholder="https://example.com/avatar.jpg"
                    aria-label="Avatar URL"
                    type="text"
                    name="avatar"
                    defaultValue={contact?.avatar}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                    name="notes"
                    defaultValue={contact?.notes}
                    rows={6}
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button
                    type="button"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Cancel
                </button>
            </p>
        </Form>
    );
}

export default Login;