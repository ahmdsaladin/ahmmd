# PowerShell script to update all HTML files to dark theme
Get-ChildItem "*.html" | Where-Object { $_.Name -notlike "*dark*" } | ForEach-Object {
    Write-Host "Processing: $($_.Name)"
    $content = Get-Content $_.FullName -Raw
    $updatedContent = $content -replace '<html class="no-js" lang="zxx">', '<html class="no-js liko-dark-active" lang="zxx">'
    Set-Content -Path $_.FullName -Value $updatedContent -NoNewline
    Write-Host "Updated: $($_.Name)"
}
Write-Host "Theme update completed!"