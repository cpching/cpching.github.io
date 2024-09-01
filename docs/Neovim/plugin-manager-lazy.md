---
sidebar_position: 4
---

# Plugin Manager: Lazy
安裝 plugins 讓人們的 Neovim 使用更加方便，而 plugin manager 是用來管理 plugins 的安裝、加載和設定。
這個 tutorial 是使用 Lazy 作為 Neovim 的 Plugin Manager。

## Directory Structure
檔案目錄的配值在設置完 plunins 後大概會長得像下面，本篇會專注在 `plugin-manager.lua` 的設定和 plugins 的安裝，`plugins/` 下各別 plugin 的設定會在下一篇章講解。
``` bash
~/.config/nvim
|-- init.lua
|-- lua/
    |-- keymaps.lua
    |-- options.lua
    |-- plugin-manager.lua
    |-- plugins/
        |-- plugin_a.lua
        |-- plugin_b.lua
```
## Installation of Lazy
- Add the file `lua/plugin-manager.lua` and load it by `require("plugin-manager.lua")` in `~/.config/nvim/init.lua`
- Add the following Lua code in `lua/plugin-manager.lua` to bootstrap **lazy.nvim**
    ``` lua
    local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
    if not vim.loop.fs_stat(lazypath) then
    vim.fn.system({
            "git",
            "clone",
            "--filter=blob:none",
            "https://github.com/folke/lazy.nvim.git",
            "--branch=stable", -- latest stable release
            lazypath,
            })
    end vim.opt.rtp:prepend(lazypath)

    -- the `lua` files under `plugins` directory will be loaded
    require("lazy").setup("plugins")

    ```
- `:wq` 後再進入 Neovim，使用指令 `:Lazy` 就可以看到 Lazy 的介面，代表 Lazy 可以成功載入，接著就是安裝和設定需要的 plugins

## Installation of Plugins
- 如果沒有需要特別設定 plugin 就只需要新增下面那段 code 到 `lua/plugins/` 的隨便一個（名字可以自己取）檔案下，接著存檔退出再次進入 Neovim 後 `:Lazy` 進入 Lazy 畫面，按下大寫 `I` 就可以安裝該 plugin
- Add different configuration files (*.lua) to `lua/plugins/`
- The shortest spec for installing a plugin
    ``` lua
    return
    {
        '<plugin-short-url>'
    }
    ```

## Configuration of Plugins
在設定 plugin 的過程中最常需要修改的就是 [setup](https://lazy.folke.io/spec#spec-setup) 的部分，特別是 `opts` 和 `config`。

這兩個都是能改變 plugin 使用過程的設定。每個 plugin 會自己定義自己可以客製化的地方，`opts` 是用來設定可以直接通過值設定的 options 而 `config` 中會寫入要在 plugin 被載入前執行的邏輯。可以客製化的設定通常在 plugin 的 document 中可以找到。

例如 [package manager - Mason](https://github.com/williamboman/mason.nvim) 的 configuration 可以透過 `opts` 改變介面呈現和當中的 icons。
    ``` lua
    return 
    {
        "williamboman/mason.nvim",
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
        }
    }
    ```

這兩個設定也可以同時存在，`opts` 可以做為 `config` 的第二個 argument 傳入
    ``` lua
    return 
    {
        '<plugin-short-url>',
        opts = {
            ...
        }
        config = function(_, opts)
            ...
        end
    }
    ```

Lazy 官方建議可以用 `opts` 搞定就不要使用 `config` 設定 
> Always use opts instead of config when possible. config is almost never needed.


# Reference
- [Plugin Spec](https://lazy.folke.io/spec) 

