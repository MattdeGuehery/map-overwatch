import json
from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse


def index(request):
    return render(request, 'index.html')


def mapcallouts(request):
    return render(request, 'mapcallouts.html')


# an example endpoint. This will probably change
def get_maps(request):
    maps = [
        {'order': 0, 'name': 'Hanamura', 'url': 'static/images/Dorado'},
        {'order': 1, 'name': 'Eichenwalde', 'url': 'static/images/Eichenwalde'},
        {'order': 2, 'name': 'Hanamura', 'url': 'static/images/Hanamura'},
        {'order': 3, 'name': 'Hollywood', 'url': 'static/images/Hollywood'},
        {'order': 4, 'name': 'Horizon Lunar Colony', 'url': 'static/images/Horizon Lunar Colony'},
        {'order': 5, 'name': 'Ilios', 'url': 'static/images/Ilios'},
        {'order': 6, 'name': 'Junkertown', 'url': 'static/images/Junkertown'},
        {'order': 7, 'name': 'Kings Row', 'url': 'static/images/Kings Row'},
        {'order': 8, 'name': 'Lijang', 'url': 'static/images/Lijang'},
        {'order': 9, 'name': 'Nepal', 'url': 'static/images/Nepal'},
        {'order': 10, 'name': 'Numbani', 'url': 'static/images/Numbani'},
        {'order': 11, 'name': 'Oasis', 'url': 'static/images/Oasis'},
        {'order': 12, 'name': 'Route 66', 'url': 'static/images/Route 66'},
        {'order': 13, 'name': 'Temple of Anubis', 'url': 'static/images/Temple of Anubis'},
        {'order': 14, 'name': 'Top Down', 'url': 'static/images/Top Down'},
        {'order': 15, 'name': 'Volskaya Industries', 'url': 'static/images/Volskaya Industries'},
        {'order': 16, 'name': 'Watchpoint Gibraltar', 'url': 'static/images/Watchpoint Gibraltar'},
    ]
    return HttpResponse(json.dumps(maps))
