from django.test import TestCase
from frontend.src.services.instrumental.service
from rest_framework import APITestCase, URLPatternsTestCase
class InstrumentalTests(APITestCase, URLPatternsTestCase):
# Create your tests here.
    def test_get_instrumental():
        response = 