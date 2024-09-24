"use strict";var _=function(t,u){return function(){return u||t((u={exports:{}}).exports,u),u.exports}};var g=_(function(Q,z){
function D(t,u,f,a,e,j,R,v){var l,c,s,h,d,r,q,i,n,o;if(l=v[0],t<=0||l===-2)return e;if(r=a,q=R,f===j&&f>0){if(l<0){for(c=v[1],s=v[3],h=v[2],d=v[4],i=0;i<t;i++)n=u[r],o=e[r],u[r]=n*c+o*s,e[r]=n*h+o*d,r+=f;return e}if(l===0){for(s=v[3],h=v[2],i=0;i<t;i++)n=u[r],o=e[r],u[r]=n+o*s,e[r]=n*h+o,r+=f;return e}for(c=v[1],d=v[4],i=0;i<t;i++)n=u[r],o=e[r],u[r]=n*c+o,e[r]=-n+o*d,r+=f;return e}if(l<0){for(c=v[1],s=v[3],h=v[2],d=v[4],i=0;i<t;i++)n=u[r],o=e[q],u[r]=n*c+o*s,e[q]=n*h+o*d,r+=f,q+=j;return e}if(l===0){for(s=v[3],h=v[2],i=0;i<t;i++)n=u[r],o=e[q],u[r]=n+o*s,e[q]=n*h+o,r+=f,q+=j;return e}for(c=v[1],d=v[4],i=0;i<t;i++)n=u[r],o=e[q],u[r]=n*c+o,e[q]=-n+o*d,r+=f,q+=j;return e}z.exports=D
});var b=_(function(S,O){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=g();function G(t,u,f,a,e,j){var R=E(t,f),v=E(t,e);return F(t,u,f,R,a,e,v,j)}O.exports=G
});var B=_(function(T,A){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=b(),I=g();H(k,"ndarray",I);A.exports=k
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),M=B(),w,C=K(J(__dirname,"./native.js"));L(C)?w=M:w=C;module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
