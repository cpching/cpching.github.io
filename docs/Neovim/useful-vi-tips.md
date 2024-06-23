Essential Vi tips without using any plugins
# Useful Vi Tips
- 如果覺得什麼事情很冗就去看 vi 能不能解決
- [Text object](https://amikai.github.io/2020/09/22/vim-text-object/)
- 熟悉 Vi 原生功能
- 搜尋時加入 `\c` 字元可以忽略後面字串的大小寫
- `V` （大寫）可以進入 VISUAL LINE mode
- `Control+V` 可以進入 VISUAL BLOCK mode
## In VISUAL BLOCK Mode
- **選擇多行後可以利用`I`（大寫）一次插入相同內容到多行中**（也可以利用其它字元進行其它操作）
## In VISUAL * Mode
- `"*y` 
    - 複製所選的文字進 clipboard
- `U`（大寫）/`u`
    - 將所選文字轉成大寫/小寫
## In NORMAL Mode
- `"*yy` 
    - 複製目前這行的文字進 clipboard
- `I`/`A`（大寫）
    - 將 cursor 移至行首/尾進入 INSERT mode
- `C`（大寫）
    - 刪除並複製目前 cursor 至行尾的文字然後進入 INSERT mode
- `D`/`Y`（大寫）
    - 刪除/複製目前 cursor 至行尾的文字
- `yi`/`di`/`ci` + pair (e.g. `()`, `{}`, `""`)
    - 任一端可以將 pair 內的文字複製/刪除/刪除並進入 INSERT mode
- `ya`/`da`/`ca` + pair (e.g. `()`, `{}`, `""`)
    - 任一端可以將 pair 內的文字和 pair 本身複製/刪除/刪除並進入 INSERT mode
- `J`（大寫）
    - 把目前這行尾巴 `\n` 變成空格
- `S`（大寫）或 `cc`
    - 會把目前這行清空進入 INSERT mode 並在合適的 indentation level
    - 有時候在 NORMAL mode 按 `o` 後直接離開 INSERT mode 會失去indentation level，`S`（大寫）或 `cc`可以在該 indentation level 下編輯
- 大括號 `{` 和 `}`
    - 跳到下一個空行
- 在 pair (e.g. (), {}, "") 的一端按下 `%`
    - 跳到另一端
- `zz`
    - 將 cursor line 所在的這行在畫面中垂直置中
- `>>`/`<<`
    - 調整 indent
## In INSERT Mode
- Control+o
    - 暫時進入 NORMAL mode
- Control+y
    - 複製貼上上一行的字元

