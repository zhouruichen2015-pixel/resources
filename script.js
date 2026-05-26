const softwareData = [
    {
        id: 1,
        name: "7-Zip",
        icon: "📦",
        category: "压缩工具",
        filename: "7z2600-x64.exe",
        size: "1.5 MB",
        date: "2024-01-15",
        description: "免费开源的压缩/解压缩工具，支持多种格式包括RAR、ZIP、7z等，轻量高效且完全免费",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/7z2600-x64.exe",
        rating: 4.9,
        downloads: 12580,
        features: ["支持多种格式", "轻量高效", "完全免费"]
    },
    {
        id: 2,
        name: "Brave浏览器",
        icon: "🦁",
        category: "浏览器",
        filename: "BraveBrowserSetup-BRV002.exe",
        size: "95 MB",
        date: "2024-03-20",
        description: "注重隐私的现代浏览器，内置广告拦截器和追踪保护，基于Chromium内核性能强劲",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/BraveBrowserSetup-BRV002.exe",
        rating: 4.8,
        downloads: 8920,
        features: ["隐私保护", "广告拦截", "快速浏览"]
    },
    {
        id: 3,
        name: "Chrome浏览器",
        icon: "🌐",
        category: "浏览器",
        filename: "ChromeSetup.exe",
        size: "89 MB",
        date: "2024-03-18",
        description: "Google Chrome，全球最受欢迎的浏览器，快速稳定，支持扩展程序生态丰富",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/ChromeSetup.exe",
        rating: 4.9,
        downloads: 23450,
        features: ["全球最流行", "扩展丰富", "同步功能"]
    },
    {
        id: 4,
        name: "格式工厂",
        icon: "🎬",
        category: "多媒体",
        filename: "FormatFactory_setup.exe",
        size: "102 MB",
        date: "2024-02-10",
        description: "强大的多媒体格式转换工具，支持视频、音频、图片等多种格式转换，一站式解决所有格式问题",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/FormatFactory_setup.exe",
        rating: 4.7,
        downloads: 15680,
        features: ["格式全面", "操作简单", "完全免费"]
    },
    {
        id: 5,
        name: "VLC播放器",
        icon: "🎵",
        category: "多媒体",
        filename: "vlc-3.0.23-win64.exe",
        size: "41 MB",
        date: "2024-01-28",
        description: "免费开源的多媒体播放器，支持几乎所有音视频格式，无需安装解码包轻量快速",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/vlc-3.0.23-win64.exe",
        rating: 4.8,
        downloads: 11230,
        features: ["格式全面", "轻量快速", "免费开源"]
    },
    {
        id: 6,
        name: "IDM下载器",
        icon: "⬇️",
        category: "下载工具",
        filename: "idman642build58.exe",
        size: "10 MB",
        date: "2024-03-10",
        description: "Internet Download Manager，最强大的下载加速器，支持多线程和浏览器集成下载速度提升10倍",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/idman642build58.exe",
        rating: 4.9,
        downloads: 18920,
        features: ["多线程下载", "浏览器集成", "速度最快"]
    },
    {
        id: 7,
        name: "微信",
        icon: "💬",
        category: "社交工具",
        filename: "WeChatWin_4.1.7.exe",
        size: "186 MB",
        date: "2024-03-15",
        description: "微信电脑版，跨平台沟通工具，支持文字、语音、视频通话及文件传输办公必备",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/WeChatWin_4.1.7.exe",
        rating: 4.6,
        downloads: 24560,
        features: ["沟通便捷", "文件传输", "朋友圈"]
    },
    {
        id: 8,
        name: "哔哩哔哩",
        icon: "📺",
        category: "多媒体",
        filename: "bili_win-install.exe",
        size: "125 MB",
        date: "2024-03-22",
        description: "哔哩哔哩客户端，海量视频内容，弹幕互动，追番追剧必备娱乐神器",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/bili_win-install.exe",
        rating: 4.7,
        downloads: 9870,
        features: ["海量内容", "弹幕互动", "追番神器"]
    },
    {
        id: 9,
        name: "FirPE",
        icon: "💾",
        category: "系统工具",
        filename: "FirPE-V1.9.2-250307.exe",
        size: "650 MB",
        date: "2025-03-07",
        description: "轻量级系统维护PE工具，支持系统安装、备份、恢复、磁盘管理等系统维护全能工具",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/FirPE-V1.9.2-250307.exe",
        rating: 4.8,
        downloads: 6780,
        features: ["系统安装", "备份恢复", "磁盘管理"]
    },
    {
        id: 10,
        name: "NSudo",
        icon: "⚡",
        category: "系统工具",
        filename: "NSudo 9.0",
        size: "15 MB",
        date: "2024-02-28",
        description: "系统权限管理工具，一键获取管理员权限，轻松运行需要高权限的程序系统优化必备",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/NSudo-9.0.zip",
        rating: 4.9,
        downloads: 5430,
        features: ["权限管理", "一键提权", "轻量安全"]
    },
    {
        id: 11,
        name: "LuxTTS",
        icon: "🗣️",
        category: "AI工具",
        filename: "LuxTTS",
        size: "500 MB",
        date: "2024-03-25",
        description: "离线本地部署的大模型TTS工具，支持高质量语音合成，保护隐私无需联网",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/LuxTTS.zip",
        rating: 4.8,
        downloads: 3210,
        features: ["离线运行", "高质量合成", "隐私保护"]
    },
    {
        id: 12,
        name: "视频剪辑引擎",
        icon: "🎥",
        category: "多媒体",
        filename: "视频自动批量剪辑引擎v2026.exe",
        size: "856 MB",
        date: "2026-01-01",
        description: "自动化视频批量剪辑工具，支持添加转场、特效、字幕等，提高剪辑效率百倍",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/video-editor.exe",
        rating: 4.7,
        downloads: 4120,
        features: ["批量处理", "转场特效", "效率提升"]
    }
,
    {
        id: 13,
        name: "4K Video Downloader+",
        icon: "🎬",
        category: "多媒体",
        filename: "4kvideodownloaderplus_26.0.3_x64_online.exe",
        size: "36 MB",
        date: "2025-06-01",
        description: "强大的在线视频下载工具，支持 YouTube、B站、抖音等主流平台，4K/8K高清下载，批量处理",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/4kvideodownloaderplus_26.0.3_x64_online.exe",
        rating: 4.7,
        downloads: 6800,
        features: ["多平台支持", "4K/8K高清", "批量下载"]
    },
    {
        id: 14,
        name: "Clash Verge",
        icon: "🛡️",
        category: "网络工具",
        filename: "Clash.Verge_2.4.5_x64-setup.exe",
        size: "36 MB",
        date: "2025-05-15",
        description: "基于 Clash 内核的代理客户端，支持多规则管理、订阅导入、实时流量监控，网络加速利器",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/Clash.Verge_2.4.5_x64-setup.exe",
        rating: 4.6,
        downloads: 9200,
        features: ["规则管理", "订阅导入", "实时监控"]
    },
    {
        id: 15,
        name: "Dev-C++",
        icon: "💻",
        category: "开发工具",
        filename: "Dev-Cpp.6.7.5.MinGW-w64.X86_64.GCC.10.3.Setup.exe",
        size: "55 MB",
        date: "2025-04-10",
        description: "轻量级 C/C++ 集成开发环境，内置 MinGW-w64 编译器，支持代码高亮和调试，编程入门首选",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/Dev-Cpp.6.7.5.MinGW-w64.X86_64.GCC.10.3.Setup.exe",
        rating: 4.5,
        downloads: 4500,
        features: ["C/C++ IDE", "内置编译器", "轻量免费"]
    },
    {
        id: 16,
        name: "Everything",
        icon: "🔍",
        category: "系统工具",
        filename: "Everything-1.4.1.1032.x86-Setup.exe",
        size: "1.7 MB",
        date: "2025-03-20",
        description: "秒级文件搜索神器，基于 NTFS USN 日志实现瞬时索引，百万文件毫秒级定位",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/Everything-1.4.1.1032.x86-Setup.exe",
        rating: 4.9,
        downloads: 15600,
        features: ["瞬时搜索", "超轻量", "正则支持"]
    },
    {
        id: 17,
        name: "钉钉",
        icon: "📱",
        category: "社交工具",
        filename: "dingtalk_downloader.exe",
        size: "2 MB",
        date: "2025-04-05",
        description: "阿里巴巴旗下企业协作平台，视频会议、文档协同、考勤打卡一站式办公",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/dingtalk_downloader.exe",
        rating: 4.4,
        downloads: 11200,
        features: ["企业办公", "视频会议", "协同工作"]
    }];

