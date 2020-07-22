import React from "react"
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: '30ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function BillingDetails() {
    const name = "xsy"
    const ref = "vanita"
    const type = "VDC"
    const regno = 12345;
    const date = new Date().toLocaleDateString();

    const classes = useStyles();
    return <>
        <Grid item container lg={10} >
            <Grid item xs={12}>
                <h2>Billing</h2>
                <div>
                    <span>Patient name : {name}  </span>
                    <span>referred by : Dr.{ref}  </span>
                    <span> {type}  </span>
                    <span> Reg no :{regno}  </span>
                    <span> Date :{date}  </span>
                </div>

                <form className={classes.root} >
                    <TextField style={{ width: "40%" }} id="outlined-basic" helperText="selected value" label="Test name" placeholder="Test Name" variant="outlined" />
                    <TextField id="outlined-basic" helperText="selected amount" label="Amount" placeholder="Amount in Rs." variant="outlined" />
                    <TextField id="outlined-basic" label="Concession" placeholder="concession" variant="outlined" />
                    <div>
                        <TextField id="outlined-basic" label="Additional Price" placeholder="if any" variant="outlined" />
                    </div>
                </form>

            </Grid>
        </Grid>

    </>
}