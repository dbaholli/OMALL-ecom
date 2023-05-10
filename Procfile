web: gunicorn backend.wsgi --log-file=- --bind 0.0.0.0:$PORT
release: python manage.py makemigrations
release: python manage.py migrate
