@echo off
chcp 65001 >nul
title 无尽之塔 · 打包发布版
cd /d "%~dp0"

echo ========================================
echo    打包游戏（生成 dist 文件夹）
echo ========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
    echo [错误] 未检测到 Node.js，请先安装：https://nodejs.org/
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo [首次运行] 正在安装依赖...
    call npm install || (pause & exit /b 1)
)

call npm run build
if errorlevel 1 (
    echo [错误] 打包失败。
    pause
    exit /b 1
)

echo.
echo [完成] 游戏已打包到 dist 文件夹（约 230 KB）。
echo        - 直接双击 dist\index.html 多数浏览器可直接玩
echo        - 或将整个 dist 文件夹发给朋友 / 部署到任意网站
echo.
set /p open=是否立即本地预览？(Y/N)：
if /i "%open%"=="Y" (
    start "" http://127.0.0.1:4173/
    call npm run preview
)
pause
