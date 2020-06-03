from django.db import models

# Create your models here.
class map_table(models.Model):
    map_name= models.CharField(max_length=120)
    map_id= models.IntegerField()

    Assult='AS'
    Escort='ES'
    Control='CN'
    Escort_hybrid='EH'
    Arena='AR'

    MAP_TYPE=[
        (Assult, 'Assult'),
        (Escort, 'Escort'),
        (Control, 'Control'),
        (Escort_hybrid, 'Escort Hybrid'),
        (Arena, 'Arena'),
    ]

    map_type= models.CharField(
        max_length=2,
        choices= MAP_TYPE,
    )

class image_table(models.Model):
    image_id= models.IntegerField()
    image_map= models.CharField(max_length=120)
    image_url= models.URLField(max_length=300)
    image_order= models.IntegerField()
    isTopDown= models.BooleanField(default=False)