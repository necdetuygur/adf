"use strict";(self.webpackChunkng_adf=self.webpackChunkng_adf||[]).push([[227],{227:(l,r,e)=>{e.r(r),e.d(r,{ShareWeb:()=>s});var n=e(467),t=e(83);class s extends t.E_{canShare(){return(0,n.A)(function*(){return typeof navigator>"u"||!navigator.share?{value:!1}:{value:!0}})()}share(a){var u=this;return(0,n.A)(function*(){if(typeof navigator>"u"||!navigator.share)throw u.unavailable("Share API not available in this browser");return yield navigator.share({title:a.title,text:a.text,url:a.url}),{}})()}}}}]);