import React from 'react'
import { api } from '../lib/api'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Box, CircularProgress, Container, Typography } from '@mui/material'
import OneUserItem from '../component/OneUserItem'

async function fetchUser(userId: any) {
    const { data } = await api({
        url: `/users/${userId}/`,
        method: 'get'
    })
    return data
}

export default function OneUser() {
    const { userId } = useParams<{ userId: string }>()
    const { data: user, isLoading: userLoading, isError: userError, isSuccess: userSuccess } = useQuery(['userl'], () => fetchUser(userId))
    return <>
        {
            userLoading ? (
                <Box sx={{ width: '100%', mt: 10 }}>
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
                </Box>
            ) : userError ? (<Box sx={{ width: '100%', mt: 10 }}>
                <Typography sx={{ color: 'error.main', textAlign: 'center' }}>
                    Xatolik sodir bo'ldi
                </Typography>
            </Box>) : userSuccess ? (
                <Box sx={{ width: "100%", mt: 10 }}>
                    <Container maxWidth="xl" sx={{ ml: 0, }}>
                        <OneUserItem user={user} />
                    </Container>
                </Box>
            ) : ""
        }
    </>
}
