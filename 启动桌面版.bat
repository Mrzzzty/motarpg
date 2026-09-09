@echo off
title Mota RPG - Desktop
cd /d "%~dp0"

echo ========================================
echo    Mota RPG - Desktop Edition
echo ========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js not found. This is the most common cause on a new PC.
    echo.
    echo         Fix: install the LTS version from https://nodejs.org/
    echo         then double-click this script again.
    echo.
    pause
    exit /b 1
)
for /f "delims=" %%v in ('node -v 2^>nul') do echo [env] Node %%v

if not exist "node_modules" (
    echo [first run] Installing dependencies, please wait 2-5 minutes...
    call npm install
    if errorlevel 1 (
        echo [ERROR] npm install failed. Check your network and try again.
        pause
        exit /b 1
    )
)

rem ---- dist integrity check: index.html without assets\*.js means the last
rem ---- build was interrupted, force a rebuild instead of launching a broken dist
set NEED_BUILD=0
if not exist "dist\index.html" set NEED_BUILD=1
dir /b "dist\assets\*.js" >nul 2>nul
if errorlevel 1 set NEED_BUILD=1

if "%NEED_BUILD%"=="1" (
    echo [first run / repair] Building game assets...
    call npm run build
    if errorlevel 1 (
        echo [ERROR] Build failed.
        echo         Hint: close every running game window first, then run this again.
        echo         If it still fails, delete the dist folder and retry.
        pause
        exit /b 1
    )
)

echo Starting desktop window...
call npx electron .
if errorlevel 1 (
    echo.
    echo [HINT] Window closed or failed to start.
    echo        If this keeps failing, delete node_modules\electron and run this script again.
    pause
)
exit /b 0
