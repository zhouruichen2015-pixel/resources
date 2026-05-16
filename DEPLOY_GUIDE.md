# WIN 资源站 - GitHub 部署指南

## 🌐 你的网站地址

部署完成后，你的网站将在以下地址公开访问：

**https://zhouruichen2015-pixel.github.io/resources/**

---

## 📋 部署步骤（只需执行一次）

### 步骤 1：创建 GitHub 仓库

1. **登录 GitHub**
   - 访问 https://github.com
   - 登录你的账户：`zhouruichen2015-pixel`

2. **创建新仓库**
   - 点击右上角的 **"+"** 按钮
   - 选择 **"New repository"**
   
3. **配置仓库**
   - **Repository name**: `resources`（必须）
   - **Description**: `WIN - 软件资源站`
   - **选择 "Public"**（必须，这样别人才能访问）
   - ✅ 勾选 "Add a README file"
   - 点击 **"Create repository"**

### 步骤 2：上传网站文件

在仓库页面点击 **"Add file"** → **"Upload files"**

上传以下文件：
- `index.html`
- `style.css`
- `script.js`

### 步骤 3：启用 GitHub Pages

1. 在仓库页面点击 **"Settings"**
2. 左侧菜单找到 **"Pages"**
3. 在 "Source" 部分：
   - 选择 **"Deploy from a branch"**
   - Branch 选择 **"main"**
   - Folder 选择 **"/ (root)"**
   - 点击 **"Save"**

4. 等待 1-2 分钟，网站就会上线！

---

## 📁 上传软件文件

### 方法 1：使用 GitHub Releases（推荐）

1. 在仓库页面点击 **"Releases"** → **"Draft a new release"**
2. 点击 **"Upload assets"** 上传软件文件
3. 创建标签和版本号
4. 发布 Release

### 方法 2：直接上传到仓库

1. 进入仓库
2. 点击 **"Add file"** → **"Create new file"** 或 **"Upload files"**
3. 上传你的软件文件
4. 修改 `script.js` 中的下载链接指向正确路径

---

## 🔧 修改下载链接

编辑 `script.js` 文件，更新 `downloadUrl` 为实际的文件路径：

```javascript
downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/v1.0/你的文件名.exe"
```

或者使用原始文件链接：

```javascript
downloadUrl: "https://raw.githubusercontent.com/zhouruichen2015-pixel/resources/main/你的文件名.exe"
```

---

## 🎨 自定义网站内容

编辑 `script.js` 中的 `softwareData` 数组来自定义软件列表：

```javascript
{
    id: 1,
    name: "软件名称",
    icon: "📦",
    category: "分类名称",
    filename: "文件名.exe",
    size: "文件大小",
    date: "更新日期",
    description: "软件描述",
    downloadUrl: "下载链接",
    rating: 4.8,
    downloads: 12345,
    features: ["特性1", "特性2", "特性3"]
}
```

---

## ✅ 检查清单

- [ ] GitHub 账户已登录
- [ ] 创建了 `resources` 仓库
- [ ] 仓库设置为 Public
- [ ] 上传了 `index.html`、`style.css`、`script.js`
- [ ] 启用了 GitHub Pages
- [ ] 上传了软件文件
- [ ] 更新了下载链接

---

## 🆘 常见问题

### Q: 网站显示 404？
等待 2-5 分钟让 GitHub Pages 部署完成，然后刷新。

### Q: 下载链接 404？
确保文件已上传到仓库，并且链接路径正确。

### Q: 想上传更多文件？
在仓库中点击 "Add file" → "Upload files" 即可。

---

## 📞 获取帮助

如果遇到问题，请检查：
1. 仓库是否设置为 Public
2. GitHub Pages 是否已启用
3. 文件是否正确上传
4. 下载链接是否正确

---

**祝你使用愉快！** 🎉

*Created with ❤️ by WIN*
