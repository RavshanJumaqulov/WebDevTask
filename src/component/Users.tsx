import React, { useState } from "react";
import {
    Box,
    FormControl,
    MenuItem,
    CircularProgress,
    Select,
    Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { GridIcon, ListIcon } from "../Icons";
import useVisiblity from "../hooks/useVisiblity";
import UserItem from "./UserItem";
import { api } from "../lib/api";
import { useQuery } from "react-query";
import { UsersInterface } from "../type/interface";

async function fetchUsers() {
    const { data } = await api({
        url: `/users`,
        method: 'get'
    })
    return data
}


export default function Users() {
    const [width, setWidth] = useState(window.innerWidth);
    const view = useVisiblity()
    const { data: users, isLoading: usersLoading, isError: usersError, isSuccess: usersSuccess } = useQuery(['userslar',], () => fetchUsers())

    window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
        window.innerWidth < 360 && view.show();
    });

    return (
        <Box>
            <Typography
                variant="subtitle2"
            >
                Userlar
            </Typography>
            <Grid2 container>
                <Grid2 xs={12} md={8} lg={10}>
                    <Typography
                        variant="body2"
                        sx={{ textAlign: 'left', mt: 1 }}
                    >
                        Barcha userlar ro'yxati
                    </Typography>
                </Grid2>
                <Grid2
                    xs={12}
                    md={4}
                    lg={2}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "end",
                    }}
                >
                    <FormControl
                        fullWidth
                        size="small"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            mt: { xs: 4, md: 0 },
                            minWidth: { xs: "100%", md: 230 },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                variant='body2'
                            >
                                Saralash
                            </Typography>
                            <KeyboardArrowUpIcon
                                sx={{
                                    transition: "0.3s all linear",
                                    color: "text.secondary",
                                    transform: "rotate(180deg)"
                                }}
                            />
                        </Box>
                        <Select
                            value={'firstName'}
                            sx={{
                                width: "140px",
                                color: "text.secondary",
                                fontSize: 16,
                                fontFamily: "Ubuntu, sans-serif",
                                fontWeight: "400",
                                "& fieldset": {
                                    border: "none !important",
                                },
                            }}
                        >
                            <MenuItem value={"firstName"} sx={{ color: "text.primary", fontSize: 16 }}>
                                Ismi
                            </MenuItem>
                            <MenuItem value={"secondName"} sx={{ color: "text.primary", fontSize: 16 }}>
                                familiyasi
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid2>
            </Grid2>
            <Box
                sx={{
                    mt: { xs: 1, md: 4 },
                    mb: { xs: 2, md: 3 },
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        display: "inline-flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
                    <GridIcon
                        onClick={() => view.hide()}
                        sx={{
                            p: 1,
                            mr: 1,
                            display: width < 360 ? "none" : 'flex',
                            color: view.visiblity ? "text.secondary" : 'text.primary',
                            background: 'hsla(0,0%,100%,.1) ',
                            borderRadius: 3,
                            transition: "0.3s all linear",
                            "&:hover": {
                                color:
                                    view ? (theme) =>
                                        theme.palette.mode === "light" ? "#1976d2" : "#fff"
                                        : "#fff",
                            },
                        }}
                    />
                    <ListIcon
                        onClick={() => view.show()}
                        sx={{
                            p: 1,
                            mr: 1,
                            display: width < 360 ? "none" : 'flex',
                            color: !view.visiblity ? "text.secondary" : 'text.primary',
                            background: 'hsla(0,0%,100%,.1)',
                            borderRadius: 3,
                            transition: "0.3s all linear",
                            "&:hover": {
                                color: "#fff",
                            },
                        }}
                    />
                </Box>
            </Box>
            <Grid2 container>
                {
                    usersLoading ?
                        <Grid2 xs={12}>
                            <CircularProgress sx={{
                                width: '14px !important',
                                height: '14px !important',
                                display: 'block',
                                mx: 'auto',
                                '& svg': {
                                    fontSize: 14,
                                    width: 14,
                                    height: 14
                                }
                            }} />
                        </Grid2> : usersError ?
                            <Grid2 xs={12}>
                                <Typography sx={{ color: 'error.main', textAlign: 'center' }}>
                                    Xatolik sodir bo'ldi
                                </Typography>
                            </Grid2> : usersSuccess ? users.map((el: UsersInterface) => {
                                return (
                                    <UserItem view={view.visiblity} user={el} />
                                )
                            })
                                : <Grid2 xs={12}>
                                    <Typography sx={{ color: 'error.main', textAlign: 'center' }}>
                                        Xatolik sodir bo'ldi
                                    </Typography>
                                </Grid2>
                }
            </Grid2>
        </Box>
    );
}