let filteredSoftware = [...softwareData,
    {
        id: 13,
        name: "4K Video Downloader+",
        icon: "🎬",
        category: "多媒体",
        filename: "4kvideodownloaderplus_26.0.3_x64_online.exe",
        size: "36 MB",
        date: "2025-06-01",
        description: "强大的在线视频下载工具，支持 YouTube、B站、抖音等主流平台，4K/8K高清下载，批量处理",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/4kvideodownloaderplus_26.0.3_x64_online.exe",
        rating: 4.7,
        downloads: 6800,
        features: ["多平台支持", "4K/8K高清", "批量下载"]
    },
    {
        id: 14,
        name: "Clash Verge",
        icon: "🛡️",
        category: "网络工具",
        filename: "Clash.Verge_2.4.5_x64-setup.exe",
        size: "36 MB",
        date: "2025-05-15",
        description: "基于 Clash 内核的代理客户端，支持多规则管理、订阅导入、实时流量监控，网络加速利器",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/Clash.Verge_2.4.5_x64-setup.exe",
        rating: 4.6,
        downloads: 9200,
        features: ["规则管理", "订阅导入", "实时监控"]
    },
    {
        id: 15,
        name: "Dev-C++",
        icon: "💻",
        category: "开发工具",
        filename: "Dev-Cpp.6.7.5.MinGW-w64.X86_64.GCC.10.3.Setup.exe",
        size: "55 MB",
        date: "2025-04-10",
        description: "轻量级 C/C++ 集成开发环境，内置 MinGW-w64 编译器，支持代码高亮和调试，编程入门首选",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/Dev-Cpp.6.7.5.MinGW-w64.X86_64.GCC.10.3.Setup.exe",
        rating: 4.5,
        downloads: 4500,
        features: ["C/C++ IDE", "内置编译器", "轻量免费"]
    },
    {
        id: 16,
        name: "Everything",
        icon: "🔍",
        category: "系统工具",
        filename: "Everything-1.4.1.1032.x86-Setup.exe",
        size: "1.7 MB",
        date: "2025-03-20",
        description: "秒级文件搜索神器，基于 NTFS USN 日志实现瞬时索引，百万文件毫秒级定位",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/Everything-1.4.1.1032.x86-Setup.exe",
        rating: 4.9,
        downloads: 15600,
        features: ["瞬时搜索", "超轻量", "正则支持"]
    },
    {
        id: 17,
        name: "钉钉",
        icon: "📱",
        category: "社交工具",
        filename: "dingtalk_downloader.exe",
        size: "2 MB",
        date: "2025-04-05",
        description: "阿里巴巴旗下企业协作平台，视频会议、文档协同、考勤打卡一站式办公",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/dingtalk_downloader.exe",
        rating: 4.4,
        downloads: 11200,
        features: ["企业办公", "视频会议", "协同工作"]
    }];
