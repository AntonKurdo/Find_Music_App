(this.webpackJsonptest2=this.webpackJsonptest2||[]).push([[0],{30:function(e,t,a){e.exports=a(43)},36:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),i=(a(35),a(36),a(5)),o=a(12);var s=a(10),m=Object(s.b)((function(e){return{playlist:e.playlistReducer}}),(function(e){return{}}))((function(e){var t=e.playlist;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"}," \ud83c\udfa7FindMusic"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",activeClassName:"active",to:"/",exact:!0},"Welcome")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",activeClassName:"active",to:"/tracks"},"Find Tracks")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",activeClassName:"active",to:"/playlist"},"My Playlist (",t.length,")")))))})),u=Object(s.b)((function(e){return{playlist:e.playlistReducer}}),(function(e){return{onRemoveTrackFromPlaylist:function(t){e({type:"REMOVE_TRACK_FROM_PLAYLIST",payload:t})}}}))((function(e){var t=this,a=e.playlist,n=e.onRemoveTrackFromPlaylist;function l(e,t){navigator.clipboard.writeText(e+" - "+t)}function c(e){n(e)}return r.a.createElement("div",{className:"playlist_cont"},r.a.createElement("h2",null,"My Playlist (",a.length,")"),r.a.createElement("div",{className:"list-group container"},a.map((function(e,a){return r.a.createElement("div",{key:e.id,className:"playlistItem_cont"},r.a.createElement("a",{href:"#",key:a,className:"list-group-item list-group-item-action"},e.artist," - ",e.title),r.a.createElement("div",{className:"playlist_btn_cont"},r.a.createElement("button",{onClick:l.bind(t,e.artist,e.title),className:"btn btn-success playlist_btn_copy"},"Copy track title"),r.a.createElement("button",{onClick:c.bind(t,e.id),className:"btn btn-danger "},"Remove")))}))))}));var d=function(e,t){return{type:"CHANGE_PAGE",payload:{index:e,page:t}}},p=Object(s.b)((function(e){return{page:e.changePage.page,total:function(){for(var t=[],a=1;a<=Math.ceil(e.dataReducer.total/25);a++)t.push(a);return t}}}),(function(e){return{onChangePage:function(t,a){e(d(t,a))},onPutEmptyData:function(){e({type:"PUT_DATA",payload:{data:[]}})}}}))((function(e){var t=this,a=e.page,n=e.total,l=e.onChangePage,c=e.onPutEmptyData;function i(e){l(1!==e?25*e-25:0,e),c()}return r.a.createElement("nav",{className:"paginationCont"},r.a.createElement("ul",{className:"pagination"},n().map((function(e){return r.a.createElement("li",{onClick:i.bind(t,e),key:e,className:"page-item"},r.a.createElement("button",{className:a===e?"page-link _active":"page-link",disabled:a===e},e))}))))})),E=new Audio;var b=Object(s.b)((function(e){return{data:e.dataReducer,index:e.changePage.index}}),(function(e){return{onLoadData:function(){e({type:"LOAD_DATA"})},onChangeInp:function(t){e({type:"CHANGE_INPUT",payload:t})},onAddTrackToPlayList:function(t,a,n){e({type:"ADD_TRACK_TO_PLAYLIST",payload:{id:t,title:a,artist:n}})},onChangePage:function(){e(d(0,1))}}}))((function(e){var t=this,a=e.data,l=e.index,c=e.onLoadData,s=e.onChangeInp,d=e.onAddTrackToPlayList,b=e.onChangePage,v=Object(n.useRef)("");function g(){window.location.reload()}function f(e,t,a){d(e,t,a)}function y(e){E.src="",E.pause(),E.src=e,E.play()}return Object(n.useEffect)((function(){c()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0},r.a.createElement("div",{className:"welcome_body"},r.a.createElement("h1",{onClick:g,style:{textAlign:"center"}}," \ud83c\udfb5Find_Music_App\ud83c\udfb5"),r.a.createElement("img",{src:"https://i.pinimg.com/originals/ab/45/bb/ab45bb4451536652faca51ae4f42d5dd.gif"}),r.a.createElement(o.b,{to:"/tracks"},r.a.createElement("button",{className:"btn btn-success btn_start"},"Start")))),r.a.createElement(i.a,{path:"/tracks"},r.a.createElement("div",{style:{minHeight:"766px"}},r.a.createElement("h1",{onClick:g,style:{textAlign:"center"}}," \ud83c\udfb5Find_Music_App\ud83c\udfb5"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{ref:v,type:"text",className:"form-control",id:"exampleInputEmail1",placeholder:"Eminem",autoComplete:"off"})),r.a.createElement("button",{onClick:function(e){b(),""!==v.current.value&&s(v.current.value),e.preventDefault(),c()},type:"submit",className:"btn btn-primary"},"Search"),r.a.createElement("div",{onClick:function(){v.current.value=""},className:"btn_remove"},"\u274c")),0===a.data.length?r.a.createElement("div",{style:{width:"4rem",height:"4rem",position:"relative",left:"47%",top:"50px"},className:"spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("table",{className:"table container",style:{marginTop:"20px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Img"),r.a.createElement("th",{scope:"col"},"Artist"),r.a.createElement("th",{scope:"col"},"Track"),r.a.createElement("th",{scope:"col"},"Duration"),r.a.createElement("th",{scope:"col"},"Preview(00:30)"))),r.a.createElement("tbody",null,a.data.map((function(e,a){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",{style:{verticalAlign:"middle"},scope:"row"},0===l?a+1:a+1+l),r.a.createElement("td",null,r.a.createElement("img",{src:e.album.cover_small})),r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("a",{href:e.artist.link,target:"_blank"},e.artist.name)),r.a.createElement("td",{style:{verticalAlign:"middle"}},e.title),r.a.createElement("td",{style:{verticalAlign:"middle"}},3===(Math.floor(e.duration/60)+":"+e.duration%60).length?Math.floor(e.duration/60)+":0"+e.duration%60:Math.floor(e.duration/60)+":"+e.duration%60),r.a.createElement("td",{style:{verticalAlign:"middle",position:"relative"}},r.a.createElement("button",{onClick:y.bind(t,e.preview),className:"btn btn-success"},"\ud83c\udfb5Play"),r.a.createElement("button",{onClick:f.bind(t,e.id,e.title,e.artist.name),title:"Add track to playlist",className:"btn_add"},"\u2795")))}))))),r.a.createElement(p,null)),r.a.createElement(i.a,{path:"/playlist"},r.a.createElement(u,null))),r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement("h5",{style:{textAlign:"center",marginBottom:"0"}}," \ud83c\udfb5FindMusic"),r.a.createElement("small",null,"Listen tops with us")),r.a.createElement("a",{href:"https://github.com/AntonKurdo",target:"_blank"},"Anton Kurdo")))})),v=a(27),g=a(29),f=a(11),y={data:[]};var h=a(28),N=[],A={index:0,page:1};var _=Object(f.c)({dataReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;return"PUT_DATA"===t.type?t.payload:(t.type,e)},requsetReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Eminem",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_INPUT"===t.type?t.payload:e},playlistReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;if("ADD_TRACK_TO_PLAYLIST"===t.type)return e=[].concat(Object(h.a)(e),[t.payload]),localStorage.setItem("musicApp",JSON.stringify(e)),e;if("REMOVE_TRACK_FROM_PLAYLIST"===t.type)return e=e.filter((function(e){return e.id!==t.payload})),localStorage.setItem("musicApp",JSON.stringify(e)),e;if(localStorage.musicApp){var a=localStorage.getItem("musicApp");return JSON.parse(a)}return e},changePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return"CHANGE_PAGE"===t.type?t.payload:e}}),k=a(13),O=a.n(k),T=a(14),x=function(e){return{type:"PUT_DATA",payload:e}},C=O.a.mark(R),P=O.a.mark(j),w=O.a.mark(D);function R(){var e,t,a,n;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=function(){return fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=".concat(e,"&index=").concat(t),{method:"GET",headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"919e0ab4b7mshcd2ba5c4ff5283bp1b3962jsnc3eb8a01a2e1"}}).then((function(e){return e.json()}))},r.next=3,Object(T.c)((function(e){return e.requsetReducer}));case 3:return e=r.sent,r.next=6,Object(T.c)((function(e){return e.changePage.index}));case 6:return t=r.sent,r.next=9,Object(T.a)(a);case 9:return n=r.sent,r.next=12,Object(T.b)(x(n));case 12:case"end":return r.stop()}}),C)}function j(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)("LOAD_DATA",R);case 2:case"end":return e.stop()}}),P)}function D(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)("CHANGE_PAGE",R);case 2:case"end":return e.stop()}}),w)}var L=Object(v.createLogger)(),S=Object(g.a)(),I=Object(f.e)(_,Object(f.d)(Object(f.a)(L,S),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));S.run(j),S.run(D),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(s.a,{store:I},r.a.createElement(b,null)))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c64705d4.chunk.js.map