---
sidebar_position: 1
---

# Treesitter
Neovim 把 [tree-sitter](https://tree-sitter.github.io/tree-sitter/) 整合進來，幫助 Neovim 動態 parse 編輯內容，在編輯過程中建立內容的 syntax tree，讓使用者可以對 syntax tree 上的 node 進行操作，讓編輯更流暢。Neovim 原生包含了 `C`、`Lua`、` Markdown` 等語言的 parser，而 `nvim-treesitter` 這個套件可以用來安裝其它語言的 parser 並對 tree-sitter 使用進行設定。而 `nvim-treesitter-textobjects` 這個套件結合了 vi 中 [text objects](../basic-ways-to-change-text-in-vi#text-objects) 的概念，可以對 parse 出的 nodes 進行更多的操作。

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)
- 在 `lua/plugins/` 新增一個叫 `nvim-treesitter.lua` 的檔案並在檔案中新增一個 `language_parsers` 的 list 和 plugin 的設定。儲存後並透過 `:Lazy` 進入 Lazy console 進行 plugin 安裝。
    ``` lua
    local language_parsers = {
        <language_name_1>, -- e.g. "c"
        <language_name_2>, -- e.g. "lua"
        -- ...
    }

    return {
        "nvim-treesitter/nvim-treesitter",
        opts = {
            ensure_installed = language_parsers,
            auto_install = true,
            indent = { enable = true },
            highlight = { enable = true, },
            incremental_selection = {
                enable = true,
                keymaps = {
                    init_selection = "<CR>",
                    node_incremental = "<CR>",
                    scope_incremental = "<TAB>",
                    node_decremental = "<bs>",
                },
            },
        },
        config = function(_, opts)
            require("nvim-treesitter.configs").setup(opts)
        end,
    }
    ```
    - `incremental_selection` 中 `keymaps` 的
        - `init_selection` 是在設定 NORMAL mode 中開始選擇 node 的快捷鍵，預設是 `gnn`，按下後會進入 VISUAL mode。
        - `node_incremental` 是在設定 VISUAL mode 中擴增 node 至上一層有 name 的 parent 的快捷鍵（named parent），預設是 `grn`。Treesitter 中有 named node 和 anonymous node（像是 string literals 就是 anonymous nodes），可以觀察 syntax tree 發現 named node 會有一個 `name` attribute。
        - `scope_incremental` 是在設定 VISUAL mode 中擴增 node 的快捷鍵至自行定義在 `locals.scm` 的上層 scope，預設是 `grc`。
        - `node_decremental` 是在設定 VISUAL mode 中回到前一次選擇的 scope，預設是 `grm`。
- 接著可以透過 `:InspectTree` 查看 parser 所建立的 syntax tree 的樣子，樹中的 nodes 和 code 的內容會相互呼應。
![InspectTree](../images/InspectTree.png) 

## [nvim-treesitter-textobjects](https://github.com/nvim-treesitter/nvim-treesitter-textobjects)
要讓 tree-sitter 的 node 可以在 nvim 中像 textobjects 一樣被操作，需要另一個套件 `nvim-treesitter-textobjects`，相關主要的設定是寫在 `nvim-treesitter` 下。除了讓 node 像 built-in 的 textobjects 可以搭配 operators 操作外，`nvim-treesitter-textobjects` 也可以交換兩個 node 和快速移動到前一個或後一個 node 上。
    
