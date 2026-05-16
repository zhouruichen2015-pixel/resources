# WIN 资源站 - PowerShell 上传脚本

## ⚠️ 使用前准备

在运行此脚本前，请确保：

1. ✅ 已安装 Git（下载：https://git-scm.com/download/win）
2. ✅ 已创建 GitHub 仓库（参考 QUICK_START.md）
3. ✅ 已登录 GitHub CLI 或配置了 Git 凭证

---

## 🚀 快速开始

### 方式 1：使用 GitHub CLI（推荐）

如果你已安装 GitHub CLI：

```powershell
# 克隆仓库
gh repo clone zhouruichen2015-pixel/resources

# 进入目录
cd resources

# 复制网站文件
Copy-Item "D:\life-assistant\index.html" .
Copy-Item "D:\life-assistant\style.css" .
Copy-Item "D:\life-assistant\script.js" .

# 提交并推送
git add .
git commit -m "添加 WIN 资源站"
git push origin main
```

### 方式 2：使用传统 Git

```powershell
# 配置 Git（如果还没配置）
git config --global user.name "zhouruichen2015-pixel"
git config --global user.email "your-email@example.com"

# 克隆仓库
git clone https://github.com/zhouruichen2015-pixel/resources.git
cd resources

# 复制网站文件
Copy-Item "D:\life-assistant\index.html" .
Copy-Item "D:\life-assistant\style.css" .
Copy-Item "D:\life-assistant\script.js" .

# 提交并推送
git add .
git commit -m "添加 WIN 资源站"
git push origin main
```

---

## 📤 上传软件文件

### 1. 创建 Release 版本

```powershell
# 进入仓库目录
cd D:\resources

# 创建新标签
git tag v1.0

# 推送标签
git push origin v1.0
```

### 2. 上传文件到 Release

在 GitHub 仓库页面：
1. 点击 **"Releases"**
2. 点击 **"Draft a new release"**
3. 填写版本信息
4. 在 **"Attach binaries"** 区域拖拽上传文件

### 3. 使用命令行上传（需要 GitHub CLI）

```powershell
# 安装 gh（如果还没安装）
# 下载地址：https://cli.github.com/

# 登录
gh auth login

# 创建 Release
gh release create v1.0 `
  --title "WIN 资源站 v1.0" `
  --description "首发版本，包含精选软件资源"

# 上传文件
gh release upload v1.0 "D:\path\to\your\file.exe"
```

---

## 🔄 一键部署脚本

创建一个 `deploy.ps1` 文件：

```powershell
# deploy.ps1
param(
    [string]$RepoPath = "D:\resources",
    [string]$WebsitePath = "D:\life-assistant"
)

Write-Host "🚀 开始部署 WIN 资源站..." -ForegroundColor Green

# 切换到仓库目录
Set-Location $RepoPath

# 复制网站文件
Write-Host "📁 复制网站文件..." -ForegroundColor Yellow
Copy-Item "$WebsitePath\index.html" . -Force
Copy-Item "$WebsitePath\style.css" . -Force
Copy-Item "$WebsitePath\script.js" . -Force

# 提交更改
Write-Host "📝 提交更改..." -ForegroundColor Yellow
git add .
git commit -m "更新 WIN 资源站 $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push origin main

Write-Host "✅ 部署完成！" -ForegroundColor Green
Write-Host "🌐 访问地址：https://zhouruichen2015-pixel.github.io/resources/" -ForegroundColor Cyan
```

使用方法：
```powershell
.\deploy.ps1
```

---

## 📊 检查文件上传状态

```powershell
# 查看 GitHub CLI 状态
gh release view v1.0

# 查看仓库文件
gh api repos/zhouruichen2015-pixel/resources/contents/
```

---

## 🆘 常见问题

### Q: 推送被拒绝？
```powershell
# 拉取最新代码
git pull origin main --rebase

# 重新推送
git push origin main
```

### Q: 凭证错误？
```powershell
# 清除缓存
git credential-cache exit

# 重新设置凭证
git config --global credential.helper store
```

### Q: 文件太大？
GitHub 单个文件限制 100MB，建议使用 Releases 上传大文件。

---

**有问题请参考 QUICK_START.md 或询问！** 💪
