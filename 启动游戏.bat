@echo off
title Mota RPG - Web
cd /d "%~dp0"
if errorlevel 1 (
    echo [ERROR] Cannot enter the script folder. Extract the whole folder to a local disk first.
    pause
    exit /b 1
)

echo ========================================
echo    Mota RPG - Web Edition
echo ========================================
echo.

rem ---- 1. Environment check: both node and npm are required ----
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
where npm >nul 2>nul
if errorlevel 1 (
    echo [ERROR] node found, but npm is missing (broken Node.js install or PATH).
    echo         Reinstall Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)
for /f "delims=" %%v in ('node -v 2^>nul') do echo [env] Node %%v

rem ---- 2. Install dependencies on first run ----
if not exist "node_modules" (
    echo [first run] Installing dependencies, please wait 1-2 minutes...
    call npm install
    if errorlevel 1 (
        echo [ERROR] npm install failed. Check your network and try again.
        pause
        exit /b 1
    )
)

rem ---- 3. Start the dev server; open the browser after 3 seconds ----
echo Starting game server (keep this window open; closing it quits the game)...
start "" cmd /c "timeout /t 3 /nobreak >nul & start http://127.0.0.1:5173/"
call npm run dev

rem ---- 4. If the server exits abnormally, keep the window open to show why ----
echo.
echo [HINT] Server exited. If there is an error above, take a screenshot and report it.
pause
