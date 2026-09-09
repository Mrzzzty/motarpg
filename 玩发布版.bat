@echo off
title Mota RPG - Release build
cd /d "%~dp0"

if not exist "dist\index.html" (
    echo [HINT] Not built yet. Run "build game.bat" first.
    pause
    exit /b 1
)

echo Starting game (release build)...
start "" http://127.0.0.1:8080/

where python >nul 2>nul
if errorlevel 1 (
    where py >nul 2>nul
    if errorlevel 1 (
        echo [HINT] Python not found, falling back to Node...
        call npx --yes vite preview --port 8080
    ) else (
        py -m http.server 8080 --directory dist
    )
) else (
    python -m http.server 8080 --directory dist
)
pause