let currentCategory = 'all';
let currentSort = 'downloads';
let currentView = 'grid';
let theme = localStorage.getItem('theme') || 'light';

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setTheme(theme);
    updateStatistics();
    renderCategoryFilters();
    renderCategories();
    renderSoftware();
    setupEventListeners();
    setupAnimations();
}

function setTheme(newTheme) {
    theme = newTheme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
}

function toggleMobileMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

function updateStatistics() {
    const totalSoftware = softwareData.length;
    const totalDownloads = softwareData.reduce((sum, s) => sum + s.downloads, 0);
    const avgRating = (softwareData.reduce((sum, s) => sum + s.rating, 0) / totalSoftware).toFixed(1);
    
    animateNumber('total-software', totalSoftware);
    animateNumber('total-downloads', totalDownloads);
    animateNumber('avg-rating', parseFloat(avgRating), true);
}

function animateNumber(elementId, target, isDecimal = false) {
    const element = document.getElementById(elementId);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString();
    }, duration / steps);
}

function animateSize(elementId, sizeMB) {
    const element = document.getElementById(elementId);
    if (sizeMB >= 1024) {
        element.textContent = (sizeMB / 1024).toFixed(1) + ' GB';
    } else {
        element.textContent = Math.floor(sizeMB) + ' MB';
    }
}