- `nvim-treesitter-textobjects` 提供了 31 個 [built-in textobjects](https://github.com/nvim-treesitter/nvim-treesitter-textobjects?tab=readme-ov-file#built-in-textobjects)（e.g. class.inner、function.outer）。這些 text objects 可以透過設定 config 對它們進行操作。
- 在 `nvim-treesitter.lua` 中 `opts` 前新增一個 dependencies`，並在 `opts` 內新增一個 `textobjects`。（這塊是用 [nvim-treesitter-textobjects](https://github.com/nvim-treesitter/nvim-treesitter-textobjects?tab=readme-ov-file#nvim-treesitter-textobjects) 中的範例設定）
    ``` lua
        return {
            "nvim-treesitter/nvim-treesitter",
            dependencies = {
                "nvim-treesitter/nvim-treesitter-textobjects",
            },
            opts = {
                ensure_installed = language_parsers,
                auto_install = true,
                indent = { enable = true },
                highlight = { enable = true, },
                incremental_selection = {
                    enable = true,
                    keymaps = {
                        init_selection = "<CR>",
                        node_incremental = "<CR>",
                        scope_incremental = "<TAB>",
                        node_decremental = "<bs>",
                    },
                },
                textobjects = {
                    select = {
                        enable = true,
                        lookahead = true,
                        keymaps = {
                            -- You can use the capture groups defined in textobjects.scm
                            ["af"] = "@function.outer",
                            ["if"] = "@function.inner",
                            ["ac"] = "@class.outer",
                            -- You can optionally set descriptions to the mappings (used in the desc parameter of
                            -- nvim_buf_set_keymap) which plugins like which-key display
                            ["ic"] = { query = "@class.inner", desc = "Select inner part of a class region" },
                            -- You can also use captures from other query groups like `locals.scm`
                            ["as"] = { query = "@scope", query_group = "locals", desc = "Select language scope" },
                        },
                        -- You can choose the select mode (default is charwise 'v')
                        selection_modes = {
                            ['@parameter.outer'] = 'v', -- charwise
                            ['@function.outer'] = 'V', -- linewise
                            ['@class.outer'] = '<c-v>', -- blockwise
                        },
                        -- If you set this to `true` (default is `false`) then any textobject is
                        -- extended to include preceding or succeeding whitespace.
                        include_surrounding_whitespace = true,
                    },
                    swap = {
                        enable = true,
                        swap_next = {
                            ["<leader>a"] = "@parameter.inner",
                        },
                        swap_previous = { 
                            ["<leader>A"] = "@parameter.inner",
                        },
                    },
                    move = {
                        enable = true,
                        set_jumps = true, -- whether to set jumps in the jumplist
                        goto_next_start = {
                            ["]m"] = "@function.outer",
                            ["]]"] = { query = "@class.outer", desc = "Next class start" },
                            --
                            -- You can use regex matching (i.e. lua pattern) and/or pass a list in a "query" key to group multiple queries.
                            ["]o"] = "@loop.*",
                            -- ["]o"] = { query = { "@loop.inner", "@loop.outer" } }
                            --
                            -- You can pass a query group to use query from `queries/<lang>/<query_group>.scm file in your runtime path.
                            -- Below example nvim-treesitter's `locals.scm` and `folds.scm`. They also provide highlights.scm and indent.scm.
                            ["]s"] = { query = "@scope", query_group = "locals", desc = "Next scope" },
                            ["]z"] = { query = "@fold", query_group = "folds", desc = "Next fold" },
                        },
                        goto_next_end = {
                            ["]M"] = "@function.outer",
                            ["]["] = "@class.outer",
                        },
                        goto_previous_start = {
                            ["[m"] = "@function.outer",
                            ["[["] = "@class.outer",
                        },
                        goto_previous_end = {
                            ["[M"] = "@function.outer",
                            ["[]"] = "@class.outer",
                        },
                        -- Below will go to either the start or the end, whichever is closer.
                        -- Use if you want more granular movements
                        -- Make it even more gradual by adding multiple queries and regex.
                        goto_next = {
                          ["]d"] = "@conditional.outer",
                        },
                        goto_previous = {
                          ["[d"] = "@conditional.outer",
                        }
                    },
                },
            },
            config = function(_, opts)
                require("nvim-treesitter.configs").setup(opts)
            end,
        }
    ```
    - `textobjects` 下主要有三個相關動作可以設定
        - `select`
        - `swap`
        - `move`
### `select`
設定要選擇什麼 text objects，在使用時可以透過 `d`、`c`、`y` 等 operators 對所選的 text objects 進行操作。

下列是以套用上述設定的 NORMAL mode 下的範例，`^` 指向 cursor 所在的位置：
這段是利用 golang 寫的 main function
``` go
func main() {
      ^
    initDB()
    defer db.Close()
    // ...
}
```
按下 `daf` 會將整個 function 包含 function signature 的部分 delete 掉，所以上面的 code 會剩下一個空行。
``` go

^
```

而按下 `dif` 會將 function 不包含 function signature 的部分 delete 掉。所以會把 function 內的 statement 刪除留下 function 的 signature 和大括號。
``` go
func main() {
	
   ^
}
```


### `swap`
設定要如何和前或後一個與目前 cursor 下相同類型的 text objects 進行交換。

下列是以套用上述設定的 NORMAL mode 下的範例，`^` 指向 cursor 所在的位置：
這段是利用 golang 寫的 function
``` go
func main() {
    initDB()
    defer db.Close()
	
    buildPath := filepath.Join("..", "build")
                                ^
    // ...
}
```
按下 `<leader>a` 會讓指向的 parameter 和下一個 parameter 交換。
``` go
func main() {
    initDB()
    defer db.Close()
	
    buildPath := filepath.Join("build", "..")
                                        ^
    // ...
}
```

### `move`
設定要如何移動到前或後一個 text objects。

下列是以套用上述設定的 NORMAL mode 下的範例，`^` 指向 cursor 所在的位置：
這段是利用 golang 寫的 2 個 function
``` go
func getUsersHandler(w http.ResponseWriter, r *http.Request) {
        ^
    // ...
}

func createUserHandler(w http.ResponseWriter, r *http.Request) {
    // ...
}
```
按下 `]m` 會讓 cursor 跳到下一個 function 一開始的位置。
``` go
func getUsersHandler(w http.ResponseWriter, r *http.Request) {
    // ...
}

func createUserHandler(w http.ResponseWriter, r *http.Request) {
^
    // ...
}
```

