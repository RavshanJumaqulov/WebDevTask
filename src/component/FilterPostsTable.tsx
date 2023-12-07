import { Box } from '@mui/material'
import React from 'react'
import CustomTable from './customTable/CustomTable'
import { api } from '../lib/api'
import { useQuery } from 'react-query'
import { HeadsInterface } from '../type/interface'

async function fetchPosts(url: string, limit: string, page: number, user: string, id: any, filterText: string) {
    const { data } = await api({
        url: user == '' ? `/${url}?${filterText}=${id}&_limit=${limit}&_page=${page}` : `/posts?_limit=${limit}&_page=${page}&userId=${user}`,
        method: 'get'
    })
    return data
}



export default function FilterPostsTable({ length, page, user, url, heads, id, filterText }: { length: string, page: number, user: string, url: string, heads: HeadsInterface[], id: any, filterText: string }) {
    const { data, isLoading, isError, isSuccess } = useQuery(['posts', length, page, user], () => fetchPosts(url, length, page, user, id, filterText))

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
