;/*FB_PKG_DELIM*/

__d("PolarisFeedEmptySULSearchUsersQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8680889781977202"}),null);
__d("PolarisFeedEmptySULSearchUsersQuery$Parameters",["PolarisFeedEmptySULSearchUsersQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PolarisFeedEmptySULSearchUsersQuery_instagramRelayOperation"),metadata:{is_distillery:!0},name:"PolarisFeedEmptySULSearchUsersQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisFeedTimelineRootV2Query$Parameters",["PolarisFeedShareMenu.relayprovider","PolarisFeedTimelineRootV2Query_instagramRelayOperation","PolarisIsLoggedIn.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PolarisFeedTimelineRootV2Query_instagramRelayOperation"),metadata:{is_distillery:!0},name:"PolarisFeedTimelineRootV2Query",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__PolarisIsLoggedInrelayprovider:b("PolarisIsLoggedIn.relayprovider"),__relay_internal__pv__PolarisFeedShareMenurelayprovider:b("PolarisFeedShareMenu.relayprovider")}}};e.exports=a}),null);
__d("PolarisStoriesV3TrayContainerQuery$Parameters",["PolarisStoriesV3TrayContainerQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PolarisStoriesV3TrayContainerQuery_instagramRelayOperation"),metadata:{is_distillery:!0},name:"PolarisStoriesV3TrayContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisFeedRoot.entrypoint",["JSResourceForInteraction","PolarisFeedEmptySULSearchUsersQuery$Parameters","PolarisFeedTimelineRootV2Query$Parameters","PolarisFeedVariants","PolarisStoriesV3TrayContainerQuery$Parameters","PolarisSuggestedUserListQuery$Parameters","getPolarisFeedInitialPageSize.entrypointutils","gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeParams;a=a.routeProps;var e=c("PolarisFeedVariants").cast(b.variant),f=e!=null&&e!=="home"?{pagination_source:String(e)}:{};a={polarisFeedTimelineQuery:{options:{},parameters:c("PolarisFeedTimelineRootV2Query$Parameters"),variables:{data:babelHelpers["extends"]({},f,{device_id:a.device_id,is_async_ads_double_request:"0",is_async_ads_in_headload_enabled:"0",is_async_ads_rti:"0",rti_delivery_backend:"0"}),first:d("getPolarisFeedInitialPageSize.entrypointutils").getPolarisFeedInitialPageSize(),pass_prefetch_pagination_gk:c("gkx")("4142"),variant:(f=b.variant)!=null?f:String("home")}}};c("gkx")("25302")&&(a=babelHelpers["extends"]({},a,{polarisSuggestedUserListQuery:{options:{},parameters:c("PolarisSuggestedUserListQuery$Parameters"),variables:{data:{max_id:"",max_number_to_display:5,module:"discover_people",paginate:!0}}}}));c("gkx")("7201")&&(a=babelHelpers["extends"]({},a,{polarisPolarisFeedEmptySULSearchQueryRef:{parameters:c("PolarisFeedEmptySULSearchUsersQuery$Parameters"),variables:{query:""}}}));b=e==null||e==="home";b=b||e==="following"&&c("gkx")("1551")===!0;b=b&&c("qex")._("1400")===!0;b&&(a=babelHelpers["extends"]({},a,{storiesTrayQuery:{options:{},parameters:c("PolarisStoriesV3TrayContainerQuery$Parameters"),variables:{data:{is_following_feed:e==="following"}}}}));return{queries:a}},root:c("JSResourceForInteraction")("PolarisFeedRoot.react").__setRef("PolarisFeedRoot.entrypoint")};g["default"]=a}),98);