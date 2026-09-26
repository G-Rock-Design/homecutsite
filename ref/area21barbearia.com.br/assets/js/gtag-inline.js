(function(){
var ASSET_MAP = {"https://www.area21barbearia.com.br/": "assets/31d02b9422757521_file.html", "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&display=swap": "assets/cc1e1121733554a9_css2.css", "https://www.area21barbearia.com.br/assets/index-tehGFTJA.css": "assets/1218d3c19e0d0ec7_index-tehGFTJA.css", "https://www.area21barbearia.com.br/assets/index-HhKbVPGZ.js": "assets/f966bbb00d6441a5_index-HhKbVPGZ.js", "https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2": "assets/6438d7b8ea9c7c39_JTUSjIg1_i6t8kCHKm459WlhyyTh89.woff2", "https://fonts.gstatic.com/s/cinzel/v26/8vIJ7ww63mVu7gt79mT7PkRXMw.woff2": "assets/ef95296c778719c3_8vIJ7ww63mVu7gt79mT7PkRXMw.woff2", "https://fonts.gstatic.com/s/playfairdisplay/v40/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_qiTXtHA-X-uE0qEEw.woff2": "assets/ce3932af6f6a6c73_nuFRD-vYSZviVYUb_rj3ij__anPXDT.woff2", "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2": "assets/c940764593d0fe5d_UcC73FwrK3iLTeHuS_nVMrMxCp50Sj.woff2", "https://www.area21barbearia.com.br/assets/equipe-area21-e_1iU5S4.jpeg": "assets/2f5d426ac75aa925_equipe-area21-e_1iU5S4.jpeg", "https://www.area21barbearia.com.br/assets/barbearia-real-new-gYZ9ARLt.jpg": "assets/9e80024f5d837acb_barbearia-real-new-gYZ9ARLt.jpg", "https://www.area21barbearia.com.br/assets/hero-team-ArxAztJc.png": "assets/3c25de5bf080e011_hero-team-ArxAztJc.png", "https://www.area21barbearia.com.br/assets/bebidas-v2-CKBciUPr.webp": "assets/fcb459cbb12e244f_bebidas-v2-CKBciUPr.webp", "https://www.area21barbearia.com.br/assets/aniversariante-v2-CWj43J-Q.webp": "assets/ebd38e619eca63f6_aniversariante-v2-CWj43J-Q.webp", "https://www.area21barbearia.com.br/assets/fidelidade-v2-rd8nsxTJ.webp": "assets/9fc434e9c7dd3238_fidelidade-v2-rd8nsxTJ.webp", "https://www.area21barbearia.com.br/assets/tratamentos-v2-BA2fiqjy.webp": "assets/6ea13ec720d1ec00_tratamentos-v2-BA2fiqjy.webp", "https://www.area21barbearia.com.br/assets/barber-llXWW9d7.jpg": "assets/3f77a72e58342f05_barber-llXWW9d7.jpg", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7346.729756003734!2d-43.1889696!3d-22.9736063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd520f9d7cc77%3A0x304776bcba2703f1!2sBarbearia%20%C3%81rea%2021%20-%20Copacabana!5e0!3m2!1spt-BR!2sbr!4v1781134986963!5m2!1spt-BR!2sbr": "assets/8ffbe6ac7ec22995_embed.html", "https://maps.gstatic.com/maps-api-v3/embed/js/66/6c/intl/pt_br/init_embed.js": "assets/58c55b20b7faacf1_init_embed.js", "https://maps.googleapis.com/maps/api/js?key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&paint_origin=&libraries=geometry,search&v=weekly&loading=async&language=pt_BR&region=br&experimentation=allowed&callback=onApiLoad": "assets/94c5539a900a58c8_js.js", "https://maps.googleapis.com/maps-api-v3/api/js/66/6c/intl/pt_br/search.js": "assets/4c62d602d54d06e1_search.js", "https://maps.googleapis.com/maps-api-v3/api/js/66/6c/intl/pt_br/main.js": "assets/5786c21a6552b8b0_main.js", "https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true": "assets/ca3d163bab055381_gen_204.json", "https://www.area21barbearia.com.br/assets/galeria-4-NveWHd-F.png": "assets/6ec433e1350edf17_galeria-4-NveWHd-F.png", "https://www.area21barbearia.com.br/assets/galeria-5-Cjb-ju1m.png": "assets/531ffda0ccdc7c5c_galeria-5-Cjb-ju1m.png", "https://www.area21barbearia.com.br/assets/galeria-1-Gw7H5GqT.jpeg": "assets/d7be63b4ef0d26ff_galeria-1-Gw7H5GqT.jpeg", "https://www.area21barbearia.com.br/assets/galeria-2-CELeoXmw.png": "assets/5e025984a2012783_galeria-2-CELeoXmw.png", "https://www.area21barbearia.com.br/assets/galeria-3-D1F0zDZd.png": "assets/871100bd282cb75b_galeria-3-D1F0zDZd.png", "https://maps.googleapis.com/maps-api-v3/api/js/66/6c/intl/pt_br/geometry.js": "assets/8e6d29c99c45681f_geometry.js", "https://maps.googleapis.com/maps-api-v3/api/js/66/6c/intl/pt_br/common.js": "assets/2333787ee58f426f_common.js", "https://maps.googleapis.com/maps-api-v3/api/js/66/6c/intl/pt_br/map.js": "assets/a4912e3fa50cbf49_map.js", "https://maps.googleapis.com/maps-api-v3/api/js/66/6c/intl/pt_br/util.js": "assets/7a788bf19e9be26a_util.js", "https://maps.googleapis.com/maps-api-v3/api/js/66/6c/intl/pt_br/controls.js": "assets/066af759f67f2d74_controls.js", "https://maps.googleapis.com/maps-api-v3/api/js/66/6c/intl/pt_br/places_impl.js": "assets/485f031b42a95bac_places_impl.js", "https://maps.googleapis.com/maps-api-v3/api/js/66/6c/intl/pt_br/places.js": "assets/7b54db0370f027af_places.js", "https://maps.googleapis.com/maps-api-v3/api/js/66/6c/intl/pt_br/search_impl.js": "assets/98bd9050e3dffc39_search_impl.js", "https://maps.googleapis.com/maps-api-v3/api/js/66/6c/intl/pt_br/onion.js": "assets/2908217160ac7520_onion.js", "https://fonts.googleapis.com/css?family=Google+Sans+Text:400&text=%E2%86%90%E2%86%92%E2%86%91%E2%86%93&lang=pt": "assets/6bca246fa77b5486_css.css", "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans:400,500,700|Google+Sans+Text:400,500,700&lang=pt": "assets/42e87f55574a40fb_css.css", "https://maps.googleapis.com/maps/api/js/StaticMapService.GetMapImage?1m2&1i3187629&2i4744353&2e1&3u15&4m2&1u598&2u448&5m6&1e0&5spt-BR&6sbr&10b1&12b1&14i47083502&8e1&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=125118": "assets/05cd4695f71f701c_StaticMapService.png", "https://maps.gstatic.com/mapfiles/openhand_8_8.cur": "assets/7342f390b12f636d_openhand_8_8.cur", "https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2": "assets/0a44e0bb6ba5c853_KFO7CnqEu92Fr1ME7kSn66aGLdTylU.woff2", "https://maps.googleapis.com/maps-api-v3/api/js/66/6c/intl/pt_br/log.js": "assets/df82de8b72e41444_log.js", "https://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/GetViewportInfo": "assets/c45906b0bf42fea4_GetViewportInfo", "https://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/InitMapsJwt": "assets/aab2e99330cf08b0_InitMapsJwt", "https://www.google.com/maps/vt?pb=!1m5!1m4!1i15!2i12454!3i18534!4i256!2m3!1e0!2sm!3i796562052!2m3!1e2!2sspotlit!5i1!3m13!2spt-BR!3sBR!5e289!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!1e3!23i47083502!27m15!299174093m14!14m13!1m8!1m2!1y43862958997490807!2y3478879790116045809!2s%2Fg%2F11s0zc7tt7!4m2!1x4065231233!2x3863077600!15sgcid%3Abarber_shop!2b0!3b0!6b0!8b0&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=59198": "assets/56ce79ff150c75d2_vt.webp", "https://www.google.com/maps/vt?pb=!1m5!1m4!1i15!2i12453!3i18533!4i256!2m3!1e0!2sm!3i796562376!2m3!1e2!2sspotlit!5i1!3m13!2spt-BR!3sBR!5e289!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!1e3!23i47083502!27m15!299174093m14!14m13!1m8!1m2!1y43862958997490807!2y3478879790116045809!2s%2Fg%2F11s0zc7tt7!4m2!1x4065231233!2x3863077600!15sgcid%3Abarber_shop!2b0!3b0!6b0!8b0&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=69340": "assets/456bae4bb8783203_vt.webp", "https://www.google.com/maps/vt?pb=!1m5!1m4!1i15!2i12454!3i18533!4i256!2m3!1e0!2sm!3i796562052!2m3!1e2!2sspotlit!5i1!3m13!2spt-BR!3sBR!5e289!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!1e3!23i47083502!27m15!299174093m14!14m13!1m8!1m2!1y43862958997490807!2y3478879790116045809!2s%2Fg%2F11s0zc7tt7!4m2!1x4065231233!2x3863077600!15sgcid%3Abarber_shop!2b0!3b0!6b0!8b0&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=30655": "assets/34fc659a9fff90e4_vt.webp", "https://www.google.com/maps/vt?pb=!1m5!1m4!1i15!2i12453!3i18534!4i256!2m3!1e0!2sm!3i796562376!2m3!1e2!2sspotlit!5i1!3m13!2spt-BR!3sBR!5e289!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!1e3!23i47083502!27m15!299174093m14!14m13!1m8!1m2!1y43862958997490807!2y3478879790116045809!2s%2Fg%2F11s0zc7tt7!4m2!1x4065231233!2x3863077600!15sgcid%3Abarber_shop!2b0!3b0!6b0!8b0&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=97883": "assets/bdf0d076a960029a_vt.webp", "https://www.google.com/maps/vt?pb=!1m5!1m4!1i15!2i12452!3i18532!4i256!2m3!1e0!2sm!3i796562376!2m3!1e2!2sspotlit!5i1!3m13!2spt-BR!3sBR!5e289!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!1e3!23i47083502!27m15!299174093m14!14m13!1m8!1m2!1y43862958997490807!2y3478879790116045809!2s%2Fg%2F11s0zc7tt7!4m2!1x4065231233!2x3863077600!15sgcid%3Abarber_shop!2b0!3b0!6b0!8b0&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=104220": "assets/d639914118a20c55_vt.webp", "https://www.google.com/maps/vt?pb=!1m5!1m4!1i15!2i12452!3i18534!4i256!2m3!1e0!2sm!3i796562376!2m3!1e2!2sspotlit!5i1!3m13!2spt-BR!3sBR!5e289!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!1e3!23i47083502!27m15!299174093m14!14m13!1m8!1m2!1y43862958997490807!2y3478879790116045809!2s%2Fg%2F11s0zc7tt7!4m2!1x4065231233!2x3863077600!15sgcid%3Abarber_shop!2b0!3b0!6b0!8b0&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=30235": "assets/48685969b36a88c9_vt.webp", "https://www.google.com/maps/vt?pb=!1m5!1m4!1i15!2i12451!3i18534!4i256!2m3!1e0!2sm!3i796562376!2m3!1e2!2sspotlit!5i1!3m13!2spt-BR!3sBR!5e289!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!1e3!23i47083502!27m15!299174093m14!14m13!1m8!1m2!1y43862958997490807!2y3478879790116045809!2s%2Fg%2F11s0zc7tt7!4m2!1x4065231233!2x3863077600!15sgcid%3Abarber_shop!2b0!3b0!6b0!8b0&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=93658": "assets/2f1878f85930ea1c_vt.webp", "https://www.google.com/maps/vt?pb=!1m5!1m4!1i15!2i12452!3i18533!4i256!2m3!1e0!2sm!3i796562376!2m3!1e2!2sspotlit!5i1!3m13!2spt-BR!3sBR!5e289!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!1e3!23i47083502!27m15!299174093m14!14m13!1m8!1m2!1y43862958997490807!2y3478879790116045809!2s%2Fg%2F11s0zc7tt7!4m2!1x4065231233!2x3863077600!15sgcid%3Abarber_shop!2b0!3b0!6b0!8b0&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=1692": "assets/a8efbbbc2589025b_vt.webp", "https://www.google.com/maps/vt?pb=!1m5!1m4!1i15!2i12454!3i18532!4i256!2m3!1e0!2sm!3i796562232!2m3!1e2!2sspotlit!5i1!3m13!2spt-BR!3sBR!5e289!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!1e3!23i47083502!27m15!299174093m14!14m13!1m8!1m2!1y43862958997490807!2y3478879790116045809!2s%2Fg%2F11s0zc7tt7!4m2!1x4065231233!2x3863077600!15sgcid%3Abarber_shop!2b0!3b0!6b0!8b0&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=35475": "assets/7ab1a748ff47194d_vt.webp", "https://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/GetPlaceWidgetMetadata": "assets/85542d8891b33bfb_GetPlaceWidgetMetadata", "https://www.google.com/maps/vt?pb=!1m5!1m4!1i15!2i12451!3i18533!4i256!2m3!1e0!2sm!3i796562376!2m3!1e2!2sspotlit!5i1!3m13!2spt-BR!3sBR!5e289!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!1e3!23i47083502!27m15!299174093m14!14m13!1m8!1m2!1y43862958997490807!2y3478879790116045809!2s%2Fg%2F11s0zc7tt7!4m2!1x4065231233!2x3863077600!15sgcid%3Abarber_shop!2b0!3b0!6b0!8b0&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=65115": "assets/39536a650cf26b82_vt.webp", "https://www.google.com/maps/vt?pb=!1m5!1m4!1i15!2i12453!3i18532!4i256!2m3!1e0!2sm!3i796562376!2m3!1e2!2sspotlit!5i1!3m13!2spt-BR!3sBR!5e289!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!1e3!23i47083502!27m15!299174093m14!14m13!1m8!1m2!1y43862958997490807!2y3478879790116045809!2s%2Fg%2F11s0zc7tt7!4m2!1x4065231233!2x3863077600!15sgcid%3Abarber_shop!2b0!3b0!6b0!8b0&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=40797": "assets/fb0c8ddb7912a560_vt.webp", "https://www.google.com/maps/vt?pb=!1m5!1m4!1i15!2i12451!3i18532!4i256!2m3!1e0!2sm!3i796562376!2m3!1e2!2sspotlit!5i1!3m13!2spt-BR!3sBR!5e289!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!1e3!23i47083502!27m15!299174093m14!14m13!1m8!1m2!1y43862958997490807!2y3478879790116045809!2s%2Fg%2F11s0zc7tt7!4m2!1x4065231233!2x3863077600!15sgcid%3Abarber_shop!2b0!3b0!6b0!8b0&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=36572": "assets/13ea362a1e7b98e4_vt.webp", "https://www.google.com/maps/vt?pb=!1m4!1m3!1i15!2i12451!3i18532!1m4!1m3!1i15!2i12451!3i18533!1m4!1m3!1i15!2i12451!3i18534!1m4!1m3!1i15!2i12452!3i18532!1m4!1m3!1i15!2i12452!3i18533!1m4!1m3!1i15!2i12453!3i18532!1m4!1m3!1i15!2i12453!3i18533!1m4!1m3!1i15!2i12452!3i18534!1m4!1m3!1i15!2i12453!3i18534!1m4!1m3!1i15!2i12454!3i18532!1m4!1m3!1i15!2i12454!3i18533!1m4!1m3!1i15!2i12454!3i18534!2m3!1e0!2sm!3i796562430!2m3!1e2!2sspotlit!5i1!3m13!2spt-BR!3sBR!5e289!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!4e3!12m2!5b1!6b1!27m15!299174093m14!14m13!1m8!1m2!1y43862958997490807!2y3478879790116045809!2s%2Fg%2F11s0zc7tt7!4m2!1x4065231233!2x3863077600!15sgcid%3Abarber_shop!2b0!3b0!6b0!8b0&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=84637": "assets/ad18c8402f663c72_vt.json", "https://places.googleapis.com/$rpc/google.maps.places.v1.Places/GetPlace": "assets/1ccf03ab8453f0ca_GetPlace", "https://fonts.gstatic.com/s/googlesanstext/v29/5aUp9-KzpRiLCAt4Unrc-xIKmCU5oLlVnmhjtjm4DZw.woff2": "assets/761b5ddf4a09db0d_5aUp9-KzpRiLCAt4Unrc-xIKmCU5oL.woff2", "https://fonts.gstatic.com/s/googlesanstext/v29/5aUu9-KzpRiLCAt4Unrc-xIKmCU5qEp2i0VBuxM.woff2": "assets/ca561a9c89b19f76_5aUu9-KzpRiLCAt4Unrc-xIKmCU5qE.woff2", "https://www.google.com/maps/vt?pb=!1m5!1m4!1i11!2i778!3i1158!4i256!2m1!1e1!3m12!2spt-BR!3sBR!5e289!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy5lOmx8cC52Om9mZg!4e0!5m1!1e3!23i47083502&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=129651": "assets/e5a49a1ae17bda58_vt.jpg", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20Anderson.": "assets/8be163219f7f7acb_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.": "assets/78900e4b73649483_5521970976972.html", "https://instagram.com/area21barbearia": "assets/f13b094f8f061bcf_area21barbearia.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Acabamento": "assets/652a58df9825039b_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Sobrancelha": "assets/fdb273e324321062_5521970976972.html", "https://wa.me/5521970976972?text=Ol\u00e1! Gostaria de agendar um hor\u00e1rio.": "assets/92038bc615297b59_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Corte%20masculino": "assets/d0944b7298baa830_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20Gean%20Magalh%C3%A3es.": "assets/eeb319f0c0bcf336_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Tonaliza%C3%A7%C3%A3o": "assets/b85a3e2d6b982375_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20Alex.": "assets/b37c3b96d11fb234_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Barba%20terapia": "assets/8104b7731385d0db_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Platinado": "assets/16434dc384a7faf1_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Alinhamento": "assets/303ee43f80de63e1_5521970976972.html", "https://www.area21barbearia.com.br/politica-de-privacidade": "assets/31d02b9422757521_file.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20Raphael%20Ferraz.": "assets/0f8066682a9bd8cc_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20Matheus%20Caetano.": "assets/d41f139e58c5f323_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Barba": "assets/6622cd8a1af3cad2_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Corte%20%2B%20Barba": "assets/b3bfdb40775b8609_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20Lucas%20Agostinho.": "assets/dd68ef3bc5590516_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Camuflagem%20de%20cabelo": "assets/09bbe3a0701d2028_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20Gomes.": "assets/3bf609f8fe8c8208_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20com%20Italo.": "assets/dd1332cf1996e415_5521970976972.html", "https://wa.me/5521970976972?text=Ol\u00e1! Gostaria de informa\u00e7\u00f5es sobre tratamentos e colora\u00e7\u00e3o.": "assets/002ac469c563bee9_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Hidrata%C3%A7%C3%A3o": "assets/80ceaa9bbb2bdfcf_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Ritual%20Scalp": "assets/6c9ec92fc9eb378a_5521970976972.html", "https://wa.me/5585996518341?text=Ol%C3%A1%20Alex!%20Vi%20o%20site%20da%20%C3%81rea%2021%20e%20gostaria%20de%20conversar%20sobre%20desenvolvimento.": "assets/d73fbd767770db3e_5585996518341.html", "https://www.google.com/maps/search/Av.+Nossa+Senhora+de+Copacabana+836+Copacabana+Rio+de+Janeiro": "assets/586d476a7cab3fb2_Av.html", "https://www.area21barbearia.com.br/politica-de-cookies": "assets/31d02b9422757521_file.html", "https://wa.me/5521970976972": "assets/46c427dd3600bf5e_5521970976972.html", "https://wa.me/5521970976972?text=Ol\u00e1! Gostaria de agendar um corte.": "assets/dba21c31fc24d99a_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Depila%C3%A7%C3%A3o%20nariz%2Forelha": "assets/ff896ed8fd3210db_5521970976972.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Camuflagem%20de%20barba": "assets/18fac7f646c79d83_5521970976972.html", "https://www.area21barbearia.com.br/termos-de-uso": "assets/31d02b9422757521_file.html", "https://wa.me/5521970976972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%3A%20Reflexo": "assets/65c4ca2415ccfeba_5521970976972.html"};
// Pre-populate path+query keys: when opened via file://, JS
// resolves '/foo.js' against file://… so we lose the original
// origin. Indexing by pathname+search lets the lookup succeed.
var _add = {};
for (var _k in ASSET_MAP) {
  try { var _u = new URL(_k); _add[_u.pathname + _u.search] = ASSET_MAP[_k]; }
  catch(e){}
}
for (var _k in _add) if (!ASSET_MAP[_k]) ASSET_MAP[_k] = _add[_k];
function resolveLocal(u){
  if (!u || typeof u !== 'string') return null;
  if (u.indexOf('data:') === 0 || u.indexOf('blob:') === 0) return null;
  if (ASSET_MAP[u]) return ASSET_MAP[u];
  try {
    var url = new URL(u, location.href);
    var pq = url.pathname + url.search;
    if (ASSET_MAP[pq]) return ASSET_MAP[pq];
    // The snapshot may be opened from a subdirectory, while
    // ASSET_MAP paths are origin-rooted. Retry with the
    // document's own directory prefix stripped off.
    var dir = location.pathname.replace(/[^/]*$/, '');
    if (dir.length > 1 && pq.indexOf(dir) === 0) {
      var rel = pq.slice(dir.length - 1);
      if (ASSET_MAP[rel]) return ASSET_MAP[rel];
    }
    // Next.js image optimization wrapper — peel the inner CDN URL
    if (/_next\/image$/.test(url.pathname)) {
      var t = url.searchParams.get('url');
      if (t) {
        var dec = decodeURIComponent(t);
        if (ASSET_MAP[dec]) return ASSET_MAP[dec];
        var bare = dec.split('?')[0];
        for (var k in ASSET_MAP) {
          if (k.split('?')[0] === bare) return ASSET_MAP[k];
        }
      }
    }
  } catch(e){}
  return null;
}
function rewriteSrcset(s){
  if (!s || typeof s !== 'string') return s;
  return s.split(',').map(function(it){
    var p = it.trim().split(/\s+/);
    var loc = resolveLocal(p[0]);
    if (loc) p[0] = loc;
    return p.join(' ');
  }).join(', ');
}
// Patch property setters: el.src = '...' / el.href = '...'
// IMPORTANT: skip rewrite when the element has crossOrigin set.
// WebGL textures (UnicornStudio, Three.js, etc.) are loaded via
//   img.crossOrigin = 'anonymous'; img.src = 'https://cdn/...'
// and consumed via gl.texImage2D. file:// resources have no CORS
// headers, so rewriting to local makes WebGL reject the texture
// (Access blocked by CORS policy → black/missing 3D scene).
// Better to keep the original URL: works online, fails offline,
// matches non-patched behaviour.
function patchSetter(klass, prop, transform){
  if (!klass || !klass.prototype) return;
  var desc = Object.getOwnPropertyDescriptor(klass.prototype, prop);
  if (!desc || !desc.set) return;
  Object.defineProperty(klass.prototype, prop, {
    configurable: true,
    get: desc.get,
    set: function(v){
      try {
        if (transform === 'srcset') {
          v = rewriteSrcset(v);
        } else {
          // Captured runtime resource (UnicornStudio texture,
          // etc.) → serve as a data: URI. data: never CORS-
          // taints a WebGL canvas, unlike a file:// texture,
          // so gl.texImage2D still accepts it offline.
          var du = window.__offlineDataUri && window.__offlineDataUri(v);
          if (du) { v = du; }
          else if (!this.crossOrigin) {
            var loc = resolveLocal(v); if (loc) v = loc;
          }
        }
      } catch(e){}
      desc.set.call(this, v);
    }
  });
}
patchSetter(window.HTMLScriptElement, 'src');
patchSetter(window.HTMLLinkElement, 'href');
patchSetter(window.HTMLImageElement, 'src');
patchSetter(window.HTMLImageElement, 'srcset', 'srcset');
patchSetter(window.HTMLSourceElement, 'src');
patchSetter(window.HTMLSourceElement, 'srcset', 'srcset');
patchSetter(window.HTMLMediaElement, 'src');
patchSetter(window.HTMLIFrameElement, 'src');
// Patch setAttribute too — some libs use it instead of property set
var _setAttr = Element.prototype.setAttribute;
Element.prototype.setAttribute = function(name, value){
  try {
    if (typeof value === 'string') {
      if (name === 'src' || name === 'href') {
        var du = window.__offlineDataUri && window.__offlineDataUri(value);
        if (du) { value = du; }
        else if (!this.crossOrigin) {
          var loc = resolveLocal(value); if (loc) value = loc;
        }
      } else if (name === 'srcset' && !this.crossOrigin) {
        value = rewriteSrcset(value);
      }
    }
  } catch(e){}
  return _setAttr.call(this, name, value);
};
// Expose for the late-init script in body
window.__resolveLocal = resolveLocal;
window.__rewriteSrcset = rewriteSrcset;
})();