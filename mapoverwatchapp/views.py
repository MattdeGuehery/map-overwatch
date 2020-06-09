import json
import logging
import os
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
	requestedmap = map_id or request.GET['map_id']
	map = map_table.objects.get(id=requestedmap)
	logger.info(map.map_name)
	logger.info('map_id=' + str(map_id))
	data_from_db = image_table.objects.filter(image_map=map_id)
	formatted_data = []
	for image in data_from_db:
		debug_path = '/static/' if os.getenv('DJANGO_DEBUG', False) else '/'
		underscore_map_name = map.map_name.replace(' ', '_')
		formatted_data.append({
			'image_id': image.id,
			'image_map': image.image_map,
			'image_url': debug_path + 'maps/' + underscore_map_name + '/' + image.image_url,
			'image_order': image.image_order,
			'isTopDown': image.isTopDown,
		})

	context = {'data': formatted_data}
	return render(request, 'mapcallouts.html', context)

# https://realpython.com/working-with-files-in-python/
# https://realpython.com/working-with-files-in-python/#directory-listing-in-modern-python-versions
# https://realpython.com/working-with-files-in-python/#listing-all-files-in-a-directory
# https://realpython.com/working-with-files-in-python/#renaming-files-and-directories
# folders = load_folders()
# for folder in folders:
# 	files = load_files()
# 	for f in files:
# 		f.replace('+', '_')