"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6795],{4438:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var i=s(4848),r=s(8453);const c={sidebar_position:2},o="Basic Ways to Change Text in Vi",d={id:"Neovim/basic-ways-to-change-text-in-vi",title:"Basic Ways to Change Text in Vi",description:"\u6709\u4e09\u7a2e\u5728\u4e0d\u9032\u5165 INSERT mode \u7684\u60c5\u6cc1\u4e0b\u7de8\u8f2f\u6587\u4ef6\u7684\u65b9\u5f0f\uff0c\u638c\u63e1\u9019\u4e9b\u65b9\u6cd5\u53ef\u4ee5\u5feb\u901f\u5730\u5229\u7528 Vi \u7de8\u8f2f\u6587\u4ef6\uff0c\u5728\u4e0b\u9762\u7684 tutorial \u4e2d\u6703\u5206\u5225\u4ecb\u7d39",source:"@site/docs/Neovim/basic-ways-to-change-text-in-vi.md",sourceDirName:"Neovim",slug:"/Neovim/basic-ways-to-change-text-in-vi",permalink:"/zh-Hans/docs/Neovim/basic-ways-to-change-text-in-vi",draft:!1,unlisted:!1,editUrl:"https://github.com/cpching/docs/Neovim/basic-ways-to-change-text-in-vi.md",tags:[],version:"current",lastUpdatedAt:1720917702e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Useful Vi Tips",permalink:"/zh-Hans/docs/Neovim/useful-vi-tips"},next:{title:"Neovim Configuration with Lua",permalink:"/zh-Hans/docs/Neovim/nvim-config-with-lua"}},l={},t=[{value:"Operators and Motions",id:"operators-and-motions",level:2},{value:"Operators",id:"operators",level:3},{value:"Motions",id:"motions",level:3},{value:"Note",id:"note",level:3},{value:"VISUAL Mode",id:"visual-mode",level:2},{value:"Text Objects",id:"text-objects",level:2},{value:"Reference",id:"reference",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"basic-ways-to-change-text-in-vi",children:"Basic Ways to Change Text in Vi"}),"\n",(0,i.jsx)(n.p,{children:"\u6709\u4e09\u7a2e\u5728\u4e0d\u9032\u5165 INSERT mode \u7684\u60c5\u6cc1\u4e0b\u7de8\u8f2f\u6587\u4ef6\u7684\u65b9\u5f0f\uff0c\u638c\u63e1\u9019\u4e9b\u65b9\u6cd5\u53ef\u4ee5\u5feb\u901f\u5730\u5229\u7528 Vi \u7de8\u8f2f\u6587\u4ef6\uff0c\u5728\u4e0b\u9762\u7684 tutorial \u4e2d\u6703\u5206\u5225\u4ecb\u7d39"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Operators and Motions\uff1a\u4ecb\u7d39\u5982\u4f55\u5229\u7528 operators \u642d\u914d motions \u7de8\u8f2f\u6587\u4ef6\u4ee5\u53ca\u6709\u4ec0\u9ebc\u6a23\u7684 operators \u548c motions"}),"\n",(0,i.jsx)(n.li,{children:"VISUAL Mode\uff1a\u4ecb\u7d39\u4e0d\u540c\u7684 VISUAL mode \u548c\u9032\u5165\u65b9\u5f0f"}),"\n",(0,i.jsx)(n.li,{children:"Text Objects\uff1a\u4ecb\u7d39\u4ec0\u9ebc\u662f text objects \u548c\u6709\u4ec0\u9ebc\u6a23\u7684 text objects \u9084\u6709\u53ef\u4ee5\u5c0d\u5b83\u5011\u9032\u884c\u4ec0\u9ebc\u6a23\u7684\u64cd\u4f5c"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"operators-and-motions",children:"Operators and Motions"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528\u7d44\u5408 \u70ba ",(0,i.jsx)(n.code,{children:"{Operator}{Count}{Motion}"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{Operator}"})," \u662f\u8981\u505a\u7684\u64cd\u4f5c"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{Count}"})," \u662f\u8981\u5e7e\u6b21 motions"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{Motion}"})," \u662f\u60f3\u628a cursor \u5e36\u5230\u54ea\u88e1\uff08motions \u672c\u8eab\u5c31\u662f\u7528\u4f86\u79fb\u52d5 cursor \u7684 command\uff0c\u6c92\u6709\u5728\u524d\u9762\u52a0\u4e0a operators \u7684\u8a71\u5c31\u662f\u55ae\u7d14\u79fb\u52d5 cursor\uff09"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Operator-motion \u7d44\u5408\u8d77\u4f86\u662f\u8981\u5c0d\u76ee\u524d cursor \u6240\u5728\u7684\u5730\u65b9\u5230\u6b32\u5230\u9054\u7684\u5730\u65b9\u9593\u7684 text \u9032\u884c\u4ec0\u9ebc\u64cd\u4f5c\u3002\u975e\u5e38\u7e5e\u53e3\uff0c\u8209\u500b\u4f8b\u5b50 ",(0,i.jsx)(n.code,{children:"d2w"}),"\uff0c",(0,i.jsx)(n.code,{children:"d"})," \u662f ",(0,i.jsx)(n.code,{children:"delete"}),"\u3001",(0,i.jsx)(n.code,{children:"2w"})," \u662f ",(0,i.jsx)(n.code,{children:"move two words"}),"\uff0c\u6240\u4ee5\u5408\u5728\u4e00\u8d77\u662f ",(0,i.jsx)(n.code,{children:"delete two words"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"operators",children:"Operators"}),"\n",(0,i.jsx)(n.p,{children:"\u5e38\u7528\u7684 operators \u6709"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"d"}),": Delete"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"c"}),": Change, delete and start INSERT mode"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"y"}),": Yank into register"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"g~"}),": Invert case"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"motions",children:"Motions"}),"\n",(0,i.jsxs)(n.p,{children:["Motions \u662f\u8b93 cursor \u6539\u8b8a\u4f4d\u7f6e\u7684 command\uff0c\u6709 left-right motions\u3001up-down motions\u3001word motions \u548c text object motions \u7b49\u4e0d\u540c\u985e\u578b\u7684 motions\u3002\u5982\u5b57\u9762\u4e0a\u7684\u610f\u601d\uff0c\u5b83\u5011\u5206\u5225\u662f\u8b93 cursor \u5728\u5de6\u53f3\u3001\u4e0a\u4e0b\u3001words \u4e4b\u9593\u3001text objects \u4e4b\u9593\u79fb\u52d5\u3002\u5728\u9019\u88e1\u5206\u5225\u8209\u5e7e\u7a2e\u5e38\u7528\u7684 motions\uff0c\u5176\u5b83\u7684\u53ef\u4ee5\u53c3\u8003 ",(0,i.jsx)(n.a,{href:"https://neovim.io/doc/user/motion.html",children:"Motions - Neovim docs"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5e38\u7528\u7684 left-right motions \u6709"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"f{char}"}),": \u628a cursor \u79fb\u52d5\u5230\u76ee\u524d cursor \u53f3\u908a\u7684 ",(0,i.jsx)(n.code,{children:"{char}"})," \u4e0a"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"F{char}"}),": \u628a cursor \u79fb\u52d5\u5230\u76ee\u524d cursor \u5de6\u908a\u7684 ",(0,i.jsx)(n.code,{children:"{char}"})," \u4e0a"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"t{char}"}),": \u628a cursor \u79fb\u52d5\u5230\u76ee\u524d cursor \u53f3\u908a\u7684 ",(0,i.jsx)(n.code,{children:"{char}"})," \u524d"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"T{char}"}),": \u628a cursor \u79fb\u52d5\u5230\u76ee\u524d cursor \u5de6\u908a\u7684 ",(0,i.jsx)(n.code,{children:"{char}"})," \u5f8c"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5e38\u7528\u7684 up-down motions \u6709"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"j"}),": \u628a cursor \u5f80\u4e0b\u79fb\u4e00\u884c"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"k"}),": \u628a cursor \u5f80\u4e0a\u79fb\u4e00\u884c"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gg"}),": \u628acursor \u79fb\u5230\u6574\u4efd\u6587\u4ef6\u7684\u7b2c\u4e00\u884c"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"G"}),": \u628acursor \u79fb\u5230\u6574\u4efd\u6587\u4ef6\u7684\u6700\u5f8c\u4e00\u884c"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5e38\u7528\u7684 word motions \u6709"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"w"}),": words  forward","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"words: A sequence of letters, digits and underscores or a sequence of other non-blank characters, separated with white space"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"W"}),": WORDS forward","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"WORDS: A sequence of non-blank characters, separated with white space"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"e"}),": Forward to the end of word"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"E"}),": Forward to the end of WORD"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"b"}),": words backward"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"B"}),": WORDS backward"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["*words vs. WORDS\uff1aletters\u3001digits \u548c underscores \u8207\u5176\u5b83 non-blank characters \u9023\u7e8c\u51fa\u73fe\u6642\uff0c\u662f\u540c\u4e00\u500b WORD \u4f46\u4e0d\u662f\u540c\u4e00\u500b word\uff0c\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:"WO-RD"})," \u7576\u4e2d\u5305\u542b\u4e09\u500b words (",(0,i.jsx)(n.code,{children:"WO"}),"\u3001",(0,i.jsx)(n.code,{children:"-"}),"\u3001",(0,i.jsx)(n.code,{children:"RD"}),")\uff0c\u4e14\u6574\u500b\u662f\u4e00\u500b WORD"]}),"\n",(0,i.jsx)(n.p,{children:"\u5e38\u7528\u7684 text object motions \u6709"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"("}),": ",(0,i.jsx)(n.a,{href:"https://neovim.io/doc/user/motion.html#sentence",children:"sentences"})," backward"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:")"}),": ",(0,i.jsx)(n.a,{href:"https://neovim.io/doc/user/motion.html#sentence",children:"sentences"})," forward"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{"}),": ",(0,i.jsx)(n.a,{href:"https://neovim.io/doc/user/motion.html#paragraph",children:"paragraphs"})," backward"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"}"}),": ",(0,i.jsx)(n.a,{href:"https://neovim.io/doc/user/motion.html#paragraph",children:"paragraphs"})," forward"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Operator ",(0,i.jsx)(n.code,{children:"d"})," \u548c operator ",(0,i.jsx)(n.code,{children:"c"})," \u5728\u7d55\u5927\u90e8\u5206\u7684\u60c5\u6cc1\u4e0b\u53ea\u5dee\u5728\u5b8c\u6210\u52d5\u4f5c\u5f8c\u7684 mode\uff0c\u9664\u4e86 ",(0,i.jsx)(n.code,{children:"c{count}w"}),"\uff0c\u5b83\u8ddf ",(0,i.jsx)(n.code,{children:"c{count}e"})," \u7684\u884c\u70ba\u4e00\u6a23\uff0c\u6700\u5f8c\u4e00\u500b word \u5f8c\u5982\u679c\u6709\u7a7a\u683c\u4e0d\u6703\u88ab\u522a\u9664\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"Operators \u548c motions \u4e4b\u9593\u53ef\u4ee5\u52a0\u5165 count"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"visual-mode",children:"VISUAL Mode"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u6709\u66f4\u8907\u96dc\u7684 motion \u9700\u8981\u64cd\u4f5c\u53ef\u4ee5\u9078\u64c7\u9032\u5165 VISUAL mode\uff0c\u5728 NORMAL mode \u4e0b\u6309\u4e0b"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"v"})," \u9032\u5165 charwise VISUAL mode \u6703\u4ee5 characters \u70ba\u55ae\u4f4d\u9032\u884c\u9078\u53d6"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"V"})," \u9032\u5165 linewise VISUAL mode \u6703\u4ee5 lines \u70ba\u55ae\u4f4d\u9032\u884c\u9078\u53d6"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CTRL-v"})," \u9032\u5165 blockwise visual mode \u6703\u4ee5 rectangle \u7684\u5f62\u5f0f\u9078\u53d6"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u63a5\u8457\u5c31\u53ef\u4ee5\u5229\u7528 ",(0,i.jsx)(n.code,{children:"{Count}{Operator}"})," \u7684\u7d44\u5408\u9032\u884c\u64cd\u4f5c"]}),"\n",(0,i.jsx)(n.h2,{id:"text-objects",children:"Text Objects"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u5728 Vi \u4e2d\u5feb\u901f\u5730\u7de8\u8f2f\u6587\u4ef6\uff0c\u7406\u89e3 text objects \u662f\u4e00\u4ef6\u5f88\u6709\u5e6b\u52a9\u7684\u4e8b\u3002\nText objects \u662f\u628a text group \u8d77\u4f86\u7684\u6982\u5ff5\uff0c\u4e00\u6b21\u6703\u9078\u64c7\u6574\u7d44\uff0c\u7576 cursor \u5728 text objects \u9593\u6642\u5341\u5206\u597d\u7528\uff0c\u4f8b\u5982 cursor \u5728 ",(0,i.jsx)(n.code,{children:'""'})," \u4e4b\u9593\u6642\u53ef\u4ee5\u7528 ",(0,i.jsx)(n.code,{children:'i"'})," \u6216 ",(0,i.jsx)(n.code,{children:'a"'})," \u4e26\u52a0\u4e0a operator \u8b8a\u6210 ",(0,i.jsx)(n.code,{children:'di"'})," \u6216 ",(0,i.jsx)(n.code,{children:'da"'})," \u7b49\u9032\u884c\u64cd\u4f5c\u3002\u5982\u4e0b\u6240\u793a\uff0c",(0,i.jsx)(n.code,{children:"^"})," \u6307\u5411 cursor \u6240\u5728\u7684\u4f4d\u7f6e\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local settings = require("settings")\n                            ^\n-- after using `di"`\nlocal settings = require("")\n                          ^\n-- after using `da"`\nlocal settings = require()\n                         ^\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u5229\u7528 operators \u76f4\u63a5\u5c0d text objects \u9032\u884c\u64cd\u4f5c\u6216\u662f\u9032\u5165 VISUAL mode \u628a text objects \u9078\u8d77\u4f86\u64cd\u4f5c\u3002"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8981\u6307\u5b9a text objects \u7684\u958b\u982d\u6703\u662f","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"i"}),": \u4ee3\u8868 inner\uff0c\u50cf\u662f ",(0,i.jsx)(n.code,{children:'i"'}),' \u4ee3\u8868 "inner quote block" \u610f\u5373\u5728 ',(0,i.jsx)(n.code,{children:'""'})," \u4e4b\u9593\u7684 text"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"a"}),": \u4ee3\u8868 a \u4e00\u500b\uff0c\u50cf\u662f",(0,i.jsx)(n.code,{children:'i"'}),' \u4ee3\u8868 "a quote block" \u610f\u5373 ',(0,i.jsx)(n.code,{children:'""'})," \u548c\u5728\u5b83\u5011\u4e4b\u9593\u7684 text"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u53ef\u4ee5\u52a0\u5165 ",(0,i.jsx)(n.code,{children:"{count}"})," \u4ee3\u8868\u8981\u9078\u64c7\u5e7e\u500b text objects"]}),"\n",(0,i.jsxs)(n.li,{children:["\u642d\u914d\u4e0d\u540c character \u4ee3\u8868\u4e0d\u540c text objects","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"w"}),": word"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"W"}),": WORD"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"s"}),": sentence"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"p"}),": paragraph"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"("})," or ",(0,i.jsx)(n.code,{children:")"})," or ",(0,i.jsx)(n.code,{children:"b"}),": block"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{"})," or ",(0,i.jsx)(n.code,{children:"}"})," or ",(0,i.jsx)(n.code,{children:"B"}),": Block"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"t"}),": tag block"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"["})," or ",(0,i.jsx)(n.code,{children:"]"}),": [] block"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<"})," or ",(0,i.jsx)(n.code,{children:">"}),": <> block"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"'})," or ",(0,i.jsx)(n.code,{children:'"'})," or ",(0,i.jsx)("code",{children:"`"}),": quote block"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Examples:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"iw"}),': "inner word", leading or trailing white space is not included. Wite space between words is counted.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aw"}),': "a word", leading or trailing white space is included, but not counted.']}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u8981\u5229\u7528 operator \u7684\u8a71\u8ddf operator-motion \u5f88\u50cf\u662f\u628a operator \u653e\u5728\u524d\u9762\u3001text object \u653e\u5728\u5f8c\u9762\u3001\u4e2d\u9593\u53ef\u4ee5\u653e count"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://neovim.io/doc/user/usr_04.html",children:"Usr_04 - Neovim docs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://neovim.io/doc/user/motion.html",children:"Motions - Neovim docs"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var i=s(6540);const r={},c=i.createContext(r);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);