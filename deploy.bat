@echo off
echo ========================================
echo   Grease Shoes - Vercel Deployment
echo ========================================
echo.

echo Checking Git installation...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com
    pause
    exit /b 1
)

echo Git is installed!
echo.

echo Checking if this is a git repository...
if not exist ".git" (
    echo Initializing git repository...
    git init
    echo Git repository initialized!
    echo.
)

echo Staging all files...
git add .
echo.

echo Checking if there are changes to commit...
git diff --cached --quiet
if %errorlevel% equ 0 (
    echo No changes to commit. Repository is up to date.
) else (
    echo Committing changes...
    git commit -m "Prepare for Vercel deployment - Grease Shoes"
    echo Changes committed!
)

echo.
echo ========================================
echo   Next Steps:
echo ========================================
echo.
echo 1. If you haven't already, create a GitHub repository
echo 2. Then run these commands:
echo.
echo    git remote add origin YOUR_GITHUB_REPO_URL
echo    git push -u origin main
echo.
echo 3. Go to https://vercel.com and deploy from GitHub
echo.
echo OR use Vercel CLI:
echo.
echo    npm i -g vercel
echo    vercel
echo.
echo ========================================
echo.
pause

