import { Box, Button, Container, Grid, Link } from '@mui/material'
import "./footer.scss";
import React from 'react'

export default function Footer() {
  return <footer>
    <Box 
    px={{xs: 3, sm: 10}} 
    py={{xs: 5, sm:10}} 
    fontSize="13px" fontStyle="normal" bgcolor="#141414" color="#808080">
        <Container maxWidth="lg" >
            <Grid container spacing={10} >
                <Grid item xs={12} sm={3} >
                <Box sx={{fontWeight: 400, lineHeight: 2.5}}>
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>Audio and Subtitles</Link>
                </Box>
                <Box sx={{fontWeight: 400, lineHeight: 2.5}}>
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>Media Center</Link>
                </Box>
                <Box sx={{fontWeight: 400, lineHeight: 2.5}}>
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>Security</Link>
                </Box>
                <Box sx={{fontWeight: 400, lineHeight: 3}}>
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>Contact Us</Link>
                </Box>
                <Box sx={{fontWeight: 400, lineHeight: 3}}>
                    <Button variant="outlined" color="warning" size="small">
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>
                        Service Code</Link>
                    </Button>
                </Box>
                <Box sx={{fontWeight: 400, lineHeight: 3}}>
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>&copy; 2022 Movies, All Right Reserved</Link>
                </Box>
            </Grid>
            <Grid item xs={12} sm={3} >
                <Box sx={{fontWeight: 400, lineHeight: 2.5}}>
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>Audio Description</Link>
                </Box>
                <Box sx={{fontWeight: 400, lineHeight: 2.5}}>
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>Investor Relations</Link>
                </Box>
                <Box sx={{fontWeight: 400, lineHeight: 2.5}}>
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>Legal Provisions</Link>
                </Box>
            </Grid>
            <Grid item xs={12} sm={3} >
                <Box sx={{fontWeight: 400, lineHeight: 2.5}}>
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>Help Center</Link>
                </Box>
                <Box sx={{fontWeight: 400, lineHeight: 2.5}}>
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>Jobs</Link>
                </Box>
                <Box sx={{fontWeight: 400, lineHeight: 2.5}}>
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>Cookie Preferences</Link>
                </Box>
            </Grid>
            <Grid item xs={12} sm={3} >
                <Box sx={{fontWeight: 400, lineHeight: 2.5}}>
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>Gift Cards</Link>
                </Box>
                <Box sx={{fontWeight: 400, lineHeight: 2.5}}>
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>Terms of Use</Link>
                </Box>
                <Box sx={{fontWeight: 400, lineHeight: 2.5}}>
                    <Link href="/" color='inherit' style={{ textDecoration: 'none'}}>Corporate Information</Link>
                </Box>
            </Grid>
            </Grid>
        </Container>
    </Box>
  </footer>
}
