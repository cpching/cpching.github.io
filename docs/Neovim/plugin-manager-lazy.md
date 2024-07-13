---
sidebar_position: 4
---

# Plugin Manager - Lazy
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
- Add different configuration files (*.lua) to `lua/plugins/`
- The shortest spec for installing a plugin
    ``` lua
    return
    {
        '<plugin-short-url>'
    }
    ```
- 如果沒有需要特別設定 plugin 就只需要新增上面的那段 code 到 `lua/plugins/` 的隨便一個（名字可以自己取）檔案下，接著存檔退出再次進入 Neovim 後 `:Lazy` 進入 Lazy 畫面，按下大寫 `I` 就可以安裝該 plugin

## configuration of Plugins
- 

