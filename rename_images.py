import os
import glob

replacements = {
    "WhatsApp Image 2026-06-23 at 3.42.18 PM.jpeg": "the_lounge.jpeg",
    "WhatsApp Image 2026-06-23 at 3.42.19 PM.jpeg": "the_suite.jpeg",
    "WhatsApp Image 2026-06-23 at 3.42.20 PM.jpeg": "the_workspace.jpeg",
    "WhatsApp Image 2026-06-23 at 3.42.23 PM.jpeg": "interior_ambiance.jpeg",
    "WhatsApp Image 2026-06-23 at 3.42.24 PM.jpeg": "balcony_skyline_view.jpeg",
    "WhatsApp Image 2026-06-23 at 3.42.25 PM.jpeg": "modern_kitchenette.jpeg"
}

# Rename files in public/img
for old_name, new_name in replacements.items():
    old_path = os.path.join("public/img", old_name)
    new_path = os.path.join("public/img", new_name)
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"Renamed: {old_name} -> {new_name}")
    else:
        print(f"File not found: {old_name}")

# Replace in src code
jsx_files = glob.glob("src/**/*.jsx", recursive=True)
for file_path in jsx_files:
    with open(file_path, "r") as f:
        content = f.read()
    
    modified = False
    for old_name, new_name in replacements.items():
        if old_name in content:
            content = content.replace(old_name, new_name)
            modified = True
            
    if modified:
        with open(file_path, "w") as f:
            f.write(content)
        print(f"Updated references in: {file_path}")

print("Done!")
