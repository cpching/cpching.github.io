"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8428],{199:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var l=i(4848),s=i(8453);const o={sidebar_position:3},d="Neovim Configuration with Lua",c={id:"Neovim/nvim-config-with-lua",title:"Neovim Configuration with Lua",description:"This tutorial is written to help you configure Neovim using Lua",source:"@site/docs/Neovim/nvim-config-with-lua.md",sourceDirName:"Neovim",slug:"/Neovim/nvim-config-with-lua",permalink:"/docs/Neovim/nvim-config-with-lua",draft:!1,unlisted:!1,editUrl:"https://github.com/cpching/docs/Neovim/nvim-config-with-lua.md",tags:[],version:"current",lastUpdatedAt:1720917702e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Basic Ways to Change Text in Vi",permalink:"/docs/Neovim/basic-ways-to-change-text-in-vi"},next:{title:"Plugin Manager - Lazy",permalink:"/docs/Neovim/plugin-manager-lazy"}},r={},a=[{value:"Why Lua",id:"why-lua",level:2},{value:"Begining",id:"begining",level:2},{value:"Directory Structure",id:"directory-structure",level:2},{value:"Code in <code>init.lua</code> or <code>init.vim</code>",id:"code-in-initlua-or-initvim",level:2},{value:"Lua Modules",id:"lua-modules",level:2},{value:"Key Mappings",id:"key-mappings",level:2},{value:"<code>keymap</code> Function in Lua",id:"keymap-function-in-lua",level:3},{value:"Code in <code>keymaps.lua</code>",id:"code-in-keymapslua",level:3},{value:"Some Recommended Mappings",id:"some-recommended-mappings",level:3},{value:"Move text up and down",id:"move-text-up-and-down",level:4},{value:"Return to NORMAL Mode Quickly",id:"return-to-normal-mode-quickly",level:4},{value:"Close Buffer",id:"close-buffer",level:4},{value:"Options",id:"options",level:2},{value:"A Convenient Way",id:"a-convenient-way",level:3},{value:"Code in <code>options.lua</code>",id:"code-in-optionslua",level:3}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"neovim-configuration-with-lua",children:"Neovim Configuration with Lua"}),"\n",(0,l.jsx)(n.p,{children:"This tutorial is written to help you configure Neovim using Lua"}),"\n",(0,l.jsx)(n.h2,{id:"why-lua",children:"Why Lua"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Neovim has an embedded lua runtime"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://teukka.tech/luanvim.html",children:"More reasons"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"begining",children:"Begining"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5728\u5b89\u88dd\u5b8c Neovim \u5f8c\u9032\u5165 Neovim \u9810\u8a2d\u7684 config \u6a94\u6848\u8def\u5f91\u9032\u884c\u8a2d\u5b9a\uff0c\u5f8c\u9762\u6240\u6709\u7684\u8a2d\u5b9a\u90fd\u662f\u767c\u751f\u5728\u9019\u500b\u6a94\u6848\u8def\u5f91\u5e95\u4e0b","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Linux\u3001BSD\u3001macOS \u5728 ",(0,l.jsx)(n.code,{children:"~/.config/nvim/"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cd ~/.config/nvim/\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Windows \u5728 ",(0,l.jsx)(n.code,{children:"~/AppData/Local/nvim/"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-powershell",children:"cd ~/AppData/Local/nvim/\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5982\u679c\u770b\u5b8c\u9019\u4e00\u7bc7 ",(0,l.jsx)(n.code,{children:"Neovim Configuration with Lua"})," \u53ef\u4ee5\u7372\u5f97\u5229\u7528 Lua \u8a2d\u5b9a key mappings \u8ddf options \u7684\u80fd\u529b"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5982\u679c\u770b\u5b8c\u6574\u500b Neovim tutorial \u5305\u542b plugins \u8a2d\u5b9a\u53ef\u4ee5\u7372\u5f97\u9577\u5f97\u50cf\u9019\u5f35\u5716\u7684 Neovim\u3002\uff08\u6700\u4e0b\u9762\u90a3\u4e00\u884c\u662f tmux status bar\uff09\n",(0,l.jsx)(n.img,{alt:"Neovim",src:i(5936).A+"",width:"3840",height:"2160"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528 Lua \u8a2d\u5b9a Neovim \u6642\uff0c\u8981\u53ef\u4ee5\u6b63\u78ba\u8f09\u5165 config \u6a94\u6848\uff0c\u76ee\u9304\u7d50\u69cb\u6703\u9577\u5f97\u50cf\u4e0b\u9762\u7684\u7bc4\u4f8b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"~/.config/nvim # [ or ~/AppData/Local/nvim ]\n|-- init.lua # [or init.vim (https://neovim.io/doc/user/lua-guide.html#lua-guide-config)]\n|-- lua/\n    |-- module_a.lua # (e.g. keymaps.lua or options.lua)\n    |-- plugin-manager.lua\n    |-- plugins/\n        |-- init.lua\n        |-- plugin_a.lua\n        |-- plugin_b.lua\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"init.lua"})," \u6216 ",(0,l.jsx)(n.code,{children:"init.vim"})," \u5728 config \u6a94\u6848\u8def\u5f91\u4e0b\uff0c\u9019\u500b ",(0,l.jsx)(n.code,{children:"init"})," \u6a94\u6848\u662f\u8a2d\u5b9a\u6a94\u7684\u8f09\u5165\u9ede","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Neovim \u652f\u63f4\u5728 ",(0,l.jsx)(n.code,{children:"init.lua"})," \u6216 ",(0,l.jsx)(n.code,{children:"init.vim"})," \u4f7f\u7528 Lua \u6216 Vimscript"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"lua/"})," \u8cc7\u6599\u593e\u4e0b\u653e\u7f6e Lua modules"]}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"code-in-initlua-or-initvim",children:["Code in ",(0,l.jsx)(n.code,{children:"init.lua"})," or ",(0,l.jsx)(n.code,{children:"init.vim"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"init.lua"})," \u6216 ",(0,l.jsx)(n.code,{children:"init.vim"})," \u4e2d\u5229\u7528 ",(0,l.jsx)(n.code,{children:'require("<lua_module>")'})," \u8f09\u5165 ",(0,l.jsx)(n.code,{children:"lua/"})," \u4e0b\u7684 Lua modules\u3002\n\u5728\u4e0b\u9762\u7bc4\u4f8b\u4e2d ",(0,l.jsx)(n.code,{children:"options"}),"\u3001",(0,l.jsx)(n.code,{children:"keymaps"}),"\u3001",(0,l.jsx)(n.code,{children:"plugin-manager"}),"\u3001",(0,l.jsx)(n.code,{children:"settings"})," \u90fd\u662f ",(0,l.jsx)(n.code,{children:"lua/"})," \u4e0b\u5f8c\u7db4\u70ba ",(0,l.jsx)(n.code,{children:".lua"})," \u7684 Lua \u6a94\u6848"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'-- set leader key\nvim.g.mapleader = \';\'\n\n-- load lua/options.lua, lua/keymaps.lua, and lua/plugin-manager.lua\nrequire("options")\nrequire("keymaps")\nrequire("plugin-manager")\n\n-- load lua/settings.lua which contains shared configuration values, including the desired colorscheme\nlocal settings = require("settings")\n\n-- set colorscheme\nvim.cmd(\'colorscheme \' .. settings.colorscheme)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"lua-modules",children:(0,l.jsx)(n.a,{href:"https://neovim.io/doc/user/lua-guide.html#lua-guide-modules",children:"Lua Modules"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5982\u540c\u524d\u9762\u63d0\u5230 Neovim \u6703\u900f\u904e ",(0,l.jsx)(n.code,{children:'require("<lua_module>")'})," \u8f09\u5165 Lua modules"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Lua modules are found inside a ",(0,l.jsx)(n.code,{children:"lua/"})," folder in your ",(0,l.jsx)(n.code,{children:"'runtimepath'"})," (for most users, this will mean ",(0,l.jsx)(n.code,{children:"~/.config/nvim/lua"})," on *NIX systems and ",(0,l.jsx)(n.code,{children:"~/AppData/Local/nvim/lua"})," on Windows). You can ",(0,l.jsx)(n.code,{children:"require()"})," files in this folder as Lua modules."]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Place Lua files in the ",(0,l.jsx)(n.code,{children:"lua/"})," directory in ",(0,l.jsx)(n.code,{children:"\u2018runtimepath\u2019"})," and load them with require"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Lua modules \u53ef\u4ee5\u900f\u904e\u4e0d\u540c\u7a2e\u7684\u5beb\u6cd5\u8f09\u5165"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Load ",(0,l.jsx)(n.code,{children:"module_a.lua"})," (inside the ",(0,l.jsx)(n.code,{children:"lua/"})," folder)","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'require("module_a")\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Load ",(0,l.jsx)(n.code,{children:"plugins/plugin_a.lua"})," (inside the ",(0,l.jsx)(n.code,{children:"lua/"})," folder)","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"require('plugins/plugin_a')\n-- or\nrequire('plugins.plugin_a')\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Load ",(0,l.jsx)(n.code,{children:"plugins/init.lua"})," (inside the ",(0,l.jsx)(n.code,{children:"lua/"})," folder)","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"require('plugins')\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"key-mappings",children:"Key Mappings"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"You can customize Neovim's key bindings by mapping either Vim commands or Lua functions to key sequences"}),"\n",(0,l.jsxs)(n.li,{children:["You can create a new file named ",(0,l.jsx)(n.code,{children:"keymaps.lua"})," to hold the mapping code.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Place the file in the ",(0,l.jsx)(n.code,{children:"lua/"})," directory"]}),"\n",(0,l.jsxs)(n.li,{children:["Load the file in ",(0,l.jsx)(n.code,{children:"init.lua"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"keymap-function-in-lua",children:[(0,l.jsx)(n.code,{children:"keymap"})," Function in Lua"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Neovim's API ",(0,l.jsx)(n.a,{href:"https://neovim.io/doc/user/api.html#nvim_set_keymap()",children:(0,l.jsx)(n.code,{children:"vim.api.nvim_set_keymap"})})," sets a global mapping for the given mode"]}),"\n",(0,l.jsxs)(n.li,{children:["Function interface: ",(0,l.jsx)(n.code,{children:"nvim_set_keymap( {mode}, {lhs}, {rhs}, {opts})"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"mode"}),": Mode short-name (e.g. n, i, v, \u2026) \u8981\u7d81\u5b9a\u7684 mode"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"lhs"}),": Left-hand-side of the mapping. \u8981\u628a\u4ec0\u9ebc key \u7d81\u5b9a\u529f\u80fd\uff08\u4e4b\u5f8c\u4f7f\u7528\u7684\u5feb\u6377\u9375\uff09"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"rhs"}),": Right-hand-side f the mapping. \u8981\u7d81\u5b9a\u4ec0\u9ebc\u529f\u80fd"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"opts"}),": Optional parameters map. \u7d81\u5b9a\u8a2d\u5b9a\uff0c\u901a\u5e38\u6703\u8a2d\u5b9a ",(0,l.jsx)(n.code,{children:"noremap"})," \u548c ",(0,l.jsx)(n.code,{children:"silent"}),"\uff08\u6211\u6c92\u627e\u5230\u5b8c\u6574\u7684\u6587\u4ef6 list\uff09","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"noremap"})," \u70ba true \u662f\u6307\u9019\u500b mapping \u662f ",(0,l.jsx)(n.strong,{children:"non-recursive"})," \u7684\uff0c\u5b83\u6703\u76f4\u63a5 map \u5230\u628a ",(0,l.jsx)(n.code,{children:"rhs"})," \u7576\u4f5c literal string of commands \u57f7\u884c\uff0c\u4e0d\u6703\u4f7f ",(0,l.jsx)(n.code,{children:"rhs"})," \u5176\u5b83 mapping \u5f8c\u7684\u7d50\u679c"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"silent"})," \u70ba true \u5c31\u662f\u4e0d\u6703\u5728 command line \u986f\u793a\u4f60\u4f7f\u7528\u7684 ",(0,l.jsx)(n.code,{children:"rhs"})," \uff0c\u4ea6\u5373\u80fd\u5728\u4f7f\u7528\u5feb\u6377\u9375\u6642\u4e0d\u53d7\u5e72\u64fe"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"code-in-keymapslua",children:["Code in ",(0,l.jsx)(n.code,{children:"keymaps.lua"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Assign a variable ",(0,l.jsx)(n.code,{children:"keymap"})," to hold a reference to the function","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"local keymap = vim.api.nvims_set_keymap\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Assign a variable ",(0,l.jsx)(n.code,{children:"opts"}),"  to hold opts arguments","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"local opts = { noremap = true, silent = true }\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Call ",(0,l.jsx)(n.code,{children:"keymap"})," function","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"keymap( {mode}, {lhs}, {rhs}, opts)\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Example: ",(0,l.jsx)(n.code,{children:'keymap("n", "<C-L>", ":update", opts)'}),' means "using ',(0,l.jsx)(n.code,{children:"Ctrl+l"}),' to save file in NORMAL mode"']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"some-recommended-mappings",children:"Some Recommended Mappings"}),"\n",(0,l.jsx)(n.h4,{id:"move-text-up-and-down",children:"Move text up and down"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'keymap("n", "<M-j>", ":m .+1<CR>==", opts) -- Move text down\nkeymap("n", "<M-k>", ":m .-2<CR>==", opts) -- Move text up\n'})}),"\n",(0,l.jsx)(n.h4,{id:"return-to-normal-mode-quickly",children:"Return to NORMAL Mode Quickly"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6211\u7121\u6cd5\u5272\u6368\u7684 keymap"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'keymap("i", "jj", "<ESC>", opts)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"close-buffer",children:"Close Buffer"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u524d\u8a00\uff1a\u7121\u6cd5\u6ed1\u9806\u5730\u5c07 buffer \u95dc\u9589\u662f\u56f0\u64fe\u6211\u8a31\u4e45\u7684\u554f\u984c\uff0c\u5e78\u597d\u6700\u5f8c\u89e3\u6c7a\u7684","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5982\u679c\u53ea\u7528 ",(0,l.jsx)(n.code,{children:":bd"})," \u95dc\u5230\u6700\u5f8c\u4e00\u500b\u7684\u6642\u5019\u6703\u9577\u51fa [No name] buffer"]}),"\n",(0,l.jsx)(n.li,{children:"\u6ed1\u9806\u5730\u5c07 buffer \u95dc\u9589\uff1a\u5229\u7528\u5feb\u6377\u9375\u5c07 buffer \u95dc\u9589\uff0c\u4e26\u5728\u5269\u4e0b\u4e00\u500b buffer \u6642\u95dc\u6389\u6574\u500b window"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"-- Function to close buffer or window\nfunction Close_buffer_or_window()\n    vim.api.nvim_command('bn!')\n    local success = pcall(vim.api.nvim_command, 'bd#')\n    -- Check if there is only one window left\n    if not success or #vim.api.nvim_list_wins() == 1 then\n        vim.api.nvim_command('q')\n    end\nend\n\n-- Map a key to call the function to close buffer or window\nvim.api.nvim_set_keymap(\"n\", \"<C-\\\\>\", \"<CMD>lua Close_buffer_or_window()<CR>\", { noremap = true, silent = true })\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5229\u7528\u6aa2\u67e5\u662f\u5426\u80fd\u8df3\u5230\u4e0b\u4e00\u500b buffer \u5224\u65b7\u8981\u95dc\u9589 buffer \u9084\u662f\u95dc\u9589\u6574\u500b window"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"You can customize various options and settings for Neovim."}),"\n",(0,l.jsxs)(n.li,{children:["You can create an ",(0,l.jsx)(n.code,{children:"options.lua"})," file in your Neovim ",(0,l.jsx)(n.code,{children:"lua"})," directory","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Place the file in the ",(0,l.jsx)(n.code,{children:"lua/"})," directory"]}),"\n",(0,l.jsxs)(n.li,{children:["Load the file in ",(0,l.jsx)(n.code,{children:"init.lua"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"a-convenient-way",children:"A Convenient Way"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["A special interface ",(0,l.jsx)(n.code,{children:"vim.opt"})," use table indexing to set options","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Example: ",(0,l.jsx)(n.code,{children:"vim.opt[key] = value"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"code-in-optionslua",children:["Code in ",(0,l.jsx)(n.code,{children:"options.lua"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Assign a variable ",(0,l.jsx)(n.code,{children:"options"}),"  to hold key-value pairs representing the options","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"local options = { <opt_key1> = <opt_value2>, ... }\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Example","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'local options = { \n    number = true,\n    relativenumber = true,\n    smartindent = true,\n    smartcase = true,\n    termguicolors = true,\n    ruler = true,\n    cursorline = true,\n    encoding = "UTF-8",\n    fileencodings = "utf-8",\n    smarttab = true,\n    expandtab = true,\n    shiftwidth = 4,\n    tabstop = 4,\n    hidden = false,\n    mouse="i",\n    statuscolumn = "%s%2r  %2l ", -- \u258e\n    signcolumn = "yes"\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Iterate the ",(0,l.jsx)(n.code,{children:"options"})," table to set options","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"for key, value in pairs(options) do\n    vim.opt[key] = value\nend\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},5936:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/nvim-d7e01c2076ec89443e1ce7a52108d492.png"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var l=i(6540);const s={},o=l.createContext(s);function d(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);