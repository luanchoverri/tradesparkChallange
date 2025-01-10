from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Author, Category, Book
from .serializers import AuthorSerializer, CategorySerializer, BookSerializer

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer




class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


    @action(detail=True, methods=['DELETE'])
    def remove_category(self, request, pk=None, category_id=None ):
        book = self.get_object()
        category = Category.objects.get(id=category_id)


        if book.categories.count() > 1:
            book.categories.remove(category)

            return Response({"detail": "Category removed successfully."}, status=204)
        return Response({"error": "Error"}, status=404)