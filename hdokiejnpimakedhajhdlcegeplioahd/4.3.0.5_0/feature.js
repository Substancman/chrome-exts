Feature=function(){return{isEnabled:function(e,n,t,i){var r="lmiapi/feature-switch/is-enabled/"+e+"/"+n;LPServer.lmiapi.jsonRequest({url:r,type:"GET",data:{},success:function(e){t(e.enabled)},error:function(e){"function"==typeof i&&i(e)}})}}}();