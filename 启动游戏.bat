@echo off
chcp 65001 >nul
title 无尽之塔 · 魔塔RPG
cd /d "%~dp0"
if errorlevel 1 (
    echo [错误] 无法进入脚本所在目录，请把整个文件夹解压到本地硬盘后再运行。
    pause
    exit /b 1
)

echo ========================================
echo    无尽之塔 · 魔塔RPG
echo ========================================
echo.

rem ---- 1. 环境检测：node 和 npm 都必须有 ----
where node >nul 2>nul
if errorlevel 1 (
    echo [错误] 未检测到 Node.js，这是新电脑最常见的启动失败原因。
    echo.
    echo        解决办法：到 https://nodejs.org/ 下载并安装 LTS 长期支持版，
    echo        一路下一步安装完成后，重新双击本脚本。
    echo.
    pause
    exit /b 1
)
where npm >nul 2>nul
if errorlevel 1 (
    echo [错误] 检测到 node，但未检测到 npm（Node.js 安装不完整或 PATH 损坏）。
    echo        建议卸载后重新安装 Node.js：https://nodejs.org/
    echo.
    pause
    exit /b 1
)
for /f "delims=" %%v in ('node -v 2^>nul') do echo [环境] Node %%v

rem ---- 2. 依赖安装（首次运行） ----
if not exist "node_modules" (
    echo [首次运行] 正在安装依赖，请稍候（需要联网，约 1-2 分钟）...
    call npm install
    if errorlevel 1 (
        echo [错误] 依赖安装失败，请检查网络后重试。
        pause
        exit /b 1
    )
)

rem ---- 3. 启动服务器；3 秒后自动打开浏览器（等服务器就绪，避免拒绝连接） ----
echo 正在启动游戏服务器（本窗口请保持打开，关闭即退出游戏）...
start "" cmd /c "timeout /t 3 /nobreak >nul & start http://127.0.0.1:5173/"
call npm run dev

rem ---- 4. 服务器异常退出时停住窗口显示原因 ----
echo.
echo [提示] 服务器已退出。若上方有报错信息，请将其截图反馈。
pause
