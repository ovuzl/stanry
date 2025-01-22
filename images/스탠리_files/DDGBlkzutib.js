;/*FB_PKG_DELIM*/

__d("PolarisCommentLikeButton_comment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisCommentLikeButton_comment",selections:[{alias:null,args:null,kind:"ScalarField",name:"has_liked_comment",storageKey:null},{args:null,kind:"FragmentSpread",name:"usePolarisCommentLike_comment"},{args:null,kind:"FragmentSpread",name:"usePolarisCommentUnlike_comment"}],type:"XDTCommentDict",abstractKey:null};e.exports=a}),null);
__d("polarisGetXDTCommentDict",["igMapTypenameToRelayID"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){b=c("igMapTypenameToRelayID")("XDTCommentDict",null,b);return a.get(b)}g["default"]=a}),98);
__d("usePolarisCommentLikeMutation_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8589589054389732"}),null);
__d("usePolarisCommentLikeMutation.graphql",["usePolarisCommentLikeMutation_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"comment_id"},{defaultValue:null,kind:"LocalArgument",name:"data"}],c=[{alias:null,args:[{kind:"Variable",name:"comment_id",variableName:"comment_id"},{kind:"Variable",name:"data",variableName:"data"}],concreteType:"XDTEmptyRecord",kind:"LinkedField",name:"xdt_api__v1__media__comment_id__comment_like",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"usePolarisCommentLikeMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"usePolarisCommentLikeMutation",selections:c},params:{id:b("usePolarisCommentLikeMutation_instagramRelayOperation"),metadata:{is_distillery:!0},name:"usePolarisCommentLikeMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("usePolarisCommentLike_comment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisCommentLike_comment",selections:[{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null}],type:"XDTCommentDict",abstractKey:null};e.exports=a}),null);
__d("usePolarisCommentLike",["CometRelay","FBLogger","QPLUserFlow","polarisGetXDTCommentDict","qpl","react","usePolarisAnalyticsContext","usePolarisCommentLikeMutation.graphql","usePolarisCommentLike_comment.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=(j||d("react")).useCallback,l=h!==void 0?h:h=b("usePolarisCommentLikeMutation.graphql");function a(a){var e=c("usePolarisAnalyticsContext")(),f=d("CometRelay").useFragment(i!==void 0?i:i=b("usePolarisCommentLike_comment.graphql"),a);a=d("CometRelay").useMutation(l);var g=a[0];return k(function(){c("QPLUserFlow").start(c("qpl")._(379199145,"1297"),{annotations:{string:{source:e}}});if(f.pk==null)return;var a=function(a){if(f.pk==null)return;a=c("polarisGetXDTCommentDict")(a,f.pk);a==null?void 0:a.setValue(!0,"has_liked_comment");var b=a==null?void 0:a.getValue("comment_like_count");b!=null&&(a==null?void 0:a.setValue(Number(b)+1,"comment_like_count"))};g({onCompleted:function(){c("QPLUserFlow").endSuccess(c("qpl")._(379199145,"1297"))},onError:function(a){c("FBLogger")("ig_web").mustfix("There was an error with usePolarisCommentLike",a.toString()),c("QPLUserFlow").endFailure(c("qpl")._(379199145,"1297"),"mutation_errored")},optimisticUpdater:a,updater:a,variables:{comment_id:f.pk,data:{}}})},[f,g])}g["default"]=a}),98);
__d("usePolarisCommentUnlikeMutation_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7905223609529933"}),null);
__d("usePolarisCommentUnlikeMutation.graphql",["usePolarisCommentUnlikeMutation_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"comment_id"}],c=[{alias:null,args:[{kind:"Variable",name:"comment_id",variableName:"comment_id"}],concreteType:"XDTEmptyRecord",kind:"LinkedField",name:"xdt_api__v1__media__comment_id__comment_unlike",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"usePolarisCommentUnlikeMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"usePolarisCommentUnlikeMutation",selections:c},params:{id:b("usePolarisCommentUnlikeMutation_instagramRelayOperation"),metadata:{is_distillery:!0},name:"usePolarisCommentUnlikeMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("usePolarisCommentUnlike_comment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisCommentUnlike_comment",selections:[{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null}],type:"XDTCommentDict",abstractKey:null};e.exports=a}),null);
__d("usePolarisCommentUnlike",["CometRelay","FBLogger","QPLUserFlow","igMapTypenameToRelayID","qpl","react","usePolarisAnalyticsContext","usePolarisCommentUnlikeMutation.graphql","usePolarisCommentUnlike_comment.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=(j||d("react")).useCallback,l=h!==void 0?h:h=b("usePolarisCommentUnlikeMutation.graphql");function a(a){var e=c("usePolarisAnalyticsContext")(),f=d("CometRelay").useFragment(i!==void 0?i:i=b("usePolarisCommentUnlike_comment.graphql"),a);a=d("CometRelay").useMutation(l);var g=a[0];return k(function(){c("QPLUserFlow").start(c("qpl")._(379197191,"1298"),{annotations:{string:{source:e}}});if(f.pk==null)return;var a=function(a){var b=c("igMapTypenameToRelayID")("XDTCommentDict",null,f.pk);a=a.get(b);a==null?void 0:a.setValue(!1,"has_liked_comment");b=a==null?void 0:a.getValue("comment_like_count");b!=null&&(a==null?void 0:a.setValue(Number(b)-1,"comment_like_count"))};g({onCompleted:function(){c("QPLUserFlow").endSuccess(c("qpl")._(379197191,"1298"))},onError:function(a){c("FBLogger")("ig_web").mustfix("There was an error with usePolarisCommentUnlike",a.toString()),c("QPLUserFlow").endFailure(c("qpl")._(379197191,"1298"),"mutation_errored")},optimisticUpdater:a,updater:a,variables:{comment_id:f.pk}})},[f,g])}g["default"]=a}),98);
__d("PolarisCommentLikeButton.next.react",["BaseButton.react","CometRelay","IGDSBox.react","IGDSHeartFilledIcon.react","IGDSHeartPanoOutlineIcon.react","IGDSIconButton.react","IGDSText.react","PolarisBigNumber.react","PolarisCommentLikeButton_comment.graphql","PolarisInteractionsStrings","react","react-compiler-runtime","stylex","usePolarisCommentLike","usePolarisCommentUnlike"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||d("react");function l(a){var b=d("react-compiler-runtime").c(26),e=a.color,f=a.handleClick,g=a.isLiked,h=a.likeChangeCount,i=a.likeCount,j=a.onLikeCountClick,l=a.padding,m=a.shadow;a=a.size;e=e===void 0?"ig-primary-icon":e;m=m===void 0?!1:m;var n;b[0]!==j?(n=function(){j!=null&&j()},b[0]=j,b[1]=n):n=b[1];n=n;var o;b[2]!==g||b[3]!==m||b[4]!==a?(o=g?null:k.jsx(c("IGDSHeartPanoOutlineIcon.react"),{alt:d("PolarisInteractionsStrings").LIKE_TEXT,color:"ig-secondary-icon",shadow:m,size:a}),b[2]=g,b[3]=m,b[4]=a,b[5]=o):o=b[5];var p;b[6]===Symbol["for"]("react.memo_cache_sentinel")?(p="x1ykxiw6 x4hg4is x3oybdh",b[6]=p):p=b[6];var q;b[7]!==e||b[8]!==g||b[9]!==m||b[10]!==a?(q=g?k.jsx(c("IGDSHeartFilledIcon.react"),{alt:d("PolarisInteractionsStrings").UNLIKE_TEXT,color:"ig-badge",shadow:m,size:a}):k.jsx(c("IGDSHeartPanoOutlineIcon.react"),{alt:d("PolarisInteractionsStrings").LIKE_TEXT,color:e,shadow:m,size:a}),b[7]=e,b[8]=g,b[9]=m,b[10]=a,b[11]=q):q=b[11];b[12]!==h||b[13]!==q?(e=k.jsx("span",{className:p,children:q},h),b[12]=h,b[13]=q,b[14]=e):e=b[14];b[15]!==f||b[16]!==l||b[17]!==o||b[18]!==e?(g=k.jsx(c("IGDSIconButton.react"),{hover:o,onClick:f,padding:l,children:e}),b[15]=f,b[16]=l,b[17]=o,b[18]=e,b[19]=g):g=b[19];b[20]!==n||b[21]!==i?(m=i!=null&&i>0?k.jsx(c("IGDSBox.react"),{alignItems:"center",marginTop:2,children:k.jsx(c("BaseButton.react"),{onClick:n,children:k.jsx(c("IGDSText.react"),{color:"secondaryText",size:"footnote",textAlign:"center",weight:"semibold",children:k.jsx(c("PolarisBigNumber.react"),{shortenNumber:!0,value:i})})})}):null,b[20]=n,b[21]=i,b[22]=m):m=b[22];b[23]!==g||b[24]!==m?(a=k.jsxs(c("IGDSBox.react"),{children:[g,m]}),b[23]=g,b[24]=m,b[25]=a):a=b[25];return a}function a(a){var e=d("react-compiler-runtime").c(19),f=a.color,g=a.likeCount,j=a.onLikeCountClick,m=a.padding,n=a.queryReference,o=a.shadow,p=a.size;a=a.xstyle;n=d("CometRelay").useFragment(h!==void 0?h:h=b("PolarisCommentLikeButton_comment.graphql"),n);var q=c("usePolarisCommentLike")(n),r=c("usePolarisCommentUnlike")(n),s=n.has_liked_comment||!1;e[0]!==s||e[1]!==q||e[2]!==r?(n=function(a){a.preventDefault(),s===!0?r():q()},e[0]=s,e[1]=q,e[2]=r,e[3]=n):n=e[3];n=n;var t;e[4]!==a?(t=(i||(i=c("stylex")))(a),e[4]=a,e[5]=t):t=e[5];e[6]===Symbol["for"]("react.memo_cache_sentinel")?(a="xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x1ypdohk x15bjb6t x1a2a7pz xexx8yu x4uap5 x18d9i69 xkhd6sd",e[6]=a):a=e[6];m=(m=m)!=null?m:0;p=(p=p)!=null?p:12;e[7]!==f||e[8]!==n||e[9]!==s||e[10]!==g||e[11]!==j||e[12]!==o||e[13]!==m||e[14]!==p?(a=k.jsx("div",{className:a,children:k.jsx(l,{color:f,handleClick:n,isLiked:s,likeChangeCount:0,likeCount:g,onLikeCountClick:j,padding:m,shadow:o,size:p})}),e[7]=f,e[8]=n,e[9]=s,e[10]=g,e[11]=j,e[12]=o,e[13]=m,e[14]=p,e[15]=a):a=e[15];e[16]!==t||e[17]!==a?(f=k.jsx("span",{className:t,children:a}),e[16]=t,e[17]=a,e[18]=f):f=e[18];return f}g["default"]=a}),98);
__d("PolarisFollowerListDialogContentWrapperQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8687672264602773"}),null);
__d("PolarisFollowerListDialogContentWrapperQuery$Parameters",["PolarisFollowerListDialogContentWrapperQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PolarisFollowerListDialogContentWrapperQuery_instagramRelayOperation"),metadata:{is_distillery:!0},name:"PolarisFollowerListDialogContentWrapperQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisPostDetailsSectionProvider.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useContext,k=i.createContext("postPage");function a(a){var b=a.children;a=a.value;return i.jsx(k.Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";function b(){return j(k)}g.PolarisPostDetailsSectionProvider=a;g.usePolarisPostDetailsSectionProvider=b}),98);
__d("PolarisPostMediaVideoPlayerWrapper.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisPostMediaVideoPlayerWrapper",selections:[{alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisPostMediaVideoPlayerWrapper.react",["CometRelay","PolarisPostMediaVideoPlayerWrapper.graphql","PolarisVideoHelpers","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var c=d("react-compiler-runtime").c(9),e=a.children,f=a.queryReference;a=a.shouldCapHeight;f=d("CometRelay").useFragment(h!==void 0?h:h=b("PolarisPostMediaVideoPlayerWrapper.graphql"),f);f=f.original_height!=null&&f.original_width!=null?{height:f.original_height,width:f.original_width}:null;f=d("PolarisVideoHelpers").getVideoPaddingPercentFromDimensions(f,a);c[0]===Symbol["for"]("react.memo_cache_sentinel")?(a="x1n2onr6",c[0]=a):a=c[0];f=f+"%";var g;c[1]!==f?(g={paddingBottom:f},c[1]=f,c[2]=g):g=c[2];c[3]===Symbol["for"]("react.memo_cache_sentinel")?(f="xyzq4qe x5yr21d x10l6tqk xh8yej3",c[3]=f):f=c[3];c[4]!==e?(f=j.jsx("div",{className:f,children:e}),c[4]=e,c[5]=f):f=c[5];c[6]!==g||c[7]!==f?(e=j.jsx("div",{className:a,style:g,children:f}),c[6]=g,c[7]=f,c[8]=e):e=c[8];return e}g["default"]=a}),98);
__d("PolarisShareMenuDialogQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7517613864959560"}),null);
__d("getPolarisPostType.next.react",["PolarisMediaConstants"],(function(a,b,c,d,e,f,g){"use strict";function a(a){if(a===d("PolarisMediaConstants").MediaTypes.VIDEO)return"video";return a===d("PolarisMediaConstants").MediaTypes.CAROUSEL_V2?"sidecar":"photo"}g.getPolarisPostType=a}),98);
__d("polarisMediaRelayIDResolver.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"polarisMediaRelayIDResolver",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW"}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("polarisMediaRelayIDResolver",["igMapTypenameToRelayID","polarisMediaRelayIDResolver.graphql","relay-runtime/store/ResolverFragments"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=d("relay-runtime/store/ResolverFragments").readFragment(h!==void 0?h:h=b("polarisMediaRelayIDResolver.graphql"),a);return c("igMapTypenameToRelayID")("XDTMediaDict",a.id,null)}g.client__relayID=a}),98);
__d("usePolarisFeedAnalyticsContext",["usePolarisFeedVariantFromRoute"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("usePolarisFeedVariantFromRoute")();if(a==="past_posts")return"pastPostsFeedPage";if(a==="favorites")return"favoritesFeedPage";return a==="following"?"followingFeedPage":"feedPage"}g["default"]=a}),98);
__d("usePolarisLikeMediaLikeMutation_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8552604541488484"}),null);
__d("usePolarisLikeMediaLikeMutation.graphql",["usePolarisLikeMediaLikeMutation_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"container_module"},c={defaultValue:null,kind:"LocalArgument",name:"inventory_source"},d={defaultValue:null,kind:"LocalArgument",name:"media_id"},e={defaultValue:null,kind:"LocalArgument",name:"nav_chain"},f={defaultValue:null,kind:"LocalArgument",name:"ranking_info_token"},g=[{alias:null,args:[{fields:[{kind:"Variable",name:"inventory_source",variableName:"inventory_source"},{kind:"Variable",name:"logging_info_token",variableName:"ranking_info_token"},{kind:"Variable",name:"nav_chain",variableName:"nav_chain"}],kind:"ObjectValue",name:"_request_data"},{kind:"Variable",name:"container_module",variableName:"container_module"},{kind:"Variable",name:"media_id",variableName:"media_id"}],concreteType:"XDTEmptyRecord",kind:"LinkedField",name:"xdt_api__v1__media__media_id__like",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[a,c,d,e,f],kind:"Fragment",metadata:null,name:"usePolarisLikeMediaLikeMutation",selections:g,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[d,a,c,f,e],kind:"Operation",name:"usePolarisLikeMediaLikeMutation",selections:g},params:{id:b("usePolarisLikeMediaLikeMutation_instagramRelayOperation"),metadata:{is_distillery:!0},name:"usePolarisLikeMediaLikeMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("usePolarisLikeMediaUnlikeMutation_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8525474704176507"}),null);
__d("usePolarisLikeMediaUnlikeMutation.graphql",["usePolarisLikeMediaUnlikeMutation_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"container_module"},c={defaultValue:null,kind:"LocalArgument",name:"inventory_source"},d={defaultValue:null,kind:"LocalArgument",name:"media_id"},e={defaultValue:null,kind:"LocalArgument",name:"nav_chain"},f={defaultValue:null,kind:"LocalArgument",name:"ranking_info_token"},g=[{alias:null,args:[{fields:[{kind:"Variable",name:"container_module",variableName:"container_module"},{kind:"Variable",name:"inventory_source",variableName:"inventory_source"},{kind:"Variable",name:"logging_info_token",variableName:"ranking_info_token"},{kind:"Variable",name:"nav_chain",variableName:"nav_chain"}],kind:"ObjectValue",name:"_request_data"},{kind:"Variable",name:"media_id",variableName:"media_id"}],concreteType:"XDTEmptyRecord",kind:"LinkedField",name:"xdt_api__v1__media__media_id__unlike",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[a,c,d,e,f],kind:"Fragment",metadata:null,name:"usePolarisLikeMediaUnlikeMutation",selections:g,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[d,a,c,f,e],kind:"Operation",name:"usePolarisLikeMediaUnlikeMutation",selections:g},params:{id:b("usePolarisLikeMediaUnlikeMutation_instagramRelayOperation"),metadata:{is_distillery:!0},name:"usePolarisLikeMediaUnlikeMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("usePolarisLikeMedia_ad.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisLikeMedia_ad",selections:[{alias:null,args:null,kind:"ScalarField",name:"tracking_token",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ad_id",storageKey:null}],type:"XDTAdInsertionItemClientDict",abstractKey:null};e.exports=a}),null);
__d("usePolarisLikeMedia_media.graphql",["polarisMediaRelayIDResolver"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisLikeMedia_media",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW"},{kind:"RequiredField",field:a,action:"THROW"},{kind:"RequiredField",field:{alias:null,args:null,fragment:{args:null,kind:"FragmentSpread",name:"polarisMediaRelayIDResolver"},kind:"RelayResolver",name:"client__relayID",resolverModule:b("polarisMediaRelayIDResolver").client__relayID,path:"client__relayID"},action:"THROW"},{alias:null,args:null,kind:"ScalarField",name:"organic_tracking_token",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"inventory_source",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"logging_info_token",storageKey:null},{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"owner",plural:!1,selections:[a],storageKey:null}],type:"XDTMediaDict",abstractKey:null}}();e.exports=a}),null);
__d("usePolarisLikeMedia",["CometRelay","PolarisAdsEngagementLogger","PolarisContainerModuleUtils","PolarisEngagementLogger","PolarisGenericStrings","PolarisLogger","PolarisNavChain","QPLUserFlow","qpl","react","usePolarisLikeMediaLikeMutation.graphql","usePolarisLikeMediaUnlikeMutation.graphql","usePolarisLikeMedia_ad.graphql","usePolarisLikeMedia_media.graphql","usePolarisShowToast","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k,l,m=(l||d("react")).useCallback,n=h!==void 0?h:h=b("usePolarisLikeMediaLikeMutation.graphql"),o=i!==void 0?i:i=b("usePolarisLikeMediaUnlikeMutation.graphql");function a(a){var e=a.adFragmentKey,f=a.analyticsContext,g=a.mediaFragmentKey,h=a.sourceOfLike;a=d("CometRelay").useMutation(n);var i=a[0];a=d("CometRelay").useMutation(o);var l=a[0],p=d("CometRelay").useFragment(j!==void 0?j:j=b("usePolarisLikeMedia_media.graphql"),g),q=d("CometRelay").useFragment(k!==void 0?k:k=b("usePolarisLikeMedia_ad.graphql"),e),r=c("usePolarisViewer")(),s=c("usePolarisShowToast")(),t=m(function(a,b){var e,g=p!=null?{containerModule:d("PolarisContainerModuleUtils").getContainerModule(f),inventorySource:p.inventory_source,mediaAuthorId:(e=p.owner)==null?void 0:e.pk,mediaId:p.pk,rankingInfoToken:p.logging_info_token,source:f,sourceOfLike:h,trackingToken:p.organic_tracking_token}:null,j=q!=null&&(q==null?void 0:q.ad_id)!=null&&(q==null?void 0:q.tracking_token)!=null&&(r==null?void 0:r.id)!=null?{adId:q.ad_id,adTrackingToken:q.tracking_token,viewerId:r==null?void 0:r.id}:null;e={container_module:d("PolarisContainerModuleUtils").getContainerModule(f),inventory_source:p==null?void 0:p.inventory_source,nav_chain:(e=c("PolarisNavChain").getInstance())==null?void 0:e.getNavChainForSend(),ranking_info_token:p==null?void 0:p.logging_info_token};if(b){c("QPLUserFlow").start(c("qpl")._(379204822,"720"),{annotations:{string:{source:f}}});var k=function(a){var b;a=a.get(p.client__relayID);b=Number((b=a==null?void 0:a.getValue("like_count"))!=null?b:0);a==null?void 0:a.setValue(!0,"has_liked");a==null?void 0:a.setValue(b+1,"like_count")};d("PolarisLogger").logAction("likeAttempt",g);var m=function(){g&&j?d("PolarisAdsEngagementLogger").logAdLike(g,j):g&&d("PolarisEngagementLogger").logOrganicLike(g),c("QPLUserFlow").endSuccess(c("qpl")._(379204822,"720"))},n=function(){d("PolarisLogger").logAction("likeFailure",g),c("QPLUserFlow").endFailure(c("qpl")._(379204822,"720"),"request_failed"),s({actionHandler:function(){return t(a,b)},actionText:d("PolarisGenericStrings").RETRY_TEXT,text:d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE})};i({onCompleted:m,onError:n,optimisticUpdater:k,updater:k,variables:babelHelpers["extends"]({media_id:a},e)})}else{c("QPLUserFlow").start(c("qpl")._(379198902,"749"),{annotations:{string:{source:f}}});m=function(a){var b;a=a.get(p.client__relayID);b=Number((b=a==null?void 0:a.getValue("like_count"))!=null?b:0);a==null?void 0:a.setValue(!1,"has_liked");a==null?void 0:a.setValue(b-1,"like_count")};d("PolarisLogger").logAction("unlikeAttempt",g);n=function(){g&&j?d("PolarisAdsEngagementLogger").logAdUnlike(g,j):g&&d("PolarisEngagementLogger").logOrganicUnlike(g),c("QPLUserFlow").endSuccess(c("qpl")._(379198902,"749"))};k=function(){d("PolarisLogger").logAction("unlikeFailure",g),c("QPLUserFlow").endFailure(c("qpl")._(379198902,"749"),"request_failed"),s({actionHandler:function(){return t(a,b)},actionText:d("PolarisGenericStrings").RETRY_TEXT,text:d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE})};l({onCompleted:n,onError:k,optimisticUpdater:m,updater:m,variables:babelHelpers["extends"]({media_id:a},e)})}},[q,f,i,l,p,s,h,r==null?void 0:r.id]);return t}g["default"]=a}),98);
__d("usePolarisMediaDimensionsFragment_ad.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisMediaDimensionsFragment_ad",selections:[{alias:null,args:null,concreteType:"XDTMediaDict",kind:"LinkedField",name:"items",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null}],storageKey:null}],type:"XDTAdInsertionItemClientDict",abstractKey:null};e.exports=a}),null);
__d("usePolarisMediaDimensionsFragment_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisMediaDimensionsFragment_media",selections:[a,b,{alias:null,args:null,concreteType:"XDTMediaDict",kind:"LinkedField",name:"carousel_media",plural:!0,selections:[a,b],storageKey:null}],type:"XDTMediaDict",abstractKey:null}}();e.exports=a}),null);
__d("usePolarisMediaDimensions",["CometRelay","react-compiler-runtime","usePolarisMediaDimensionsFragment_ad.graphql","usePolarisMediaDimensionsFragment_media.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a){var c=d("react-compiler-runtime").c(3),e=a.adQueryReference;a=a.mediaQueryReference;a=d("CometRelay").useFragment(h!==void 0?h:h=b("usePolarisMediaDimensionsFragment_media.graphql"),a);e=d("CometRelay").useFragment(i!==void 0?i:i=b("usePolarisMediaDimensionsFragment_ad.graphql"),e);var f,g;a!=null?a.carousel_media!=null&&a.carousel_media.length>0?(f=a.carousel_media[0].original_height,g=a.carousel_media[0].original_width):(f=a.original_height,g=a.original_width):e!=null&&e.items!=null&&e.items.length>0&&(f=e.items[0].original_height,g=e.items[0].original_width);if(f==null||g==null)return null;c[0]!==f||c[1]!==g?(a={height:f,width:g},c[0]=f,c[1]=g,c[2]=a):a=c[2];return a}g["default"]=a}),98);
__d("usePolarisShowFooterCTA_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},action:"THROW"},b={alias:null,args:null,concreteType:"XDTIconSpec",kind:"LinkedField",name:"icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"icon_glyph",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"icon_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"src",storageKey:null}],storageKey:null},c=[{alias:null,args:null,kind:"ScalarField",name:"dark",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"light",storageKey:null}];c=[{alias:null,args:null,kind:"ScalarField",name:"action",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"action_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"button_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_chevron",storageKey:null},b,{alias:null,args:null,kind:"ScalarField",name:"is_text_centered",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"secondary_text",storageKey:null},{alias:null,args:null,concreteType:"XDTTextColorSpec",kind:"LinkedField",name:"secondary_text_color",plural:!1,selections:c,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,concreteType:"XDTTextColorSpec",kind:"LinkedField",name:"text_color",plural:!1,selections:c,storageKey:null}];c={alias:null,args:null,concreteType:"XDTMediaOverlayPayloadSchema",kind:"LinkedField",name:"media_overlay_info",plural:!1,selections:[{kind:"InlineDataFragmentSpread",name:"polarisReadInlineMediaOverlayInfo_inline_media_overlay",selections:[{alias:null,args:null,concreteType:"XDTButtonSpec",kind:"LinkedField",name:"banner",plural:!1,selections:c,storageKey:null},{alias:null,args:null,concreteType:"XDTBloksRenderResponse",kind:"LinkedField",name:"bloks_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"layout",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XDTButtonSpec",kind:"LinkedField",name:"buttons",plural:!0,selections:c,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},b,{alias:null,args:null,kind:"ScalarField",name:"misinformation_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_applied_timestamp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_layout",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sub_category",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null}],args:null,argumentDefinitions:[]}],storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisShowFooterCTA_media",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"carousel_media_count",storageKey:null},{alias:null,args:null,concreteType:"XDTMediaDict",kind:"LinkedField",name:"carousel_media",plural:!0,selections:[a,c],storageKey:null},c],type:"XDTMediaDict",abstractKey:null}}();e.exports=a}),null);
__d("usePolarisShowFooterCTA.next.react",["CometRelay","polarisMediaOverlayInfoUtils","polarisReadInlineMediaOverlayInfo","react","react-compiler-runtime","usePolarisShowFooterCTA_media.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;(i||d("react")).useMemo;function a(a,e,f,g){var i=d("react-compiler-runtime").c(15);a=d("CometRelay").useFragment(h!==void 0?h:h=b("usePolarisShowFooterCTA_media.graphql"),a);bb0:{if(g===!0){g=null;break bb0}var j=a.carousel_media_count!=null&&a.carousel_media_count>0,k=null,l=null;if(j===!0){var m;m=(m=a.carousel_media)==null?void 0:m[e];if(m!=null){e=f[m.pk]===!0;if(i[0]!==l||i[1]!==m.media_overlay_info||i[2]!==m.pk||i[3]!==e){var n=m.media_overlay_info!=null?c("polarisReadInlineMediaOverlayInfo")(m.media_overlay_info):null;if(n!=null){var o=d("polarisMediaOverlayInfoUtils").isMediaOverlayLayoutSupported(n==null?void 0:n.overlay_layout);o&&(l=d("polarisMediaOverlayInfoUtils").getMediaOverlayBottomBannerInfo(n,e));l!=null&&(k=m.pk)}i[0]=l;i[1]=m.media_overlay_info;i[2]=m.pk;i[3]=e;i[4]=l;i[5]=k}else l=i[4],k=i[5]}}if(k==null){o=f[a.pk]===!0;if(i[6]!==o||i[7]!==a.media_overlay_info||i[8]!==a.pk){n=a.media_overlay_info!=null?c("polarisReadInlineMediaOverlayInfo")(a.media_overlay_info):null;n!=null&&(l=d("polarisMediaOverlayInfoUtils").getMediaOverlayBottomBannerInfo(n,o),l!=null&&(k=a.pk));i[6]=o;i[7]=a.media_overlay_info;i[8]=a.pk;i[9]=l;i[10]=k}else l=i[9],k=i[10]}if(k==null||l==null){g=null;break bb0}i[11]!==l||i[12]!==j||i[13]!==k?(m={bottomBannerInfo:l,isParentPostSidecar:j,itemWithBannerID:k},i[11]=l,i[12]=j,i[13]=k,i[14]=m):m=i[14];g=m}return g}g["default"]=a}),98);