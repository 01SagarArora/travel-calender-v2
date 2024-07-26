import { HelmetServerState } from 'react-helmet-async';
import serialize from 'serialize-javascript';
import { RootState } from 'store/store';

type TTemplate = {
  header: any,
  footer: string,
}

export const getHtmlTemplate = (props: {
  preloadedState: Partial<RootState>,
  helmetData: HelmetServerState,
  scriptTags: string,
  styleTags: string,
  nonce: string,
  frescoData: any
},
): TTemplate => ({
  header: `
    <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            <meta property="csp-nonce" content="${props.nonce}"/>
            <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
            <script>
            $(function() {
              $.fn.size = function() {
                  return this.length;
              }
          });
            </script>
            ${props.styleTags}
            ${props.frescoData.header}
        </head>
        <body>
          <noscript>
            <b>Enable JavaScript to run this app.</b>
          </noscript>
          <div id="root">`,
  footer: `</div>
          <script nonce="${props.nonce}">window.__PRELOADED_STATE__ = ${serialize(props.preloadedState)}</script>
          ${props.scriptTags}
        </body>
        ${props.frescoData.footer}
      </html>
  ` ,
});
