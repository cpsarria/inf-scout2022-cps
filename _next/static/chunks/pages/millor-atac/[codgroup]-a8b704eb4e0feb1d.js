(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[534],{8673:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/millor-atac/[codgroup]",function(){return n(5912)}])},9575:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.playerMenu=a.teamMenu=a.mainMenu=a.followTeamsMenu=a.alevinsMenu=void 0;var n=function(){return[{label:"Alev\xed A",href:"/classificacio/41327323"},{label:"Alev\xed B",href:"/classificacio/41527092"},{label:"Alev\xed C",href:"/classificacio/41528608"},{label:"Alev\xed D",href:"/classificacio/42205315"},{label:"Alev\xed E",href:"/classificacio/42203031"}]};a.alevinsMenu=n;var l=function(e){return e.map((function(e){return{label:e.nom_equip_menu,href:"/classificacio/".concat(e.codgrupo)}}))};a.followTeamsMenu=l;var r=function(e,a){return[{label:"Classificaci\xf3",href:"/classificacio/".concat(e.toString())},{label:"Jornada",href:"/jornada-actual/".concat(e.toString())},{label:"Pitxitxi",href:"/pitxitxi/".concat(e.toString())},{label:"Atac",href:"/millor-atac/".concat(e.toString())},{label:"Defensa",href:"/millor-defensa/".concat(e.toString())}].concat(a)};a.mainMenu=r;var i=function(e){return[{label:"Resultat",href:"/equip/".concat(e)},{label:"Titulars",href:"/equip-jugadors/".concat(e)},{label:"Golejadors",href:"/equip-golejadors/".concat(e)},{label:"Minuts dels Gols",href:"/equip-golejadors-minut/".concat(e)}]},o=function(e,a,n){var l=r(e,n),o=i(a);return o.push({label:"Competici\xf3",children:l}),o};a.teamMenu=o;var t=function(e,a,n,l){var o=r(a,l),t=i(n),c=function(e){return[{label:"Jugador",href:"/equip/".concat(e)}]}(e);return c.push({label:"Equip",children:t}),c.push({label:"Competici\xf3",children:o}),c};a.playerMenu=t,e.exports={alevinsMenu:n,followTeamsMenu:l,mainMenu:r,teamMenu:o,playerMenu:t}},5912:function(e,a,n){"use strict";n.r(a),n.d(a,{__N_SSG:function(){return d}});var l=n(5893),r=(n(7294),n(949)),i=n(8527),o=n(1664),t=n(1338),c=n(2844),u=n(9175),s=n(9575),f=n(4276),d=!0;a.default=function(e){var a=e.data,n=e.codgroup,d=e.menuFollowTeams,p=((0,r.ff)("gray.800","white"),(0,s.mainMenu)(n,d));return(0,l.jsxs)(i.xu,{className:"container",children:[(0,l.jsx)(f.w,{navMenu:p}),(0,l.jsx)(i.xu,{pt:2,fontSize:"3xl",children:"MILLOR ATAC"}),(0,l.jsx)(u.w,{striped:!0,data:a,keys:["nom","gols_afavor"],keyFunc:"codequip",tableProps:{td:{color:(0,r.ff)("taula.100","taula.900"),maxWidth:["150px","xl","100px"]},thead:{fontStyle:"bold"}},mapper:{nom:function(e){return(0,l.jsx)(i.xv,{children:(0,l.jsx)(o.default,{href:"/equip/".concat(e.codequip),children:e.nom})})},gols_afavor:function(e){return(0,l.jsx)(i.xv,{children:e.gols_afavor})}}}),(0,l.jsx)(t.C,{desktop:"35px"}),(0,l.jsx)(c.Z,{})]})}}},function(e){e.O(0,[552,608,485,276,731,774,888,179],(function(){return a=8673,e(e.s=a);var a}));var a=e.O();_N_E=a}]);