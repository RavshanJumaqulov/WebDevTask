import { Box } from '@mui/material'
import React from 'react'

export default function Search() {
    return (
        <Box
            sx={{
                width: 'auto',
                maxWidth: 250,
                "& input": {
                    py: 1,
                    px: 1,
                    // width: "100%",
                    background: "none",
                    border: "1px solid hsla(0,0%,100%,.1)",
                    borderRadius: 3,
                    color: "#fff !important",
                    outline: "none",
                    transition: "0.3s all",
                    fontSize: 16,
                    fontWeight: 400,
                    fontFamily: 'Ubuntu, sans-serif',
                    "&:hover": {
                        borderColor: "hsla(0,0%,100%,.6)",
                        color: "#fff",
                    },
                    "&:focus": {
                        outline: "none",
                        boxShadow: "0px 0px 5px hsla(0,0%,100%,.6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "#fff"
                    },
                    "&:autofill": {
                        background: "none !important",
                        color: "#FF5C00",
                    },
                    "&:-webkit-autofill": {
                        "&:hover": {
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "#FF5C00",
                            transition: "all 5000s ease-in-out 0s",
                        },
                        "&:focus": {
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "#FF5C00",
                            WebkitBoxShadow: "0px 0px 5px #FF5C00",
                            boxShadow: "0px 0px 5px #FF5C00",
                            transition: "all 5000s ease-in-out 0s",
                        },
                        "&:active": {
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "#FF5C00",
                            transition: "all 5000s ease-in-out 0s",
                        },
                        background: "none !important",
                    },
                    "&:-internal-autofill-selected": {
                        background: "none !important",
                        backgroundColor: "none",
                    },
                },
            }}
        >
            <input type="text" id="" placeholder='Qidiruv' />
        </Box>
    )
}
