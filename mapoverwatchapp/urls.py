from django.urls import path

from . import views
from . import models

urlpatterns = [
    path('', views.maps, name='maps'),
    path('mapcallouts/', views.mapcallouts, name='mapcallouts'),
    path('mapcallouts/<int:map_id>/', views.mapcallouts, name='mapcallouts_id'),
]
