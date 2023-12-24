"use client";

import React, { useState } from "react";
import "./css/Navbar.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Dialog, DialogContent } from "@mui/material";

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const openSignupModal = () => {
    setOpenModal(!openModal);
  };

  const signupModal = () => {
    return (
      //   <Dialog
      //     open={openModal}
      //     onClose={openSignupModal}
      //     aria-labelledby="modal-modal-title"
      //     aria-describedby="modal-modal-description"
      //     maxWidth={300}
      //   >
      //     <DialogContent>
      //       <Container component="main" maxWidth="xs">
      //         <CssBaseline />
      //         <div className={classes.paper}>
      //           <Avatar className={classes.avatar}></Avatar>
      //           <Typography component="h1" variant="h5">
      //             Sign up
      //           </Typography>
      //           <form className={classes.form} noValidate>
      //             <Grid container spacing={2}>
      //               <Grid item xs={12} sm={6}>
      //                 <TextField
      //                   autoComplete="fname"
      //                   name="firstName"
      //                   variant="outlined"
      //                   required
      //                   fullWidth
      //                   id="firstName"
      //                   label="First Name"
      //                   autoFocus
      //                 />
      //               </Grid>
      //               <Grid item xs={12} sm={6}>
      //                 <TextField
      //                   variant="outlined"
      //                   required
      //                   fullWidth
      //                   id="lastName"
      //                   label="Last Name"
      //                   name="lastName"
      //                   autoComplete="lname"
      //                 />
      //               </Grid>
      //               <Grid item xs={12}>
      //                 <TextField
      //                   variant="outlined"
      //                   required
      //                   fullWidth
      //                   id="email"
      //                   label="Email Address"
      //                   name="email"
      //                   autoComplete="email"
      //                 />
      //               </Grid>
      //               <Grid item xs={12}>
      //                 <TextField
      //                   variant="outlined"
      //                   required
      //                   fullWidth
      //                   name="password"
      //                   label="Password"
      //                   type="password"
      //                   id="password"
      //                   autoComplete="current-password"
      //                 />
      //               </Grid>
      //               <Grid item xs={12}>
      //                 <FormControlLabel
      //                   control={
      //                     <Checkbox value="allowExtraEmails" color="primary" />
      //                   }
      //                   label="I want to receive inspiration, marketing promotions and updates via email."
      //                 />
      //               </Grid>
      //             </Grid>
      //             <Button
      //               type="submit"
      //               fullWidth
      //               variant="contained"
      //               color="primary"
      //               className={classes.submit}
      //             >
      //               Sign Up
      //             </Button>
      //             <Grid container justify="flex-end">
      //               <Grid item>
      //                 <Link href="#" variant="body2">
      //                   Already have an account? Sign in
      //                 </Link>
      //               </Grid>
      //             </Grid>
      //           </form>
      //         </div>
      //         <Box mt={5}>
      //           <Copyright />
      //         </Box>
      //       </Container>
      //     </DialogContent>
      //   </Dialog>
      <>
        <div className="view">
          <div className="flex-center">
            <button
              className="btn btn-lg btn-indigo"
              data-toggle="modal"
              data-target="#myModal"
            >
              Open Modal
            </button>
          </div>
        </div>

        <div
          className="modal fade"
          id="myModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">
                  Modal title
                </h4>
              </div>
              <div className="modal-body">
                <img
                  src="https://mdbootstrap.com/images/regular/nature/img%20(25).jpg"
                  className="img-fluid"
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            <span className="nav-c-name-span">Blue</span>Learn
          </a>
          <button
            className="navbar-toggler nav-main-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-main-menu">
              <li className="nav-item">
                <a className="nav-link nav-menu1" aria-current="page" href="/">
                  Hire talent
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu2" href="/">
                  Find work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu3" href="/">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu4" href="/">
                  Community
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-menu5" href="/">
                  Events
                </a>
              </li>
            </ul>
            <button
              onClick={openSignupModal}
              type="button"
              className="btn btn-primary nav-btn"
            >
              Sign up
            </button>
            {signupModal()}
          </div>
        </div>
      </nav>
    </div>
  );
}
