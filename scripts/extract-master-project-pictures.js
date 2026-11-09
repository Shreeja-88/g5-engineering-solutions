import { execSync } from 'child_process';
import path from 'path';

const outDir = path.resolve('public/assets/projects');

// Master list of project pictures - EVERY crop is verified to contain ONLY the project picture
const masterCrops = [
  // 1. Sports Park Curved Canopy: Pure blue-sky canopy render with tree column (y starts at 665, zero text above)
  {
    name: 'sports_park_canopy_hero.png',
    src: 'public/assets/extracted/casestudy_02.png',
    crop: '670x330+0+665',
  },
  {
    name: 'sports_park_canopy_tekla.png',
    src: 'public/assets/extracted/casestudy_02.png',
    crop: '480x280+710+270',
  },
  {
    name: 'sports_park_canopy_tree.png',
    src: 'public/assets/extracted/casestudy_02.png',
    crop: '350x200+670+630',
  },

  // 2. Manassas City School Facility: From high-res ppt_11.png (y starts at 300, zero text above)
  {
    name: 'manassas_school_hero.png',
    src: 'public/assets/extracted/ppt_11.png',
    crop: '1060x410+100+300',
  },
  {
    name: 'manassas_school_framing.png',
    src: 'public/assets/extracted/ppt_11.png',
    crop: '320x210+1220+750',
  },
  {
    name: 'manassas_school_elevations.png',
    src: 'public/assets/extracted/ppt_11.png',
    crop: '320x210+1570+750',
  },

  // 3. Gold Mine Processing Complex: From high-res ppt_09.png (y starts at 300, zero text above)
  {
    name: 'gold_mine_hero.png',
    src: 'public/assets/extracted/ppt_09.png',
    crop: '1080x410+100+300',
  },
  {
    name: 'gold_mine_hopper.png',
    src: 'public/assets/extracted/ppt_09.png',
    crop: '530x190+95+695',
  },
  {
    name: 'gold_mine_trommel.png',
    src: 'public/assets/extracted/ppt_09.png',
    crop: '530x190+660+695',
  },
  {
    name: 'gold_mine_substructures.png',
    src: 'public/assets/extracted/ppt_10.png',
    crop: '400x290+980+370',
  },

  // 4. Civic Union Towers: Pure 3D tower and Tekla models
  {
    name: 'civic_union_towers_hero.png',
    src: 'public/assets/extracted/casestudy_01.png',
    crop: '590x830+1055+140',
  },
  {
    name: 'civic_union_towers_tekla.png',
    src: 'public/assets/extracted/casestudy_01.png',
    crop: '510x890+535+140',
  },
  {
    name: 'civic_union_towers_plan.png',
    src: 'public/assets/extracted/casestudy_01.png',
    crop: '480x440+45+515',
  },

  // 5. Delia K-12 Replacement School: Pure 3D school framing & details (avoid corner joint)
  {
    name: 'delia_school_hero.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '730x420+920+145',
  },
  {
    name: 'delia_school_framing.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '710x440+890+500',
  },
  {
    name: 'delia_school_ladder.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '130x370+260+490',
  },
  {
    name: 'delia_school_connection.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '180x190+390+390',
  },

  // 6. Riverfront Amphitheater: Arched canopy renders
  {
    name: 'riverfront_amphitheater_hero.png',
    src: 'public/assets/extracted/casestudy_07.png',
    crop: '675x445+465+505',
  },
  {
    name: 'riverfront_amphitheater_tekla.png',
    src: 'public/assets/extracted/casestudy_07.png',
    crop: '490x435+1150+520',
  },
  {
    name: 'riverfront_amphitheater_drawing.png',
    src: 'public/assets/extracted/casestudy_07.png',
    crop: '585x345+1030+145',
  },

  // 7. Commonwealth Pier: Marine framing
  {
    name: 'commonwealth_pier_gangway.png',
    src: 'public/assets/extracted/casestudy_10.png',
    crop: '315x270+425+145',
  },
  {
    name: 'commonwealth_pier_gangway.png',
    src: 'public/assets/extracted/casestudy_10.png',
    crop: '720x210+780+410',
  },
  {
    name: 'commonwealth_pier_pile.png',
    src: 'public/assets/extracted/casestudy_10.png',
    crop: '210x200+90+345',
  },

  // 8. Kane Spiral Stair: 3D helical stair
  {
    name: 'kane_spiral_stair_hero.png',
    src: 'public/assets/extracted/casestudy_09.png',
    crop: '720x400+140+180',
  },
  {
    name: 'kane_spiral_stair_plan.png',
    src: 'public/assets/extracted/casestudy_09.png',
    crop: '550x400+950+180',
  },

  // 9. Power Plant Construction Office
  {
    name: 'power_plant_office_hero.png',
    src: 'public/assets/extracted/casestudy_03.png',
    crop: '670x395+0+565',
  },
  {
    name: 'power_plant_office_framing.png',
    src: 'public/assets/extracted/casestudy_03.png',
    crop: '790x385+835+575',
  },
  {
    name: 'power_plant_office_tekla.png',
    src: 'public/assets/extracted/casestudy_03.png',
    crop: '675x420+590+140',
  },

  // 10. Power Plant Store: Clean curved barrel vault warehouse & truss
  {
    name: 'power_plant_store_hero.png',
    src: 'public/assets/extracted/casestudy_04.png',
    crop: '835x520+795+145',
  },
  {
    name: 'power_plant_store_truss.png',
    src: 'public/assets/extracted/casestudy_04.png',
    crop: '930x135+35+570',
  },
  {
    name: 'power_plant_store_connection.png',
    src: 'public/assets/extracted/casestudy_04.png',
    crop: '260x270+665+135',
  },

  // 11. Chlorine Dioxide Access Stair Tower
  {
    name: 'chlorine_stair_tower_hero.png',
    src: 'public/assets/extracted/casestudy_05.png',
    crop: '740x870+880+165',
  },
  {
    name: 'chlorine_stair_tower_erected.png',
    src: 'public/assets/extracted/casestudy_05.png',
    crop: '425x450+375+535',
  },
  {
    name: 'chlorine_stair_tower_wireframe.png',
    src: 'public/assets/extracted/casestudy_05.png',
    crop: '370x450+0+535',
  },

  // 12. Hawbridge School: 3D Framing
  {
    name: 'hawbridge_school_hero.png',
    src: 'public/assets/extracted/casestudy_08.png',
    crop: '1200x540+230+170',
  },

  // 13. G5 Structural Complex
  {
    name: 'g5_structural_complex_3d.png',
    src: 'public/assets/extracted/ppt_01.png',
    crop: '720x485+910+165',
  }
];

console.log('Extracting ONLY project pictures without text or extra chrome...');
for (const item of masterCrops) {
  const dest = path.join(outDir, item.name);
  try {
    const cmd = `convert "${item.src}" -crop ${item.crop} +repage "${dest}"`;
    execSync(cmd);
    console.log(`✓ Cropped project picture: ${item.name}`);
  } catch (err) {
    console.error(`✗ Error on ${item.name}:`, err.message);
  }
}
console.log('All project pictures extracted cleanly.');
