@echo off

TIMEOUT 5

cd C:\Node_Server
pm2 start Index.js
-1