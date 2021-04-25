(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4783"],{"0728":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",{staticClass:"mt-3"},[e._v("Request a TexturePack")]),a("hr"),a("form",{on:{submit:function(t){return t.preventDefault(),e.sendRequest(t)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[e._v("Name of the Texture Pack")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.request.name,expression:"request.name"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"TexturePack Name",required:""},domProps:{value:e.request.name},on:{input:function(t){t.target.composing||e.$set(e.request,"name",t.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("Self explanatory.")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[e._v("Creator of the Texture Pack")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.request.creator,expression:"request.creator"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Creator Name",required:""},domProps:{value:e.request.creator},on:{input:function(t){t.target.composing||e.$set(e.request,"creator",t.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("Credit given to the person who actually made the pack.")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[e._v("Video preview of the Texture Pack")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.request.videoURL,expression:"request.videoURL"}],staticClass:"form-control",attrs:{type:"url",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"eg: https://www.youtube.com/watch?v=dQw4w9WgXcQ",required:""},domProps:{value:e.request.videoURL},on:{input:function(t){t.target.composing||e.$set(e.request,"videoURL",t.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("YouTube video to show the Texture Pack.")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[e._v("Download Link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.request.downloadURL,expression:"request.downloadURL"}],staticClass:"form-control",attrs:{type:"url",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"eg: https://www.mediafire.com/file/d8bu142ly27bemc/ssohv2.0.zip/file",required:""},domProps:{value:e.request.downloadURL},on:{input:function(t){t.target.composing||e.$set(e.request,"downloadURL",t.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("Download link for PC.")])]),a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit"}},[e._v("Submit")]),e._m(0)])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"alert alert-dismissible alert-info mt-3"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"}},[e._v("×")]),e._v(" Note: If the page doesn't reload automatically try again in about 6-8 minutes. ")])}],o="http://localhost:9000/requests",i={data:function(){return{err:"",requests:[],request:{name:"",creator:"",videoURL:"",downloadURL:""}}},mounted:function(){},methods:{sendRequest:function(){var e=this;fetch(o).then((function(e){return e.json()})).then((function(t){e.requests=t})),fetch(o,{method:"POST",body:JSON.stringify(this.request),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){if(t.details){var a=t.details.map((function(e){return e.request})).join(". ");e.err=a}else location.reload(),e.err="",e.showMessageForm=!1,e.requests.push(t)}))}}},l=i,n=a("2877"),u=Object(n["a"])(l,r,s,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0a4783.e1f22b2a.js.map