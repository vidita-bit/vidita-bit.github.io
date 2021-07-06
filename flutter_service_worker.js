'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8bd17c89886aa3ea42f17d2264dad9fc",
"assets/AssetManifest.json": "05758cb367dc2b21545c2cd122c0b438",
"assets/assets/images/objective.png": "37debe75c627ce8cd746ef7e2660e21b",
"assets/assets/images/mine.jpg": "3845b552cdcd03d15e6507982bafe645",
"assets/assets/images/skills.jpg": "4710c4d0245d6a6ccf99a8b2a74e53ea",
"assets/assets/images/experience/attaboy.jpg": "eaead3e55ab04e1d07e0084507fedb85",
"assets/assets/images/experience/dgtlmart.png": "4c3ee8f98801a5e13e74f9b7b38bc3ab",
"assets/assets/images/experience/attaboy.png": "df60fda3f48638f414a9aafbcd8ce515",
"assets/assets/images/experience/iPixelate.png": "65d7d0c6eec70f926b9eac56f810d53e",
"assets/assets/images/projects.png": "6d5e590e71386de966232be0e54a21ce",
"assets/assets/images/linkedin.png": "875240de52813b1e338c42fda7bb8aee",
"assets/assets/images/twitter.png": "1e7ca7c19a86c40157afd215961ca77b",
"assets/assets/images/status.png": "47f2b1d2170ee20ea96347e9c0b17973",
"assets/assets/images/experience.png": "6ba30bc372d44b30bf161e76b8c4f16f",
"assets/assets/images/github.png": "1fbf1eeb622038a1ea2e62036d33788a",
"assets/assets/images/skills/postgresql.jpg": "94e59e6411535d5cb2c92cf41ddcc83f",
"assets/assets/images/skills/linux.png": "99421018e1b499f5078c8f1a3586d67c",
"assets/assets/images/skills/filmora.png": "c99a953335b6ed621468309e302fbcf0",
"assets/assets/images/skills/database.png": "aba5eab4c141d31a4bc8fd713c6882d0",
"assets/assets/images/skills/figma.png": "c7d3a3f19c2890780654f15d5dcddfcd",
"assets/assets/images/skills/firestore.jpg": "604005fc0f416146a6c1a074ab1f88e5",
"assets/assets/images/skills/restapi.png": "8cce0d7a79aae03228884b5254b0e35a",
"assets/assets/images/skills/postgresql.png": "8e0e3b78baef143611c5387f6fc41bc7",
"assets/assets/images/skills/websocket.png": "5938feb7b437ca5f743723d8a66f5dfe",
"assets/assets/images/skills/proteus.png": "b68d069da319d14a9a6d35477b6a9e0a",
"assets/assets/images/skills/database.jpg": "4034fed60b23abbf2168285e98623a21",
"assets/assets/images/skills/flutter.png": "6e09bc66895689cc368e11fa88503004",
"assets/assets/images/skills/php.png": "90b5a74b2825fc210ddf0aabbcea53e0",
"assets/assets/images/skills/lucidchart.png": "7a682556af51c9e9e16532ff7d91ac27",
"assets/assets/images/skills/eagle.png": "5c3371730b02234b4f5f0d807b615e1b",
"assets/assets/images/skills/eagle.jpg": "efe1ea5fe7eb666486e3d5935e8fe00e",
"assets/assets/images/skills/canva.png": "85610b142c04d37b8ebad31f349ae660",
"assets/assets/images/skills/rails.png": "20454487ecf87598610e756116c03eb2",
"assets/assets/images/skills/laravel.png": "a7c2da9ab728b7bc17d6fb8f72db0d03",
"assets/assets/images/skills/html.png": "031de673d24bbb48bf774d7d8a0db461",
"assets/assets/images/skills/git.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/images/projects/modern_1.png": "c5313ca8442ea397d85d2f3446d81dbb",
"assets/assets/images/projects/modern_5.png": "87d813806a07e9b4e61b7837958b2acd",
"assets/assets/images/projects/modern_2.png": "885194a011eba589cb140d786b681a13",
"assets/assets/images/projects/modern_3.png": "d4f9ba2b76f4977721b162216a8775b7",
"assets/assets/images/projects/tree_3.png": "87d9cd2ce676035a0681d727ad7416d4",
"assets/assets/images/projects/tree_4.png": "760f2c628fa4ce91383db574807cbf39",
"assets/assets/images/projects/tpanel_3.png": "0719e92997d79b1f75ce08e78e62f842",
"assets/assets/images/projects/modern_4.png": "431433b23caad2aadb793111a43a2015",
"assets/assets/images/projects/tpanel_2.png": "c0c1c84ad51f85d212addaa22a149400",
"assets/assets/images/projects/tree_1.png": "ec375248411ae7f61dc262936ce317e9",
"assets/assets/images/projects/tpanel_1.png": "9ed95a67d81496c53211071457b4b9a8",
"assets/assets/images/projects/tree_2.png": "b1ccbdb730dac20820b66e530c6384a1",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/NOTICES": "8ceec6363a83332f19b57dcbae8722cc",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/refs/heads/master": "0b9a16868d22ccf8a0af1ffd9a309533",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "0b9a16868d22ccf8a0af1ffd9a309533",
".git/refs/remotes/origin/Portfolio": "de0bc9f984d85bc98df794adf80e3d88",
".git/index": "38dcb0dc4c273d07202d7e54acf51acf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "583f99f9dc928b8fa7126553cb68bea9",
".git/ORIG_HEAD": "de0bc9f984d85bc98df794adf80e3d88",
".git/objects/70/6098f81dc2c5ac9df8d5133461cea7690a9c73": "6aae5d6620cbd637d94d1d3a72e1f703",
".git/objects/14/1256514a328534e4df6589cfcfd4f67caf762d": "0641e1b4a3a002d241ddc6970218c05e",
".git/objects/94/2b2b1f68fe3a9e0a8ea1bd0abfa6e304866284": "2a658465470201def64f2c5b27cc9fe5",
".git/objects/2d/8bace8d9f06ae8f2a070fe6de63cff6ad29a4a": "f231e12798e7e8bc876ff70465796223",
".git/objects/86/6e779b07ec9eb4affd95d7c5927467770edfaa": "dd8a38bea06a827596980adeeab93e48",
".git/objects/0c/6f7a034dc901a8d97d16f3f4ca157e17f9fb39": "615adec10f0d464a67673b7997e73a85",
".git/objects/89/58fe0cd3adf99fad60b631ad38e0a787917520": "df34636be7466682f3a7a9cac43c13c3",
".git/objects/1c/1e09c63df1b019cb089bef4d10377b9e468aec": "559603f6cfb9d7dd4ca29a6c431fc93c",
".git/objects/aa/0039acb0dea03eed7c6d00fb0df45fcda8bc89": "fef97b7f63bd524a39f3f02cb48288b4",
".git/objects/7f/67d987d8546a6eaabfaef68f261594000467ce": "a8110bc7ef026a289763195e23e05d97",
".git/objects/7f/c62dc6d56d0437a30433168c4b59113e2b03fb": "3e7049f46dcdf8555837534ce217f763",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/42/d81bd29fb740769a0b5265fd8b4cc1823cecc2": "3c2661bbaebc28adfef3ab4664eac27b",
".git/objects/cb/6938c8bcbff576baf63d35e28ee68b1989a72c": "21523ff80abe3ae93aee8008e1574943",
".git/objects/d1/2e7354ec728db72d1c37f3c2af3e83cb7b077d": "8c0436f54d759aade1510828d34cdbd1",
".git/objects/65/d38065ad591714cf577571c1e9a9c29eda4976": "161d653b718077d97cd7e2acf055f955",
".git/objects/65/08ec977dc7e8b09faf5a48af99c2e0dea70634": "e5511908d635467e8c55d02c12e3a389",
".git/objects/8f/c643ba8f5f6b51be850f14f2b2d3ec26a45b27": "b8e55cad30b8f5b07a5edfe426f9e5c4",
".git/objects/8f/18809cea3024fbeae9032141aede8eefb32bce": "9026e87f66d5accc70726ff2af1de010",
".git/objects/e8/1ad832e1e8f068a5988db61b82977237428c1b": "aaf0854763981fc7b0e2a466a1fbc54b",
".git/objects/74/f42b1192301b9558aaa593ba01d4544d1556c4": "f4e55dfc01d3ee60451a148b1a82cdf7",
".git/objects/4e/c3ac910a6c1657794d77f6e596bbb36e2580f2": "451fa6a3f29f5fc963ef59ae17a02e76",
".git/objects/52/4524a8c078fbd801a61021e82e85f0d787b47c": "f200139995988d9d6d8d9fc1ff93fbb9",
".git/objects/15/23a00848dcf7d439c6763a4b56bfa7f6bd26bc": "0106139fac1e1284459ef49f3ae15928",
".git/objects/51/f4ae5404fc79be09e69171bfc9d34d48810297": "cbccb909471e4568310a97f46dd1e258",
".git/objects/51/4c6290a06f3d48d0e5480c94517bdb55eda900": "bf59ff5a0e49b9d98883007a87912f8e",
".git/objects/55/87d8653d69d7e801ee313995f39d37bf6566fd": "8a02e3c07a8dd5362f0bed6a5c42b7f8",
".git/objects/55/3bad9083539e41bd0a3fc4e8faef380be564f9": "72aa9a9d4928c6870074f22d0fbe42d3",
".git/objects/2f/0c52a0e176565646b424a544141f556b7b58be": "1d36eb698624987da04a4062444c6e4c",
".git/objects/da/f15a18b3eab001797c2cff1904d9124d0667ae": "f5d060aa371aafba50dd18aedb0a17a9",
".git/objects/57/8cea793f246a45acabc485d957269d57bf33b2": "7e30d27ed549cb2cafbe72bda84850ed",
".git/objects/4c/06aa5a33f24ec161ca4bc8b42bc3e487c0381e": "a6995bf8289b1217a80451047153faab",
".git/objects/29/2ead96cc862b81e883cad1433f5ad363ba9573": "7e7d723eb60126f53503d5fc2cef8e4a",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/58/d06c7ed52c741f3362275878f6441bbf95b2d3": "ac09ae055c2f7cc354fb8acb51521244",
".git/objects/60/315049ecdc2fe744a7bb0996ff1c751c9db92b": "7ddf2bce3bde868aba3920238cfa7d33",
".git/objects/6e/df3f7bdc40badfa77cfe9292ea56e1a90bfb98": "90474f3cc0fd8c4a057562a33993e134",
".git/objects/4b/29ab32e4fbbaf5b314c2c43e6f31b01671093b": "fb57951b6f04496424283c12f00fb70c",
".git/objects/ce/d74a845be3fc372f36e57a7f2aa39c27a8c6ab": "85dc4effa488a4bde2d9a77b37ac33fe",
".git/objects/ce/2ae4f38adbc7e102337298a753d7e4eee63b41": "825e8432c8645710e9b2e2496fa307c2",
".git/objects/b9/795561e4dc7510c163fc35e4a3e9660c4e1eb6": "9692360751a938a0baff44a6c7fa709b",
".git/objects/4d/0cf22e4e93401a90c2225a19c9e6ca07b07315": "8fbe75c6963f99ec0f6ea97cda427e86",
".git/objects/11/abc7a7d1ea64d4d6aaab3aad4982c8a5d5efa3": "ca555088f52a5b228b5ab90aab16177d",
".git/objects/1f/7dd7a50ea0aa3f1c3c8a0bec09b30cc3494fe3": "c4b85e35cb072aae40c4cfe5e751e86b",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/cd/6c220c9bf11666a78b1ff65fb1d9588d6cfc28": "7e343dd744662bdcba616791fe9c0709",
".git/objects/43/662979d7f0b3bd6496da20c3e8e04a1e20e46e": "d29a19f4b72acf56cf4276d39a972bde",
".git/objects/43/577fd79517b02aa29a9dade985cb80518c0e33": "fe39633964017c9593f3fd3da0f395b2",
".git/objects/9c/97f1565ae634b074bd0118dcf3fc29f1caf9f8": "add17ffedd914aa5e6b2cc6f4d7ce23c",
".git/objects/ed/52b772e22dbe6344ec21a87c9a70ca23d46721": "b310d4791a02a3cf9f793e93455b84da",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/06/3a1e247baf3a3fba48b63331221c61ceb4d575": "8ee620adff702f73e176007a56a2683c",
".git/objects/cf/9ed48b69131a7a7b8f38d2e4169756b2951598": "0402f7ad9abdd74f243a28e0488ba14b",
".git/objects/cf/47680e30b3db49090c85fd0d9ef7c155b03d0c": "3e72ae6d13dbe86311acd6b2b2223412",
".git/objects/cf/feac9b7729c9759ecdf21095619de027a8285f": "43b394f6dfb4ad611f29b0930e66513e",
".git/objects/c1/5be84ec31c0ab7ad29b2805ddc6872e3f963c8": "3b6d487e5291599b58b2750c41003d94",
".git/objects/c1/a766b59b133e84d17658aaacb62edf37378e83": "8d4d832925f414c247b304239da53668",
".git/objects/c2/91cc5c3ba20ab58d83b73432b3b8fc304babaf": "e90ea640b0e7122ab7a92da758657feb",
".git/objects/c8/28927ee6f8be20a9526f2a02975933632e53df": "27de8b8e7ab8bc710daccd2fa986bfe2",
".git/objects/af/a6a2427e544c20490ea4c69f027c516d84f5cd": "db4a574181b0647d72b784cfbc76704a",
".git/objects/76/1c7a5f1c28383bd8b2305fae7ab70f8c68365c": "75af95e7acba1275bb46f86edff3acbb",
".git/objects/3c/5cbdd152a641a15ec333ff6b1a41018ec845d9": "85b690cc3da7b5b0e36d650b6539d832",
".git/objects/13/2ddd8a907a5b89894f658d6a4b370363ba5d9a": "b23cefcaa35294a0b309ba02cef6049e",
".git/objects/a1/fd6cc2471abefd5bc6b366414ffaa4e606672e": "3ef348806e92019f91565a4e53d2371a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/87/fe1d8ce81e0571ec1c7bb7abf169ccafdd622c": "61db170dc25e7b24f18da484fee28487",
".git/objects/dd/c221c57def7f889c53a13b010a0e3ac6b1365f": "f524cac57e1f57963c14b4dd8568ded5",
".git/objects/e6/25e03c96b88127cb49663b4b8a2791e071a6ca": "31b21c7ae2e0dc076ebfb7e267a401d3",
".git/objects/19/bb840093535d56e25742b8e754fbdf9b557bab": "5604a4182d30364b4e5f3a631d2aef1f",
".git/objects/83/20edd53327fc97fcfc871d2894957dbb5ea98d": "8cc5c5d2bd3ad16c356fa16789ed2f1d",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/08/570eac97370e5b3b709b92de184939a8ff823d": "b13071bba5945ad66ee9111575aa05d5",
".git/objects/08/1af6c521815bb7c54725b862b9b0c299308b8a": "de0fd7aa33532a21c8d933350e4eee39",
".git/objects/59/808240791cef8bdbf1ccd82e826e4dd729bd9c": "31d13986986c73fc8fa38a4cc01ddbe1",
".git/objects/f4/40593999513d2b3fa6d52bb062361167516336": "9894d7e134d24d33d08dfe87cfb7beab",
".git/objects/f4/866a8b771d17884647f9cd26143f9c4a7e4a5e": "8e742a5f5b78a45cb40b8e7f28e8f42b",
".git/objects/6c/a38b26175af866a9343317e99583d15b38d4b4": "f1f00199e22b0e2614baf827a44ae495",
".git/objects/ac/359c5fc714fecfbb3de4b81a9e3a683e1aa697": "245d0cbfc9af3db931191e06d30dbd10",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/23/0d8d28f21336b97caafe8871b9511e7ebab7c4": "3b197e7c19e91f28f213311068d0784f",
".git/objects/23/16239c536a290f22f921b50233328cb34f7ad5": "d6187b6ae68974087d6050ebcc67baa5",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/7d/b78a215875bf27d0086842155b29f2e966a92e": "b415f78e0ff63c77f892c30faedc7dcb",
".git/objects/2b/05b792f5e4391236e691e514342b5e05778c92": "bfd80d83eacb2cdc14c4ee1f2faf0bfb",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/40/9de0c68a6c1858fa2a1e9caa7edd54e8f67d00": "fbd0fd360c9aca5d823e1ff93b355fec",
".git/objects/40/256329e52bb4557a90bb06401171dbd8947bae": "37e9c5aa93289d74fea8841f767d9c14",
".git/objects/40/9475f39356b70359463d42d5efc87bae0f01e4": "14679febea470734e07361ccc383df9b",
".git/objects/6b/88f228be59614e060a16c958744644c88634be": "100e9089a4f82d721268b7be786e47c5",
".git/objects/4f/739e12236cd0dc1bfa78917e0611ca9b7814db": "c39e7fc84a7907984e30b266e71e535e",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/12/6061678d5edf82e32cd7f873427da8b9572c8b": "cff60211131731f12ee8aceb5bccd8d2",
".git/objects/d3/e68be7b8b86c1ab6fd628d375040700acf1d99": "ca4b5c4119c582ac5fc54dbc73f2d4e4",
".git/objects/a2/3cdb551b8013486878057add75dc603a531d08": "076136871099dc126720fe03ea86ef5f",
".git/objects/d2/662b4c97ec3f58ed207f2bca0210199d22b74a": "5ccdfb7e1e171e4d68a0b32ee34e3b79",
".git/objects/92/ba64e86923383d9ab91994bbf711b3dc1c3127": "81bcc206d1e758c661c4be8ada602f6b",
".git/objects/92/ebd3e46fdf395370d3e7d7195326cc27d98e38": "407d8bfb769440671b440a2b807ef3a6",
".git/objects/10/caa1efbb58bfa91c53f6bf3dfc8c065905565a": "0b3ec8cb829abb1c20e84f333934fd44",
".git/objects/ee/a54650e141831514317750bdae0eb809f7eb9e": "8ac9cfc16f1d524f9721673944a433f6",
".git/objects/cc/10f0734f34c24f3cd6256e50255cac58d3b2f0": "df955da909f72281586f0fac4c5d90c4",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/c0/1795689706341b35dfa59fa5507bbc68a996cc": "dd19f35980d77032564cd4836a5f4d15",
".git/objects/bb/01b705f0a74695829060a4e93f76751e0b726e": "db84b97c94501aa675205a9e7d9cfce5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/02073ad62dadb8b4c0eb2cce00b95cef814e46": "0b9f01dc509a21e95c0127c401d9c43c",
".git/objects/1e/0756164281a825a904bd659ae8510103100274": "3c6e02b4d7701dfb6f16752d11df8b9c",
".git/objects/24/2e08d314dc17a33758636d596a414c6f5a8089": "0705a4651fb454726f0ae87c9c2576ba",
".git/objects/2c/eb9bb596c498144e07eff971ef84cc1d24b497": "95e77111abf22650f2ffa9ae9a6f8811",
".git/objects/a4/2980f7085bde646badbdc39b23efe50bd2b818": "ecf752cecaf5dc6e3360a338d9a43d5a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/81/d4d1f1ffe321220fd8bb49f7123ea0f02f1327": "55e95ed2e60a44b32d219c0a448a9e48",
".git/objects/c6/670d5187bbed6aef36ec61b5d5df9a0ec9dd81": "580a2724fd456d5566e963a6bb21d58d",
".git/objects/28/452d047765c81e4c31bcc8e3f25bf20ad5bcca": "a29111dbcd1d5a307a1caf20a57b1446",
".git/objects/28/e8529ba8327770384032c3eae2f7a4c6a7e595": "d2d4f2298f1f7d3e59481778da770a66",
".git/objects/18/9b0d54c81af19c2a3f69af47b78f1782725580": "cb259dd4f0a47da422191e017406fe88",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/f8/db395509c3507c90de617be719731a291f97b2": "226c17d0022ac1e3f062b65798b21374",
".git/objects/ff/df2c2faa2c407c41c612581e4802182eef4470": "16f4c06d3ae44f1569c05d8d52449593",
".git/objects/e2/722b90347c83b9772852d30dcec097ae57ea5c": "6bdb0a5682d9754c89c936716ab21ff5",
".git/objects/85/e896e5e1f9aff577bc1b568e6bfb5436fb7c32": "d2c5c0ea0414dd45927c3201545415b9",
".git/objects/b5/3b63d0950c40e6d1a93730a322e9781aeec7ed": "b76e50e5c8d8aa7a0ebeb1af86023718",
".git/objects/61/a95d933f011f50f7823804dcc019a537d3fe07": "10763c0b3bd34629c3562bfc65d8086c",
".git/objects/eb/c2916bef36976e072ed224da41d05613e6af3a": "3ad3bf0b2a8b395aba4895076d95d727",
".git/objects/f3/a093470a1a942e273e5e8c1d3bd670809a7fd0": "d975c102153335fc696dab80b12465f0",
".git/objects/99/ebd614bf678ef28d24d876838fa6cc9c650802": "e2f659de4a24a3eee1ac498716131e30",
".git/objects/bf/a3490472b354a14e157c7fae63ec433f17fc29": "d6b44b54e02a00bc04fcc36106e76cb9",
".git/objects/fd/7eac8a329af2c15aa4591c1c7e52c9e45b3ce9": "344bf01192d10d098dcbdb6f474b55b7",
".git/objects/fd/a935566e7c4f22c30d4cc5c5e5a80337e216f7": "6d481bfc03a0dd71008f497b84762e9e",
".git/objects/fd/b2c9009efc9e31e4d38989eff86b2a724b6b8b": "edcda7f68d6ae479f0d5752626b9429e",
".git/logs/HEAD": "47af9e9627a6799a28b80a8e07e751c4",
".git/logs/refs/heads/master": "426e90f0248ee99e60324d878863333e",
".git/logs/refs/remotes/origin/HEAD": "5cbb768ac11cef74295eafa4f624f00a",
".git/logs/refs/remotes/origin/master": "db433b341cde492c4c04a1ef7d76b8bf",
".git/logs/refs/remotes/origin/Portfolio": "d92741a6f8c356fb6daa5d553541656e",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/config": "c9468bd7cf7fd95af04fd1c850a02ecb",
".git/COMMIT_EDITMSG": "c765064cd5f6f5f0936b36e49f4fe6be",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "cc2df93b4501771d9142229940b89f26",
"manifest.json": "8d19bbccfe385d70e1af5cea8d4d2457",
"README.md": "67d0470167ab66bbcfdb4a74b83b42dd",
"index.html": "48c2e6696d1e7ec96de351de3410e242",
"/": "48c2e6696d1e7ec96de351de3410e242",
"favicon.png": "fea24ac6ca33495a2b81c01023931158"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
