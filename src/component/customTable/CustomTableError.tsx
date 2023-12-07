import { Box, Typography } from '@mui/material'
export default function CustomTableError() {
  return (
    <Box sx={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography sx={{ color: 'error.main' }}>
        Xatolik sodir bo'ldi
      </Typography>
    </Box>
  )
}
