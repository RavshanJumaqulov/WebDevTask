import React from 'react'
import { Paper, Typography, CircularProgress } from '@mui/material'
import { api } from '../lib/api'
import { useQuery } from 'react-query'
import { AlbumInterface } from '../type/interface'
import { useNavigate } from 'react-router-dom'

async function fetchUserAlbums(userId: number) {
    const { data } = await api({
        url: `albums/?userId=${userId}`,
        method: 'get'
    })
    return data
}

export default function UserAlbums({ userId }: { userId: number }) {
    const { data: userAlbum, isLoading: userAlbumLoading, isError: userAlbumError, isSuccess: userAlbumSuccess } = useQuery(['userAlbum', userId], () => fetchUserAlbums(userId))
    const navigate = useNavigate()
    return (
        <div>{userAlbumLoading ?
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
            }} /> : userAlbumError ?
                <Typography sx={{ color: 'error.main', textAlign: 'center' }}>
                    Xatolik sodir bo'ldi
                </Typography> : userAlbumSuccess ? userAlbum.map((el: AlbumInterface, index: number) => {
                    return (
                        <Paper onClick={() => navigate(`/user/${userId}/${el.id}`)} key={el.id} elevation={0} sx={{ display: 'flex', flexDirection: 'row', px: 1, py: 1.5, borderRadius: 3, mb: 1, transition: '0.3s all', background: 'hsla(0,0%,100%,.1)', '&:hover': { background: 'hsla(0,0%,100%,.2)' } }}>
                            <Typography variant='body1' sx={{ fontWeight: 600 }} >{index + 1}. &nbsp;</Typography><Typography variant='body1' >{el.title}</Typography>
                        </Paper>
                    )
                }) : ""

        }</div>
    )
}
