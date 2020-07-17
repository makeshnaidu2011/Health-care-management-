import React from "react"
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));




export default function PatientReg() {
    const classes = useStyles();
    return <>


        <Grid item container xs={10}>

            <Grid container item xs={12}>
                <h2 >Patient Register</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        {/* Keep atleast 4 items in this div to maintain alignment */}
                        <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
                        <TextField
                            id="standard-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="Read Only"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <TextField id="standard-search" label="Search field" type="search" />
                        <TextField
                            id="standard-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                        />

                    </div>
                    <div>
                        <TextField
                            id="standard-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                        />
                    </div>
                    <div>
                        <Button variant="contained" color="primary">  Search</Button>
                    </div>
                </form>
            </Grid>
        </Grid>




    </>
}
