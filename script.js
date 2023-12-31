(function(){
    var script = {
 "start": "this.init()",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2",
  "this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7",
  "this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "creationPolicy": "inAdvance",
 "vrPolyfillScale": 1,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "class": "Player",
 "definitions": [{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "label": "01. Chaturmukh 360 10",
 "hfovMin": "150%",
 "id": "panorama_07BEF844_1642_FFBB_4181_CE791F77FA81",
 "overlays": [
  "this.overlay_0D30EFE5_165F_993D_4178_DAC7D7E29DC7",
  "this.overlay_0C0256B6_1642_8B1F_41B4_E21C0E456FFC",
  "this.overlay_0CC2CE3A_1643_BB17_4178_9F002ADF9F0E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0BA7B323_1642_8935_41AA_4093E5443139",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_t.jpg",
 "hfovMax": 148
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "label": "01. Chaturmukh 360 06",
 "hfovMin": "150%",
 "id": "panorama_07A1089D_1642_90C5_41B4_6FF035D478AF",
 "overlays": [
  "this.overlay_00F21B89_16C7_99F5_41A6_633B1BC163A1",
  "this.overlay_0251153D_16C3_890D_41B4_7ADDB9887DE9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07A1946C_1642_904B_4191_2D39A8813BAC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0BA7B323_1642_8935_41AA_4093E5443139",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_t.jpg",
 "hfovMax": 145
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_040C5939_16C6_91CA_4192_9E0A8DE1A004",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_0BAA3323_1642_8935_41B6_113FF0522AE8",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 40.96,
  "hfov": 105,
  "class": "PanoramaCameraPosition",
  "pitch": -8.02
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 4.78
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 4.78
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 4.78
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 0,
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 4.78
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 4.78
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 4.78
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_camera",
 "timeToIdle": 5000
},
{
 "duration": 1000,
 "id": "effect_098B53B1_1645_8915_41B4_A26C00A39D03",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "label": "01. Chaturmukh 360 08",
 "hfovMin": "150%",
 "id": "panorama_07BFD05C_1642_F04A_4193_8A070B466EFE",
 "overlays": [
  "this.overlay_0EBC773C_164F_8913_4199_E1B2604547BC",
  "this.overlay_0D68BB6F_164D_990D_41B6_C57DCDB3AD26",
  "this.overlay_0DC2015E_1643_890F_41A4_33CE4F7D8BAC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BE940A_1642_F7CF_41A8_042C74EAB978"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0BA7B323_1642_8935_41AA_4093E5443139",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_t.jpg",
 "hfovMax": 144
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 12.32,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": 0.28
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_camera",
 "timeToIdle": 5000
},
{
 "duration": 1000,
 "id": "effect_098CB3B1_1645_8915_41A8_B89B15587D05",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098B03B1_1645_8915_4133_C7FC8B0FBE16",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.04,
  "hfov": 113,
  "class": "PanoramaCameraPosition",
  "pitch": -2.03
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_camera",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "label": "01. Chaturmukh 360 05",
 "id": "panorama_07A1946C_1642_904B_4191_2D39A8813BAC",
 "overlays": [
  "this.overlay_013BD8CF_16CD_870D_41B6_0ECAE8646D1A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07A1089D_1642_90C5_41B4_6FF035D478AF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0BA7B323_1642_8935_41AA_4093E5443139",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_t.jpg",
 "hfovMax": 133
},
{
 "duration": 1000,
 "id": "effect_098C33B1_1645_8915_41B4_71ADB569A497",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098BB3B1_1645_8915_41B4_589500991968",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 21.31,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": 3.58
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_camera",
 "timeToIdle": 5000
},
{
 "duration": 1000,
 "id": "effect_098A03B1_1645_8915_4180_754FD4D70E22",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "fieldOfViewOverlayOutsideColor": "#000000",
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.81,
 "thumbnailUrl": "media/map_040C5939_16C6_91CA_4192_9E0A8DE1A004_t.png",
 "fieldOfViewOverlayRadiusScale": 0.01,
 "fieldOfViewOverlayOutsideOpacity": 0.01,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "width": 3521,
 "initialZoomFactor": 1,
 "id": "map_040C5939_16C6_91CA_4192_9E0A8DE1A004",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_040C5939_16C6_91CA_4192_9E0A8DE1A004.png",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1734
   },
   {
    "url": "media/map_040C5939_16C6_91CA_4192_9E0A8DE1A004_lq.png",
    "width": 347,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 189
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "label": "newasa_map_final web",
 "scaleMode": "fit_inside",
 "height": 1909
},
{
 "duration": 1000,
 "id": "effect_098B23B1_1645_8915_4103_A573B8443B10",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098EE3B1_1645_8915_418B_A3897CD670DE",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098F23B1_1645_8915_41A1_72208A7066ED",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "label": "01. Chaturmukh 360 03",
 "hfovMin": "150%",
 "id": "panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5",
 "overlays": [
  "this.overlay_0F9EA8A3_16C5_8735_41A1_0D2F6AA47C7B",
  "this.overlay_0F3DC638_1645_8B13_4183_EEFA3D8F7F17"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0BA7B323_1642_8935_41AA_4093E5443139",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_t.jpg",
 "hfovMax": 147
},
{
 "duration": 1000,
 "id": "effect_098BD3B1_1645_8915_41A6_DFFD0CC28E3A",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098FE3B1_1645_8915_4195_F229ABB46E20",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098D43B1_1645_8915_41B6_F7510892497C",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098DB3B1_1645_8915_41B6_6F93B797D837",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.55,
  "hfov": 135,
  "class": "PanoramaCameraPosition",
  "pitch": -8.5
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_camera",
 "timeToIdle": 5000
},
{
 "duration": 1000,
 "id": "effect_098DE3B1_1645_8915_41AB_FC332A608CD0",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098B13B1_1645_8915_41A8_AB6552AC2660",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098FA3B1_1645_8915_41A5_FEBDB7ACA4CC",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "label": "01. Chaturmukh 360 11",
 "hfovMin": "150%",
 "id": "panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58",
 "overlays": [
  "this.overlay_008EC122_16CF_8937_41B2_21BCF57AF001",
  "this.overlay_0F557C20_16C2_9F33_41B7_4B4BC5E73BBF",
  "this.overlay_0E139C1D_164E_7F0D_41B4_E0FB2881590A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0BA7B323_1642_8935_41AA_4093E5443139",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_t.jpg",
 "hfovMax": 147
},
{
 "duration": 1000,
 "id": "effect_098A83B1_1645_8915_41B6_288A36CEFC47",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_040C5939_16C6_91CA_4192_9E0A8DE1A004",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_0BAA2323_1642_8935_41B2_308F8CD56C7F",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_098C53B1_1645_8915_41A7_2C37223790B0",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "label": "01. Chaturmukh 360 07",
 "hfovMin": "160%",
 "id": "panorama_07BFDC46_1642_9047_41AD_357A6C23EB20",
 "overlays": [
  "this.overlay_02376E8C_16C2_70CB_4192_18AEC16BE8D6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07A1089D_1642_90C5_41B4_6FF035D478AF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0BA7B323_1642_8935_41AA_4093E5443139",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_t.jpg",
 "hfovMax": 127
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -14.63,
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "pitch": -26.72
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_camera",
 "timeToIdle": 5000
},
{
 "duration": 1000,
 "id": "effect_098A33B1_1645_8915_4196_407591D34061",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098D03B1_1645_8915_41AB_E90212E0E0FE",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 6.65,
  "hfov": 118,
  "class": "PanoramaCameraPosition",
  "pitch": 12.32
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_07BE2046_1642_9046_41A7_FB013B1C4641_camera",
 "timeToIdle": 5000
},
{
 "duration": 1000,
 "id": "effect_098CA3B1_1645_8915_41A2_D1F3128825B9",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098F63B1_1645_8915_41B0_3B896366697B",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098BF3B1_1645_8915_41B6_EC5CC1696F8F",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098DE3B1_1645_8915_41AF_395C712DC265",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "label": "01. Chaturmukh 360 04",
 "hfovMin": "150%",
 "id": "panorama_07BE2046_1642_9046_41A7_FB013B1C4641",
 "overlays": [
  "this.overlay_0F0BDC45_16C2_BF7D_418B_01D7A3597263",
  "this.overlay_002A5BA5_16C2_B93D_41B5_C66F4798BEC4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0BA7B323_1642_8935_41AA_4093E5443139",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_t.jpg",
 "hfovMax": 148
},
{
 "duration": 1000,
 "id": "effect_098A53B1_1645_8915_4194_C4DA13BAD710",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "class": "Menu",
 "children": [
  {
   "label": "01. Chaturmukh 360 07",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "01. Chaturmukh 360 06",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "01. Chaturmukh 360 05",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "01. Chaturmukh 360 04",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "01. Chaturmukh 360 01",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "01. Chaturmukh 360 11",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "01. Chaturmukh 360 03",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "01. Chaturmukh 360 02",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "01. Chaturmukh 360 08",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "01. Chaturmukh 360 09",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "01. Chaturmukh 360 10",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "label": "Media",
 "id": "Menu_0BA7B323_1642_8935_41AA_4093E5443139",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "duration": 1000,
 "id": "effect_098D53B1_1645_8915_41A4_560E1712795C",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "gyroscopeEnabled": true,
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation"
},
{
 "duration": 1000,
 "id": "effect_098AC3B1_1645_8915_4187_17D730BF4C6A",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098D33B1_1645_8915_41A2_AB2EC0E26BF5",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098FE3B1_1645_8915_41B5_C68A1F94848D",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098FB3B1_1645_8915_41A8_59E1FBF09B2C",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098ED3A1_1645_8935_41A5_30436CCEEA84",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_07BFDC46_1642_9047_41AD_357A6C23EB20",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098EC3B1_1645_8915_4197_3FBAC5A875DC, 'hideEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098F23B1_1645_8915_41A1_72208A7066ED, 'hideEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098F43B1_1645_8915_4196_41D080648B2D, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098ED3A1_1645_8935_41A5_30436CCEEA84, 'hideEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098EE3B1_1645_8915_418B_A3897CD670DE, 'hideEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098F53B1_1645_8915_41B3_78C403607FF8, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_camera"
  },
  {
   "media": "this.panorama_07A1089D_1642_90C5_41B4_6FF035D478AF",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098FB3B1_1645_8915_41A8_59E1FBF09B2C, 'hideEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098FF3B1_1645_8915_41B3_09AC5F96F6D8, 'hideEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098C23B1_1645_8915_41B3_9D066F1DFA1A, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098F63B1_1645_8915_41B0_3B896366697B, 'hideEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098FA3B1_1645_8915_41A5_FEBDB7ACA4CC, 'hideEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098FE3B1_1645_8915_4195_F229ABB46E20, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_camera"
  },
  {
   "media": "this.panorama_07A1946C_1642_904B_4191_2D39A8813BAC",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098C73B1_1645_8915_419C_4417D8EBC9B5, 'hideEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098CA3B1_1645_8915_41B4_A1E55096FCA0, 'hideEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098CF3B1_1645_8915_4198_F5FF88B0A218, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098C43B1_1645_8915_41B2_ECAAC9EDA932, 'hideEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098C93B1_1645_8915_41A8_A4A90D6FFD88, 'hideEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098CD3B1_1645_8915_4198_B1F60B40852F, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07A1946C_1642_904B_4191_2D39A8813BAC_camera"
  },
  {
   "media": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098D23B1_1645_8915_41A8_BE75895F40FA, 'hideEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098FE3B1_1645_8915_41B5_C68A1F94848D, 'hideEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098C33B1_1645_8915_41B4_71ADB569A497, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098D03B1_1645_8915_41B2_5EF05AC448ED, 'hideEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098D43B1_1645_8915_41B6_F7510892497C, 'hideEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098C13B1_1645_8915_41AD_DE07D8362515, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641_camera"
  },
  {
   "media": "this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098C93B1_1645_8915_41B7_5FEA90FA7065, 'hideEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098CB3B1_1645_8915_41A8_B89B15587D05, 'hideEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098CF3B1_1645_8915_41B6_5B9C9A00BD64, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098C53B1_1645_8915_41A7_2C37223790B0, 'hideEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098C83B1_1645_8915_41B4_14293D50814A, 'hideEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098CA3B1_1645_8915_41A2_D1F3128825B9, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0442A3D8_1642_B04A_418B_74978E4EB753_camera"
  },
  {
   "media": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098D33B1_1645_8915_41A2_AB2EC0E26BF5, 'hideEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098D83B1_1645_8915_4181_D2B2260C7120, 'hideEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098DA3B1_1645_8915_412C_E6CD64159984, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098D03B1_1645_8915_41AB_E90212E0E0FE, 'hideEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098D53B1_1645_8915_41A4_560E1712795C, 'hideEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098DB3B1_1645_8915_41B6_6F93B797D837, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_camera"
  },
  {
   "media": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098A03B1_1645_8915_4180_754FD4D70E22, 'hideEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098A53B1_1645_8915_4194_C4DA13BAD710, 'hideEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098A93B1_1645_8915_419D_10F17E82E875, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098DE3B1_1645_8915_41AF_395C712DC265, 'hideEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098A33B1_1645_8915_4196_407591D34061, 'hideEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098A73B1_1645_8915_41B5_2B2E71F96E86, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_camera"
  },
  {
   "media": "this.panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098AD3B1_1645_8915_419A_7896876ED8E0, 'hideEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098B13B1_1645_8915_41A8_AB6552AC2660, 'hideEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098B53B1_1645_8915_41B4_A26C00A39D03, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098A83B1_1645_8915_41B6_288A36CEFC47, 'hideEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098AC3B1_1645_8915_4187_17D730BF4C6A, 'hideEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098B03B1_1645_8915_41A9_6F71E1DBEF8E, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_camera"
  },
  {
   "media": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098DF3B1_1645_8915_41B7_8A7A59A45C23, 'hideEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098A33B1_1645_8915_41A3_A0542037BCFE, 'hideEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098A73B1_1645_8915_4142_16EF810416C4, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098DC3B1_1645_8915_41B6_D5BB92A049F4, 'hideEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098DE3B1_1645_8915_41AB_FC332A608CD0, 'hideEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098A23B1_1645_8915_41B7_5D75B33698CA, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_camera"
  },
  {
   "media": "this.panorama_07BE940A_1642_F7CF_41A8_042C74EAB978",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098AB3B1_1645_8915_41B2_89AD451DA14F, 'hideEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098AE3B1_1645_8915_4199_B0F961ED1174, 'hideEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098B23B1_1645_8915_4103_A573B8443B10, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098A93B1_1645_8915_41B2_B68CE1013F04, 'hideEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098AA3B1_1645_8915_41AA_B2436AC1BD01, 'hideEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098B03B1_1645_8915_4133_C7FC8B0FBE16, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_camera"
  },
  {
   "media": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81",
   "end": "this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098B83B1_1645_8915_41A2_CB2583F3450B, 'hideEffect', false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098BD3B1_1645_8915_41A6_DFFD0CC28E3A, 'hideEffect', false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098BE3B1_1645_8915_41B3_E12D1A3C71CF, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, true); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, true); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, true)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false); this.setComponentVisibility(this.Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2, false, -1, this.effect_098B73B1_1645_8915_41A6_8EEA392435A0, 'hideEffect', false); this.keepComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false); this.setComponentVisibility(this.Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7, false, -1, this.effect_098BB3B1_1645_8915_41B4_589500991968, 'hideEffect', false); this.keepComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false); this.setComponentVisibility(this.Label_03408EA0_16CE_9B33_41B4_619B56FAD290, false, -1, this.effect_098BF3B1_1645_8915_41B6_EC5CC1696F8F, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_camera"
  },
  {
   "media": "this.album_044E311F_16C2_71C6_419F_139EEE17D266",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)"
},
{
 "duration": 1000,
 "id": "effect_098C43B1_1645_8915_41B2_ECAAC9EDA932",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098AA3B1_1645_8915_41AA_B2436AC1BD01",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098DA3B1_1645_8915_412C_E6CD64159984",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098CF3B1_1645_8915_4198_F5FF88B0A218",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098C93B1_1645_8915_41B7_5FEA90FA7065",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -34.37,
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "pitch": 5.84
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_07A1946C_1642_904B_4191_2D39A8813BAC_camera",
 "timeToIdle": 5000
},
{
 "duration": 1000,
 "id": "effect_098F43B1_1645_8915_4196_41D080648B2D",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 20.04,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": -2.46
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_0442A3D8_1642_B04A_418B_74978E4EB753_camera",
 "timeToIdle": 5000
},
{
 "duration": 1000,
 "id": "effect_098A73B1_1645_8915_41B5_2B2E71F96E86",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098F53B1_1645_8915_41B3_78C403607FF8",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098A33B1_1645_8915_41A3_A0542037BCFE",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "label": "01. Chaturmukh 360 01",
 "hfovMin": "150%",
 "id": "panorama_0442A3D8_1642_B04A_418B_74978E4EB753",
 "overlays": [
  "this.overlay_0F6BA4A7_16C2_8F3D_4184_A47C5684A23A",
  "this.overlay_0F5CF0C1_16CE_8775_41A0_EE770B5EBF95",
  "this.overlay_0ED2F6C1_1642_8B75_41B4_E7ECE60080AD",
  "this.overlay_0D9B6FAC_1643_9933_4197_1390581D51AE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0BA7B323_1642_8935_41AA_4093E5443139",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_t.jpg",
 "hfovMax": 147
},
{
 "duration": 1000,
 "id": "effect_098C13B1_1645_8915_41AD_DE07D8362515",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "label": "01. Chaturmukh 360 09",
 "hfovMin": "150%",
 "id": "panorama_07BE940A_1642_F7CF_41A8_042C74EAB978",
 "overlays": [
  "this.overlay_0D10202B_1642_8736_41A4_840EB9B3BE83",
  "this.overlay_0C357EBE_1642_9B0F_41B1_70936B550AF5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BEF844_1642_FFBB_4181_CE791F77FA81"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BFD05C_1642_F04A_4193_8A070B466EFE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0BA7B323_1642_8935_41AA_4093E5443139",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_t.jpg",
 "hfovMax": 145
},
{
 "class": "PhotoAlbum",
 "playList": "this.album_044E311F_16C2_71C6_419F_139EEE17D266_AlbumPlayList",
 "thumbnailUrl": "media/album_044E311F_16C2_71C6_419F_139EEE17D266_t.png",
 "id": "album_044E311F_16C2_71C6_419F_139EEE17D266",
 "label": "Photo Album 01. Chaturmukh 360 04"
},
{
 "duration": 1000,
 "id": "effect_098CF3B1_1645_8915_41B6_5B9C9A00BD64",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098B03B1_1645_8915_41A9_6F71E1DBEF8E",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098D23B1_1645_8915_41A8_BE75895F40FA",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098FF3B1_1645_8915_41B3_09AC5F96F6D8",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098A23B1_1645_8915_41B7_5D75B33698CA",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -19.77,
  "hfov": 121,
  "class": "PanoramaCameraPosition",
  "pitch": -1.91
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_camera",
 "timeToIdle": 5000
},
{
 "duration": 1000,
 "id": "effect_098C23B1_1645_8915_41B3_9D066F1DFA1A",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098AE3B1_1645_8915_4199_B0F961ED1174",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "class": "Panorama",
 "label": "01. Chaturmukh 360 02",
 "hfovMin": "150%",
 "id": "panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1",
 "overlays": [
  "this.overlay_0F13A0B0_16C2_8713_41AF_FCA69A642FA0",
  "this.overlay_0F4A06EA_16C2_8B37_418C_31757866F427"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_07BE2046_1642_9046_41A7_FB013B1C4641"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_0BA7B323_1642_8935_41AA_4093E5443139",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_t.jpg",
 "hfovMax": 147
},
{
 "duration": 1000,
 "id": "effect_098CA3B1_1645_8915_41B4_A1E55096FCA0",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098D03B1_1645_8915_41B2_5EF05AC448ED",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098EC3B1_1645_8915_4197_3FBAC5A875DC",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098DF3B1_1645_8915_41B7_8A7A59A45C23",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098AD3B1_1645_8915_419A_7896876ED8E0",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.43,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": 0.69
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "idleSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_camera",
 "timeToIdle": 5000
},
{
 "duration": 1000,
 "id": "effect_098CD3B1_1645_8915_4198_B1F60B40852F",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098A73B1_1645_8915_4142_16EF810416C4",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098A93B1_1645_8915_41B2_B68CE1013F04",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "duration": 1000,
 "id": "effect_098C83B1_1645_8915_41B4_14293D50814A",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098C73B1_1645_8915_419C_4417D8EBC9B5",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098B73B1_1645_8915_41A6_8EEA392435A0",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098D83B1_1645_8915_4181_D2B2260C7120",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098C93B1_1645_8915_41A8_A4A90D6FFD88",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098A93B1_1645_8915_419D_10F17E82E875",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098BE3B1_1645_8915_41B3_E12D1A3C71CF",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098B83B1_1645_8915_41A2_CB2583F3450B",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098DC3B1_1645_8915_41B6_D5BB92A049F4",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "duration": 1000,
 "id": "effect_098AB3B1_1645_8915_41B2_89AD451DA14F",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "99.857%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 311,
 "maxWidth": 307,
 "id": "Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2",
 "backgroundOpacity": 0,
 "right": "1.73%",
 "width": "6.829%",
 "borderRadius": 0,
 "url": "skin/Image_026B5FD4_16C3_B05A_41A7_FC788C4C6DD2.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "2.52%",
 "height": "8.126%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image20363"
 },
 "shadow": false
},
{
 "fontFamily": "Arial Black",
 "horizontalAlign": "center",
 "id": "Label_029D4583_16C6_89F5_41B2_28C8A4C5C9A7",
 "backgroundOpacity": 0,
 "width": "28.807%",
 "right": "32.78%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "चतुर्मुख देवळाची मानचित्रे",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0.06%",
 "height": "10.558%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Label",
 "fontSize": "5vmin",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "data": {
  "name": "Label25585"
 },
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#000000"
},
{
 "fontFamily": "Arial Narrow",
 "horizontalAlign": "center",
 "id": "Label_03408EA0_16CE_9B33_41B4_619B56FAD290",
 "left": "0.69%",
 "width": "14.615%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "360 Virtual Tour",
 "minHeight": 1,
 "propagateClick": false,
 "top": "3.26%",
 "height": "4.292%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "class": "Label",
 "fontSize": "3vmin",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "data": {
  "name": "Label26142"
 },
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#000000"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.92,
   "yaw": 42.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_099E2382_1645_89F7_41B6_44F4088E9415",
   "pitch": -12.77,
   "hfov": 15.92,
   "distance": 50,
   "yaw": 42.1
  }
 ],
 "id": "overlay_0D30EFE5_165F_993D_4178_DAC7D7E29DC7",
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.77,
   "yaw": -59.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_099E8382_1645_89F7_419B_DB211D01F676",
   "pitch": -15.03,
   "hfov": 15.77,
   "distance": 50,
   "yaw": -59.27
  }
 ],
 "id": "overlay_0C0256B6_1642_8B1F_41B4_E21C0E456FFC",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.98,
   "yaw": -7.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_099EF382_1645_89F7_41B3_64D70E4AC47D",
   "pitch": -21.57,
   "hfov": 15.98,
   "distance": 100,
   "yaw": -7.78
  }
 ],
 "id": "overlay_0CC2CE3A_1643_BB17_4178_9F002ADF9F0E",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.17,
   "yaw": -12.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09974372_1645_8917_41AD_416B41AA8798",
   "pitch": -1.94,
   "hfov": 17.17,
   "distance": 50,
   "yaw": -12.17
  }
 ],
 "id": "overlay_00F21B89_16C7_99F5_41A6_633B1BC163A1",
 "data": {
  "label": "Arrow 02b Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.08,
   "yaw": 61.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0997A372_1645_8917_4175_36B806B621AC",
   "pitch": -6.26,
   "hfov": 17.08,
   "distance": 50,
   "yaw": 61.27
  }
 ],
 "id": "overlay_0251153D_16C3_890D_41B4_7ADDB9887DE9",
 "data": {
  "label": "Arrow 02a Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.84,
   "yaw": -45.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09908382_1645_89F7_419E_06F7A8DD8CF3",
   "pitch": -32.06,
   "hfov": 13.84,
   "distance": 50,
   "yaw": -45.55
  }
 ],
 "id": "overlay_0EBC773C_164F_8913_4199_E1B2604547BC",
 "data": {
  "label": "Arrow 02 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.3,
   "yaw": 34.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0990E382_1645_89F7_41A0_3A7ACBC90517",
   "pitch": -18.48,
   "hfov": 16.3,
   "distance": 50,
   "yaw": 34.09
  }
 ],
 "id": "overlay_0D68BB6F_164D_990D_41B6_C57DCDB3AD26",
 "data": {
  "label": "Arrow 02c Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.54,
   "yaw": 165.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09914382_1645_89F7_41B0_C7CBEF5B3847",
   "pitch": -33.98,
   "hfov": 13.54,
   "distance": 50,
   "yaw": 165.86
  }
 ],
 "id": "overlay_0DC2015E_1643_890F_41A4_33CE4F7D8BAC",
 "data": {
  "label": "Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.05,
   "yaw": -37.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09941372_1645_8917_41B0_32D8FBE0E1F7",
   "pitch": 7.26,
   "hfov": 17.05,
   "distance": 50,
   "yaw": -37.91
  }
 ],
 "id": "overlay_013BD8CF_16CD_870D_41B6_0ECAE8646D1A",
 "data": {
  "label": "Arrow 02a Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.61,
   "yaw": 89.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09932382_1645_89F7_41B0_329A873CCEE1",
   "pitch": -10.31,
   "hfov": 19.61,
   "distance": 50,
   "yaw": 89.91
  }
 ],
 "id": "overlay_0F9EA8A3_16C5_8735_41A1_0D2F6AA47C7B",
 "data": {
  "label": "Arrow 02b Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.01,
   "yaw": -37.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09938382_1645_89F7_419E_32794FEB476B",
   "pitch": -8.05,
   "hfov": 17.01,
   "distance": 50,
   "yaw": -37.36
  }
 ],
 "id": "overlay_0F3DC638_1645_8B13_4183_EEFA3D8F7F17",
 "data": {
  "label": "Arrow 02b Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.18,
   "yaw": 39.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09922382_1645_89F7_419A_950288A686B6",
   "pitch": 0.62,
   "hfov": 17.18,
   "distance": 50,
   "yaw": 39.51
  }
 ],
 "id": "overlay_008EC122_16CF_8937_41B2_21BCF57AF001",
 "data": {
  "label": "Arrow 02a Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.32,
   "yaw": -36.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09929382_1645_89F7_41B1_00AAF4223B42",
   "pitch": 0.41,
   "hfov": 16.32,
   "distance": 50,
   "yaw": -36.76
  }
 ],
 "id": "overlay_0F557C20_16C2_9F33_41B7_4B4BC5E73BBF",
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.15,
   "yaw": -0.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_1_HS_2_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0992F382_1645_89F7_41A9_7BBEF8C8EFDF",
   "pitch": 3.35,
   "hfov": 17.15,
   "distance": 100,
   "yaw": -0.5
  }
 ],
 "id": "overlay_0E139C1D_164E_7F0D_41B4_E0FB2881590A",
 "data": {
  "label": "Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.72,
   "yaw": 41.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09973372_1645_8917_41A5_215801D94FDA",
   "pitch": -7.91,
   "hfov": 18.72,
   "distance": 100,
   "yaw": 41.26
  }
 ],
 "id": "overlay_02376E8C_16C2_70CB_4192_18AEC16BE8D6",
 "data": {
  "label": "Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.2,
   "yaw": 91.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09944372_1645_8917_41A1_3877C8C5860C",
   "pitch": -7.07,
   "hfov": 16.2,
   "distance": 50,
   "yaw": 91.11
  }
 ],
 "id": "overlay_0F0BDC45_16C2_BF7D_418B_01D7A3597263",
 "data": {
  "label": "Arrow 02 Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.82,
   "yaw": -91.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0994B372_1645_8917_41B5_6238C65D7359",
   "pitch": -11.75,
   "hfov": 16.82,
   "distance": 50,
   "yaw": -91.79
  }
 ],
 "id": "overlay_002A5BA5_16C2_B93D_41B5_C66F4798BEC4",
 "data": {
  "label": "Arrow 02b Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.29,
   "yaw": -46.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0994E372_1645_8917_41A3_F54A6059E58D",
   "pitch": -3.78,
   "hfov": 16.29,
   "distance": 50,
   "yaw": -46.71
  }
 ],
 "id": "overlay_0F6BA4A7_16C2_8F3D_4184_A47C5684A23A",
 "data": {
  "label": "Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.86,
   "yaw": 53.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09955372_1645_8917_4195_D86A8057AECB",
   "pitch": -11.07,
   "hfov": 16.86,
   "distance": 50,
   "yaw": 53.51
  }
 ],
 "id": "overlay_0F5CF0C1_16CE_8775_41A0_EE770B5EBF95",
 "data": {
  "label": "Arrow 02a Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.29,
   "yaw": 21.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09959372_1645_8907_4155_5C1BF9384F8D",
   "pitch": -3.78,
   "hfov": 16.29,
   "distance": 50,
   "yaw": 21.86
  }
 ],
 "id": "overlay_0ED2F6C1_1642_8B75_41B4_E7ECE60080AD",
 "data": {
  "label": "Arrow 02 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.28,
   "yaw": -17.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0995E382_1645_89F7_4195_145F47372DF0",
   "pitch": -4.4,
   "hfov": 16.28,
   "distance": 50,
   "yaw": -17.54
  }
 ],
 "id": "overlay_0D9B6FAC_1643_9933_4197_1390581D51AE",
 "data": {
  "label": "Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.87,
   "yaw": -37.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0991B382_1645_89F7_418F_E7B6FE046B2F",
   "pitch": -10.93,
   "hfov": 16.87,
   "distance": 50,
   "yaw": -37.02
  }
 ],
 "id": "overlay_0D10202B_1642_8736_41A4_840EB9B3BE83",
 "data": {
  "label": "Arrow 02a Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.06,
   "yaw": -0.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0991F382_1645_89F7_41B4_EEBBC4186D55",
   "pitch": -10.3,
   "hfov": 16.06,
   "distance": 50,
   "yaw": -0.45
  }
 ],
 "id": "overlay_0C357EBE_1642_9B0F_41B1_70936B550AF5",
 "data": {
  "label": "Arrow 02 Right-Up"
 }
},
{
 "id": "album_044E311F_16C2_71C6_419F_139EEE17D266_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.77,
   "yaw": 61.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0993F382_1645_89F7_4197_478E72E1C390",
   "pitch": -12.65,
   "hfov": 16.77,
   "distance": 50,
   "yaw": 61.34
  }
 ],
 "id": "overlay_0F13A0B0_16C2_8713_41AF_FCA69A642FA0",
 "data": {
  "label": "Arrow 02a Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.92,
   "yaw": -52.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09905382_1645_89F7_4194_183155ACE09A",
   "pitch": -10.11,
   "hfov": 16.92,
   "distance": 50,
   "yaw": -52.19
  }
 ],
 "id": "overlay_0F4A06EA_16C2_8B37_418C_31757866F427",
 "data": {
  "label": "Arrow 02c Right"
 }
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_099E2382_1645_89F7_41B6_44F4088E9415",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_1_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_099E8382_1645_89F7_419B_DB211D01F676",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07BEF844_1642_FFBB_4181_CE791F77FA81_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_099EF382_1645_89F7_41B3_64D70E4AC47D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_09974372_1645_8917_41AD_416B41AA8798",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07A1089D_1642_90C5_41B4_6FF035D478AF_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_0997A372_1645_8917_4175_36B806B621AC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_09908382_1645_89F7_419E_06F7A8DD8CF3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_0990E382_1645_89F7_41A0_3A7ACBC90517",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07BFD05C_1642_F04A_4193_8A070B466EFE_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_09914382_1645_89F7_41B0_C7CBEF5B3847",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07A1946C_1642_904B_4191_2D39A8813BAC_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_09941372_1645_8917_41B0_32D8FBE0E1F7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_09932382_1645_89F7_41B0_329A873CCEE1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07A15C2F_1642_B7C5_4195_6A9B3A2021E5_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_09938382_1645_89F7_419E_32794FEB476B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_09922382_1645_89F7_419A_950288A686B6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_1_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_09929382_1645_89F7_41B1_00AAF4223B42",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07BEDBFC_1642_F04A_4181_63BE3709DF58_1_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_0992F382_1645_89F7_41A9_7BBEF8C8EFDF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_07BFDC46_1642_9047_41AD_357A6C23EB20_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_09973372_1645_8917_41A5_215801D94FDA",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_09944372_1645_8917_41A1_3877C8C5860C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07BE2046_1642_9046_41A7_FB013B1C4641_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_0994B372_1645_8917_41B5_6238C65D7359",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_0994E372_1645_8917_41A3_F54A6059E58D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_09955372_1645_8917_4195_D86A8057AECB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_09959372_1645_8907_4155_5C1BF9384F8D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0442A3D8_1642_B04A_418B_74978E4EB753_1_HS_3_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_0995E382_1645_89F7_4195_145F47372DF0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_0991B382_1645_89F7_418F_E7B6FE046B2F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07BE940A_1642_F7CF_41A8_042C74EAB978_1_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "id": "AnimatedImageResource_0991F382_1645_89F7_41B4_EEBBC4186D55",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_0993F382_1645_89F7_4197_478E72E1C390",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_07A1685B_1642_B04E_41A0_00F5EC123CE1_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_09905382_1645_89F7_4194_183155ACE09A",
 "rowCount": 6,
 "frameCount": 24
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "registerKey": function(key, value){  window[key] = value; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player14335"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "gaze",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
