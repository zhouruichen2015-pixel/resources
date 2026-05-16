# 🚀 快速部署指南

## 方式一：使用 GitHub 网页上传（最简单）

### 步骤 1: 创建新仓库
1. 打开 https://github.com/new
2. Repository name 输入: `resources`
3. 选择 Public
4. 点击 "Create repository"

### 步骤 2: 上传文件
在新建的仓库页面：
1. 点击 "uploading an existing file"
2. 将以下 3 个文件拖拽进去：
   - `index.html`
   - `style.css`
   - `script.js`
3. 点击 "Commit changes"

### 步骤 3: 启用 GitHub Pages
1. 进入仓库的 "Settings" 页面
2. 左侧菜单找到 "Pages"
3. 在 "Source" 下选择：
   - Branch: `main`
   - Folder: `/ (root)`
4. 点击 "Save"

### 步骤 4: 获取你的网站地址
等待 1-2 分钟，然后访问：
```
https://zhouruichen2015-pixel.github.io/resources
```

---

## 方式二：使用命令行上传

### 如果你还没克隆过仓库：
```bash
# 克隆仓库到本地
git clone https://github.com/zhouruichen2015-pixel/zhouruichen2015-pixel.github.io.git

# 进入仓库目录
cd zhouruichen2015-pixel.github.io

# 将 3 个文件复制到这个目录
# (index.html, style.css, script.js)

# 添加所有文件
git add .

# 提交更改
git commit -m "Add resource website"

# 推送到 GitHub
git push origin main
```

### 如果你已经有本地仓库：
```bash
cd 你的仓库目录
git add .
git commit -m "Add resource website"
git push origin main
```

---

## 方式三：部署到新仓库

```bash
# 创建新仓库并初始化
cd d:\life-assistant
git init
git add .
git commit -m "Initial commit - Resource website"
git branch -M main
git remote add origin https://github.com/zhouruichen2015-pixel/resources.git
git push -u origin main
```

然后在 GitHub 仓库 Settings → Pages 中启用。

---

## ⚠️ 重要提醒

### 1. 下载链接问题
目前的下载链接是指向 GitHub Releases 的示例链接，你需要：

1. **上传软件到 GitHub Releases**：
   - 进入你的 GitHub 仓库
   - 点击 "Releases" → "Draft a new release"
   - Tag version: `v1.0`
   - Title: `软件资源包 v1.0`
   - 拖拽上传 `.exe` 文件
   - 点击 "Publish release"

2. **更新下载链接**：
   编辑 `script.js`，将 `downloadUrl` 改为实际的下载链接：
   ```javascript
   downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/v1.0/7z2600-x64.exe"
   ```

### 2. 推荐的软件列表（已筛选）

从你的 D: 盘筛选出的优质软件：

| 软件名称 | 分类 | 建议 |
|---------|------|------|
| 7z2600-x64.exe | 压缩工具 | ✅ 必选 |
| ChromeSetup.exe | 浏览器 | ✅ 常用 |
| BraveBrowserSetup-BRV002.exe | 浏览器 | ✅ 推荐 |
| FormatFactory_setup.exe | 多媒体 | ✅ 推荐 |
| vlc-3.0.23-win64.exe | 播放器 | ✅ 轻量 |
| idman642build58.exe | 下载工具 | ✅ 必备 |
| WeChatWin_4.1.7.exe | 社交 | ✅ 常用 |
| bili_win-install.exe | 多媒体 | ⭐ 可选 |
| FirPE-V1.9.2-250307.exe | 系统工具 | ⚠️ 大文件 |
| NSudo 9.0 | 系统工具 | ⭐ 进阶用户 |
| LuxTTS | AI工具 | ⭐ 专业用户 |
| 视频自动批量剪辑引擎 | 多媒体 | ⚠️ 很大 |

---

## 🎯 验证部署成功

部署完成后，访问你的网站地址，应该能看到：

✅ 顶部标题 "周的资源站"
✅ 搜索框和筛选按钮
✅ 软件卡片网格展示
✅ 统计数字（12个软件等）
✅ 现代化渐变背景和动画

---

## 📝 后续维护

### 添加新软件
编辑 `script.js`，在 `softwareData` 数组末尾添加：

```javascript
{
    id: 13,
    name: "新软件名称",
    icon: "💿",
    category: "软件分类",
    filename: "文件名.exe",
    size: "50 MB",
    date: "2024-04-01",
    description: "软件描述...",
    downloadUrl: "https://..."
}
```

然后重新上传到 GitHub 即可。

---

## ❓ 常见问题

**Q: 网站显示 404？**
A: 等待 2-5 分钟，GitHub Pages 需要时间构建。如果超过 10 分钟仍 404，检查 Settings → Pages 配置。

**Q: 下载链接不工作？**
A: 确保软件已上传到 GitHub Releases，并且链接正确。

**Q: 如何修改网站标题？**
A: 编辑 `index.html` 第 6 行的 `<title>` 标签。

**Q: 可以添加更多软件吗？**
A: 可以，编辑 `script.js` 中的 `softwareData` 数组即可。

---

## 🌐 部署完成后

你的网站将拥有独立网址：
```
https://zhouruichen2015-pixel.github.io/resources
```

任何人都可以：
- 🔍 搜索软件
- 🏷️ 按分类浏览
- 📥 下载软件

但无法：
- ✏️ 修改内容
- 🗑️ 删除文件
- 📤 上传新软件

---

准备好部署了吗？按照上面的步骤操作即可！🎉
