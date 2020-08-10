import React from "react"
import { Grid, TextField, Button, makeStyles, FormControl, InputLabel, Radio, RadioGroup, FormControlLabel, FormLabel, Checkbox, FormGroup } from '@material-ui/core';
import { useForm, register, Controller } from 'react-hook-form';
import Select from "react-select";
// date picker
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';

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
    checkBox: {
        fontSize: "small",
    },
}));

export default function PatientReg() {
    const classes = useStyles();
    const { handleSubmit, register, control } = useForm();
    const onSubmit = data => {
        let d = data.dob.toLocaleDateString()
        data.dob = d;
        console.log(data);

    }
    return <>


        <Grid item container xs={10} >

            <Grid container item xs={12}>
                <h2 >Patient Register</h2>
                <form className={classes.root} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <div>

                        {/* Keep atleast 4 items in this div to maintain alignment */}

                        <TextField id="outlined-basic"
                            style={{ width: "30%" }} name="patientName"
                            label="Patient name"
                            placeholder="Patient name"
                            inputRef={register}
                            variant="outlined" />
                        <TextField id="outlined-basic" label="mobile no"
                            name="mobile"
                            inputRef={register}
                            placeholder="mobile no"
                            variant="outlined" />
                        <TextField id="outlined-basic" name="email"
                            type="email"
                            label="email"
                            inputRef={register}
                            placeholder="email"
                            variant="outlined" />
                        <TextField id="standard-helperText" label="Alternate mobile no."
                            inputRef={register}
                            name="alternateMobile"
                            helperText="optional" />

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Controller
                                as={KeyboardDatePicker}
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                name="dob"
                                control={control}
                                id="date-picker-inline"
                                required


                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup row defaultValue="male">
                                <FormControlLabel
                                    value="male"
                                    control={<Radio color="primary" />}
                                    label="Male"
                                    name="Gender"
                                    inputRef={register}
                                />
                                <FormControlLabel
                                    value="Female"
                                    control={<Radio color="primary" />}
                                    label="female"
                                    name="Gender"
                                    inputRef={register}
                                />
                                <FormControlLabel
                                    value="other"
                                    control={<Radio color="primary" />}
                                    label="other"
                                    name="Gender"
                                    inputRef={register}
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            id="standard-full-width" label="Area" placeholder="Area" name="area" inputRef={register} />
                        <TextField
                            id="standard-full-width"
                            label="City"
                            placeholder="City"
                            name="city"
                            inputRef={register}

                        />
                        <TextField
                            id="standard-full-width"
                            label="Pincode"
                            placeholder="Area"
                            name="pincode"
                            inputRef={register}

                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-full-width"
                            label="Referral"
                            placeholder="Enter Doctor Name"
                            name="referral"
                            inputRef={register}

                        />
                    </div>
                    <div>
                        {/* check box group */}
                        <div>
                            <h4>Patient's Symptom:</h4>
                        </div>
                        <FormGroup row >
                            <FormControlLabel control={<Checkbox inputRef={register} name="emotion" value="Dry Cough" />} label="Dry Cough" />
                            <FormControlLabel control={<Checkbox inputRef={register} name="emotion" value="Sore Throat" />} label="Sore Throat" />
                            <FormControlLabel control={<Checkbox inputRef={register} name="emotion" value="Sneezing" />} label="Sneezing" />
                            <FormControlLabel control={<Checkbox inputRef={register} name="emotion" value="Breathing problem" />} label="Breathing problem" />
                            <FormControlLabel control={<Checkbox inputRef={register} name="emotion" value="Pain in chest" />} label="Pain in chest" />
                            <FormControlLabel control={<Checkbox inputRef={register} name="emotion" value="Drowsiness" />} label="Drowsiness" />
                            <FormControlLabel control={<Checkbox inputRef={register} name="emotion" value="Weakness" />} label="Weakness" />
                            <FormControlLabel control={<Checkbox inputRef={register} name="emotion" value="No symptoms" />} label="No symptoms" />
                            <FormControlLabel control={<Checkbox inputRef={register} name="emotion" value="Other" />} label="Other" />
                        </FormGroup>
                    </div>
                    <div>
                        {/* check box group */}
                        <div>
                            <h4>Travel and exposure:</h4>
                            <FormGroup row>
                                <FormControlLabel control={<Checkbox inputRef={register} name="exposure" value="No travel history" />} label="No travel history" />
                                <FormControlLabel control={<Checkbox inputRef={register} name="exposure" value="No contact with anyone with travel history" />} label="No contact with anyone with travel history" />
                                <FormControlLabel control={<Checkbox inputRef={register} name="exposure" value="In contact with Covid confirmed" />} label="In contact with Covid confirmed" />
                                <FormControlLabel control={<Checkbox inputRef={register} name="exposure" value="Travelled in Covid affected area in last 14 days" />} label="Travelled in Covid affected area in last 14 days" />

                            </FormGroup>

                        </div>

                    </div>
                    <div>
                        <div>
                            <h4> History of any medical condition:</h4>
                            <FormGroup row>
                                <FormControlLabel control={<Checkbox inputRef={register} name="medical_condition" value="Diabetes" />} label="Hungry" />
                                <FormControlLabel control={<Checkbox inputRef={register} name="medical_condition" value="High BP" />} label="happy" />
                                <FormControlLabel control={<Checkbox inputRef={register} name="medical_condition" value="Heart Disease" />} label="Hungry" />
                                <FormControlLabel control={<Checkbox inputRef={register} name="medical_condition" value="Kidney Disease" />} label="happy" />
                                <FormControlLabel control={<Checkbox inputRef={register} name="medical_condition" value="Lung Disease" />} label="happy" />
                                <FormControlLabel control={<Checkbox inputRef={register} name="medical_condition" value="Stroke" />} label="Hungry" />
                                <FormControlLabel control={<Checkbox inputRef={register} name="medical_condition" value="Reduced imummnity" />} label="Hungry" />
                                <FormControlLabel control={<Checkbox inputRef={register} name="medical_condition" value="other" />} label="Hungry" />
                            </FormGroup>
                        </div>

                    </div>
                    <div>
                        <Button variant="contained" type="submit" color="primary">  Save</Button>
                    </div>
                </form>
            </Grid>
        </Grid>

    </>
}
