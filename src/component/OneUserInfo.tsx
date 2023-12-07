import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { UsersInterface } from "../type/interface";
export default function OneUserInfo({ user }: { user: UsersInterface }) {
    return (
        <Paper elevation={2} sx={{ borderRadius: 4, py: 3, px: 2, border: 'none' }}>
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Typography variant="subtitle2">
                    User ma'lumotlari
                </Typography>
            </Stack>
            <Divider sx={{ mt: 1, mb: 2 }} />
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "flex-start",
                    "& .MuiTypography-root": {
                        fontSize: 16,
                        fontFamily: "Ubuntu, sans-serif",
                    },
                    "& .MuiBox-root": {
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        mr: 1,
                        my: 0.5,
                        "& .MuiTypography-root": {
                            color: "text.secondary",
                            fontWeight: "400",
                            minWidth: 150,
                        },
                    },
                    "& .MuiStack-root": {
                        width: "100%",
                        pl: 1,
                        "& .MuiTypography-root": {
                            color: "text.primary",
                            fontWeight: "500",
                            display: 'inline-flex !important'
                        },
                    },
                }}
            >
                <Box>
                    <Typography>Ismi:</Typography>
                    <Stack>
                        <Typography>
                            {user.name}
                        </Typography>
                    </Stack>
                </Box>
                <Box>
                    <Typography>Username:</Typography>
                    <Stack>
                        <Typography>
                            {user.username}
                        </Typography>
                    </Stack>
                </Box>
                <Box>
                    <Typography>Emaili:</Typography>
                    <Stack>
                        <Typography>
                            {user.email}
                        </Typography>
                    </Stack>
                </Box>
                <Box>
                    <Typography>Telefon raqami:</Typography>
                    <Stack>
                        <Typography>
                            {user.phone}
                        </Typography>
                    </Stack>
                </Box>
                <Box>
                    <Typography>Web sahifasi:</Typography>
                    <Stack>
                        <Typography>
                            {user.website}
                        </Typography>
                    </Stack>
                </Box>
                <Box>
                    <Typography>Manzili (ko'chasi):</Typography>
                    <Stack>
                        {user.address.street}
                    </Stack>
                </Box>
                <Box>
                    <Typography>Manzili (uy raqami):</Typography>
                    <Stack>
                        {user.address.suite}
                    </Stack>
                </Box>
                <Box>
                    <Typography>Manzili (shahri):</Typography>
                    <Stack>
                        {user.address.city}
                    </Stack>
                </Box>
                <Box>
                    <Typography>Ish joyi nomi:</Typography>
                    <Stack>
                        {user.company.name}
                    </Stack>
                </Box>
            </Stack>
        </Paper>
    );
}