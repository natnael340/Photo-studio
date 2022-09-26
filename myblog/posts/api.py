from rest_framework import viewsets, permissions
from .models import Images
from .serializer import ImageSerializer

class ImageViewset(viewsets.ModelViewSet):
    queryset = Images.objects.all()
    permission_classes = {
        permissions.AllowAny
    }
    serializer_class = ImageSerializer