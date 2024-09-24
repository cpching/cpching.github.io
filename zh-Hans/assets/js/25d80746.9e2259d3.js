"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5833],{696:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(4848),r=t(8453);const i={sidebar_position:1},c="Treesitter",o={id:"Neovim/Plugins/treesitter",title:"Treesitter",description:"Neovim \u628a tree-sitter \u6574\u5408\u9032\u4f86\uff0c\u5e6b\u52a9 Neovim \u52d5\u614b parse \u7de8\u8f2f\u5167\u5bb9\uff0c\u5728\u7de8\u8f2f\u904e\u7a0b\u4e2d\u5efa\u7acb\u5167\u5bb9\u7684 syntax tree\uff0c\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u5c0d syntax tree \u4e0a\u7684 node \u9032\u884c\u64cd\u4f5c\uff0c\u8b93\u7de8\u8f2f\u66f4\u6d41\u66a2\u3002Neovim \u539f\u751f\u5305\u542b\u4e86 C\u3001Lua\u3001 Markdown \u7b49\u8a9e\u8a00\u7684 parser\uff0c\u800c nvim-treesitter \u9019\u500b\u5957\u4ef6\u53ef\u4ee5\u7528\u4f86\u5b89\u88dd\u5176\u5b83\u8a9e\u8a00\u7684 parser \u4e26\u5c0d tree-sitter \u4f7f\u7528\u9032\u884c\u8a2d\u5b9a\u3002\u800c nvim-treesitter-textobjects \u9019\u500b\u5957\u4ef6\u7d50\u5408\u4e86 vi \u4e2d text objects \u7684\u6982\u5ff5\uff0c\u53ef\u4ee5\u5c0d parse \u51fa\u7684 nodes \u9032\u884c\u66f4\u591a\u7684\u64cd\u4f5c\u3002",source:"@site/docs/Neovim/Plugins/treesitter.md",sourceDirName:"Neovim/Plugins",slug:"/Neovim/Plugins/treesitter",permalink:"/zh-Hans/docs/Neovim/Plugins/treesitter",draft:!1,unlisted:!1,editUrl:"https://github.com/cpching/docs/Neovim/Plugins/treesitter.md",tags:[],version:"current",lastUpdatedAt:172718437e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Plugin Manager: Lazy",permalink:"/zh-Hans/docs/Neovim/plugin-manager-lazy"},next:{title:"file-exploer-tree",permalink:"/zh-Hans/docs/Neovim/Plugins/file-exploer-tree"}},l={},d=[{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"nvim-treesitter-textobjects",id:"nvim-treesitter-textobjects",level:2},{value:"<code>select</code>",id:"select",level:3},{value:"<code>swap</code>",id:"swap",level:3},{value:"<code>move</code>",id:"move",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"treesitter",children:"Treesitter"}),"\n",(0,s.jsxs)(n.p,{children:["Neovim \u628a ",(0,s.jsx)(n.a,{href:"https://tree-sitter.github.io/tree-sitter/",children:"tree-sitter"})," \u6574\u5408\u9032\u4f86\uff0c\u5e6b\u52a9 Neovim \u52d5\u614b parse \u7de8\u8f2f\u5167\u5bb9\uff0c\u5728\u7de8\u8f2f\u904e\u7a0b\u4e2d\u5efa\u7acb\u5167\u5bb9\u7684 syntax tree\uff0c\u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u5c0d syntax tree \u4e0a\u7684 node \u9032\u884c\u64cd\u4f5c\uff0c\u8b93\u7de8\u8f2f\u66f4\u6d41\u66a2\u3002Neovim \u539f\u751f\u5305\u542b\u4e86 ",(0,s.jsx)(n.code,{children:"C"}),"\u3001",(0,s.jsx)(n.code,{children:"Lua"}),"\u3001",(0,s.jsx)(n.code,{children:" Markdown"})," \u7b49\u8a9e\u8a00\u7684 parser\uff0c\u800c ",(0,s.jsx)(n.code,{children:"nvim-treesitter"})," \u9019\u500b\u5957\u4ef6\u53ef\u4ee5\u7528\u4f86\u5b89\u88dd\u5176\u5b83\u8a9e\u8a00\u7684 parser \u4e26\u5c0d tree-sitter \u4f7f\u7528\u9032\u884c\u8a2d\u5b9a\u3002\u800c ",(0,s.jsx)(n.code,{children:"nvim-treesitter-textobjects"})," \u9019\u500b\u5957\u4ef6\u7d50\u5408\u4e86 vi \u4e2d ",(0,s.jsx)(n.a,{href:"../basic-ways-to-change-text-in-vi#text-objects",children:"text objects"})," \u7684\u6982\u5ff5\uff0c\u53ef\u4ee5\u5c0d parse \u51fa\u7684 nodes \u9032\u884c\u66f4\u591a\u7684\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"nvim-treesitter",children:(0,s.jsx)(n.a,{href:"https://github.com/nvim-treesitter/nvim-treesitter",children:"nvim-treesitter"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"lua/plugins/"})," \u65b0\u589e\u4e00\u500b\u53eb ",(0,s.jsx)(n.code,{children:"nvim-treesitter.lua"})," \u7684\u6a94\u6848\u4e26\u5728\u6a94\u6848\u4e2d\u65b0\u589e\u4e00\u500b ",(0,s.jsx)(n.code,{children:"language_parsers"})," \u7684 list \u548c plugin \u7684\u8a2d\u5b9a\u3002\u5132\u5b58\u5f8c\u4e26\u900f\u904e ",(0,s.jsx)(n.code,{children:":Lazy"})," \u9032\u5165 Lazy console \u9032\u884c plugin \u5b89\u88dd\u3002","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local language_parsers = {\n    <language_name_1>, -- e.g. "c"\n    <language_name_2>, -- e.g. "lua"\n    -- ...\n}\n\nreturn {\n    "nvim-treesitter/nvim-treesitter",\n    opts = {\n        ensure_installed = language_parsers,\n        auto_install = true,\n        indent = { enable = true },\n        highlight = { enable = true, },\n        incremental_selection = {\n            enable = true,\n            keymaps = {\n                init_selection = "<CR>",\n                node_incremental = "<CR>",\n                scope_incremental = "<TAB>",\n                node_decremental = "<bs>",\n            },\n        },\n    },\n    config = function(_, opts)\n        require("nvim-treesitter.configs").setup(opts)\n    end,\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"incremental_selection"})," \u4e2d ",(0,s.jsx)(n.code,{children:"keymaps"})," \u7684","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"init_selection"})," \u662f\u5728\u8a2d\u5b9a NORMAL mode \u4e2d\u958b\u59cb\u9078\u64c7 node \u7684\u5feb\u6377\u9375\uff0c\u9810\u8a2d\u662f ",(0,s.jsx)(n.code,{children:"gnn"}),"\uff0c\u6309\u4e0b\u5f8c\u6703\u9032\u5165 VISUAL mode\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node_incremental"})," \u662f\u5728\u8a2d\u5b9a VISUAL mode \u4e2d\u64f4\u589e node \u81f3\u4e0a\u4e00\u5c64\u6709 name \u7684 parent \u7684\u5feb\u6377\u9375\uff08named parent\uff09\uff0c\u9810\u8a2d\u662f ",(0,s.jsx)(n.code,{children:"grn"}),"\u3002Treesitter \u4e2d\u6709 named node \u548c anonymous node\uff08\u50cf\u662f string literals \u5c31\u662f anonymous nodes\uff09\uff0c\u53ef\u4ee5\u89c0\u5bdf syntax tree \u767c\u73fe named node \u6703\u6709\u4e00\u500b ",(0,s.jsx)(n.code,{children:"name"})," attribute\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scope_incremental"})," \u662f\u5728\u8a2d\u5b9a VISUAL mode \u4e2d\u64f4\u589e node \u7684\u5feb\u6377\u9375\u81f3\u81ea\u884c\u5b9a\u7fa9\u5728 ",(0,s.jsx)(n.code,{children:"locals.scm"})," \u7684\u4e0a\u5c64 scope\uff0c\u9810\u8a2d\u662f ",(0,s.jsx)(n.code,{children:"grc"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node_decremental"})," \u662f\u5728\u8a2d\u5b9a VISUAL mode \u4e2d\u56de\u5230\u524d\u4e00\u6b21\u9078\u64c7\u7684 scope\uff0c\u9810\u8a2d\u662f ",(0,s.jsx)(n.code,{children:"grm"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u63a5\u8457\u53ef\u4ee5\u900f\u904e ",(0,s.jsx)(n.code,{children:":InspectTree"})," \u67e5\u770b parser \u6240\u5efa\u7acb\u7684 syntax tree \u7684\u6a23\u5b50\uff0c\u6a39\u4e2d\u7684 nodes \u548c code \u7684\u5167\u5bb9\u6703\u76f8\u4e92\u547c\u61c9\u3002\n",(0,s.jsx)(n.img,{alt:"InspectTree",src:t(9716).A+"",width:"3840",height:"2160"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"nvim-treesitter-textobjects",children:(0,s.jsx)(n.a,{href:"https://github.com/nvim-treesitter/nvim-treesitter-textobjects",children:"nvim-treesitter-textobjects"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u8b93 tree-sitter \u7684 node \u53ef\u4ee5\u5728 nvim \u4e2d\u50cf textobjects \u4e00\u6a23\u88ab\u64cd\u4f5c\uff0c\u9700\u8981\u53e6\u4e00\u500b\u5957\u4ef6 ",(0,s.jsx)(n.code,{children:"nvim-treesitter-textobjects"}),"\uff0c\u76f8\u95dc\u4e3b\u8981\u7684\u8a2d\u5b9a\u662f\u5beb\u5728 ",(0,s.jsx)(n.code,{children:"nvim-treesitter"})," \u4e0b\u3002\u9664\u4e86\u8b93 node \u50cf built-in \u7684 textobjects \u53ef\u4ee5\u642d\u914d operators \u64cd\u4f5c\u5916\uff0c",(0,s.jsx)(n.code,{children:"nvim-treesitter-textobjects"})," \u4e5f\u53ef\u4ee5\u4ea4\u63db\u5169\u500b node \u548c\u5feb\u901f\u79fb\u52d5\u5230\u524d\u4e00\u500b\u6216\u5f8c\u4e00\u500b node \u4e0a\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nvim-treesitter-textobjects"})," \u63d0\u4f9b\u4e86 31 \u500b ",(0,s.jsx)(n.a,{href:"https://github.com/nvim-treesitter/nvim-treesitter-textobjects?tab=readme-ov-file#built-in-textobjects",children:"built-in textobjects"}),"\uff08e.g. class.inner\u3001function.outer\uff09\u3002\u9019\u4e9b text objects \u53ef\u4ee5\u900f\u904e\u8a2d\u5b9a config \u5c0d\u5b83\u5011\u9032\u884c\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"nvim-treesitter.lua"})," \u4e2d ",(0,s.jsx)(n.code,{children:"opts"})," \u524d\u65b0\u589e\u4e00\u500b dependencies",(0,s.jsx)(n.code,{children:"\uff0c\u4e26\u5728 "}),"opts",(0,s.jsx)(n.code,{children:"\u5167\u65b0\u589e\u4e00\u500b"}),"textobjects`\u3002\uff08\u9019\u584a\u662f\u7528 ",(0,s.jsx)(n.a,{href:"https://github.com/nvim-treesitter/nvim-treesitter-textobjects?tab=readme-ov-file#nvim-treesitter-textobjects",children:"nvim-treesitter-textobjects"})," \u4e2d\u7684\u7bc4\u4f8b\u8a2d\u5b9a\uff09","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'    return {\n        "nvim-treesitter/nvim-treesitter",\n        dependencies = {\n            "nvim-treesitter/nvim-treesitter-textobjects",\n        },\n        opts = {\n            ensure_installed = language_parsers,\n            auto_install = true,\n            indent = { enable = true },\n            highlight = { enable = true, },\n            incremental_selection = {\n                enable = true,\n                keymaps = {\n                    init_selection = "<CR>",\n                    node_incremental = "<CR>",\n                    scope_incremental = "<TAB>",\n                    node_decremental = "<bs>",\n                },\n            },\n            textobjects = {\n                select = {\n                    enable = true,\n                    lookahead = true,\n                    keymaps = {\n                        -- You can use the capture groups defined in textobjects.scm\n                        ["af"] = "@function.outer",\n                        ["if"] = "@function.inner",\n                        ["ac"] = "@class.outer",\n                        -- You can optionally set descriptions to the mappings (used in the desc parameter of\n                        -- nvim_buf_set_keymap) which plugins like which-key display\n                        ["ic"] = { query = "@class.inner", desc = "Select inner part of a class region" },\n                        -- You can also use captures from other query groups like `locals.scm`\n                        ["as"] = { query = "@scope", query_group = "locals", desc = "Select language scope" },\n                    },\n                    -- You can choose the select mode (default is charwise \'v\')\n                    selection_modes = {\n                        [\'@parameter.outer\'] = \'v\', -- charwise\n                        [\'@function.outer\'] = \'V\', -- linewise\n                        [\'@class.outer\'] = \'<c-v>\', -- blockwise\n                    },\n                    -- If you set this to `true` (default is `false`) then any textobject is\n                    -- extended to include preceding or succeeding whitespace.\n                    include_surrounding_whitespace = true,\n                },\n                swap = {\n                    enable = true,\n                    swap_next = {\n                        ["<leader>a"] = "@parameter.inner",\n                    },\n                    swap_previous = { \n                        ["<leader>A"] = "@parameter.inner",\n                    },\n                },\n                move = {\n                    enable = true,\n                    set_jumps = true, -- whether to set jumps in the jumplist\n                    goto_next_start = {\n                        ["]m"] = "@function.outer",\n                        ["]]"] = { query = "@class.outer", desc = "Next class start" },\n                        --\n                        -- You can use regex matching (i.e. lua pattern) and/or pass a list in a "query" key to group multiple queries.\n                        ["]o"] = "@loop.*",\n                        -- ["]o"] = { query = { "@loop.inner", "@loop.outer" } }\n                        --\n                        -- You can pass a query group to use query from `queries/<lang>/<query_group>.scm file in your runtime path.\n                        -- Below example nvim-treesitter\'s `locals.scm` and `folds.scm`. They also provide highlights.scm and indent.scm.\n                        ["]s"] = { query = "@scope", query_group = "locals", desc = "Next scope" },\n                        ["]z"] = { query = "@fold", query_group = "folds", desc = "Next fold" },\n                    },\n                    goto_next_end = {\n                        ["]M"] = "@function.outer",\n                        ["]["] = "@class.outer",\n                    },\n                    goto_previous_start = {\n                        ["[m"] = "@function.outer",\n                        ["[["] = "@class.outer",\n                    },\n                    goto_previous_end = {\n                        ["[M"] = "@function.outer",\n                        ["[]"] = "@class.outer",\n                    },\n                    -- Below will go to either the start or the end, whichever is closer.\n                    -- Use if you want more granular movements\n                    -- Make it even more gradual by adding multiple queries and regex.\n                    goto_next = {\n                      ["]d"] = "@conditional.outer",\n                    },\n                    goto_previous = {\n                      ["[d"] = "@conditional.outer",\n                    }\n                },\n            },\n        },\n        config = function(_, opts)\n            require("nvim-treesitter.configs").setup(opts)\n        end,\n    }\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"textobjects"})," \u4e0b\u4e3b\u8981\u6709\u4e09\u500b\u76f8\u95dc\u52d5\u4f5c\u53ef\u4ee5\u8a2d\u5b9a","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"select"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"swap"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"move"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"select",children:(0,s.jsx)(n.code,{children:"select"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8a2d\u5b9a\u8981\u9078\u64c7\u4ec0\u9ebc text objects\uff0c\u5728\u4f7f\u7528\u6642\u53ef\u4ee5\u900f\u904e ",(0,s.jsx)(n.code,{children:"d"}),"\u3001",(0,s.jsx)(n.code,{children:"c"}),"\u3001",(0,s.jsx)(n.code,{children:"y"})," \u7b49 operators \u5c0d\u6240\u9078\u7684 text objects \u9032\u884c\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u5217\u662f\u4ee5\u5957\u7528\u4e0a\u8ff0\u8a2d\u5b9a\u7684 NORMAL mode \u4e0b\u7684\u7bc4\u4f8b\uff0c",(0,s.jsx)(n.code,{children:"^"})," \u6307\u5411 cursor \u6240\u5728\u7684\u4f4d\u7f6e\uff1a\n\u9019\u6bb5\u662f\u5229\u7528 golang \u5beb\u7684 main function"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func main() {\n      ^\n    initDB()\n    defer db.Close()\n    // ...\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6309\u4e0b ",(0,s.jsx)(n.code,{children:"daf"})," \u6703\u5c07\u6574\u500b function \u5305\u542b function signature \u7684\u90e8\u5206 delete \u6389\uff0c\u6240\u4ee5\u4e0a\u9762\u7684 code \u6703\u5269\u4e0b\u4e00\u500b\u7a7a\u884c\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"\n^\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u800c\u6309\u4e0b ",(0,s.jsx)(n.code,{children:"dif"})," \u6703\u5c07 function \u4e0d\u5305\u542b function signature \u7684\u90e8\u5206 delete \u6389\u3002\u6240\u4ee5\u6703\u628a function \u5167\u7684 statement \u522a\u9664\u7559\u4e0b function \u7684 signature \u548c\u5927\u62ec\u865f\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func main() {\n\t\n   ^\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"swap",children:(0,s.jsx)(n.code,{children:"swap"})}),"\n",(0,s.jsx)(n.p,{children:"\u8a2d\u5b9a\u8981\u5982\u4f55\u548c\u524d\u6216\u5f8c\u4e00\u500b\u8207\u76ee\u524d cursor \u4e0b\u76f8\u540c\u985e\u578b\u7684 text objects \u9032\u884c\u4ea4\u63db\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u5217\u662f\u4ee5\u5957\u7528\u4e0a\u8ff0\u8a2d\u5b9a\u7684 NORMAL mode \u4e0b\u7684\u7bc4\u4f8b\uff0c",(0,s.jsx)(n.code,{children:"^"})," \u6307\u5411 cursor \u6240\u5728\u7684\u4f4d\u7f6e\uff1a\n\u9019\u6bb5\u662f\u5229\u7528 golang \u5beb\u7684 function"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'func main() {\n    initDB()\n    defer db.Close()\n\t\n    buildPath := filepath.Join("..", "build")\n                                ^\n    // ...\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6309\u4e0b ",(0,s.jsx)(n.code,{children:"<leader>a"})," \u6703\u8b93\u6307\u5411\u7684 parameter \u548c\u4e0b\u4e00\u500b parameter \u4ea4\u63db\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'func main() {\n    initDB()\n    defer db.Close()\n\t\n    buildPath := filepath.Join("build", "..")\n                                        ^\n    // ...\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"move",children:(0,s.jsx)(n.code,{children:"move"})}),"\n",(0,s.jsx)(n.p,{children:"\u8a2d\u5b9a\u8981\u5982\u4f55\u79fb\u52d5\u5230\u524d\u6216\u5f8c\u4e00\u500b text objects\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u5217\u662f\u4ee5\u5957\u7528\u4e0a\u8ff0\u8a2d\u5b9a\u7684 NORMAL mode \u4e0b\u7684\u7bc4\u4f8b\uff0c",(0,s.jsx)(n.code,{children:"^"})," \u6307\u5411 cursor \u6240\u5728\u7684\u4f4d\u7f6e\uff1a\n\u9019\u6bb5\u662f\u5229\u7528 golang \u5beb\u7684 2 \u500b function"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func getUsersHandler(w http.ResponseWriter, r *http.Request) {\n        ^\n    // ...\n}\n\nfunc createUserHandler(w http.ResponseWriter, r *http.Request) {\n    // ...\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6309\u4e0b ",(0,s.jsx)(n.code,{children:"]m"})," \u6703\u8b93 cursor \u8df3\u5230\u4e0b\u4e00\u500b function \u4e00\u958b\u59cb\u7684\u4f4d\u7f6e\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func getUsersHandler(w http.ResponseWriter, r *http.Request) {\n    // ...\n}\n\nfunc createUserHandler(w http.ResponseWriter, r *http.Request) {\n^\n    // ...\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},9716:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/InspectTree-4107ea295e0d732147ba92c6b0b6b470.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(6540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);