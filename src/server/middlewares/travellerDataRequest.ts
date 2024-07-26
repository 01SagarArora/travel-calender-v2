import { commonS2SApi } from "api"
import { GET_TRAVELLER_DATA_FROM_MO } from "utils/constants"

export const travellerDataRequest = async (store: any, cookie: any, body: any) => {
    const headersReqParams = {
        "content-type": "application/json",
        cookie: cookie,
        "Access-Control-Allow-Origin": "*",
    };
    // const params: any = {
    //     ...body,
    // }

    let res = store.dispatch(commonS2SApi.endpoints.getApi.initiate({
        url: GET_TRAVELLER_DATA_FROM_MO,
        headersReqParams,
        params: body
    }));

    return res;
}