import json
import logging
from django.shortcuts import render, get_object_or_404

# Create your views here.

from django.http import HttpResponse
from mapoverwatchapp.models import map_table, image_table, MAP_TYPE
logger = logging.getLogger(__name__)

def maps(request):
	data_from_db = map_table.objects.all()
	formatted_data = []
	for map in data_from_db:
		formatted_data.append({
			'map_name': map.map_name,
			'map_id': map.id,
			'map_type': dict(MAP_TYPE).get(map.map_type),
			'map_url': 'mapcallouts/' + str(map.id)
		})
	context = {'data': formatted_data}
	return render(request, 'maps.html', context)


def mapcallouts(request, map_id):
	map_id = map_id or request.GET['map_id']
	logger.info('map_id=' + str(map_id))
	data_from_db = image_table.objects.filter(image_map=map_id)
	formatted_data = []
	for image in data_from_db:
		formatted_data.append({
			'image_id': image.id,
			'image_map': image.image_map,
			'image_url': image.image_url,
			'image_order': image.image_order,
			'isTopDown': image.isTopDown,
		})

	context = {'data': formatted_data}
	return render(request, 'mapcallouts.html', context)
