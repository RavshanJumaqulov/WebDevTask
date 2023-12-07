import { Box, Container } from '@mui/material'
import React from 'react'
import Users from '../component/Users'

export default function User() {
    return (
        <Box sx={{ width: "100%", mt: 10 }}>
            <Container maxWidth="xl" sx={{ ml: 0, }}>
                <Users />
            </Container>
        </Box>
    )
}
