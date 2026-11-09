import subprocess
import os

crops = [
  # Delia School: 0 text guaranteed
  {
    'name': 'delia_school_ladder.png',
    'src': 'public/assets/extracted/casestudy_06.png',
    'crop': '120x310+260+540',
  },
  {
    'name': 'delia_school_connection.png',
    'src': 'public/assets/extracted/casestudy_06.png',
    'crop': '150x250+410+600',
  },

  # Civic Union Towers: Plan view with 0 text
  {
    'name': 'civic_union_towers_plan.png',
    'src': 'public/assets/extracted/casestudy_01.png',
    'crop': '470x370+45+575',
  },

  # Sports Park Canopy: Clean branching tree column
  {
    'name': 'sports_park_canopy_tree.png',
    'src': 'public/assets/extracted/casestudy_02.png',
    'crop': '230x180+415+635',
  },

  # Commonwealth Pier: Clean timber pile & gangway
  {
    'name': 'commonwealth_pier_gangway.png',
    'src': 'public/assets/extracted/casestudy_10.png',
    'crop': '680x230+90+415',
  },
  {
    'name': 'commonwealth_pier_pile.png',
    'src': 'public/assets/extracted/casestudy_10.png',
    'crop': '315x230+425+165',
  },
  {
    'name': 'commonwealth_pier_gangway.png',
    'src': 'public/assets/extracted/casestudy_10.png',
    'crop': '720x210+780+410',
  },

  # Power Plant Office: Pure 3D model render without text above
  {
    'name': 'power_plant_office_hero.png',
    'src': 'public/assets/extracted/casestudy_03.png',
    'crop': '670x330+0+630',
  },
  {
    'name': 'power_plant_office_framing.png',
    'src': 'public/assets/extracted/casestudy_03.png',
    'crop': '780x350+840+590',
  },
  {
    'name': 'power_plant_office_tekla.png',
    'src': 'public/assets/extracted/casestudy_03.png',
    'crop': '675x400+590+150',
  },

  # Chlorine Stair Tower: Pure 3D model & photo, zero logo, zero text
  {
    'name': 'chlorine_stair_tower_hero.png',
    'src': 'public/assets/extracted/casestudy_05.png',
    'crop': '680x780+880+165',
  },
  {
    'name': 'chlorine_stair_tower_erected.png',
    'src': 'public/assets/extracted/casestudy_05.png',
    'crop': '420x390+375+575',
  },
  {
    'name': 'chlorine_stair_tower_wireframe.png',
    'src': 'public/assets/extracted/casestudy_05.png',
    'crop': '360x420+0+550',
  },

  # Riverfront Amphitheater: 3D angled model instead of 2D dimension drawing
  {
    'name': 'riverfront_amphitheater_drawing.png',
    'src': 'public/assets/extracted/casestudy_07.png',
    'crop': '420x440+0+505',
  },

  # Gold Mine Hoppers: Clean 3D equipment models
  {
    'name': 'gold_mine_hopper.png',
    'src': 'public/assets/extracted/ppt_09.png',
    'crop': '530x170+95+715',
  },
  {
    'name': 'gold_mine_trommel.png',
    'src': 'public/assets/extracted/ppt_09.png',
    'crop': '530x170+660+715',
  }
]

out_dir = 'public/assets/projects'

print("Executing zero-text crops...")
for c in crops:
  dest = os.path.join(out_dir, c['name'])
  cmd = f'convert "{c["src"]}" -crop {c["crop"]} +repage "{dest}"'
  subprocess.run(cmd, shell=True, check=True)
  print(f"✓ Clean zero-text crop: {c['name']}")

print("All zero-text crops completed!")
