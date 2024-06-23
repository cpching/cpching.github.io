# Plugin Manager - Lazy
## Directory Structure (Mine)
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
## Installation
- Add the following Lua code to bootstrap **lazy.nvim**
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
- I add the code in the file `lua/plugin-manager.lua` and load them by `require("plugin-manager.lua")` in `~/.config/nvim/init.lua`

## Installation of Plugins
- Add different configuration files (*.lua) to `lua/plugins/`
- The shortest spec for installing a plugin
    ``` lua
    return
    {
        {
            '<plugin-short-url>'
        }
    }
    ```



