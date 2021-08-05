from django.shortcuts import render
from rest_framework.response import Response
from .models import Instrumental, InstrumentalCollection
from .serializers import InstrumentalCollectionSerializer, InstrumentalSerializer
from rest_framework import viewsets, generics
# Create your views here.
def is_there_more_data(request):
    offset = request.GET.get('offset')
    if int(offset) > Instrumental.objects.all().count():
        return False
    return True
def infinite_filter(request):
    limit = request.GET.get("limit")
    offset = request.GET.get("offset")
    return Instrumental.objects.all()[int(offset): int(offset) + int(limit)]
class InstrumentalView(viewsets.ModelViewSet):
    queryset = Instrumental.objects.all()
    serializer_class = InstrumentalSerializer

class InstrumentalCollectionView(viewsets.ModelViewSet):
    queryset = InstrumentalCollection.objects.all()
    serializer_class = InstrumentalCollectionSerializer
class ReactFilterView(generics.ListAPIView):
    serializer_class = InstrumentalSerializer
    def get_queryset(self):
        qs = filter(self.request)
        return qs
class ReactInfiniteInstrumentalView(generics.ListAPIView):
    serializer_class = InstrumentalSerializer
    def get_queryset(self):
        qs = infinite_filter(self.request)
        return qs
    def list(self, request):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many = True)
        return Response({
            "instrumentals": serializer.data,
            "has_more": is_there_more_data(request)
        })