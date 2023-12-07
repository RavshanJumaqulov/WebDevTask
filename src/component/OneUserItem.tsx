import { Avatar, Box, Paper, Stack, Tooltip, Typography, Divider } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import OneUserInfo from './OneUserInfo'
import { UsersInterface } from '../type/interface'
import SocialMedia from './SocialMedia'
import UserTodos from './UserTodos'
import UserAlbums from './UserAlbums'

export default function OneUserItem({ user }: { user: UsersInterface }) {

    return (
        <Box>
            <Grid2 container>
                <Grid2 xs={12} md={6} sx={{ px: 1 }}>
                    <Paper elevation={2} sx={{ borderRadius: 4, border: "none" }}>
                        <Stack
                            sx={{
                                py: 3,
                                px: 2,
                                display: "flex",
                                flexDirection: {
                                    xs: "column",
                                    sm: "row",
                                    md: "column",
                                    lg: "row",
                                    overflow: "hidden",
                                },
                                justifyContent: "start",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                sx={{
                                    display: "flex",
                                    background: 'hsla(0,0%,100%,.1)',
                                    width: { xs: 80 },
                                    height: { xs: 80 },
                                }}
                                alt={user.name}
                            />
                            <Box
                                sx={{
                                    pl: { sm: 2 },
                                    mt: { xs: 2, sm: 0, md: 2 },
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: {
                                        xs: "center",
                                        sm: "flex-start",
                                        md: "center",
                                        lg: "flex-start",
                                    },
                                }}
                            >
                                <Tooltip title={user.name} placement="top" arrow>
                                    <Typography
                                        color="text.primary"
                                        sx={{
                                            fontSize: 20,
                                            fontWeight: "600",
                                            fontFamily: "Ubuntu, sans-serif",
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                            textTransform: "capitalize",
                                            pr: 1,
                                        }}
                                    >
                                        {user.name}
                                    </Typography>
                                </Tooltip>
                                <Typography
                                    color="text.secondary"
                                    sx={{
                                        fontSize: {
                                            xs: 15,
                                            sm: 16,
                                            md: 17,
                                        },
                                        fontWeight: "400",
                                        fontFamily: "Ubuntu, sans-serif",
                                        my: 1,
                                        textAlign: { xs: "center", lg: "left" },
                                    }}
                                >
                                    {user.username}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        mt: 1,
                                    }}
                                >
                                </Box>
                            </Box>
                        </Stack>
                    </Paper>
                    <SocialMedia user={user} />
                </Grid2>
                <Grid2 xs={12} md={6} sx={{ px: 1, mt: { xs: 2, md: 0 } }}>
                    <OneUserInfo user={user} />
                </Grid2>
            </Grid2>
            <Grid2 container sx={{ mt: 2 }}>
                <Grid2 xs={12} md={6} sx={{ px: 1, }} >
                    <Box sx={{ background: 'hsla(0,0%,100%,.1)', borderRadius: 4, py: 3, px: 2 }} >
                        <Typography variant="subtitle2">User Albumlari</Typography>
                        <Divider sx={{ mt: 1, mb: 2 }} />
                        <UserAlbums userId={user.id} />
                    </Box>
                </Grid2>
                <Grid2 xs={12} md={6} sx={{ px: 1, my: { xs: 2, md: 0 } }}>
                    <Box sx={{ background: 'hsla(0,0%,100%,.1)', borderRadius: 4, py: 3, px: 2 }} >
                        <Typography variant="subtitle2">User Maqsadlari (todo)</Typography>
                        <Divider sx={{ mt: 1, mb: 2 }} />
                        <UserTodos userId={user.id} />
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    )
}
