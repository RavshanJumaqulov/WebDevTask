import { Fab, Paper, Stack } from '@mui/material'
import React from 'react'
import { MailIcon, PhoneIcon, SmsIcon } from '../Icons'
import { UsersInterface } from '../type/interface'

export default function SocialMedia({ user }: { user: UsersInterface }) {
    return (
        <Paper elevation={2} sx={{ borderRadius: 4, py: 3, px: 6, mt: 2 }}>
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    maxWidth: 300,
                    mx: "auto",
                }}
            >
                <Fab
                    component="a"
                    target='_blank'
                    href={`tel:+${user?.phone.split(' ')[0].replaceAll('-', '')}`}
                    sx={{
                        background: "hsla(0,0%,100%,.1)",
                        boxShadow: "none",
                        zIndex: 1,
                        "& svg": { color: "#fff" },
                        "&:hover": {
                            background: "#a1e23d",
                        },
                    }}
                >
                    <PhoneIcon />
                </Fab>
                <Fab
                    component="a"
                    target='_blank'
                    href={`sms:+${user?.phone.split(' ')[0].replaceAll('-', '')}`}
                    sx={{
                        background: "hsla(0,0%,100%,.1)",
                        boxShadow: "none",
                        zIndex: 1,
                        "& svg": { color: "#fff" },
                        "&:hover": {
                            background: "#ffa33b",
                        },
                    }}
                >
                    <SmsIcon />
                </Fab>

                <Fab
                    component="a"
                    target='_blank'
                    href={`mailto:${user.email}`}
                    sx={{
                        background: "hsla(0,0%,100%,.1)",
                        boxShadow: "none",
                        zIndex: 1,
                        "& svg": { color: "#fff" },
                        "&:hover": {
                            background: "#ff5c00",
                        },
                    }}
                >
                    <MailIcon />
                </Fab>

            </Stack>
        </Paper>
    )
}
