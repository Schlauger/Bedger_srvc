
@ECHO OFF
echo  number %~1

@REM color 0D
@REM cls
@REM echo Begding proccess...
@REM npm install express cors 
@REM cls
@REM echo Begding install nodemon to automatically restarts server
@REM @REM Install nodemon to automatically restarts server
@REM npm install --save-dev nodemon

@REM cls
@REM echo Begding install mongoose for mongoDB and dotenv for variables
@REM @REM Install mongoose dotenv
@REM npm i mongoose dotenv

@REM set str1=37
@REM set st=[1;
@REM set tr=m>nul
@REM set cl=%st%%str1%%tr% 
@REM set COLOR_BRIGH= %cl%
@REM echo %COLOR_BRIGH%COLOR_BRIGHTPURPLE %COLOR_RESET%
@REM set str1=34
@REM set st=[1;
@REM set tr=m>nul
@REM set cl=%st%%str1%%tr% 
@REM set COLOR_BRIGH= %cl%
@REM @REM color  0D

@REM setx COLOR_RESET [0m>nul
@REM set COLOR_RESET=[0m>nul
@REM echo %COLOR_BRIGH% COLOR_BRIGHTPURPLE %COLOR_RESET%


@REM echo %COLOR_BRIGHTYELLOW%COLOR_BRIGHTYELLOW %COLOR_RESET%

CALL Bstring.bat 34 Bedger
echo retured: %1
EXIT /B 0