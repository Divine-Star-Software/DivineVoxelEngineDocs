"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17631],{35412:(e,l,d)=>{d.r(l),d.d(l,{assets:()=>r,contentTitle:()=>c,default:()=>o,frontMatter:()=>s,metadata:()=>i,toc:()=>x});var n=d(74848),t=d(28453);const s={id:"Data_LightData",title:"Module: Data/LightData",sidebar_label:"Data/LightData",sidebar_position:0,custom_edit_url:null},c=void 0,i={id:"libs/foundation/modules/Data_LightData",title:"Module: Data/LightData",description:"Variables",source:"@site/docs/libs/foundation/modules/Data_LightData.md",sourceDirName:"libs/foundation/modules",slug:"/libs/foundation/modules/Data_LightData",permalink:"/docs/libs/foundation/modules/Data_LightData",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Data_LightData",title:"Module: Data/LightData",sidebar_label:"Data/LightData",sidebar_position:0,custom_edit_url:null},sidebar:"libsSideBar",previous:{title:"Data/DataHooks",permalink:"/docs/libs/foundation/modules/Data_DataHooks"},next:{title:"Data/RegionHeaderRegister",permalink:"/docs/libs/foundation/modules/Data_RegionHeaderRegister"}},r={},x=[{value:"Variables",id:"variables",level:2},{value:"LightData",id:"lightdata",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4}];function h(e){const l={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"variables",children:"Variables"}),"\n",(0,n.jsx)(l.h3,{id:"lightdata",children:"LightData"}),"\n",(0,n.jsxs)(l.p,{children:["\u2022 ",(0,n.jsx)(l.code,{children:"Const"})," ",(0,n.jsx)(l.strong,{children:"LightData"}),": ",(0,n.jsx)(l.code,{children:"Object"})]}),"\n",(0,n.jsx)(l.h1,{id:"light-byte",children:"Light Byte"}),"\n",(0,n.jsx)(l.hr,{}),"\n",(0,n.jsx)(l.p,{children:"Used to decode light color info."}),"\n",(0,n.jsx)(l.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(l.tbody,{children:[(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"SRS"})}),(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"number"})})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"_lightValues"})}),(0,n.jsx)(l.td,{style:{textAlign:"left"},children:"[s: number, r: number, g: number, b: number]"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"decodeLightFromVoxelData"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"voxelData"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"encodeLightIntoVoxelData"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"voxelData"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"encodedLight"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"getB"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"value"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"getFullSunLight"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"getG"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"value"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"getLightValues"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"value"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => [s: number, r: number, g: number, b: number]"]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"getMinusOneForRGB"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"nl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"getMinusOneForSun"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"nl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"getR"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"value"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"getRGB"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"getS"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"value"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"getSunLightForUnderVoxel"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"nl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"hasRGBLight"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"boolean"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"hasSunLight"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"boolean"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"isGreaterOrEqualThanForRGBRemove"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"n1"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"n2"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"boolean"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"isGreaterOrEqualThanForSunRemove"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"n1"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"boolean"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"isLessThanForRGBAdd"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"n1"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"n2"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"boolean"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"isLessThanForRGBRemove"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"n1"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"n2"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"boolean"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"isLessThanForSunAdd"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"n1"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"n2"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"boolean"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"isLessThanForSunAddDown"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"n1"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"n2"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"boolean"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"isLessThanForSunAddUp"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"n1"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"n2"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"boolean"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"isLessThanForSunRemove"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"n1"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"boolean"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"minusOneForAll"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"mixLight"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"l1"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"l2"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"removeRGBLight"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"removeS"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"removeSunLight"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"setB"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"value"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"setG"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"value"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"setLightValues"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"values"}),": ",(0,n.jsx)(l.code,{children:"number"}),"[]) => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"setR"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"value"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"setRGB"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"value"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"setS"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"value"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"number"})]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.code,{children:"sunLightCompareForDownSunRemove"})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(l.code,{children:"n1"}),": ",(0,n.jsx)(l.code,{children:"number"}),", ",(0,n.jsx)(l.code,{children:"sl"}),": ",(0,n.jsx)(l.code,{children:"number"}),") => ",(0,n.jsx)(l.code,{children:"boolean"})]})]})]})]}),"\n",(0,n.jsx)(l.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(l.p,{children:(0,n.jsx)(l.a,{href:"https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinevoxel/foundation/src/Data/LightData.ts#L5",children:"divinevoxel/foundation/src/Data/LightData.ts:5"})})]})}function o(e={}){const{wrapper:l}={...(0,t.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,l,d)=>{d.d(l,{R:()=>c,x:()=>i});var n=d(96540);const t={},s=n.createContext(t);function c(e){const l=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(s.Provider,{value:l},e.children)}}}]);