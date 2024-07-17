@ECHO OFF
setlocal
@REM arg1 color code
@REM arg2 str

set "codeNum=%~1"
set "str1=%~2"   

@REM echo %codeNum%
@REM echo str is : %str1%

set prefix=[1;
set postfix=m>nul
set COLOR_RESET=[0m>nul
@REM set color_code =%prefix%%1%postfix%
echo %prefix%%codeNum%%postfix%%str1%%COLOR_RESET%

endlocal