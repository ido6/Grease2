@echo off
copy "Photos\Photo1.png" "public\Photos\Photo1.png"
if %errorlevel% equ 0 (
    echo Photo1.png copied successfully!
) else (
    echo Error copying Photo1.png
    pause
)
