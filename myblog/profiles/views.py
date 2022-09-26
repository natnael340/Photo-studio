from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .models import Profile
from django.contrib.auth.models import User
from rest_framework.response import Response
from .serializer import ProfileSerializer
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

# Create your views here.

@api_view(['GET'])
def userlist(request):
    data = Profile.objects.all()
    serialized = ProfileSerializer(data, many=True)
    return Response(serialized.data)


@api_view(['GET','POST','PUT','DELETE'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def myacc(request):
    data = Profile.objects.get(user=request.user)
    serialized = ProfileSerializer(data)
    return Response(serialized.data)

class Myaccount(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        data = Profile.objects.get(user=request.user)
        serialized = ProfileSerializer(data)
        return Response(serialized.data)
    def post(self, request):
        self.create()