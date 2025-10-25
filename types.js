// ==========================
// types.js（16タイプ完全版）
// ==========================
window.KM_TYPES = {
  // ===== WAVE =====
  BNLS: {
    base:'WAVE', emoji:'🐨',
    name:'Romantic Wave',
    concept:'甘くやわらか、包容感のあるロマン。',
    image:'images/BNLS.jpg',
    celebrities:{
      jp:['北川景子','有村架純','石田ゆり子'],
      kr:['TWICE ナヨン','LE SSERAFIM サクラ'],
      global:['Lily Collins','Emma Watson']
    },
    bodyDetail:'骨感より肉感がベース（M）ではなくB寄り/面積は広め（W）/重心は下寄り（L）/曲線寄り（S）。上半身はやわらかく、全体に丸みと落ち感。肩〜ヒップにかけて滑らかなラインが続く。',
    outfitTips:[
      'ソフトな曲線シルエット、ギャザーやドレープはやや控えめ',
      'ミディ丈スカート/ワンピで下重心を活かす',
      'とろみ素材（ジョーゼット/サテン/レーヨン系）',
      '淡〜中明度のワントーン、丸モチーフのアクセ',
      '上半身はフィットし過ぎないニット/ブラウス'
    ],
    avoid:['厚手でカチカチの直線テーラード','重心を上げすぎる短丈×ハイウエストの強い構成']
  },

  MNLC: {
    base:'WAVE', emoji:'🐺',
    name:'Urban Elegance (Wave)',
    concept:'静かで芯のある優しさ、穏やかに知的な洗練。',
    image:'images/MNLC.jpg',
    celebrities:{
      jp:['黒木華','宮崎あおい','吉高由里子'],
      kr:['ITZY リア'],
      global:['Keira Knightley','Natalie Portman']
    },
    bodyDetail:'肉感ベース（M）/面積は狭め（N）/下重心（L）/直線寄り（C）。身体のボリュームは控えめで小さめ、下に安定。輪郭はすっきり直線が通りやすい。',
    outfitTips:[
      'Iライン×柔らか素材で縦を作る',
      'ロング×ロングは避け、上に一点ボリューム（スカーフ等）',
      'ニュアンスカラー（グレージュ/トープ/ブルーグレー）',
      'シャープ過ぎないテーラードやクリーンシャツ',
      '足元は華奢めパンプス/ブーツ'
    ],
    avoid:['極端なオーバーサイズ','厚手直線×ハード素材のゴリ押し']
  },

  MWLC: {
    base:'WAVE', emoji:'🦋',
    name:'Light Wave',
    concept:'風に舞う透明感、まっすぐで軽やかな均衡。',
    image:'images/MWLC.jpg',
    celebrities:{
      jp:['浜辺美波','堀北真希'],
      kr:['NewJeans ヘイン'],
      global:['Selena Gomez','Lily Collins']
    },
    bodyDetail:'肉感（M）/面積広め（W）/下重心（L）/直線（C）。広めのフレームだが厚みは薄く、落ち感がきれい。直線の要素が通りやすい。',
    outfitTips:[
      '薄手で軽い直線アイテム（シャツ/ストレートスカート）',
      'ハイウエストで脚長補正、トップスはやや短丈',
      '余白を作るシンプルなレイヤー',
      '繊細アクセ（細チェーン/華奢リング）',
      '透明感のあるライトカラー'
    ],
    avoid:['厚手のボリューム重ね','過度なフリルや過剰装飾']
  },

  MWLS: {
    base:'WAVE', emoji:'🐹',
    name:'Natural Girly',
    concept:'丸みと温かみ、ふんわりとした可憐さ。',
    image:'images/MWLS.jpg',
    celebrities:{
      jp:['上戸彩','桜井日奈子'],
      kr:['aespa ウィンター','Red Velvet アイリーン'],
      global:['Ariana Grande','Selena Gomez']
    },
    bodyDetail:'肉感（M）/面積広め（W）/下重心（L）/曲線（S）。腰〜ヒップに丸みが出やすく、柔らかな女性らしさ。',
    outfitTips:[
      'Aライン/フレアで自然な下重心',
      'ふわニット×スカートの王道バランス',
      '丸襟/タイ/リボン等は小ぶりに',
      '小ぶりバッグで重さを出さない',
      '温かみのある中明度カラー'
    ],
    avoid:['上半身の過度なボリューム','タイトすぎる直線アイテム']
  },

  MNLS: {
    base:'WAVE', emoji:'🕊',
    name:'Classic Feminine',
    concept:'柔らかく上品、穏やかに香るエレガンス。',
    image:'images/MNLS.jpg',
    celebrities:{
      jp:['新垣結衣','白石麻衣'],
      kr:['IVE ウォニョン','Red Velvet アイリーン'],
      global:['Ariana Grande','Lily Collins']
    },
    bodyDetail:'肉感（M）/面積狭め（N）/下重心（L）/曲線（S）。小さめフレームに穏やかな丸み。上半身は繊細で女性的。',
    outfitTips:[
      '曲線的ネック（ラウンド/ハート）',
      'ミディ〜ロングのフレアスカート',
      'サテン/ジョーゼットの艶を一点',
      '小粒パール/控えめジュエリー',
      '柔らかいワントーン配色'
    ],
    avoid:['角張った強いテーラード','ハードな素材の直線押し']
  },

  BNLC: {
    base:'WAVE', emoji:'🐻',
    name:'Earth Wave',
    concept:'あたたかく包み込む安定感、癒しの重心。',
    image:'images/BNLC.jpg',
    celebrities:{
      jp:['宮崎あおい','黒木華'],
      kr:['ITZY リア'],
      global:['Keira Knightley','Kristen Stewart']
    },
    bodyDetail:'骨感（B）/面積狭め（N）/下重心（L）/直線（C）。骨格の輪郭は見えるが厚すぎず、下に落ち着く安定バランス。',
    outfitTips:[
      'ロングカーデ/軽いアウターで包む',
      '落ち感素材（レーヨン/テンセル）で重さ分散',
      '中明度アースカラー（モカ/カーキ/ベージュ）',
      '靴は厚底すぎない安定型',
      '直線×やわらかのミックス'
    ],
    avoid:['ショート丈×強ハイウエスト一辺倒','硬い直線で全身を固めること']
  },

  // ===== NATURAL =====
  BWUC: {
    base:'NATURAL', emoji:'🦄',
    name:'Urban Natural',
    concept:'直線×余白、幻想と構造の調和。',
    image:'images/BWUC.jpg',
    celebrities:{
      jp:['中村アン','水原希子'],
      kr:['BLACKPINK リサ','LE SSERAFIM ユンジン'],
      global:['Cara Delevingne','Gigi Hadid']
    },
    bodyDetail:'骨感（B）/面積広め（W）/上重心（U）/直線（C）。フレームは大きめで骨格が通り、上に視線が集まりやすい。',
    outfitTips:[
      '直線×ゆとりのミニマル（セットアップ/シャツ）',
      '肩〜胸に構造のポイント（短丈JK/ボクシー）',
      '余白を残すアウトライン',
      '硬すぎない上質素材（トロピカル/ドライウール）',
      'スニーカー/ローファーでクリーンに'
    ],
    avoid:['過度な装飾/甘さ','厚みを盛りすぎて重心が迷子になる構成']
  },

  BWUS: {
    base:'NATURAL', emoji:'🦅',
    name:'Fairy Natural',
    concept:'軽やかで透徹した知性、俯瞰の美学。',
    image:'images/BWUS.jpg',
    celebrities:{
      jp:['綾瀬はるか','戸田恵梨香'],
      kr:['NewJeans ヘリン'],
      global:['Zendaya','Keira Knightley']
    },
    bodyDetail:'骨感（B）/面積広め（W）/上重心（U）/曲線少なめ（S）。肩〜腕に骨格の直線、全体は軽やかでクール。',
    outfitTips:[
      '上半身コンパクト＋ボトムはまっすぐ',
      '直線多めのレイヤード（ジレ/シャツ）',
      '淡色×メタル/無機質アクセ',
      '軽量なスニーカー/ローファー',
      '髪型はタイト/まとめ髪も◎'
    ],
    avoid:['重心を下げるロング×ロング','ふんわり甘め過多']
  },

  BWLC: {
    base:'NATURAL', emoji:'🦊',
    name:'Classic Natural',
    concept:'端正で機敏、自然体の品格。',
    image:'images/BWLC.jpg',
    celebrities:{
      jp:['吉高由里子','杏'],
      kr:['LE SSERAFIM ユンジン'],
      global:['Cara Delevingne','Keira Knightley']
    },
    bodyDetail:'骨感（B）/面積広め（W）/下重心（L）/直線（C）。下で安定しつつ、骨のラインが通る端正さ。',
    outfitTips:[
      '端正なシャツ/テーラードで直線を際立てる',
      'リネン/コットンで清涼感',
      'センタープレスのストレート',
      'ベージュ〜ネイビーのクラシック配色',
      '革靴/ローファーで締める'
    ],
    avoid:['厚く重いボリューム重ね','過剰な甘ディテール']
  },

  BWLS: {
    base:'NATURAL', emoji:'🦌',
    name:'Pure Natural',
    concept:'柔らかく静かな調和、森の中の安らぎ。',
    image:'images/BWLS.jpg',
    celebrities:{
      jp:['宮崎あおい','黒木華'],
      kr:['aespa ウィンター','NewJeans ヘリン'],
      global:['Keira Knightley','Kristen Stewart']
    },
    bodyDetail:'骨感（B）/面積広め（W）/下重心（L）/曲線（S）。下に落ちるAラインが映える、穏やかなナチュラル。',
    outfitTips:[
      '下に落ちるAライン/ギャザーは控えめに長め',
      'テクスチャー重ね（リネン/ニット/ガーゼ）',
      'ソフトカラーでグラデーション',
      '木/革など自然素材アクセ',
      'フラット〜ローヒール'
    ],
    avoid:['上に硬い直線の山盛り','強い光沢やタイトな構築']
  },

  // ===== STRAIGHT =====
  BNUS: {
    base:'STRAIGHT', emoji:'🐆',
    name:'Elegant Straight',
    concept:'凛として構築的、都会的モード。',
    image:'images/BNUS.jpg',
    celebrities:{
      jp:['長澤まさみ','田中みな実'],
      kr:['IVE ユジン'],
      global:['Jennifer Lopez','Scarlett Johansson']
    },
    bodyDetail:'骨感（B）/面積狭め（N）/上重心（U）/曲線少（S）より直線（C）優位。厚みも出やすく上にボリュームが乗る。',
    outfitTips:[
      'ショート丈×ハイウエストで上重心を活かす',
      'ハリ素材のIライン/テーラード',
      '高コントラスト配色（白×黒/ネイビー）',
      'ヒールで縦を強化',
      'ミニマルでシャープなバッグ'
    ],
    avoid:['薄手のだぶつき','甘ディテールの盛りすぎ']
  },

  MWUC: {
    base:'STRAIGHT', emoji:'🦈',
    name:'Sporty Cool',
    concept:'鋭くスマート、研ぎ澄まされたスピード感。',
    image:'images/MWUC.jpg',
    celebrities:{
      jp:['広瀬すず','菜々緒'],
      kr:['Red Velvet スルギ'],
      global:['Taylor Swift','Gal Gadot']
    },
    bodyDetail:'肉感（M）/面積広め（W）/上重心（U）/直線（C）。上に厚みと存在感、スポーティが自然。',
    outfitTips:[
      'クリーンなアスレジャー（トラックパンツ/ジャージJK）',
      '短丈トップスで上重心キープ',
      '機能素材×モノトーン軸',
      'ソリッドなスニーカー',
      '髪やメイクはシャープ寄せ'
    ],
    avoid:['甘い装飾多め','薄くフワフワだけでまとめる']
  },

  MNUC: {
    base:'STRAIGHT', emoji:'🐅',
    name:'Glamorous Cool',
    concept:'立体感と色気、強い存在感。',
    image:'images/MNUC.jpg',
    celebrities:{
      jp:['深田恭子','佐々木希'],
      kr:['BLACKPINK ジス','TWICE モモ'],
      global:['Angelina Jolie','Jennifer Lopez']
    },
    bodyDetail:'肉感（M）/面積狭め（N）/上重心（U）/直線（C）。厚み×直線で映える。コンパクトにまとめると色気が立つ。',
    outfitTips:[
      '厚みのある直線アイテム（タフタ/サテン厚手）',
      'ウエスト位置を高く強調',
      'ダークトーンに一点光沢',
      'ポインテッドヒール',
      'ジュエリーはエッジのあるメタル'
    ],
    avoid:['だぶついた薄手レイヤー','甘く丸い装飾で全身を覆う']
  },

  MNUS: {
    base:'STRAIGHT', emoji:'🦚',
    name:'Romantic Mode',
    concept:'力と優雅の共存、華やかな余韻。',
    image:'images/MNUS.jpg',
    celebrities:{
      jp:['石原さとみ','橋本環奈'],
      kr:['aespa カリナ'],
      global:['Anne Hathaway','Natalie Portman']
    },
    bodyDetail:'肉感（M）/面積狭め（N）/上重心（U）/曲線要素も程よく混在。骨感より厚みが先に立つエレガント。',
    outfitTips:[
      '構築×曲線ディテール（ペプラム/ソフトフリルを一点）',
      '厚手サテン/タフタのドレス/スカート',
      'ウエストマークを明確に',
      '存在感のあるジュエリー',
      'コントラストの効いた配色'
    ],
    avoid:['全身ふんわりで輪郭が曖昧になる構成','極端なルーズフィット']
  },

  MWUS: {
    base:'STRAIGHT', emoji:'🐬',
    name:'Soft Active (Straight)',
    concept:'すっきりとした流線、しなやかな躍動感。',
    image:'images/MWUS.jpg',
    celebrities:{
      jp:['木村文乃','広瀬すず'],
      kr:['Red Velvet スルギ','IVE ユジン'],
      global:['Taylor Swift','Gal Gadot']
    },
    bodyDetail:'肉感（M）/面積広め（W）/上重心（U）/曲線少なめ（S）〜直線（C）。動きに沿う直線がきれいに出る。',
    outfitTips:[
      '流線型の直線×軽素材（プリーツ/ジャージー）',
      'ハイウエストで脚長',
      'クルー/ボートなどすっきり襟',
      '寒色中心にクリアな配色',
      'スニーカーもソリッドに'
    ],
    avoid:['甘さ過多の曲線装飾','厚重いレイヤーでもたつく']
  },

  BNUC: {
    base:'STRAIGHT', emoji:'🦉',
    name:'Structural Mode',
    concept:'精密で構築的、夜に光る知性。',
    image:'images/BNUC.jpg',
    celebrities:{
      jp:['松下奈緒','木村文乃'],
      kr:['TWICE モモ'],
      global:['Charlize Theron','Cate Blanchett']
    },
    bodyDetail:'骨感（B）/面積狭め（N）/上重心（U）/直線（C）。シャープで建築的なラインが最もよく映えるタイプ。',
    outfitTips:[
      'モノトーン×建築的ライン（アシンメ/カッティング）',
      'ショート丈ジャケットで上重心を強調',
      '硬質素材（ウールトロ/タフタ）',
      '金属系アクセで知性を補強',
      'ミニマルなバッグ/シューズ'
    ],
    avoid:['甘さ/装飾の盛りすぎ','薄手ルーズで輪郭が消えること']
  }
};