import { Helmet } from 'react-helmet-async';
const YT_FAV_ICON = 'https://www.yatra.com/fresco/resources/images/common/favicon.ico'
export default function SEO(props: { title: string, description: string }) {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{props.title}</title>
            <meta name='description' content={props.description} />
            <link rel='icon' type='image/svg+xml' href={YT_FAV_ICON} />
            <meta property='og:title' content={props.title} />
            <meta name="robots" content="NOINDEX,NOFOLLOW" />
        </Helmet>
    )
}