function parseFileSize(sizeStr) {
    const match = sizeStr.match(/([\d.]+)\s*(MB|GB|KB)/i);
    if (!match) return 0;
    let size = parseFloat(match[1]);
    const unit = match[2].toUpperCase();
    if (unit === 'GB') size *= 1024;
    return size;
}

function renderCategoryFilters() {
    const categories = [...new Set(softwareData.map(s => s.category)),
    {
        id: 13,
        name: "4K Video Downloader+",
        icon: "🎬",
        category: "多媒体",
        filename: "4kvideodownloaderplus_26.0.3_x64_online.exe",
        size: "36 MB",
        date: "2025-06-01",
        description: "强大的在线视频下载工具，支持 YouTube、B站、抖音等主流平台，4K/8K高清下载，批量处理",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/4kvideodownloaderplus_26.0.3_x64_online.exe",
        rating: 4.7,
        downloads: 6800,
        features: ["多平台支持", "4K/8K高清", "批量下载"]
    },
    {
        id: 14,
        name: "Clash Verge",
        icon: "🛡️",
        category: "网络工具",
        filename: "Clash.Verge_2.4.5_x64-setup.exe",
        size: "36 MB",
        date: "2025-05-15",
        description: "基于 Clash 内核的代理客户端，支持多规则管理、订阅导入、实时流量监控，网络加速利器",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/Clash.Verge_2.4.5_x64-setup.exe",
        rating: 4.6,
        downloads: 9200,
        features: ["规则管理", "订阅导入", "实时监控"]
    },
    {
        id: 15,
        name: "Dev-C++",
        icon: "💻",
        category: "开发工具",
        filename: "Dev-Cpp.6.7.5.MinGW-w64.X86_64.GCC.10.3.Setup.exe",
        size: "55 MB",
        date: "2025-04-10",
        description: "轻量级 C/C++ 集成开发环境，内置 MinGW-w64 编译器，支持代码高亮和调试，编程入门首选",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/Dev-Cpp.6.7.5.MinGW-w64.X86_64.GCC.10.3.Setup.exe",
        rating: 4.5,
        downloads: 4500,
        features: ["C/C++ IDE", "内置编译器", "轻量免费"]
    },
    {
        id: 16,
        name: "Everything",
        icon: "🔍",
        category: "系统工具",
        filename: "Everything-1.4.1.1032.x86-Setup.exe",
        size: "1.7 MB",
        date: "2025-03-20",
        description: "秒级文件搜索神器，基于 NTFS USN 日志实现瞬时索引，百万文件毫秒级定位",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/Everything-1.4.1.1032.x86-Setup.exe",
        rating: 4.9,
        downloads: 15600,
        features: ["瞬时搜索", "超轻量", "正则支持"]
    },
    {
        id: 17,
        name: "钉钉",
        icon: "📱",
        category: "社交工具",
        filename: "dingtalk_downloader.exe",
        size: "2 MB",
        date: "2025-04-05",
        description: "阿里巴巴旗下企业协作平台，视频会议、文档协同、考勤打卡一站式办公",
        downloadUrl: "https://github.com/zhouruichen2015-pixel/resources/releases/download/1/dingtalk_downloader.exe",
        rating: 4.4,
        downloads: 11200,
        features: ["企业办公", "视频会议", "协同工作"]
    }];
    const chipsContainer = document.getElementById('category-chips');
    
    chipsContainer.innerHTML = `
        <button class="filter-chip active" onclick="filterByCategory('all')">全部</button>
        ${categories.map(cat => `
            <button class="filter-chip" onclick="filterByCategory('${cat}')">${cat}</button>
        `).join('')}
    `;
}

