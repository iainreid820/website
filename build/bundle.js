!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/build/",t(0)}([function(e,t,n){"use strict";var i=n(1),r=n(6),a=i.View.createLayer(),o=a.getWidth()/2,c=a.getHeight()/2,s=2,u=-2,l=30;window.addEventListener("resize",function(){o=a.getWidth()/2,c=a.getHeight()/2},!1),(0,i.loop)(function(){a.clearCanvas(),(o+2*l>a.getWidth()||o<=0)&&(s=-s),(c+2*l>a.getHeight()||c<=0)&&(u=-u),r.ball.coordinates(o,c),r.ball.draw(a),o+=s,c+=u,r.box.coordinates(10,10),r.box.draw(a)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(8);Object.defineProperty(t,"Game",{enumerable:!0,get:function(){return i.Game}});var r=n(9);Object.defineProperty(t,"View",{enumerable:!0,get:function(){return r.View}});var a=void 0;window.onerror=function(){clearInterval(a)};t.loop=function(e){a=setInterval(function(){console.log("tick"),e()},1e3/60)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.config={debugEnabled:1}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t,i){return n(this,e),this._canvas=document.getElementById("viewCanvas"),this._ctx=this._canvas.getContext("2d"),this.resizeCanvas(t,i)}return i(e,[{key:"getWidth",value:function(){return this._canvas.width}},{key:"getHeight",value:function(){return this._canvas.height}},{key:"lockBoundaries",value:function(){this._boundariesLocked=!0}},{key:"clearCanvas",value:function(){this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height)}},{key:"resizeCanvas",value:function(e,t){if(this._boundariesLocked)throw Error("Cannot resize canvas when boundaries are locked");this._canvas.width=e||window.innerWidth,this._canvas.height=t||window.innerHeight}}]),e}();t.Layer=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ball=void 0;var i=n(1);t.ball=new i.Game.Item(function(e){e.beginPath(),e.arc(30,30,30,2*Math.PI,!1),e.fillStyle="#FF0000",e.fill(),e.closePath()},60,60)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.box=void 0;var i=n(1);t.box=new i.Game.Item(function(e){e.beginPath(),e.rect(0,0,40,40),e.fillStyle="#000",e.fill(),e.closePath()},40,40)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4);Object.defineProperty(t,"ball",{enumerable:!0,get:function(){return i.ball}});var r=n(5);Object.defineProperty(t,"box",{enumerable:!0,get:function(){return r.box}})},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(2),o=n(3),c=function(){function e(t,n,r){i(this,e),this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),this._canvas.width=n,this._canvas.height=r,t(this._ctx)}return r(e,[{key:"coordinates",value:function(e,t){this._coordinates={x:e,y:t}}},{key:"draw",value:function(e){if(!(e instanceof o.Layer))throw Error("Only valid Layers may be drawn upon");if(!this._coordinates)throw Error("No coordinates have been specified");a.config.debugEnabled&&(e._ctx.beginPath(),e._ctx.strokeRect(this._coordinates.x,this._coordinates.y,this._ctx.canvas.width,this._ctx.canvas.height),e._ctx.closePath()),e._ctx.drawImage(this._ctx.canvas,this._coordinates.x,this._coordinates.y)}}]),e}();t.Item=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Game=t.config=void 0;var i=n(2),r=n(7);t.config=i.config;t.Game={Item:r.Item}},function(e,t,n){"use strict";function i(){return o[o.length]=new a.Layer}function r(){return o}Object.defineProperty(t,"__esModule",{value:!0}),t.View=void 0;var a=n(3),o=[];window.addEventListener("resize",function(){for(var e=void 0,t=0,n=o.length;t<n;t++)e=o[t],e._boundariesLocked||e.resizeCanvas()},!1);t.View={createLayer:i,getLayers:r}}]);