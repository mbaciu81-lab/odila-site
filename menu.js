/* Carta Odila — sursă: meniul oficial (beacons.ai/odila_cafe, versiunea în engleză).
   Fără prețuri: meniul public nu le afișează. De editat aici sau, mai târziu, dintr-un Google Sheet. */
window.ODILA_MENU = [
  { id:"cafe", hand:{ca:"cafè",es:"café",en:"coffee"},
    intro:{ca:"Espresso, filtre i llet ben texturitzada.",es:"Espresso, filtro y leche bien texturizada.",en:"Espresso, filter and properly textured milk."},
    items:[
      {n:"Espresso"},
      {n:{ca:"Espresso doble",es:"Espresso doble",en:"Double espresso"}},
      {n:"Cortado",d:{ca:"espresso amb un toc de llet",es:"espresso con un toque de leche",en:"espresso with a dash of milk"}},
      {n:"American long black"},
      {n:"Batch brew",d:{ca:"cafè de filtre del dia",es:"café de filtro del día",en:"filter coffee of the day"}},
      {n:"Cold brew"},
      {n:"Cappuccino"},
      {n:"Flat white"},
      {n:"Latte",d:{ca:"M · L · XL",es:"M · L · XL",en:"M · L · XL"}},
      {n:"Ice latte"},
      {n:"Moka"}
    ]},
  { id:"te", hand:{ca:"tes i infusions",es:"tés e infusiones",en:"tea & infusions"},
    items:[
      {n:{ca:"Te negre",es:"Té negro",en:"Black tea"}},
      {n:{ca:"Te verd",es:"Té verde",en:"Green tea"}},
      {n:{ca:"Te vermell (pu-erh)",es:"Té rojo (pu-erh)",en:"Red tea (pu-erh)"}},
      {n:{ca:"Te blanc",es:"Té blanco",en:"White tea"},d:{ca:"llimona i gingebre",es:"limón y jengibre",en:"lemon & ginger"}},
      {n:{ca:"Te blau (oolong)",es:"Té azul (oolong)",en:"Blue tea (oolong)"}},
      {n:{ca:"Camamilla",es:"Manzanilla",en:"Chamomile"}},
      {n:"Rooibos"},
      {n:{ca:"Menta",es:"Menta",en:"Mint"}}
    ]},
  { id:"matcha", hand:{ca:"matcha i chai",es:"matcha y chai",en:"matcha & chai"},
    items:[
      {n:"Matcha latte"},{n:"Matcha vanilla"},{n:"Matcha orange"},
      {n:"Ice matcha latte"},{n:"Ice matcha vanilla"},
      {n:"Chai latte"},{n:"Ice chai latte"}
    ]},
  { id:"begudes", hand:{ca:"sucs i begudes",es:"zumos y bebidas",en:"juices & drinks"},
    items:[
      {n:{ca:"Suc de taronja",es:"Zumo de naranja",en:"Orange juice"},f:["fresh"]},
      {n:{ca:"Taronja i pastanaga",es:"Naranja y zanahoria",en:"Orange & carrot"},f:["fresh"]},
      {n:{ca:"Aigua",es:"Agua",en:"Water"},d:{ca:"sense gas o amb gas",es:"sin gas o con gas",en:"still or sparkling"}},
      {n:{ca:"Tònica",es:"Tónica",en:"Tonic"}},
      {n:"Kombucha"},
      {n:{ca:"Refrescos ecològics",es:"Refrescos ecológicos",en:"Organic soft drinks"},d:{ca:"cola · taronja · llimona",es:"cola · naranja · limón",en:"cola · orange · lemon"}},
      {n:{ca:"Batut de xocolata ecològic",es:"Batido de chocolate ecológico",en:"Organic chocolate milkshake"},f:["gf"]},
      {n:{ca:"Cervesa Pilsner ecològica",es:"Cerveza Pilsner ecológica",en:"Organic Pilsner"}},
      {n:"Lemon Radler"},
      {n:{ca:"Cervesa de blat ecològica",es:"Cerveza de trigo ecológica",en:"Organic wheat beer"},f:["vegan"]},
      {n:{ca:"Cervesa sense alcohol ecològica",es:"Cerveza sin alcohol ecológica",en:"Organic alcohol-free beer"}}
    ]},
  { id:"extres", hand:{ca:"extres",es:"extras",en:"extras"},
    items:[
      {n:{ca:"Llet vegetal",es:"Leche vegetal",en:"Plant-based milk"},d:{ca:"de civada (Oatly)",es:"de avena (Oatly)",en:"oat (Oatly)"}},
      {n:"Shot"},{n:{ca:"Xarop",es:"Sirope",en:"Syrup"}},{n:"Cold foam"}
    ]},
  { id:"forn", hand:{ca:"del forn",es:"del horno",en:"from the bakery"},
    intro:{ca:"Rebosteria casolana amb accent argentí.",es:"Repostería casera con acento argentino.",en:"Homemade bakes with an Argentinian accent."},
    items:[
      {n:"Croissant"},
      {n:{ca:"Croissant farcit",es:"Croissant relleno",en:"Filled croissant"},d:{ca:"crema d'avellana · Lotus · Nutella · crema de pistatxo",es:"crema de avellana · Lotus · Nutella · crema de pistacho",en:"hazelnut cream · Lotus · Nutella · pistachio cream"}},
      {n:{ca:"Croissant vegà",es:"Croissant vegano",en:"Vegan croissant"},f:["vegan"]},
      {n:{ca:"Croissant de pernil i formatge",es:"Croissant de jamón y queso",en:"Ham & cheese croissant"}},
      {n:{ca:"Galeta",es:"Galleta",en:"Cookie"}},
      {n:{ca:"Galeta farcida",es:"Galleta rellena",en:"Stuffed cookie"}},
      {n:"Alfajor de maizena",d:{ca:"galeta de midó de blat de moro amb dolç de llet",es:"galleta de maicena con dulce de leche",en:"cornstarch cookie with dulce de leche"}},
      {n:"Alfajor Mar del Plata",d:{ca:"galeta doble de dolç de llet",es:"galleta doble de dulce de leche",en:"dulce de leche sandwich cookie"}},
      {n:{ca:"Pastís de xocolata",es:"Tarta de chocolate",en:"Chocolate cake"},f:["gf"]},
      {n:"Brownie"},
      {n:{ca:"Pa de pessic (llesca)",es:"Bizcocho (porción)",en:"Loaf cake (slice)"},d:{ca:"llimona · pastanaga · poma · plàtan i xocolata",es:"limón · zanahoria · manzana · plátano y chocolate",en:"lemon · carrot · apple · banana & chocolate"},f:["veganopt"]},
      {n:{ca:"Tarta de codony",es:"Tarta de membrillo",en:"Quince tart"}},
      {n:{ca:"Rol de canyella",es:"Rollo de canela",en:"Cinnamon roll"},d:{ca:"topping a part",es:"topping aparte",en:"topping extra"}},
      {n:{ca:"Scone britànic",es:"Scone británico",en:"British scone"},d:{ca:"amb melmelada i mantega o formatge cremós",es:"con mermelada y mantequilla o queso crema",en:"with jam and butter or cream cheese"}},
      {n:{ca:"Chipá",es:"Chipá",en:"Chipá"},d:{ca:"pa de formatge",es:"pan de queso",en:"cheese bread"}}
    ]},
  { id:"brunch", hand:{ca:"torrades i bowls",es:"tostadas y bowls",en:"toasts & bowls"},
    items:[
      {n:{ca:"Torrada de pa rústic",es:"Tostada de pan rústico",en:"Rustic bread toast"},d:{ca:"amb mantega i melmelada",es:"con mantequilla y mermelada",en:"with butter & jam"}},
      {n:{ca:"Torrada d'alvocat, formatge fresc i ou",es:"Tostada de aguacate, queso fresco y huevo",en:"Avocado, fresh cheese & egg toast"},d:{ca:"amb verdures, tomàquet confitat i raves",es:"con hojas verdes, tomate confitado y rábanos",en:"with mixed greens, confit tomatoes & radishes"}},
      {n:{ca:"Torrada de salmó fumat",es:"Tostada de salmón ahumado",en:"Smoked salmon toast"},d:{ca:"alvocat, ou ferrat i crema de cibulet sobre pa de malta",es:"aguacate, huevo frito y crema de cebollino sobre pan de malta",en:"avocado, fried egg & chive cream on malt bread"}},
      {n:{ca:"Bowl de iogurt grec i fruita",es:"Bowl de yogur griego y fruta",en:"Greek yogurt & fruit bowl"}},
      {n:{ca:"Bowl d'açaí",es:"Bowl de açaí",en:"Açaí bowl"},d:{ca:"granola de la casa i fruita de temporada",es:"granola casera y fruta de temporada",en:"homemade granola & seasonal fruit"}},
      {n:{ca:"Bowl de pitaya",es:"Bowl de pitaya",en:"Pitaya bowl"},d:{ca:"granola de la casa i fruita de temporada",es:"granola casera y fruta de temporada",en:"homemade granola & seasonal fruit"}}
    ]},
  { id:"sandvitxos", hand:{ca:"sandvitxos",es:"sándwiches",en:"sandwiches"},
    items:[
      {n:{ca:"Sandvitx de miga",es:"Sándwich de miga",en:"Sandwich de miga"},d:{ca:"pa tou sense crosta, pernil i formatge",es:"pan sin corteza, jamón y queso",en:"soft crustless layers, ham & cheese"}},
      {n:{ca:"Sandvitx de miga vegetarià",es:"Sándwich de miga vegetariano",en:"Vegetarian sandwich de miga"},d:{ca:"formatge, pebrot dolç i ou",es:"queso, pimiento dulce y huevo",en:"cheese, sweet peppers & egg"},f:["veg"]},
      {n:{ca:"Bikini de gall dindi",es:"Bikini de pavo",en:"Turkey bikini"},d:{ca:"amb patates rostides a l'all",es:"con patatas asadas al ajo",en:"with garlic roasted potatoes"},f:["gf"]},
      {n:{ca:"Brioix de croissant",es:"Bollo de croissant",en:"Sandwich bun"},d:{ca:"pernil curat, brie, rúcula i melmelada de nabius",es:"jamón curado, brie, rúcula y mermelada de arándanos",en:"cured ham, brie, arugula & blueberry jam"}},
      {n:{ca:"English muffin de pernil, cheddar i ou",es:"English muffin de jamón, cheddar y huevo",en:"Ham, cheddar & egg English muffin"},d:{ca:"amb moniato rostit i amanida",es:"con boniato asado y ensalada",en:"with roasted sweet potato & salad"}},
      {n:{ca:"English muffin d'ou, formatge i maionesa d'alfàbrega",es:"English muffin de huevo, queso y mayonesa de albahaca",en:"Egg, cheese & basil mayo English muffin"},d:{ca:"amb moniato rostit i amanida",es:"con boniato asado y ensalada",en:"with roasted sweet potato & salad"},f:["veg"]},
      {n:{ca:"Sandvitx de llom",es:"Sándwich de lomo",en:"Sliced pork loin sandwich"},d:{ca:"ceba caramel·litzada, tomàquet sec i formatge fos, en pa de sègol",es:"cebolla caramelizada, tomate seco y queso fundido, en pan de centeno",en:"caramelised onion, sun-dried tomato & melted cheese on rye"}},
      {n:{ca:"Sandvitx de pernil serrà",es:"Sándwich de jamón serrano",en:"Serrano ham sandwich"},d:{ca:"brie i rúcula, en pa de sègol",es:"brie y rúcula, en pan de centeno",en:"brie & arugula on rye"}}
    ]},
  { id:"focaccies", hand:{ca:"focaccies",es:"focaccias",en:"focaccias"},
    intro:{ca:"De massa mare, amb patates xips.",es:"De masa madre, con patatas chips.",en:"Sourdough, served with potato chips."},
    items:[
      {n:{ca:"Focaccia clàssica",es:"Focaccia clásica",en:"Classic focaccia"},d:{ca:"pesto, mortadel·la de pistatxo i burrata",es:"pesto, mortadela de pistacho y burrata",en:"pesto, pistachio mortadella & burrata"}},
      {n:{ca:"Focaccia vegetariana",es:"Focaccia vegetariana",en:"Vegetarian focaccia"},d:{ca:"albergínia a la parmigiana i stracciatella",es:"berenjena a la parmigiana y stracciatella",en:"aubergine parmigiana & stracciatella"},f:["veg"]},
      {n:{ca:"Focaccia vegana",es:"Focaccia vegana",en:"Vegan focaccia"},d:{ca:"hummus, formatge vegà, tomàquet sec, alvocat i rúcula",es:"hummus, queso vegano, tomate seco, aguacate y rúcula",en:"hummus, vegan cheese, sun-dried tomato, avocado & arugula"},f:["vegan"]}
    ]}
];
window.ODILA_FLAGS = {
  gf:{ca:"sense gluten",es:"sin gluten",en:"gluten-free"},
  vegan:{ca:"vegà",es:"vegano",en:"vegan"},
  veganopt:{ca:"opció vegana",es:"opción vegana",en:"vegan option"},
  veg:{ca:"vegetarià",es:"vegetariano",en:"vegetarian"},
  fresh:{ca:"natural",es:"natural",en:"fresh"}
};
