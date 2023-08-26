from rest_framework import routers
from .api import ImageViewset

router = routers.DefaultRouter()
router.register('api/posts', ImageViewset, 'posts')

urlpatterns = router.urls