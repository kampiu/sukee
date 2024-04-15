"use strict";(self.webpackChunksukee=self.webpackChunksukee||[]).push([[25],{47562:function(C,j,t){t.r(j);var y=t(39502),M=t(98738),A=t(11506),T=t(67099),p=t(64149),P=t(30888),m=t(10504),g=t(84266),E=t(67294),a=t(85893);function h(){var v=(0,g.eL)(),s=v.texts;return(0,a.jsx)(g.dY,{children:(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"markdown",children:[(0,a.jsxs)("h1",{id:"getting-started",children:[(0,a.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started",children:(0,a.jsx)("span",{className:"icon icon-link"})}),"Getting Started"]}),(0,a.jsx)("blockquote",{children:(0,a.jsx)("p",{children:s[0].value})}),(0,a.jsxs)("h2",{id:"install",children:[(0,a.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#install",children:(0,a.jsx)("span",{className:"icon icon-link"})}),"Install"]}),(0,a.jsx)(p.Z,{lang:"shell",children:s[1].value}),(0,a.jsxs)("h2",{id:"import",children:[(0,a.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#import",children:(0,a.jsx)("span",{className:"icon icon-link"})}),"Import"]}),(0,a.jsx)(p.Z,{lang:"jsx",children:s[2].value})]})})})}j.default=h},39502:function(C,j,t){var y=t(42122),M=t.n(y),A=t(27424),T=t.n(A),p=t(84266),P=t(67294),m=t(30888),g=t(85893),E={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?"".concat(e.const):"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var o=this,u=[];return Object.entries(e.properties||{}).forEach(function(l){var n,r=T()(l,2),i=r[0],d=r[1];u.push("".concat(i).concat((n=e.required)!==null&&n!==void 0&&n.includes(i)?"":"?",": ").concat(d.type==="object"?"object":o.toString(d)))}),u.length?"{ ".concat(u.join("; ")," }"):"{}"},array:function(e){if(e.items){var o=this.getValidClassName(e.items);return o?"".concat(o,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var o=this,u=e.signature;if(!u)return"Function";var l="oneOf"in u?u.oneOf:[u];return l.map(function(n){return"".concat(n.isAsync?"async ":"","(").concat(n.arguments.map(function(r){return"".concat(r.key,": ").concat(o.toString(r))}).join(", "),") => ").concat(o.toString(n.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(o){return JSON.stringify(o)}).join(" | ")},oneOf:function(e){var o=this;return e.oneOf.map(function(u){return o.getValidClassName(u)||o.toString(u)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},a=function(e){var o=useState(function(){return E.toString(e)}),u=_slicedToArray(o,2),l=u[0],n=u[1];return useEffect(function(){n(E.toString(e))},[e]),_jsx("code",{children:l})},h=function(e){var o,u=useRouteMeta(),l=u.frontmatter,n=useAtomAssets(),r=n.components,i=e.id||l.atomId,d=useIntl();if(!i)throw new Error("`id` properties if required for API component!");var c=r==null?void 0:r[i];return _jsx("div",{className:"markdown",children:_jsxs(Table,{children:[_jsx("thead",{children:_jsxs("tr",{children:[_jsx("th",{children:d.formatMessage({id:"api.component.name"})}),_jsx("th",{children:d.formatMessage({id:"api.component.description"})}),_jsx("th",{children:d.formatMessage({id:"api.component.type"})}),_jsx("th",{children:d.formatMessage({id:"api.component.default"})})]})}),_jsx("tbody",{children:c&&(o=c.propsConfig)!==null&&o!==void 0&&o.properties?Object.entries(c.propsConfig.properties).map(function(_){var f,b=_slicedToArray(_,2),O=b[0],x=b[1];return _jsxs("tr",{children:[_jsx("td",{children:O}),_jsx("td",{children:(x==null?void 0:x.description)||"--"}),_jsx("td",{children:_jsx(a,_objectSpread({},x))}),_jsx("td",{children:_jsx("code",{children:(f=c.propsConfig.required)!==null&&f!==void 0&&f.includes(O)?d.formatMessage({id:"api.component.required"}):JSON.stringify(x.default)||"--"})})]},O)}):_jsx("tr",{children:_jsx("td",{colSpan:4,children:d.formatMessage({id:"api.component.".concat(r?"not.found":"unavailable")},{id:i})})})})]})})},v=null},98738:function(C,j,t){var y=t(42122),M=t(67294),A=t(85893),T=function(m){return _jsx("span",_objectSpread({className:"dumi-default-badge"},m))},p=null},30888:function(C,j,t){var y=t(42122),M=t(27424),A=t(70215),T=t(96486),p=t(67294),P=t(85893),m=null,g=function(h){var v=h.children,s=_objectWithoutProperties(h,m),e=useRef(null),o=useState(!1),u=_slicedToArray(o,2),l=u[0],n=u[1],r=useState(!1),i=_slicedToArray(r,2),d=i[0],c=i[1];return useEffect(function(){var _=e.current;if(_){var f=throttle(function(){n(_.scrollLeft>0),c(_.scrollLeft<_.scrollWidth-_.offsetWidth)},100);return f(),_.addEventListener("scroll",f),window.addEventListener("resize",f),function(){_.removeEventListener("scroll",f),window.removeEventListener("resize",f)}}},[]),_jsx("div",{className:"dumi-default-table",children:_jsx("div",{className:"dumi-default-table-content",ref:e,"data-left-folded":l||void 0,"data-right-folded":d||void 0,children:_jsx("table",_objectSpread(_objectSpread({},s),{},{children:v}))})})},E=null},10504:function(C,j,t){var y=t(42122),M=t(27424),A=t(861),T=t(3190),p=t(67294),P=t(85893);function m(l){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(l).forEach(function(i,d){var c="".concat(n?"".concat(n,"-"):"").concat(d);switch(i==null?void 0:i.type){case"ul":{var _,f=((_=r[r.length-1])===null||_===void 0?void 0:_.children)||r,b=m(i.props.children||[],c);f.push.apply(f,_toConsumableArray(b));break}case"li":{var O=m(i.props.children,c);r.push({title:[].concat(i.props.children).filter(function(x){return x.type!=="ul"}),key:c,children:O,isLeaf:!O.length});break}default:}}),r}var g=function(n){var r=useState(m(n)),i=_slicedToArray(r,2),d=i[0],c=i[1];return useEffect(function(){c(m(n))},[n]),d},E=function(n){var r=n.isLeaf,i=n.expanded;return r?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FileOutlined,{fill:"currentColor"})}):i?_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOpenOutlined,{fill:"currentColor"})}):_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(FolderOutlined,{fill:"currentColor"})})},a=function(n){var r=n.isLeaf,i=n.expanded;return r?_jsx("span",{className:"tree-switcher-leaf-line"}):i?_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(MinusSquareOutlined,{fill:"currentColor"})})}):_jsx("span",{className:"tree-switcher-line-icon",children:_jsx("span",{className:"dumi-default-tree-icon",children:_jsx(PlusSquareOutlined,{fill:"currentColor"})})})},h=function(){return{height:0,opacity:0}},v=function(n){var r=n.scrollHeight;return{height:r,opacity:1}},s=function(n){return{height:n?n.offsetHeight:0}},e=function(n,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},o={motionName:"ant-motion-collapse",onAppearStart:h,onEnterStart:h,onAppearActive:v,onEnterActive:v,onLeaveStart:s,onLeaveActive:h,onAppearEnd:e,onEnterEnd:e,onLeaveEnd:e,motionDeadline:500},u=function(l){var n=g(l.children),r=createRef(),i=function(c,_){var f=_.isLeaf;f||c.shiftKey||c.metaKey||c.ctrlKey||r.current.onNodeExpand(c,_)};return _jsx(Tree,{className:"dumi-default-tree",icon:E,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:_objectSpread(_objectSpread({},o),{},{motionAppear:!1}),onClick:i,treeData:[{key:"0",title:l.title||"<root>",children:n}],defaultExpandAll:!0,switcherIcon:a})}}}]);