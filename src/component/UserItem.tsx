import React, { useState, useEffect } from "react";
import { Avatar, Box, IconButton, Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate } from "react-router-dom";
import { UsersInterface } from "../type/interface";
import { MailIcon, PhoneIcon } from "../Icons";
const color = [
    "#bd5844",
    "#ff5722",
    "#673ab7",
    "#fde79d",
    "#1f6cfa",
    "#085c25",
    "#4caf50",
    "#e91e63",
];

export default function UserItem({ view, user }: { view: boolean, user: UsersInterface }) {
    const navigate = useNavigate();
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    const [newColor, setNewColor] = useState<string>('')
    useEffect(() => {
        setNewColor(color[Math.round(Math.random() * 6)])
    }, [])
    return (
        <Grid2
            xs={view ? 12 : 6}
            sm={view ? 12 : 6}
            md={view ? width > 1100 ? 6 : 12 : 6}
            lg={view ? width > 1100 ? 6 : 12 : 4}
            sx={{ p: { xs: 0.5, ms: 2 }, position: "relative" }}
        >
            <Paper
                onClick={() => navigate(`/user/${user.id}`)}
                sx={{
                    borderRadius: 4,
                    px: 2,
                    py: 3,
                    position: "relative",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                }}
            >
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: !view ? "column" : "row",
                        }}
                    >
                        {!view && (
                            <Typography
                                sx={{
                                    fontSize: { xs: 13, sm: 14 },
                                    fontWeight: "500",
                                    fontFamily: "Ubuntu, sans-serif",
                                    background: "hsla(0,0%,100%,.1)",
                                    color: "#fff",
                                    backgroundSize: "2px 100%",
                                    borderRadius: 4,
                                    px: 0.8,
                                    position: "absolute",
                                    zIndex: 1,
                                    top: 8,
                                    left: 8,
                                }}
                            >
                                {user.address.street}  {user.address.suite}  {user.address.city}
                            </Typography>
                        )}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: !view ? "center" : "start",
                                position: "relative",
                                py: { xs: 1 },
                            }}
                        >
                            <Avatar
                                sx={{
                                    display: "flex",
                                    background: newColor,
                                    width: { xs: 80 },
                                    height: { xs: 80 },
                                    ml: { xs: !view ? -2 : 0, sm: 0 },
                                }}
                                alt="Travis Howard"
                            // src={props.img}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: !view ? "center" : "flex-start",
                                justifyContent: "start",
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    display: "flex",
                                    flexDirection: {
                                        xs: view ? "column" : "column",
                                        sm: view ? "row" : "row",
                                    },
                                    py: { xs: view ? 1 : 0 },
                                    alignItems: {
                                        xs: view ? "start" : "center",
                                    },
                                    justifyContent: { sm: "center" },
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        color="text.primary"
                                        sx={{
                                            fontSize: {
                                                xs: 15,
                                                sm:
                                                    width < 700
                                                        ? 16
                                                        : width < 750
                                                            ? 17
                                                            : width < 800
                                                                ? 17
                                                                : 17,
                                                md: 17,
                                            },
                                            fontWeight: "500",
                                            fontFamily: "Ubuntu, sans-serif",
                                            mr: { xs: view ? 0.5 : 0, sm: 0.5 },
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            textTransform: "capitalize"
                                        }}
                                    >
                                        {user.name}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",

                                    }}
                                >
                                    <Typography
                                        color="text.primary"
                                        sx={{
                                            fontSize: {
                                                xs: 15,
                                                sm:
                                                    width < 700
                                                        ? 16
                                                        : width < 750
                                                            ? 17
                                                            : width < 800
                                                                ? 17
                                                                : 17,
                                                md: 17,
                                            },
                                            fontWeight: "500",
                                            fontFamily: "Ubuntu, sans-serif",
                                            textTransform: "capitalize",

                                        }}
                                    >
                                        {user.username}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    px: { xs: !view ? 0 : 1 },
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent:
                                        !view ? "center" : "start",
                                    mt: { xs: !view ? 1 : 0, sm: 0 },
                                    // width: { xs: "100%" },
                                    maxWidth: { xs: width < 500 ? "100%" : 160, sm: 220 },
                                    overflow: "hidden",
                                    mx: !view ? "auto" : 0,
                                }}
                            >
                                <Typography
                                    color="text.secondary"
                                    sx={{
                                        fontSize: { xs: !view ? 12 : 14, sm: 14 },
                                        fontWeight: "500",
                                        fontFamily: "Ubuntu, sans-serif",
                                    }}
                                >
                                    Ish joyi:
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 3,
                                            height: 3,
                                            borderRadius: 5,
                                            mx: width < 376 ? "1px" : "5px",
                                        }}
                                    ></Box>
                                </Box>
                                <Typography
                                    color="text.secondary"
                                    sx={{
                                        fontSize: { xs: !view ? 12 : 14, sm: 14 },
                                        fontWeight: "500",
                                        fontFamily: "Ubuntu, sans-serif",
                                    }}
                                >
                                    {user.company.name}
                                </Typography>
                            </Box>
                            {view && (
                                <Box
                                    sx={{
                                        px: { xs: view ? 0 : 1 },
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        mt: view ? 1 : 0,
                                        width: { xs: "100%" },
                                        maxWidth: { xs: 150 },
                                        mx: !view ? "auto" : "0",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 13,
                                            fontWeight: "600",
                                            fontFamily: "Ubuntu, sans-serif",
                                            background: "hsla(0,0%,100%,.1)",
                                            color: "#fff",
                                            backgroundSize: "2px 100%",
                                            borderRadius: 4,
                                            px: 0.8,
                                            display: "inline-flex",
                                        }}
                                    >
                                        {user.address.street}  {user.address.suite}  {user.address.city}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Paper>
            {view && (
                <>
                    <IconButton
                        component="a"
                        href={`tel:+${user?.phone.split('')[0].replaceAll('-', '')}`}
                        target="_blank"
                        sx={{
                            position: "absolute",
                            zIndex: 1,
                            top: 20,
                            right: 20,
                        }}
                    >
                        <PhoneIcon sx={{ color: "green" }} />
                    </IconButton>
                    <IconButton
                        component="a"
                        href={`mailto:${user.email}`}
                        target="_blank"
                        sx={{
                            position: "absolute",
                            zIndex: 1,
                            bottom: 50,
                            right: 20,
                            display: "flex",
                        }}
                    >
                        <MailIcon sx={{ color: "#0088cc" }} />
                    </IconButton>
                </>
            )}
            {!view && (
                <>
                    <IconButton
                        component="a"
                        href={`tel:+${user?.phone.split('')[0].replaceAll('-', '')}`}
                        target="_blank"
                        sx={{ position: "absolute", right: 20, top: 20, zIndex: 1 }}
                        size="small"
                    >
                        <PhoneIcon sx={{ color: "green" }} />
                    </IconButton>
                    <IconButton
                        component="a"
                        href={`mailto:${user.email}`}
                        target="_blank"
                        sx={{ position: "absolute", right: 20, top: 70, zIndex: 1 }}
                        size="small"
                    >
                        <MailIcon sx={{ color: "#0088cc" }} />
                    </IconButton>
                </>
            )}
        </Grid2>
    );
}