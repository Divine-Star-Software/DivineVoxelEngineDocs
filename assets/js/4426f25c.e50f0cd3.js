"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87491],{73226:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>r});var i=l(74848),n=l(28453);const d={id:"Default_Physics_Collisions_CollisionsHandler",title:"Module: Default/Physics/Collisions/CollisionsHandler",sidebar_label:"Default/Physics/Collisions/CollisionsHandler",sidebar_position:0,custom_edit_url:null},t=void 0,o={id:"libs/foundation/modules/Default_Physics_Collisions_CollisionsHandler",title:"Module: Default/Physics/Collisions/CollisionsHandler",description:"Variables",source:"@site/docs/libs/foundation/modules/Default_Physics_Collisions_CollisionsHandler.md",sourceDirName:"libs/foundation/modules",slug:"/libs/foundation/modules/Default_Physics_Collisions_CollisionsHandler",permalink:"/docs/libs/foundation/modules/Default_Physics_Collisions_CollisionsHandler",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Default_Physics_Collisions_CollisionsHandler",title:"Module: Default/Physics/Collisions/CollisionsHandler",sidebar_label:"Default/Physics/Collisions/CollisionsHandler",sidebar_position:0,custom_edit_url:null},sidebar:"libsSideBar",previous:{title:"Default/Physics/Colliders/Functions/RegisterDefaultColliders",permalink:"/docs/libs/foundation/modules/Default_Physics_Colliders_Functions_RegisterDefaultColliders"},next:{title:"Default/Physics/Constants/Flags",permalink:"/docs/libs/foundation/modules/Default_Physics_Constants_Flags"}},c={},r=[{value:"Variables",id:"variables",level:2},{value:"CollisionsHanlder",id:"collisionshanlder",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"variables",children:"Variables"}),"\n",(0,i.jsx)(s.h3,{id:"collisionshanlder",children:"CollisionsHanlder"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.code,{children:"Const"})," ",(0,i.jsx)(s.strong,{children:"CollisionsHanlder"}),": ",(0,i.jsx)(s.code,{children:"Object"})]}),"\n",(0,i.jsx)(s.h1,{id:"collisionshanlder-1",children:"CollisionsHanlder"}),"\n",(0,i.jsx)(s.p,{children:"Handles collision handling for physics nodes."}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.p,{children:["The swept AABB code was adapted from this article:\n",(0,i.jsx)(s.a,{href:"https://luisreis.net/blog/aabb_collision_handling/",children:"https://luisreis.net/blog/aabb_collision_handling/"})]}),"\n",(0,i.jsx)(s.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"aabb"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:["{ ",(0,i.jsx)(s.code,{children:"delta"}),": ",(0,i.jsx)(s.code,{children:"Vector3"})," ; ",(0,i.jsx)(s.code,{children:"dimensions"}),": ",(0,i.jsx)(s.code,{children:"Vector3"})," ; ",(0,i.jsx)(s.code,{children:"line"}),": ",(0,i.jsx)(s.a,{href:"/docs/libs/foundation/classes/Default_Physics_Classes_Line.Line",children:(0,i.jsx)(s.code,{children:"Line"})})," ; ",(0,i.jsx)(s.code,{children:"plane"}),": ",(0,i.jsx)(s.a,{href:"/docs/libs/foundation/classes/Default_Physics_Classes_Plane.Plane",children:(0,i.jsx)(s.code,{children:"Plane"})})," ; ",(0,i.jsx)(s.code,{children:"results"}),": ",(0,i.jsx)(s.a,{href:"/docs/libs/foundation/classes/Default_Physics_Classes_CollisionResult.CollisionResult",children:(0,i.jsx)(s.code,{children:"CollisionResult"})})," ; ",(0,i.jsx)(s.code,{children:"start"}),": ",(0,i.jsx)(s.code,{children:"Vector3"}),"  }"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"aabb.delta"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"Vector3"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"aabb.dimensions"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"Vector3"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"aabb.line"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/docs/libs/foundation/classes/Default_Physics_Classes_Line.Line",children:(0,i.jsx)(s.code,{children:"Line"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"aabb.plane"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/docs/libs/foundation/classes/Default_Physics_Classes_Plane.Plane",children:(0,i.jsx)(s.code,{children:"Plane"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"aabb.results"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/docs/libs/foundation/classes/Default_Physics_Classes_CollisionResult.CollisionResult",children:(0,i.jsx)(s.code,{children:"CollisionResult"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"aabb.start"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"Vector3"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"get COLLISION_CHECK_POSITION_OFFSET()"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"number"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"between"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,i.jsx)(s.code,{children:"x"}),": ",(0,i.jsx)(s.code,{children:"number"}),", ",(0,i.jsx)(s.code,{children:"a"}),": ",(0,i.jsx)(s.code,{children:"number"}),", ",(0,i.jsx)(s.code,{children:"b"}),": ",(0,i.jsx)(s.code,{children:"number"}),") => ",(0,i.jsx)(s.code,{children:"boolean"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"processSwpetAABB"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,i.jsx)(s.code,{children:"node"}),": ",(0,i.jsx)(s.a,{href:"/docs/libs/foundation/classes/Default_Physics_Nodes_PhysicsNodes.PhysicsNode",children:(0,i.jsx)(s.code,{children:"PhysicsNode"})}),") => ",(0,i.jsx)(s.code,{children:"void"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"sweepAABBN"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,i.jsx)(s.code,{children:"physicsNodePosition"}),": ",(0,i.jsx)(s.code,{children:"Vector3"}),", ",(0,i.jsx)(s.code,{children:"boundingBox"}),": ",(0,i.jsx)(s.a,{href:"/docs/libs/foundation/classes/Default_Physics_Classes_BoundingBox.BoundingBox",children:(0,i.jsx)(s.code,{children:"BoundingBox"})}),", ",(0,i.jsx)(s.code,{children:"collisionNode"}),": ",(0,i.jsx)(s.a,{href:"/docs/libs/foundation/classes/Default_Physics_Classes_CollisionNode.CollisionNode",children:(0,i.jsx)(s.code,{children:"CollisionNode"})}),", ",(0,i.jsx)(s.code,{children:"velocity"}),": ",(0,i.jsx)(s.code,{children:"Vector3"}),") => { ",(0,i.jsx)(s.code,{children:"hitDepth"}),": ",(0,i.jsx)(s.code,{children:"number"})," = 1; ",(0,i.jsx)(s.code,{children:"nx"}),": ",(0,i.jsx)(s.code,{children:"number"})," = 0; ",(0,i.jsx)(s.code,{children:"ny"}),": ",(0,i.jsx)(s.code,{children:"number"})," = 0; ",(0,i.jsx)(s.code,{children:"nz"}),": ",(0,i.jsx)(s.code,{children:"number"})," = 0 }"]})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/lucasdamianjohnson/DivineVoxelEngine/blob/596fa7391478620ed460dfb4856ff0a763b91c49/divinevoxel/foundation/src/Default/Physics/Collisions/CollisionsHandler.ts#L17",children:"divinevoxel/foundation/src/Default/Physics/Collisions/CollisionsHandler.ts:17"})})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,s,l)=>{l.d(s,{R:()=>t,x:()=>o});var i=l(96540);const n={},d=i.createContext(n);function t(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);