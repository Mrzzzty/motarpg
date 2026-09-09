@echo off
title Mota RPG - Desktop (dev mode, hot reload)
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js not found.
    pause
    exit /b 1
)

echo Starting Vite dev server in a new window...
start "vite-dev" cmd /c "npm run dev"

echo Waiting for the dev server...
timeout /t 4 /nobreak >nul

set VITE_DEV_SERVER_URL=http://127.0.0.1:5173/
call npx electron .
exit /b 0
