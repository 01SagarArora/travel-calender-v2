import Container from '@mui/material/Container';
import SEO from '../../seo/Seo';
import { PAGE } from '../../seo/seo.constant';

const PageNotFound = () =>{
  return (
    <Container>
      <SEO title={PAGE.errorPage.title} description={PAGE.errorPage.title} />
      <div>404 Page Not Found</div>
    </Container>
  )
}

export  {PageNotFound};