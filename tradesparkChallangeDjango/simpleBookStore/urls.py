from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AuthorViewSet, CategoryViewSet, BookViewSet

router = DefaultRouter()

router.register(r'authors', AuthorViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'books', BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('books/<int:pk>/remove_category/<int:category_id>/', BookViewSet.as_view({'delete': 'remove_category'}), name='remove_category')
]


