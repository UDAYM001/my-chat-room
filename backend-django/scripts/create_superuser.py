from django.contrib.auth.models import User

# Create the one superuser
User.objects.create_superuser(
    username='admin',
    email='admin@mail.com',
    first_name='Admin',
    last_name='User',
    password='pass1234'
)