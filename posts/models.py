from django.db import models
from django.contrib.auth.models import User
import os
# Create your models here.


class Images(models.Model):
    option_img = (
        ("PP", "Profile Picture"),
        ("UP", "Post")
    )
    option_ca = (
        ("LN", "Landscape & Nature"),
        ("AM", "Arial & Macro"),
        ("PO", "Portrait"),
        ("AR", "Architectural"),
        ("OT", "Others")
    )

    image = models.ImageField()
    img_type = models.CharField(max_length=64, choices=option_img)
    catagory = models.CharField(max_length=16, choices=option_ca, blank=True)
    no_likes = models.IntegerField(default=0)
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["uploaded_at"]

    def delete(self, *args, **kwargs):
        img = self.image.path
        super(Images, self).delete(*args, **kwargs)
        os.remove(img)

    @property
    def get_owner_name(self):
        return self.owner.username

    @property
    def get_owner_id(self):
        return self.owner.id

