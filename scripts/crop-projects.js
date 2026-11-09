import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/assets/projects');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const crops = [
  // 1. Civic Union Towers
  {
    name: 'civic_union_towers_hero.png',
    src: 'public/assets/extracted/casestudy_01.png',
    crop: '600x1100+1040+140', // Clean 3D rendered steel structure
  },
  {
    name: 'civic_union_towers_tekla.png',
    src: 'public/assets/extracted/casestudy_01.png',
    crop: '530x1080+520+130', // Tekla colored framing
  },
  {
    name: 'civic_union_towers_plan.png',
    src: 'public/assets/extracted/casestudy_01.png',
    crop: '500x520+40+480', // Plan view
  },

  // 2. Sports Park Canopy
  {
    name: 'sports_park_canopy_hero.png',
    src: 'public/assets/extracted/casestudy_02.png',
    crop: '680x520+0+520', // Architectural render with sky
  },
  {
    name: 'sports_park_canopy_tekla.png',
    src: 'public/assets/extracted/casestudy_02.png',
    crop: '650x450+980+620', // 3D Tekla colored canopy
  },
  {
    name: 'sports_park_canopy_tree.png',
    src: 'public/assets/extracted/casestudy_02.png',
    crop: '380x360+680+620', // Built-up branching column
  },

  // 3. Gold Mine Processing Complex
  {
    name: 'gold_mine_hero.png',
    src: 'public/assets/extracted/ppt_09.png',
    crop: '980x660+80+280', // Massive 3D mineral processing complex
  },
  {
    name: 'gold_mine_hopper.png',
    src: 'public/assets/extracted/ppt_09.png',
    crop: '470x280+90+710', // Discharge hopper
  },
  {
    name: 'gold_mine_trommel.png',
    src: 'public/assets/extracted/ppt_09.png',
    crop: '430x280+580+710', // Trommel & Kibble
  },
  {
    name: 'gold_mine_substructures.png',
    src: 'public/assets/extracted/ppt_10.png',
    crop: '700x500+880+380', // Equipment framing modules
  },

  // 4. Delia K-12 Replacement School
  {
    name: 'delia_school_hero.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '880x580+750+120', // Complete school 3D model
  },
  {
    name: 'delia_school_framing.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '880x480+750+720', // Steel structural framing
  },
  {
    name: 'delia_school_ladder.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '190x380+230+480', // Caged safety ladder detail
  },
  {
    name: 'delia_school_connection.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '240x260+390+380', // Skewed moment connection
  },

  // 5. Riverfront Amphitheater
  {
    name: 'riverfront_amphitheater_hero.png',
    src: 'public/assets/extracted/casestudy_07.png',
    crop: '700x500+460+500', // Rendered radial arch canopy
  },
  {
    name: 'riverfront_amphitheater_tekla.png',
    src: 'public/assets/extracted/casestudy_07.png',
    crop: '480x500+1160+530', // Tekla colored arch
  },
  {
    name: 'riverfront_amphitheater_drawing.png',
    src: 'public/assets/extracted/casestudy_07.png',
    crop: '600x420+1030+130', // Radial curve engineering blueprint
  },

  // 6. Commonwealth Pier Phase 2
  {
    name: 'commonwealth_pier_gangway.png',
    src: 'public/assets/extracted/casestudy_10.png',
    crop: '600x480+420+130', // Marine platform frame
  },
  {
    name: 'commonwealth_pier_pile.png',
    src: 'public/assets/extracted/casestudy_10.png',
    crop: '300x380+80+340', // Pile collar assembly
  },
  {
    name: 'commonwealth_pier_gangway.png',
    src: 'public/assets/extracted/casestudy_10.png',
    crop: '1300x320+150+480', // Pier walkway framing
  },

  // 7. Kane School Spiral Stair
  {
    name: 'kane_spiral_stair_hero.png',
    src: 'public/assets/extracted/casestudy_09.png',
    crop: '750x640+140+140', // Helical spiral stair elevation
  },
  {
    name: 'kane_spiral_stair_plan.png',
    src: 'public/assets/extracted/casestudy_09.png',
    crop: '600x640+1000+140', // Plan view
  },

  // 8. Manassas City School Facility
  {
    name: 'manassas_school_hero.png',
    src: 'public/assets/extracted/ppt_11.png',
    crop: '1000x560+200+300', // Multi-wing school 3D model
  },
  {
    name: 'manassas_school_framing.png',
    src: 'public/assets/extracted/ppt_11.png',
    crop: '280x280+1000+740', // Framing isometric
  },
  {
    name: 'manassas_school_elevations.png',
    src: 'public/assets/extracted/ppt_11.png',
    crop: '280x280+1300+740', // Roof elevation cutaway
  },

  // 9. Power Plant Construction Office
  {
    name: 'power_plant_office_hero.png',
    src: 'public/assets/extracted/casestudy_03.png',
    crop: '680x480+0+560', // 3D rendered power plant building
  },
  {
    name: 'power_plant_office_tekla.png',
    src: 'public/assets/extracted/casestudy_03.png',
    crop: '650x500+590+130', // 3D Tekla roof model
  },
  {
    name: 'power_plant_office_framing.png',
    src: 'public/assets/extracted/casestudy_03.png',
    crop: '800x520+830+560', // Spliced truss steel frame
  },

  // 10. Power Plant Owner's Store
  {
    name: 'power_plant_store_hero.png',
    src: 'public/assets/extracted/casestudy_04.png',
    crop: '680x520+960+130', // Curved barrel vault framing
  },
  {
    name: 'power_plant_store_truss.png',
    src: 'public/assets/extracted/casestudy_04.png',
    crop: '980x250+30+570', // Curved spliced bowstring truss
  },
  {
    name: 'power_plant_store_connection.png',
    src: 'public/assets/extracted/casestudy_04.png',
    crop: '300x320+650+120', // Bolted joint with stiffeners
  },

  // 11. Chlorine Dioxide System Stair Tower
  {
    name: 'chlorine_stair_tower_hero.png',
    src: 'public/assets/extracted/casestudy_05.png',
    crop: '720x980+870+170', // 3D Tekla stair tower
  },
  {
    name: 'chlorine_stair_tower_erected.png',
    src: 'public/assets/extracted/casestudy_05.png',
    crop: '430x480+380+530', // Actual erected stair photo
  },
  {
    name: 'chlorine_stair_tower_wireframe.png',
    src: 'public/assets/extracted/casestudy_05.png',
    crop: '330x480+20+530', // Wireframe model
  },

  // 12. Hawbridge School New Upper School
  {
    name: 'hawbridge_school_hero.png',
    src: 'public/assets/extracted/casestudy_08.png',
    crop: '1200x700+280+220', // Complete school 3D frame
  },

  // 13. High-complexity Industrial Complex (for Homepage & Services)
  {
    name: 'g5_structural_complex_3d.png',
    src: 'public/assets/extracted/ppt_01.png',
    crop: '850x650+880+200', // Complex 3D industrial model
  }
];

console.log(`Starting crop for ${crops.length} image assets...`);
for (const item of crops) {
  const dest = path.join(outDir, item.name);
  try {
    const cmd = `convert "${item.src}" -crop ${item.crop} +repage -trim "${dest}"`;
    execSync(cmd);
    console.log(`✓ Cropped: ${item.name}`);
  } catch (err) {
    console.error(`✗ Failed ${item.name}:`, err.message);
  }
}
console.log('All image crops completed!');
