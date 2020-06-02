from django.urls import path

from . import views
from . import models

urlpatterns = [
    path('', views.index, name='index'),
    # adding example endpoint. This will probably change
    path('api/maps', views.get_maps, name='get_maps'),
    path('mapcallouts/', views.mapcallouts, name='mapcallouts'),
]
