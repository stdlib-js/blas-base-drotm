// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function f(r,f,n,e,t,i){var o,u,a,d,s,l,m,p,v,y;if(o=i[0],r<=0||-2===o)return e;if(n===t&&n>0){if(l=0,o<0){for(u=i[1],a=i[3],d=i[2],s=i[4],p=0;p<r;p++)v=f[l],y=e[l],f[l]=v*u+y*a,e[l]=v*d+y*s,l+=n;return e}if(0===o){for(a=i[3],d=i[2],p=0;p<r;p++)v=f[l],y=e[l],f[l]=v+y*a,e[l]=v*d+y,l+=n;return e}for(u=i[1],s=i[4],p=0;p<r;p++)v=f[l],y=e[l],f[l]=v*u+y,e[l]=y*s-v,l+=n;return e}if(l=n<0?(1-r)*n:0,m=t<0?(1-r)*t:0,o<0){for(u=i[1],a=i[3],d=i[2],s=i[4],p=0;p<r;p++)v=f[l],y=e[m],f[l]=v*u+y*a,e[m]=v*d+y*s,l+=n,m+=t;return e}if(0===o){for(a=i[3],d=i[2],p=0;p<r;p++)v=f[l],y=e[m],f[l]=v+y*a,e[m]=v*d+y,l+=n,m+=t;return e}for(u=i[1],s=i[4],p=0;p<r;p++)v=f[l],y=e[m],f[l]=v*u+y,e[m]=y*s-v,l+=n,m+=t;return e}function n(r,f,n,e,t,i,o,u){var a,d,s,l,m,p,v,y,c,j;if(a=u[0],r<=0||-2===a)return t;if(p=e,v=o,n===i&&n>0){if(a<0){for(d=u[1],s=u[3],l=u[2],m=u[4],y=0;y<r;y++)c=f[p],j=t[p],f[p]=c*d+j*s,t[p]=c*l+j*m,p+=n;return t}if(0===a){for(s=u[3],l=u[2],y=0;y<r;y++)c=f[p],j=t[p],f[p]=c+j*s,t[p]=c*l+j,p+=n;return t}for(d=u[1],m=u[4],y=0;y<r;y++)c=f[p],j=t[p],f[p]=c*d+j,t[p]=j*m-c,p+=n;return t}if(a<0){for(d=u[1],s=u[3],l=u[2],m=u[4],y=0;y<r;y++)c=f[p],j=t[v],f[p]=c*d+j*s,t[v]=c*l+j*m,p+=n,v+=i;return t}if(0===a){for(s=u[3],l=u[2],y=0;y<r;y++)c=f[p],j=t[v],f[p]=c+j*s,t[v]=c*l+j,p+=n,v+=i;return t}for(d=u[1],m=u[4],y=0;y<r;y++)c=f[p],j=t[v],f[p]=c*d+j,t[v]=j*m-c,p+=n,v+=i;return t}r(f,"ndarray",n);export{f as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
