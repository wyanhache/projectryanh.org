import os

folder_path = '/Users/wyanhache/Downloads/2024'

# Iterate through all files in the folder
for index, file_name in enumerate(os.listdir(folder_path), start=1):
    old_file_path = os.path.join(folder_path, file_name)
    if os.path.isfile(old_file_path):  # Ensure it's a file
        # Construct the new file name
        new_file_name = f'{index}{os.path.splitext(file_name)[1]}'  # Preserve file extension
        new_file_path = os.path.join(folder_path, new_file_name)
        
        # Rename the file
        os.rename(old_file_path, new_file_path)
        print(f'Renamed: {file_name} -> {new_file_name}')