function renderCategories() {
    const categories = {};
    softwareData.forEach(s => {
        if (!categories[s.category]) {
            categories[s.category] = { count: 0, icon: s.icon };
        }
        categories[s.category].count++;
    });
    
    const categoriesGrid = document.getElementById('categories-grid');
    const categoryIcons = {
        '压缩工具': '📦',
        '浏览器': '🌐',
        '多媒体': '🎬',
        '下载工具': '⬇️',
        '社交工具': '💬',
        '系统工具': '💾',
        'AI工具': '🤖'
    };
    
    categoriesGrid.innerHTML = Object.entries(categories).map(([name, data]) => `
        <div class="category-card" onclick="filterByCategory('${name}')">
            <div class="category-icon">${categoryIcons[name] || '📁'}</div>
            <div class="category-name">${name}</div>
            <div class="category-count">${data.count} 个软件</div>
        </div>
    `).join('');
}

function filterByCategory(category) {
    currentCategory = category;
    
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
        if (chip.textContent === (category === 'all' ? '全部' : category)) {
            chip.classList.add('active');
        }
    });
    
    applyFilters();
    showToast('success', '筛选成功', `已显示${category === 'all' ? '全部' : category}的软件`);
}

function sortSoftware() {
    currentSort = document.getElementById('sort-select').value;
    applyFilters();
    showToast('info', '排序成功', `已按${getSortLabel(currentSort)}排序`);
}

function getSortLabel(sort) {
    const labels = {
        'downloads': '下载量',
        'rating': '评分',
        'name': '名称',
        'size': '大小',
        'date': '更新日期'
    };
    return labels[sort] || '默认';
}

function applyFilters() {
    const searchTerm = document.getElementById('main-search').value.toLowerCase();
    
    filteredSoftware = softwareData.filter(software => {
        const matchesSearch = !searchTerm || 
            software.name.toLowerCase().includes(searchTerm) ||
            software.description.toLowerCase().includes(searchTerm) ||
            software.category.toLowerCase().includes(searchTerm);
        const matchesCategory = currentCategory === 'all' || software.category === currentCategory;
        return matchesSearch && matchesCategory;
    });
    
    sortFilteredSoftware();
    renderSoftware();
}

function sortFilteredSoftware() {
    filteredSoftware.sort((a, b) => {
        switch (currentSort) {
            case 'downloads':
                return b.downloads - a.downloads;
            case 'rating':
                return b.rating - a.rating;
            case 'name':
                return a.name.localeCompare(b.name, 'zh-CN');
            case 'size':
                return parseFileSize(b.size) - parseFileSize(a.size);
            default:
                return 0;
        }
    });
}

