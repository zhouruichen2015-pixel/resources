# 🌀 WIN飓风资源站

> 现代化软件资源下载平台 | Professional Software Resource Platform

✨ **一个专业、美观、功能强大的软件资源站，为您提供安全、快速、便捷的下载体验**

[在线访问](https://zhouruichen2015-pixel.github.io/resources) | [演示预览](#功能特性) | [快速部署](#部署到-github-pages)

---

## 🎯 项目简介

WIN飓风资源站是我精心打造的个人软件资源平台，汇集了日常所需的各类优质工具软件。网站采用现代化设计，支持暗色/亮色主题切换，提供流畅的用户体验。

### 核心特点

- 🌐 **永久免费** - 永久免费使用，无任何限制
- 🔒 **安全可靠** - 所有资源经过严格筛选，确保安全
- ⚡ **极速体验** - 优化的加载速度和流畅的动画效果
- 📱 **响应式设计** - 完美适配 PC、平板、手机等所有设备
- 🎨 **现代美观** - 采用最新设计趋势，视觉体验出色

---

## ✨ 功能特性

### 🔍 智能搜索与筛选
- 支持按软件名称、描述、分类快速搜索
- 实时搜索，输入即显示结果
- 多种排序方式：下载量、评分、名称、大小

### 🏷️ 分类管理
- 自动分类：浏览器、压缩工具、多媒体、系统工具等
- 点击分类标签快速筛选
- 分类统计展示

### 📊 数据统计
- 实时显示软件总数
- 累计下载量统计
- 平均评分展示
- 资源总大小统计
- 数字动画效果

### 🎨 界面特色
- 🌙 **暗色/亮色主题** - 一键切换，保护眼睛
- 🎬 **流畅动画** - 精心设计的过渡效果
- 📱 **完美适配** - 响应式布局，任意设备访问
- 🎯 **交互反馈** - Toast 通知，实时操作反馈

### 📥 下载功能
- 一键下载，操作简便
- 详情弹窗，了解更多
- 下载进度提示

---

## 📦 已收录软件

| 分类 | 软件列表 | 数量 |
|------|---------|------|
| 🌐 浏览器 | Chrome, Brave | 2 |
| 📦 压缩工具 | 7-Zip | 1 |
| 🎬 多媒体 | 格式工厂, VLC, 哔哩哔哩, 视频剪辑引擎 | 4 |
| ⬇️ 下载工具 | IDM | 1 |
| 💬 社交工具 | 微信 | 1 |
| 💾 系统工具 | FirPE, NSudo | 2 |
| 🤖 AI工具 | LuxTTS | 1 |

**总计：12 款精选软件**

---

## 🚀 快速开始

### 本地运行

1. **下载项目**
   ```bash
   # 克隆仓库
   git clone https://github.com/zhouruichen2015-pixel/resources.git
   
   # 进入目录
   cd resources
   ```

2. **启动服务**
   - **方式一**：直接双击 `index.html` 用浏览器打开
   - **方式二**：使用 VS Code 的 Live Server 插件
   - **方式三**：使用 Python 简易服务器
     ```bash
     python -m http.server 8000
     # 然后访问 http://localhost:8000
     ```

3. **开始使用**
   - 打开浏览器访问 http://localhost:8000
   - 搜索和浏览你需要的软件
   - 点击下载按钮获取软件

---

## 🌐 部署到 GitHub Pages

### 方法一：使用 GitHub 网页（最简单）

#### 步骤 1：创建仓库

1. 登录 GitHub 账号
2. 点击右上角 **"+"** → **"New repository"**
3. 填写仓库信息：
   - **Repository name**: `resources`
   - **Description**: `WIN飓风资源站 - 精选软件工具平台`
   - **Visibility**: Public（公开）
4. 点击 **"Create repository"**

#### 步骤 2：上传文件

1. 在新建的仓库页面，点击 **"uploading an existing file"**
2. 将以下 **3 个文件**拖拽上传：
   - `index.html` - 主页面
   - `style.css` - 样式文件
   - `script.js` - 交互脚本
3. 点击 **"Commit changes"**

#### 步骤 3：启用 GitHub Pages

1. 进入仓库的 **Settings** 页面
2. 左侧菜单找到 **"Pages"**
3. 在 **"Build and deployment"** 部分：
   - **Source**: Select "Deploy from a branch"
   - **Branch**: 选择 `main` (或 `master`)，文件夹选择 `/ (root)`
4. 点击 **"Save"**

#### 步骤 4：等待部署

- ⏱️ 等待 **1-2 分钟**让 GitHub 构建网站
- 🌐 访问你的网站：`https://zhouruichen2015-pixel.github.io/resources`

**🎉 恭喜！你的网站已上线！**

---

### 方法二：使用命令行

#### 如果还没有克隆仓库：

```bash
# 克隆你的 GitHub Pages 仓库
git clone https://github.com/zhouruichen2015-pixel/zhouruichen2015-pixel.github.io.git

# 进入仓库目录
cd zhouruichen2015-pixel.github.io

# 将 3 个文件复制到这个目录
# (index.html, style.css, script.js)

# 添加所有文件到 Git
git add .

# 提交更改
git commit -m "✨ 添加 WIN飓风资源站 v1.0"

# 推送到 GitHub
git push origin main
```

#### 如果你已有本地仓库：

```bash
cd 你的仓库目录

# 添加文件
git add .

# 提交
git commit -m "✨ 添加 WIN飓风资源站"

# 推送
git push origin main
```

---

## ⚙️ 自定义配置

### 🎨 修改网站信息

编辑 `index.html` 文件：

```html
<!-- 修改标题 -->
<title>你的网站标题</title>

<!-- 修改品牌名称 -->
<span class="brand-text">WIN<span class="brand-highlight">飓风</span></span>

<!-- 修改统计信息区域 -->
<h1 class="hero-title">
    <span class="title-main">你的<span>名称</span></span>
</h1>
```

### 🌈 修改主题颜色

编辑 `style.css` 文件顶部的 CSS 变量：

```css
:root {
    --primary: #6366f1;      /* 主色调 - 靛蓝色 */
    --secondary: #8b5cf6;    /* 辅助色 - 紫色 */
    --accent: #f59e0b;       /* 强调色 - 琥珀色 */
    --success: #10b981;      /* 成功色 - 绿色 */
    --danger: #ef4444;       /* 危险色 - 红色 */
}
```

### 📦 添加新软件

编辑 `script.js` 文件中的 `softwareData` 数组，添加新软件：

```javascript
{
    id: 13,  // 新的ID
    name: "软件名称",
    icon: "💿",  // 选择一个表情图标
    category: "软件分类",
    filename: "文件名.exe",
    size: "100 MB",
    date: "2024-04-01",
    description: "软件描述...",
    downloadUrl: "https://github.com/.../software.exe",
    rating: 4.8,  // 评分 0-5
    downloads: 5000,  // 下载次数
    features: ["特性1", "特性2", "特性3"]  // 核心特性
}
```

### 🔗 配置下载链接

1. **上传软件到 GitHub Releases**：
   - 进入你的 GitHub 仓库
   - 点击 **"Releases"** → **"Draft a new release"**
   - Tag version: `v1.0`
   - Title: `软件资源包 v1.0`
   - 拖拽上传 `.exe` 文件
   - 点击 **"Publish release"**

2. **获取下载链接**：
   - 在 Release 页面点击文件，获取下载链接
   - 格式：`https://github.com/用户名/仓库/releases/download/v1.0/文件名.exe`

3. **更新代码**：
   - 编辑 `script.js`
   - 找到对应软件的 `downloadUrl` 字段
   - 替换为实际的下载链接

---

## 🎯 使用指南

### 🔍 搜索软件
1. 在顶部搜索框输入关键词
2. 支持按名称、描述、分类搜索
3. 实时显示搜索结果

### 🏷️ 筛选分类
1. 点击分类标签（如"浏览器"、"压缩工具"）
2. 快速筛选同类软件
3. 点击"全部"显示所有软件

### 📊 排序方式
- **按下载量** - 显示最受欢迎的软件
- **按评分** - 显示评分最高的软件
- **按名称** - 按字母顺序排列
- **按大小** - 按文件大小排序

### 📥 下载软件
1. **方式一**：点击软件卡片下方的"下载"按钮
2. **方式二**：点击卡片进入详情页，点击"立即下载"
3. **方式三**：点击卡片查看详细信息后再下载

### 🌙 切换主题
- 点击导航栏右上角的 🌓 按钮
- 即可在亮色/暗色主题间切换
- 设置会自动保存

---

## 📱 响应式适配

网站完美适配各种设备：

| 设备类型 | 屏幕宽度 | 显示效果 |
|---------|---------|---------|
| 💻 桌面电脑 | > 1024px | 完整四列统计，三列软件卡片 |
| 📱 平板电脑 | 768px - 1024px | 两列统计，两列卡片 |
| 📱 大手机 | 480px - 768px | 单列统计，单列卡片 |
| 📱 小手机 | < 480px | 紧凑布局，优化间距 |

---

## 🛠️ 技术栈

- **HTML5** - 语义化标签，SEO 友好
- **CSS3** - 现代 CSS 特性，Flexbox + Grid
- **JavaScript ES6** - 原生 JavaScript，无框架依赖
- **Google Fonts** - Inter 字体
- **GitHub Pages** - 免费托管服务
- **Font Awesome** - 图标库（部分使用 Emoji）

---

## 📝 更新日志

### v1.0.0 (2024)
- ✨ 初始版本发布
- 🎨 现代化 UI 设计
- 🌙 支持暗色/亮色主题
- 🔍 智能搜索功能
- 🏷️ 分类筛选
- 📊 数据统计展示
- 📥 下载功能
- 📱 完全响应式布局
- 🎬 流畅动画效果

---

## ❓ 常见问题

### Q1: 网站显示 404 错误？
**A:** 等待 2-5 分钟，GitHub Pages 需要时间构建。如果超过 10 分钟仍 404，检查 Settings → Pages 配置是否正确。

### Q2: 下载链接不工作？
**A:** 确保软件已上传到 GitHub Releases，并且链接格式正确。GitHub Releases 的下载链接格式为：
```
https://github.com/用户名/仓库/releases/download/版本号/文件名
```

### Q3: 如何修改网站标题？
**A:** 编辑 `index.html` 第 6-7 行的 `<title>` 标签。

### Q4: 可以添加更多软件吗？
**A:** 当然可以！编辑 `script.js` 中的 `softwareData` 数组，按照现有格式添加新软件即可。

### Q5: 如何添加学习资料而不是软件？
**A:** 修改 `script.js` 中的数据结构，将 `downloadUrl` 改为资料链接，`category` 改为资料类型（如"PDF资料"、"视频教程"）。

### Q6: 网站加载很慢怎么办？
**A:** 
- 减少动画效果：删除 `style.css` 中的 `@keyframes` 动画
- 优化图片：使用 CDN 或压缩图片
- 启用 Gzip 压缩（服务器端配置）

---

## 🤝 贡献

欢迎提出建议和改进意见！

- 🐛 报告 Bug
- 💡 提出新功能
- 📖 完善文档
- 🔧 提交代码

---

## 📄 许可证

本项目采用 MIT 许可证，可以自由使用、修改和分发。

---

## 👤 作者信息

**WIN飓风**
- GitHub: [@zhouruichen2015-pixel](https://github.com/zhouruichen2015-pixel)
- 项目地址: [https://github.com/zhouruichen2015-pixel/resources](https://github.com/zhouruichen2015-pixel/resources)

---

## 🙏 致谢

- [GitHub Pages](https://pages.github.com/) - 免费托管服务
- [Google Fonts](https://fonts.google.com/) - 优秀字体
- [Flaticon](https://www.flaticon.com/) - 图标资源

---

<div align="center">

**如果这个项目对你有帮助，请点个 ⭐ Star！**

Made with ❤️ by **WIN飓风**

</div>
