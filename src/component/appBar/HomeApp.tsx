import { Box, Stack, } from "@mui/material";
import React from "react";
import AppBar from "./AppBar";

export default function HomeApp({ children }: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                // maxWidth: '100vw',
                overflowX: 'hidden',
                width: "100%",
                height: "100vh",
            }}
        >
            <AppBar />
            <Stack
                direction={"row"}
                sx={{
                    width: { xs: "100%", sm: "calc(100% - 80px)" },
                    ml: { sm: 7 },
                    px: { xs: 1, sm: 2 },
                    py: { sx: 1, sm: 2 },
                    textAlign: "left",
                    position: 'relative'
                }}
            >
                <Box sx={{
                    width: "100%",
                    height: "100vh",
                    left: 0,
                    backgroundImage:
                        "url(https://remini.ai/images/blurs/section=businesses.webp)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                    position: 'fixed',
                    // background: 'red',
                    zIndex: 0
                }}>

                </Box>
                <Box sx={{ width: '100%', maxWidth: '100%', position: 'relative', zIndex: 1 }}>
                    {children}
                </Box>
            </Stack>
        </Box>
    );
}
