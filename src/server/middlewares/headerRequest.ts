import { commonS2SApi } from 'api';
import { HEADER_URL } from 'utils/constants';
import { getKeyFromCookie, urlFormatter } from 'utils/helper/helpers';

const headerRequest = async (store: any,cookie:any,setHeaderValue:any) => {
  let ssoToken = getKeyFromCookie('ssoToken',cookie);
  let userType = getKeyFromCookie('userType',cookie);
  let headersReqParams = {
    'content-type': 'text/plain',
    'cookie': cookie,
    'Access-Control-Allow-Origin': '*'
  }

  const headerUrlWithSsoToken = urlFormatter(HEADER_URL,[ssoToken,userType]);
  store.dispatch(commonS2SApi.endpoints.getApi.initiate({headersReqParams,url:headerUrlWithSsoToken})).then((res:any)=>{
    setHeaderValue('header',res.data);
  });
 return Promise.all(store.dispatch(commonS2SApi.util.getRunningQueriesThunk()));
};
export { headerRequest };
