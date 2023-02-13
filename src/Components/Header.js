import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setIsConnected } from "../Redux/appSlice"

import { Typography } from "@mui/material";
import { styled } from '@mui/system';

const CustomButton = styled(Typography)({
    color: 'white',
    fontWeight: '40',
    fontSize: "20px",
    textAlign: 'center',
    cursor: 'pointer',
    "&:hover": {
        textDecoration: 'underline'
    }
  });


const Header = (props) => {
    const { headerUserName, isConnected } = useSelector((state) => state.app);

    const dispatch = useDispatch();

    return (

        <div style={{
            backgroundColor: '#1E90FF',
            width: '100%',
            maxHeight: '60px',
            minHeight: '60px',
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        }}>

            <div style={{
                width: "160px",

            }}>

                <CustomButton
                    onClick={() => {
                        props.setDisplay("")
                    }
                    }
                >Home
                </CustomButton>

            </div>


            <h1 style={{
                textAlign: 'center',
                color: 'white',
                padding: '10px',
                margin: '0px',
                flex: 1,
            }}>Reserv'App</h1>

            <div style={{
                width: "160px",

            }}>

                <CustomButton
                    onClick={() => {
                        if (isConnected === true) {
                            props.setDisplay("")
                            dispatch(setIsConnected(false))
                        } else {
                            props.setDisplay("register")
                        }
                    }
                    }
                >{isConnected === true ? "Logout" : 'Register'}
                </CustomButton>

                <CustomButton
                    onClick={() => {
                        props.setDisplay("login")
                    }
                    }
                >{isConnected === true ? headerUserName: 'Login'}
                </CustomButton>

            </div>
        </div>

    )
}

export default Header