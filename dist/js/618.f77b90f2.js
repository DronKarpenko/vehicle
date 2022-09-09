(self["webpackChunkvehicle"]=self["webpackChunkvehicle"]||[]).push([[618],{2363:function(e,i,o){"use strict";o.d(i,{Z:function(){return v}});var t=o(3396),d=o(7139);const s={class:"page-title"},n={class:"container"},a={class:"page-title__name"};function p(e,i,o,p,l,r){return(0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("div",n,[(0,t._)("h1",a,(0,d.zw)(o.pageTitle),1)])])}var l={name:"page-title",props:{pageTitle:{type:String,default:""}}},r=o(89);const c=(0,r.Z)(l,[["render",p]]);var v=c},3618:function(e,i,o){"use strict";o.r(i),o.d(i,{default:function(){return W}});var t=o(3396);const d={class:"container video-container"};function s(e,i,o,s,n,a){const p=(0,t.up)("Header"),l=(0,t.up)("page-title"),r=(0,t.up)("video-pagination"),c=(0,t.up)("Footer");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(p),(0,t._)("main",null,[(0,t.Wm)(l,{pageTitle:"Vehicle videos"}),(0,t._)("div",d,[(0,t.Wm)(r,{videoItem_data:n.videoItems,size:4,"mobile-size":4},null,8,["videoItem_data"])])]),(0,t.Wm)(c)],64)}var n=o(1548),a=o(3854),p=o(2363),l=o(7139);const r={class:"video-pagination"},c={class:"video-posts"},v={class:"pagination-buttons"},u={class:"page-buttons"},h=["onClick"];function m(e,i,o,d,s,n){const a=(0,t.up)("video-item"),p=(0,t.up)("v-btn");return(0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",c,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n.paginatedData,(e=>((0,t.wg)(),(0,t.j4)(a,{key:e.id,videoItem_obj:e},null,8,["videoItem_obj"])))),128))]),(0,t._)("div",v,[(0,t.Wm)(p,{disabled:0===s.pageNumber,onClick:n.prevPage,title:"Previous"},null,8,["disabled","onClick"]),(0,t._)("div",u,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n.createPageButton,(e=>((0,t.wg)(),(0,t.iD)("button",{class:(0,l.C_)(["pagination-circle",{active:e.id===this.pageNumber}]),key:e.id,onClick:i=>this.pageNumber=e.id},null,10,h)))),128))]),(0,t.Wm)(p,{disabled:s.pageNumber>=n.pageCount-1,onClick:n.nextPage,title:"Next"},null,8,["disabled","onClick"])])])}var g=o(3078),A=o(9242),b=o(5572);const C={class:"video-item"},f={class:"video-item__photo"},V=["src"],j={class:"video-item__title"},k=["src","poster"];function w(e,i,d,s,n,a){return(0,t.wg)(),(0,t.iD)("div",C,[(0,t._)("div",f,[(0,t._)("img",{src:b,alt:"play",class:"videoplay-btn",onClick:i[0]||(i[0]=(...e)=>a.openVideoPopup&&a.openVideoPopup(...e))}),(0,t._)("img",{src:o(3837)("./"+d.videoItem_obj.photo),alt:"video",class:"video-item__img",onClick:i[1]||(i[1]=(...e)=>a.openVideoPopup&&a.openVideoPopup(...e))},null,8,V)]),(0,t._)("h3",j,(0,l.zw)(d.videoItem_obj.title),1),n.isVisibleVideo?((0,t.wg)(),(0,t.iD)("div",{key:0,class:"video-popup",onClick:i[3]||(i[3]=(...e)=>a.hideVideoPopup&&a.hideVideoPopup(...e))},[(0,t._)("video",{controls:"",onClick:i[2]||(i[2]=(0,A.iM)((()=>{}),["stop"])),src:o(3837)("./"+d.videoItem_obj.video),poster:o(3837)("./"+d.videoItem_obj.photo)},null,8,k)])):(0,t.kq)("",!0)])}var I={name:"video-item",data(){return{isVisibleVideo:!1}},props:{videoItem_obj:{type:Object,required:!0}},methods:{openVideoPopup(e){this.isVisibleVideo=!0},hideVideoPopup(){this.isVisibleVideo=!1}},watch:{isVisibleVideo:function(e){let i="lock";e?document.body.classList.add(i):document.body.classList.remove(i)}}},z=o(89);const y=(0,z.Z)(I,[["render",w]]);var S=y,x={name:"video-pagination",components:{VideoItem:S,VBtn:g.Z},data(){return{pageNumber:0,windowsWidth:0}},created(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed(){window.removeEventListener("resize",this.handleResize)},props:{videoItem_data:{type:Array,required:!0},size:{type:Number,required:!1,default:9},mobileSize:{type:Number,required:!1,default:6}},methods:{nextPage(){this.pageNumber++},prevPage(){this.pageNumber--},handleResize(){this.windowsWidth=window.innerWidth}},computed:{pageCount(){let e=this.videoItem_data.length,i=this.size,o=this.mobileSize;return this.windowsWidth<=1024?Math.ceil(e/o):Math.ceil(e/i)},paginatedData(){let e,i;return this.windowsWidth<=1024?(e=this.pageNumber*this.mobileSize,i=e+this.mobileSize):(e=this.pageNumber*this.size,i=e+this.size),this.videoItem_data.slice(e,i)},createPageButton(){let e=[];for(let i=0;i<this.pageCount;i++)e.push({id:i});return e}}};const _=(0,z.Z)(x,[["render",m],["__scopeId","data-v-63bc527a"]]);var O=_,N={name:"video-page",components:{VideoPagination:O,PageTitle:p.Z,Header:n.Z,Footer:a.Z},data(){return{videoItems:[{id:1,photo:"video1.jpg",title:"VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback",video:"video1.mp4"},{id:2,photo:"video2.jpg",title:"VAC's Vehicle Shoot #11: Toyota Highlander",video:"video2.mp4"},{id:3,photo:"video3.jpg",title:"VAC's Vehicle Shoot #09: 2019 Mazda CX-5",video:"video3.mp4"},{id:4,photo:"video4.jpg",title:"Some Vehicles VAC Offers!",video:"video4.mp4"},{id:5,photo:"video3.jpg",title:"VAC's Vehicle Shoot #09: 2019 Mazda CX-5",video:"video3.mp4"},{id:6,photo:"video4.jpg",title:"Some Vehicles VAC Offers!",video:"video4.mp4"},{id:7,photo:"video1.jpg",title:"VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback",video:"video1.mp4"},{id:8,photo:"video2.jpg",title:"VAC's Vehicle Shoot #11: Toyota Highlander",video:"video2.mp4"},{id:9,photo:"video2.jpg",title:"VAC's Vehicle Shoot #11: Toyota Highlander",video:"video2.mp4"},{id:10,photo:"video3.jpg",title:"VAC's Vehicle Shoot #09: 2019 Mazda CX-5",video:"video3.mp4"},{id:11,photo:"video1.jpg",title:"VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback",video:"video1.mp4"}]}}};const U=(0,z.Z)(N,[["render",s]]);var W=U},3837:function(e,i,o){var t={"./video1.jpg":2202,"./video1.mp4":3631,"./video2.jpg":3421,"./video2.mp4":6096,"./video3.jpg":3709,"./video3.mp4":5130,"./video4.jpg":3238,"./video4.mp4":973,"./videoplay.png":5572};function d(e){var i=s(e);return o(i)}function s(e){if(!o.o(t,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return t[e]}d.keys=function(){return Object.keys(t)},d.resolve=s,e.exports=d,d.id=3837},2202:function(e,i,o){"use strict";e.exports=o.p+"img/video1.6839aaad.jpg"},3631:function(e,i,o){"use strict";e.exports=o.p+"media/video1.100ddfdd.mp4"},3421:function(e,i,o){"use strict";e.exports=o.p+"img/video2.458427c9.jpg"},6096:function(e,i,o){"use strict";e.exports=o.p+"media/video2.03cfd875.mp4"},3709:function(e,i,o){"use strict";e.exports=o.p+"img/video3.b5e14725.jpg"},5130:function(e,i,o){"use strict";e.exports=o.p+"media/video3.c58dfa2e.mp4"},3238:function(e,i,o){"use strict";e.exports=o.p+"img/video4.a881c3ef.jpg"},973:function(e,i,o){"use strict";e.exports=o.p+"media/video4.fb18555e.mp4"},5572:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAYAAADh5qNwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO6SURBVHgB3ZpLaxNRFMf/qSXFYlxYH6RQqItGKhbEiPXVGksLhTYV3bV72w/gBxBxp+iui3QjumgWbsRmobgJgihCQOhC6KpQnKEtkWKsYKDUeyb3lulkZjKZufPyB7cZkjTw45z7PDcBiezv76fYS5a3NGsZ1lK8CWqsqfx1jbUKtUQiUYMkEvAIF5lmLYeGjFtIbgUNQRUecC3FZCgSc2gIpSCXEmsFt3JtS/HIzLM2C/9xJdeWFBPKsZeHkB8ZOxTWlphYyek/OJIKODpWFJnYMydfbCnF+w79WAbhQ1FbaJWOtlJcqMBaL6JDSzFLqYgKCWzF7KTeIppCApq4F8wm7Q6zbzOhB4i2EEF9fN7sgyYpJpRHuKNcO8zyaeYQh9Iv4v3ICkq/GX0aGiNF4YyTECHm0AMOIsWjtIL4khejoT5S84g3c+JBk+JRykMSW9voWt9AN4Jlmi/n0MnfuAxJrHxA+uPnRr8cGkR1cgzq6R78hf+IfV1RpN80JPGlgjPiefU7ep4u4gKJblXRBf/J0Z8O3RZcCvU6jhjfo8gVXiLz6St64C9Z8qFISROy49dvJN+8Q//j5xjyub9lA5MSkNziCwy+eo1+n1IySwNFKPsk6m/URq9ByU/A00GLgTRJBbk1b4L627dVnBy7CeXGFVThnXOUfmmEjOhvTxZxXkJKHiOpUCOlZ7uKozQFeBxIUh2IID8UHIUHIimVGYCnI2gaKOgHIpGCfb2o3ZnExqkTqMM9tUhIHU+hPjWOjUtD2IF3VJKiA4xQNobJLuwNX8TW+Ag2u7uxBzlokZI58Tlm4Cx27k55TjUz1kiKSiiBHbRQv5kYhTqY8TYY2FARUr5DqZa7CnXiFjbhL5VOOoVhy3USk7KwTSaxZ9x+jAxDldxvrNAqkmLnW4YkqdvXobwvo4+eKdVm72Hdh35jhXZwpJ0m8Y0iHTNLGdq3fyK5u4vO/j78QbBoJ0raioIfBDouarWCIhOCUMnsiGwZ8aYgHg6kuGUR8aSkL+sYF7RLgG/zh19Qraqgf+OQFO9bjxAvlozFt6atB/tCGfFJw6JZ1d60ksiHeAppFIrXVihMaMbsA9NNIk9DqiYqiCZazdfqw/+yOm+7nef/uIDoREwUr93fo9DDi9uh3nhBY6RrOeW0ezeJalj3EWw6atMMH5Ud4eYWGfUzqjpKK9LZ4Dg6erze9/NDTiyulwO772eEy1Elkgp3Xm9mltFYx3laqnmW0mO4Qyvuz6bRfIdW3J+lSEi/Q/sPQag9Sy9+L/EAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=618.f77b90f2.js.map