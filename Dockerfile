FROM python:3.9

WORKDIR /opt/app

COPY code .
WORKDIR /opt/app/code
EXPOSE 5000

CMD ["python3", "-m", "http.server"]