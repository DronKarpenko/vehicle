(self["webpackChunkvehicle"]=self["webpackChunkvehicle"]||[]).push([[636],{2363:function(t,e,o){"use strict";o.d(e,{Z:function(){return p}});var i=o(3396),a=o(7139);const s={class:"page-title"},n={class:"container"},r={class:"page-title__name"};function l(t,e,o,l,g,u){return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",n,[(0,i._)("h1",r,(0,a.zw)(o.pageTitle),1)])])}var g={name:"page-title",props:{pageTitle:{type:String,default:""}}},u=o(89);const b=(0,u.Z)(g,[["render",l]]);var p=b},8636:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return R}});var i=o(3396);function a(t,e,o,a,s,n){const r=(0,i.up)("Header"),l=(0,i.up)("page-title"),g=(0,i.up)("blog-items"),u=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(r),(0,i._)("main",null,[(0,i.Wm)(l,{pageTitle:"Our blog"}),(0,i.Wm)(g)]),(0,i.Wm)(u)],64)}var s=o(1548),n=o(3854),r=o(2363);const l={class:"blog-items"},g={class:"container blog-items__container"};function u(t,e,o,a,s,n){const r=(0,i.up)("v-pagination");return(0,i.wg)(),(0,i.iD)("section",l,[(0,i._)("div",g,[(0,i.Wm)(r,{class:"blog-pagination",listData:s.blogPosts},null,8,["listData"])])])}var b=o(7139);const p={class:"v-blogItem"},d=["src"],c={class:"v-blogItem__descr"},h={class:"v-blogItem__data"},y={class:"v-blogItem__title"};function m(t,e,a,s,n,r){return(0,i.wg)(),(0,i.iD)("div",p,[(0,i._)("img",{src:o(9985)("./"+a.blogItem_data.photo),alt:"blog1",class:"v-blogItem__photo"},null,8,d),(0,i._)("div",c,[(0,i._)("p",h,(0,b.zw)(a.blogItem_data.data),1),(0,i._)("h3",y,(0,b.zw)(a.blogItem_data.title),1)])])}var v={name:"v-blogItem",props:{blogItem_data:{type:Object,default(){return{}}}}},f=o(89);const w=(0,f.Z)(v,[["render",m]]);var _=w;const j={class:"v-pagination"},W={class:"pagination-posts"},H=["src"],z={class:"v-blogItem__descr"},I={class:"v-blogItem__data"},D={class:"v-blogItem__title"},M={class:"pagination-buttons"},k={class:"page-buttons"},N=["onClick"];function C(t,e,a,s,n,r){const l=(0,i.up)("router-link"),g=(0,i.up)("v-btn");return(0,i.wg)(),(0,i.iD)("div",j,[(0,i._)("ul",W,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.paginatedData,(e=>((0,i.wg)(),(0,i.iD)("li",null,[(0,i.WI)(t.$slots,"default",{},(()=>[(0,i.Wm)(l,{to:"/one-blog"},{default:(0,i.w5)((()=>[(0,i._)("img",{src:o(9985)("./"+e.photo),alt:"blog",class:"v-blogItem__photo"},null,8,H),(0,i._)("div",z,[(0,i._)("p",I,(0,b.zw)(e.data),1),(0,i._)("h3",D,(0,b.zw)(e.title),1)])])),_:2},1024)]),!0)])))),256))]),(0,i._)("div",M,[(0,i.Wm)(g,{disabled:0===n.pageNumber,onClick:r.prevPage,title:"Previous"},null,8,["disabled","onClick"]),(0,i._)("div",k,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.createPageButton,(t=>((0,i.wg)(),(0,i.iD)("button",{class:(0,b.C_)(["pagination-circle",{active:t.id===this.pageNumber}]),key:t.id,onClick:e=>this.pageNumber=t.id},null,10,N)))),128))]),(0,i.Wm)(g,{disabled:n.pageNumber>=r.pageCount-1,onClick:r.nextPage,title:"Next"},null,8,["disabled","onClick"])])])}var P=o(3078),x={name:"v-pagination",components:{VBtn:P.Z},data(){return{pageNumber:0,windowsWidth:0}},created(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed(){window.removeEventListener("resize",this.handleResize)},props:{listData:{type:Array,required:!0},size:{type:Number,required:!1,default:9},mobileSize:{type:Number,required:!1,default:6}},methods:{nextPage(){this.pageNumber++},prevPage(){this.pageNumber--},handleResize(){this.windowsWidth=window.innerWidth}},computed:{pageCount(){let t=this.listData.length,e=this.size,o=this.mobileSize;return this.windowsWidth<=1024?Math.ceil(t/o):Math.ceil(t/e)},paginatedData(){let t,e;return this.windowsWidth<=1024?(t=this.pageNumber*this.mobileSize,e=t+this.mobileSize):(t=this.pageNumber*this.size,e=t+this.size),this.listData.slice(t,e)},createPageButton(){let t=[];for(let e=0;e<this.pageCount;e++)t.push({id:e});return t}}};const Z=(0,f.Z)(x,[["render",C],["__scopeId","data-v-1bbf80fc"]]);var O=Z,B={name:"blogItems",components:{VPagination:O,VBlogItem:_},data(){return{blogPosts:[{id:1,photo:"blog1.jpg",data:"10 May 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:2,photo:"blog2.jpg",data:"15 May 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:3,photo:"blog3.jpg",data:"24 May 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:4,photo:"blog4.jpg",data:"10 June 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:5,photo:"blog5.jpg",data:"9 April 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:6,photo:"blog6.jpg",data:"11 May 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:7,photo:"blog7.jpg",data:"10 May 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:8,photo:"blog8.jpg",data:"10 May 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:9,photo:"blog9.jpg",data:"10 May 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:10,photo:"blog4.jpg",data:"10 June 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:11,photo:"blog5.jpg",data:"9 April 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:12,photo:"blog6.jpg",data:"11 May 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:13,photo:"blog7.jpg",data:"10 May 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:14,photo:"blog1.jpg",data:"10 May 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:15,photo:"blog2.jpg",data:"15 May 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:16,photo:"blog3.jpg",data:"24 May 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:17,photo:"blog4.jpg",data:"10 June 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:18,photo:"blog5.jpg",data:"9 April 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:19,photo:"blog6.jpg",data:"11 May 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:20,photo:"blog7.jpg",data:"10 May 2022",title:"How to save on buying a car? Why is it better to buy from us"},{id:21,photo:"blog8.jpg",data:"10 May 2022",title:"How to save on buying a car? Why is it better to buy from us"}]}}};const S=(0,f.Z)(B,[["render",u]]);var T=S,A={name:"blog-page",components:{BlogItems:T,PageTitle:r.Z,Footer:n.Z,Header:s.Z}};const E=(0,f.Z)(A,[["render",a]]);var R=E},9985:function(t,e,o){var i={"./blog1.jpg":2893,"./blog2.jpg":2454,"./blog3.jpg":907,"./blog4.jpg":4199,"./blog5.jpg":4982,"./blog6.jpg":2173,"./blog7.jpg":8277,"./blog8.jpg":6239,"./blog9.jpg":9008};function a(t){var e=s(t);return o(e)}function s(t){if(!o.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=s,t.exports=a,a.id=9985},4199:function(t,e,o){"use strict";t.exports=o.p+"img/blog4.4ab95686.jpg"},4982:function(t,e,o){"use strict";t.exports=o.p+"img/blog5.37f005f4.jpg"},2173:function(t,e,o){"use strict";t.exports=o.p+"img/blog6.f88005be.jpg"},8277:function(t,e,o){"use strict";t.exports=o.p+"img/blog7.1f1f8f65.jpg"},6239:function(t,e,o){"use strict";t.exports=o.p+"img/blog8.2b9654ee.jpg"},9008:function(t,e,o){"use strict";t.exports=o.p+"img/blog9.231efa3a.jpg"}}]);
//# sourceMappingURL=636.7a127b0c.js.map