const variants=[
  {
    label:'Réplica',
    category:'Réplica',
    size:'30 ml',
    available:true,
    sizes:['30 ml'],
    image:'https://framerusercontent.com/images/AJ4Rvo75Bm0thQaMva35BFYYPQ.jpg'
  },
  {
    label:'Original',
    category:'Original',
    size:'100 ml',
    available:false,
    sizes:['100 ml'],
    image:'https://framerusercontent.com/images/5beq1UCAZb4RsAJabFeY5xDQc.jpg'
  },
  {
    label:'Calidad 1.1',
    category:'1.1',
    size:'100 ml',
    available:false,
    sizes:['100 ml'],
    image:'https://framerusercontent.com/images/f3n6hrxBEk4f62CNXM1xADeIjmo.jpg'
  },
  {
    label:'Decant',
    category:'Decants',
    size:'5 ml',
    available:false,
    sizes:['5 ml'],
    image:'https://framerusercontent.com/images/XfwtNyXbU8xTeoJElZPNE588EDQ.jpg'
  }
];

// Catálogo con nombres reales y completos de cada fragancia sin abreviaciones excesivas
const names = [
  'Lacoste L.12.12 Blanc',
  'Le Labo Santal 33',
  'Lattafa Khamrah',
  'Paco Rabanne 1 Million',
  'Al Haramain Amber Oud',
  'Antonio Banderas Blue Seduction',
  'Paco Rabanne Invictus',
  'Paco Rabanne 1 Million Lucky',
  'Carolina Herrera 212 VIP',
  'Valentino Born in Roma',
  'Ariana Grande Cloud',
  'Viktor & Rolf Flowerbomb (La Bomba)',
  'Bath & Body Works Mad About You',
  'Paris Hilton Eau de Parfum',
  'Carolina Herrera CH Beauties',
  'Lattafa Yara Rosa',
  'Carolina Herrera Good Girl',
  'Escada Sorbetto Rosso',
  'Lancôme La Vie Est Belle',
  'Bath & Body Works Velvet Sugar',
  'Lacoste L.12.12 Noir',
  'Jean Paul Gaultier Le Male Elixir',
  'Lolita Lempicka Eau de Parfum',
  'Bharara Niche Femme',
  'Lattafa Yara Tous (AAA)',
  'Moschino Toy 2'
];

// Mapa de imágenes personalizadas con la botella original + decant/envase 30ml de Samblitz en WebP ultraligero
const customImages = {
  'Paco Rabanne 1 Million': './assets/products/paco_rabanne_1_million.webp',
  'Lacoste L.12.12 Blanc': './assets/products/lacoste_blanc.webp',
  'Le Labo Santal 33': './assets/products/santal_33.webp',
  'Lattafa Khamrah': './assets/products/lattafa_khamrah.webp',
  'Al Haramain Amber Oud': './assets/products/amber_oud.webp',
  'Antonio Banderas Blue Seduction': './assets/products/blue_seduction.webp',
  'Paco Rabanne Invictus': './assets/products/invictus.webp',
  'Paco Rabanne 1 Million Lucky': './assets/products/one_million_lucky.webp',
  'Carolina Herrera 212 VIP': './assets/products/two_one_two_vip.webp',
  'Carolina Herrera Good Girl': './assets/products/good_girl.webp',
  'Ariana Grande Cloud': './assets/products/cloud.webp',
  'Viktor & Rolf Flowerbomb (La Bomba)': './assets/products/flowerbomb.webp',
  'Bath & Body Works Mad About You': './assets/products/mad_about_you.webp',
  'Paris Hilton Eau de Parfum': './assets/products/paris_hilton.webp',
  'Carolina Herrera CH Beauties': './assets/products/ch_beauties.webp',
  'Lattafa Yara Rosa': './assets/products/yara_rosa.webp',
  'Valentino Born in Roma': './assets/products/born_in_roma.webp',
  'Lancôme La Vie Est Belle': './assets/products/la_vie_est_belle.webp',
  'Jean Paul Gaultier Le Male Elixir': './assets/products/le_male_elixir.webp',
  'Moschino Toy 2': './assets/products/moschino_toy_2.webp',
  'Escada Sorbetto Rosso': './assets/products/escada_sorbetto_rosso.webp',
  'Bath & Body Works Velvet Sugar': './assets/products/velvet_sugar.webp',
  'Lacoste L.12.12 Noir': './assets/products/lacoste_noir.webp',
  'Lolita Lempicka Eau de Parfum': './assets/products/lolita_lempicka.webp',
  'Bharara Niche Femme': './assets/products/bharara_niche_femme.webp',
  'Lattafa Yara Tous (AAA)': './assets/products/yara_tous.webp'
};

