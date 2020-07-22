import React from "react"
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// select component
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// date picker
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
//Radio Group
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
// check box
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

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
    // dropdown component / select
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    // date picker
    const [selectedDate, setSelectedDate] = React.useState(new Date('2000-08-18'));

    const handleDateChange = (date) => {
        var newDate = new Date(date.toDateString());
        setSelectedDate(newDate);
        console.log(newDate.toLocaleDateString());
    };

    //symptoms checkbox 
    const symptoms = []
    const [symptomsCheckBoxState, setsymptomsCheckBoxState] = React.useState({
        "Dry Cough": false,
        "Sneezing": false,
        "Sore Throat": false,
        "Feeling Breathless": false,
        "Pain in Chest": false,
        "Drowsiness": false,
        "Weekness": false,
        "No symptoms": false,
        "other": false
    });
    // converting to array for creating checkbox
    var array = Object.keys(symptomsCheckBoxState).map((key) => [(key), symptomsCheckBoxState[key]]);

    const handleCheckChange = (event) => {

        const { name, checked } = event.target;
        // changing states
        setsymptomsCheckBoxState({ ...symptomsCheckBoxState, [name]: checked });
    };
    // logging changed states
    // console.log(symptomsCheckBoxState);
    // pushing all selected values into a new array
    array.forEach(item => {
        if (item[1]) {
            console.log(item[0]);
            symptoms.push(item[0])
        }
    })
    // console.log(symptoms);

    //Travel and exposure checkbox 
    const exposure = []
    const [exposureCheckBoxState, setExposureCheckBoxState] = React.useState({
        "No Travel History": false,
        "No contact with anyone with travel History ": false,
        "In contact with covid confirmed": false,
        "Traveled in covid affected area in last 14 days": false
    });
    // converting to array for creating checkbox
    var array2 = Object.keys(exposureCheckBoxState).map((key) => [(key), exposureCheckBoxState[key]]);

    const handleCheckChange2 = (event) => {

        const { name, checked } = event.target;
        // changing states
        setExposureCheckBoxState({ ...exposureCheckBoxState, [name]: checked });
    };
    // logging changed states
    // console.log(exposureCheckBoxState);
    // pushing all selected values into a new array
    array2.forEach(item => {
        if (item[1]) {
            console.log(item[0]);
            exposure.push(item[0])
        }
    })
    // console.log(exposure);

    //medical condition History checkbox 
    const medicalHistory = []
    const [medHistCheckBoxState, setmedHistCheckBoxState] = React.useState({
        "Diabetes": false,
        "Heart Disease ": false,
        "Kidney Disease ": false,
        "Lung Disease": false,
        "Stroke ": false,
        "Reduced Immunity": false

    });
    // converting to array for creating checkbox
    var array3 = Object.keys(medHistCheckBoxState).map((key) => [(key), medHistCheckBoxState[key]]);

    const handleCheckChange3 = (event) => {

        const { name, checked } = event.target;
        // changing states
        setmedHistCheckBoxState({ ...medHistCheckBoxState, [name]: checked });
    };
    // logging changed states
    // console.log(medHistCheckBoxState);
    // pushing all selected values into a new array
    array3.forEach(item => {
        if (item[1]) {
            console.log(item[0]);
            medicalHistory.push(item[0])
        }
    })
    // console.log(medicalHistory);



    return <>


        <Grid item container xs={10} >

            <Grid container item xs={12}>
                <h2 >Patient Register</h2>
                <form className={classes.root} preventDefault="true" autoComplete="off">
                    <div>

                        {/* Keep atleast 4 items in this div to maintain alignment */}
                        <FormControl className={classes.formControl} >
                            <InputLabel id="demo-simple-select-label" >Patient type</InputLabel>
                            <Select
                                labelId="outlined-secondaryl"
                                id="demo-simple-select"

                                value={age}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Regular</MenuItem>
                                <MenuItem value={20}>New</MenuItem>
                                <MenuItem value={30}>Referred</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField id="outlined-basic" style={{ width: "30%" }} label="Patient name" placeholder="Patient name" variant="outlined" />
                        <TextField id="outlined-basic" label="mobile no" placeholder="mobile no" variant="outlined" />


                        <TextField id="outlined-basic" label="email" placeholder="email" variant="outlined" />


                        <TextField
                            id="standard-helperText"
                            label="Alternate mobile no."

                            helperText="optional"
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date Of Birth"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>


                    </div>
                    <div>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup row name="Gender" defaultValue="top">
                                <FormControlLabel
                                    value="top"
                                    control={<Radio color="primary" />}
                                    label="Male"

                                />
                                <FormControlLabel
                                    value="start"
                                    control={<Radio color="primary" />}
                                    label="Female"

                                />
                                <FormControlLabel
                                    value="bottom"
                                    control={<Radio color="primary" />}
                                    label="other"

                                />

                            </RadioGroup>
                        </FormControl>



                    </div>
                    <div>
                        <TextField
                            id="standard-full-width"
                            label="Area"
                            placeholder="Area"
                        />
                        <TextField
                            id="standard-full-width"
                            label="City"
                            placeholder="City"
                        />
                        <TextField
                            id="standard-full-width"
                            label="Pincode"
                            placeholder="Area"
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-full-width"
                            label="Referral"
                            placeholder="Enter Doctor Name"
                        />
                    </div>
                    <div>
                        {/* check box group */}
                        <div>
                            <h4>Patient's Symptom:</h4>
                        </div>
                        <FormGroup row>
                            {array.map((item, index) => {
                                return <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={item[1]}
                                            onChange={handleCheckChange}
                                            name={item[0]}
                                            color="primary"
                                        />
                                    } key={index}
                                    label={item[0]}
                                />
                            }
                            )}
                        </FormGroup>
                    </div>
                    <div>
                        {/* check box group */}
                        <div>
                            <h4>Travel and exposure:</h4>
                        </div>
                        <FormGroup row>
                            {array2.map((item, index) => {
                                return <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={item[1]}
                                            onChange={handleCheckChange2}
                                            name={item[0]}
                                            color="primary"
                                        />
                                    } key={index}
                                    label={item[0]}
                                />
                            }
                            )}
                        </FormGroup>
                    </div>
                    <div>
                        <div>
                            <h4> History of any medical condition:</h4>
                        </div>
                        <FormGroup row>
                            {array3.map((item, index) => {
                                return <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={item[1]}
                                            onChange={handleCheckChange3}
                                            name={item[0]}
                                            color="primary"
                                        />
                                    } key={index}
                                    label={item[0]}
                                />
                            }
                            )}
                        </FormGroup>
                    </div>
                    <div>
                        <Button variant="contained" type="submit" color="primary">  Save</Button>
                    </div>
                </form>
            </Grid>
        </Grid>




    </>
}
