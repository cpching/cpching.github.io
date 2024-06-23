---
sidebar_position: 2
---

# Docusaurus
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
- 找個想放 Docusaurus 資料夾的路徑輸入以下指令，`<Name>` 為想取的資料夾名、`<Template>` 為想套入的模板名（官方推薦 `classic`）
    ```
    $ npx create-docusaurus@latest <Name> <Template>
    ```
- 更多安裝指令可以參考
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
- 運行成功可以在 `http://localhost:<Port>/` (`<Port>` 預設為 `3000`) 看到頁面

### [Deploying to GitHub Pages](https://docusaurus.io/docs/deployment#deploying-to-github-pages)
- 先到 GitHub 上建立一個專案， 專案的命名會影響到 GitHub page 的網址，有兩種命名方式
    - 以 GitHub 帳號名加上 `.github.io` (`<username>.github.io`)
        - GitHub page 的網址為 `https://<username>.github.io/`
    - 其它符合 GitHub repository 命名原則 (`<project-name>`)
        - GitHub page 的網址為 `https://<username>.github.io/<project-name>`
- 到本地的 Docusaurus 資料夾下修改 `docusaurus.config.js` 檔案中 `Config` 下的幾個 key 的 value
    - `url`：設定為 `https://<username>.github.io`
    - `baseUrl`：
        - 如果專案名為 `<username>.github.io` 設定為 `/`
        - 如果專案名為 `<project-name>`，設定為 `/<project-name>/`
    - `organizationName`：設定為 `<username>`
    - `projectName`：設定為專案名
- 設定 Git 相關環境變數，設定完後執行 `yarn deploy`，相關環境變數可以參考 https://docusaurus.io/docs/deployment#environment-settings
    - 如果有設定過 GitHub 上的 SSH key 可以只設定 `USE_SSH=true` 然後執行 `yarn deploy`
    - 可以去 GitHub repository 頁面上查看 deploy 的狀況
    ![GitHub Deployments](./images/GitHub-Deployments.png)
- 如果 deploy 成功就可以到 `<url><baseUrl>` 查看
- 去到 GitHub repository 頁面會發現有一支 branch `gh-pages` 被建立了，deploy 的頁面也是根據這支 branch 的版本建立

### [Triggering deployment with GitHub Actions](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions) 
- 想著「如果可以不用每次手動部署，可以做版控順便部署。」的時候 GitHub Actions 就出現了
- GitHub 就是讓人可以設定 trigger 條件和要 trigger 的指令
    - 本文設定的 trigger 條件是「push 到 GitHub repository 上的 main branch」，trigger 後執行「利用`gh-pages` branch 進行部署」指令
        > When a pull request is merged to the main branch or someone pushes to the main branch directly, it will be built and deployed to GitHub Pages. This job will be called deploy.

        > The deployment repo is a remote repository, different from the source. Instructions for this scenario assume publishing source is the gh-pages branch.
- （參考文件中 `Remote` 板塊下的步驟）
#### Operations
1. 為 GitHub deploy keys 利用 `ssh-keygen` 指令產生 SSH key， key 預設會生成為 `~/.ssh/id_rsa.pub`
    > Generate a new SSH key. Since this SSH key will be used in CI, make sure to not enter any passphrase.

    > By default, your public key should have been created in `~/.ssh/id_rsa.pub`; otherwise, use the name you've provided in the previous step to add your key to GitHub deploy keys.
2. 將上一步生成的 public key 複製到 clipboard （可以利用 `pbcopy < <public_key_file_path>` 指令），到 GitHub repository > 分頁 Settings > 側邊欄 Deploy keys > 按鈕 Add deploy key，填入 Tile 並將所複製的 public key 填入 Key
    ![GitHub Deploy Keys](./images/GitHub-Deploy-Keys.png)
    > Copy the key to clipboard with `pbcopy < ~/.ssh/id_rsa.pub` and paste it as a deploy key in the deployment repository. Copy the file content if the command line doesn't work for you. Check the box for Allow write access before saving your deployment key.
3. 將第一步中生成的 private key 複製到 clipboard（private key 所在的路徑跟 pulic key 相同、檔案名只差在副檔名），到 GitHub repository > 分頁 Settings > 側邊欄 Secrets and variables 下的 Actions > 按鈕 New repository secret，Name 填入 `GH_PAGES_DEPLOY` 並將所複製的 private key 填入 Secret
    ![GitHub Secret](./images/GitHub-Secret.png)
    > You'll need your private key as a GitHub secret to allow Docusaurus to run the deployment for you.

    > Copy your private key with `pbcopy < ~/.ssh/id_rsa` and paste a GitHub secret with the name `GH_PAGES_DEPLOY` on your source repository. Copy the file content if the command line doesn't work for you. Save your secret.
4. 在專案中建立 `.github/workflows` 資料夾，並建立一個 `deploy.yml` 檔案，內容可以直接參照文件的 GitHub action file 
    > Create your documentation workflow file in .github/workflows/. In this example, it's deploy.yml.
    ``` yml
    # Make sure to replace `<email>` and `<username>` with GitHub email and username
    # This file use npm

    name: Deploy to GitHub Pages

    on:
      pull_request:
        branches: [main]
      push:
        branches: [main]

    permissions:
      contents: write

    jobs:
      test-deploy:
        if: github.event_name != 'push'
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
            with:
              fetch-depth: 0
          - uses: actions/setup-node@v4
            with:
              node-version: 18
              cache: npm
          - name: Install dependencies
            run: npm ci
          - name: Test build website
            run: npm run build
      deploy:
        if: github.event_name != 'pull_request'
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
            with:
              fetch-depth: 0
          - uses: actions/setup-node@v4
            with:
              node-version: 18
              cache: npm
          - uses: webfactory/ssh-agent@v0.5.0
            with:
              ssh-private-key: ${{ secrets.GH_PAGES_DEPLOY }}
          - name: Deploy to GitHub Pages
            env:
              USE_SSH: true
            run: |
              git config --global user.email "<email>"
              git config --global user.name "<username>"
              npm ci
              yarn deploy
    ```
5. 接著試著 push 到 GitHub repository 中的 main branch 進行測試，順利的話就會在 Action 分頁下看到一個新的 workflow

