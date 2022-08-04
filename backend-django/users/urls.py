from django.urls import path

from . import views

app_name = 'users'

urlpatterns = [
    path('me/', views.MyAccount.as_view()),
    path('create_superuser/', views.CreateSuperUser.as_view()),
    path('delete_users/', views.DeleteChatEngineUsers.as_view()),
]
