import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import ProfileSection from './components/ProfileSection'
import Categories from './components/Categories'
import "./css/profile.css"

const Profile = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} >
          <ProfileSection />
        </Grid>
        <Grid xs={12} >
          <Categories />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Profile