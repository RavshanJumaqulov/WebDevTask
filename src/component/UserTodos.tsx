import React from 'react'
import { Box, Paper, Tooltip, Typography, CircularProgress } from '@mui/material'
import { api } from '../lib/api'
import { useQuery } from 'react-query'
import { TodosInterface } from '../type/interface'

async function fetchUserTodos(userId: number) {
    const { data } = await api({
        url: `todos/?userId=${userId}`,
        method: 'get'
    })
    return data
}

export default function UserTodos({ userId }: { userId: number }) {
    const { data: userTodos, isLoading: userTodosLoading, isError: userTodosError, isSuccess: userTodosSuccess } = useQuery(['userTodos', userId], () => fetchUserTodos(userId))

    return (
        <div>{userTodosLoading ?
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
            }} /> : userTodosError ?
                <Typography sx={{ color: 'error.main', textAlign: 'center' }}>
                    Xatolik sodir bo'ldi
                </Typography> : userTodosSuccess ? userTodos.map((el: TodosInterface, index: number) => {
                    return (
                        <Tooltip title={el.completed ? 'Completed' : 'Waiting'} arrow key={el.id}>
                            <Paper
                                key={el.id}
                                elevation={0}
                                sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    px: 1,
                                    py: 1.5,
                                    borderRadius: 3,
                                    mb: 1,
                                    transition: '0.3s all',
                                    background: 'hsla(0,0%,100%,.1)',
                                    '&:hover': {
                                        background: 'hsla(0,0%,100%,.2)'
                                    }
                                }}>
                                <Typography
                                    variant='body1'
                                    sx={{ fontWeight: 600 }}
                                >
                                    {index + 1}. &nbsp;
                                </Typography>
                                <Typography variant='body1' >{el.title}</Typography>
                                <Box sx={{
                                    width: 10,
                                    height: 10,
                                    position: 'absolute',
                                    zIndex: 1,
                                    background: el.completed ? 'green' : '#ff5c00',
                                    borderRadius: 10,
                                    right: 10
                                }} />
                            </Paper>
                        </Tooltip>
                    )
                }) : ""

        }</div>
    )
}
