if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const u=e=>s(e,a),f={module:{uri:a},exports:r,require:u};i[a]=Promise.all(d.map((e=>f[e]||u(e)))).then((e=>(c(...e),r)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-splash-landscape-dark-2048x1536.png",revision:"855e61ab1a1860ecf98921adb4225cf1"},{url:"apple-splash-landscape-light-2048x1536.png",revision:"29f2256c3268375d5ea046e3b0075c17"},{url:"apple-splash-portrait-dark-1536x2048.png",revision:"0a388408a0252f6ea7b1da5a3db383d2"},{url:"apple-splash-portrait-light-1536x2048.png",revision:"0a29cc64d410d864aaaf9b189de76838"},{url:"apple-touch-icon-180x180.png",revision:"7ef603cb68c3a13540e294834e5ea1f5"},{url:"assets/empty-gs4H6fV6.png",revision:null},{url:"assets/index-BaNex0wr.css",revision:null},{url:"assets/index-C7hGMH3C.js",revision:null},{url:"assets/some-BVGN2feB.png",revision:null},{url:"assets/under-construction-DPMz1vOd.png",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"favicon.ico",revision:"aaa2405dd96209a195e58d6790112166"},{url:"icon-512.png",revision:"9cb299b9adeb122f0815f0c7bd227815"},{url:"index.html",revision:"f5593bf209f474db861153bb537d2de0"},{url:"manifest.webmanifest",revision:"57d44a4c4995a3da7dacfc2113947e1d"},{url:"maskable-icon-512x512.png",revision:"4bb6d6c99b7087054886829d334c8e63"},{url:"pwa-192x192.png",revision:"9c84bb0532a57764fe01d2988966ebf1"},{url:"pwa-512x512.png",revision:"4339cdfe4da94b82a98d481d65d9d04f"},{url:"pwa-64x64.png",revision:"c18a46fedc9fc9e4f3f016e06c76791b"},{url:"sounds/dicehit/dicehit_coin1.mp3",revision:"8296daf3730fda0128f472a688b20e09"},{url:"sounds/dicehit/dicehit_coin2.mp3",revision:"0c7ce58623d70f22e0f80100978ca4c5"},{url:"sounds/dicehit/dicehit_coin3.mp3",revision:"f312e7751e670110edd45caaae5fdea7"},{url:"sounds/dicehit/dicehit_coin4.mp3",revision:"8ad821135f32464400b0a31f532205d4"},{url:"sounds/dicehit/dicehit_coin5.mp3",revision:"9e80d5722339b3af02bb73ed3a1a3bde"},{url:"sounds/dicehit/dicehit_coin6.mp3",revision:"41350c783af5b475e2f4a35bbfcc7b06"},{url:"sounds/dicehit/dicehit_metal1.mp3",revision:"56bac0b7994569c04dd8fbe4f4a8ec03"},{url:"sounds/dicehit/dicehit_metal10.mp3",revision:"52ad427725f0d0890f87ca89a2f2af61"},{url:"sounds/dicehit/dicehit_metal11.mp3",revision:"3a7b2ae0969ce0cb983a293805c6aa40"},{url:"sounds/dicehit/dicehit_metal12.mp3",revision:"29540dc1728174c6296ae5da561b0d31"},{url:"sounds/dicehit/dicehit_metal2.mp3",revision:"ca2d38471643887ee2d595e7e978c65f"},{url:"sounds/dicehit/dicehit_metal3.mp3",revision:"f51c9ac6b92215c0adf80a8f4a108a2e"},{url:"sounds/dicehit/dicehit_metal4.mp3",revision:"6b2f6c704221cc12444b68b4f7591bf8"},{url:"sounds/dicehit/dicehit_metal5.mp3",revision:"4d56662863bf6792c8c4749c533a6685"},{url:"sounds/dicehit/dicehit_metal6.mp3",revision:"10be273aac1bb9bf3d61bbcca5331abe"},{url:"sounds/dicehit/dicehit_metal7.mp3",revision:"6b629d38d83f3102ac2cf7a10621997a"},{url:"sounds/dicehit/dicehit_metal8.mp3",revision:"077ad82c6d36372e1f5f4e079d0fd50d"},{url:"sounds/dicehit/dicehit_metal9.mp3",revision:"994d84a57aeff9c13a27d0b1a9174b0e"},{url:"sounds/dicehit/dicehit_plastic1.mp3",revision:"d36e13ea8a8d393eaa4556c4d97312ff"},{url:"sounds/dicehit/dicehit_plastic10.mp3",revision:"d39127c33f5c6cb5e83dd3d37388bda8"},{url:"sounds/dicehit/dicehit_plastic11.mp3",revision:"dee08a9be712ddcede093efdf4c244c4"},{url:"sounds/dicehit/dicehit_plastic12.mp3",revision:"3a669954cd9ce830250c8c392e161278"},{url:"sounds/dicehit/dicehit_plastic13.mp3",revision:"8f495321f1f92e45f58c6285dac559d5"},{url:"sounds/dicehit/dicehit_plastic14.mp3",revision:"9e69e159354da8ffabf770aafa1ec315"},{url:"sounds/dicehit/dicehit_plastic15.mp3",revision:"6883cca50e961c78798fcf297bb0476e"},{url:"sounds/dicehit/dicehit_plastic2.mp3",revision:"0b5cf5c8c420a71194e9d8d4e6bf6f1e"},{url:"sounds/dicehit/dicehit_plastic3.mp3",revision:"db808cd5a9d56fdd9774be9e3d3034ee"},{url:"sounds/dicehit/dicehit_plastic4.mp3",revision:"ffc38233a03400eb4600e8274db21125"},{url:"sounds/dicehit/dicehit_plastic5.mp3",revision:"28d35ede14d710f9e1fba39033c83b21"},{url:"sounds/dicehit/dicehit_plastic6.mp3",revision:"237db2e7b6129a9b50932be8d696d078"},{url:"sounds/dicehit/dicehit_plastic7.mp3",revision:"a3db4f0ee44a2e66adfe87857400a31c"},{url:"sounds/dicehit/dicehit_plastic8.mp3",revision:"0f62369c895fafadc23cbe5ce188b4a4"},{url:"sounds/dicehit/dicehit_plastic9.mp3",revision:"e80279c73519bf3da4289abae7d5ccc4"},{url:"sounds/dicehit/dicehit_wood1.mp3",revision:"33481740fa22509b68591689eab12044"},{url:"sounds/dicehit/dicehit_wood10.mp3",revision:"0aed06f94f9927bd1620158ad0a6d8bb"},{url:"sounds/dicehit/dicehit_wood11.mp3",revision:"0544758b2d2505a6fdb9efea3c9fbbf0"},{url:"sounds/dicehit/dicehit_wood12.mp3",revision:"d1979f92176dec3652ceb61c59989f2a"},{url:"sounds/dicehit/dicehit_wood2.mp3",revision:"26239d5e69f1d91973d0d72e59809c07"},{url:"sounds/dicehit/dicehit_wood3.mp3",revision:"8a901681d75c8017ce25271843205342"},{url:"sounds/dicehit/dicehit_wood4.mp3",revision:"653b4f31404badb9daec125e2fa8c308"},{url:"sounds/dicehit/dicehit_wood5.mp3",revision:"41c39c9b82b8af594e963109bbd59616"},{url:"sounds/dicehit/dicehit_wood6.mp3",revision:"243f4a674180bbda4215db879de6d972"},{url:"sounds/dicehit/dicehit_wood7.mp3",revision:"dc77ec2c575eee76b9c68775c9cceed5"},{url:"sounds/dicehit/dicehit_wood8.mp3",revision:"b9338401d0069c38f7ef7d468d2447f7"},{url:"sounds/dicehit/dicehit_wood9.mp3",revision:"be50c59f6877699ce8289ce4869c92e5"},{url:"sounds/surfaces/surface_felt1.mp3",revision:"9ff7181ca284f4bd590e9cfd8d0fbd06"},{url:"sounds/surfaces/surface_felt2.mp3",revision:"ec12945c6954e7ebeccb3fe76efdb0da"},{url:"sounds/surfaces/surface_felt3.mp3",revision:"463962e0a4c23ea594fd3770fb3f75a2"},{url:"sounds/surfaces/surface_felt4.mp3",revision:"507d6c5692b2ebf93f2713f945437a3b"},{url:"sounds/surfaces/surface_felt5.mp3",revision:"3c7283c9baeec9c4084bb64d7f5869f8"},{url:"sounds/surfaces/surface_felt6.mp3",revision:"e6cdc90f44810d36810783c0094da710"},{url:"sounds/surfaces/surface_felt7.mp3",revision:"df8a254419ca1e667bc0a6844941f51b"},{url:"sounds/surfaces/surface_metal1.mp3",revision:"02a471a5f225b8d521e64251bfe91d38"},{url:"sounds/surfaces/surface_metal2.mp3",revision:"6a315e1bd1d222d4f606965c79d27c88"},{url:"sounds/surfaces/surface_metal3.mp3",revision:"fe63299052e7444e4b5caacb0bd27df6"},{url:"sounds/surfaces/surface_metal4.mp3",revision:"e027701c4de1db46ccecfa92554e2e97"},{url:"sounds/surfaces/surface_metal5.mp3",revision:"6a54a66142e45fcba4e16d6a77e44a93"},{url:"sounds/surfaces/surface_metal6.mp3",revision:"db41444834d6048cd3fd209360b72396"},{url:"sounds/surfaces/surface_metal7.mp3",revision:"ae63a34f8afc4091616b5875c3e131f1"},{url:"sounds/surfaces/surface_metal8.mp3",revision:"5d8b08a8983380e9f543320f4cb25755"},{url:"sounds/surfaces/surface_metal9.mp3",revision:"993666bc1ad12022b056e872bedb0915"},{url:"sounds/surfaces/surface_wood_table1.mp3",revision:"ccd8a675b83b1b58bcee18a01d3cb35a"},{url:"sounds/surfaces/surface_wood_table2.mp3",revision:"8b07fc1f3dfcab9d2c78ae8d359dfd77"},{url:"sounds/surfaces/surface_wood_table3.mp3",revision:"35d5d5539ad65bf4045cb52f0a202ec9"},{url:"sounds/surfaces/surface_wood_table4.mp3",revision:"108b5444dce4e002688f5482674f5e14"},{url:"sounds/surfaces/surface_wood_table5.mp3",revision:"cfc58e633f1f69b72e5375e5baeb51d0"},{url:"sounds/surfaces/surface_wood_table6.mp3",revision:"ca6863a8a1cfcb79598024595079de0f"},{url:"sounds/surfaces/surface_wood_table7.mp3",revision:"90215ad390839b582e082e35ea2dd257"},{url:"sounds/surfaces/surface_wood_tray1.mp3",revision:"b4098b696850ab5a8a6836048a16e24a"},{url:"sounds/surfaces/surface_wood_tray2.mp3",revision:"8ba17cd0a5f805bbd5a63e1f2dce1e05"},{url:"sounds/surfaces/surface_wood_tray3.mp3",revision:"2699cf889d5ca32a61bdff75a95282dd"},{url:"sounds/surfaces/surface_wood_tray4.mp3",revision:"4436c5f6ad6099b918590ab6f45c8c55"},{url:"sounds/surfaces/surface_wood_tray5.mp3",revision:"b1ddd973e211ce42a22316006bd2f77b"},{url:"sounds/surfaces/surface_wood_tray6.mp3",revision:"861e1c9a40bec50e90030d14c6e6821f"},{url:"sounds/surfaces/surface_wood_tray7.mp3",revision:"c90eaefbf7af37ee25d94e583a51b111"},{url:"textures/astral.webp",revision:"59cbe69b2b54871d2ea76ad1fad5f2fa"},{url:"textures/bronze01.webp",revision:"78d591cb5a130ebdb2cbb41eeca51f58"},{url:"textures/bronze02.webp",revision:"04f3bee52674bb02e045d68aeb5a9bbd"},{url:"textures/bronze03.webp",revision:"9789a55f50b68f350f7c5a705ee589ba"},{url:"textures/bronze03a.webp",revision:"73288b732382667b107627e09650004c"},{url:"textures/bronze03b.webp",revision:"1281572112c1ae75c1053e1fff6382be"},{url:"textures/bronze04.webp",revision:"28230c787600c889f06b8fd0a472b7dd"},{url:"textures/cheetah.webp",revision:"a9245559a8486a284a0c6538e584ed8e"},{url:"textures/cloudy.alt.webp",revision:"8b5efb5cab2456df204d0583d060281e"},{url:"textures/cloudy.webp",revision:"4e9e12fda37b08caf094f4323b9905c1"},{url:"textures/dragon-bump.webp",revision:"73c66d5f301895e486cfc0c5d7eeb6ef"},{url:"textures/dragon.webp",revision:"54d6d82d9633e4d93a60be3751337ca7"},{url:"textures/feather-bump.webp",revision:"648c30bd9c1ffd1ab9bf0d4efcb5dc6e"},{url:"textures/feather.webp",revision:"ddfdf132d63d4d91e9e35db7c9573cc7"},{url:"textures/fire.webp",revision:"c856fe7c78ee63f8603e0d57e91e5f7f"},{url:"textures/glitter-alpha.webp",revision:"77e32d2979c15c835e2f602c19e3a43e"},{url:"textures/glitter-bump.webp",revision:"7f1030f697ef2892162608e90cb1357f"},{url:"textures/glitter.webp",revision:"f90298690b11ee585e98ba549958386c"},{url:"textures/ice.webp",revision:"d608aba40c43c7d308d1a8accc2990b8"},{url:"textures/leopard.webp",revision:"b672a18e3b36a7ba9164430a4ce2981a"},{url:"textures/lizard-bump.webp",revision:"471bde11a2ac5c548cc61f4ccdcbd0a2"},{url:"textures/lizard.webp",revision:"8cd2a5d9016317c8484af019e35ee5cd"},{url:"textures/marble.webp",revision:"b43fa84c782166b7531106401844edda"},{url:"textures/metal-bump.webp",revision:"7cf922de116762e949210062c9314ca9"},{url:"textures/metal.webp",revision:"2457d1b839dc5f4f3a3f828397381ce6"},{url:"textures/noise-thin-film.webp",revision:"b8961a089f11516f5ee2c059052aa22e"},{url:"textures/noise.webp",revision:"647583672b7548c58d2b35fecf94c172"},{url:"textures/paper-bump.webp",revision:"f76aeb7e52154613c3dc7f5162f4953c"},{url:"textures/paper.webp",revision:"a72678ada6f14eaf74237d5747c0a653"},{url:"textures/skulls.webp",revision:"9e38c0bd2a833af8549a2d5ae9b98b1f"},{url:"textures/speckles.webp",revision:"299cfec6061edc0acbf53172c9b07ad9"},{url:"textures/stainedglass-bump.webp",revision:"e7cb591b9552b25c6ec6029e8cecac4c"},{url:"textures/stainedglass.webp",revision:"3f38fc07a88450577e2ed1c8599bf295"},{url:"textures/stars.webp",revision:"8003a1d5e9396229a7629dd45331e80e"},{url:"textures/stone.webp",revision:"f08404ddc298c8a72d2dadeb6608b8fa"},{url:"textures/tiger.webp",revision:"b5706c4e74296e5cdc3808ddf0aee2f4"},{url:"textures/water.webp",revision:"634ef539dfe447f5141a5b3f140ceb37"},{url:"textures/wood.webp",revision:"1418d426f6b5eca07365d2ebc2cfc6e3"},{url:"pwa-64x64.png",revision:"c18a46fedc9fc9e4f3f016e06c76791b"},{url:"apple-splash-landscape-dark-2048x1536.png",revision:"855e61ab1a1860ecf98921adb4225cf1"},{url:"apple-splash-landscape-light-2048x1536.png",revision:"29f2256c3268375d5ea046e3b0075c17"},{url:"apple-splash-portrait-dark-1536x2048.png",revision:"0a388408a0252f6ea7b1da5a3db383d2"},{url:"apple-splash-portrait-light-1536x2048.png",revision:"0a29cc64d410d864aaaf9b189de76838"},{url:"apple-touch-icon-180x180.png",revision:"7ef603cb68c3a13540e294834e5ea1f5"},{url:"favicon.ico",revision:"aaa2405dd96209a195e58d6790112166"},{url:"icon-512.png",revision:"9cb299b9adeb122f0815f0c7bd227815"},{url:"maskable-icon-512x512.png",revision:"4bb6d6c99b7087054886829d334c8e63"},{url:"pwa-192x192.png",revision:"9c84bb0532a57764fe01d2988966ebf1"},{url:"pwa-512x512.png",revision:"4339cdfe4da94b82a98d481d65d9d04f"},{url:"textures/astral.webp",revision:"59cbe69b2b54871d2ea76ad1fad5f2fa"},{url:"textures/bronze01.webp",revision:"78d591cb5a130ebdb2cbb41eeca51f58"},{url:"textures/bronze02.webp",revision:"04f3bee52674bb02e045d68aeb5a9bbd"},{url:"textures/bronze03.webp",revision:"9789a55f50b68f350f7c5a705ee589ba"},{url:"textures/bronze03a.webp",revision:"73288b732382667b107627e09650004c"},{url:"textures/bronze03b.webp",revision:"1281572112c1ae75c1053e1fff6382be"},{url:"textures/bronze04.webp",revision:"28230c787600c889f06b8fd0a472b7dd"},{url:"textures/cheetah.webp",revision:"a9245559a8486a284a0c6538e584ed8e"},{url:"textures/cloudy.alt.webp",revision:"8b5efb5cab2456df204d0583d060281e"},{url:"textures/cloudy.webp",revision:"4e9e12fda37b08caf094f4323b9905c1"},{url:"textures/dragon-bump.webp",revision:"73c66d5f301895e486cfc0c5d7eeb6ef"},{url:"textures/dragon.webp",revision:"54d6d82d9633e4d93a60be3751337ca7"},{url:"textures/feather-bump.webp",revision:"648c30bd9c1ffd1ab9bf0d4efcb5dc6e"},{url:"textures/feather.webp",revision:"ddfdf132d63d4d91e9e35db7c9573cc7"},{url:"textures/fire.webp",revision:"c856fe7c78ee63f8603e0d57e91e5f7f"},{url:"textures/glitter-alpha.webp",revision:"77e32d2979c15c835e2f602c19e3a43e"},{url:"textures/glitter-bump.webp",revision:"7f1030f697ef2892162608e90cb1357f"},{url:"textures/glitter.webp",revision:"f90298690b11ee585e98ba549958386c"},{url:"textures/ice.webp",revision:"d608aba40c43c7d308d1a8accc2990b8"},{url:"textures/leopard.webp",revision:"b672a18e3b36a7ba9164430a4ce2981a"},{url:"textures/lizard-bump.webp",revision:"471bde11a2ac5c548cc61f4ccdcbd0a2"},{url:"textures/lizard.webp",revision:"8cd2a5d9016317c8484af019e35ee5cd"},{url:"textures/marble.webp",revision:"b43fa84c782166b7531106401844edda"},{url:"textures/metal-bump.webp",revision:"7cf922de116762e949210062c9314ca9"},{url:"textures/metal.webp",revision:"2457d1b839dc5f4f3a3f828397381ce6"},{url:"textures/noise-thin-film.webp",revision:"b8961a089f11516f5ee2c059052aa22e"},{url:"textures/noise.webp",revision:"647583672b7548c58d2b35fecf94c172"},{url:"textures/paper-bump.webp",revision:"f76aeb7e52154613c3dc7f5162f4953c"},{url:"textures/paper.webp",revision:"a72678ada6f14eaf74237d5747c0a653"},{url:"textures/skulls.webp",revision:"9e38c0bd2a833af8549a2d5ae9b98b1f"},{url:"textures/speckles.webp",revision:"299cfec6061edc0acbf53172c9b07ad9"},{url:"textures/stainedglass-bump.webp",revision:"e7cb591b9552b25c6ec6029e8cecac4c"},{url:"textures/stainedglass.webp",revision:"3f38fc07a88450577e2ed1c8599bf295"},{url:"textures/stars.webp",revision:"8003a1d5e9396229a7629dd45331e80e"},{url:"textures/stone.webp",revision:"f08404ddc298c8a72d2dadeb6608b8fa"},{url:"textures/tiger.webp",revision:"b5706c4e74296e5cdc3808ddf0aee2f4"},{url:"textures/water.webp",revision:"634ef539dfe447f5141a5b3f140ceb37"},{url:"textures/wood.webp",revision:"1418d426f6b5eca07365d2ebc2cfc6e3"},{url:"sounds/surfaces/surface_felt1.mp3",revision:"9ff7181ca284f4bd590e9cfd8d0fbd06"},{url:"sounds/surfaces/surface_felt2.mp3",revision:"ec12945c6954e7ebeccb3fe76efdb0da"},{url:"sounds/surfaces/surface_felt3.mp3",revision:"463962e0a4c23ea594fd3770fb3f75a2"},{url:"sounds/surfaces/surface_felt4.mp3",revision:"507d6c5692b2ebf93f2713f945437a3b"},{url:"sounds/surfaces/surface_felt5.mp3",revision:"3c7283c9baeec9c4084bb64d7f5869f8"},{url:"sounds/surfaces/surface_felt6.mp3",revision:"e6cdc90f44810d36810783c0094da710"},{url:"sounds/surfaces/surface_felt7.mp3",revision:"df8a254419ca1e667bc0a6844941f51b"},{url:"sounds/surfaces/surface_metal1.mp3",revision:"02a471a5f225b8d521e64251bfe91d38"},{url:"sounds/surfaces/surface_metal2.mp3",revision:"6a315e1bd1d222d4f606965c79d27c88"},{url:"sounds/surfaces/surface_metal3.mp3",revision:"fe63299052e7444e4b5caacb0bd27df6"},{url:"sounds/surfaces/surface_metal4.mp3",revision:"e027701c4de1db46ccecfa92554e2e97"},{url:"sounds/surfaces/surface_metal5.mp3",revision:"6a54a66142e45fcba4e16d6a77e44a93"},{url:"sounds/surfaces/surface_metal6.mp3",revision:"db41444834d6048cd3fd209360b72396"},{url:"sounds/surfaces/surface_metal7.mp3",revision:"ae63a34f8afc4091616b5875c3e131f1"},{url:"sounds/surfaces/surface_metal8.mp3",revision:"5d8b08a8983380e9f543320f4cb25755"},{url:"sounds/surfaces/surface_metal9.mp3",revision:"993666bc1ad12022b056e872bedb0915"},{url:"sounds/surfaces/surface_wood_table1.mp3",revision:"ccd8a675b83b1b58bcee18a01d3cb35a"},{url:"sounds/surfaces/surface_wood_table2.mp3",revision:"8b07fc1f3dfcab9d2c78ae8d359dfd77"},{url:"sounds/surfaces/surface_wood_table3.mp3",revision:"35d5d5539ad65bf4045cb52f0a202ec9"},{url:"sounds/surfaces/surface_wood_table4.mp3",revision:"108b5444dce4e002688f5482674f5e14"},{url:"sounds/surfaces/surface_wood_table5.mp3",revision:"cfc58e633f1f69b72e5375e5baeb51d0"},{url:"sounds/surfaces/surface_wood_table6.mp3",revision:"ca6863a8a1cfcb79598024595079de0f"},{url:"sounds/surfaces/surface_wood_table7.mp3",revision:"90215ad390839b582e082e35ea2dd257"},{url:"sounds/surfaces/surface_wood_tray1.mp3",revision:"b4098b696850ab5a8a6836048a16e24a"},{url:"sounds/surfaces/surface_wood_tray2.mp3",revision:"8ba17cd0a5f805bbd5a63e1f2dce1e05"},{url:"sounds/surfaces/surface_wood_tray3.mp3",revision:"2699cf889d5ca32a61bdff75a95282dd"},{url:"sounds/surfaces/surface_wood_tray4.mp3",revision:"4436c5f6ad6099b918590ab6f45c8c55"},{url:"sounds/surfaces/surface_wood_tray5.mp3",revision:"b1ddd973e211ce42a22316006bd2f77b"},{url:"sounds/surfaces/surface_wood_tray6.mp3",revision:"861e1c9a40bec50e90030d14c6e6821f"},{url:"sounds/surfaces/surface_wood_tray7.mp3",revision:"c90eaefbf7af37ee25d94e583a51b111"},{url:"sounds/dicehit/dicehit_coin1.mp3",revision:"8296daf3730fda0128f472a688b20e09"},{url:"sounds/dicehit/dicehit_coin2.mp3",revision:"0c7ce58623d70f22e0f80100978ca4c5"},{url:"sounds/dicehit/dicehit_coin3.mp3",revision:"f312e7751e670110edd45caaae5fdea7"},{url:"sounds/dicehit/dicehit_coin4.mp3",revision:"8ad821135f32464400b0a31f532205d4"},{url:"sounds/dicehit/dicehit_coin5.mp3",revision:"9e80d5722339b3af02bb73ed3a1a3bde"},{url:"sounds/dicehit/dicehit_coin6.mp3",revision:"41350c783af5b475e2f4a35bbfcc7b06"},{url:"sounds/dicehit/dicehit_metal1.mp3",revision:"56bac0b7994569c04dd8fbe4f4a8ec03"},{url:"sounds/dicehit/dicehit_metal10.mp3",revision:"52ad427725f0d0890f87ca89a2f2af61"},{url:"sounds/dicehit/dicehit_metal11.mp3",revision:"3a7b2ae0969ce0cb983a293805c6aa40"},{url:"sounds/dicehit/dicehit_metal12.mp3",revision:"29540dc1728174c6296ae5da561b0d31"},{url:"sounds/dicehit/dicehit_metal2.mp3",revision:"ca2d38471643887ee2d595e7e978c65f"},{url:"sounds/dicehit/dicehit_metal3.mp3",revision:"f51c9ac6b92215c0adf80a8f4a108a2e"},{url:"sounds/dicehit/dicehit_metal4.mp3",revision:"6b2f6c704221cc12444b68b4f7591bf8"},{url:"sounds/dicehit/dicehit_metal5.mp3",revision:"4d56662863bf6792c8c4749c533a6685"},{url:"sounds/dicehit/dicehit_metal6.mp3",revision:"10be273aac1bb9bf3d61bbcca5331abe"},{url:"sounds/dicehit/dicehit_metal7.mp3",revision:"6b629d38d83f3102ac2cf7a10621997a"},{url:"sounds/dicehit/dicehit_metal8.mp3",revision:"077ad82c6d36372e1f5f4e079d0fd50d"},{url:"sounds/dicehit/dicehit_metal9.mp3",revision:"994d84a57aeff9c13a27d0b1a9174b0e"},{url:"sounds/dicehit/dicehit_plastic1.mp3",revision:"d36e13ea8a8d393eaa4556c4d97312ff"},{url:"sounds/dicehit/dicehit_plastic10.mp3",revision:"d39127c33f5c6cb5e83dd3d37388bda8"},{url:"sounds/dicehit/dicehit_plastic11.mp3",revision:"dee08a9be712ddcede093efdf4c244c4"},{url:"sounds/dicehit/dicehit_plastic12.mp3",revision:"3a669954cd9ce830250c8c392e161278"},{url:"sounds/dicehit/dicehit_plastic13.mp3",revision:"8f495321f1f92e45f58c6285dac559d5"},{url:"sounds/dicehit/dicehit_plastic14.mp3",revision:"9e69e159354da8ffabf770aafa1ec315"},{url:"sounds/dicehit/dicehit_plastic15.mp3",revision:"6883cca50e961c78798fcf297bb0476e"},{url:"sounds/dicehit/dicehit_plastic2.mp3",revision:"0b5cf5c8c420a71194e9d8d4e6bf6f1e"},{url:"sounds/dicehit/dicehit_plastic3.mp3",revision:"db808cd5a9d56fdd9774be9e3d3034ee"},{url:"sounds/dicehit/dicehit_plastic4.mp3",revision:"ffc38233a03400eb4600e8274db21125"},{url:"sounds/dicehit/dicehit_plastic5.mp3",revision:"28d35ede14d710f9e1fba39033c83b21"},{url:"sounds/dicehit/dicehit_plastic6.mp3",revision:"237db2e7b6129a9b50932be8d696d078"},{url:"sounds/dicehit/dicehit_plastic7.mp3",revision:"a3db4f0ee44a2e66adfe87857400a31c"},{url:"sounds/dicehit/dicehit_plastic8.mp3",revision:"0f62369c895fafadc23cbe5ce188b4a4"},{url:"sounds/dicehit/dicehit_plastic9.mp3",revision:"e80279c73519bf3da4289abae7d5ccc4"},{url:"sounds/dicehit/dicehit_wood1.mp3",revision:"33481740fa22509b68591689eab12044"},{url:"sounds/dicehit/dicehit_wood10.mp3",revision:"0aed06f94f9927bd1620158ad0a6d8bb"},{url:"sounds/dicehit/dicehit_wood11.mp3",revision:"0544758b2d2505a6fdb9efea3c9fbbf0"},{url:"sounds/dicehit/dicehit_wood12.mp3",revision:"d1979f92176dec3652ceb61c59989f2a"},{url:"sounds/dicehit/dicehit_wood2.mp3",revision:"26239d5e69f1d91973d0d72e59809c07"},{url:"sounds/dicehit/dicehit_wood3.mp3",revision:"8a901681d75c8017ce25271843205342"},{url:"sounds/dicehit/dicehit_wood4.mp3",revision:"653b4f31404badb9daec125e2fa8c308"},{url:"sounds/dicehit/dicehit_wood5.mp3",revision:"41c39c9b82b8af594e963109bbd59616"},{url:"sounds/dicehit/dicehit_wood6.mp3",revision:"243f4a674180bbda4215db879de6d972"},{url:"sounds/dicehit/dicehit_wood7.mp3",revision:"dc77ec2c575eee76b9c68775c9cceed5"},{url:"sounds/dicehit/dicehit_wood8.mp3",revision:"b9338401d0069c38f7ef7d468d2447f7"},{url:"sounds/dicehit/dicehit_wood9.mp3",revision:"be50c59f6877699ce8289ce4869c92e5"},{url:"manifest.webmanifest",revision:"57d44a4c4995a3da7dacfc2113947e1d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
