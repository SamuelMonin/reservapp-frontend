import React from "react";
import { useState } from 'react';
import axios from 'axios';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';


const Account = () => {

    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userConfirmedPassword, setUserConfirmedPassword] = useState("")


    const addItem = async (newObj) => {
        try {
            await axios.post("http://localhost:5500/user/put-item", newObj)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel>Username</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    startAdornment={
                        <InputAdornment position="start">
                            <PersonIcon />
                        </InputAdornment>
                    }
                    label="Password"
                    onChange={e => setUserName(e.target.value)
                    }
                />
            </FormControl>

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                    type="password"
                    id="outlined-adornment-password"
                    startAdornment={
                        <InputAdornment position="start">
                            <HttpsIcon />
                        </InputAdornment>
                    }
                    label="Password"
                    onChange={e => setUserPassword(e.target.value)}
                />
            </FormControl>

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel>Confirmed</InputLabel>
                <OutlinedInput
                    type="password"
                    id="outlined-adornment-password"
                    startAdornment={
                        <InputAdornment position="start">
                            <HttpsIcon />
                        </InputAdornment>
                    }
                    label="Password"
                    onChange={e => setUserConfirmedPassword(e.target.value)}
                />
            </FormControl>


            <Button
                style={{
                    color: 'white',
                    fontWeight: '40',
                    backgroundColor: '#1E90FF',
                    fontSize: "14px",
                }}
                onClick={() => {
                    if (userConfirmedPassword !== userPassword) {
                        return (
                            alert("Password and confirmed password are not the same, please try again.")
                        )
                    }
                    else {
                        addItem({
                            userName: userName,
                            password: userPassword,
                        })

                    }
                }
                }
            >Subbmit</Button>

        </div>
    )
}

export default Account