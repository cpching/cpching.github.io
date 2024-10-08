---
sidebar_position: 4
---

# LSP
LSP 的全名為 Language Server Protocol，如名所述，它定義了 Language Clients 與 Language Servers 對接的方法。Language Servers 提供了即時的語法分析，當安裝了某個語言的 Language Server 後不同的 Language Clients （如 Neovim、VSCode 等編輯器）就可以與該 Language Server 溝通，呈現編輯時的語法檢查、程式碼補齊等功能。Neovim 中有許多與 LSP 相關的 Plugins 可以幫助使用者管理 LSP Servers 與設定 LSP Clients。

## LSP Servers Management: [mason-lspconfig](https://github.com/williamboman/mason-lspconfig.nvim)
mason-lspconfig 用來橋接 [Mason](./package-manager-mason.md) 和 Neovim。它可以用來檢查所需的 LSP servers（Mason 有提供的）是否安裝了，也可以設定成如果還沒就會幫使用者自動透過 Mason 下載安裝。
### Installation and Configuration
- 在 `lua/plugins/` 下新增一個 `lsp.lua` 檔案，在該檔案中新增一個 `language_servers` list 和 plugin 的設定內容，儲存後透過 `:Lazy` 進入 Lazy console 進行 plugin 安裝。
    ``` lua
    language_servers = {
        <server_name_1>, -- e.g. "lua_ls"
        <server_name_2>, -- e.g. "tsserver"
        -- ...
    }
    return
    {
        {
            'williamboman/mason-lspconfig.nvim', -- plugin-short-url
            config = function()
                require("mason-lspconfig").setup({
                    ensure_installed = language_servers,
                    automatic_installation = true,
                })
            end,
            dependencies = { 'williamboman/mason.nvim' }
        },
    }
    ```
- 儲存退出後再進入 Neovim 就會開始自動安裝 `language_servers` 中寫的 LSP Servers。
- Note: 利用 `:MasonInstall <server_name>` 的 `<server_name>` 跟寫在 `language_servers` 中的 `<server_name>` 可能會不同。
    - e.g. 要利用 mason-lspconfig 自動安裝 typescript-language-server 的話，`language_servers` 中要寫入 `"tsserver"` 而非 `"typescript-language-server"`


## LSP Client Management: [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)
`nvim-lspconfig` 提供 LSP Clients 的客製化選項，例如是否要利用浮動視窗呈現訊息、警告和錯誤的符號該是什麼、每個 language servers 使用時有什麼設定等。我個人認為 nvim-lspconfig 是 Neovim 中設定起來前三繁雜的 plugin，不過理解之後其它的 plugin 設定就顯得容易多了。

