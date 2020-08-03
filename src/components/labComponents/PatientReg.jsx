import React from "react"
import { Grid, TextField, Button, makeStyles, FormControl, InputLabel, MenuItem, Radio, RadioGroup, FormControlLabel, FormLabel, Checkbox, FormGroup } from '@material-ui/core';
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
}));

export default function PatientReg() {
    const classes = useStyles();
    const { handleSubmit, register, control } = useForm();
    const onSubmit = data => console.log(data);

    // date picker
    const [selectedDate, setSelectedDate] = React.useState(new Date('2000-08-18'));

    const handleDateChange = (date) => {
        var newDate = date.toLocaleDateString()
        // console.log(newDate);
        setSelectedDate(newDate);
    };



    return <>


        <Grid item container xs={10} >

            <Grid container item xs={12}>
                <h2 >Patient Register</h2>
                <form className={classes.root} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <div>

                        {/* Keep atleast 4 items in this div to maintain alignment */}
                        <FormControl className={classes.formControl} >
                            <Controller
                                name="iceCreamType"
                                as={Select}
                                options={[
                                    { value: "chocolate", label: "Chocolate" },
                                    { value: "strawberry", label: "Strawberry" },
                                    { value: "vanilla", label: "Vanilla" }
                                ]}
                                control={control}
                                rules={{ required: true }}
                            />
                        </FormControl>
                        <TextField id="outlined-basic" style={{ width: "30%" }} name="patientName" label="Patient name" placeholder="Patient name" inputRef={register} variant="outlined" />
                        <TextField id="outlined-basic" label="mobile no" name="mobile" inputRef={register} placeholder="mobile no" variant="outlined" />
                        <TextField id="outlined-basic" name="email" label="email" inputRef={register} placeholder="email" variant="outlined" />
                        <TextField id="standard-helperText" label="Alternate mobile no." inputRef={register} name="alternateMobile" helperText="optional" />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date Of Birth"
                                onChange={handleDateChange}
                                name="dob" />
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
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox inputRef={register} name="emotion" value="happy" />} label="happy" />
                            <FormControlLabel control={<Checkbox inputRef={register} name="emotion" value="hungry" />} label="Hungry" />
                        </FormGroup>
                    </div>
                    <div>
                        {/* check box group */}
                        <div>
                            <h4>Travel and exposure:</h4>
                        </div>

                    </div>
                    <div>
                        <div>
                            <h4> History of any medical condition:</h4>
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
