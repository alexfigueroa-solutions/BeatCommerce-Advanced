import django

import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project_dir.settings")
django.setup()

from beats.models import Instrumental
from artists.models import Artist
def create_instrumentals(num_instrumentals):
    
    for index in range(0,num_instrumentals):
        Instrumental.objects.create(
            title = "Instrumental #" + str(index),
            producer = Artist.objects.get(alias = "Xela Rax"),
            img_file = "beatcommerce/media/images/homepage-bg.jpg"
        )

create_instrumentals(50)