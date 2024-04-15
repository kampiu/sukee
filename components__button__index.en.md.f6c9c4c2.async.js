"use strict";(self.webpackChunksukee=self.webpackChunksukee||[]).push([[364],{22897:function(T,j,t){t.r(j);var b=t(39502),A=t(98738),y=t(11506),O=t(67099),P=t(64149),M=t(30888),f=t(10504),v=t(84266),E=t(67294),m=t(85893);function h(){var p=(0,v.eL)(),u=p.texts;return(0,m.jsx)(v.dY,{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"markdown",children:(0,m.jsxs)("h1",{id:"button",children:[(0,m.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#button",children:(0,m.jsx)("span",{className:"icon icon-link"})}),"Button"]})}),(0,m.jsx)(v.Z1,{items:[{demo:{id:"components-button-demo-type"},previewerProps:{title:"Type",description:"<p>There are five types of buttons: main button, secondary button, dashed button, text button, and link button. The main button can appear at most once in the same operating area.</p>",filename:"components/button/demo/type.tsx"}},{demo:{id:"components-button-demo-disabled"},previewerProps:{title:"Disabled",description:"<p>Disabled state\u3002</p>",filename:"components/button/demo/disabled.tsx"}},{demo:{id:"components-button-demo-theme"},previewerProps:{title:"Theme",description:"<p>Multiple themes.</p>",filename:"components/button/demo/theme.tsx"}}]})]})})}j.default=h},39502:function(T,j,t){var b=t(42122),A=t.n(b),y=t(27424),O=t.n(y),P=t(84266),M=t(67294),f=t(30888),v=t(85893),E={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var a=this,o=[];return Object.entries(e.properties||{}).forEach(function(s){var n,r=O()(s,2),i=r[0],d=r[1];o.push("".concat(i).concat((n=e.required)!==null&&n!==void 0&&n.includes(i)?"":"?",": ").concat(d.type==="object"?"object":a.toString(d)))}),o.length?"{ ".concat(o.join("; ")," }"):"{}"},array:function(e){if(e.items){var a=this.getValidClassName(e.items);return a?"".concat(a,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var a=this,o=e.signature;if(!o)return"Function";var s="oneOf"in o?o.oneOf:[o];return s.map(function(n){return"".concat(n.isAsync?"async ":"","(").concat(n.arguments.map(function(r){return"".concat(r.key,": ").concat(a.toString(r))}).join(", "),") => ").concat(a.toString(n.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(a){return JSON.stringify(a)}).join(" | ")},oneOf:function(e){var a=this;return e.oneOf.map(function(o){return a.getValidClassName(o)||a.toString(o)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},m=function(e){var a=useState(function(){return E.toString(e)}),o=_slicedToArray(a,2),s=o[0],n=o[1];return useEffect(function(){n(E.toString(e))},[e]),_jsx("code",{children:s})},h=function(e){var a,o=useRouteMeta(),s=o.frontmatter,n=useAtomAssets(),r=n.components,i=e.id||s.atomId,d=useIntl();if(!i)throw new Error("`id` properties if required for API component!");var l=r==null?void 0:r[i];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:d.formatMessage({id:"api.component.name"})}),_jsx("th",{children:d.formatMessage({id:"api.component.description"})}),_jsx("th",{children:d.formatMessage({id:"api.component.type"})}),_jsx("th",{children:d.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:l&&(a=l.propsConfig)!==null&&a!==void 0&&a.properties?Object.entries(l.propsConfig.properties).map(function(c){var _,C=_slicedToArray(c,2),g=C[0],x=C[1];return _jsxs("tr",{children:[_jsx("td",{children:g}),_jsx("td",{children:(x==null?void 0:x.description)||"--"}),_jsx("td",{children:_jsx(m,_objectSpread({},x))}),_jsx("td",{children:_jsx("code",{children:(_=l.propsConfig.required)!==null&&_!==void 0&&_.includes(g)?d.formatMessage({id:"api.component.required"}):JSON.stringify(x.default)||"--"})})]},g)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:d.formatMessage({id:"api.component.".concat(r?"not.found":"unavailable")},{id:i})})})})]})})},p=null},98738:function(T,j,t){var b=t(42122),A=t(67294),y=t(85893),O=function(f){return _jsx("span",_objectSpread({className:"dumi-default-badge"},f))},P=null},30888:function(T,j,t){var b=t(42122),A=t(27424),y=t(70215),O=t(96486),P=t(67294),M=t(85893),f=null,v=function(h){var p=h.children,u=_objectWithoutProperties(h,f),e=useRef(null),a=useState(!1),o=_slicedToArray(a,2),s=o[0],n=o[1],r=useState(!1),i=_slicedToArray(r,2),d=i[0],l=i[1];return useEffect(function(){var c=e.current;if(c){var _=throttle(function(){n(c.scrollLeft>0),l(c.scrollLeft<c.scrollWidth-c.offsetWidth)},100);return _(),c.addEventListener("scroll",_),window.addEventListener("resize",_),function(){c.removeEventListener("scroll",_),window.removeEventListener("resize",_)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":s||void 0,"data-right-folded":d||void 0,children:_jsx("table",_objectSpread(_objectSpread({},u),{},{children:p}))})})},E=null},10504:function(T,j,t){var b=t(42122),A=t(27424),y=t(861),O=t(3190),P=t(67294),M=t(85893);function f(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(s).forEach(function(i,d){var l="".concat(n?"".concat(n,"-"):"").concat(d);switch(i==null?void 0:i.type){case"ul":{var c,_=((c=r[r.length-1])===null||c===void 0?void 0:c.children)||r,C=f(i.props.children||[],l);_.push.apply(_,_toConsumableArray(C));break}case"li":{var g=f(i.props.children,l);r.push({title:[].concat(i.props.children).filter(function(x){return x.type!=="ul"}),key:l,children:g,isLeaf:!g.length});break}default:}}),r}var v=function(n){var r=useState(f(n)),i=_slicedToArray(r,2),d=i[0],l=i[1];return useEffect(function(){l(f(n))},[n]),d},E=function(n){var r=n.isLeaf,i=n.expanded;return r?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):i?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},m=function(n){var r=n.isLeaf,i=n.expanded;return r?_jsx("span",{className:"tree-switcher-leaf-line"}):i?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},h=function(){return{height:0,opacity:0}},p=function(n){var r=n.scrollHeight;return{height:r,opacity:1}},u=function(n){return{height:n?n.offsetHeight:0}},e=function(n,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},a={motionName:"ant-motion-collapse",onAppearStart:h,onEnterStart:h,onAppearActive:p,onEnterActive:p,onLeaveStart:u,onLeaveActive:h,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},o=function(s){var n=v(s.children),r=createRef(),i=function(l,c){var _=c.isLeaf;_||l.shiftKey||l.metaKey||l.ctrlKey||r.current.onNodeExpand(l,c)};return _jsx(Tree,{className:"dumi-default-tree",icon:E,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},a),{},{motionAppear:!1}),onClick:i,treeData:[{key:"0",title:s.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:m})}}}]);