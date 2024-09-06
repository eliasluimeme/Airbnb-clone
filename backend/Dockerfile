FROM python:3.12.2-slim-bullseye

WORKDIR /usr/src/backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y netcat

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# COPY ./script.sh .
# RUN sed -i 's/\r$//g' /usr/src/backend/script.sh
# RUN chmod +x /usr/src/backend/script.sh

COPY . .

EXPOSE 8000

# ENTRYPOINT [ "/usr/src/backend/script.sh" ]

# Run the Django app using Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "djangobnb.wsgi:application"]
