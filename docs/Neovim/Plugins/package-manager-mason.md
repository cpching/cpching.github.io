---
sidebar_position: 3
---

# Package Manager: Mason
Neovim 可以利用外部的 server 完成像是自動補齊、語法檢查等功能，而 Mason 所提供的就是透過單一個 interface 管理這些外部的 server。
Mason 讓使用者能在 Neovim 中管理 LSP server、DAP servers、linters 和 formatter 的安裝、更新和刪除。

## Installation and Configuration
- 在 `lua/plugins/` 下新增一個 `mason.lua` 檔案，當中新增下列內容並儲存退出後再進入 Neovim 並透過 `:Lazy` 進入 Lazy console 進行 plugin 安裝。
    ``` lua
    return
    {
        "williamboman/mason.nvim", -- plugin-short-url
        enabled = true,
        opts = {
            ui = {
                icons = {
                    package_installed = "✓",
                    package_pending = "➜",
                    package_uninstalled = "✗",
                },
                border = "rounded",
            },
        },
    }
    ```
- 安裝後再次進入 Neovim 就可以透過`:Mason` 指令進入 Mason console 查看 Mason 所提供的 servers 和目前的狀態。
    ![mason](../images/mason.png)
    - 可以透過移動 cursor 至想安裝的 server 上按下大寫 `I` 安裝該 server
- 除了透過在 Mason 中透過大寫 `I` 安裝 server 外，也可以透過 `:MasonInstall <server_name>` 安裝 `Mason` 所提供的 servers 
    - 這裡 `<server_name>` 會是 console 列表中第一個名字，e.g. `:MasonInstall typescript-language-server`

