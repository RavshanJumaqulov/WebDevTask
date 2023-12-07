import React from 'react'
import {Box, CircularProgress } from '@mui/material'
export default function CustomTableLoading() {
  return (
    <Box sx={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress sx={{ width: 5, height: 5, fontSize: 10 }} />
    </Box>
  )
}
