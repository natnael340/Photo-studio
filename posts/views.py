from django.shortcuts import render
'''
# Create your views here.
from rest_framework.views import APIView
from rest_framework.response  import Response
from .models import Images
from .serializer import PostSerializer

class Posts(APIView):
    def get(self, request):
        post = Post.objects.all()
        data = PostSerializer(post, many=True).data
        return Response(data)

'''