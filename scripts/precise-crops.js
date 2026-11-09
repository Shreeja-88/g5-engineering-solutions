import { execSync } from 'child_process';
import path from 'path';

const outDir = path.resolve('public/assets/projects');

// Re-crop images with exact bounding boxes to completely eliminate all slide text, headers, and presentation chrome
const preciseCrops = [
  // 1. Sports Park Canopy: Only the blue-sky 3D canopy render (no text above it)
  {
    name: 'sports_park_canopy_hero.png',
    src: 'public/assets/extracted/casestudy_02.png',
    crop: '660x380+5+635',
  },
  // Sports park 3D Tekla model (top right)
  {
    name: 'sports_park_canopy_tekla.png',
    src: 'public/assets/extracted/casestudy_02.png',
    crop: '600x420+1020+140',
  },
  // Sports park tree column
  {
    name: 'sports_park_canopy_tree.png',
    src: 'public/assets/extracted/casestudy_02.png',
    crop: '360x340+680+630',
  },

  // 2. Manassas City School Facility: Only the 3D multi-wing school model on white background
  {
    name: 'manassas_school_hero.png',
    src: 'public/assets/extracted/modern_08.png',
    crop: '1100x680+70+350',
  },
  // Manassas framing details
  {
    name: 'manassas_school_framing.png',
    src: 'public/assets/extracted/modern_08.png',
    crop: '380x300+100+1370',
  },
  {
    name: 'manassas_school_elevations.png',
    src: 'public/assets/extracted/modern_08.png',
    crop: '380x300+520+1370',
  },

  // 3. Civic Union Towers: The 3D rendered pylon (clean grey steel on caissons)
  {
    name: 'civic_union_towers_hero.png',
    src: 'public/assets/extracted/casestudy_01.png',
    crop: '560x1050+1060+160',
  },
  {
    name: 'civic_union_towers_tekla.png',
    src: 'public/assets/extracted/casestudy_01.png',
    crop: '500x1050+540+140',
  },
  {
    name: 'civic_union_towers_plan.png',
    src: 'public/assets/extracted/casestudy_01.png',
    crop: '460x480+60+500',
  },

  // 4. Gold Mine Complex: 3D multi-level mineral processing complex
  {
    name: 'gold_mine_hero.png',
    src: 'public/assets/extracted/modern_06.png',
    crop: '1150x700+50+400',
  },
  {
    name: 'gold_mine_hopper.png',
    src: 'public/assets/extracted/modern_06.png',
    crop: '540x300+70+1180',
  },
  {
    name: 'gold_mine_trommel.png',
    src: 'public/assets/extracted/modern_06.png',
    crop: '540x300+630+1180',
  },

  // 5. Delia K-12 Replacement School: Complete 3D school framing
  {
    name: 'delia_school_hero.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '860x540+760+150',
  },
  {
    name: 'delia_school_framing.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '860x460+760+740',
  },
  {
    name: 'delia_school_ladder.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '180x350+240+500',
  },
  {
    name: 'delia_school_connection.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '230x230+400+390',
  },

  // 6. Riverfront Amphitheater: 3D rendered radial arch canopy
  {
    name: 'riverfront_amphitheater_hero.png',
    src: 'public/assets/extracted/casestudy_07.png',
    crop: '680x480+470+520',
  },
  {
    name: 'riverfront_amphitheater_tekla.png',
    src: 'public/assets/extracted/casestudy_07.png',
    crop: '460x480+1180+540',
  },
  {
    name: 'riverfront_amphitheater_drawing.png',
    src: 'public/assets/extracted/casestudy_07.png',
    crop: '580x380+1040+140',
  },

  // 7. Commonwealth Pier: Marine construction frame
  {
    name: 'commonwealth_pier_gangway.png',
    src: 'public/assets/extracted/casestudy_10.png',
    crop: '580x440+440+140',
  },
  {
    name: 'commonwealth_pier_pile.png',
    src: 'public/assets/extracted/casestudy_10.png',
    crop: '280x340+90+360',
  },
  {
    name: 'commonwealth_pier_gangway.png',
    src: 'public/assets/extracted/casestudy_10.png',
    crop: '1250x260+180+500',
  },

  // 8. Kane Spiral Stair: 3D helical stair
  {
    name: 'kane_spiral_stair_hero.png',
    src: 'public/assets/extracted/casestudy_09.png',
    crop: '720x600+150+150',
  },

  // 9. Power Plant Construction Office
  {
    name: 'power_plant_office_hero.png',
    src: 'public/assets/extracted/casestudy_03.png',
    crop: '660x440+10+580',
  },
  {
    name: 'power_plant_office_framing.png',
    src: 'public/assets/extracted/casestudy_03.png',
    crop: '780x480+840+580',
  },

  // 10. Power Plant Store: Clean curved barrel vault truss (no text!)
  {
    name: 'power_plant_store_hero.png',
    src: 'public/assets/extracted/casestudy_04.png',
    crop: '660x480+970+150',
  },
  {
    name: 'power_plant_store_truss.png',
    src: 'public/assets/extracted/casestudy_04.png',
    crop: '950x160+40+690', // Guaranteed zero text!
  },
  {
    name: 'power_plant_store_connection.png',
    src: 'public/assets/extracted/casestudy_04.png',
    crop: '270x290+650+140',
  },

  // 11. Chlorine Dioxide Stair Tower
  {
    name: 'chlorine_stair_tower_hero.png',
    src: 'public/assets/extracted/casestudy_05.png',
    crop: '700x950+880+180',
  },
  {
    name: 'chlorine_stair_tower_erected.png',
    src: 'public/assets/extracted/casestudy_05.png',
    crop: '420x460+390+540',
  },

  // 12. Hawbridge School: 3D complete building framing
  {
    name: 'hawbridge_school_hero.png',
    src: 'public/assets/extracted/casestudy_08.png',
    crop: '1150x640+300+240',
  },

  // 13. High-complexity Industrial Complex (for Homepage & Services)
  {
    name: 'g5_structural_complex_3d.png',
    src: 'public/assets/extracted/ppt_01.png',
    crop: '820x620+900+220',
  }
];

console.log('Running clean precise crops...');
for (const item of preciseCrops) {
  const dest = path.join(outDir, item.name);
  try {
    const cmd = `convert "${item.src}" -crop ${item.crop} +repage "${dest}"`;
    execSync(cmd);
    console.log(`✓ Cleanly cropped: ${item.name}`);
  } catch (err) {
    console.error(`✗ Error on ${item.name}:`, err.message);
  }
}
console.log('All crops executed.');
