import { buildCreateApi, coreModule, reactHooksModule, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isServer } from 'utils';
import { BASE_URL, TIMEOUT } from "../../utils/constants";
let createApiFunction = createApi;

/*
For data prefetching during SSR we need to use a modified createApi function.
You can remove this modification if you do not need this api to be used on the server.
*/
if (isServer) {
  createApiFunction = buildCreateApi(
    coreModule(),
    // eslint-disable-next-line camelcase
    reactHooksModule({ unstable__sideEffectsInRender: true }),
  );
}

//GET Api S2S
export const commonS2SApi = createApiFunction({
  reducerPath: 'commonS2SApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getApi: builder.query<any, any>({
      query: ({ headersReqParams, url, params }) => {
        return {
          url,
          headers: headersReqParams,
          params: params,
          responseHandler: (response: { text: () => any }) => response.text()
        }
      },
    }),
    postApi: builder.query<any, any>({
      query: ({ headersReqParams, url, params, timeout }) => {
        return {
          url,
          method: 'POST',
          headers: headersReqParams,
          'body': params,
          timeout: timeout || TIMEOUT,
          responseHandler: (response: { text: () => any }) => response.text()
        }
      },
    }),
    postApiWithTenantId: builder.query<any, any>({
      query: ({ headersReqParams, url, params }) => {
        return {
          url,
          method: 'POST',
          headers: headersReqParams,
          'body': params,
          responseHandler: (response: { text: () => any }) => response.text()
        }
      },
    })
  })
});

export const commonApi = createApiFunction({
  reducerPath: 'commonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: builder => ({
    getApi: builder.query<any, any>({
      query: ({ headersReqParams, url, params, timeout, signal }) => {
        return {
          url,
          headers: headersReqParams,
          params: params,
          timeout: timeout || TIMEOUT,
          signal: signal
        }
      },
    }),
    postApi: builder.query<any, any>({
      query: ({ headersReqParams, url, data, forcerefetch = false }) => {
        return {
          url,
          forcerefetch: forcerefetch ? true : false,
          method: 'POST',
          headers: headersReqParams,
          'body': data,
          timeout: TIMEOUT
        }
      },
    }),
    postApiNoBody: builder.query<any, any>({
      query: ({ headersReqParams, url, data }) => {
        return {
          url,
          method: 'POST',
          headers: headersReqParams,
          params: data,
          timeout: TIMEOUT
        }
      },
    }),
    postApiFormData: builder.mutation<any, any>({
      query: ({ url, body, headersReq }) => {
        return {
          url,
          method: "POST",
          headers: headersReq,
          body,
        };
      },
    }),
  })
})
