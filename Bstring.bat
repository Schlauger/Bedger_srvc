SETLOCAL
echo off
@REM arg1 color code
@REM arg2 str
@REM CALL :Bedging_colored_string
@REM :Bedging_colored_string

echo arg1 %1
echo arg2 %2
set str=%2
set /A "clr = 34"
set prefix=[1;
set postfix=m>nul
set COLOR_RESET=[0m>nul
set color_code =%prefix%%clr%%postfix%
echo %color_code%
set cl=%color_code%
set a= %color_code%%str%%COLOR_RESET%%
@REM set "%~1 = %color_code%%str%%COLOR_RESET%"
