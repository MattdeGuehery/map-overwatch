from django.db import models

# Create your models here.

MAP_TYPE = [
    ('AS', 'Assault'),
    ('ES', 'Escort'),
    ('CN', 'Control'),
    ('EH', 'Escort Hybrid'),
    ('AR', 'Arena'),
]


class map_table(models.Model):
    map_name = models.CharField(max_length=120)
    map_type = models.CharField(
        max_length=2,
        choices=MAP_TYPE,
    )


class image_table(models.Model):
    image_map = models.IntegerField()
    image_url = models.CharField(max_length=300)
    image_order = models.IntegerField()
    isTopDown = models.BooleanField(default=False)
