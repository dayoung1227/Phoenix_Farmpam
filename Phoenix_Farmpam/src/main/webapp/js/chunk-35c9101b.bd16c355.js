(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35c9101b"],{"377e":function(t,e,o){"use strict";o("f422")},7748:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mygoodsupdate container"},[t._m(0),o("div",{staticClass:"row"},[o("div",{staticClass:"container"},[o("a",{attrs:{id:"imageLink",href:"javascript:"},on:{click:function(e){return t.clickImage()}}},[o("svg",{staticClass:"bi bi-plus",attrs:{id:"itemImage",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16"}},[o("path",{attrs:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}})]),o("img",{attrs:{id:"itemImage",src:t.goods.item_image}})]),o("form",{ref:"itemupdateform",attrs:{action:"/item/update.do",method:"post"},on:{submit:function(e){return e.preventDefault(),t.updateItem()}}},["empty"!=t.goods.item_image?o("input",{attrs:{type:"hidden",name:"item_image"},domProps:{value:t.goods.item_image}}):o("input",{attrs:{type:"hidden",name:"item_image",value:"empty"}}),o("div",[o("label",{staticClass:"form-label",attrs:{for:"item_title"}},[t._v("상품명")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.goods.item_title,expression:"goods.item_title"}],staticClass:"form-control",attrs:{type:"text",name:"item_title",id:"item_title",placeholder:"상품명을 적어주세요!"},domProps:{value:t.goods.item_title},on:{input:function(e){e.target.composing||t.$set(t.goods,"item_title",e.target.value)}}})]),o("div",[o("label",{staticClass:"form-label",attrs:{for:"item_content"}},[t._v("설명")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.goods.item_content,expression:"goods.item_content"}],staticClass:"form-control",attrs:{maxlength:"30",type:"text",name:"item_content",id:"item_content",placeholder:"간단한 설명을 적어주세요!"},domProps:{value:t.goods.item_content},on:{input:function(e){e.target.composing||t.$set(t.goods,"item_content",e.target.value)}}})]),o("div",[o("label",{staticClass:"form-label",attrs:{for:"item_price"}},[t._v("가격")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.goods.item_price,expression:"goods.item_price"}],staticClass:"form-control",attrs:{type:"number",name:"item_price",id:"item_price",placeholder:"상품의 가격"},domProps:{value:t.goods.item_price},on:{input:function(e){e.target.composing||t.$set(t.goods,"item_price",e.target.value)}}})]),o("div",[o("label",{staticClass:"form-label",attrs:{for:"item_stock"}},[t._v("재고")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.goods.item_stock,expression:"goods.item_stock"}],staticClass:"form-control",attrs:{type:"number",name:"item_stock",id:"item_stock",placeholder:"상품의 재고"},domProps:{value:t.goods.item_stock},on:{input:function(e){e.target.composing||t.$set(t.goods,"item_stock",e.target.value)}}})]),o("div",[o("label",{staticClass:"form-label",attrs:{for:"item_category_top_ref"}},[t._v("카테고리 선택")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.category_top,expression:"category_top"}],staticClass:"form-select",attrs:{"aria-label":"Default select example",id:"item_category_top_ref",name:"item_category_top_ref"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.category_top=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"0"}},[t._v("상품의 카테고리를 설정해 주세요")]),o("option",{attrs:{value:"1"}},[t._v("과일")]),o("option",{attrs:{value:"2"}},[t._v("채소")]),o("option",{attrs:{value:"3"}},[t._v("쌀/잡곡")]),o("option",{attrs:{value:"4"}},[t._v("축산/계란")])])]),0!=this.category_top?o("div",[o("label",{staticClass:"form-label",attrs:{for:"item_category_top_idx"}},[t._v("세부 카테고리 선택")]),o("select",{staticClass:"form-select",attrs:{"aria-label":"Default select example",id:"item_category_top_idx",name:"item_category_top_idx"}},[o("option",{attrs:{selected:""}},[t._v("세부 카테고리를 설정해 주세요")]),t._l(t.category_lows,(function(e,a){return o("option",{key:a,domProps:{value:e.item_category_top_idx}},[t._v(t._s(e.item_category_low_name))])}))],2)]):t._e(),o("button",{attrs:{type:"submit"}},[t._v("상품 수정")])]),t._v(" 이미지 넣기 "),o("form",{ref:"updateimageform",attrs:{action:"/item/private/ajax_image_upload.do",method:"post",id:"imageForm",enctype:"multipart/form-data"}},[o("input",{ref:"updateimage",attrs:{type:"file",name:"image",id:"image",accept:".jpg, .jpeg, .png, .JPG, .JPEG, .gif"},on:{change:function(e){return t.updateImage()}}})])])])])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("h1",[t._v("상품 수정하기")])])}],s=(o("b0c0"),o("2f62")),r={name:"MygoodsUpdate",computed:Object(s["b"])(["logintoken"]),data:function(){return{goods:{},category_top:0,category_top_idx:0,category_lows:[]}},watch:{goods:function(t){this.goods=t,this.category_top=t.item_category_top_ref,this.category_top_idx=t.item_category_top_idx},category_top:function(t){this.category_top=t,this.getCategory()}},created:function(){this.logintoken.token||this.$router.push("/shop/shoppage"),this.getItem(this.$route.params.itemidx)},methods:{clickImage:function(){this.$refs.updateimage.click()},updateImage:function(){var t=this,e=new FormData(this.$refs.updateimageform);this.$http.post("/item/private/ajax_image_upload.do",e).then((function(e){console.log(e.data),t.goods.item_image=window.location.pathname.substring(0,window.location.pathname.indexOf("/",2))+e.data.imagePath}))},updateItem:function(){var t=this;if(this.category_top<=0)alert("카테고리를 선택해 주세요");else{var e=new FormData(this.$refs.itemupdateform);console.log(this.goods.item_idx),e.append("email",this.logintoken.email),e.append("item_idx",this.goods.item_idx),this.$http.post("/item/private/update.do",e).then((function(e){console.log(e.data),e.data.updateItem?(alert("수정했습니다."),t.$router.push({name:"MyShop",params:{pagename:"shoppage",farmer_email:t.logintoken.email,farmer_name:t.logintoken.name}})):alert("수정 실패")})).catch((function(t){console.log(t)}))}},getItem:function(t){var e=this;this.$http.get("/vue/item/detail.do",{params:{item_idx:t}}).then((function(t){console.log(t.data),e.goods=t.data.goodsData})).catch((function(t){console.log(t)}))},getCategory:function(){var t=this;this.$http.get("/vue/categorylow.do",{params:{category_ref:this.category_top}}).then((function(e){console.log(e.data),t.category_lows=e.data.category_low}))}}},n=r,m=(o("377e"),o("2877")),c=Object(m["a"])(n,a,i,!1,null,"bb8ca5ce",null);e["default"]=c.exports},b0c0:function(t,e,o){var a=o("83ab"),i=o("9bf2").f,s=Function.prototype,r=s.toString,n=/^\s*function ([^ (]*)/,m="name";a&&!(m in s)&&i(s,m,{configurable:!0,get:function(){try{return r.call(this).match(n)[1]}catch(t){return""}}})},f422:function(t,e,o){}}]);
//# sourceMappingURL=chunk-35c9101b.bd16c355.js.map