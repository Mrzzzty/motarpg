@echo off
chcp 65001 >nul
title 无尽之塔 · 玩发布版
cd /d "%~dp0"

if not exist "dist\index.html" (
    echo [提示] 尚未打包，请先运行「打包游戏.bat」。
    pause
    exit /b 1
)

echo 正在启动游戏（发布版）...
start "" http://127.0.0.1:8080/

where python >nul 2>nul
if errorlevel 1 (
    where py >nul 2>nul
    if errorlevel 1 (
        echo [提示] 未检测到 Python，改用 Node 启动...
        call npx --yes vite preview --port 8080
    ) else (
        py -m http.server 8080 --directory dist
    )
) else (
    python -m http.server 8080 --directory dist
)
pause
