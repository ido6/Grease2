Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Grease Shoes - Vercel Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Checking Git installation..." -ForegroundColor Yellow
try {
    git --version | Out-Null
    Write-Host "Git is installed!" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Git from https://git-scm.com" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

Write-Host "Checking if this is a git repository..." -ForegroundColor Yellow
if (-Not (Test-Path ".git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init | Out-Null
    Write-Host "Git repository initialized!" -ForegroundColor Green
}

Write-Host ""

Write-Host "Staging all files..." -ForegroundColor Yellow
git add .

Write-Host ""

Write-Host "Checking if there are changes to commit..." -ForegroundColor Yellow
$status = git diff --cached --quiet 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "No changes to commit. Repository is up to date." -ForegroundColor Green
} else {
    Write-Host "Committing changes..." -ForegroundColor Yellow
    git commit -m "Prepare for Vercel deployment - Grease Shoes"
    Write-Host "Changes committed!" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Next Steps:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. If you haven't already, create a GitHub repository" -ForegroundColor White
Write-Host "2. Then run these commands:" -ForegroundColor White
Write-Host ""
Write-Host "   git remote add origin YOUR_GITHUB_REPO_URL" -ForegroundColor Yellow
Write-Host "   git push -u origin main" -ForegroundColor Yellow
Write-Host ""
Write-Host "3. Go to https://vercel.com and deploy from GitHub" -ForegroundColor White
Write-Host ""
Write-Host "OR use Vercel CLI:" -ForegroundColor White
Write-Host ""
Write-Host "   npm i -g vercel" -ForegroundColor Yellow
Write-Host "   vercel" -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Read-Host "Press Enter to exit"

