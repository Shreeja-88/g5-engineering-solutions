import { execSync } from 'child_process';
import path from 'path';

const outDir = path.resolve('public/assets/projects');

// Crop ONLY the project picture itself - pure 3D model / CAD framing, ZERO slide text, ZERO headers, ZERO pill buttons
const crops = [
  // 1. Sports Park Canopy: Only the blue sky with curved steel canopy
  // Top white border was at y=635-660, so start at y=670 with height 340, width 640, x=15
  {
    name: 'sports_park_canopy_hero.png',
    src: 'public/assets/extracted/casestudy_02.png',
    crop: '640x335+15+675',
  },
  // Sports park Tekla wireframe (top right)
  {
    name: 'sports_park_canopy_tekla.png',
    src: 'public/assets/extracted/casestudy_02.png',
    crop: '580x380+1030+160',
  },
  // Sports park tree column
  {
    name: 'sports_park_canopy_tree.png',
    src: 'public/assets/extracted/casestudy_02.png',
    crop: '330x300+695+660',
  },

  // 2. Manassas City School: ONLY the multi-wing 3D model, NO text below, NO pills
  {
    name: 'manassas_school_hero.png',
    src: 'public/assets/extracted/modern_08.png',
    crop: '1060x510+90+355',
  },
  // Manassas framing details
  {
    name: 'manassas_school_framing.png',
    src: 'public/assets/extracted/modern_08.png',
    crop: '360x270+110+1390',
  },
  {
    name: 'manassas_school_elevations.png',
    src: 'public/assets/extracted/modern_08.png',
    crop: '360x270+530+1390',
  },

  // 3. Civic Union Towers: The 3D tower structure
  {
    name: 'civic_union_towers_hero.png',
    src: 'public/assets/extracted/casestudy_01.png',
    crop: '520x960+1080+180',
  },
  {
    name: 'civic_union_towers_tekla.png',
    src: 'public/assets/extracted/casestudy_01.png',
    crop: '470x960+555+180',
  },
  {
    name: 'civic_union_towers_plan.png',
    src: 'public/assets/extracted/casestudy_01.png',
    crop: '420x420+80+530',
  },

  // 4. Gold Mine Complex: ONLY the 3D complex, cut off top 'j' and bottom text/pills
  {
    name: 'gold_mine_hero.png',
    src: 'public/assets/extracted/modern_06.png',
    crop: '1060x510+90+495',
  },
  {
    name: 'gold_mine_hopper.png',
    src: 'public/assets/extracted/modern_06.png',
    crop: '500x260+90+1200',
  },
  {
    name: 'gold_mine_trommel.png',
    src: 'public/assets/extracted/modern_06.png',
    crop: '500x260+650+1200',
  },

  // 5. Delia K-12 School: ONLY the 3D school framing, without corner connection or cut-offs
  {
    name: 'delia_school_hero.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '840x480+770+150',
  },
  {
    name: 'delia_school_framing.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '840x440+770+750',
  },
  {
    name: 'delia_school_ladder.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '160x320+250+520',
  },
  {
    name: 'delia_school_connection.png',
    src: 'public/assets/extracted/casestudy_06.png',
    crop: '210x210+410+400',
  },

  // 6. Riverfront Amphitheater: ONLY the arched canopy 3D model
  {
    name: 'riverfront_amphitheater_hero.png',
    src: 'public/assets/extracted/casestudy_07.png',
    crop: '650x440+485+540',
  },
  {
    name: 'riverfront_amphitheater_tekla.png',
    src: 'public/assets/extracted/casestudy_07.png',
    crop: '430x440+1195+560',
  },
  {
    name: 'riverfront_amphitheater_drawing.png',
    src: 'public/assets/extracted/casestudy_07.png',
    crop: '540x350+1060+155',
  },

  // 7. Commonwealth Pier: Marine pier structural framing
  {
    name: 'commonwealth_pier_gangway.png',
    src: 'public/assets/extracted/casestudy_10.png',
    crop: '550x410+455+155',
  },
  {
    name: 'commonwealth_pier_pile.png',
    src: 'public/assets/extracted/casestudy_10.png',
    crop: '250x310+105+375',
  },
  {
    name: 'commonwealth_pier_gangway.png',
    src: 'public/assets/extracted/casestudy_10.png',
    crop: '1200x230+205+515',
  },

  // 8. Kane Spiral Stair: Pure helical stair
  {
    name: 'kane_spiral_stair_hero.png',
    src: 'public/assets/extracted/casestudy_09.png',
    crop: '680x560+170+170',
  },

  // 9. Power Plant Construction Office
  {
    name: 'power_plant_office_hero.png',
    src: 'public/assets/extracted/casestudy_03.png',
    crop: '630x400+25+600',
  },
  {
    name: 'power_plant_office_framing.png',
    src: 'public/assets/extracted/casestudy_03.png',
    crop: '750x440+855+600',
  },

  // 10. Power Plant Store: Clean curved barrel vault truss and 3D frame
  {
    name: 'power_plant_store_hero.png',
    src: 'public/assets/extracted/casestudy_04.png',
    crop: '630x440+985+170',
  },
  {
    name: 'power_plant_store_truss.png',
    src: 'public/assets/extracted/casestudy_04.png',
    crop: '930x140+50+700',
  },
  {
    name: 'power_plant_store_connection.png',
    src: 'public/assets/extracted/casestudy_04.png',
    crop: '250x260+660+155',
  },

  // 11. Chlorine Dioxide Stair Tower
  {
    name: 'chlorine_stair_tower_hero.png',
    src: 'public/assets/extracted/casestudy_05.png',
    crop: '660x900+900+205',
  },
  {
    name: 'chlorine_stair_tower_erected.png',
    src: 'public/assets/extracted/casestudy_05.png',
    crop: '390x420+405+560',
  },

  // 12. Hawbridge School: Pure building framing
  {
    name: 'hawbridge_school_hero.png',
    src: 'public/assets/extracted/casestudy_08.png',
    crop: '1100x590+325+265',
  },

  // 13. G5 Structural Complex (3D Plant)
  {
    name: 'g5_structural_complex_3d.png',
    src: 'public/assets/extracted/ppt_01.png',
    crop: '790x580+915+240',
  }
];

console.log('Cropping ONLY project pictures...');
for (const c of crops) {
  const dest = path.join(outDir, c.name);
  try {
    const cmd = `convert "${c.src}" -crop ${c.crop} +repage "${dest}"`;
    execSync(cmd);
    console.log(`✓ Cropped project picture: ${c.name}`);
  } catch (err) {
    console.error(`✗ Error on ${c.name}:`, err.message);
  }
}
console.log('All crops completed successfully.');
