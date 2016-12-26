!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/build/",e(0)}([function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(11),s=function(t){function e(){r(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,u.Platform.utils.randomNumberBetween(60,window.innerWidth-60),u.Platform.utils.randomNumberBetween(60,window.innerHeight-60),12,12));return t.color=u.Platform.utils.randomColorHex(),t.setVectorX(u.Platform.utils.randomNumberBetween(-5,5)),t.setVectorY(u.Platform.utils.randomNumberBetween(-5,5)),t}return i(e,t),c(e,[{key:"draw",value:function(t){t.beginPath(),t.arc(6,6,6,2*Math.PI,!1),t.fillStyle=this.color,t.fill(),t.closePath()}}]),e}(u.View.Item.with("vectors","collisions")),f=u.View.createLayer();setTimeout(function(){for(var t=0;t<50;t++)f.addEntity(new s)}),u.Platform.loop.add(function(){for(var t=f.getCollisions(),e=0,n=t.length;e<n;){var r=t[e++].sort(function(t,e){return t.getVectorMagnitude()<e.getVectorMagnitude()}),o=a(r,2),i=o[0],c=o[1];i.reflectVector(c)}}).add(function(){for(var t=f.getEntities(),e=void 0,n=0,r=t.length;n<r;){e=t[n++];var o=e.getCoordinates(),i=o.dx,a=o.dy,c=[e.getVectorX(),e.getVectorY()],u=c[0],s=c[1];(i+u+e.getWidth()>f.getWidth()||i+u<=0)&&e.reverseVectorX(),(a+s+e.getHeight()>f.getHeight()||a+s<=0)&&e.reverseVectorY()}}).start()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={};n.fpsCounter=!0,n.debugEnabled=!1,n.performanceFeedback=!1,e.config=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Platform=void 0;var r=n(1),o=n(6),i=n(3),a=n(4),c={};c.config=r.config,c.input=o.input,c.loop=i.loop,c.utils=a.utils,e.Platform=c},function(t,e,n){(function(t){"use strict";function t(){if(a){r.config.performanceFeedback&&(u=performance.now());for(var e=0,n=i.length;e<n;)i[e++].fn();r.config.performanceFeedback&&(s=performance.now(),console.log("Frame took %sms",s-u)),r.config.fpsCounter&&c++,window.requestAnimationFrame(t)}}Object.defineProperty(e,"__esModule",{value:!0}),e.loop=void 0;var r=n(1),o={},i=[],a=void 0,c=0;o.add=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;if("function"!=typeof t)throw Error("Only functions may be added to the loop");return i.push({fn:t,priority:e}),i.sort(function(t,e){return t.priority>e.priority}),o},o.start=function(){return a=!0,window.requestAnimationFrame(t),o},o.stop=function(){return a=!1,o};var u=void 0,s=void 0;window.onerror=o.stop,r.config.fpsCounter&&setInterval(function(){console.debug("%s FPS",c),c=0},1e3),e.loop=o}).call(e,n(12))},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={},r=0,o="0123456789ABCDEF";n.generateUid=function(){return(r++).toString(36)},n.randomX=function(){return n.randomNumberBetween(100,window.innerWidth-100)},n.randomY=function(){return n.randomNumberBetween(100,window.innerHeight-100)},n.randomNumberBetween=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},n.randomColorHex=function(){for(var t="#",e=0;e<6;e++)t+=o[Math.floor(16*Math.random())];return t},n.getDotProduct=function(t,e){for(var n=0,r=t.length;r--;)n+=t[r]*e[r];return n},n.pythagoras=function(t,e){return Math.sqrt(t*t+e*e)},n.getAngleBetweenThreePoints=function(t,e,r){var o=[e.dx-t.dx,e.dy-t.dy],i=[r.dx-e.dx,r.dy-e.dy];return Math.acos(-n.getDotProduct(o,i)/(n.pythagoras.apply(n,o)*n.pythagoras.apply(n,i)))},n.getCenterBetweenTwoPoints=function(t,e){return{dx:(t.dx+e.dx)/2,dy:(t.dy+e.dy)/2}},n.degreesToRadians=function(t){return t*Math.PI/180},n.radiansToDegrees=function(t){return 180*t/Math.PI},e.utils=n},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Item=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(7),a=n(8),c=function(){function t(e,n,o,i,a){r(this,t),this._canvas=a||document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),a||(this._canvas.width=o,this._canvas.height=i),this.dx=e,this.dy=n}return o(t,[{key:"getCanvas",value:function(){return this._canvas}},{key:"getContext",value:function(){return this._ctx}},{key:"getWidth",value:function(){return this._canvas.width}},{key:"getHeight",value:function(){return this._canvas.height}},{key:"getCoordinates",value:function(){return{dx:this.dx,dy:this.dy}}},{key:"setCoordinates",value:function(t){var e=t.dx,n=t.dy;this.dx=e,this.dy=n}},{key:"getDxCoordinate",value:function(){return this.dx}},{key:"setDxCoordinate",value:function(t){this.dx=t}},{key:"getDyCoordinate",value:function(){return this.dy}},{key:"setDyCoordinate",value:function(t){this.dy=t}},{key:"getCenterCoordinates",value:function(){return{dx:this.dx+this._canvas.width/2,dy:this.dy+this._canvas.height/2}}},{key:"getHorizontalCenterCoordinate",value:function(){return this.dx+this._canvas.width/2}},{key:"getVerticalCenterCoordinate",value:function(){return this.dy+this._canvas.height/2}},{key:"getMinHorizontalCoordinate",value:function(){return this.dx}},{key:"getMaxHorizontalCoordinate",value:function(){return this.dx+this._canvas.width}},{key:"getMinVerticalCoordinate",value:function(){return this.dy}},{key:"getMaxVerticalCoordinate",value:function(){return this._dy+this._canvas.height}},{key:"Class",get:function(){return t}}],[{key:"with",value:function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.reduce(function(e,n){if(!t[n])throw Error("Property not found on class");return t[n](e)},this)}},{key:"collisions",get:function(){return i.collisions}},{key:"vectors",get:function(){return a.vectors}}]),t}();e.Item=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={upArrow:!1,downArrow:!1,leftArrow:!1,rightArrow:!1};document.addEventListener("keydown",function(t){switch(t.keyCode){case 38:case 87:n.upArrow=!0;break;case 40:case 83:n.downArrow=!0;break;case 37:case 65:n.leftArrow=!0;break;case 39:case 68:n.rightArrow=!0}},!1),document.addEventListener("keyup",function(t){switch(t.keyCode){case 38:case 87:n.upArrow=!1;break;case 40:case 83:n.downArrow=!1;break;case 37:case 65:n.leftArrow=!1;break;case 39:case 68:n.rightArrow=!1}},!1),e.input=n},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),c(e,[{key:"setCoordinates",value:function(t){var n=this;f.push({tick:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setCoordinates",n).call(n,t)},vector:t})}}]),e}(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.collisions=void 0;var c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)},s=n(2),f=[];s.Platform.loop.add(function(){for(var t=void 0;f.length;)t=f.shift(),t.tick(t.vector)},100),e.collisions=a},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return function(t){function e(){r(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.vectorX=0,t.vectorY=0,s.Platform.loop.add(function(){var e=t.getCoordinates(),n=e.dx,r=e.dy;t.setCoordinates({dx:n+t.vectorX,dy:r+t.vectorY})}),t}return i(e,t),c(e,[{key:"getVectorX",value:function(){return this.vectorX}},{key:"setVectorX",value:function(t){this.vectorX=t}},{key:"getVectorY",value:function(){return this.vectorY}},{key:"setVectorY",value:function(t){this.vectorY=t}},{key:"reverseVector",value:function(){this.vectorX=-this.vectorX,this.vectorY=-this.vectorY}},{key:"reverseVectorX",value:function(){this.vectorX=-this.vectorX}},{key:"reverseVectorY",value:function(){this.vectorY=-this.vectorY}},{key:"reflectVector",value:function(t){if(!(t instanceof e))throw Error("Item must include the Vector class");this.vectorX=[t.vectorX,t.vectorX=this.vectorX][0],this.vectorY=[t.vectorY,t.vectorY=this.vectorY][0]}},{key:"reflectVectorX",value:function(t){if(!(t instanceof e))throw Error("Item must include the Vector class");this.vectorX=[t.vectorX,t.vectorX=this.vectorX][0]}},{key:"reflectVectorY",value:function(t){if(!(t instanceof e))throw Error("Item must include the Vector class");this.vectorY=[t.vectorY,t.vectorY=this.vectorY][0]}},{key:"getVectorMagnitude",value:function(){return s.Platform.utils.pythagoras(this.vectorX,this.vectorY)}},{key:"getVectorDirection",value:function(){var t=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"getCenterCoordinates",this).call(this);return s.Platform.utils.getAngleBetweenThreePoints({dx:t.dx,dy:t.dy+1},t,{dx:t.dx+this.vectorX,dy:t.dy+this.vectorY})}}]),e}(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.vectors=void 0;var c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)},s=n(2);e.vectors=a},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Layer=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(5),a=n(1),c=n(3),u=n(4),s=function(){function t(e,n){var o=this;r(this,t),this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),this._entities=[],this.resizeCanvas(e,n),document.body.appendChild(this._canvas),c.loop.add(function(){o._ctx.clearRect(0,0,o._canvas.width,o._canvas.height);for(var t=void 0,e=0,n=o._entities.length;e<n;){t=o._entities[e++];var r=t.getContext().canvas,i=t.getCoordinates(),c=i.dx,u=i.dy;a.config.debugEnabled&&t._ctx.strokeRect(0,0,r.width,r.height),o._ctx.drawImage(r,c,u)}})}return o(t,[{key:"getCanvas",value:function(){return this._canvas}},{key:"getContext",value:function(){return this._ctx}},{key:"getWidth",value:function(){return this._canvas.width}},{key:"getHeight",value:function(){return this._canvas.height}},{key:"addEntity",value:function(t){if(!(t instanceof i.Item))throw Error("Entities must be valid");return t.draw&&t.draw(t._ctx),this._entities[this._entities.length]=t,this}},{key:"getEntities",value:function(){return this._entities}},{key:"getCollisions",value:function(){for(var t=[],e=0,n=this._entities.length;e<n;e++)for(var r=e+1;r<n;r++){var o=this._entities[e],i=this._entities[r],a=o.getWidth()/2,c=i.getWidth()/2,s=o.getCenterCoordinates(),f=s.dx,l=s.dy,d=i.getCenterCoordinates(),h=d.dx,v=d.dy;u.utils.pythagoras(h-f,v-l)<a+c&&(t[t.length]=[o,i])}return t}},{key:"clearCanvas",value:function(){this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height)}},{key:"resizeCanvas",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.innerWidth,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.innerHeight;if(this._boundariesLocked)throw Error("Cannot resize canvas when boundaries are locked");this._canvas.width=this._width=t,this._canvas.height=this._height=e}},{key:"lockBoundaries",value:function(){this._boundariesLocked=!0}},{key:"unlockBoundaries",value:function(){this._boundariesLocked=!1}},{key:"Class",get:function(){return t}}]),t}();e.Layer=s},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.View=void 0;var a=n(5),c=n(9),u={Item:a.Item,Layer:c.Layer},s=[];u.createLayer=function(t,e,n){var r=s[s.length]=new c.Layer(e,n);return r},u.createItem=function(t){var e=t.draw,n=void 0===e?Function:e,c=t.coordinates,u=c.dx,s=c.dy,f=t.dimensions,l=f.width,d=f.height;return new(function(t){function e(t,n,i,a,c){r(this,e);var u=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,a,c));return u.draw=t,u}return i(e,t),e}(a.Item))(n,u,s,l,d)},u.getLayer=function(t){for(var e=0,n=s.length;e<n;e++)if(s[e].uid===t)return s[e]},u.getLayers=function(){return s},window.addEventListener("resize",function(){for(var t=void 0,e=0,n=s.length;e<n;e++)t=s[e],t._boundariesLocked||t.resizeCanvas()},!1),e.View=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);Object.defineProperty(e,"Platform",{enumerable:!0,get:function(){return r.Platform}});var o=n(10);Object.defineProperty(e,"View",{enumerable:!0,get:function(){return o.View}})},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){y&&h&&(y=!1,h.length?v=h.concat(v):p=-1,v.length&&c())}function c(){if(!y){var t=o(a);y=!0;for(var e=v.length;e;){for(h=v,v=[];++p<e;)h&&h[p].run();p=-1,e=v.length}h=null,y=!1,i(t)}}function u(t,e){this.fun=t,this.array=e}function s(){}var f,l,d=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var h,v=[],y=!1,p=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];v.push(new u(t,e)),1!==v.length||y||o(c)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}}]);