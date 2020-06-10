import os

def upsert_database_data():
	map_path='C:\\Users\\Matt\\Documents\\Code\\mapoverwatch\\mapoverwatchapp\\static\\maps'

	def check_isTopDown(file_name):
		isTopDown = False
		nums = num_dict.keys()
		for num in nums:
			if num not in file_name:
				isTopDown = True
		return isTopDown

	def get_map_order(file_name):
		nums = num_dict.keys()
		for num in nums:
			if num in file_name:
				return num_dict[num]
		return 0

	num_dict = {
		'_one_': 1,
		'_two_': 2,
		'_three_': 3,
		'_four_': 4,
		'_five_': 5,
		'_six_': 6,
		'_seven_': 7,
		'_eight_': 8,
		'_nine_': 9,
		'_ten_': 10,
		'_eleven_': 11,
		'_twelve_': 12,
		'_thirteen_': 13,
	}

	data_structure = {}

	data_from_db = map_table.objects.all()
	map_name_id_dict = {}
	for map in data_from_db:
		map_name_id_dict[map.map_name] = map.id

	for map_folder in os.scandir(map_path):
		if map_folder.is_dir():
			map_name = map_folder.name.replace('_', ' ')
			if map_name not in data_structure:
				data_structure[map_name] = []

			files_in_map_folder = os.scandir(map_folder.path)
			for files in files_in_map_folder:
				if files.is_file():
					data_structure[map_name].append({
						'image_map': map_name_id_dict[map_name],
						'image_url': files.name,
						'image_order': get_map_order(files.name),
						'isTopDown': check_isTopDown(files.name),
					})
					
					# os.rename(files.path,os.path.join(map_folder.path, files.name.replace('+','_')))

	for map in data_structure:
		if len(data_structure[map]) > 1:
			data_structure[map] = sorted(data_structure[map], key=lambda image: image['image_order'])

	print(data_structure);

	for map_key in data_structure:
		for i in data_structure[map_key]:
			new_image = image_table(image_map=i['image_map'],image_url=i['image_url'],image_order=i['image_order'],isTopDown=i['isTopDown'])
			new_image.save()
# save in db




# Problem: We need to get all images into the db programmatically.
# Question: What do we need to do that?
# 	1. Need to create a new class of image_table for each image.
# 	2. Save that to the DB

# What is an image_table class? What do we need for that?
# 	Check models.py, and grab properties of image_table.
# 		image_map
# 		image_url
# 		image_order
# 		isTopDown

# 	Question: Do we have all of that information?
# 	Answer: Yes.
# 	Follow-up Question: Do we know all of that info based on our folder structure of images in static/maps?
# 	Answer: Everything except image_order and isTopDown. Kinda the image_map. image_url for sure.

# How can we get image_map?
# 	Folder name is image_map with underscores. So if we replace underscores with spaces, we have the map name.

# How can we get isTopDown?
# 	Probably can't consistently

# How do we get image_order?
# 	We can't

# So we can't get all info programmtically, BUT, we as humans know all of that info.
# Can we store that info in some data structure in python, and then create a new instance of image_table with all correct values?

# Revist image_order. It exists in the file name. Can we get that programmatically?
# 	What if, we made a dictionary of strings to numbers: { 'one': 1, 'two':2, 'three': 3, 'four': 4 }
# 		Yes.
# 	If the image_order exists in the URL name, can we determine whether it's a topdown map from the image name?
# 		By default, if it doesn't have a matching number in the name, then it must be top down

# Revisit question: Can we get all data programmatically?
# 	Answer: Yes.

# Assume we have that data. Can we save it to the database programmtically?
# 	Answer: Yes. Use Django model methods to .save() to the DB


# What data structure can we use to help with this? 
# In other words, how can we format our data?
# We need a loop. What data structure facilitates loops? Dictionary, List.
# Does a list work? Yes - flat (not multi-layer), it's simple to work with (single loop), and all the data can be gathered in one go
# Does a dictionary work? Yes. Not Flat, but can be keyed by map name (takes out any string replace stuff once loop is run), Requires two loops, other than that basically the same. 

# Example List:
# [{ image_map,image_url,image_order,isTopDown }]

# Example Dictionary:
# {
# 	image_map: [{ image_map,image_url,image_order,isTopDown }]
# }


# import os

# # List all subdirectories using scandir()
# basepath = 'my_directory/'
# with os.scandir(basepath) as entries:
#     for entry in entries:
#         if entry.is_dir():
#             print(entry.name)

# import os

# # List all subdirectories using os.listdir
# basepath = 'my_directory/'
# for entry in os.listdir(basepath):
#     if os.path.isdir(os.path.join(basepath, entry)):
#         print(entry)
