FROM python:3.12.2-slim-bullseye

WORKDIR /usr/src/django_backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y netcat

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./script.sh .
RUN sed -i 's/\r$//g' /usr/src/django_backend/script.sh
RUN chmod +x /usr/src/django_backend/script.sh

COPY . .

ENTRYPOINT [ "/usr/src/django_backend/script.sh" ]
