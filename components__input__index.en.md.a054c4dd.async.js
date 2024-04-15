"use strict";(self.webpackChunksukee=self.webpackChunksukee||[]).push([[198],{23747:function(A,j,t){t.r(j);var O=t(39502),T=t(98738),y=t(11506),P=t(67099),b=t(64149),C=t(30888),m=t(10504),v=t(84266),E=t(67294),_=t(85893);function h(){var p=(0,v.eL)(),o=p.texts;return(0,_.jsx)(v.dY,{children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"input",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#input",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Input"]}),(0,_.jsx)("p",{children:o[0].value})]}),(0,_.jsx)(v.Z1,{items:[{demo:{id:"components-input-demo-basic"},previewerProps:{title:"Basic usage.",description:"<p>Basic usage.</p>",filename:"components/input/demo/basic.tsx"}},{demo:{id:"components-input-demo-addon"},previewerProps:{title:"Pre / Post tab",description:"<p>Using pre &#x26; post tabs example.</p>",filename:"components/input/demo/addon.tsx"}}]})]})})}j.default=h},39502:function(A,j,t){var O=t(42122),T=t.n(O),y=t(27424),P=t.n(y),b=t(84266),C=t(67294),m=t(30888),v=t(85893),E={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var a=this,u=[];return Object.entries(e.properties||{}).forEach(function(s){var n,r=P()(s,2),i=r[0],c=r[1];u.push("".concat(i).concat((n=e.required)!==null&&n!==void 0&&n.includes(i)?"":"?",": ").concat(c.type==="object"?"object":a.toString(c)))}),u.length?"{ ".concat(u.join("; ")," }"):"{}"},array:function(e){if(e.items){var a=this.getValidClassName(e.items);return a?"".concat(a,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var a=this,u=e.signature;if(!u)return"Function";var s="oneOf"in u?u.oneOf:[u];return s.map(function(n){return"".concat(n.isAsync?"async ":"","(").concat(n.arguments.map(function(r){return"".concat(r.key,": ").concat(a.toString(r))}).join(", "),") => ").concat(a.toString(n.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(a){return JSON.stringify(a)}).join(" | ")},oneOf:function(e){var a=this;return e.oneOf.map(function(u){return a.getValidClassName(u)||a.toString(u)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},_=function(e){var a=useState(function(){return E.toString(e)}),u=_slicedToArray(a,2),s=u[0],n=u[1];return useEffect(function(){n(E.toString(e))},[e]),_jsx("code",{children:s})},h=function(e){var a,u=useRouteMeta(),s=u.frontmatter,n=useAtomAssets(),r=n.components,i=e.id||s.atomId,c=useIntl();if(!i)throw new Error("`id` properties if required for API component!");var l=r==null?void 0:r[i];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:c.formatMessage({id:"api.component.name"})}),_jsx("th",{children:c.formatMessage({id:"api.component.description"})}),_jsx("th",{children:c.formatMessage({id:"api.component.type"})}),_jsx("th",{children:c.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:l&&(a=l.propsConfig)!==null&&a!==void 0&&a.properties?Object.entries(l.propsConfig.properties).map(function(d){var f,M=_slicedToArray(d,2),g=M[0],x=M[1];return _jsxs("tr",{children:[_jsx("td",{children:g}),_jsx("td",{children:(x==null?void 0:x.description)||"--"}),_jsx("td",{children:_jsx(_,_objectSpread({},x))}),_jsx("td",{children:_jsx("code",{children:(f=l.propsConfig.required)!==null&&f!==void 0&&f.includes(g)?c.formatMessage({id:"api.component.required"}):JSON.stringify(x.default)||"--"})})]},g)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:c.formatMessage({id:"api.component.".concat(r?"not.found":"unavailable")},{id:i})})})})]})})},p=null},98738:function(A,j,t){var O=t(42122),T=t(67294),y=t(85893),P=function(m){return _jsx("span",_objectSpread({className:"dumi-default-badge"},m))},b=null},30888:function(A,j,t){var O=t(42122),T=t(27424),y=t(70215),P=t(96486),b=t(67294),C=t(85893),m=null,v=function(h){var p=h.children,o=_objectWithoutProperties(h,m),e=useRef(null),a=useState(!1),u=_slicedToArray(a,2),s=u[0],n=u[1],r=useState(!1),i=_slicedToArray(r,2),c=i[0],l=i[1];return useEffect(function(){var d=e.current;if(d){var f=throttle(function(){n(d.scrollLeft>0),l(d.scrollLeft<d.scrollWidth-d.offsetWidth)},100);return f(),d.addEventListener("scroll",f),window.addEventListener("resize",f),function(){d.removeEventListener("scroll",f),window.removeEventListener("resize",f)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":s||void 0,"data-right-folded":c||void 0,children:_jsx("table",_objectSpread(_objectSpread({},o),{},{children:p}))})})},E=null},10504:function(A,j,t){var O=t(42122),T=t(27424),y=t(861),P=t(3190),b=t(67294),C=t(85893);function m(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(s).forEach(function(i,c){var l="".concat(n?"".concat(n,"-"):"").concat(c);switch(i==null?void 0:i.type){case"ul":{var d,f=((d=r[r.length-1])===null||d===void 0?void 0:d.children)||r,M=m(i.props.children||[],l);f.push.apply(f,_toConsumableArray(M));break}case"li":{var g=m(i.props.children,l);r.push({title:[].concat(i.props.children).filter(function(x){return x.type!=="ul"}),key:l,children:g,isLeaf:!g.length});break}default:}}),r}var v=function(n){var r=useState(m(n)),i=_slicedToArray(r,2),c=i[0],l=i[1];return useEffect(function(){l(m(n))},[n]),c},E=function(n){var r=n.isLeaf,i=n.expanded;return r?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):i?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},_=function(n){var r=n.isLeaf,i=n.expanded;return r?_jsx("span",{className:"tree-switcher-leaf-line"}):i?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},h=function(){return{height:0,opacity:0}},p=function(n){var r=n.scrollHeight;return{height:r,opacity:1}},o=function(n){return{height:n?n.offsetHeight:0}},e=function(n,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},a={motionName:"ant-motion-collapse",onAppearStart:h,onEnterStart:h,onAppearActive:p,onEnterActive:p,onLeaveStart:o,onLeaveActive:h,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},u=function(s){var n=v(s.children),r=createRef(),i=function(l,d){var f=d.isLeaf;f||l.shiftKey||l.metaKey||l.ctrlKey||r.current.onNodeExpand(l,d)};return _jsx(Tree,{className:"dumi-default-tree",icon:E,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},a),{},{motionAppear:!1}),onClick:i,treeData:[{key:"0",title:s.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:_})}}}]);