const defaultReplicaImage = './assets/products/template_reference.png';
const getProductImage = name => customImages[name] || defaultReplicaImage;

const products = names.map(name => [name, 'Eau de parfum', getProductImage(name)]);
const fragranceInfo = {
  'Lacoste L.12.12 Blanc': {description:'Acordes cítricos y especiados que se vuelven limpios, amaderados y ligeramente dulces; una estela fresca y pulida.',gender:'Hombre',category:'Amaderada especiada',climate:'Cálido y templado',occasion:'Diario, oficina y casual'},
  'Le Labo Santal 33': {description:'Sándalo seco, cedro, cuero suave y un matiz ahumado que construyen una firma elegante, cálida y envolvente.',gender:'Unisex',category:'Amaderada ambarada',climate:'Templado y frío',occasion:'Citas, noches y eventos elegantes'},
  'Lattafa Khamrah': {description:'Canela, dátil y praliné sobre vainilla, haba tonka y maderas; gourmand intenso, dulce y de gran presencia.',gender:'Unisex',category:'Oriental gourmand',climate:'Frío y templado',occasion:'Noches, citas y celebraciones'},
  'Paco Rabanne 1 Million': {description:'Salida especiada y cítrica con canela, cuero, ámbar y maderas; cálida, sensual y reconocible.',gender:'Hombre',category:'Amaderada especiada',climate:'Templado y frío',occasion:'Citas, fiestas y noches'},
  'Al Haramain Amber Oud': {description:'Ámbar luminoso, maderas, especias y una dulzura resinosa que deja una estela intensa y sofisticada.',gender:'Unisex',category:'Ambarada amaderada',climate:'Frío y templado',occasion:'Eventos elegantes y noche'},
  'Antonio Banderas Blue Seduction': {description:'Fruta fresca, melón y notas acuáticas con un fondo suave de madera y almizcle; ligero y fácil de llevar.',gender:'Hombre',category:'Aromática acuática',climate:'Cálido y tropical',occasion:'Diario, oficina y casual'},
  'Paco Rabanne Invictus': {description:'Toronja y notas marinas sobre laurel, jazmín, madera de guayaco y ámbar gris; fresco, deportivo y energético.',gender:'Hombre',category:'Acuática amaderada',climate:'Cálido y templado',occasion:'Diario, gimnasio y casual'},
  'Paco Rabanne 1 Million Lucky': {description:'Ciruela, miel y avellana con flor blanca, pachulí y maderas; dulce, juvenil y con un fondo cremoso.',gender:'Hombre',category:'Amaderada gourmand',climate:'Templado y frío',occasion:'Citas, fiestas y noche'},
  'Carolina Herrera 212 VIP': {description:'Maracuyá, ron y almizcle sobre gardenia y vainilla; una mezcla dulce, urbana y festiva.',gender:'Hombre',category:'Ambarada afrutada',climate:'Templado y cálido',occasion:'Fiestas, eventos y noche'},
  'Valentino Born in Roma': {description:'Acordes minerales y salados con hojas de violeta, jengibre y vetiver ahumado; moderno y refinado.',gender:'Hombre',category:'Amaderada aromática',climate:'Templado y frío',occasion:'Oficina, citas y eventos elegantes'},
  'Ariana Grande Cloud': {description:'Lavanda, pera y bergamota sobre crema de coco, praliné, vainilla y almizcle; dulce, aireada y reconfortante.',gender:'Mujer',category:'Gourmand floral',climate:'Templado y frío',occasion:'Diario, citas y casual'},
  'Viktor & Rolf Flowerbomb (La Bomba)': {description:'Un ramo opulento de jazmín, rosa y orquídea con té, pachulí y vainilla; floral, envolvente y femenino.',gender:'Mujer',category:'Floral ambarada',climate:'Templado y frío',occasion:'Citas, eventos y noche'},
  'Bath & Body Works Mad About You': {description:'Frutas rojas y cítricos con peonía, jazmín y vainilla; romántica, dulce y luminosa.',gender:'Mujer',category:'Floral frutal',climate:'Cálido y templado',occasion:'Diario, citas y casual'},
  'Paris Hilton Eau de Parfum': {description:'Manzana, melocotón y frutas tropicales con fresia, mimosa y almizcle; femenina, brillante y coqueta.',gender:'Mujer',category:'Floral frutal',climate:'Cálido y templado',occasion:'Diario, brunch y casual'},
  'Carolina Herrera CH Beauties': {description:'Frutas rojas, flores suaves y vainilla ambarada con un fondo cálido y femenino.',gender:'Mujer',category:'Floral frutal',climate:'Templado y cálido',occasion:'Diario, citas y eventos'},
  'Lattafa Yara Rosa': {description:'Orquídea, heliotropo y frutas tropicales sobre vainilla, sándalo y almizcle; cremosa, dulce y envolvente.',gender:'Mujer',category:'Gourmand floral',climate:'Templado y frío',occasion:'Diario, citas y casual'},
  'Carolina Herrera Good Girl': {description:'Almendra y café contrastan con jazmín, tuberosa, tonka y cacao; sensual, elegante y de gran carácter.',gender:'Mujer',category:'Floral oriental',climate:'Templado y frío',occasion:'Citas, eventos elegantes y noche'},
  'Escada Sorbetto Rosso': {description:'Sandía jugosa, cítricos y notas acuáticas con flores suaves y un fondo almizclado; refrescante y veraniega.',gender:'Mujer',category:'Floral frutal',climate:'Cálido y tropical',occasion:'Playa, vacaciones y casual'},
  'Lancôme La Vie Est Belle': {description:'Iris y flores blancas sobre vainilla, praliné y pachulí; dulce, luminosa y elegantemente envolvente.',gender:'Mujer',category:'Floral gourmand',climate:'Templado y frío',occasion:'Citas, oficina y eventos'},
  'Bath & Body Works Velvet Sugar': {description:'Frutos rojos, azúcar y vainilla con jazmín y almizcle; golosa, suave y juvenil.',gender:'Mujer',category:'Gourmand frutal',climate:'Cálido y templado',occasion:'Diario, casual y citas'},
  'Lacoste L.12.12 Noir': {description:'Sandía y albahaca sobre chocolate oscuro, cumarina y pachulí; fresca al inicio y cálida al secar.',gender:'Hombre',category:'Aromática amaderada',climate:'Templado y cálido',occasion:'Diario, casual y noche'},
  'Jean Paul Gaultier Le Male Elixir': {description:'Lavanda y menta sobre haba tonka, miel, vainilla y tabaco; dulce, potente y seductora.',gender:'Hombre',category:'Ambarada gourmand',climate:'Frío y templado',occasion:'Citas, fiestas y noche'},
  'Lolita Lempicka Eau de Parfum': {description:'Anís, violeta y regaliz con cereza, vainilla, almizcle y maderas; dulce, misteriosa y distintiva.',gender:'Mujer',category:'Floral gourmand',climate:'Frío y templado',occasion:'Citas, noche y eventos'},
  'Bharara Niche Femme': {description:'Frutas jugosas y flores blancas sobre vainilla, ámbar y maderas; femenina, dulce y de estela marcada.',gender:'Mujer',category:'Floral frutal ambarada',climate:'Templado y frío',occasion:'Citas, celebraciones y noche'},
  'Lattafa Yara Tous (AAA)': {description:'Mango, coco y maracuyá con jazmín, vainilla y almizcle; tropical, cremosa y alegre.',gender:'Mujer',category:'Floral tropical',climate:'Cálido y tropical',occasion:'Playa, vacaciones y casual'},
  'Moschino Toy 2': {description:'Mandarina, manzana y magnolia sobre peonía, jazmín, sándalo y almizcle; limpia, floral y juguetona.',gender:'Mujer',category:'Floral almizclada',climate:'Cálido y templado',occasion:'Diario, oficina y casual'}
};
const getFragranceInfo = name => fragranceInfo[name] || {description:'Una composición equilibrada de salida luminosa, corazón aromático y fondo amaderado de larga duración.',gender:'Unisex',category:'Eau de parfum',climate:'Templado',occasion:'Diario, casual y citas'};
const cart = [];
const price = 20000;
let filter = 'replica';
const money = n => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n);
const chosen = () => 0; // Siempre toma la opción activa: Réplica 30 ml

