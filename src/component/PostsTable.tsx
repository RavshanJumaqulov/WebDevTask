import { Box } from '@mui/material'
import React from 'react'
import { api } from '../lib/api'
import { useQuery } from 'react-query'
import { HeadsInterface } from '../type/interface'
import CustomTable from './customTable/CustomTable'

async function fetchPosts(url: string, limit: string, page: number, user: string) {
    const { data } = await api({
        url: user == '' ? `/${url}?_limit=${limit}&_page=${page}` : `/posts?_limit=${limit}&_page=${page}&userId=${user}`,
        method: 'get'
    })
    return data
}



export default function PostsTable({ length, page, user, url, heads }: { length: string, page: number, user: string, url: string, heads: HeadsInterface[] }) {
    const { data, isLoading, isError, isSuccess } = useQuery([url, length, page, user], () => fetchPosts(url, length, page, user))

    return (
        <Box sx={{ width: '100%', }}>
            <CustomTable
                heads={heads}
                data={data}
                isLoading={isLoading}
                isError={isError}
                isSuccess={isSuccess}
                url={url}
            />
        </Box>
    )
}
