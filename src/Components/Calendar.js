import * as React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Paper from '@mui/material/Paper';

import { useDispatch, useSelector } from "react-redux";
import { updateNameByHour, setBothNameByHour, resetNameByHour, updateNameByHourBackend, convertSelectedDate} from "../Redux/reservations"

import InputAdornment from '@mui/material/InputAdornment';
import ClearIcon from '@mui/icons-material/Clear';

const DAILY_HOUR_LIST = [
    {
        startTime: "08:00:00",
        "endTime": "09:00:00"
    },
    {
        startTime: "09:00:00",
        "endTime": "10:00:00"
    },
    {
        startTime: "10:00:00",
        "endTime": "11:00:00"
    },
    {
        startTime: "11:00:00",
        "endTime": "12:00:00"
    },
    {
        startTime: "12:00:00",
        "endTime": "13:00:00"
    },
    {
        startTime: "13:00:00",
        "endTime": "14:00:00"
    },
    {
        startTime: "14:00:00",
        "endTime": "15:00:00"
    },
    {
        startTime: "15:00:00",
        "endTime": "16:00:00"
    },
    {
        startTime: "16:00:00",
        "endTime": "17:00:00"
    },
    {
        startTime: "17:00:00",
        "endTime": "18:00:00"
    },
]

const parseReservation = (listeObjet) => {

    const obj = {}

    listeObjet.forEach(listeObjetElem => {
        obj[listeObjetElem.startTime] = listeObjetElem.name
    })

    return obj
}

const addItem = async (newObj) => {
    try {
        await axios.post("http://localhost:5500/reservation/put-item",
            newObj)
    } catch (err) {
        console.log(err);
    }
}

const deleteItem = async (id) => {
    try {
        await axios.delete(`http://localhost:5500/reservation/item/${id}`)
    } catch (err) {
        console.log(err)
    }
}

const Calendar = () => {
    const dispatch = useDispatch();
    const { nameByHour, nameByHourBackend, selectedDate } = useSelector((state) => state.reservations);

    const handleChange = (newValue) => {
        const jsDate = new Date(newValue)
        if (!isNaN(jsDate.getTime())) {
            dispatch(convertSelectedDate(jsDate.toISOString().split('T')[0]))
        };
    };


    useEffect(() => {
        const getItemList = async () => {
            try {
                const res = await axios.post("http://localhost:5500/reservation/get-items",
                    {
                        "date": selectedDate
                    })
                dispatch(setBothNameByHour(parseReservation(res.data)))
            } catch (err) {
                console.log(err);
            }
        }
        getItemList()
    }, [dispatch, selectedDate]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>


            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3} sx={{
                    width: '300px', height: '65px'
                }}>
                    <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="YYYY-MM-DD"
                        value={selectedDate.concat('T00:00:00.000Z')}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>

            <div style={{
                width: '100%',
                paddingBottom: '10px',
                rowGap: '10px',
                columnGap: '20px',
                position: 'absolute',
                top: '65px',
                left: '0px',
                right: '0px',
                bottom: '0px',
                overflow: 'auto',
            }}>

                {DAILY_HOUR_LIST.map((hour) => {
                    return (
                        <Paper variant="outlined" key={hour.startTime}
                            style={{
                                padding: '5px',
                                paddingTop: '10px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: '20px',
                                width: '90%',
                                maxWidth: '500px',
                                minWidth: '300px',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                            <TextField id="outlined-basic" label={hour.startTime.substring(0, 5)} variant="outlined" onChange={e => {
                                dispatch(updateNameByHour({
                                    "startTime": hour.startTime,
                                    "name": e.target.value
                                }))
                            }}
                                value={nameByHour[hour.startTime] || ''}
                                sx={{
                                    width: 'calc(100% - 80px)',
                                }}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position='end'>
                                            <ClearIcon onClick={() => {
                                                dispatch(updateNameByHour({
                                                    "startTime": hour.startTime,
                                                    "name": ""
                                                }))
                                            }} />
                                        </InputAdornment>,
                                }}
                            />

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '70px',
                                rowGap: '2px',
                            }}>


                                <Button
                                    style={{
                                        color: 'white',
                                        fontWeight: '40',
                                        backgroundColor: nameByHour[hour.startTime] !== nameByHourBackend[hour.startTime] ? '#1E90FF' : 'lightgray',
                                        height: "25px",
                                        fontSize: "14px",
                                    }}
                                    variant="contained"
                                    disabled={nameByHour[hour.startTime] === nameByHourBackend[hour.startTime]}
                                    onClick={() => {
                                        dispatch(resetNameByHour(hour.startTime))
                                    }}>Reset
                                </Button>

                                <Button
                                    style={{
                                        color: 'white',
                                        fontWeight: '40',
                                        backgroundColor: nameByHour[hour.startTime] !== nameByHourBackend[hour.startTime] ? '#1E90FF' : 'lightgray',
                                        height: "25px",
                                        fontSize: "14px",
                                    }}
                                    variant="contained"
                                    disabled={nameByHour[hour.startTime] === nameByHourBackend[hour.startTime]}
                                    onClick={() => {
                                        if (nameByHour[hour.startTime] !== "") {
                                            addItem({
                                                startTime: hour.startTime,
                                                endTime: hour.endTime,
                                                name: nameByHour[hour.startTime] || '',
                                                date: selectedDate
                                            })
                                        }
                                        else {
                                            deleteItem(selectedDate + 'T' + hour.startTime + '.000Z')
                                        }
                                        dispatch(updateNameByHourBackend(hour.startTime))
                                    }
                                    }>Save
                                </Button>


                            </div>

                        </Paper>


                    )
                })}

            </div>

        </div>

    );

}

export default Calendar