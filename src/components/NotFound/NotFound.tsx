import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import {PROD_BASE_URL,LOGIN_URL} from 'utils/constants';
import PageNotFoundImage from './NotFoundSvg'
import './NotFound.scss'

const NotFound = () => {
    function openLogin() {
        const redirectUrl = window.location.href;
        const loginRequiredUrl = PROD_BASE_URL+LOGIN_URL+`channel=crp&returnUrl=`+redirectUrl;
        window.location.href = loginRequiredUrl;
        return
    }
    return <div className='layer-not-found '>
        <Stack 
            direction={'row'}
            flexWrap={'wrap'}
            className='body background-white height-100'
            alignItems={'center'}
            justifyContent={'space-evenly'}>
            <Grid item xs={12} md={3} className="padding">
                <Stack>
                    <div className='sorry-text'>SORRY!!!</div>
                    <div className='page-not-text'>PAGE NOT FOUND</div>
                    <div className='sub-text-404'><span>We could not find the resource you are looking for.</span> <br />Why not try us from <span><a href='https://www.Yatra.com' className="text-link">Yatra.com</a></span> Home Page again?</div>
                </Stack>
                <Button style={{marginTop:'16px'}} variant="contained" onClick={() => openLogin()}>
                    <span className="fs-20 padding-x">Log In</span>
                </Button>
            </Grid>
            <Grid item xs={12} md={7} className="padding">
                <PageNotFoundImage />
            </Grid>
        </Stack>
    </div>
}

export default NotFound