function add(name, variant, size) {
  const v = variants.find(x => x.label === variant) || variants[0];
  if (!v.available) {
    alert(`${v.label} no está disponible por el momento. Únicamente manejamos Réplica 30 ml.`);
    return;
  }
  const itemSize = size || v.size || '30 ml';
  const item = cart.find(x => x.name === name && x.variant === v.label && x.size === itemSize);
  if (item) {
    item.qty++;
  } else {
    cart.push({ name, variant: v.label, size: itemSize, category: v.category, qty: 1, price });
  }
  renderCart();
  document.querySelector('#cart').classList.add('open');
}

function renderProducts() {
  const v = variants[0]; // Réplica activa 30 ml
  document.querySelector('#products').innerHTML = products.map(([name, type, imgUrl]) => `
    <article class="card" data-name="${name}">
      <button class="visual" data-name="${name}" data-variant="${v.label}" aria-label="Ver fragancia ${name}">
        <img src="${imgUrl}" alt="${name}" loading="lazy" decoding="async" width="896" height="1200">
        <span class="progress"></span>
        <span class="availability" style="display:none"></span>
      </button>
      <h3 class="product-title" data-name="${name}">${name}</h3>
      <div class="desc" data-name="${name}">
        <strong>${v.label}</strong>
        <span>Presentaciones: ${v.size}</span>
      </div>
      <small>${money(price)}</small>
      <button class="gold add" data-name="${name}" data-variant="${v.label}">Añadir al carrito</button>
    </article>
  `).join('');

  document.querySelectorAll('.card').forEach(card => {
    // Al dar clic en cualquier parte de la tarjeta (excepto añadir al carrito) lleva al detalle
    card.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      if (e.target.closest('.add')) return;
      const productName = card.dataset.name;
      showDetail(productName, 'Réplica');
    });
  });

  document.querySelectorAll('.add').forEach(b => b.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    add(b.dataset.name, b.dataset.variant || 'Réplica', '30 ml');
  });
}

