import json
from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse


def index(request):
    data_from_db = []
    context = {'data': data_from_db}
    return render(request, 'index.html', context)


def mapcallouts(request):
    data_from_db = []
    context = {'data': data_from_db}
    return render(request, 'mapcallouts.html', context)
