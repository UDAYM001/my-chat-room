from django.db.models.signals import post_save, pre_save, pre_delete
from django.dispatch import receiver
from django.contrib.auth.models import User

import requests
import os

@receiver(post_save, sender=User)
def on_create_user(sender, instance, created, **kwargs):
    if created:
        requests.post( # CREATE USER API
            'https://api.chatengine.io/users/', 
            headers={ "Private-Key": os.environ['PRIVATE_KEY'] }, 
            json={
                'username': instance.username,
                'email': instance.email,
                'secret': instance.password,
                'first_name': instance.first_name,
                'last_name': instance.last_name
            }
        )
        

@receiver(pre_save, sender=User)
def on_update_user(sender, instance, **kwargs):
    try:
        old_user = User.objects.get(id=instance.id)
        requests.patch( # UPDATE USER API
            'https://api.chatengine.io/users/me/',
            headers={ 
                "Project-Id": os.environ['PROJECT_ID'],
                "User-Name": old_user.username,
                "User-Secret": old_user.password
            },
            json={
                'username': instance.username,
                'email': instance.email,
                'secret': instance.password,
                'first_name': instance.first_name,
                'last_name': instance.last_name
            }
        )
    except User.DoesNotExist:
        pass    

@receiver(pre_delete, sender=User)
def on_delete_user(sender, instance, **kwargs):
    requests.delete( # DELETE USER API
        'https://api.chatengine.io/users/me/', 
        headers={
            "Project-Id": os.environ['PROJECT_ID'],
            "User-Name": instance.username,
            "User-Secret": instance.password
        }
    )
