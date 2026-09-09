@echo off
title Mota RPG - Build dist
cd /d "%~dp0"

echo ========================================
echo    Build game (generates the dist folder)
echo ========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js not found. Install it from https://nodejs.org/
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo [first run] Installing dependencies...
    call npm install || (pause & exit /b 1)
)

call npm run build
if errorlevel 1 (
    echo [ERROR] Build failed.
    pause
    exit /b 1
)

echo.
echo [DONE] Game built into the dist folder (~230 KB).
echo        - Double-click dist\index.html to play in most browsers
echo        - Or send the whole dist folder to friends / deploy it anywhere
echo.
set /p open=Preview locally now? (Y/N):
if /i "%open%"=="Y" (
    start "" http://127.0.0.1:4173/
    call npm run preview
)
pause
