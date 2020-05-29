import json
from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse


def index(request):
    return render(request, 'index.html')


# an example endpoint. This will probably change
def get_maps(request):
    maps = [
        {'order': 0, 'name': 'Hanamura', 'url': '/hanamura-1'},
        {'order': 1, 'name': 'rialto', 'url': '/rialto-1'},
        {'order': 2, 'name': 'Dorado', 'url': '/Dorado-1'},
        {'order': 3, 'name': 'Paris', 'url': '/Paris-1'},
    ]
    return HttpResponse(json.dumps(maps))