function renderSoftware() {
    const grid = document.getElementById('software-grid');
    
    if (filteredSoftware.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🔍</div>
                <h3 style="color: var(--text-secondary); margin-bottom: 1rem;">未找到匹配的软件</h3>
                <p style="color: var(--text-secondary);">请尝试调整搜索条件或筛选器</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredSoftware.map((software, index) => `
        <div class="software-card" onclick="showDetailModal(${software.id})" style="animation-delay: ${index * 0.05}s;">
            <div class="card-header">
                <span class="card-icon">${software.icon}</span>
                <h3 class="card-title">${software.name}</h3>
                <span class="card-category">${software.category}</span>
            </div>
            <div class="card-body">
                <div class="card-meta">
                    <div class="meta-item">
                        <span>📥</span>
                        <strong>${software.downloads.toLocaleString()}</strong>
                    </div>
                    <div class="meta-item">
                        <span>⭐</span>
                        <strong class="rating">${software.rating}</strong>
                    </div>
                    <div class="meta-item">
                        <span>💾</span>
                        <strong>${software.size}</strong>
                    </div>
                </div>
                <p class="card-description">${software.description}</p>
                <div class="card-footer">
                    <button class="btn btn-primary" onclick="event.stopPropagation(); downloadSoftware(${software.id})">
                        <span>⬇️</span>
                        <span>下载</span>
                    </button>
                    <button class="btn btn-secondary" onclick="event.stopPropagation(); showDetailModal(${software.id})">
                        <span>ℹ️</span>
                        <span>详情</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function setupEventListeners() {
    const searchInput = document.getElementById('main-search');
    let debounceTimer;
    
    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(applyFilters, 300);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-lg)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

function performSearch() {
    applyFilters();
    const count = filteredSoftware.length;
    showToast('info', '搜索完成', `找到 ${count} 个匹配的软件`);
}

function quickSearch(keyword) {
    document.getElementById('main-search').value = keyword;
    performSearch();
}

function setView(view) {
    currentView = view;
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const grid = document.getElementById('software-grid');
    if (view === 'list') {
        grid.style.gridTemplateColumns = '1fr';
    } else {
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(320px, 1fr))';
    }
}

function showDetailModal(id) {
    const software = softwareData.find(s => s.id === id);
    if (!software) return;
    
    const modal = document.getElementById('detail-modal');
    const modalContent = document.getElementById('modal-content');
    
    modalContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 6rem; margin-bottom: 1rem;">${software.icon}</div>
            <h2 style="font-size: 2rem; color: var(--text-primary); margin-bottom: 0.5rem;">${software.name}</h2>
            <span style="background: var(--gradient-primary); color: white; padding: 0.3rem 1rem; border-radius: 20px; display: inline-block;">
                ${software.category}
            </span>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem;">
            <div style="text-align: center; padding: 1rem; background: var(--bg-primary); border-radius: 0.75rem;">
                <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">📥</div>
                <div style="font-weight: 700; color: var(--primary);">${software.downloads.toLocaleString()}</div>
                <div style="font-size: 0.85rem; color: var(--text-secondary);">下载次数</div>
            </div>
            <div style="text-align: center; padding: 1rem; background: var(--bg-primary); border-radius: 0.75rem;">
                <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">⭐</div>
                <div style="font-weight: 700; color: var(--accent);">${software.rating}</div>
                <div style="font-size: 0.85rem; color: var(--text-secondary);">用户评分</div>
            </div>
            <div style="text-align: center; padding: 1rem; background: var(--bg-primary); border-radius: 0.75rem;">
                <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">💾</div>
                <div style="font-weight: 700; color: var(--success);">${software.size}</div>
                <div style="font-size: 0.85rem; color: var(--text-secondary);">文件大小</div>
            </div>
            <div style="text-align: center; padding: 1rem; background: var(--bg-primary); border-radius: 0.75rem;">
                <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">📅</div>
                <div style="font-weight: 700; color: var(--secondary);">${software.date}</div>
                <div style="font-size: 0.85rem; color: var(--text-secondary);">更新日期</div>
            </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--text-primary); margin-bottom: 1rem;">📝 软件介绍</h3>
            <p style="color: var(--text-secondary); line-height: 1.8;">${software.description}</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--text-primary); margin-bottom: 1rem;">✨ 核心特性</h3>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                ${software.features.map(f => `
                    <span style="background: var(--bg-primary); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; color: var(--text-secondary);">
                        ${f}
                    </span>
                `).join('')}
            </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--text-primary); margin-bottom: 1rem;">📁 文件信息</h3>
            <div style="background: var(--bg-primary); padding: 1rem; border-radius: 0.75rem;">
                <p style="margin: 0.5rem 0; color: var(--text-secondary);">
                    <strong style="color: var(--text-primary);">文件名：</strong>${software.filename}
                </p>
            </div>
        </div>
        
        <button class="btn btn-primary" onclick="downloadSoftware(${software.id}); closeModal();" style="width: 100%; padding: 1rem; font-size: 1.1rem;">
            <span>⬇️</span>
            <span>立即下载 ${software.name}</span>
        </button>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('detail-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function downloadSoftware(id) {
    const software = softwareData.find(s => s.id === id);
    if (!software) return;
    
    showToast('info', '准备下载', `正在下载 ${software.name}...`);
    
    setTimeout(() => {
        const link = document.createElement('a');
        link.href = software.downloadUrl;
        link.download = software.filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showToast('success', '下载开始', `${software.name} 下载已启动`);
    }, 500);
}

function showToast(type, title, message) {
    const container = document.getElementById('toast-container');
    const icons = {
        'success': '✅',
        'error': '❌',
        'warning': '⚠️',
        'info': 'ℹ️'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type]}</span>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.software-card, .category-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
