# 🎯 WIN 资源站 - 快速开始指南

## 🌐 你的网站地址

**https://zhouruichen2015-pixel.github.io/resources/**

> 部署后等待 1-2 分钟即可访问

---

## 📦 第一步：创建 GitHub 仓库

### 1.1 创建新仓库
1. 访问 https://github.com 并登录
2. 点击右上角 **"+"** → **"New repository"**
3. 配置如下：
   ```
   Repository name: resources
   Description: WIN - 软件资源站
   Visibility: ☑️ Public（必须公开！）
   ☑️ Add a README file
   ```
4. 点击 **"Create repository"**

### 1.2 上传网站文件
在仓库页面：
1. 点击 **"Add file"** → **"Upload files"**
2. 拖拽上传以下 3 个文件：
   - `index.html`
   - `style.css`
   - `script.js`
3. 点击 **"Commit changes"**

### 1.3 启用 GitHub Pages
1. 点击仓库的 **"Settings"**
2. 左侧菜单点击 **"Pages"**
3. 配置：
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
4. 点击 **"Save"**
5. **等待 1-2 分钟**

---

## 📁 第二步：上传软件文件

### 2.1 使用 GitHub Releases（推荐）

1. 在仓库页面点击 **"Releases"** → **"Draft a new release"**
2. 填写：
   ```
   Tag version: v1.0
   Release title: 首发版本
   ```
3. 点击 **"Publish release"**
4. 在发布页面拖拽上传软件文件
5. 软件将通过以下链接访问：
   ```
   https://github.com/zhouruichen2015-pixel/resources/releases/download/v1.0/文件名.exe
   ```

### 2.2 直接上传到仓库

1. 点击 **"Add file"** → **"Upload files"**
2. 拖拽上传软件文件
3. 修改 `script.js` 中的链接为：
   ```
   https://raw.githubusercontent.com/zhouruichen2015-pixel/resources/main/文件名.exe
   ```

---

## 🔧 第三步：配置下载链接

编辑 `script.js` 文件，修改每个软件的 `downloadUrl`：

### 方式 A：使用 Releases（推荐）
```javascript
downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/v1.0/7z2600-x64.exe"
```

### 方式 B：使用原始文件直链
```javascript
downloadUrl: "https://raw.githubusercontent.com/zhouruichen2015-pixel/resources/main/7z2600-x64.exe"
```

---

## ✅ 完成后检查清单

- [ ] 仓库名为 `resources`
- [ ] 仓库设置为 **Public**
- [ ] 上传了 `index.html`、`style.css`、`script.js`
- [ ] GitHub Pages 已启用
- [ ] 网站可访问：`https://zhouruichen2015-pixel.github.io/resources/`
- [ ] 软件文件已上传
- [ ] 下载链接已更新

---

## 🆘 故障排除

| 问题 | 解决方案 |
|------|---------|
| 网站 404 | 等待 2-5 分钟，然后刷新 |
| 下载 404 | 检查文件路径是否正确 |
| 无法访问 | 确认仓库是 Public |
| 样式错乱 | 检查 CSS 文件是否上传 |

---

## 📱 访问设备

- 💻 电脑：直接访问上述网址
- 📱 手机：同上，网站已响应式适配
- 🌐 全球：任何人都可以访问（无需登录）

---

**祝你使用愉快！** 🚀

*Made with ❤️ by WIN*
