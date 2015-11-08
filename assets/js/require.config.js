
require.config({
        baseUrl: '/',
        paths: {

          zepto:    'vendors/zepto/zepto.min',
          text:     'vendors/requirejs/require.text'


        },
        map: { '*': { underscore: 'lodash', jquery : 'zepto' } },
        shim: {
          zepto : {
            exports : '$'
          }

        },
      });
