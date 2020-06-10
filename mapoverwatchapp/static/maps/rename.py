import os

map_path='C:\\Users\\Chris\\Desktop\\Code Study\\Portfolio_Work\\mapoverwatch\\mapoverwatchapp\\static\\maps'

for map_folder in os.scandir(map_path):
    if map_folder.is_dir():
        files_in_map_folder = os.scandir(map_folder.path)
        for files in files_in_map_folder:
            if files.is_file():
                os.rename(files.path,os.path.join(map_folder.path, files.name.replace('+','_')))
        


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