import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import CardComponent from '../../../components/CardComponent'

const Crads = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <CardComponent>
            card1
          </CardComponent>
        </Grid>
        <Grid xs={12} md={6}>
          card2
        </Grid>
        <Grid xs={12} md={6}>
          card3
        </Grid>
        <Grid xs={12} md={6}>
          card4
        </Grid>
      </Grid>
    </Box>
  )
}

export default Crads