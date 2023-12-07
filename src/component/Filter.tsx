import { Box, CircularProgress, FormControl, IconButton, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import React from 'react'
import Search from './Search'
import { FilterSetting } from '../Icons'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import useVisiblity from '../hooks/useVisiblity'
import { UsersInterface } from '../type/interface'

export default function Filter({
    handleUser,
    user,
    users,
    usersLoading,
    usersError,
    usersSuccess, }: {
        handleUser: any, user: string, users: undefined | UsersInterface[],
        usersLoading: boolean,
        usersError: boolean,
        usersSuccess: boolean
    }) {
    const visible = useVisiblity()

    return (
        <Box sx={{
            maxWidth: '100%', my: 2, pl: 1, "& .MuiInputBase-root": {
                borderRadius: 3,
                fontSize: 16,
                fontWeight: 400,
                "& fieldset": {
                    transition: '0.3s all',
                    border: "1px solid hsla(0,0%,100%,.1)",
                },
                "&:hover": {
                    "& fieldset": {
                        borderColor: "hsla(0,0%,100%,.6) !important",
                    },
                },
                "& .MuiSelect-select": {
                    py: 1,
                    px: 1,
                    textAlign: "left",
                    fontFamily: 'Ubuntu, sans-serif'
                },

                "& .MuiSelect-root": {
                    "&:hover": {
                        "& fieldset": {
                            borderColor: "hsla(0,0%,100%,.6) !important",
                        },
                    },
                },
                "&.Mui-focused": {
                    color: "#fff",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: 2,
                        borderColor: "hsla(0,0%,100%,.6) !important",
                    },
                },
            },
        }}>
            <Box sx={{ mb: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='subtitle2'>
                    Filter
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <Search />
                    <IconButton onClick={() => visible.toggle()} sx={{ background: 'hsla(0,0%,100%,.1)', ml: 1 }}>
                        <FilterSetting sx={{ color: '#fff', fill: '#fff' }} />
                    </IconButton>
                </Box>
            </Box>
            <Grid2 container spacing={1} sx={{ overflow: 'hidden', height: visible.visiblity ? 'auto' : 0, transition: '0.3s all', WebkitTransition: '0.3s all' }}>
                <Grid2 xs={6} sm={4} md={3}>
                    <Typography variant='body2' color='text.secondary' sx={{ mr: 1, textAlign: 'left' }}>
                        Userlarni filterlash
                    </Typography>
                    <FormControl fullWidth>
                        <Select value={user} onChange={(event) => handleUser(event)}>
                            {
                                usersLoading ? <MenuItem disabled value={''} sx={{ fontSize: 16 }}>
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
                                </MenuItem> : usersError ? <MenuItem disabled value={''} sx={{ fontSize: 16 }}>
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
                                </MenuItem> : usersSuccess ?
                                    users?.map((el: UsersInterface) => {
                                        return (
                                            <MenuItem key={el?.id} value={`${el?.id}`} sx={{ fontSize: 16 }}>
                                                {el?.name}
                                            </MenuItem>
                                        )
                                    })
                                    : <MenuItem disabled value={''} sx={{ fontSize: 16 }}>
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
                                    </MenuItem>
                            }
                        </Select>
                    </FormControl>
                </Grid2>
            </Grid2>
        </Box>
    )
}
