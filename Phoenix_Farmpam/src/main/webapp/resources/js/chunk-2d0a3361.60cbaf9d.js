(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3361"],{"00e0":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},o=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"contack_root"},[e("h1",[a._v("this is contack")]),e("h2",[e("a",{attrs:{href:"https://github.com/hs-keko/Phoenix_Farmpam"}},[a._v(" github ")])]),e("div",{staticStyle:{width:"500px",height:"400px"},attrs:{id:"map"}})])}],i={mounted:function(){window.kakao&&window.kakao.maps?this.initMap():this.addKakaoMapScript()},methods:{addKakaoMapScript:function(){var a=this,t=document.createElement("script");t.onload=function(){return kakao.maps.load(a.initMap)},t.src="http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=26ad37c5085865890cd42009cb01cd8d",document.head.appendChild(t)},initMap:function(){var a=document.getElementById("map"),t={center:new kakao.maps.LatLng(37.49895130987428,127.03154537658446),level:3},e=new kakao.maps.Map(a,t),n=new kakao.maps.LatLng(37.49895130987428,127.03154537658446),o=new kakao.maps.Marker({position:n});o.setMap(e)}}},s=i,c=e("2877"),p=Object(c["a"])(s,n,o,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0a3361.60cbaf9d.js.map