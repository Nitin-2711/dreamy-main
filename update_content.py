import os
import re

def update_interactive_showcase():
    path = "src/sections/Experience/InteractiveShowcase.jsx"
    with open(path, "r") as f:
        content = f.read()

    # the_lounge.jpeg -> Premium Decor
    content = re.sub(r'(src: "/img/the_lounge.jpeg",\s*title:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")', 
                     r'\1Premium Decor\3Elegant decorative accents adding a touch of luxury.\5', content)
                     
    # the_suite.jpeg -> Elegant Bedroom Suite
    content = re.sub(r'(src: "/img/the_suite.jpeg",\s*title:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")', 
                     r'\1Elegant Bedroom Suite\3Luxurious king-size bed with premium linens for ultimate comfort.\5', content)

    # the_workspace.jpeg -> Tea & Coffee Station
    content = re.sub(r'(src: "/img/the_workspace.jpeg",\s*title:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")', 
                     r'\1Tea & Coffee Station\3Fully equipped beverage station with premium selections.\5', content)

    with open(path, "w") as f:
        f.write(content)


def update_experience_section():
    path = "src/sections/Experience/ExperienceSection.jsx"
    with open(path, "r") as f:
        content = f.read()

    # interior_ambiance.jpeg (Bedroom)
    content = re.sub(r'(img:\s*"/img/interior_ambiance.jpeg",\s*title:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Master Bedroom\3Spacious master bedroom featuring bespoke interior design and warm lighting.\5', content)

    # balcony_skyline_view.jpeg (Bedside Lamp)
    content = re.sub(r'(img:\s*"/img/balcony_skyline_view.jpeg",\s*title:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Warm Ambiance\3Cozy bedside lighting creating a relaxing and premium atmosphere.\5', content)

    # the_workspace.jpeg (Tea/Coffee)
    content = re.sub(r'(img:\s*"/img/the_workspace.jpeg",\s*title:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Tea & Coffee Station\3Fully equipped beverage station for your morning refreshment.\5', content)

    # plaza_night.webp (AI Render Night) - Wait, let me just describe it as Night Architecture Render
    content = re.sub(r'(img:\s*"/img/plaza_night.webp",\s*title:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Night View Visualization\3Stunning futuristic architectural concept illuminated against the evening sky.\5', content)

    with open(path, "w") as f:
        f.write(content)


def update_gallery_section():
    path = "src/sections/Gallery/GallerySection.jsx"
    with open(path, "r") as f:
        content = f.read()

    # galaxy_blue_sapphire_skyline.jpeg (Glassware)
    content = re.sub(r'(src:\s*"/img/galaxy_blue_sapphire_skyline.jpeg",\s*title:\s*")([^"]+)(",\s*tag:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Premium Glassware\3Kitchen Accessories\5Curated selection of fine glassware for dining and entertainment.\7', content)

    # galaxy_blue_sapphire_architecture.jpeg (Bedroom w/ Sofa)
    content = re.sub(r'(src:\s*"/img/galaxy_blue_sapphire_architecture.jpeg",\s*title:\s*")([^"]+)(",\s*tag:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Modern Living Area\3Living Space\5Open-plan living space seamlessly integrating comfort and style.\7', content)

    # galaxy_blue_sapphire_night.jpeg (Modern Kitchen)
    content = re.sub(r'(src:\s*"/img/galaxy_blue_sapphire_night.jpeg",\s*title:\s*")([^"]+)(",\s*tag:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Modern Kitchen\3Culinary Space\5Fully equipped modern kitchen with premium built-in appliances.\7', content)

    # galaxy_blue_sapphire_entrance.jpeg (Sleek Kitchenette)
    content = re.sub(r'(src:\s*"/img/galaxy_blue_sapphire_entrance.jpeg",\s*title:\s*")([^"]+)(",\s*tag:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Sleek Kitchenette\3Kitchenette\5Contemporary kitchen design with ample space and modern amenities.\7', content)

    # plaza_entrance_lobby.webp (Real Exterior 2)
    content = re.sub(r'(src:\s*"/img/plaza_entrance_lobby.webp",\s*title:\s*")([^"]+)(",\s*tag:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Galaxy Blue Sapphire Exterior\3Building Exterior\5The stunning modern architecture of Galaxy Blue Sapphire Plaza.\7', content)

    # plaza_environment.webp (Real Exterior)
    content = re.sub(r'(src:\s*"/img/plaza_environment.webp",\s*title:\s*")([^"]+)(",\s*tag:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Premium Commercial Hub\3Urban Center\5A bustling high-street retail and commercial destination.\7', content)

    # the_lounge.jpeg (Decor)
    content = re.sub(r'(src:\s*"/img/the_lounge.jpeg",\s*title:\s*")([^"]+)(",\s*tag:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Premium Decor\3Interior Accents\5Elegant decorative accents adding a touch of luxury to the living space.\7', content)

    # the_suite.jpeg (Bedroom)
    content = re.sub(r'(src:\s*"/img/the_suite.jpeg",\s*title:\s*")([^"]+)(",\s*tag:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Elegant Bedroom Suite\3Bedroom\5Luxurious king-size bed with premium linens for ultimate comfort.\7', content)

    # the_workspace.jpeg (Tea/Coffee)
    content = re.sub(r'(src:\s*"/img/the_workspace.jpeg",\s*title:\s*")([^"]+)(",\s*tag:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Tea & Coffee Station\3Beverage Station\5Fully equipped beverage station with premium tea and coffee selections.\7', content)

    # interior_ambiance.jpeg (Bedroom)
    content = re.sub(r'(src:\s*"/img/interior_ambiance.jpeg",\s*title:\s*")([^"]+)(",\s*tag:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Master Bedroom\3Bedroom\5Spacious master bedroom featuring bespoke interior design and warm lighting.\7', content)

    # balcony_skyline_view.jpeg (Lamp)
    content = re.sub(r'(src:\s*"/img/balcony_skyline_view.jpeg",\s*title:\s*")([^"]+)(",\s*tag:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Warm Ambiance\3Lighting Design\5Cozy bedside lighting creating a relaxing and premium atmosphere.\7', content)

    # modern_kitchenette.jpeg (Cookware)
    content = re.sub(r'(src:\s*"/img/modern_kitchenette.jpeg",\s*title:\s*")([^"]+)(",\s*tag:\s*")([^"]+)(",\s*desc:\s*")([^"]+)(")',
                     r'\1Premium Cookware\3Kitchen Accessories\5High-quality cookware provided for your culinary needs.\7', content)

    with open(path, "w") as f:
        f.write(content)

update_interactive_showcase()
update_experience_section()
update_gallery_section()
print("Updated main gallery/showcase sections.")
