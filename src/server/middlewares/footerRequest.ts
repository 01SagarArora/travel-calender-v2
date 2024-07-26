import { commonS2SApi } from 'api';
import { FOOTER_URL } from 'utils/constants';
import { getKeyFromCookie, urlFormatter } from 'utils/helper/helpers';

const footerRequest = async (store: any,cookie:any,setFooterValue:any) => {
  let ssoToken = getKeyFromCookie('ssoToken',cookie);
  let userType = getKeyFromCookie('userType',cookie);

  let headersReqParams = {
    'content-type': 'text/plain',
    'cookie': cookie,
    'Access-Control-Allow-Origin': '*'
  }

  const footerUrlWithSsoToken = urlFormatter(FOOTER_URL,[ssoToken,userType]);
  store.dispatch(commonS2SApi.endpoints.getApi.initiate({headersReqParams,url:footerUrlWithSsoToken})).then((res:any)=>{
    setFooterValue('footer',res.data);
  });
 return Promise.all(store.dispatch(commonS2SApi.util.getRunningQueriesThunk()));
};
export { footerRequest };
