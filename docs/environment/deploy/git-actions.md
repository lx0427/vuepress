## actions

> 持续集成, [参考链接](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

### Generate new token

```bash
# Settings / Developer settings
# Generate new token
# 令牌值生成时可查看，以后只能更新或重新生成
# ** 注意保存
# c2e8d9d9f81ae055c00a47dae36220cf461967bf
```

### Secrets

```bash
# lx0427/vuepress / Settings / Secrets
# New repository secret
	name: ACCESS_TOKEN
	value: c2e8d9d9f81ae055c00a47dae36220cf461967bf # 与上面的保存一致
```

### 项目发布的根目录

package.json

```json
{
    "homepage": "https://lx0427.github.io/vuepress",
}
```

### workflow

ci.yml

```yml
name: GitHub Actions Build and Deploy Demo
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
        with:
          persist-credentials: false
      - name: Install and Build
        run: |
          npm install
          npm run-script build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: docs/.vuepress/dist
```

