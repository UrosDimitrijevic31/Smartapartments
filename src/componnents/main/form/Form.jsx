import * as React from 'react';
import './Form.scss'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import Stack from '@mui/material/Stack';

export default function Form() {
    const [value, setValue] = React.useState(new Date());


    return (
        <div className="showcase-form card">
            <h2>Reservation</h2>
            <form>
                <div className="form-control">
                    <input type="text" name="location" placeholder="Where to" required />
                </div>
                <div className="form-control check-date">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDatePicker
                            label="Check-in"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                                console.log(value);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <MobileDatePicker
                            label="Check-out"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                                console.log(value);
                            }} 
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className="form-control num-of-guests">
                    <label htmlFor=""></label>
                    <div>
                        <input type="text"/>
                        <fieldset>
                            <legend>
                                <span>Guests</span>
                            </legend>
                        </fieldset>
                    </div>     
                </div>
                <input type="submit" value="Search" className="btn btn-primary" />
            </form>
        </div>
    )
} 