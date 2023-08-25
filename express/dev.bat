@echo off

if "%~1"=="test" (
    type .env | find /v "mode=" > tmp.env
    echo mode=test >> tmp.env
    move /y tmp.env .env
    start npm start
    start ngrok http 3000
) else (
    type .env | find /v "mode=" > tmp.env
    echo mode=dev >> tmp.env
    move /y tmp.env .env
    docker-compose up
)
