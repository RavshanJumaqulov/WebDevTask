import { TableBody, TableCell, TableRow, Box } from '@mui/material'
import React from 'react'
import { HeadsInterface } from '../../type/interface'
import { useNavigate } from 'react-router-dom'

export default function CustomTableRows({ data, heads, url }: { data: any, heads: HeadsInterface[], url: string }) {
  const navigate = useNavigate()
  return (
    <TableBody >
      {
        data.map((el: any) => {
          return (          
            <TableRow hover tabIndex={-1}
            onClick={() => navigate(`/${url}/${el.id}`)}
              key={el.id}
              sx={{
                mt: 2,
                '&:last-child td, &:last-child th':
                  { border: 0 },
                transition: '0.3s all',
                '&:hover': {
                  '& th': {
                    color: 'text.primary',
                    transition: '0.3s all',
                  }
                }
              }}
            >
              {heads.map((elk: HeadsInterface) => {
                return (
                  <TableCell key={elk.key} component="th" scope="row" sx={{ color: 'text.secondary' }}>
                    {elk.name == 'Image' ?
                      <Box component={'img'} src={el[elk.key]} sx={{height: 60}} />
                      :
                      el[elk.key]}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })
      }
    </TableBody>
  )
}
