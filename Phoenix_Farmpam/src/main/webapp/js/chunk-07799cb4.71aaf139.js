(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07799cb4"],{3114:function(t,e,a){},"5df0":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"insertgoods container"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"container"},[a("a",{attrs:{id:"imageLink",href:"javascript:"},on:{click:function(e){return t.clickImage()}}},[a("svg",{staticClass:"bi bi-plus",attrs:{id:"itemImage",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}})]),(t.goods.item_image,a("img",{attrs:{id:"itemImage",src:t.goods.item_image}}))]),a("form",{ref:"itmeinsertform",attrs:{action:"/item/insert.do",method:"post"},on:{submit:function(e){return e.preventDefault(),t.uploadItem()}}},[a("input",{attrs:{type:"hidden",name:"item_image",value:"empty"}}),t._m(1),t._m(2),t._m(3),t._m(4),a("div",[a("label",{staticClass:"form-label",attrs:{for:"item_category_top_ref"}},[t._v("카테고리 선택")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.category_top,expression:"category_top"}],staticClass:"form-select",attrs:{"aria-label":"Default select example",id:"item_category_top_ref",name:"item_category_top_ref"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.category_top=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:"",value:"0"}},[t._v("상품의 카테고리를 설정해 주세요")]),a("option",{attrs:{value:"1"}},[t._v("과일")]),a("option",{attrs:{value:"2"}},[t._v("채소")]),a("option",{attrs:{value:"3"}},[t._v("쌀/잡곡")]),a("option",{attrs:{value:"4"}},[t._v("축산/계란")])])]),0!=this.category_top?a("div",[a("label",{staticClass:"form-label",attrs:{for:"item_category_top_idx"}},[t._v("세부 카테고리 선택")]),a("select",{staticClass:"form-select",attrs:{"aria-label":"Default select example",id:"item_category_top_idx",name:"item_category_top_idx"}},[a("option",{attrs:{selected:""}},[t._v("세부 카테고리를 설정해 주세요")]),t._l(t.category_lows,(function(e,o){return a("option",{key:o,domProps:{value:e.item_category_top_idx}},[t._v(t._s(e.item_category_low_name))])}))],2)]):t._e(),a("button",{attrs:{type:"submit"}},[t._v("상품 추가")])]),a("form",{ref:"insertimageform",attrs:{action:"/item/private/ajax_image_upload.do",method:"post",id:"imageForm",enctype:"multipart/form-data"}},[a("input",{ref:"insertimage",attrs:{type:"file",name:"image",id:"image",accept:".jpg, .jpeg, .png, .JPG, .JPEG, .gif"},on:{change:function(e){return t.insertImage()}}})])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("h1",[t._v("상품 추가하기")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticClass:"form-label",attrs:{for:"item_title"}},[t._v("상품명")]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"item_title",id:"item_title",placeholder:"상품명을 적어주세요!"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticClass:"form-label",attrs:{for:"item_content"}},[t._v("설명")]),a("input",{staticClass:"form-control",attrs:{maxlength:"30",type:"text",name:"item_content",id:"item_content",placeholder:"간단한 설명을 적어주세요!"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticClass:"form-label",attrs:{for:"item_price"}},[t._v("가격")]),a("input",{staticClass:"form-control",attrs:{type:"number",name:"item_price",id:"item_price",placeholder:"상품의 가격"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticClass:"form-label",attrs:{for:"item_stock"}},[t._v("재고")]),a("input",{staticClass:"form-control",attrs:{type:"number",name:"item_stock",id:"item_stock",placeholder:"상품의 재고"}})])}],r=(a("b0c0"),a("2f62")),n={name:"MyGoodsInsert",computed:Object(r["b"])(["logintoken"]),data:function(){return{category_top:0,category_lows:[],goods:{item_image:"empty"}}},watch:{category_top:function(t){this.category_top=t,console.log(this.category_top),this.getCategory()}},created:function(){this.logintoken.token||this.$router.push("/shop/shoppage")},methods:{insertImage:function(){var t=this,e=new FormData(this.$refs.insertimageform);this.$http.post("/item/private/ajax_image_upload.do",e).then((function(e){console.log(e.data),t.goods.item_image=window.location.pathname.substring(0,window.location.pathname.indexOf("/",2))+e.data.imagePath}))},clickImage:function(){this.$refs.insertimage.click()},uploadItem:function(){var t=this,e=new FormData(this.$refs.itmeinsertform);e.append("farmer_email",this.logintoken.email),this.$http.post("/item/private/insert.do",e).then((function(e){console.log(e.data),e.data.insertItem&&(alert("추가했습니다."),t.$router.push({name:"MyShop",params:{pagename:"shoppage",farmer_email:t.logintoken.email,farmer_name:t.logintoken.name}}))})).catch((function(t){console.log(t)}))},getCategory:function(){var t=this;this.$http.get("/vue/categorylow.do",{params:{category_ref:this.category_top}}).then((function(e){console.log(e.data),t.category_lows=e.data.category_low}))}}},s=n,c=(a("9923"),a("2877")),l=Object(c["a"])(s,o,i,!1,null,"a385e74a",null);e["default"]=l.exports},9923:function(t,e,a){"use strict";a("3114")},b0c0:function(t,e,a){var o=a("83ab"),i=a("9bf2").f,r=Function.prototype,n=r.toString,s=/^\s*function ([^ (]*)/,c="name";o&&!(c in r)&&i(r,c,{configurable:!0,get:function(){try{return n.call(this).match(s)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-07799cb4.71aaf139.js.map