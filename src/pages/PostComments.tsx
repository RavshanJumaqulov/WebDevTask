import React, { useEffect } from 'react'
import { Box, Container, Typography, FormControl, Button, Select, MenuItem, SelectChangeEvent, Pagination, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useQuery } from 'react-query';
import { api } from '../lib/api';
import { HeadsInterface } from '../type/interface';
import { useParams } from 'react-router-dom';
import FilterPostsTable from '../component/FilterPostsTable';

const postsLength = 10
const heads: HeadsInterface[] = [{ name: "ID", key: 'id' }, { name: "Name", key: 'name' }, { name: "Email", key: 'email' }, { name: "Body", key: 'body' }]


async function fetchUsers(id: any) {
    const { data } = await api({
        url: `/posts/${id}`,
        method: 'get'
    })
    return data
}

export default function PostComments() {
    const { id } = useParams()

    const { data: post, isLoading: postLoading, isError: postError, isSuccess: postSuccess } = useQuery(['commentsId',], () => fetchUsers(id))
    console.log(post);

    const [length, setLength] = React.useState<string>('10');
    const [page, setPage] = React.useState<number>(2)
    const [user, setUser] = React.useState<string>('')

    const handleLength = (event: SelectChangeEvent) => {
        setLength(event.target.value as string);
    };

    const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }

    const handleUser = (event: SelectChangeEvent) => {
        console.log(event);

        setUser(event.target.value as string);
    };

    useEffect(() => { setPage(1) }, [length, user])


    return (
        <Box sx={{ width: "100%", mt: 10 }}>
            <Container maxWidth="xl" sx={{ ml: 0, }}>
                {
                    postLoading ?
                        <CircularProgress
                            sx={{
                                width: '14px !important',
                                height: '14px !important',
                                display: 'block',
                                mx: 'auto',
                                '& svg': {
                                    fontSize: 14,
                                    width: 14,
                                    height: 14
                                }
                            }} /> :
                        postError ?
                            <Typography sx={{ color: 'error.main', textAlign: 'center' }}>Xatolik sodir bo'ldi</Typography> :
                            postSuccess ?
                                <>
                                    <Typography variant='body1' color='' sx={{ textAlign: 'left' }}>
                                        <b>Mavzu:</b>  {post.title}
                                    </Typography>
                                    <Typography variant='body2' color='' sx={{ textAlign: 'left' }}>
                                        <b>Kontent:</b>   {post.body}
                                    </Typography>
                                </>

                                : <Typography sx={{ color: 'error.main', textAlign: 'center' }}>
                                    Xatolik sodir bo'ldi
                                </Typography>
                }


                <Typography variant='body2' color='text.primary' sx={{ mr: 1 }}>
                    Yuqoridagi Postga yozilgan commentlar
                </Typography>
                <Box sx={{ width: '100%', mb: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' }, justifyContent: 'space-between' }}>
                        <Box sx={{
                            px: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: { xs: 'space-between', sm: 'start' },
                            "& .MuiInputBase-root": {
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
                            <Typography variant='body2' color='text.primary' sx={{ mr: 1 }}>
                                Postni ko'rish
                            </Typography>
                            <FormControl sx={{ width: 100 }}>
                                <Select value={length} onChange={handleLength}>
                                    <MenuItem value={'10'} sx={{ fontSize: 16 }}>
                                        10
                                    </MenuItem>
                                    <MenuItem value={'15'} sx={{ fontSize: 16 }}>
                                        15
                                    </MenuItem>
                                    <MenuItem value={'20'} sx={{ fontSize: 16 }}>
                                        20
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ mb: { xs: 2, sm: 0 }, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: { xs: 'end' } }}>
                            <Button sx={{ background: 'hsla(0,0%,100%,.1)', borderRadius: 3 }} startIcon={<AddIcon />}>
                                Qo'shish
                            </Button>
                            <Button sx={{ background: 'hsla(0,0%,100%,.1)', borderRadius: 3, ml: 1 }} startIcon={<ArrowDownwardIcon />}>
                                Yuklab olish
                            </Button>
                        </Box>
                    </Box>
                </Box>
                {/* <Filter
                    handleUser={handleUser}
                    user={user}
                    users={users}
                    usersLoading={usersLoading}
                    usersError={usersError}
                    usersSuccess={usersSuccess} /> */}
                <FilterPostsTable length={length} page={page} user={user} url='comments' heads={heads} id={id} filterText={'postId'} />
                <Box sx={{ mt: 2, mb: 3, display: 'flex', flexDirection: 'row', justifyContent: 'end' }} >
                    <Pagination
                        count={user == '' ? Math.ceil(postsLength / parseInt(length)) : 1}
                        variant="outlined"
                        siblingCount={0}
                        shape="rounded"
                        page={page}
                        onChange={handlePage}
                        sx={{ borderRadius: 4 }}
                    />
                </Box>
            </Container>
        </Box>
    )
}
