import React from 'react'
import { Box, Container, Typography } from '@mui/material'
export default function NotFound() {
    return (
        <Box sx={{ width: "100%", mt: 10 }}>
            <Container maxWidth="xl" sx={{ ml: 0, }}>
                <Typography variant='subtitle1' sx={{ textAlign: 'center' }}>
                    404
                </Typography>
                <Typography variant='subtitle2' sx={{ textAlign: 'center' }}>
                    Sahifa mavjud emas
                </Typography>
            </Container>
        </Box>
    )
}
