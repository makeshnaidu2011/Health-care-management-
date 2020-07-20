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

    // checkbox 
    const Health = []
    const [checkBoxstate, setCheckBoxState] = React.useState({
        happy: false,
        Excellent: false,
        Boring: false,
        Cheerful: false
    });
    // converting to array for creating checkbox
    var array = Object.keys(checkBoxstate).map((key) => [(key), checkBoxstate[key]]);

    const handleCheckChange = (event) => {

        const { name, checked } = event.target;
        // changing states
        setCheckBoxState({ ...checkBoxstate, [name]: checked });
    };
    // logging changed states
    console.log(checkBoxstate);
    // pushing all selected values into a new array
    array.forEach(item => {
        if (item[1]) {
            console.log(item[0]);
            Health.push(item[0])
        }
    })
    console.log(Health);
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

                        <TextField
                            label="Patient name"
                            id="outlined-margin-normal"
                            required
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            label="mobile no"
                            id="outlined-margin-normal"
                            className={classes.textField}
                            required
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="email"
                            id="outlined-margin-normal"
                            required
                            type="email"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
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
                        {/* check box group */}

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
                        <Button variant="contained" type="submit" color="primary">  Save</Button>
                    </div>
                </form>
            </Grid>
        </Grid>




    </>
}
