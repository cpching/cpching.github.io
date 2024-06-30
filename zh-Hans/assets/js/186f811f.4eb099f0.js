"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8464],{3588:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=s(4848),l=s(8453);const a={},r="LSP-Related Plugins",o={id:"Neovim/Plugins/lsp",title:"LSP-Related Plugins",description:"LSP \u7684\u5168\u540d\u70ba Language Server Protocol\uff0c\u5982\u540d\u6240\u8ff0\uff0c\u5b83\u5b9a\u7fa9\u4e86 Language Clients \u8207 Language Servers \u5c0d\u63a5\u7684\u65b9\u6cd5\u3002Language Servers \u63d0\u4f9b\u4e86\u5373\u6642\u7684\u8a9e\u6cd5\u5206\u6790\uff0c\u7576\u5b89\u88dd\u4e86\u67d0\u500b\u8a9e\u8a00\u7684 Language Server \u5f8c\u4e0d\u540c\u7684 Language Clients \uff08\u5982 Neovim\u3001VSCode \u7b49\u7de8\u8f2f\u5668\uff09\u5c31\u53ef\u4ee5\u8207\u8a72 Language Server \u6e9d\u901a\uff0c\u5448\u73fe\u7de8\u8f2f\u6642\u7684\u8a9e\u6cd5\u6aa2\u67e5\u3001\u7a0b\u5f0f\u78bc\u88dc\u9f4a\u7b49\u529f\u80fd\u3002Neovim \u4e2d\u6709\u8a31\u591a\u8207 LSP \u76f8\u95dc\u7684 Plugins \u53ef\u4ee5\u5e6b\u52a9\u4f7f\u7528\u8005\u7ba1\u7406 LSP Servers \u8207\u8a2d\u5b9a LSP Clients\u3002",source:"@site/docs/Neovim/Plugins/lsp.md",sourceDirName:"Neovim/Plugins",slug:"/Neovim/Plugins/lsp",permalink:"/zh-Hans/docs/Neovim/Plugins/lsp",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Neovim/Plugins/lsp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugin Configurations",permalink:"/zh-Hans/docs/category/plugin-configurations"},next:{title:"nvim-tree (A file explorer tree)",permalink:"/zh-Hans/docs/Neovim/Plugins/nvim-tree"}},t={},c=[{value:"LSP Servers Management",id:"lsp-servers-management",level:2},{value:"mason",id:"mason",level:3},{value:"mason-lspconfig",id:"mason-lspconfig",level:3},{value:"LSP Client Configuration",id:"lsp-client-configuration",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:3}];function u(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"lsp-related-plugins",children:"LSP-Related Plugins"}),"\n",(0,i.jsx)(e.p,{children:"LSP \u7684\u5168\u540d\u70ba Language Server Protocol\uff0c\u5982\u540d\u6240\u8ff0\uff0c\u5b83\u5b9a\u7fa9\u4e86 Language Clients \u8207 Language Servers \u5c0d\u63a5\u7684\u65b9\u6cd5\u3002Language Servers \u63d0\u4f9b\u4e86\u5373\u6642\u7684\u8a9e\u6cd5\u5206\u6790\uff0c\u7576\u5b89\u88dd\u4e86\u67d0\u500b\u8a9e\u8a00\u7684 Language Server \u5f8c\u4e0d\u540c\u7684 Language Clients \uff08\u5982 Neovim\u3001VSCode \u7b49\u7de8\u8f2f\u5668\uff09\u5c31\u53ef\u4ee5\u8207\u8a72 Language Server \u6e9d\u901a\uff0c\u5448\u73fe\u7de8\u8f2f\u6642\u7684\u8a9e\u6cd5\u6aa2\u67e5\u3001\u7a0b\u5f0f\u78bc\u88dc\u9f4a\u7b49\u529f\u80fd\u3002Neovim \u4e2d\u6709\u8a31\u591a\u8207 LSP \u76f8\u95dc\u7684 Plugins \u53ef\u4ee5\u5e6b\u52a9\u4f7f\u7528\u8005\u7ba1\u7406 LSP Servers \u8207\u8a2d\u5b9a LSP Clients\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"lsp-servers-management",children:"LSP Servers Management"}),"\n",(0,i.jsx)(e.h3,{id:"mason",children:"mason"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"mason"})," \u8b93\u4f7f\u7528\u8005\u80fd\u5728 Neovim \u4e2d\u7ba1\u7406 LSP Server \u7684\u5b89\u88dd\u3001\u66f4\u65b0\u548c\u522a\u9664\uff0c",(0,i.jsx)(e.code,{children:"mason"})," \u63d0\u4f9b\u4e86\u5f88\u591a\u500b LSP Servers \u53ef\u4ee5\u4e0b\u8f09\u3002\u9664\u4e86 LSP Servers \u5916\uff0c",(0,i.jsx)(e.code,{children:"mason"})," \u4e5f\u662f\u63d0\u4f9b\u4e86 DAP servers\u3001linters\u3001\u548c formatter \u7684\u7ba1\u7406\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5728 ",(0,i.jsx)(e.code,{children:"lua/plugins/"})," \u4e0b\u65b0\u589e\u4e00\u500b ",(0,i.jsx)(e.code,{children:"lsp.lua"})," \u6a94\u6848\uff0c\u7576\u4e2d\u65b0\u589e\u4e0b\u5217\u5167\u5bb9\u4e26\u5132\u5b58\u9000\u51fa\u5f8c\u518d\u9032\u5165 Neovim \u4e26\u900f\u904e ",(0,i.jsx)(e.code,{children:":Lazy"})," \u9032\u5165 Lazy console \u9032\u884c plugin \u5b89\u88dd\u3002","\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-lua",children:'language_servers = {\n    <server_name_1>, -- e.g. "lua_ls"\n    <server_name_2>,\n    ...\n}\nreturn\n{\n    {\n        "williamboman/mason.nvim", -- plugin-short-url\n        enabled = true,\n        opts = {\n            ui = {\n                icons = {\n                    package_installed = "\u2713",\n                    package_pending = "\u279c",\n                    package_uninstalled = "\u2717",\n                },\n                border = "rounded",\n            },\n        },\n    },\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5b89\u88dd\u5f8c\u518d\u6b21\u9032\u5165 Neovim \u5c31\u53ef\u4ee5\u900f\u904e",(0,i.jsx)(e.code,{children:":Mason"})," \u6307\u4ee4\u9032\u5165 Mason console \u67e5\u770b Mason \u6240\u63d0\u4f9b\u7684 servers \u548c\u76ee\u524d\u7684\u72c0\u614b\u3002\n",(0,i.jsx)(e.img,{alt:"mason",src:s(8630).A+"",width:"3840",height:"2160"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u900f\u904e ",(0,i.jsx)(e.code,{children:":MasonInstall <server_name>"})," \u5b89\u88dd Mason \u6240\u63d0\u4f9b\u7684 servers","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u9019\u88e1 ",(0,i.jsx)(e.code,{children:"<server_name>"})," \u6703\u662f Mason console \u5217\u8868\u4e2d\u7b2c\u4e00\u500b\u540d\u5b57"]}),"\n",(0,i.jsxs)(e.li,{children:["e.g. ",(0,i.jsx)(e.code,{children:":MasonInstall typescript-language-server"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"mason-lspconfig",children:"mason-lspconfig"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"mason-lspconfig"})," \u6703\u6aa2\u67e5\u6240\u9700\u7684 LSP servers\uff08Mason \u6709\u63d0\u4f9b\u7684\uff09\u662f\u5426\u5b89\u88dd\u4e86\uff0c\u5982\u679c\u9084\u6c92\u5c31\u6703\u5e6b\u4f7f\u7528\u8005\u81ea\u52d5\u900f\u904e Mason \u4e0b\u8f09\u5b89\u88dd\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5728 ",(0,i.jsx)(e.code,{children:"lua/plugins/lsp.lua"})," \u6a94\u6848\u4e2d\u65b0\u589e\u4e00\u500b ",(0,i.jsx)(e.code,{children:"language_servers"})," list \u548c\u7b2c\u4e8c\u500b plugin \u7684\u8a2d\u5b9a\u5167\u5bb9\uff0c\u5132\u5b58\u9000\u51fa\u5f8c\u518d\u9032\u5165 Neovim \u4e26\u900f\u904e ",(0,i.jsx)(e.code,{children:":Lazy"})," \u9032\u5165 Lazy console \u9032\u884c plugin \u5b89\u88dd\u3002","\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'language_servers = {\n    <server_name_1>, -- e.g. "lua_ls"\n    <server_name_2>,\n    ...\n}\nreturn\n{\n    {\n        "williamboman/mason.nvim", -- plugin-short-url\n        enabled = true,\n        opts = {\n            ui = {\n                icons = {\n                    package_installed = "\u2713",\n                    package_pending = "\u279c",\n                    package_uninstalled = "\u2717",\n                },\n                border = "rounded",\n            },\n        },\n    },\n    {\n        \'williamboman/mason-lspconfig.nvim\', -- plugin-short-url\n        config = function()\n            require("mason-lspconfig").setup({\n                ensure_installed = language_servers,\n                automatic_installation = true,\n            })\n        end,\n        dependencies = { \'williamboman/mason.nvim\' }\n    },\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u9000\u51fa\u5f8c\u518d\u9032\u5165 Neovim \u5c31\u6703\u958b\u59cb\u81ea\u52d5\u5b89\u88dd ",(0,i.jsx)(e.code,{children:"language_servers"})," \u4e2d\u5beb\u7684 LSP Servers\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["Note: \u5229\u7528 ",(0,i.jsx)(e.code,{children:":MasonInstall <server_name>"})," \u7684 ",(0,i.jsx)(e.code,{children:"<server_name>"})," \u8ddf\u5beb\u5728 ",(0,i.jsx)(e.code,{children:"language_servers"})," \u4e2d\u7684 ",(0,i.jsx)(e.code,{children:"<server_name>"})," \u53ef\u80fd\u6703\u4e0d\u540c\u3002","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["e.g. \u8981\u5229\u7528 mason-lspconfig \u81ea\u52d5\u5b89\u88dd typescript-language-server \u7684\u8a71\uff0c",(0,i.jsx)(e.code,{children:"language_servers"})," \u4e2d\u8981\u5beb\u5165 ",(0,i.jsx)(e.code,{children:'"tsserver"'})," \u800c\u975e ",(0,i.jsx)(e.code,{children:'"typescript-language-server"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"lsp-client-configuration",children:"LSP Client Configuration"}),"\n",(0,i.jsx)(e.h3,{id:"nvim-lspconfig",children:"nvim-lspconfig"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"nvim-lspconfig"})," \u63d0\u4f9b LSP Clients \u7684\u5ba2\u88fd\u5316\u9078\u9805\uff0c\u4f8b\u5982\u662f\u5426\u8981\u5229\u7528\u6d6e\u52d5\u8996\u7a97\u5448\u73fe\u8a0a\u606f\u3001\u8b66\u544a\u548c\u932f\u8aa4\u7684\u7b26\u865f\u8a72\u662f\u4ec0\u9ebc\u3001\u6bcf\u500b language servers \u4f7f\u7528\u6642\u6709\u4ec0\u9ebc\u8a2d\u5b9a\u7b49\u3002\u6211\u500b\u4eba\u8a8d\u70ba nvim-lspconfig \u662f Neovim \u4e2d\u8a2d\u5b9a\u8d77\u4f86\u524d\u4e09\u7e41\u96dc\u7684 plugin\uff0c\u4e0d\u904e\u7406\u89e3\u4e4b\u5f8c\u5176\u5b83\u7684 plugin \u8a2d\u5b9a\u5c31\u986f\u5f97\u5bb9\u6613\u591a\u4e86\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5728 ",(0,i.jsx)(e.code,{children:"lua/plugins"})," \u4e0b\u65b0\u589e\u4e00\u500b ",(0,i.jsx)(e.code,{children:"language-settings"})," \u8cc7\u6599\u593e\u7528\u4f86\u653e\u4e0d\u540c language servers \u7684\u8a2d\u5b9a\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u7e7c\u7e8c\u5728 ",(0,i.jsx)(e.code,{children:"lua/plugins/lsp.lua"})," \u6a94\u6848\u4e2d\u65b0\u589e\u548c\u7b2c\u4e09\u500b plugin \u7684\u8a2d\u5b9a\u5167\u5bb9\uff0c\u5132\u5b58\u9000\u51fa\u5f8c\u518d\u9032\u5165 Neovim \u4e26\u900f\u904e ",(0,i.jsx)(e.code,{children:":Lazy"})," \u9032\u5165 Lazy console \u9032\u884c plugin \u5b89\u88dd\u3002","\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'    {\n        \'neovim/nvim-lspconfig\',\n        enabled = true,\n        dependencies = { "williamboman/mason-lspconfig.nvim", "williamboman/mason.nvim", "hrsh7th/cmp-nvim-lsp" },\n        config = function()\n            -- Function to run when attaching to a new buffer with an LSP client.\n            local on_attach = function(client, bufnr)\n                if client.name == "tsserver" then\n                    client.server_capabilities.documentFormattingProvider = false\n                end\n                -- Keymap options\n                local opts = { noremap = true, silent = true }\n                -- Keymap api\n                local buf_keymap = vim.api.nvim_buf_set_keymap\n                buf_keymap(bufnr, "n", "<leader>gD", "<cmd>lua vim.lsp.buf.declaration()<CR>", opts)\n                buf_keymap(bufnr, "n", "<leader>gd", "<cmd>lua vim.lsp.buf.definition()<CR>", opts)\n                buf_keymap(bufnr, "n", "K", "<cmd>lua vim.lsp.buf.hover()<CR>", opts)\n                buf_keymap(bufnr, "n", "gi", "<cmd>lua vim.lsp.buf.implementation()<CR>", opts)\n                buf_keymap(bufnr, "n", "<C-s>", "<cmd>lua vim.lsp.buf.signature_help()<CR>", opts)\n                buf_keymap(bufnr, "n", "gr", "<cmd>lua vim.lsp.buf.references()<CR>", opts)\n                buf_keymap(bufnr, "n", "gl", \'<cmd>lua vim.diagnostic.open_float()<CR>\', opts)\n                buf_keymap(bufnr, "n", "[d", \'<cmd>lua vim.diagnostic.goto_prev({ border = "rounded" })<CR>\', opts)\n                buf_keymap(bufnr, "n", "]d", \'<cmd>lua vim.diagnostic.goto_next({ border = "rounded" })<CR>\', opts)\n                buf_keymap(bufnr, "n", "<leader>q", "<cmd>lua vim.diagnostic.setloclist()<CR>", opts)\n                vim.cmd [[ command! Format execute \'lua vim.lsp.buf.formatting()\' ]]\n                -- vim.api.nvim_buf_set_keymap(bufnr, "n", "<leader>ca", "<cmd>lua vim.lsp.buf.code_action()<CR>", opts)\n                -- vim.api.nvim_buf_set_keymap(bufnr, "n", "<leader>rn", "<cmd>lua vim.lsp.buf.rename()<CR>", opts)\n            end\n\n            -- The `nvim-cmp` almost supports LSP\'s capabilities so You should advertise it to LSP servers..\n            local capabilities\n            local status_ok, cmp_nvim_lsp = pcall(require, "cmp_nvim_lsp")\n            if status_ok then\n                capabilities = cmp_nvim_lsp.default_capabilities()\n            end\n\n            local lspconfig = require(\'lspconfig\')\n\n            -- Define diagnostic signs for error, warning, hint, and info.\n            local signs = {\n                { name = "DiagnosticSignError", text = "\uf057" },\n                { name = "DiagnosticSignWarn", text = "\uf071" },\n                { name = "DiagnosticSignHint", text = "\uf05a" },\n                { name = "DiagnosticSignInfo", text = "\uf059" },\n            }\n            for _, sign in ipairs(signs) do\n                vim.fn.sign_define(sign.name, { texthl = sign.name, text = sign.text, numhl = "" })\n            end\n\n            -- Define diagnostic configuration for virtual text, signs, and float windows.\n            local config = {\n                virtual_text = true,\n                signs = {\n                    active = signs,\n                },\n                update_in_insert = true,\n                underline = true,\n                severity_sort = true,\n                float = {\n                    focusable = true,\n                    style = "minimal",\n                    border = "rounded",\n\n                    header = "",\n                    prefix = "",\n                },\n            }\n\n            -- Configure diagnostics with defined settings.\n            vim.diagnostic.config(config)\n\n            -- Customize hover and signature help handlers for LSP.\n            vim.lsp.handlers["textDocument/hover"] = vim.lsp.with(vim.lsp.handlers.hover, {\n                border = "rounded",\n            })\n\n            vim.lsp.handlers["textDocument/signatureHelp"] = vim.lsp.with(vim.lsp.handlers.signature_help, {\n                border = "rounded",\n            })\n\n            local opts = {\n                on_attach = on_attach,\n                capabilities = capabilities,\n            }\n\n            -- Setup LSP servers based on predefined configurations.\n            for _, language_server in pairs(language_servers) do\n                language_server = vim.split(language_server, "@")[1]\n                local require_ok, conf_opts = pcall(require, "plugins.language-settings." .. language_server)\n                if require_ok then\n                    conf_opts = vim.tbl_deep_extend("keep", conf_opts, opts)\n                    lspconfig[language_server].setup(conf_opts)\n                else\n                    lspconfig[language_server].setup(opts)\n                end\n            end\n        end\n    }\n'})}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},8630:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/mason-0a4b4a707e3a4115130715bcc3af06ca.png"},8453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>o});var i=s(6540);const l={},a=i.createContext(l);function r(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);