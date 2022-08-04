from django.contrib.auth.models import User

from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response

from users.serializers import UserSerializer

class MyAccount(APIView):
    permissions=[permissions.IsAuthenticated, permissions.AllowAny]

    def get(self, request):
        serializer = UserSerializer(request.user, many=False)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request):
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        request.user.delete()
        return Response({}, status=status.HTTP_204_NO_CONTENT)
    

class CreateSuperUser(APIView):
    permissions=[permissions.AllowAny]

    def get(self, request):
        user = User.objects.create_superuser(
            username='admin',
            email='admin@mail.com',
            first_name='Admin',
            last_name='User',
            password='pass1234'
        )
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)

class DeleteChatEngineUsers(APIView):

    def get(self, request):
        import requests, os, json

        users = requests.get(
            'https://api.chatengine.io/users/',
            headers={"Private-Key": os.environ['PRIVATE_KEY']}
        )

        for user in json.loads(users.content):
            response = requests.delete(
                'https://api.chatengine.io/users/{}/'.format(user['id']),
                headers={"Private-Key": os.environ['PRIVATE_KEY']}
            )
            print(response.status_code)
        
        return Response("Chat Engine users deleted", status=status.HTTP_200_OK)