### Installation and Configuration
- 繼續在 `lua/plugins/lsp.lua` 檔案中 mason-lspconfig 設定後新增 nvim-lspconfig 的設定，儲存後透過 `:Lazy` 進入 Lazy console 進行 plugin 安裝。
    ``` lua
    return 
        {
            {
                'williamboman/mason-lspconfig.nvim', -- plugin-short-url
                config = function()
                    require("mason-lspconfig").setup({
                        ensure_installed = language_servers,
                        automatic_installation = true,
                    })
                end,
                dependencies = { 'williamboman/mason.nvim' }
            },
            {
                'neovim/nvim-lspconfig',
                enabled = true,
                dependencies = { "williamboman/mason-lspconfig.nvim", "williamboman/mason.nvim", "hrsh7th/cmp-nvim-lsp" },
                keys = {
                    { "<leader>gD", "<cmd>lua vim.lsp.buf.declaration()<CR>",                        noremap = true, silent = true, desc = "Go to declaration" },
                    { "<leader>gd", "<cmd>lua vim.lsp.buf.definition()<CR>",                         noremap = true, silent = true, desc = "Go to declaration" },
                    { "K",          "<cmd>lua vim.lsp.buf.hover()<CR>",                              noremap = true, silent = true },
                    { "gi",         "<cmd>lua vim.lsp.buf.implementation()<CR>",                     noremap = true, silent = true, desc = "Go to implementation" },
                    { "<C-s>",      "<cmd>lua vim.lsp.buf.signature_help()<CR>",                     noremap = true, silent = true },
                    { "gr",         "<cmd>lua vim.lsp.buf.references()<CR>",                         noremap = true, silent = true, desc = "Go to references" },
                    { "gl",         '<cmd>lua vim.diagnostic.open_float()<CR>',                      noremap = true, silent = true, desc = "Open diagnostic float" },
                    { "[e",         '<cmd>lua vim.diagnostic.goto_prev({ border = "rounded" })<CR>', noremap = true, silent = true, desc = "Prev error" },
                    { "]e",         '<cmd>lua vim.diagnostic.goto_next({ border = "rounded" })<CR>', noremap = true, silent = true, desc = "Next error" },
                    { "<leader>q",  "<cmd>lua vim.diagnostic.setloclist()<CR>",                      noremap = true, silent = true, desc = "Set Location List" },
                    { "<leader>rn", "<cmd>lua vim.lsp.buf.rename()<CR>",                             noremap = true, silent = true, desc = "Rename symbol" },
                },
                config = function()
                    -- Function to run when attaching to a new buffer with an LSP client.
                    -- The `nvim-cmp` almost supports LSP's capabilities so You should advertise it to LSP servers..
                    local capabilities
                    local status_ok, cmp_nvim_lsp = pcall(require, "cmp_nvim_lsp")
                    if status_ok then
                        capabilities = cmp_nvim_lsp.default_capabilities()
                    end

                    local lspconfig = require('lspconfig')

                    -- Define diagnostic signs for error, warning, hint, and info.
                    local signs = {
                        { name = "DiagnosticSignError", text = "" },
                        { name = "DiagnosticSignWarn", text = "" },
                        { name = "DiagnosticSignHint", text = "" },
                        { name = "DiagnosticSignInfo", text = "" },
                    }
                    for _, sign in ipairs(signs) do
                        vim.fn.sign_define(sign.name, { texthl = sign.name, text = sign.text, numhl = "" })
                    end

                    -- Define diagnostic configuration for virtual text, signs, and float windows.
                    local config = {
                        virtual_text = true,
                        signs = {
                            active = signs,
                        },
                        update_in_insert = true,
                        underline = true,
                        severity_sort = true,
                        float = {
                            focusable = true,
                            style = "minimal",
                            border = "rounded",

                            header = "",
                            prefix = "",
                        },
                    }

                    -- Configure diagnostics with defined settings.
                    vim.diagnostic.config(config)

                    -- Customize hover and signature help handlers for LSP.
                    vim.lsp.handlers["textDocument/hover"] = vim.lsp.with(vim.lsp.handlers.hover, {
                        border = "rounded",
                    })

                    vim.lsp.handlers["textDocument/signatureHelp"] = vim.lsp.with(vim.lsp.handlers.signature_help, {
                        border = "rounded",
                    })

                    local opts = {
                        on_attach = on_attach,
                        capabilities = capabilities,
                    }

                    -- Setup LSP servers based on predefined configurations.
                    for _, language_server in pairs(language_servers) do
                        language_server = vim.split(language_server, "@")[1]
                        local require_ok, conf_opts = pcall(require, "plugins.language-settings." .. language_server)
                        if require_ok then
                            conf_opts = vim.tbl_deep_extend("keep", conf_opts, opts)
                            lspconfig[language_server].setup(conf_opts)
                        else
                            lspconfig[language_server].setup(opts)
                        end
                    end
                end
            }
        }
    ```
- 在 `lua/plugins` 下新增一個 `language-settings` 資料夾用來放不同 language servers 的 `.lua` 設定檔案。
    - language servers 的設定檔檔名和 `language_servers` 中的 server name 一樣。
    - 不同的 language servers 有不同的設定選項，可參考 [mason-lspconfig: Available LSP servers](https://github.com/williamboman/mason-lspconfig.nvim?tab=readme-ov-file#available-lsp-servers)

