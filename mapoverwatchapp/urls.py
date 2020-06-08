from django.urls import path

from . import views
from . import models

urlpatterns = [
    path('', views.index, name='index'),
    path('mapcallouts/', views.mapcallouts, name='mapcallouts'),
]
