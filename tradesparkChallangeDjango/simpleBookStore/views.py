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

        # si la categoría existe globalmente
        if not Category.objects.filter(id=category_id).exists():
            return Response({"error": "The category does not exist."}, status=404)

        # si la categoría está asociada al libro
        if not book.categories.filter(id=category_id).exists():
            return Response( {"error": "This category is not associated with the book."}, status=400)

        category = book.categories.get(id=category_id)
        book.categories.remove(category)
        return Response({"detail": "Category removed successfully."}, status=200)