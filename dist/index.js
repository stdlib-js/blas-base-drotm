"use strict";var R=function(f,v){return function(){return v||f((v={exports:{}}).exports,v),v.exports}};var _=R(function(Q,z){
function D(f,v,o,a,e,j,g,u){var c,s,d,h,l,r,q,i,n,t;if(c=u[0],f<=0||c===-2)return e;if(r=a,q=g,o===j&&o>0){if(c<0){for(s=u[1],d=u[3],h=u[2],l=u[4],i=0;i<f;i++)n=v[r],t=e[r],v[r]=n*s+t*d,e[r]=n*h+t*l,r+=o;return e}if(c===0){for(d=u[3],h=u[2],i=0;i<f;i++)n=v[r],t=e[r],v[r]=n+t*d,e[r]=n*h+t,r+=o;return e}for(s=u[1],l=u[4],i=0;i<f;i++)n=v[r],t=e[r],v[r]=n*s+t,e[r]=-n+t*l,r+=o;return e}if(c<0){for(s=u[1],d=u[3],h=u[2],l=u[4],i=0;i<f;i++)n=v[r],t=e[q],v[r]=n*s+t*d,e[q]=n*h+t*l,r+=o,q+=j;return e}if(c===0){for(d=u[3],h=u[2],i=0;i<f;i++)n=v[r],t=e[q],v[r]=n+t*d,e[q]=n*h+t,r+=o,q+=j;return e}for(s=u[1],l=u[4],i=0;i<f;i++)n=v[r],t=e[q],v[r]=n*s+t,e[q]=-n+t*l,r+=o,q+=j;return e}z.exports=D
});var b=R(function(S,O){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=_();function G(f,v,o,a,e,j){var g,u,c;return g=j[0],f<=0||g===-2?a:(u=E(f,o),c=E(f,e),F(f,v,o,u,a,e,c,j))}O.exports=G
});var B=R(function(T,A){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=b(),I=_();H(k,"ndarray",I);A.exports=k
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),M=B(),w,C=K(J(__dirname,"./native.js"));L(C)?w=M:w=C;module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
