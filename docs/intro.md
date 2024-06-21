---
sidebar_position: 1
---

# Docusaurus Tutorial
- 希望這個教學會讓人安心完成兩件事
    - 將 Docusaurus 發佈在 Github page 上
    - 利用 Github Action 進行自動部署
- 所參考的 Docusaurus 版本是 3.4.0。
    - 其實文件寫得滿仔細的但有些地方沒辦法馬上理解，也沒有找到其它參考，所以寫了這一篇
- 剛設定完，記憶猶新 (2024.06.19)

## Docusaurus Introduction
- Docusaurus 主要有三種模式的頁面，Pages、Docs、Blog
    - Pages: 常見的網頁，可以以 React.js 或是 markdown 撰寫
    - Docs: 以目次架構的形式呈現教學文件
    - Blog: 以部落格的形式呈現一篇一篇的貼文
## Installation
- 找個想放 Docusaurus 資料夾的路徑輸入以下 command，\<Name\> 為想取的資料夾名、\<Template\> 為想套入的模板名（官方推薦 `classic`）
    ```
    $ npx create-docusaurus@latest <Name> <Template>
    ```
- 更多安裝 command 可以參考
    - https://docusaurus.io/docs/installation

## Deployment
### Local Deployment
1. 進入建立好的 Docusaurus 資料夾
    ```
    $ cd <Name>
    ```
2. 執行利用 npm 運行專案
    ```
    $ npm run start
    ```
- 運行成功好可以在 `http://localhost:<Port>/` (\<Port\> 預設為 `3000`) 看到頁面

### [Deploying to GitHub Pages](https://docusaurus.io/docs/deployment#deploying-to-github-pages)
- 容易到令人懷疑
- 先到 GitHub 上建立一個專案， 專案的命名會影響到 GitHub page 的網址，有兩種命名方式
    - 以 GitHub 帳號名加上 `.github.io` (`<username>.github.io`): GitHub page 的網址為 `https://\<username>.github.io/`
    - 其它符合 GitHub repository 命名原則 (`<project-name>`): GitHub page 的網址為 `https://<username>.github.io/<project-name>`
- 到本地的 Docusaurus 資料夾下修改 `docusaurus.config.js` 檔案中 `Config` 下的幾個 key 的 value
    - `url`：設定為 `https://<username>.github.io`
    - `baseUrl`：
        - 如果專案名為 `<username>.github.io` 設定為 `/`
        - 如果專案名為 `<project-name>`，設定為 `/<project-name>/`
    - `organizationName`：設定為 `<username>`
    - `projectName`：設定為專案名
- 設定 Git 相關環境變數，設定完後執行 `yarn deploy`，相關環境變數可以參考 https://docusaurus.io/docs/deployment#environment-settings
    - 如果有設定過 GitHub 上的 SSH key 可以只設定 `USE_SSH=true` 然後執行
        - 可以去 GitHub repository 頁面上查看 deploy 的狀況
        ![GitHub Deployment](./images/GitHub-Deployment.png)
- 如果 deploy 成功就可以到 `<url><baseUrl>` 查看
- 去到 GitHub repository 頁面會發現有一支 branch `gh-pages` 被建立了，deploy 的頁面也是根據這支 branch 的版本建到

### [Triggering deployment with GitHub Actions](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions) 
- 想著「如果可以不用每次手動部署，可以做版控順便部署。」的時候 GitHub Actions 就出現了
- GitHub 就是讓人可以設定 trigger 條件和要 trigger 的指令
    - 本文設定的 trigger 條件是「push 到 GitHub repository 上的 main branch」，trigger 後執行部屬指令


