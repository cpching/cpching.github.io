---
sidebar_position: 2
---

# Basic Ways to Change Text in Vi
有三種在不進入 INSERT mode 的情況下編輯文件的方式，掌握這些方法可以快速地利用 Vi 編輯文件，在下面的 tutorial 中會分別介紹
- Operators and Motions: 介紹如何利用 operators 搭配 motions 編輯文件以及有什麼樣的 operators 和 motion
- VISUAL Mode: 介紹不同的 VISUAL mode 和進入方式
- Text Objects：介紹什麼是 text objects 和有什麼樣的 text objects 還有可以對它們進行什麼樣的操作

## Operators and Motions
使用組合 為 `{Operator}{Count}{Motion}`
- `{Operator}` 是要做的操作
- `{Count}` 是要幾次 motions
- `{Motion}` 是想把 cursor 帶到哪裡（motions 本身就是用來移動 cursor 的 command，沒有在前面加上 operators 的話就是單純移動 cursor）

Operator-motion 組合起來是要對目前 cursor 所在的地方到欲到達的地方間的 text 進行什麼操作。非常繞口，舉個例子 `d2w`，`d` 是 `delete`、`2w` 是 `move two words`，所以合在一起是 `delete two words`。

### Operators
常用的 operators 有
- `d`: Delete
- `c`: Change, delete and start INSERT mode
- `y`: Yank into register 
- `g~`: Invert case

### Motions
Motions 有 left-right motions、up-down motions、word motions 和 text object motions。如字面上的意思，它們分別是讓 cursor 在左右、上下、words 之間、text objects 之間移動

常用的 left-right motions 有
- `f{char}`: 把 cursor 移動到目前 cursor 右邊的 `{char}` 上
- `F{char}`: 把 cursor 移動到目前 cursor 左邊的 `{char}` 上
- `t{char}`: 把 cursor 移動到目前 cursor 右邊的 `{char}` 前
- `T{char}`: 把 cursor 移動到目前 cursor 左邊的 `{char}` 後

常用的 up-down motions 有
- `j`: 把 cursor 往下移一行
- `k`: 把 cursor 往上移一行
- `gg`: 把cursor 移到整份文件的第一行
- `G`: 把cursor 移到整份文件的最後一行

常用的 word motions 有
- `w`: words forward
- `W`: WORDS* forward
- `e`: Forward to the end of word
- `E`: Forward to the end of WORD
- `b`: words backward
- `B`: WORDS backward

常用的 text object motions 有
- `(`: [sentences](https://neovim.io/doc/user/motion.html#sentence) backward 
- `)`: [sentences](https://neovim.io/doc/user/motion.html#sentence) forward
- `{`: [paragraphs](https://neovim.io/doc/user/motion.html#paragraph) backward
- `}`: [paragraphs](https://neovim.io/doc/user/motion.html#paragraph) forward

### Note
- Operator `d` 和 operator `c` 在絕大部分的情況下只差在完成動作後的 mode，除了 `c{count}w`，它跟 `c{count}e` 的行為一樣，最後一個 word 後如果有空格不會被刪除。
- Operators 和 motions 之間可以加入 count
- words vs. WORDS：letters、digits 和 underscores 與其它 non-blank characters 連續出現時，是同一個 WORD 但不是同一個 word，例如 `WO-RD` 當中包含三個 words (`WO`、`-`、`RD`)，且整個是一個 WORD
    - words: A sequence of letters, digits and underscores or a sequence of other non-blank characters, separated with white space
    - WORDS: A sequence of non-blank characters, separated with white space


## VISUAL Mode
如果有更複雜的 motion 需要操作可以選擇進入 VISUAL mode，在 NORMAL mode 下按下
- `v` 進入 charwise VISUAL mode 會以 characters 為單位進行選取
- `V` 進入 linewise VISUAL mode 會以 lines 為單位進行選取
- `CTRL-v` 進入 blockwise visual mode 會以 rectangle 的形式選取
接著就可以利用 `{count}` 和 `{operator}` 的組合進行操作


## Text Objects
如果想在 Vi 中快速地編輯文件，理解 text objects 是一件重要的事。 
Text objects 是把 text group 起來的概念，可以利用 operators 直接對 text objects 進行操作或是進入 VISUAL mode 把 text objects 選起來操作。
1. 開頭會是 
    - `i`: 代表 inner
    - `a`: 代表 a 一個
2. 可以加入 `{count}` 代表要選擇幾個 objects
3. 搭配不同 character 代表不同 text objects
    - `w`: word
    - `W`: WORD
    - `s`: sentence
    - `p`: paragraph
    - `(` or `)` or `b`: block
    - `{` or `}` or `B`: Block
    - `t`: tag block
    - `[` or `]`: [] block
    - `<` or `>`: \<\> block
    - `"` or `"` or <code>`</code>: quote block
- Examples:
    - `aw`: a word, leading or trailing white space is included, but not counted.
    - `iw`: a word, leading or trailing white space is not included. Wite space between words is counted
- 要利用 operator 的話跟 operator-motion 很像是把 operator 放在前面、text object 放在後面、中間可以放 count


## Reference
- [Neovim document - Making small changes](https://neovim.io/doc/user/usr_04.html) 
- [Neovim document - Motions](https://neovim.io/doc/user/motion.html) 

