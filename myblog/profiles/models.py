from django.db import models
from django.contrib.auth.models import User
from posts.models import Images

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(
        User, related_name="profile", on_delete=models.CASCADE)
    propic = models.ImageField(null=True)
    bio = models.TextField(blank=True, null=True)
    P_number = models.CharField(max_length=64, blank=True, null=True)
    like = models.ManyToManyField(Images, blank=True)
    telegram = models.CharField(max_length=50, blank=True, null=True)
    instagram = models.CharField(max_length=50, blank=True, null=True)

    @property
    def username(self):
        return self.user.username

    