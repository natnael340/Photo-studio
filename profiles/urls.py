from django.conf.urls import url
from .views import userlist, myacc

urlpatterns = [
    url(r'^myacc', myacc, name="myacc"),
    url(r'^$', userlist, name="profile"),
    ]