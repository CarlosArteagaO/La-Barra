const drinks = [
 {name:"Amaretto Sour",category:"Bajativos",number:"01",desc:"Almendra dulce, limón fresco y una espuma delicada.",tags:["cítrico","dulce"],profile:"Cítrico · Equilibrado",ingredients:["60 ml de amaretto","25 ml de jugo de limón","5–10 ml de jarabe de goma","Clara de huevo (opcional)"],method:["Agrega los ingredientes a una coctelera.","Si usas clara, haz un primer batido sin hielo.","Añade hielo y bate enérgicamente.","Cuela en una copa fría y decora con limón."],tip:"Ajusta el jarabe según tu gusto. La clara aporta una textura más sedosa."},
 {name:"Amaretto Kahlúa Velvet",category:"Bajativos",number:"02",desc:"Un encuentro cremoso de almendra y café.",tags:["dulce","café"],profile:"Cremoso · Café · Dulce",ingredients:["45 ml de amaretto","30 ml de Kahlúa","30 ml de crema de leche","Hielo"],method:["Agrega todo a una coctelera con hielo.","Bate hasta enfriar bien.","Cuela en una copa pequeña o vaso bajo frío.","Termina con un toque de café molido, si tienes."],tip:"Para un resultado menos dulce, reduce un poco el Kahlúa y aumenta la crema."},
 {name:"Amaretto White Russian",category:"Bajativos",number:"03",desc:"Café, almendra y crema en un trago envolvente.",tags:["dulce","café"],profile:"Cremoso · Intenso",ingredients:["30 ml de vodka","30 ml de Kahlúa","25 ml de amaretto","30 ml de crema de leche","Hielo"],method:["Llena un vaso bajo con hielo.","Añade vodka, Kahlúa y amaretto.","Vierte la crema lentamente por encima.","Remueve suavemente antes de beber."],tip:"Puedes dejar la crema en capas para una presentación más vistosa."},
 {name:"Godfather",category:"Licores",number:"04",desc:"Whisky y amaretto: simple, cálido y con carácter.",tags:["dulce"],profile:"Robusto · Almendrado",ingredients:["45 ml de whisky","25 ml de amaretto","Hielo grande"],method:["Pon un hielo grande en un vaso bajo.","Añade whisky y amaretto.","Remueve suavemente durante unos segundos."],tip:"Prueba con más whisky si prefieres un final menos dulce."},
 {name:"Espresso Martini casero",category:"Vodka",number:"05",desc:"Vodka y café con un perfil intenso y elegante.",tags:["café","dulce"],profile:"Café · Intenso",ingredients:["40 ml de vodka","25 ml de Kahlúa","30 ml de café fuerte, frío","5 ml de jarabe de goma (opcional)"],method:["Enfría el café antes de preparar.","Agrega todo a una coctelera con hielo.","Bate fuerte para lograr una capa de espuma.","Cuela en una copa fría."],tip:"El café recién preparado y ya frío ayuda a conseguir mejor aroma y textura."},
 {name:"Pisco Sour",category:"Pisco",number:"06",desc:"El clásico cítrico, fresco y con espuma suave.",tags:["cítrico"],profile:"Cítrico · Fresco",ingredients:["60 ml de pisco","30 ml de jugo de limón","20 ml de jarabe de goma","Clara de huevo (opcional)","Hielo"],method:["Bate pisco, limón, jarabe y clara sin hielo si la usas.","Añade hielo y vuelve a batir.","Cuela en una copa fría."],tip:"Prueba el equilibrio antes de servir: los limones varían bastante en acidez."},
 {name:"Gin Tonic",category:"Gin",number:"07",desc:"Botánicos, burbujas y un toque cítrico.",tags:["refrescante"],profile:"Seco · Refrescante",ingredients:["50 ml de gin","150 ml de agua tónica, aproximadamente","Hielo abundante","Rodaja de limón o naranja"],method:["Llena una copa o vaso alto con hielo.","Añade el gin.","Completa lentamente con tónica fría.","Remueve una sola vez y decora con cítrico."],tip:"Evita remover demasiado para conservar las burbujas."},
 {name:"Moscow Mule casero",category:"Vodka",number:"08",desc:"Vodka, limón y ginger ale con un final especiado.",tags:["cítrico","refrescante"],profile:"Cítrico · Burbujeante",ingredients:["50 ml de vodka","15 ml de jugo de limón","120 ml de ginger ale","Hielo","Menta (opcional)"],method:["Llena un vaso alto con hielo.","Agrega vodka y jugo de limón.","Completa con ginger ale frío.","Remueve suavemente y decora con menta."],tip:"Con ginger ale queda más suave y dulce que la versión tradicional con ginger beer."},
 {name:"Café con amaretto",category:"Bajativos",number:"09",desc:"Una pausa cálida con notas de almendra.",tags:["café","dulce"],profile:"Cálido · Dulce",ingredients:["120 ml de café caliente","25 ml de amaretto","Azúcar o miel, opcional","Un toque de crema, opcional"],method:["Prepara el café a tu gusto.","Añade el amaretto y remueve.","Ajusta dulzor si hace falta.","Termina con crema si quieres una versión más golosa."],tip:"Ideal como cóctel de sobremesa; sirve en una taza resistente al calor."},
 {name:"Vodka Tonic",category:"Vodka",number:"10",desc:"Ligero, limpio y fácil de personalizar.",tags:["refrescante"],profile:"Seco · Fresco",ingredients:["45 ml de vodka","120–150 ml de agua tónica","Hielo","Limón o naranja"],method:["Llena un vaso alto con hielo.","Añade vodka y el cítrico.","Completa con tónica fría.","Remueve suavemente."],tip:"Una piel de naranja aporta aroma sin sumar demasiado dulzor."},
 {name:"Daiquiri de la casa",category:"Ron",number:"11",desc:"Ron y limón, directo al punto y muy refrescante.",tags:["cítrico"],profile:"Cítrico · Equilibrado",ingredients:["60 ml de ron","25 ml de jugo de limón","15 ml de jarabe de goma"],method:["Agrega los ingredientes a una coctelera con hielo.","Bate hasta que esté bien frío.","Cuela en una copa fría."],tip:"Es una versión sencilla con lo que tienes; ajusta el jarabe al gusto."},
 {name:"Gin Sour",category:"Gin",number:"12",desc:"Gin y limón con una textura suave y aromática.",tags:["cítrico"],profile:"Cítrico · Botánico",ingredients:["60 ml de gin","25 ml de jugo de limón","15 ml de jarabe de goma","Clara de huevo (opcional)"],method:["Agrega gin, limón, jarabe y clara a la coctelera.","Bate sin hielo si usas clara.","Añade hielo y vuelve a batir.","Cuela en una copa fría."],tip:"Sin clara también queda excelente, más liviano y directo."},

 {name:"Piscola",category:"Pisco",number:"13",desc:"El clásico chileno, simple y siempre bienvenido.",tags:["refrescante"],profile:"Clásico chileno · Refrescante",ingredients:["50 ml de pisco","120–150 ml de bebida cola","Hielo abundante","Limón, opcional"],method:["Llena un vaso alto con hielo.","Añade el pisco.","Completa con bebida cola y remueve suavemente.","Agrega una rodaja de limón si te gusta."],tip:"Ajusta la proporción de cola según qué tan intenso te guste."},
 {name:"Mojito",category:"Ron",number:"14",desc:"Menta, limón y burbujas: fresco y aromático.",tags:["cítrico","refrescante"],profile:"Herbal · Cítrico · Fresco",ingredients:["50 ml de ron blanco","25 ml de jugo de limón","2 cucharaditas de azúcar","8–10 hojas de menta","Soda","Hielo"],method:["Pon el azúcar, el limón y la menta en un vaso alto.","Presiona la menta suavemente, sin triturarla demasiado.","Añade ron y hielo.","Completa con soda y remueve con cuidado."],tip:"Da una palmada a la menta antes de decorar para liberar sus aromas."},
 {name:"Aperol Spritz",category:"Aperitivos",number:"15",desc:"Naranja, burbujas y un amargor amable.",tags:["aperitivo","refrescante"],profile:"Amargo-dulce · Burbujeante",ingredients:["60 ml de Aperol","90 ml de espumante brut o Prosecco","30 ml de soda","Hielo","Rodaja de naranja"],method:["Llena una copa grande con hielo.","Agrega Aperol y espumante.","Completa con soda y mezcla suavemente.","Decora con una rodaja de naranja."],tip:"Mantén el espumante y la soda bien fríos para conservar las burbujas."},
 {name:"Ramazzotti Rosato",category:"Aperitivos",number:"16",desc:"Aperitivo italiano de perfil frutal, servido con arándanos y burbujas para un resultado fresco y aromático.",tags:["aperitivo","frutal","refrescante"],profile:"Frutal · Aromático",ingredients:["60 ml de Ramazzotti Rosato","90 ml de espumante brut o soda","Un puñado pequeño de arándanos","Hielo","Gajo de limón, opcional"],method:["Llena una copa con hielo.","Añade el Ramazzotti Rosato.","Completa con espumante o soda, según prefieras más seco o más ligero.","Incorpora los arándanos y remueve suavemente."],tip:"Aplasta suavemente un par de arándanos para aportar más color y sabor frutal."},
 {name:"Ramazzotti Violetto",category:"Aperitivos",number:"17",desc:"Ramazzotti Violetto con arándanos y romero: un aperitivo floral y frutal con un toque herbal y aromático.",tags:["aperitivo","frutal"],profile:"Floral · Frutal · Herbal",ingredients:["60 ml de Ramazzotti Violetto","90 ml de soda o espumante brut","Arándanos","1 ramita de romero","Hielo"],method:["Llena una copa con hielo.","Vierte el Ramazzotti Violetto.","Completa con soda o espumante.","Añade arándanos y una ramita de romero; remueve suavemente."],tip:"Frota suavemente el romero entre los dedos antes de ponerlo en la copa para liberar su aroma."},
 {name:"Tom Collins",category:"Gin",number:"18",desc:"Gin, limón y soda en un trago largo y chispeante.",tags:["cítrico","refrescante"],profile:"Cítrico · Seco · Burbujeante",ingredients:["50 ml de gin","25 ml de jugo de limón","15 ml de jarabe de goma","Soda para completar","Hielo","Rodaja de limón"],method:["Agrega gin, limón y jarabe a una coctelera con hielo.","Bate brevemente y cuela en un vaso alto con hielo fresco.","Completa con soda.","Remueve con cuidado y decora con limón."],tip:"Prueba antes de servir y ajusta el jarabe si el limón está especialmente ácido."},
 {name:"Tanqueray Pink & Tonic",category:"Gin",number:"19",desc:"Tu gin rosado Tanqueray, acompañado de tónica y frutos rojos para un cóctel fresco, frutal y de color atractivo.",tags:["frutal","refrescante"],profile:"Frutal · Cítrico · Burbujeante",ingredients:["45 ml de gin Tanqueray Pink (gin rosado)","120–150 ml de agua tónica fría","Un toque de jugo de limón, opcional","Hielo abundante","Frambuesas o frutillas para decorar, opcional"],method:["Llena una copa balón o vaso alto con hielo.","Añade el Tanqueray Pink.","Completa con agua tónica fría y agrega unas gotas de limón si te gusta más cítrico.","Remueve una sola vez y decora con frambuesas o frutillas."],tip:"Prueba primero con tónica clásica para apreciar el perfil del gin; si prefieres más dulzor y color, usa tónica rosada."},
 {name:"Vino",category:"Vinos",number:"20",desc:"Una copa de vino, servida a la temperatura adecuada.",tags:["vino"],profile:"Según variedad · Para disfrutar sin prisa",ingredients:["Vino tinto o blanco disponible","Copa adecuada"],method:["Elige la variedad disponible.","Sirve una medida moderada en una copa limpia.","Como orientación, sirve los blancos frescos y los tintos ligeramente frescos, no demasiado calientes."],tip:"Consulta qué etiqueta hay disponible en La Barra ese día."},
 {name:"Cervezas disponibles",category:"Cervezas",number:"21",desc:"Cervezas frías para disfrutar en casa.",tags:["cerveza"],profile:"Disponibilidad de la casa",ingredients:["Cervezas frías disponibles en casa"],method:["Elige tu favorita y sírvela bien fría."],tip:"Simplemente disfruta bien fría."}

 ,{name:"Blue Curaçao",category:"Bajativos",number:"22",desc:"Licor de naranja de color azul intenso, ideal para dar un toque cítrico y vistoso.",tags:["naranja"],profile:"Cítrico · Naranja",ingredients:["Blue Curaçao Tres Plumas","Hielo, opcional"],method:["Sirve una medida pequeña en un vaso corto.","También puedes servirlo sobre hielo."],tip:"Su color y sabor también funcionan muy bien en cócteles."}
 ,{name:"Cacao",category:"Bajativos",number:"23",desc:"Licor dulce con notas profundas de cacao.",tags:["chocolate"],profile:"Dulce · Cacao",ingredients:["Licor de Cacao Tres Plumas","Hielo, opcional"],method:["Sirve una medida pequeña en un vaso corto.","Disfrútalo solo o con hielo."],tip:"Ideal para cerrar la comida con un toque dulce."}
 ,{name:"Amaretto Tres Plumas",category:"Bajativos",number:"24",desc:"Licor de almendra dulce y aromático.",tags:["almendra"],profile:"Dulce · Almendrado",ingredients:["Amaretto Tres Plumas","Hielo, opcional"],method:["Sirve una medida pequeña en un vaso corto.","Disfrútalo solo o con hielo."],tip:"También puedes usarlo como base para cócteles."}
 ,{name:"Menta",category:"Bajativos",number:"25",desc:"Licor de menta fresco, intenso y herbal.",tags:["menta"],profile:"Herbal · Fresco",ingredients:["Licor de Menta Tres Plumas","Hielo, opcional"],method:["Sirve una medida pequeña bien fría.","Puedes servirlo solo o sobre hielo."],tip:"Su perfil fresco lo hace ideal para la sobremesa."}
 ,{name:"Café",category:"Bajativos",number:"26",desc:"Licor con notas tostadas de café, perfecto para después de comer.",tags:["café"],profile:"Café · Intenso",ingredients:["Licor de Café Tres Plumas","Hielo, opcional"],method:["Sirve una medida pequeña en un vaso corto.","Disfrútalo solo o con hielo."],tip:"Combina muy bien con postres de chocolate."}
 ,{name:"Melón",category:"Bajativos",number:"27",desc:"Licor frutal de melón, dulce y aromático.",tags:["frutal"],profile:"Frutal · Dulce",ingredients:["Licor de Melón Tres Plumas","Hielo, opcional"],method:["Sirve una medida pequeña bien fría.","Puedes servirlo solo o sobre hielo."],tip:"Una opción frutal y fresca para la sobremesa."}

];
const grid=document.querySelector("#cocktails");
const dialog=document.querySelector("#recipe-dialog");
const content=document.querySelector("#recipe-content");
const categoryNav=document.querySelector(".filters");
const categoryNames=["Gin","Pisco","Ron","Vodka","Aperitivos","Licores","Bajativos","Vinos","Cervezas"];
const categoryIntro={
 Gin:"Cócteles frescos y aromáticos preparados con gin.",
 Pisco:"Clásicos y favoritos preparados con pisco.",
 Ron:"Preparaciones frescas y tropicales con ron.",
 Vodka:"Cócteles versátiles, suaves y llenos de carácter.",
 Aperitivos:"Opciones ligeras y aromáticas para comenzar.",
 Licores:"Sabores dulces, intensos y para disfrutar sin prisa.",
 Bajativos:"Pequeñas copas para cerrar la sobremesa.",
 Vinos:"Las variedades disponibles para disfrutar en casa.",
 Cervezas:"Revisa las variedades frías disponibles en casa."
};
let currentCategory=null;
let categoryHeader=document.querySelector("#category-header");
if(!categoryHeader){
 categoryHeader=document.createElement("section");
 categoryHeader.id="category-header";
 categoryHeader.className="category-header";
 categoryHeader.hidden=true;
 categoryHeader.innerHTML=`<button type="button" class="back-categories">← Volver a categorías</button><p class="eyebrow">LA BARRA · CATEGORÍA</p><h2 id="category-title"></h2><p id="category-description"></p>`;
 categoryNav.insertAdjacentElement("afterend",categoryHeader);
}
function showCategories(){
 currentCategory=null;
 categoryNav.hidden=false;
 categoryHeader.hidden=true;
 grid.innerHTML="";
 grid.hidden=true;
}
function showCategory(name){
 currentCategory=name;
 categoryNav.hidden=true;
 categoryHeader.hidden=false;
 grid.hidden=false;
 document.querySelector("#category-title").textContent=name;
 document.querySelector("#category-description").textContent=categoryIntro[name]||"Explora las opciones de esta categoría.";
 render(name);
 categoryHeader.scrollIntoView({behavior:"smooth",block:"start"});
}
function render(category){
 grid.innerHTML="";
 const items=drinks.filter(d=>d.category===category);
 if(!items.length){
  grid.innerHTML='<p class="empty-category">Pronto agregaremos opciones a esta categoría.</p>';
  return;
 }
 items.forEach(d=>{
  const card=document.createElement("article");
  card.className="cocktail-card";card.tabIndex=0;card.setAttribute("role","button");
  card.innerHTML=`<span class="card-number">${d.number} / ${d.category.toUpperCase()}</span><h3>${d.name}</h3><p class="desc">${d.desc}</p><span class="view-recipe">Ver receta ↗</span>`;
  const open=()=>showRecipe(d);
  card.addEventListener("click",open);
  card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open();}});
  grid.appendChild(card);
 });
}
function showRecipe(d){
 content.innerHTML=`<span class="recipe-kicker">${d.number} · ${d.category} · ${d.profile}</span><h2>${d.name}</h2><p class="recipe-desc">${d.desc}</p><div class="recipe-columns"><div><h3>Ingredientes</h3><ul>${d.ingredients.map(x=>`<li>${x}</li>`).join("")}</ul></div><div><h3>Preparación</h3><ol>${d.method.map(x=>`<li>${x}</li>`).join("")}</ol></div></div><p class="recipe-tip"><strong>Tip de la casa:</strong> ${d.tip}</p>`;
 dialog.showModal();
}
categoryNav.addEventListener("click",e=>{
 const button=e.target.closest(".category-card");
 if(!button)return;
 const name=button.dataset.filter;
 if(name==="Todos"){showCategories();return;}
 showCategory(name);
});
categoryHeader.querySelector(".back-categories").addEventListener("click",()=>{
 showCategories();
 document.querySelector("#carta").scrollIntoView({behavior:"smooth"});
});
document.querySelector(".close").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});
showCategories();
