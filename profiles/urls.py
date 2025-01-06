from django.urls import re_path
from .views import userlist, myacc

urlpatterns = [
    re_path(r'^myacc', myacc, name="myacc"),
    re_path(r'^$', userlist, name="profile"),
    ]