const viewSections = {
  versiones: document.querySelector('#versiones'),
  garantia: document.querySelector('#garantia'),
  faq: document.querySelector('#faq'),
  detail: document.querySelector('#detail')
};

function hideAllViews() {
  Object.values(viewSections).forEach(sec => {
    if(sec) sec.hidden = true;
  });
}

function showView(viewKey) {
  const hero = document.querySelector('.hero');
  const collection = document.querySelector('.collection');

  // Close mobile menu if open
  const navLinks = document.querySelector('.nav-links');
  if(navLinks) navLinks.classList.remove('is-open');

  if(viewKey === 'productos') {
    // Show main catalog and hero
    hideAllViews();
    if(hero) hero.hidden = false;
    if(collection) collection.hidden = false;

    // Scroll directly so "COLECCIÓN PRIVADA" starts right beneath the fixed navbar
    if(collection) {
      const navHeight = document.querySelector('.nav')?.offsetHeight || 75;
      const targetY = collection.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
    }
  } else if(viewSections[viewKey]) {
    // Standalone view: hide hero, collection and other views so only header, this view, and footer are visible
    hideAllViews();
    if(hero) hero.hidden = true;
    if(collection) collection.hidden = true;

    const targetSec = viewSections[viewKey];
    targetSec.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Attach click listeners to all navigation links (header & footer) with data-view
document.querySelectorAll('[data-view]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const view = link.dataset.view;
    showView(view);
  });
});

// Brand click resets to top / collection
document.querySelector('.brand')?.addEventListener('click', e => {
  e.preventDefault();
  showView('productos');
});

