"use strict";(self.webpackChunksukee=self.webpackChunksukee||[]).push([[891],{5546:function(P,j,n){n.r(j);var O=n(39502),T=n(98738),y=n(11506),A=n(67099),b=n(64149),C=n(30888),f=n(10504),v=n(84266),E=n(67294),_=n(85893);function h(){var p=(0,v.eL)(),o=p.texts;return(0,_.jsx)(v.dY,{children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"spin",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#spin",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Spin"]}),(0,_.jsx)("p",{children:o[0].value})]}),(0,_.jsx)(v.Z1,{items:[{demo:{id:"components-spin-demo-basic"},previewerProps:{title:"basic usage.",description:"<p>basic usage.</p>",filename:"components/spin/demo/basic.tsx"}},{demo:{id:"components-spin-demo-size"},previewerProps:{title:"size",description:"<p>size\u3002</p>",filename:"components/spin/demo/size.tsx"}},{demo:{id:"components-spin-demo-container"},previewerProps:{title:"Inside a container",description:"<p>Spin in a container.</p>",filename:"components/spin/demo/container.tsx"}}]})]})})}j.default=h},39502:function(P,j,n){var O=n(42122),T=n.n(O),y=n(27424),A=n.n(y),b=n(84266),C=n(67294),f=n(30888),v=n(85893),E={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var s=this,u=[];return Object.entries(e.properties||{}).forEach(function(a){var t,r=A()(a,2),i=r[0],c=r[1];u.push("".concat(i).concat((t=e.required)!==null&&t!==void 0&&t.includes(i)?"":"?",": ").concat(c.type==="object"?"object":s.toString(c)))}),u.length?"{ ".concat(u.join("; ")," }"):"{}"},array:function(e){if(e.items){var s=this.getValidClassName(e.items);return s?"".concat(s,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var s=this,u=e.signature;if(!u)return"Function";var a="oneOf"in u?u.oneOf:[u];return a.map(function(t){return"".concat(t.isAsync?"async ":"","(").concat(t.arguments.map(function(r){return"".concat(r.key,": ").concat(s.toString(r))}).join(", "),") => ").concat(s.toString(t.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(s){return JSON.stringify(s)}).join(" | ")},oneOf:function(e){var s=this;return e.oneOf.map(function(u){return s.getValidClassName(u)||s.toString(u)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},_=function(e){var s=useState(function(){return E.toString(e)}),u=_slicedToArray(s,2),a=u[0],t=u[1];return useEffect(function(){t(E.toString(e))},[e]),_jsx("code",{children:a})},h=function(e){var s,u=useRouteMeta(),a=u.frontmatter,t=useAtomAssets(),r=t.components,i=e.id||a.atomId,c=useIntl();if(!i)throw new Error("`id` properties if required for API component!");var l=r==null?void 0:r[i];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:c.formatMessage({id:"api.component.name"})}),_jsx("th",{children:c.formatMessage({id:"api.component.description"})}),_jsx("th",{children:c.formatMessage({id:"api.component.type"})}),_jsx("th",{children:c.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:l&&(s=l.propsConfig)!==null&&s!==void 0&&s.properties?Object.entries(l.propsConfig.properties).map(function(d){var m,M=_slicedToArray(d,2),g=M[0],x=M[1];return _jsxs("tr",{children:[_jsx("td",{children:g}),_jsx("td",{children:(x==null?void 0:x.description)||"--"}),_jsx("td",{children:_jsx(_,_objectSpread({},x))}),_jsx("td",{children:_jsx("code",{children:(m=l.propsConfig.required)!==null&&m!==void 0&&m.includes(g)?c.formatMessage({id:"api.component.required"}):JSON.stringify(x.default)||"--"})})]},g)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:c.formatMessage({id:"api.component.".concat(r?"not.found":"unavailable")},{id:i})})})})]})})},p=null},98738:function(P,j,n){var O=n(42122),T=n(67294),y=n(85893),A=function(f){return _jsx("span",_objectSpread({className:"dumi-default-badge"},f))},b=null},30888:function(P,j,n){var O=n(42122),T=n(27424),y=n(70215),A=n(96486),b=n(67294),C=n(85893),f=null,v=function(h){var p=h.children,o=_objectWithoutProperties(h,f),e=useRef(null),s=useState(!1),u=_slicedToArray(s,2),a=u[0],t=u[1],r=useState(!1),i=_slicedToArray(r,2),c=i[0],l=i[1];return useEffect(function(){var d=e.current;if(d){var m=throttle(function(){t(d.scrollLeft>0),l(d.scrollLeft<d.scrollWidth-d.offsetWidth)},100);return m(),d.addEventListener("scroll",m),window.addEventListener("resize",m),function(){d.removeEventListener("scroll",m),window.removeEventListener("resize",m)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":a||void 0,"data-right-folded":c||void 0,children:_jsx("table",_objectSpread(_objectSpread({},o),{},{children:p}))})})},E=null},10504:function(P,j,n){var O=n(42122),T=n(27424),y=n(861),A=n(3190),b=n(67294),C=n(85893);function f(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(a).forEach(function(i,c){var l="".concat(t?"".concat(t,"-"):"").concat(c);switch(i==null?void 0:i.type){case"ul":{var d,m=((d=r[r.length-1])===null||d===void 0?void 0:d.children)||r,M=f(i.props.children||[],l);m.push.apply(m,_toConsumableArray(M));break}case"li":{var g=f(i.props.children,l);r.push({title:[].concat(i.props.children).filter(function(x){return x.type!=="ul"}),key:l,children:g,isLeaf:!g.length});break}default:}}),r}var v=function(t){var r=useState(f(t)),i=_slicedToArray(r,2),c=i[0],l=i[1];return useEffect(function(){l(f(t))},[t]),c},E=function(t){var r=t.isLeaf,i=t.expanded;return r?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):i?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},_=function(t){var r=t.isLeaf,i=t.expanded;return r?_jsx("span",{className:"tree-switcher-leaf-line"}):i?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},h=function(){return{height:0,opacity:0}},p=function(t){var r=t.scrollHeight;return{height:r,opacity:1}},o=function(t){return{height:t?t.offsetHeight:0}},e=function(t,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},s={motionName:"ant-motion-collapse",onAppearStart:h,onEnterStart:h,onAppearActive:p,onEnterActive:p,onLeaveStart:o,onLeaveActive:h,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},u=function(a){var t=v(a.children),r=createRef(),i=function(l,d){var m=d.isLeaf;m||l.shiftKey||l.metaKey||l.ctrlKey||r.current.onNodeExpand(l,d)};return _jsx(Tree,{className:"dumi-default-tree",icon:E,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},s),{},{motionAppear:!1}),onClick:i,treeData:[{key:"0",title:a.title||"<root>",children:t}],defaultExpandAll:!0,switcherIcon:_})}}}]);