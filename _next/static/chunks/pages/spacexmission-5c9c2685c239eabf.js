(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89],{3012:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spacexmission",function(){return i(7907)}])},7907:function(n,e,i){"use strict";i.r(e);var r=i(5893),s=i(4925),c=i(8067),a=i(1621),t=i(3056),u=i(3768);function l(){var n,e,i=(n=["\n  {\n    launchesPast(limit: 10) {\n      id\n      mission_name\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return l=function(){return i},i}var d=new s.f({uri:"https://api.spacex.land/graphql/",cache:new c.h}),o=(0,a.Ps)(l()),f=function(){var n=(0,t.a)(o),e=n.data,i=n.loading,s=n.error;return i?(0,r.jsx)("div",{children:"Loading..."}):s?(0,r.jsx)("pre",{children:s.message}):(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:"spacex mission"}),(0,r.jsx)("ul",{children:e.launchesPast.map((function(n){return(0,r.jsx)("li",{children:n.mission_name},n.id)}))})]})};e.default=function(){return(0,r.jsx)(u.e,{client:d,children:(0,r.jsx)(f,{})})}}},function(n){n.O(0,[331,774,888,179],(function(){return e=3012,n(n.s=e);var e}));var e=n.O();_N_E=e}]);