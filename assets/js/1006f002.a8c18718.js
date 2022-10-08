"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[710],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=m(a),c=n,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return a?r.createElement(k,i(i({ref:e},s),{},{components:a})):r.createElement(k,i({ref:e},s))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6364:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:5,id:"regex-primer",title:"A Primer on Regex",tags:["regular-expressions","regex","primer"]},i=void 0,o={unversionedId:"primers/regex-primer",id:"primers/regex-primer",title:"A Primer on Regex",description:"This page is part of a **primer series** that also includes Java, Python, JavaScript (JS), and TypeScript. It is subject to continuous improvement.",source:"@site/docs/primers/e-regex-primer.md",sourceDirName:"primers",slug:"/primers/regex-primer",permalink:"/dsa/docs/primers/regex-primer",draft:!1,tags:[{label:"regular-expressions",permalink:"/dsa/docs/tags/regular-expressions"},{label:"regex",permalink:"/dsa/docs/tags/regex"},{label:"primer",permalink:"/dsa/docs/tags/primer"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"regex-primer",title:"A Primer on Regex",tags:["regular-expressions","regex","primer"]},sidebar:"docs",previous:{title:"Typescript Code Templates",permalink:"/dsa/docs/primers/d-typescript-primer/c-typescript-code-templates"},next:{title:"Solved Problems",permalink:"/dsa/docs/solved-problems"}},p={},m=[{value:"Character Classes",id:"character-classes",level:2},{value:"Boundary Patterns",id:"boundary-patterns",level:2},{value:"Quantifiers",id:"quantifiers",level:2},{value:"Logical Operators",id:"logical-operators",level:2},{value:"Groups",id:"groups",level:2},{value:"Backreferences",id:"backreferences",level:2}],s={toc:m};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This page is part of a ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"primer series"))," that also includes Java, Python, JavaScript (JS), and TypeScript. It is subject to continuous improvement.")),(0,n.kt)("h2",{id:"character-classes"},"Character Classes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,n.kt)("th",{parentName:"tr",align:null},"Description (matches...)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[","abcde","]"),(0,n.kt)("td",{parentName:"tr",align:null},"any of a, b, c, d, and e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[","^abcde","]"),(0,n.kt)("td",{parentName:"tr",align:null},"all but any of a, b, c, d, and e (^ means negation)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[","a-e","]"),(0,n.kt)("td",{parentName:"tr",align:null},"any character in the reange, a-e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[","a-e","[","w-z","]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"any character in the range, a-e or w-z (union)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[","a-e&&","[","c-e","]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"only common characters in both ranges: c-e (intersection)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"[","a-e&&","[","^c-e","]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"any character in the range a-e, but not in the range c-e: a-b (subtraction)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"."),(0,n.kt)("td",{parentName:"tr",align:null},"any character")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\\d"),(0,n.kt)("td",{parentName:"tr",align:null},"any digit; equivalent to ","[","0-9","]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\\D"),(0,n.kt)("td",{parentName:"tr",align:null},"any character that is not a digit: equivalent to ","[","^0-9","]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\\s"),(0,n.kt)("td",{parentName:"tr",align:null},"a space character")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\\S"),(0,n.kt)("td",{parentName:"tr",align:null},"any character that is not a space character: equivalent to ","[","^\\s","]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\\w"),(0,n.kt)("td",{parentName:"tr",align:null},"a word character (alphanumeric/underscore): equivalent to ","[","a-zA-Z0-9_","]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\\W"),(0,n.kt)("td",{parentName:"tr",align:null},"any character that is not a word character: equivalent to ","[","^\\w","]")))),(0,n.kt)("h2",{id:"boundary-patterns"},"Boundary Patterns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,n.kt)("th",{parentName:"tr",align:null},"Description (matches...)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"^"),(0,n.kt)("td",{parentName:"tr",align:null},"the beginning of a line")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"$"),(0,n.kt)("td",{parentName:"tr",align:null},"the end of a line")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\\A"),(0,n.kt)("td",{parentName:"tr",align:null},"the beginning of the input")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\\b"),(0,n.kt)("td",{parentName:"tr",align:null},"the word boundary line")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\\B"),(0,n.kt)("td",{parentName:"tr",align:null},"the non-word boundary")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\\G"),(0,n.kt)("td",{parentName:"tr",align:null},"the end of the previous match")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\\z"),(0,n.kt)("td",{parentName:"tr",align:null},"the end of the input")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\\Z"),(0,n.kt)("td",{parentName:"tr",align:null},"the end of the input (if present, for the final terminator)")))),(0,n.kt)("h2",{id:"quantifiers"},"Quantifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Curly braces, {}, or symbols like *, ?, + are used to quantify the number of occurrences of a pattern."),(0,n.kt)("li",{parentName:"ul"},"Options include: {specific number}, {minimum number, maximum number}, and {minimum number,}"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"*"),"    : {0,} (used to search for patterns that may occur any number of times, or may not be present)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"?"),"     : {0,1} (used to search for patterns that may or may not be present)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"+"),"    : {1,} (used to search for patterns that may occur at least once or more times)"),(0,n.kt)("li",{parentName:"ul"},"Useful external link 1: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/essential/regex/quant.html"},"Quantifiers")),(0,n.kt)("li",{parentName:"ul"},"Useful external link 2: ",(0,n.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/scripting/regular-expressions-regex-basic-symbols/"},"Symbols")),(0,n.kt)("li",{parentName:"ul"},"Useful external link 3: ",(0,n.kt)("a",{parentName:"li",href:"https://www.codexpedia.com/regex/regex-symbol-list-and-regex-examples/"},"More symbols"))),(0,n.kt)("h2",{id:"logical-operators"},"Logical Operators"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,n.kt)("th",{parentName:"tr",align:null},"Description (matches...)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x","|","y"),(0,n.kt)("td",{parentName:"tr",align:null},"x or y")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"xy"),(0,n.kt)("td",{parentName:"tr",align:null},"First x, then y")))),(0,n.kt)("h2",{id:"groups"},"Groups"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Defined using (pattern)")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,n.kt)("th",{parentName:"tr",align:null},"Description (matches...)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"(\\w\\d\\w)"),(0,n.kt)("td",{parentName:"tr",align:null},"a group having a digit character in the middle of two word characters")))),(0,n.kt)("h2",{id:"backreferences"},"Backreferences"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added by putting \\n at the end of a pattern where n is the group number")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,n.kt)("th",{parentName:"tr",align:null},"Description (matches...)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"(\\w\\d\\w)/\\1"),(0,n.kt)("td",{parentName:"tr",align:null},"a group\u2014having a digit character in the middle of 2 word characters\u2014repeated twice")))))}u.isMDXComponent=!0}}]);