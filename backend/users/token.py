from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        print({"token": token})
        token['username'] = user.username
        token['first_name'] = user.last_name
        token['last_name'] = user.last_name
        token['email'] = user.email
        token['user_id'] = user.CustomUser.user_id
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer