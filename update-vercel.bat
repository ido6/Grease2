@echo off
echo ========================================
echo   Updating Grease Shoes on Vercel
echo ========================================
echo.

echo Checking git status...
git status

echo.
echo Staging all changes...
git add .

echo.
echo Committing changes...
git commit -m "Update site - %date% %time%"

echo.
echo Pushing to GitHub (this will trigger Vercel deployment)...
git push origin main

echo.
echo ========================================
echo   Done! Vercel will deploy automatically
echo ========================================
pause

