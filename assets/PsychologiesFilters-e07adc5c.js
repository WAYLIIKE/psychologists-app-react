import{r as l,j as e}from"./index-7fc87750.js";import{G as i}from"./NavBar-7459adf7.js";function p(c){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"},child:[]}]})(c)}function _(c){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"},child:[]}]})(c)}const f="_container_1hebz_1",x="_filterTitle_1hebz_6",I="_customSelect_1hebz_14",S="_selectSelected_1hebz_18",v="_selectItems_1hebz_33",j="_selectItem_1hebz_33",s={container:f,filterTitle:x,customSelect:I,selectSelected:S,selectItems:v,selectItem:j},L=()=>{const[c,a]=l.useState("A to Z"),[n,o]=l.useState(!1),r=l.useRef(null),d=["A to Z","Z to A","Less than 10$","Greater than 10$","Popular","Not popular","Show all"],m=()=>{o(!n)},h=t=>{a(t),o(!1)};return l.useEffect(()=>{const t=u=>{r.current&&!r.current.contains(u.target)&&o(!1)};return document.addEventListener("click",t,!0),()=>{document.removeEventListener("click",t,!0)}},[]),e.jsxs("div",{className:s.container,children:[e.jsx("p",{className:s.filterTitle,children:"Filters"}),e.jsxs("div",{className:s.customSelect,ref:r,children:[e.jsxs("div",{className:s.selectSelected,onClick:m,children:[e.jsx("p",{children:c})," ",n?e.jsx(p,{size:20}):e.jsx(_,{size:20})]}),n&&e.jsx("div",{className:s.selectItems,children:d.map(t=>e.jsx("div",{className:s.selectItem,onClick:()=>h(t),children:t},t))})]})]})};export{L as P};