@ECHO OFF
setlocal enabledelayedexpansion

goto :main

:bstr
for /f "tokens=*" %%i in ('Bstring.bat "!clr!" "!str!"') do set "output=%%i"
echo !output!
goto :eof

:main
REM echo Beginning process...
echo Bedging_passcode=53 43 48 4C 41 55 47 45 52>> .env

npm install express cors 

npm install --save-dev nodemon 

npm i mongoose dotenv 


set "clr=95"
set "str=Beginning process..."
call :bstr %clr% "%str%"
REM echo Beginning install nodemon to automatically restart server
set "clr=45"
set "str=Install nodemon"
call :bstr %clr% "%str%"

REM echo Beginning install mongoose for mongoDB and dotenv for variables
REM Install mongoose dotenv
set "clr=45"
set "str=Install mongoose dotenv"
call :bstr %clr% "%str%"
npm i mongoose dotenv
set "clr=47"
set "str=Create a dotenv file" 
call :bstr %clr% "%str%"
echo. "Bedding_passcode=53 43 48 4C 41 55 47 45 52">.env
endlocal




