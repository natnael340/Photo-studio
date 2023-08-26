from rest_framework import serializers
from .models import Images

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ('id', 'image', 'no_likes','img_type', 'catagory','get_owner_name')
