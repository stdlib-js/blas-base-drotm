// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function t(r,e,t,n,f,i,s,o){var d,u,a,m,l,p,j,v,b,c;if(d=o[0],r<=0||-2===d)return f;if(p=n,j=s,t===i&&t>0){if(d<0){for(u=o[1],a=o[3],m=o[2],l=o[4],v=0;v<r;v++)b=e[p],c=f[p],e[p]=b*u+c*a,f[p]=b*m+c*l,p+=t;return f}if(0===d){for(a=o[3],m=o[2],v=0;v<r;v++)b=e[p],c=f[p],e[p]=b+c*a,f[p]=b*m+c,p+=t;return f}for(u=o[1],l=o[4],v=0;v<r;v++)b=e[p],c=f[p],e[p]=b*u+c,f[p]=c*l-b,p+=t;return f}if(d<0){for(u=o[1],a=o[3],m=o[2],l=o[4],v=0;v<r;v++)b=e[p],c=f[j],e[p]=b*u+c*a,f[j]=b*m+c*l,p+=t,j+=i;return f}if(0===d){for(a=o[3],m=o[2],v=0;v<r;v++)b=e[p],c=f[j],e[p]=b+c*a,f[j]=b*m+c,p+=t,j+=i;return f}for(u=o[1],l=o[4],v=0;v<r;v++)b=e[p],c=f[j],e[p]=b*u+c,f[j]=c*l-b,p+=t,j+=i;return f}function n(r,n,f,i,s,o){return t(r,n,f,e(r,f),i,s,e(r,s),o)}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
