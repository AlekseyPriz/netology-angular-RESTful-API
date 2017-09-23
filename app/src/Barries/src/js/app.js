var APP_ID = '43506E67-2175-5CD0-FF6E-2AAE8BD61400';
var API_KEY = '0D056653-8F17-B9B2-FF1F-F2F3A8AA0F00';

Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

Backendless.Data.of( "TestTable" ).save( { foo:"bar" } )
    .then( function( obj ) {
        console.log( "object saved. objectId " + obj.objectId )
    } )
    .catch( function( error ) {
        console.log( "got error - " + error )
    })
                    