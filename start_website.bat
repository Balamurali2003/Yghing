@echo off
title Y.G Asafoetida Local Server
cd /d "%~dp0"

echo ==================================================================
echo         STARTING Y.G ASAFOETIDA LOCAL PRODUCTION SERVER
echo ==================================================================
echo Theme: Emerald (#059669) / Saffron / Indigo / Plum
echo Contact: Mayil Agro Foods, Tirunelveli
echo Products: 31 Authenticated Items
echo ==================================================================

:: Check if Node is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not found in your PATH.
    echo Please install Node.js from https://nodejs.org/ to run the server.
    pause
    exit /b 1
)

:: Launch browser in background after 2 seconds
start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:3000/"

:: Start server
node server.js
pause
