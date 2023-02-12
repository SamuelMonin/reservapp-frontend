import React from "react";


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
                        if (props.connected === "true") {
                            props.setDisplay("")
                            props.setConnected("false")
                        } else {
                            props.setDisplay("register")
                        }
                    }
                    }
                >{props.connected === "true" ? "Logout" : 'Register'}
                </CustomButton>

                <CustomButton
                    onClick={() => {
                        props.setDisplay("login")
                    }
                    }
                >{props.connected === "true" ? props.loginUserName : 'Login'}
                </CustomButton>

            </div>
        </div>

    )
}

export default Header