function showDetail(name,selected){
  const v=variants.find(x=>x.label===selected)||variants[0];
  const info=getFragranceInfo(name);
  const detail=document.querySelector('#detail');
  const hero=document.querySelector('.hero');
  const collection=document.querySelector('.collection');
  
  // Hide landing sections and other views
  hideAllViews();
  if(hero) hero.hidden = true;
  if(collection) collection.hidden = true;

  const activeVariants = variants.filter(x => x.available);
  detail.hidden=false;
  detail.innerHTML=`
    <button class="back" id="back">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      Volver a la colección
    </button>
    <div class="detail-grid">
      <div class="detail-image">
        <img src="${getProductImage(name)}" alt="${name}">
      </div>
      <div class="detail-copy">
        <p class="eyebrow">DETALLE DE FRAGANCIA</p>
        <h2>${name}</h2>
        <p class="detail-description">${info.description}</p>
        <div class="detail-facts">
          <div><b>Género</b><span>${info.gender}</span></div>
          <div><b>Categoría</b><span>${info.category}</span></div>
          <div><b>Clima ideal</b><span>${info.climate}</span></div>
          <div><b>Ocasión</b><span>${info.occasion}</span></div>
        </div>
        <div class="variant-picker">
          <p>Versión Disponible</p>
          <button type="button" class="variant selected" data-variant="Réplica">Réplica Exclusiva<small>30 ml</small></button>
        </div>
        <div class="size-picker">
          <p>Medida</p>
          <button type="button" class="size-option selected" data-size="30 ml">30 ml (Disponible)</button>
        </div>
        <label class="quantity">Cantidad <input id="detailQty" type="number" min="1" value="1"></label>
        <strong class="detail-price">${money(price)}</strong>
        <button class="gold full" id="detailAdd">Añadir al carrito · ${money(price)}</button>
      </div>
    </div>
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Prevenir cualquier movimiento o salto al hacer clic en las opciones de versión o tamaño
  detail.querySelectorAll('.variant, .size-option').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
    });
  });

  const addBtn = detail.querySelector('#detailAdd');
  if(addBtn){
    addBtn.onclick=()=>{
      const qty = parseInt(detail.querySelector('#detailQty')?.value || '1', 10);
      for(let k = 0; k < qty; k++) {
        add(name, 'Réplica', '30 ml');
      }
    };
  }

  const backBtn = detail.querySelector('#back');
  if(backBtn){
    backBtn.onclick=()=>{
      showView('productos');
    };
  }
}

function renderCart(){
  document.querySelector('#cartCount').textContent=cart.reduce((a,x)=>a+x.qty,0);
  document.querySelector('#cartItems').innerHTML=cart.length?cart.map((x,i)=>`
    <div class="item">
      <div class="item-row">
        <span><b>${x.name}</b><br><small>${x.variant} · ${x.size} · ${money(x.price)}</small></span>
        <button data-remove="${i}">Eliminar</button>
      </div>
      <div class="qty"><button data-dec="${i}">−</button> ${x.qty} <button data-inc="${i}">+</button></div>
    </div>
  `).join(''):'<p>Tu carrito está vacío.</p>';
  
  const total = cart.reduce((a,x)=>a+x.price*x.qty,0);
  document.querySelector('#cartTotal').textContent=money(total);
  
  document.querySelectorAll('[data-inc]').forEach(b=>b.onclick=()=>{cart[b.dataset.inc].qty++;renderCart()});
  document.querySelectorAll('[data-dec]').forEach(b=>b.onclick=()=>{cart[b.dataset.dec].qty--;if(!cart[b.dataset.dec].qty)cart.splice(b.dataset.dec,1);renderCart()});
  document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{cart.splice(b.dataset.remove,1);renderCart()});
}

document.querySelector('#confirmOrder')?.addEventListener('click', () => {
  if (!cart.length) {
    alert('Tu carrito está vacío. Elige tu fragancia favorita.');
    return;
  }
  const lines = cart.map(x => `• ${x.qty}x ${x.name} (${x.variant} ${x.size}) - ${money(x.price * x.qty)}`);
  const total = cart.reduce((a, x) => a + x.price * x.qty, 0);
  const text = `¡Hola Samblitz! Deseo realizar el siguiente pedido:\n\n${lines.join('\n')}\n\n*Total a pagar:* ${money(total)}\n\n¿Me confirman disponibilidad para acordar el despacho?`;
  const whatsappUrl = `https://wa.me/573163571026?text=${encodeURIComponent(text)}`;
  window.location.href = whatsappUrl;
});

document.querySelector('#typeFilter').onchange=e=>{filter=e.target.value;renderProducts()};
document.querySelector('#cartToggle').onclick=()=>document.querySelector('#cart').classList.add('open');
document.querySelector('#closeCart').onclick=()=>document.querySelector('#cart').classList.remove('open');
renderProducts();
renderCart();
