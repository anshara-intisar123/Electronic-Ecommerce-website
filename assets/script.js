const CATEGORIES = [
  {id:'smartphones', name:'Smartphones', icon:'phone'},
  {id:'laptops', name:'Laptops', icon:'laptop'},
  {id:'desktops', name:'Desktops', icon:'desktop'},
  {id:'tablets', name:'Tablets', icon:'tablet'},
  {id:'monitors', name:'Monitors', icon:'monitor'},
  {id:'gaming', name:'Gaming', icon:'gamepad'},
  {id:'headphones', name:'Headphones', icon:'headphones'},
  {id:'speakers', name:'Speakers', icon:'speaker'},
  {id:'cameras', name:'Cameras', icon:'camera'},
  {id:'smartwatches', name:'Smartwatches', icon:'watch'},
  {id:'smart-home', name:'Smart Home', icon:'home'},
  {id:'accessories', name:'Accessories', icon:'accessory'},
  {id:'chargers-cables', name:'Chargers & Cables', icon:'cable'},
  {id:'components', name:'Components', icon:'chip'},
];
const BRANDS = [
  {id:'nexbyte', name:'Nexbyte', desc:'Flagship smartphones and tablets engineered for speed and everyday reliability.'},
  {id:'orion', name:'Orion', desc:'Performance laptops and desktops built for creators, engineers, and gamers.'},
  {id:'kryon', name:'Kryon', desc:'Precision audio — headphones and speakers tuned by studio engineers.'},
  {id:'vantix', name:'Vantix', desc:'Competitive gaming gear: peripherals, monitors, and PC components.'},
  {id:'halcyon', name:'Halcyon', desc:'Minimalist smart home and wearable technology for connected living.'},
  {id:'pulse', name:'Pulse', desc:'Fast-charging power accessories and rugged everyday cables.'},
  {id:'draven', name:'Draven', desc:'Imaging systems — mirrorless cameras, lenses, and creator tools.'},
  {id:'arcadia', name:'Arcadia', desc:'Displays and monitors engineered for colour accuracy and refresh rate.'},
];
let PID = 1000;
function P(cat, brand, name, price, old, rating, reviews, stock, specs, tags, colors){
  return {id: PID++, category:cat, brand, name, price, old:old||null, rating, reviews, stock, specs, tags:tags||[], colors: colors||null};
}
const PRODUCTS = [
  // Smartphones
  P('smartphones','Nexbyte','Nexbyte Aria 14 Pro',1099,1249,4.8,2140,'in',{Display:'6.7" LTPO OLED, 120Hz',Processor:'Nexbyte X4 Octa-core',RAM:'12GB',Storage:'256GB',Camera:'50MP Triple, 8K video',Battery:'5000mAh, 65W',OS:'VertexOS 6',Connectivity:'5G / Wi-Fi 7 / NFC'},['new','featured','bestseller'],['#1a2245','#8b93a8','#c9a15a']),
  P('smartphones','Nexbyte','Nexbyte Aria 14',799,899,4.6,1810,'in',{Display:'6.4" OLED, 120Hz',Processor:'Nexbyte X4',RAM:'8GB',Storage:'128GB',Camera:'48MP Dual',Battery:'4600mAh, 45W',OS:'VertexOS 6',Connectivity:'5G / Wi-Fi 6E'},['bestseller'],['#1a2245','#c9a15a']),
  P('smartphones','Halcyon','Halcyon Slate S3',549,629,4.4,960,'in',{Display:'6.5" IPS LCD, 90Hz',Processor:'Halcyon H7',RAM:'8GB',Storage:'128GB',Camera:'32MP Dual',Battery:'5200mAh, 33W',OS:'VertexOS 6',Connectivity:'5G / Wi-Fi 6'},['trending'],['#2f6bff','#101317']),
  P('smartphones','Orion','Orion Flux Mini',429,null,4.2,540,'low',{Display:'6.1" OLED, 90Hz',Processor:'Orion O5',RAM:'6GB',Storage:'128GB',Camera:'24MP Single',Battery:'4200mAh, 25W',OS:'VertexOS 6',Connectivity:'5G'},[],['#101317']),
  // Laptops
  P('laptops','Orion','Orion Forge 16 Studio',2199,2499,4.9,860,'in',{Display:'16" 3.2K OLED, 165Hz',Processor:'Orion Core Ultra 9',RAM:'32GB LPDDR5',Storage:'1TB NVMe SSD',GPU:'RTX 4070 12GB',Battery:'99Wh, up to 11h',OS:'VertexOS Desktop',Connectivity:'Wi-Fi 7 / Thunderbolt 5'},['new','featured'],['#101317','#c9ced8']),
  P('laptops','Orion','Orion Forge 14 Ultralight',1399,1599,4.7,1320,'in',{Display:'14" 2.8K IPS, 90Hz',Processor:'Orion Core Ultra 7',RAM:'16GB',Storage:'512GB NVMe SSD',GPU:'Integrated',Battery:'70Wh, up to 16h',OS:'VertexOS Desktop',Connectivity:'Wi-Fi 6E / Thunderbolt 4'},['bestseller'],['#101317','#8b93a8']),
  P('laptops','Arcadia','Arcadia Canvas Pro 15',1749,null,4.6,410,'in',{Display:'15.6" 4K Touch OLED',Processor:'Orion Core Ultra 7',RAM:'16GB',Storage:'1TB NVMe SSD',GPU:'RTX 4060 8GB',Battery:'80Wh, up to 9h',OS:'VertexOS Desktop',Connectivity:'Wi-Fi 6E'},['trending'],['#101317']),
  P('laptops','Halcyon','Halcyon Air 13',999,1099,4.3,780,'in',{Display:'13.3" IPS, 60Hz',Processor:'Halcyon H9',RAM:'8GB',Storage:'256GB NVMe SSD',GPU:'Integrated',Battery:'55Wh, up to 13h',OS:'VertexOS Desktop',Connectivity:'Wi-Fi 6'},[],['#c9ced8','#101317']),
  // Desktops
  P('desktops','Orion','Orion Apex Tower RTX',2899,3199,4.8,320,'in',{Processor:'Orion Core Ultra 9',RAM:'32GB DDR5',Storage:'2TB NVMe SSD',GPU:'RTX 4080 16GB',PSU:'850W 80+ Gold',Connectivity:'Wi-Fi 7 / 2.5GbE'},['featured'],null),
  P('desktops','Vantix','Vantix Strike Mini ITX',1599,null,4.5,190,'in',{Processor:'Orion Core 7',RAM:'16GB DDR5',Storage:'1TB NVMe SSD',GPU:'RTX 4060 8GB',PSU:'650W 80+ Gold',Connectivity:'Wi-Fi 6E'},['trending'],null),
  P('desktops','Orion','Orion Workstation Pro X',4299,null,4.9,88,'low',{Processor:'Orion Core Ultra 9 HX',RAM:'64GB DDR5 ECC',Storage:'4TB NVMe SSD',GPU:'RTX 4090 24GB',PSU:'1000W 80+ Platinum',Connectivity:'10GbE / Wi-Fi 7'},['new'],null),
  // Tablets
  P('tablets','Nexbyte','Nexbyte Slate Pad 12',799,899,4.6,640,'in',{Display:'12.4" LCD, 120Hz',Processor:'Nexbyte X3',RAM:'8GB',Storage:'256GB',Battery:'10000mAh',OS:'VertexOS Tab',Connectivity:'Wi-Fi 6E / 5G optional'},['bestseller'],['#1a2245','#c9ced8']),
  P('tablets','Halcyon','Halcyon Tab Mini',399,459,4.3,410,'in',{Display:'8.3" LCD, 60Hz',Processor:'Halcyon H6',RAM:'6GB',Storage:'128GB',Battery:'6000mAh',OS:'VertexOS Tab',Connectivity:'Wi-Fi 6'},[],['#101317']),
  P('tablets','Arcadia','Arcadia Sketch Tab Pro',1099,null,4.7,205,'in',{Display:'12.9" OLED, 120Hz',Processor:'Nexbyte X4',RAM:'12GB',Storage:'512GB',Battery:'9700mAh',OS:'VertexOS Tab',Connectivity:'Wi-Fi 6E'},['new'],['#1a2245']),
  // Monitors
  P('monitors','Arcadia','Arcadia ColorEdge 27 4K',649,749,4.8,540,'in',{Size:'27"',Resolution:'3840×2160',Refresh:'144Hz',Panel:'IPS, 98% DCI-P3',Connectivity:'HDMI 2.1 / DP 1.4 / USB-C'},['featured'],null),
  P('monitors','Vantix','Vantix Velocity 27 OLED',899,999,4.9,320,'in',{Size:'27"',Resolution:'2560×1440',Refresh:'240Hz',Panel:'OLED, 0.03ms',Connectivity:'HDMI 2.1 / DP 1.4'},['new','trending'],null),
  P('monitors','Arcadia','Arcadia Studio 34 Ultrawide',1099,null,4.7,180,'in',{Size:'34"',Resolution:'3440×1440',Refresh:'165Hz',Panel:'IPS, curved 1900R',Connectivity:'USB-C 90W / DP 1.4'},[],null),
  P('monitors','Halcyon','Halcyon Office 24 FHD',179,219,4.2,890,'in',{Size:'24"',Resolution:'1920×1080',Refresh:'75Hz',Panel:'IPS',Connectivity:'HDMI / VGA'},['bestseller'],null),
  // Gaming
  P('gaming','Vantix','Vantix Recon Wireless Mouse',89,109,4.7,1240,'in',{Sensor:'26K DPI optical',Weight:'59g',Battery:'70h wireless',Connectivity:'2.4GHz + Bluetooth',Buttons:'6 programmable'},['bestseller'],null),
  P('gaming','Vantix','Vantix Forge TKL Keyboard',159,null,4.8,760,'in',{Switches:'Hot-swap mechanical',Layout:'TKL 87-key',Lighting:'Per-key RGB',Connectivity:'Wired / 2.4GHz',Frame:'Aluminum top plate'},['new'],null),
  P('gaming','Vantix','Vantix Aero Headset',129,159,4.5,980,'in',{Driver:'50mm Neodymium',Mic:'Detachable cardioid',Battery:'30h wireless',Connectivity:'2.4GHz / 3.5mm',Compatibility:'PC / Console'},['trending'],null),
  P('gaming','Vantix','Vantix Grip Pro Controller',79,null,4.6,610,'in',{Layout:'Hall-effect sticks',Battery:'20h rechargeable',Connectivity:'Bluetooth / USB-C',Compatibility:'PC / Mobile',Feedback:'Adaptive triggers'},[],null),
  P('gaming','Vantix','Vantix Command Desk Mat XXL',39,49,4.4,320,'in',{Size:'900×400mm',Material:'Stitched-edge cloth',Base:'Non-slip rubber',Compatibility:'Universal'},[],null),
  // Headphones
  P('headphones','Kryon','Kryon Aura ANC Wireless',299,349,4.8,1620,'in',{Type:'Over-ear, closed-back',ANC:'Adaptive hybrid ANC',Battery:'40h ANC on',Connectivity:'Bluetooth 5.4 / USB-C / 3.5mm',Driver:'40mm dynamic'},['bestseller','featured'],['#101317','#c9ced8']),
  P('headphones','Kryon','Kryon Pulse Buds Pro',179,209,4.6,2010,'in',{Type:'In-ear true wireless',ANC:'Active + transparency',Battery:'8h + 24h case',Connectivity:'Bluetooth 5.4',Driver:'11mm dynamic'},['trending'],['#101317','#8b93a8']),
  P('headphones','Kryon','Kryon Studio Ref Wired',249,null,4.9,340,'in',{Type:'Over-ear, open-back',ANC:'None (studio reference)',Battery:'N/A (wired)',Connectivity:'3.5mm / 6.3mm adapter',Driver:'50mm dynamic'},[],null),
  P('headphones','Halcyon','Halcyon Air Buds Lite',59,79,4.1,890,'low',{Type:'In-ear true wireless',ANC:'None',Battery:'6h + 18h case',Connectivity:'Bluetooth 5.2',Driver:'8mm dynamic'},[],null),
  // Speakers
  P('speakers','Kryon','Kryon Orb Mini Bluetooth',79,99,4.5,1120,'in',{Output:'20W RMS',Battery:'14h',Waterproof:'IP67',Connectivity:'Bluetooth 5.3'},['bestseller'],['#101317','#2f6bff']),
  P('speakers','Kryon','Kryon Column Home Speaker',249,null,4.6,410,'in',{Output:'60W RMS, stereo pair capable',Battery:'N/A (mains)',Waterproof:'No',Connectivity:'Wi-Fi / Bluetooth / AirLink'},['new'],null),
  P('speakers','Halcyon','Halcyon Boom Party Speaker',199,229,4.4,300,'in',{Output:'100W RMS + LED show',Battery:'20h',Waterproof:'IPX5',Connectivity:'Bluetooth 5.3'},['trending'],null),
  // Cameras
  P('cameras','Draven','Draven M6 Mirrorless',1599,1799,4.8,410,'in',{Sensor:'26MP APS-C',Video:'6K30 / 4K60',Lens:'Interchangeable mount',ISO:'100–51200',Connectivity:'Wi-Fi / Bluetooth'},['featured'],null),
  P('cameras','Draven','Draven Vlog Cam Pocket',449,499,4.4,290,'in',{Sensor:'1-inch 20MP',Video:'4K60',Lens:'Fixed f/1.8',ISO:'125–12800',Connectivity:'Wi-Fi / Bluetooth'},['trending'],null),
  P('cameras','Draven','Draven Action Cam X',329,379,4.5,560,'in',{Sensor:'1/1.9" 24MP',Video:'5.3K30, waterproof 10m',Lens:'Fixed wide f/2.5',ISO:'100–6400',Connectivity:'Wi-Fi / Bluetooth'},[],null),
  // Smartwatches
  P('smartwatches','Halcyon','Halcyon Pulse Watch 3',329,379,4.6,1340,'in',{Display:'1.5" AMOLED always-on',Battery:'6 days typical',GPS:'Dual-band GPS',Water:'5ATM + IP68',Connectivity:'Bluetooth / LTE optional'},['bestseller'],['#101317','#c9a15a','#8b93a8']),
  P('smartwatches','Nexbyte','Nexbyte Fit Band 2',89,109,4.2,780,'in',{Display:'1.1" AMOLED',Battery:'12 days typical',GPS:'Connected GPS',Water:'5ATM',Connectivity:'Bluetooth'},[],null),
  P('smartwatches','Halcyon','Halcyon Pulse Watch Sport',249,null,4.5,420,'in',{Display:'1.4" AMOLED always-on',Battery:'8 days typical',GPS:'Dual-band GPS',Water:'10ATM',Connectivity:'Bluetooth'},['new'],['#2f6bff','#101317']),
  // Smart home
  P('smart-home','Halcyon','Halcyon Hub Central',129,149,4.5,610,'in',{Type:'Smart hub / router',Connectivity:'Wi-Fi 6E / Thread / Matter',Compatibility:'Matter, Zigbee',Power:'Mains'},['featured'],null),
  P('smart-home','Halcyon','Halcyon Cam Outdoor 2K',99,119,4.4,890,'in',{Type:'Security camera',Connectivity:'Wi-Fi',Compatibility:'Matter',Power:'Solar / battery'},['bestseller'],null),
  P('smart-home','Halcyon','Halcyon Bulb Color Pack 4',49,59,4.3,1230,'in',{Type:'Smart LED bulb (4-pack)',Connectivity:'Wi-Fi / Bluetooth',Compatibility:'Matter',Power:'9W each'},[],null),
  P('smart-home','Halcyon','Halcyon Plug Mini (2-pack)',29,null,4.2,760,'in',{Type:'Smart plug',Connectivity:'Wi-Fi',Compatibility:'Matter',Power:'Max 15A'},[],null),
  // Accessories
  P('accessories','Pulse','Pulse Leather Phone Case',39,null,4.4,540,'in',{Material:'Full-grain leather',Compatibility:'Nexbyte Aria series',Protection:'Drop-tested 2m'},[],['#101317','#c9a15a']),
  P('accessories','Pulse','Pulse Tempered Glass 3-Pack',19,25,4.1,1200,'in',{Material:'9H tempered glass',Compatibility:'Universal sizes',Protection:'Anti-scratch'},[],null),
  P('accessories','Vantix','Vantix Laptop Sleeve 15"',35,null,4.5,320,'in',{Material:'Water-resistant shell',Compatibility:'Up to 15.6"',Protection:'Padded, shockproof'},[],null),
  // Chargers & cables
  P('chargers-cables','Pulse','Pulse GaN 65W Charger',49,59,4.7,1430,'in',{Wattage:'65W GaN',Ports:'2x USB-C + 1x USB-A',Type:'Wall charger',Length:'N/A'},['bestseller'],null),
  P('chargers-cables','Pulse','Pulse Braided USB-C Cable 2m',15,19,4.5,2200,'in',{Wattage:'100W PD',Ports:'USB-C to USB-C',Type:'Braided nylon',Length:'2m'},[],null),
  P('chargers-cables','Pulse','Pulse MagLock Wireless Pad',39,49,4.3,680,'in',{Wattage:'15W MagLock',Ports:'USB-C input',Type:'Wireless charger',Length:'1.2m cable'},['new'],null),
  P('chargers-cables','Pulse','Pulse Car Charger Dual Port',24,null,4.2,410,'in',{Wattage:'45W total',Ports:'2x USB-C',Type:'Car charger',Length:'N/A'},[],null),
  // Components
  P('components','Orion','Orion RX7 Graphics Card 16GB',799,899,4.8,240,'in',{Type:'GPU',Memory:'16GB GDDR6X',Interface:'PCIe 5.0',Power:'320W TDP',Cooling:'Triple fan'},['featured'],null),
  P('components','Orion','Orion Core 9 Processor',549,null,4.7,190,'in',{Type:'CPU',Cores:'24-core / 32-thread',Socket:'LGA 1851',Power:'125W TDP',Cooling:'Not included'},[],null),
  P('components','Pulse','Pulse 32GB DDR5 Kit (2x16GB)',119,139,4.6,320,'in',{Type:'RAM',Speed:'6000MHz CL30',Capacity:'32GB (2x16GB)',Voltage:'1.35V',Cooling:'Aluminum heat spreader'},['bestseller'],null),
  P('components','Pulse','Pulse 2TB NVMe SSD Gen5',159,189,4.7,410,'in',{Type:'Storage',Capacity:'2TB',Interface:'PCIe 5.0 NVMe',Speed:'12,400 MB/s read',Cooling:'Integrated heatsink'},['new'],null),
];
const findProduct = id => PRODUCTS.find(p => p.id === Number(id));
const catName = id => (CATEGORIES.find(c=>c.id===id)||{}).name || id;

// icons
function icon(name){
  const map = {
    phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><line x1="10" y1="18" x2="14" y2="18"/>',
    laptop:'<rect x="4" y="4" width="16" height="11" rx="1"/><path d="M2 19h20l-1.5-3H3.5z"/>',
    desktop:'<rect x="4" y="4" width="16" height="12" rx="1"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="16" x2="12" y2="20"/>',
    tablet:'<rect x="5" y="3" width="14" height="18" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/>',
    monitor:'<rect x="3" y="4" width="18" height="12" rx="1"/><line x1="8" y1="20" x2="16" y2="20"/><line x1="12" y1="16" x2="12" y2="20"/>',
    gamepad:'<rect x="3" y="8" width="18" height="9" rx="4"/><line x1="7" y1="12" x2="7" y2="12.5"/><line x1="7" y1="10.5" x2="7" y2="13.5"/><line x1="5.5" y1="12" x2="8.5" y2="12"/><circle cx="16" cy="11" r="0.8" fill="currentColor"/><circle cx="18" cy="13" r="0.8" fill="currentColor"/>',
    headphones:'<path d="M3 13a9 9 0 0 1 18 0"/><rect x="3" y="13" width="4" height="7" rx="1.5"/><rect x="17" y="13" width="4" height="7" rx="1.5"/>',
    speaker:'<rect x="6" y="2" width="12" height="20" rx="2"/><circle cx="12" cy="8" r="2.2"/><circle cx="12" cy="16" r="3.2"/>',
    camera:'<rect x="2.5" y="7" width="19" height="13" rx="2"/><circle cx="12" cy="13.5" r="4"/><path d="M8 7l1.5-3h5L16 7"/>',
    watch:'<rect x="7" y="6" width="10" height="12" rx="3"/><path d="M9 6V3h6v3M9 18v3h6v-3"/>',
    home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
    accessory:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    cable:'<path d="M6 3v6a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v4"/><circle cx="6" cy="3" r="0" /><circle cx="6" cy="4" r="1.6"/><circle cx="18" cy="20" r="1.6"/>',
    chip:'<rect x="7" y="7" width="10" height="10" rx="1"/><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><line x1="9" y1="17" x2="9" y2="22"/><line x1="15" y1="17" x2="15" y2="22"/><line x1="2" y1="9" x2="7" y2="9"/><line x1="2" y1="15" x2="7" y2="15"/><line x1="17" y1="9" x2="22" y2="9"/><line x1="17" y1="15" x2="22" y2="15"/>',
    heart:'<path d="M12 20s-7-4.3-9.5-8.6C.7 8 2 4.5 5.4 3.7 8 3.1 10 4.3 12 7c2-2.7 4-3.9 6.6-3.3C22 4.5 23.3 8 21.5 11.4 19 15.7 12 20 12 20z"/>',
    cart:'<circle cx="9" cy="21" r="1.4"/><circle cx="19" cy="21" r="1.4"/><path d="M2.5 3h2.4l2.6 12.4a2 2 0 0 0 2 1.6h8a2 2 0 0 0 2-1.6L21 7.5H6"/>',
    eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
    scale:'<line x1="12" y1="3" x2="12" y2="21"/><path d="M5 7h14M5 7l-3 7a4 4 0 0 0 8 0L5 7zM19 7l-3 7a4 4 0 0 0 8 0L19 7z"/>',
    check:'<polyline points="20 6 9 17 4 12"/>',
    truck:'<rect x="1" y="6" width="14" height="10" rx="1"/><path d="M15 10h4l3 3v3h-7z"/><circle cx="6" cy="18.5" r="1.8"/><circle cx="18" cy="18.5" r="1.8"/>',
    shield:'<path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z"/>',
    minus:'<line x1="5" y1="12" x2="19" y2="12"/>',
    plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    trash:'<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15"/>',
    filter:'<path d="M4 5h16M7 12h10M10 19h4"/>',
    chevron:'<polyline points="9 6 15 12 9 18"/>',
    mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/>',
    map:'<path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    box:'<path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v9l9 5 9-5V8"/><line x1="12" y1="13" x2="12" y2="22"/>',
    tag:'<path d="M20 12l-8 8-9-9V3h8z"/><circle cx="7" cy="7" r="1.3"/>',
    zap:'<polygon points="13 2 3 14 11 14 11 22 21 10 13 10"/>',
  };
  return `<svg class="icon" viewBox="0 0 24 24">${map[name]||map.box}</svg>`;
}
function catIcon(catId, big){
  const c = CATEGORIES.find(x=>x.id===catId);
  return icon(c ? c.icon : 'box');
}
const TILE_CLASSES = ['tile-1','tile-2','tile-3','tile-4','tile-5'];
function tileClassFor(id){ return TILE_CLASSES[id % TILE_CLASSES.length]; }

/*IMAGES.*/
function slugify(str){
  return String(str).toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
}
function productImgPath(p, idx){
  const base = `images/products/${slugify(p.name)}`;
  return (idx && idx>1) ? `${base}-${idx}.jpg` : `${base}.jpg`;
}
function categoryImgPath(catId){ return `images/categories/${catId}.jpg`; }
function bundleImgPath(name){ return `images/bundles/${slugify(name)}.jpg`; }
function heroImgPath(){ return `images/hero/hero-banner.jpg`; }

// Renders an <img> inside a positioned wrapper. If the file 404s, the
// image is hidden and a plain CSS placeholder (filename + "add photo"
// hint) fades in behind it — no SVG, no external calls.
function imgSlot(src, alt, opts){
  opts = opts || {};
  const cls = opts.cls || '';
  const idAttr = opts.id ? `id="${opts.id}"` : '';
  const filename = src.split('/').pop();
  return `<div class="photo-slot ${cls}">
    <img ${idAttr} class="photo-img" src="${src}" alt="${(alt||'').replace(/"/g,'&quot;')}" loading="${opts.eager?'eager':'lazy'}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
    <div class="photo-missing" style="display:none;" title="Add image file: ${filename}">
      <span class="photo-missing-mark">+</span>
      <span class="photo-missing-name">${filename}</span>
    </div>
  </div>`;
}
function productPhoto(p, opts){
  opts = opts || {};
  const idx = opts.idx || 1;
  const src = productImgPath(p, idx);
  return imgSlot(src, opts.alt||p.name, opts);
}
function categoryPhoto(catId, name, opts){
  opts = opts || {};
  return imgSlot(categoryImgPath(catId), name, opts);
}
function bundlePhoto(name, opts){
  opts = opts || {};
  return imgSlot(bundleImgPath(name), name, opts);
}
function heroPhoto(opts){
  opts = opts || {};
  return imgSlot(heroImgPath(), opts.alt||'Vertex Electronics — featured products', opts);
}
function setMainProductImage(pid, idx){
  const p = findProduct(pid);
  const tile = document.getElementById('pd-main-tile');
  if(tile) tile.innerHTML = productPhoto(p, {id:'pd-main-img', idx, eager:true});
}


/*STATE*/
const state = {
  cart: [],       
  wishlist: [],    
  compare: [],     
  shopFilters: {category:[], brand:[], price:[0,5000], rating:0, availOnly:false, specs:{}},
  shopSort: 'featured',
};
function saveState(){
  try{
    localStorage.setItem('vertex_cart', JSON.stringify(state.cart));
    localStorage.setItem('vertex_wishlist', JSON.stringify(state.wishlist));
    localStorage.setItem('vertex_compare', JSON.stringify(state.compare));
  }catch(e){}
}
function loadState(){
  try{
    state.cart = JSON.parse(localStorage.getItem('vertex_cart')||'[]');
    state.wishlist = JSON.parse(localStorage.getItem('vertex_wishlist')||'[]');
    state.compare = JSON.parse(localStorage.getItem('vertex_compare')||'[]');
  }catch(e){}
}

function fmt(n){ return '$' + n.toLocaleString('en-US', {maximumFractionDigits:0}); }
function stars(rating){
  const full = Math.round(rating*2)/2;
  let s='';
  for(let i=1;i<=5;i++){
    if(full>=i) s+='★'; else if(full>=i-0.5) s+='★'; else s+='☆';
  }
  return s;
}
function toast(msg, iconName){
  const wrap = document.getElementById('toast-wrap');
  const el = document.createElement('div');
  el.className='toast';
  el.innerHTML = `${icon(iconName||'check')}<span>${msg}</span>`;
  wrap.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='opacity .3s'; setTimeout(()=>el.remove(),300); }, 2600);
}

/*CART / WISHLIST / COMPARE ACTIONS*/
function addToCart(pid, qty=1){
  const existing = state.cart.find(c=>c.pid===pid);
  if(existing) existing.qty += qty; else state.cart.push({pid, qty});
  saveState(); updateCounts();
  const p = findProduct(pid);
  toast(`${p.name} added to cart`, 'cart');
}
function removeFromCart(pid)
  {
   state.cart = state.cart.filter(c=>c.pid!==pid); saveState(); updateCounts(); rerender(); 
  }
function setQty(pid, qty){
  const c = state.cart.find(c=>c.pid===pid);
  if(!c) return;
  c.qty = Math.max(1, qty);
  saveState(); updateCounts(); rerender();
}
function toggleWishlist(pid){
  const i = state.wishlist.indexOf(pid);
  if(i>-1){ state.wishlist.splice(i,1); toast('Removed from wishlist','heart'); }
  else{ state.wishlist.push(pid); toast('Saved to wishlist','heart'); }
  saveState(); updateCounts(); rerender();
}
function toggleCompare(pid){
  const i = state.compare.indexOf(pid);
  if(i>-1){ state.compare.splice(i,1); }
  else{
    if(state.compare.length>=4){ toast('Compare list holds up to 4 products','box'); return; }
    state.compare.push(pid);
  }
  saveState(); rerender();
}
function updateCounts(){
  const cc = document.getElementById('cart-count');
  const wc = document.getElementById('wishlist-count');
  const cartQty = state.cart.reduce((a,c)=>a+c.qty,0);
  cc.style.display = cartQty ? 'flex':'none'; cc.textContent = cartQty;
  wc.style.display = state.wishlist.length ? 'flex':'none'; wc.textContent = state.wishlist.length;
}

/*REUSABLE COMPONENTS*/
function stockLabel(stock){
  if(stock==='out') return `<span class="stock out">Out of stock</span>`;
  if(stock==='low') return `<span class="stock low">Only a few left</span>`;
  return `<span class="stock in">In stock</span>`;
}
function badgesFor(p){
  const map = 
  {
    new:'New',bestseller:'Bestseller',trending:'Trending',featured:'Featured',deal:'Deal'
  };
  const cls = 
  {
    new:'badge-new',bestseller:'badge-best',trending:'badge-hot',featured:'badge-new',deal:'badge-sale'
  };
  return p.tags.slice(0,2).map(t=>`<span class="pill ${cls[t]}">${map[t]}</span>`).join('') +
    (p.old ? `<span class="pill badge-sale">-${Math.round((1-p.price/p.old)*100)}%</span>` : '');
}
function productCard(p){
  const wished = state.wishlist.includes(p.id);
  const compared = state.compare.includes(p.id);
  return `
  <div class="pcard" data-pid="${p.id}">
    <div class="tile ${tileClassFor(p.id)}" onclick="location.href='product.html?id=${p.id}'" style="cursor:pointer">
      <div class="badges">${badgesFor(p)}</div>
      <div class="quick-actions">
        <button class="qa-btn ${wished?'active':''}" title="Wishlist" onclick="event.stopPropagation();toggleWishlist(${p.id})">${icon('heart')}</button>
        <button class="qa-btn" title="Quick view" onclick="event.stopPropagation();openQuickView(${p.id})">${icon('eye')}</button>
        <button class="qa-btn ${compared?'active':''}" title="Compare" onclick="event.stopPropagation();toggleCompare(${p.id})">${icon('scale')}</button>
      </div>
      ${productPhoto(p,{cls:'tile-img'})}
    </div>
    <div class="body">
      <div class="brand">${p.brand}</div>
      <a class="name" href="product.html?id=${p.id}">${p.name}</a>
      <div class="stars"><span class="st">${stars(p.rating)}</span> ${p.rating} <span class="mono" style="color:var(--muted)">(${p.reviews.toLocaleString()})</span></div>
      <div class="price-row">
        <span class="price">${fmt(p.price)}</span>
        ${p.old?`<span class="old-price">${fmt(p.old)}</span>`:''}
      </div>
      ${stockLabel(p.stock)}

      <div class="add-row">
        <button class="btn btn-dark" ${p.stock==='out'?'disabled':''} onclick="addToCart(${p.id})">${icon('cart')} Add</button>
        <button class="btn btn-outline" onclick="location.href='product.html?id=${p.id}'">View</button>
      </div>
    </div>
  </div>`;
}
function productGrid(list, cols){
  if(!list.length) return `<div style="padding:60px 0;text-align:center;color:var(--muted)">
    ${icon('box')}<p style="margin-top:10px;">No products match these filters yet.</p>
  </div>`;
  return `<div class="grid grid-${cols||4}">${list.map(productCard).join('')}</div>`;
}
function railSection(title,label,list,link){
  return `
  <section class="wrap" style="margin:64px 0;">
    <div class="section-head">
      <div><div class="section-label">${label}</div><h2>${title}</h2></div>
      <a href="${link}" class="btn btn-outline btn-sm">View all ${icon('chevron')}</a>
    </div>
    ${productGrid(list,4)}
  </section>`;
}

/*PAGE: HOME*/
function pageHome(){
  const featured = PRODUCTS.filter(p=>p.tags.includes('featured'));
  const trending = PRODUCTS.filter(p=>p.tags.includes('trending'));
  const newArrivals = PRODUCTS.filter(p=>p.tags.includes('new'));
  const bestSellers = PRODUCTS.filter(p=>p.tags.includes('bestseller'));
  const deals = PRODUCTS.filter(p=>p.old).slice(0,4);

  return `
  <section class="hero">
    <div class="circuit-bg">${circuitSVG()}</div>
    <div class="hero-inner">
      <div>
        <div class="section-label" style="color:#7fd6ff;">New — Aria 14 Pro now shipping</div>
        <h1 style="margin-top:14px;">Technology,<br>engineered <span style="background:linear-gradient(90deg,#2f6bff,#00d4ff);-webkit-background-clip:text;background-clip:text;color:transparent;">precisely.</span></h1>
        <p>From flagship phones to server-grade components — every product on Vertex is vetted, benchmarked, and backed by our 2-year warranty promise.</p>
        <div class="hero-actions">
          <a href="shop.html" class="btn btn-primary">Shop all products</a>
          <a href="deals.html" class="btn btn-outline" style="border-color:#333c5c;color:#fff;">View deals</a>
        </div>
        <div class="spec-strip">
          <div><div class="n">14,000+</div><div class="l">Products</div></div>
          <div><div class="n">2 yr</div><div class="l">Warranty</div></div>
          <div><div class="n">4.8/5</div><div class="l">Avg. rating</div></div>
          <div><div class="n">48h</div><div class="l">Dispatch</div></div>
        </div>
      </div>
      <div class="hero-visual">${heroGlyph()}</div>
    </div>
  </section>

  <section class="wrap" style="margin-top:48px;">
    <div class="grid grid-5" style="gap:14px;">
      ${CATEGORIES.slice(0,10).map(c=>`
        <a href="category.html?id=${c.id}" class="card" style="padding:16px 12px;text-align:center;transition:.15s;overflow:hidden;" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
          <div style="width:56px;height:56px;margin:0 auto 10px;border-radius:50%;overflow:hidden;">${categoryPhoto(c.id, c.name, {cls:'photo-round'})}</div>
          <div style="font-size:12.5px;font-weight:600;">${c.name}</div>
        </a>`).join('')}
    </div>
  </section>

  <section class="wrap" style="margin:64px 0;">
    <div class="section-head"><div><div class="section-label">Curated</div><h2>Featured picks</h2></div><a href="shop.html" class="btn btn-outline btn-sm">View all ${icon('chevron')}</a></div>
    ${productGrid(featured,4)}
  </section>

  <section class="wrap" style="margin:64px 0;">
    <div class="banner">
      <div class="circuit-bg">${circuitSVG()}</div>
      <div style="position:relative;z-index:2;max-width:520px;">
        <div class="section-label" style="color:#7fd6ff;">Flash deals</div>
        <h2 style="font-size:28px;margin:10px 0 8px;">Up to 25% off select gear</h2>
        <p style="color:#a9b2cf;font-size:14px;margin-bottom:20px;">Limited-time pricing on laptops, monitors, and audio. Ends soon.</p>
        <a href="deals.html" class="btn btn-primary">Shop the sale</a>
      </div>
    </div>
  </section>

  <section class="wrap" style="margin:64px 0;">
    <div class="section-head"><div><div class="section-label">Fresh in</div><h2>New arrivals</h2></div><a href="shop.html" class="btn btn-outline btn-sm">View all ${icon('chevron')}</a></div>
    ${productGrid(newArrivals,4)}
  </section>

  <section class="wrap" style="margin:64px 0;">
    <div class="section-head"><div><div class="section-label">Customer favourites</div><h2>Best sellers</h2></div><a href="shop.html" class="btn btn-outline btn-sm">View all ${icon('chevron')}</a></div>
    ${productGrid(bestSellers,4)}
  </section>

  <section class="wrap" style="margin:64px 0;">
    <div class="section-head"><div><div class="section-label">Because you might like</div><h2>Recommended for you</h2></div></div>
    ${productGrid(trending,4)}
  </section>

  <section class="wrap" style="margin:64px 0;">
    <div class="section-head"><div><div class="section-label">Trusted names</div><h2>Top brands</h2></div><a href="brands.html" class="btn btn-outline btn-sm">All brands ${icon('chevron')}</a></div>
    <div class="grid grid-4">
      ${BRANDS.slice(0,8).map(b=>`
      <a href="brands.html" class="card" style="padding:28px 16px;text-align:center;">
        <div style="font-family:var(--font-display);font-weight:700;font-size:18px;">${b.name}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:6px;">${PRODUCTS.filter(p=>p.brand===b.name).length} products</div>
      </a>`).join('')}
    </div>
  </section>

  <section class="wrap" style="margin:64px 0;">
    <div class="section-head"><div><div class="section-label">Verified buyers</div><h2>What customers say</h2></div></div>
    <div class="grid grid-3">
      ${[
        {n:'Priya K.',t:'Laptop arrived faster than promised and the Forge 16 handles my render jobs beautifully. Support was quick to answer spec questions before I bought.',r:5},
        {n:'Daniyal R.',t:'Compared four monitors using their comparison tool before deciding — genuinely useful. The Arcadia ColorEdge colour accuracy is exactly as advertised.',r:5},
        {n:'Sara M.',t:'Return process for a defective charger was painless, replacement shipped same day. This is now my default electronics store.',r:4},
      ].map(r=>`
      <div class="card" style="padding:22px;">
        <div class="stars" style="margin-bottom:10px;"><span class="st">${stars(r.r)}</span></div>
        <p style="font-size:13.5px;color:var(--ink);line-height:1.7;">"${r.t}"</p>
        <div style="margin-top:14px;font-weight:600;font-size:13px;">${r.n}</div>
      </div>`).join('')}
    </div>
  </section>

  <section class="wrap" style="margin:64px 0;">
    <div class="newsletter-box" style="background:var(--grey);border:1px solid var(--border);padding:36px;flex-direction:row;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;">
      <div>
        <h2 style="font-size:22px;color:var(--ink);">Get restock &amp; price-drop alerts</h2>
        <p style="font-size:13px;color:var(--muted);margin-top:4px;">One email a week, unsubscribe anytime.</p>
      </div>
      <form onsubmit="event.preventDefault();toast('Subscribed — welcome to Vertex.','mail');this.reset();" style="display:flex;gap:8px;">
        <input type="email" required placeholder="you@email.com" style="border:1px solid var(--border-dark);border-radius:6px;padding:12px 14px;min-width:240px;">
        <button class="btn btn-primary">Subscribe</button>
      </form>
    </div>
  </section>
  `;
}
function circuitSVG(){
  return `<svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
    <g stroke="#00d4ff" stroke-width="1" fill="none">
      <path d="M0 100 H200 V60 H400 M400 60 V180 H700"/>
      <path d="M50 400 H250 V300 H500 V420 H800"/>
      <path d="M600 0 V120 H460 V260"/>
    </g>
    <g fill="#00d4ff">
      <circle cx="200" cy="100" r="4"/><circle cx="400" cy="60" r="4"/><circle cx="400" cy="180" r="4"/>
      <circle cx="250" cy="400" r="4"/><circle cx="500" cy="300" r="4"/><circle cx="460" cy="120" r="4"/>
    </g>
  </svg>`;
}
function heroGlyph(){
  return `<div style="width:100%;height:100%;border-radius:16px;overflow:hidden;border:1px solid #262b3d;box-shadow:0 30px 60px -20px rgba(0,0,0,.6);background:linear-gradient(135deg,#0f1530,#1b234a);">
    ${heroPhoto({cls:'photo-dark', eager:true})}
  </div>`;
}

/*PAGE: SHOP (+ CATEGORY reuses this)*/
function getSpecFacets(list){
  const facetKeys = ['RAM','Storage','Display','Processor','Connectivity','OS','Size','Refresh'];
  const facets = {};
  facetKeys.forEach(k=>{
    const vals = new Set();
    list.forEach(p=>{ if(p.specs[k]) vals.add(p.specs[k]); });
    if(vals.size>1 && vals.size<10) facets[k]=[...vals];
  });
  return facets;
}
function applyFilters(list){
  const f = state.shopFilters;
  return list.filter(p=>{
    if(f.category.length && !f.category.includes(p.category)) return false;
    if(f.brand.length && !f.brand.includes(p.brand)) return false;
    if(p.price < f.price[0] || p.price > f.price[1]) return false;
    if(f.rating && p.rating < f.rating) return false;
    if(f.availOnly && p.stock==='out') return false;
    for(const k in f.specs){ if(f.specs[k].length && !f.specs[k].includes(p.specs[k])) return false; }
    return true;
  });
}
function applySort(list){
  const arr = [...list];
  switch(state.shopSort){
    case 'price-asc': arr.sort((a,b)=>a.price-b.price); break;
    case 'price-desc': arr.sort((a,b)=>b.price-a.price); break;
    case 'rating': arr.sort((a,b)=>b.rating-a.rating); break;
    case 'newest': arr.sort((a,b)=>b.id-a.id); break;
    case 'discount': arr.sort((a,b)=>((b.old?1-b.price/b.old:0)-(a.old?1-a.price/a.old:0))); break;
    case 'popular': arr.sort((a,b)=>b.reviews-a.reviews); break;
    case 'featured': default: arr.sort((a,b)=>b.tags.length-a.tags.length); break;
  }
  return arr;
}
function pageShop(params){
  const q = (params.get('q')||'').toLowerCase().trim();
  let base = PRODUCTS;
  if(q) base = base.filter(p=> p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || catName(p.category).toLowerCase().includes(q));
  const filtered = applySort(applyFilters(base));
  const facets = getSpecFacets(base);
  const f = state.shopFilters;

  const brandCounts = {}; base.forEach(p=>brandCounts[p.brand]=(brandCounts[p.brand]||0)+1);
  const catCounts = {}; base.forEach(p=>catCounts[p.category]=(catCounts[p.category]||0)+1);

  return `
  <div class="wrap" style="padding-top:32px;">
    <div style="font-size:12.5px;color:var(--muted);margin-bottom:6px;">Home / <span style="color:var(--ink)">Shop${q?` / "${q}"`:''}</span></div>
    <h1 style="font-size:28px;margin-bottom:20px;">${q? `Results for "${q}"` : 'All products'} <span class="mono" style="font-size:14px;color:var(--muted);font-weight:400;">(${filtered.length})</span></h1>

    <div class="shop-layout">
      <aside>
        <div style="display:flex;align-items:center;gap:8px;font-weight:700;margin-bottom:4px;">${icon('filter')} Filters</div>
        <details class="filter-group" open>
          <summary>Category</summary>
          ${CATEGORIES.map(c=>`
          <label class="filter-opt"><span><input type="checkbox" onchange="toggleFilter('category','${c.id}')" ${f.category.includes(c.id)?'checked':''}> ${c.name}</span><span class="cnt">${catCounts[c.id]||0}</span></label>`).join('')}
        </details>
        <details class="filter-group" open>
          <summary>Brand</summary>
          ${Object.keys(brandCounts).map(b=>`
          <label class="filter-opt"><span><input type="checkbox" onchange="toggleFilter('brand','${b}')" ${f.brand.includes(b)?'checked':''}> ${b}</span><span class="cnt">${brandCounts[b]}</span></label>`).join('')}
        </details>
        <details class="filter-group" open>
          <summary>Price</summary>
          <div style="padding:8px 0 4px;font-size:12.5px;">
            <div class="mono" style="margin-bottom:8px;">${fmt(f.price[0])} – ${fmt(f.price[1])}</div>
            <input type="range" min="0" max="5000" step="50" value="${f.price[1]}" style="width:100%;accent-color:var(--accent);" oninput="setMaxPrice(this.value)">
          </div>
        </details>
        <details class="filter-group" open>
          <summary>Rating</summary>
          ${[4.5,4,3.5,3].map(r=>`
          <label class="filter-opt"><span><input type="radio" name="rating" onchange="setRating(${r})" ${f.rating===r?'checked':''}> ${r}+ <span class="st" style="color:#f5a623;">★</span></span></label>`).join('')}
          <label class="filter-opt"><span><input type="radio" name="rating" onchange="setRating(0)" ${f.rating===0?'checked':''}> Any rating</span></label>
        </details>
        <details class="filter-group" open>
          <summary>Availability</summary>
          <label class="filter-opt"><span><input type="checkbox" onchange="toggleAvail()" ${f.availOnly?'checked':''}> In stock only</span></label>
        </details>
        ${Object.keys(facets).map(k=>`
        <details class="filter-group">
          <summary>${k}</summary>
          ${facets[k].map(v=>`
          <label class="filter-opt"><span><input type="checkbox" onchange="toggleSpecFilter('${k}','${v.replace(/'/g,"\'")}')" ${(f.specs[k]||[]).includes(v)?'checked':''}> ${v}</span></label>`).join('')}
        </details>`).join('')}
        <button class="btn btn-ghost btn-sm" style="margin-top:14px;padding-left:0;" onclick="clearFilters()">Clear all filters</button>
      </aside>

      <div>
        <div class="toolbar">
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            ${f.category.map(c=>`<span class="chip">${catName(c)} <button onclick="toggleFilter('category','${c}')">✕</button></span>`).join('')}
            ${f.brand.map(b=>`<span class="chip">${b} <button onclick="toggleFilter('brand','${b}')">✕</button></span>`).join('')}
            ${f.rating?`<span class="chip">${f.rating}+ ★ <button onclick="setRating(0)">✕</button></span>`:''}
          </div>
          <select onchange="setSort(this.value)">
            <option value="featured" ${state.shopSort==='featured'?'selected':''}>Sort: Featured</option>
            <option value="newest" ${state.shopSort==='newest'?'selected':''}>Newest</option>
            <option value="popular" ${state.shopSort==='popular'?'selected':''}>Most popular</option>
            <option value="rating" ${state.shopSort==='rating'?'selected':''}>Rating</option>
            <option value="price-asc" ${state.shopSort==='price-asc'?'selected':''}>Price: Low to high</option>
            <option value="price-desc" ${state.shopSort==='price-desc'?'selected':''}>Price: High to low</option>
            <option value="discount" ${state.shopSort==='discount'?'selected':''}>Discount</option>
          </select>
        </div>
        ${productGrid(filtered,3)}
      </div>
    </div>
  </div>`;
}
function toggleFilter(kind,val){
  const arr = state.shopFilters[kind];
  const i = arr.indexOf(val);
  if(i>-1) arr.splice(i,1); else arr.push(val);
  rerender();
}
function toggleSpecFilter(key,val){
  const s = state.shopFilters.specs;
  if(!s[key]) s[key]=[];
  const i = s[key].indexOf(val);
  if(i>-1) s[key].splice(i,1); else s[key].push(val);
  rerender();
}
function setMaxPrice(v){ state.shopFilters.price[1]=Number(v); rerender(); }
function setRating(r){ state.shopFilters.rating=r; rerender(); }
function toggleAvail(){ state.shopFilters.availOnly=!state.shopFilters.availOnly; rerender(); }
function setSort(v){ state.shopSort=v; rerender(); }
function clearFilters(){ state.shopFilters={category:[],brand:[],price:[0,5000],rating:0,availOnly:false,specs:{}}; rerender(); }

/*PAGE: CATEGORY*/
function pageCategory(catId){
  const cat = CATEGORIES.find(c=>c.id===catId);
  if(!cat) return `<div class="wrap" style="padding:60px 0;">Category not found.</div>`;
  const list = PRODUCTS.filter(p=>p.category===catId);
  const featured = list.filter(p=>p.tags.length).slice(0,4);
  return `
  <div class="wrap" style="padding-top:28px;">
    <div style="font-size:12.5px;color:var(--muted);margin-bottom:16px;">Home / Shop / <span style="color:var(--ink)">${cat.name}</span></div>
    <div class="banner" style="padding:36px;margin-bottom:36px;">
      <div class="circuit-bg">${circuitSVG()}</div>
      <div style="position:relative;z-index:2;display:flex;align-items:center;gap:20px;">
        <div style="width:64px;height:64px;flex-shrink:0;border-radius:12px;overflow:hidden;border:1px solid #333c5c;">${categoryPhoto(cat.id, cat.name, {})}</div>
        <div>
          <h1 style="font-size:28px;">${cat.name}</h1>
          <p style="color:#a9b2cf;font-size:13.5px;margin-top:4px;">${list.length} products · Free shipping over $75 · 2-year warranty included</p>
        </div>
      </div>
    </div>
    ${featured.length? `<div class="section-head"><h2 style="font-size:20px;">Promoted in ${cat.name}</h2></div>${productGrid(featured,4)}<hr class="divider" style="margin:40px 0;">`:''}
    <div class="section-head"><h2 style="font-size:20px;">All ${cat.name}</h2>
      <select onchange="setSort(this.value)">
        <option value="featured">Sort: Featured</option><option value="newest">Newest</option><option value="popular">Most popular</option>
        <option value="rating">Rating</option><option value="price-asc">Price: Low to high</option><option value="price-desc">Price: High to low</option>
      </select>
    </div>
    ${productGrid(applySort(list),3)}
  </div>`;
}

/*PAGE: PRODUCT DETAIL*/
let pdState = {tab:'overview', colorIdx:0, qty:1};
function pageProduct(pid){
  const p = findProduct(pid);
  if(!p) return `<div class="wrap" style="padding:60px 0;">Product not found. <a href="shop.html" style="color:var(--accent)">Back to shop</a></div>`;
  const wished = state.wishlist.includes(p.id);
  const compared = state.compare.includes(p.id);
  const related = PRODUCTS.filter(r=>r.category===p.category && r.id!==p.id).slice(0,4);
  const reviewDist = [70,18,7,3,2];

  return `
  <div class="wrap" style="padding-top:28px;">
    <div style="font-size:12.5px;color:var(--muted);margin-bottom:20px;">Home / <a href="category.html?id=${p.category}" style="color:var(--muted)">${catName(p.category)}</a> / <span style="color:var(--ink)">${p.name}</span></div>
    <div class="pd-layout">
      <div>
        <div class="pd-gallery-main ${tileClassFor(p.id)}" id="pd-main-tile">
          ${productPhoto(p,{id:'pd-main-img', idx:1, eager:true})}
        </div>
        <div class="pd-thumbs">
          ${[1,2,3,4].map(idx=>`<div class="thumb ${idx===1?'active':''}" onclick="document.querySelectorAll('.pd-thumbs .thumb').forEach(t=>t.classList.remove('active'));this.classList.add('active');setMainProductImage(${p.id},${idx});">${productPhoto(p,{idx, alt:p.name+' view '+idx})}</div>`).join('')}
        </div>
      </div>
      <div>
        <div class="brand" style="font-size:12px;text-transform:uppercase;color:var(--muted);font-weight:600;letter-spacing:.05em;">${p.brand}</div>
        <h1 style="font-size:26px;margin:6px 0 10px;">${p.name}</h1>
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px;">
          <div class="stars"><span class="st">${stars(p.rating)}</span> <b>${p.rating}</b></div>
          <span style="color:var(--muted);font-size:13px;">${p.reviews.toLocaleString()} reviews</span>
          <span style="color:var(--muted);font-size:13px;">SKU: <span class="mono">VX-${p.id}</span></span>
        </div>
        <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:6px;">
          <span class="mono" style="font-size:30px;font-weight:700;">${fmt(p.price)}</span>
          ${p.old?`<span class="mono old-price" style="font-size:16px;">${fmt(p.old)}</span><span class="pill badge-sale">-${Math.round((1-p.price/p.old)*100)}%</span>`:''}
        </div>
        ${stockLabel(p.stock)}
        <p style="font-size:14px;color:var(--muted);margin:16px 0;line-height:1.7;">${genSummary(p)}</p>

        ${p.colors? `
        <div style="margin-bottom:18px;">
          <div style="font-size:12.5px;font-weight:600;margin-bottom:8px;">Color</div>
          <div style="display:flex;gap:10px;">
            ${p.colors.map((c,i)=>`<span class="color-swatch ${i===pdState.colorIdx?'active':''}" style="background:${c}" onclick="pdState.colorIdx=${i};rerender();"></span>`).join('')}
          </div>
        </div>`:''}

        <div style="margin-bottom:18px;">
          <div style="font-size:12.5px;font-weight:600;margin-bottom:8px;">Storage / Variant</div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            ${['Standard','Extended','Pro Bundle'].map((v,i)=>`<span class="variant-opt ${i===0?'active':''}" onclick="document.querySelectorAll('.variant-opt').forEach(x=>x.classList.remove('active'));this.classList.add('active');">${v}</span>`).join('')}
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">
          <div class="qty-box">
            <button onclick="pdState.qty=Math.max(1,pdState.qty-1);rerender();">${icon('minus')}</button>
            <span>${pdState.qty}</span>
            <button onclick="pdState.qty++;rerender();">${icon('plus')}</button>
          </div>
          <button class="btn btn-dark" style="flex:1;" ${p.stock==='out'?'disabled':''} onclick="addToCart(${p.id},pdState.qty)">${icon('cart')} Add to cart</button>
        </div>
        <div style="display:flex;gap:10px;margin-bottom:22px;">
          <button class="btn btn-primary btn-block" ${p.stock==='out'?'disabled':''} onclick="addToCart(${p.id},pdState.qty);location.href='checkout.html'">Buy now</button>
          <button class="btn btn-outline" onclick="toggleWishlist(${p.id})">${icon('heart')} ${wished?'Saved':'Wishlist'}</button>
          <button class="btn btn-outline" onclick="toggleCompare(${p.id})">${icon('scale')} ${compared?'Added':'Compare'}</button>
        </div>

        <div class="card" style="padding:16px;display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;gap:10px;font-size:13px;"><span style="color:var(--accent)">${icon('truck')}</span> Free shipping on orders over $75 — arrives in 2–4 business days.</div>
          <div style="display:flex;gap:10px;font-size:13px;"><span style="color:var(--accent)">${icon('shield')}</span> 2-year limited warranty, 30-day hassle-free returns.</div>
        </div>
      </div>
    </div>

    <div style="margin-top:56px;">
      <div style="display:flex;border-bottom:1px solid var(--border);">
        <button class="tab-btn ${pdState.tab==='overview'?'active':''}" onclick="pdState.tab='overview';rerender();">Overview</button>
        <button class="tab-btn ${pdState.tab==='specs'?'active':''}" onclick="pdState.tab='specs';rerender();">Specifications</button>
        <button class="tab-btn ${pdState.tab==='reviews'?'active':''}" onclick="pdState.tab='reviews';rerender();">Reviews (${p.reviews.toLocaleString()})</button>
        <button class="tab-btn ${pdState.tab==='shipping'?'active':''}" onclick="pdState.tab='shipping';rerender();">Shipping &amp; Returns</button>
      </div>
      <div style="padding:28px 0;max-width:760px;">
        ${pdState.tab==='overview'? `
          <h3 style="font-size:17px;margin-bottom:12px;">Key features</h3>
          <ul style="display:flex;flex-direction:column;gap:10px;">
            ${Object.entries(p.specs).slice(0,6).map(([k,v])=>`<li style="display:flex;gap:10px;font-size:14px;"><span style="color:var(--success);flex-shrink:0;">${icon('check')}</span><span><b>${k}:</b> ${v}</span></li>`).join('')}
          </ul>` : ''}
        ${pdState.tab==='specs'? `
          <table class="spec-table" style="width:100%;">
            ${Object.entries(p.specs).map(([k,v])=>`<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
          </table>` : ''}
        ${pdState.tab==='reviews'? `
          <div style="display:flex;gap:40px;margin-bottom:26px;flex-wrap:wrap;">
            <div style="text-align:center;">
              <div class="mono" style="font-size:44px;font-weight:700;">${p.rating}</div>
              <div class="stars" style="justify-content:center;"><span class="st">${stars(p.rating)}</span></div>
              <div style="font-size:12px;color:var(--muted);margin-top:4px;">${p.reviews.toLocaleString()} reviews</div>
            </div>
            <div style="flex:1;min-width:200px;display:flex;flex-direction:column;gap:6px;justify-content:center;">
              ${[5,4,3,2,1].map((s,i)=>`<div class="review-bar"><span style="width:14px;">${s}</span><div class="track"><div class="fill" style="width:${reviewDist[i]}%"></div></div><span style="color:var(--muted);">${reviewDist[i]}%</span></div>`).join('')}
            </div>
          </div>
          ${genReviews(p).map(r=>`
          <div style="border-bottom:1px solid var(--border);padding:16px 0;">
            <div style="display:flex;justify-content:space-between;"><b style="font-size:13.5px;">${r.name}</b><span class="mono" style="font-size:11.5px;color:var(--muted);">${r.date}</span></div>
            <div class="stars" style="margin:4px 0;"><span class="st">${stars(r.rating)}</span></div>
            <p style="font-size:13.5px;color:var(--muted);line-height:1.6;">${r.text}</p>
          </div>`).join('')}
          ` : ''}
        ${pdState.tab==='shipping'? `
          <div style="display:flex;flex-direction:column;gap:16px;font-size:14px;color:var(--ink);">
            <div><b>Shipping:</b> Free standard shipping (2–4 business days) on orders over $75. Express shipping (1–2 days) available at checkout for $14.99.</div>
            <div><b>Returns:</b> 30 days from delivery for a full refund, provided the item is unused and in original packaging.</div>
            <div><b>Warranty:</b> Every product ships with a 2-year limited manufacturer warranty covering defects in materials and workmanship.</div>
          </div>` : ''}
      </div>
    </div>

    ${related.length? `
    <section style="margin:60px 0;">
      <div class="section-head"><div><div class="section-label">You may also like</div><h2>Related products</h2></div></div>
      ${productGrid(related,4)}
    </section>` : ''}
  </div>`;
}
function genSummary(p){
  const bits = Object.entries(p.specs).slice(0,3).map(([k,v])=>`${v}`).join(', ');
  return `The ${p.name} pairs ${bits.toLowerCase()} for a setup built to keep pace with real workloads — not just spec sheets. Backed by Vertex's 2-year warranty and dedicated support.`;
}
function genReviews(p){
  const names=['Ahmed S.','Laila T.','Bilal K.','Meera N.','Omar F.'];
  const texts=[
    `Been using it daily for a few weeks now — performance matches what was advertised and it feels well built for the price.`,
    `Setup was straightforward out of the box. A couple of minor quirks but nothing that affects day-to-day use.`,
    `Exactly what I needed for work. Shipping was quick and packaging was solid, no damage on arrival.`,
    `Good value overall. Battery life is slightly under the stated spec in my usage but still solid.`,
  ];
  return names.slice(0,4).map((n,i)=>({name:n, date:`Aug ${10+i*3}, 2026`, rating: Math.max(3,Math.round(p.rating)-((i===3)?1:0)), text: texts[i]}));
}

/*PAGE: QUICK VIEW MODAL*/
function openQuickView(pid){
  const p = findProduct(pid);
  document.getElementById('qv-content').innerHTML = `
    <button class="close-x" onclick="closeQuickView()">✕</button>
    <div class="tile ${tileClassFor(p.id)}" style="border-radius:12px; overflow:hidden;">
      ${productPhoto(p,{cls:'tile-img'})}
    </div>
    <div>
      <div class="brand" style="font-size:11px;text-transform:uppercase;color:var(--muted);font-weight:600;">${p.brand}</div>
      <h2 style="font-size:20px;margin:6px 0 8px;">${p.name}</h2>
      <div class="stars"><span class="st">${stars(p.rating)}</span> ${p.rating} <span style="color:var(--muted);font-size:12px;">(${p.reviews.toLocaleString()})</span></div>
      <div class="mono" style="font-size:24px;font-weight:700;margin:12px 0;">${fmt(p.price)} ${p.old?`<span class="old-price" style="font-size:14px;">${fmt(p.old)}</span>`:''}</div>
      <ul style="font-size:13px;display:flex;flex-direction:column;gap:6px;margin-bottom:18px;">
        ${Object.entries(p.specs).slice(0,4).map(([k,v])=>`<li><b>${k}:</b> ${v}</li>`).join('')}
      </ul>
      <div style="display:flex;gap:10px;">
        <button class="btn btn-dark" style="flex:1;" onclick="addToCart(${p.id});closeQuickView();">${icon('cart')} Add to cart</button>
        <button class="btn btn-outline" onclick="location.href='product.html?id=${p.id}';closeQuickView();">Full details</button>
      </div>
    </div>`;
  document.getElementById('quickview').classList.add('show');
  document.getElementById('overlay').classList.add('show');
}
function closeQuickView(){
  document.getElementById('quickview').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
}

/*PAGE: COMPARE*/
function pageCompare(){
  const items = state.compare.map(findProduct).filter(Boolean);
  if(!items.length) return `
    <div class="wrap" style="padding:70px 0;text-align:center;">
      <div style="color:var(--accent);margin:0 auto 16px;width:48px;height:48px;">${icon('scale')}</div>
      <h1 style="font-size:24px;margin-bottom:10px;">Nothing to compare yet</h1>
      <p style="color:var(--muted);margin-bottom:22px;">Add up to 4 products from the shop using the compare icon on any product card.</p>
      <a href="shop.html" class="btn btn-primary">Browse products</a>
    </div>`;
  const allKeys = [...new Set(items.flatMap(p=>Object.keys(p.specs)))];
  return `
  <div class="wrap" style="padding:32px 0 60px;">
    <h1 style="font-size:26px;margin-bottom:6px;">Compare products</h1>
    <p style="color:var(--muted);font-size:13.5px;margin-bottom:24px;">Differences across specifications are highlighted.</p>
    <div style="overflow-x:auto;">
    <table class="cmp-table">
      <tr><th>Product</th>${items.map(p=>`<td style="min-width:200px;"><div class="tile ${tileClassFor(p.id)}" style="width:70px;height:70px;border-radius:8px;margin-bottom:10px;overflow:hidden;">${productPhoto(p,{cls:'tile-img'})}</div><b>${p.name}</b><div style="font-size:12px;color:var(--muted);margin-top:4px;">${p.brand}</div><button class="btn btn-ghost btn-sm" style="padding-left:0;color:var(--danger);" onclick="toggleCompare(${p.id})">Remove</button></td>`).join('')}</tr>
      <tr><th>Price</th>${items.map(p=>`<td class="mono"><b>${fmt(p.price)}</b></td>`).join('')}</tr>
      <tr><th>Rating</th>${items.map(p=>`<td>${stars(p.rating)} ${p.rating}</td>`).join('')}</tr>
      <tr><th>Warranty</th>${items.map(()=>`<td>2-year limited</td>`).join('')}</tr>
      ${allKeys.map(k=>{
        const vals = items.map(p=>p.specs[k]||'—');
        const diff = new Set(vals).size>1;
        return `<tr><th>${k}</th>${items.map((p,i)=>`<td class="${diff?'diff-cell':''}">${vals[i]}</td>`).join('')}</tr>`;
      }).join('')}
      <tr><th>Action</th>${items.map(p=>`<td><button class="btn btn-dark btn-sm" onclick="addToCart(${p.id})">Add to cart</button></td>`).join('')}</tr>
    </table>
    </div>
  </div>`;
}

/*PAGE: CART */
function pageCart(){
  if(!state.cart.length) return `
    <div class="wrap" style="padding:70px 0;text-align:center;">
      <div style="color:var(--accent);margin:0 auto 16px;width:48px;height:48px;">${icon('cart')}</div>
      <h1 style="font-size:24px;margin-bottom:10px;">Your cart is empty</h1>
      <p style="color:var(--muted);margin-bottom:22px;">Looks like you haven't added anything yet.</p>
      <a href="shop.html" class="btn btn-primary">Continue shopping</a>
    </div>`;
  const items = state.cart.map(c=>({...c, p: findProduct(c.pid)}));
  const subtotal = items.reduce((a,i)=>a+i.p.price*i.qty,0);
  const discount = items.reduce((a,i)=> a + (i.p.old? (i.p.old-i.p.price)*i.qty : 0),0);
  const shipping = subtotal>75?0:9.99;
  const total = subtotal+shipping;
  return `
  <div class="wrap" style="padding:32px 0 60px;">
    <h1 style="font-size:26px;margin-bottom:24px;">Shopping cart <span class="mono" style="font-size:15px;color:var(--muted);">(${items.reduce((a,i)=>a+i.qty,0)} items)</span></h1>
    <div style="display:grid;grid-template-columns:1.6fr 1fr;gap:32px;align-items:flex-start;">
      <div class="card" style="padding:8px 20px;">
        ${items.map(i=>`
        <div class="cart-row">
          <div class="tile ${tileClassFor(i.p.id)}" style="width:80px;height:80px;border-radius:8px;overflow:hidden;">${productPhoto(i.p,{cls:'tile-img'})}</div>
          <div>
            <a href="product.html?id=${i.p.id}" style="font-weight:600;font-size:14px;">${i.p.name}</a>
            <div style="font-size:12px;color:var(--muted);margin-top:3px;">${i.p.brand} · Standard variant</div>
            <button class="btn btn-ghost btn-sm" style="padding-left:0;color:var(--danger);font-size:12px;" onclick="removeFromCart(${i.p.id})">${icon('trash')} Remove</button>
            <button class="btn btn-ghost btn-sm" style="font-size:12px;" onclick="toggleWishlist(${i.p.id});removeFromCart(${i.p.id})">Move to wishlist</button>
          </div>
          <div class="qty-box">
            <button onclick="setQty(${i.p.id},${i.qty-1})">${icon('minus')}</button>
            <span>${i.qty}</span>
            <button onclick="setQty(${i.p.id},${i.qty+1})">${icon('plus')}</button>
          </div>
          <div class="mono" style="font-weight:700;">${fmt(i.p.price*i.qty)}</div>
        </div>`).join('')}
        <div style="padding:16px 0;">
          <a href="shop.html" class="btn btn-outline btn-sm">${icon('chevron').replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" style="transform:rotate(180deg)"')} Continue shopping</a>
        </div>
      </div>
      <div class="summary-card">
        <h3 style="font-size:16px;margin-bottom:14px;">Order summary</h3>
        <div class="summary-row"><span>Subtotal</span><span class="mono">${fmt(subtotal)}</span></div>
        ${discount>0?`<div class="summary-row" style="color:var(--success);"><span>Discount</span><span class="mono">-${fmt(discount)}</span></div>`:''}
        <div class="summary-row"><span>Shipping</span><span class="mono">${shipping===0?'Free':fmt(shipping)}</span></div>
        <div style="display:flex;gap:8px;margin:14px 0;">
          <input id="coupon-input" placeholder="Coupon code" style="flex:1;border:1px solid var(--border-dark);border-radius:6px;padding:9px 10px;font-size:13px;">
          <button class="btn btn-outline btn-sm" onclick="toast('Coupon applied — 5% off added at checkout','tag')">Apply</button>
        </div>
        <hr class="divider" style="margin:12px 0;">
        <div class="summary-row" style="font-size:16px;font-weight:700;"><span>Total</span><span class="mono">${fmt(total)}</span></div>
        <a href="checkout.html" class="btn btn-primary btn-block" style="margin-top:14px;">Proceed to checkout</a>
        <div style="display:flex;align-items:center;gap:8px;margin-top:14px;font-size:12px;color:var(--muted);">${icon('shield')} Secure checkout, 2-year warranty included</div>
      </div>
    </div>
  </div>`;
}

/*PAGE: CHECKout*/
let checkoutState = {payment:'card'};
function pageCheckout(){
  if(!state.cart.length) return `<div class="wrap" style="padding:70px 0;text-align:center;"><h1 style="font-size:22px;">Your cart is empty</h1><p style="color:var(--muted);margin:10px 0 20px;">Add products before checking out.</p><a href="shop.html" class="btn btn-primary">Shop now</a></div>`;
  const items = state.cart.map(c=>({...c, p: findProduct(c.pid)}));
  const subtotal = items.reduce((a,i)=>a+i.p.price*i.qty,0);
  const shipping = subtotal>75?0:9.99;
  const total = subtotal+shipping;
  return `
  <div class="wrap" style="padding:32px 0 60px;">
    <div class="step-track">
      <div class="step active"><span class="dot">1</span>Cart</div><div class="line"></div>
      <div class="step active"><span class="dot">2</span>Checkout</div><div class="line"></div>
      <div class="step"><span class="dot">3</span>Confirmation</div>
    </div>
    <h1 style="font-size:26px;margin-bottom:24px;">Checkout</h1>
    <form class="checkout-grid" onsubmit="submitOrder(event)">
      <div>
        <div class="card" style="padding:22px;margin-bottom:20px;">
          <h3 style="font-size:15px;margin-bottom:16px;">Contact details</h3>
          <div class="form-row2">
            <div class="form-field"><label>Full name</label><input required placeholder="Ayesha Khan"></div>
            <div class="form-field"><label>Phone</label><input required placeholder="+92 300 1234567"></div>
          </div>
          <div class="form-field"><label>Email</label><input type="email" required placeholder="you@email.com"></div>
        </div>
        <div class="card" style="padding:22px;margin-bottom:20px;">
          <h3 style="font-size:15px;margin-bottom:16px;">Shipping address</h3>
          <div class="form-field"><label>Street address</label><input required placeholder="House 12, Street 4, DHA Phase 6"></div>
          <div class="form-row2">
            <div class="form-field"><label>City</label><input required placeholder="Karachi"></div>
            <div class="form-field"><label>Postal code</label><input required placeholder="75500"></div>
          </div>
          <div class="form-field"><label>Delivery option</label>
            <select><option>Standard (2–4 business days) — Free over $75</option><option>Express (1–2 business days) — $14.99</option></select>
          </div>
        </div>
        <div class="card" style="padding:22px;">
          <h3 style="font-size:15px;margin-bottom:16px;">Payment method</h3>
          ${['card','paypal','cod'].map(m=>`
          <label class="pay-opt ${checkoutState.payment===m?'active':''}" onclick="checkoutState.payment='${m}';rerender();">
            <input type="radio" name="pay" ${checkoutState.payment===m?'checked':''} style="accent-color:var(--accent);">
            ${m==='card'?'Credit / Debit card':m==='paypal'?'PayPal':'Cash on delivery'}
          </label>`).join('')}
          ${checkoutState.payment==='card'?`
          <div class="form-row2" style="margin-top:10px;">
            <div class="form-field" style="grid-column:1/-1;"><label>Card number</label><input required placeholder="4242 4242 4242 4242"></div>
            <div class="form-field"><label>Expiry</label><input required placeholder="MM/YY"></div>
            <div class="form-field"><label>CVC</label><input required placeholder="123"></div>
          </div>`:''}
          <div class="form-field" style="margin-top:10px;"><label>Coupon code (optional)</label><input placeholder="VERTEX10"></div>
        </div>
      </div>
      <div class="summary-card">
        <h3 style="font-size:15px;margin-bottom:14px;">Order summary</h3>
        ${items.map(i=>`<div class="summary-row"><span>${i.p.name} × ${i.qty}</span><span class="mono">${fmt(i.p.price*i.qty)}</span></div>`).join('')}
        <hr class="divider" style="margin:10px 0;">
        <div class="summary-row"><span>Subtotal</span><span class="mono">${fmt(subtotal)}</span></div>
        <div class="summary-row"><span>Shipping</span><span class="mono">${shipping===0?'Free':fmt(shipping)}</span></div>
        <hr class="divider" style="margin:10px 0;">
        <div class="summary-row" style="font-size:16px;font-weight:700;"><span>Total</span><span class="mono">${fmt(total)}</span></div>
        <button class="btn btn-primary btn-block" style="margin-top:16px;" type="submit">Place order</button>
        <div style="display:flex;align-items:center;gap:8px;margin-top:14px;font-size:12px;color:var(--muted);">${icon('shield')} Payments are encrypted and secure</div>
      </div>
    </form>
  </div>`;
}
function submitOrder(e){
  e.preventDefault();
  const orderId = 'VX-' + Math.floor(100000+Math.random()*899999);
  state.cart = [];
  saveState();
  updateCounts();
  document.getElementById('app').innerHTML = `
  <div class="wrap" style="padding:80px 0;text-align:center;max-width:520px;">
    <div style="width:64px;height:64px;border-radius:50%;background:#e6f9f2;color:var(--success);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;">${icon('check')}</div>
    <h1 style="font-size:26px;margin-bottom:10px;">Order confirmed</h1>
    <p style="color:var(--muted);margin-bottom:6px;">Thank you — your order has been placed successfully.</p>
    <p class="mono" style="font-size:15px;margin-bottom:26px;">Order #${orderId}</p>
    <div class="card" style="padding:20px;text-align:left;margin-bottom:26px;">
      <div style="display:flex;justify-content:space-between;font-size:13.5px;padding:6px 0;"><span>Estimated delivery</span><b>3–5 business days</b></div>
      <div style="display:flex;justify-content:space-between;font-size:13.5px;padding:6px 0;"><span>Confirmation email</span><b>Sent</b></div>
    </div>
    <a href="shop.html" class="btn btn-primary">Continue shopping</a>
  </div>`;
  window.scrollTo(0,0);
}

/*PAGE: WISHLIST*/
function pageWishlist(){
  const items = state.wishlist.map(findProduct).filter(Boolean);
  if(!items.length) return `
    <div class="wrap" style="padding:70px 0;text-align:center;">
      <div style="color:var(--accent);margin:0 auto 16px;width:48px;height:48px;">${icon('heart')}</div>
      <h1 style="font-size:24px;margin-bottom:10px;">Your wishlist is empty</h1>
      <p style="color:var(--muted);margin-bottom:22px;">Tap the heart icon on any product to save it here.</p>
      <a href="shop.html" class="btn btn-primary">Browse products</a>
    </div>`;
  return `
  <div class="wrap" style="padding:32px 0 60px;">
    <h1 style="font-size:26px;margin-bottom:24px;">Wishlist <span class="mono" style="font-size:15px;color:var(--muted);">(${items.length})</span></h1>
    ${productGrid(items,4)}
  </div>`;
}

/*PAGE: DEALS*/
function pageDeals(){
  const deals = PRODUCTS.filter(p=>p.old);
  const flash = deals.slice(0,4);
  const bundles = [
    {name:'Creator Bundle', items:'Forge 16 Studio + ColorEdge 27 4K + Aura ANC', price:3049, old:3496, kw:'laptop-setup'},
    {name:'Gaming Starter Kit', items:'Recon Mouse + Forge TKL + Aero Headset', price:329, old:399, kw:'gaming-setup'},
    {name:'Home Office Kit', items:'Air 13 + Office 24 FHD + GaN 65W Charger', price:1149, old:1277, kw:'home-office'},
  ];
  const target = Date.now()+ (1000*60*60*26);
  return `
  <div class="wrap" style="padding-top:28px;">
    <div class="banner" style="padding:44px;margin-bottom:40px;">
      <div class="circuit-bg">${circuitSVG()}</div>
      <div style="position:relative;z-index:2;">
        <div class="section-label" style="color:#7fd6ff;">Limited time</div>
        <h1 style="font-size:32px;margin:10px 0 14px;">Flash sale — ends soon</h1>
        <div class="countdown" id="countdown"></div>
      </div>
    </div>
    <div class="section-head"><h2 style="font-size:20px;">Flash deals</h2></div>
    ${productGrid(flash,4)}

    <div class="section-head" style="margin-top:56px;"><h2 style="font-size:20px;">Bundles &amp; multi-buy</h2></div>
    <div class="grid grid-3" style="margin-bottom:56px;">
      ${bundles.map(b=>`
      <div class="card" style="padding:0;overflow:hidden;">
        <div style="aspect-ratio:16/9;overflow:hidden;">${bundlePhoto(b.name, {})}</div>
        <div style="padding:22px;">
        <span class="pill badge-sale">Bundle</span>
        <h3 style="font-size:16px;margin:12px 0 6px;">${b.name}</h3>
        <p style="font-size:12.5px;color:var(--muted);margin-bottom:14px;">${b.items}</p>
        <div class="mono" style="font-size:20px;font-weight:700;">${fmt(b.price)} <span class="old-price" style="font-size:13px;">${fmt(b.old)}</span></div>
        <button class="btn btn-dark btn-block" style="margin-top:14px;" onclick="toast('Bundle added to cart','cart')">Add bundle to cart</button>
        </div>
      </div>`).join('')}
    </div>

    <div class="section-head"><h2 style="font-size:20px;">Clearance</h2></div>
    ${productGrid(deals.slice(4),4)}

    <div class="section-head" style="margin-top:56px;"><h2 style="font-size:20px;">Seasonal promotion</h2></div>
    <div class="card gaming-banner" style="border:none;border-radius:14px;padding:36px;color:#fff;margin-bottom:40px;">
      <h3 style="font-size:20px;margin-bottom:8px;">Back-to-campus sale</h3>
      <p style="font-size:13.5px;color:#d8cfff;">Save on laptops and tablets through the end of the month with a free accessory bundle on every order over $900.</p>
    </div>
  </div>`;
}
let dealsTarget = null;
function initCountdown(){
  const el = document.getElementById('countdown');
  if(!el) return;
  if(!dealsTarget) dealsTarget = Date.now() + (1000*60*60*26);
  function tick(){
    const d = dealsTarget - Date.now();
    if(d<=0){ el.innerHTML=''; return; }
    const h = Math.floor(d/3600000), m = Math.floor((d%3600000)/60000), s = Math.floor((d%60000)/1000);
    el.innerHTML = `<div class="cbox"><div class="v">${String(h).padStart(2,'0')}</div><div class="l">Hours</div></div><div class="cbox"><div class="v">${String(m).padStart(2,'0')}</div><div class="l">Min</div></div><div class="cbox"><div class="v">${String(s).padStart(2,'0')}</div><div class="l">Sec</div></div>`;
  }
  tick();
  if(window.__vertexCountdown) clearInterval(window.__vertexCountdown);
  window.__vertexCountdown = setInterval(tick,1000);
}

/*PAGE: BRANDs*/
function pageBrands(){
  return `
  <div class="wrap" style="padding:32px 0 60px;">
    <h1 style="font-size:28px;margin-bottom:6px;">Our brands</h1>
    <p style="color:var(--muted);margin-bottom:30px;max-width:560px;">Every brand on Vertex is selected and benchmarked in-house before it reaches the shelf.</p>
    <div style="display:flex;flex-direction:column;gap:28px;">
      ${BRANDS.map(b=>{
        const items = PRODUCTS.filter(p=>p.brand===b.name).slice(0,4);
        return `
        <div class="card" style="padding:26px;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:18px;">
            <div>
              <div style="font-family:var(--font-display);font-weight:700;font-size:22px;">${b.name}</div>
              <p style="font-size:13px;color:var(--muted);max-width:480px;margin-top:6px;">${b.desc}</p>
            </div>
            <button class="btn btn-outline btn-sm" onclick="document.getElementById('search-input').value='${b.name}';location.href='shop.html?q=${encodeURIComponent(b.name)}'">Browse ${b.name} ${icon('chevron')}</button>
          </div>
          ${productGrid(items,4)}
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

/*PAGE: GAMING*/
function pageGaming(){
  const gaming = PRODUCTS.filter(p=>p.category==='gaming');
  const gamingLaptops = PRODUCTS.filter(p=>p.category==='laptops' && p.specs.GPU);
  const gamingMonitors = PRODUCTS.filter(p=>p.category==='monitors' && Number(p.specs.Refresh)>=144);
  const components = PRODUCTS.filter(p=>p.category==='components');
  return `
  <div style="background:linear-gradient(160deg,#0d0620,#1a0b33 45%,#2c0e57); color:#fff;">
    <div class="wrap" style="padding:70px 24px 60px;position:relative;overflow:hidden;">
      <div class="circuit-bg" style="opacity:.18;">${circuitSVG()}</div>
      <div style="position:relative;z-index:2;max-width:640px;">
        <div class="section-label" style="color:#c9a6ff;">Vertex Gaming</div>
        <h1 style="font-size:42px;margin:12px 0 14px;">Built for the frame you can't afford to miss.</h1>
        <p style="color:#d8cfff;font-size:15px;margin-bottom:26px;">Peripherals, displays, and components engineered for competitive response times.</p>
        <a href="shop.html" class="btn" style="background:linear-gradient(135deg,#8b5cf6,#00d4ff);color:#fff;font-weight:700;padding:13px 26px;border-radius:6px;">Shop gaming gear</a>
      </div>
    </div>
  </div>
  <div class="wrap" style="padding:48px 0;">
    <div class="section-head"><h2 style="font-size:20px;">Peripherals</h2></div>
    ${productGrid(gaming,4)}

    <div class="section-head" style="margin-top:52px;"><h2 style="font-size:20px;">Gaming laptops</h2></div>
    ${productGrid(gamingLaptops,4)}

    <div class="section-head" style="margin-top:52px;"><h2 style="font-size:20px;">High-refresh monitors</h2></div>
    ${productGrid(gamingMonitors,4)}

    <div class="section-head" style="margin-top:52px;"><h2 style="font-size:20px;">PC components</h2></div>
    ${productGrid(components,4)}

    <div class="card" style="margin-top:56px;padding:32px;background:linear-gradient(120deg,#1a0b33,#3a0f6b);border:none;color:#fff;border-radius:14px;">
      <div class="section-label" style="color:#c9a6ff;">Bundle &amp; save</div>
      <h3 style="font-size:20px;margin:8px 0;">Gaming Starter Kit — Recon Mouse + Forge TKL + Aero Headset</h3>
      <div class="mono" style="font-size:22px;font-weight:700;margin:10px 0;">$329 <span class="old-price" style="font-size:14px;">$399</span></div>
      <button class="btn" style="background:linear-gradient(135deg,#8b5cf6,#00d4ff);color:#fff;font-weight:700;" onclick="toast('Bundle added to cart','cart')">Add bundle to cart</button>
    </div>
  </div>`;
}

/*PAGE: ABOUT*/
function pageAbout(){
  return `
  <div class="hero" style="padding-bottom:0;">
    <div class="circuit-bg">${circuitSVG()}</div>
    <div class="wrap" style="position:relative;z-index:2;padding:70px 24px 60px;max-width:760px;">
      <div class="section-label" style="color:#7fd6ff;">Our story</div>
      <h1 style="font-size:38px;margin:14px 0 16px;">We built Vertex because tech shopping shouldn't feel like guesswork.</h1>
      <p style="color:#a9b2cf;font-size:15px;">Founded by engineers frustrated with inflated spec sheets and vague warranties, Vertex tests every product it sells and stands behind it for two years.</p>
    </div>
  </div>
  <div class="wrap" style="padding:56px 0;">
    <div class="grid grid-4" style="margin-bottom:60px;">
      <div class="stat-tile"><div class="n">2018</div><div style="font-size:12.5px;color:var(--muted);margin-top:6px;">Founded</div></div>
      <div class="stat-tile"><div class="n">14K+</div><div style="font-size:12.5px;color:var(--muted);margin-top:6px;">Products sold</div></div>
      <div class="stat-tile"><div class="n">98%</div><div style="font-size:12.5px;color:var(--muted);margin-top:6px;">On-time delivery</div></div>
      <div class="stat-tile"><div class="n">4.8/5</div><div style="font-size:12.5px;color:var(--muted);margin-top:6px;">Average rating</div></div>
    </div>
    <div class="grid grid-3" style="margin-bottom:60px;">
      <div class="value-card"><h3 style="font-size:16px;margin-bottom:8px;">Our mission</h3><p style="font-size:13.5px;color:var(--muted);line-height:1.7;">Make buying technology transparent — real specs, honest pricing, and support that actually solves problems.</p></div>
      <div class="value-card"><h3 style="font-size:16px;margin-bottom:8px;">Our vision</h3><p style="font-size:13.5px;color:var(--muted);line-height:1.7;">Become the most trusted electronics retailer for people who care about what's inside the box, not just the box.</p></div>
      <div class="value-card"><h3 style="font-size:16px;margin-bottom:8px;">Quality commitment</h3><p style="font-size:13.5px;color:var(--muted);line-height:1.7;">Every product is benchmarked in-house before listing, and every listing states real, verified specifications.</p></div>
    </div>
    <div class="section-head"><h2 style="font-size:22px;">Why customers choose Vertex</h2></div>
    <div class="grid grid-4">
      ${[
        {i:'shield',t:'2-year warranty',d:'Standard on every product, no fine print.'},
        {i:'truck',t:'Fast, tracked delivery',d:'Free over $75, express options everywhere.'},
        {i:'scale',t:'Honest comparisons',d:'Real specs, side-by-side, no marketing spin.'},
        {i:'zap',t:'Technology expertise',d:'In-house engineers vet every listing.'},
      ].map(v=>`<div class="value-card" style="text-align:center;"><div style="width:34px;height:34px;margin:0 auto 12px;color:var(--accent);">${icon(v.i)}</div><h4 style="font-size:14.5px;margin-bottom:6px;">${v.t}</h4><p style="font-size:12.5px;color:var(--muted);">${v.d}</p></div>`).join('')}
    </div>
  </div>`;
}

/*PAGE: FAQ */
const FAQS = [
  {cat:'Orders', q:'How do I track my order?', a:'Once your order ships, you\'ll receive a tracking link by email. You can also check status anytime from your account order history.'},
  {cat:'Orders', q:'Can I change or cancel my order?', a:'Orders can be modified or cancelled within 1 hour of placement. Contact support immediately and we\'ll do our best to accommodate the change.'},
  {cat:'Payments', q:'What payment methods are accepted?', a:'We accept all major credit and debit cards, PayPal, Apple Pay, and cash on delivery in select regions.'},
  {cat:'Payments', q:'Is my payment information secure?', a:'Yes — all transactions are encrypted end-to-end and we never store full card numbers on our servers.'},
  {cat:'Shipping', q:'How long does delivery take?', a:'Standard shipping takes 2–4 business days and is free on orders over $75. Express delivery (1–2 days) is available at checkout.'},
  {cat:'Shipping', q:'Do you ship internationally?', a:'We currently ship to over 30 countries. Shipping costs and timelines are calculated automatically at checkout based on destination.'},
  {cat:'Returns', q:'What is your return policy?', a:'You may return most items within 30 days of delivery for a full refund, provided they\'re unused and in original packaging.'},
  {cat:'Returns', q:'How do I start a return or exchange?', a:'Go to your account order history, select the item, and choose "Start a return." A prepaid shipping label will be emailed to you.'},
  {cat:'Warranty', q:'What does the 2-year warranty cover?', a:'It covers manufacturing defects in materials and workmanship. It does not cover accidental damage, misuse, or normal wear.'},
  {cat:'Availability', q:'A product I want is out of stock — what now?', a:'Click "Notify me" on the product page and we\'ll email you the moment it\'s back in stock, usually within 1–2 weeks.'},
  {cat:'Technical support', q:'Do you offer setup or technical support?', a:'Yes — our support team can help with setup, troubleshooting, and compatibility questions via chat, email, or phone.'},
  {cat:'Exchanges', q:'Can I exchange for a different model?', a:'Yes, exchanges are treated as a return plus a new order. Price differences are refunded or charged accordingly.'},
];
function pageFAQ(){
  const groups = {};
  FAQS.forEach(f=>{ (groups[f.cat]=groups[f.cat]||[]).push(f); });
  return `
  <div class="wrap" style="padding:40px 0 60px;max-width:800px;">
    <h1 style="font-size:28px;margin-bottom:6px;">Support &amp; FAQ</h1>
    <p style="color:var(--muted);margin-bottom:30px;">Answers to the questions we hear most. Can't find yours? <a href="contact.html" style="color:var(--accent);">Contact us</a>.</p>
    ${Object.keys(groups).map(cat=>`
      <h3 style="font-size:14px;text-transform:uppercase;letter-spacing:.05em;color:var(--accent);margin:28px 0 6px;font-family:var(--font-mono);">${cat}</h3>
      ${groups[cat].map((f,i)=>`
      <div class="faq-item" id="faq-${cat}-${i}">
        <button class="faq-q" onclick="document.getElementById('faq-${cat}-${i}').classList.toggle('open')">
          ${f.q} <span class="chev">${icon('plus')}</span>
        </button>
        <div class="faq-a">${f.a}</div>
      </div>`).join('')}
    `).join('')}
  </div>`;
}

/*PAGE: CONTACT*/
function pageContact(){
  return `
  <div class="wrap" style="padding:40px 0 60px;">
    <h1 style="font-size:28px;margin-bottom:6px;">Contact us</h1>
    <p style="color:var(--muted);margin-bottom:34px;max-width:520px;">Our support team typically replies within one business day.</p>
    <div style="display:grid;grid-template-columns:1.3fr 1fr;gap:40px;" class="checkout-grid">
      <form class="card" style="padding:26px;" onsubmit="event.preventDefault();toast('Message sent — we\'ll reply within 1 business day.','mail');this.reset();">
        <div class="form-row2">
          <div class="form-field"><label>Name</label><input required placeholder="Your name"></div>
          <div class="form-field"><label>Email</label><input type="email" required placeholder="you@email.com"></div>
        </div>
        <div class="form-row2">
          <div class="form-field"><label>Phone (optional)</label><input placeholder="+92 300 1234567"></div>
          <div class="form-field"><label>Subject</label><select><option>Order support</option><option>Product question</option><option>Returns &amp; warranty</option><option>Partnership</option><option>Other</option></select></div>
        </div>
        <div class="form-field"><label>Message</label><textarea rows="5" required placeholder="How can we help?"></textarea></div>
        <button class="btn btn-primary" type="submit">Send message</button>
      </form>
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div class="card" style="padding:20px;display:flex;gap:14px;"><span style="color:var(--accent);">${icon('mail')}</span><div><b style="font-size:13.5px;">Email</b><p style="font-size:13px;color:var(--muted);">support@vertexelectronics.example</p></div></div>
        <div class="card" style="padding:20px;display:flex;gap:14px;"><span style="color:var(--accent);">${icon('clock')}</span><div><b style="font-size:13.5px;">Business hours</b><p style="font-size:13px;color:var(--muted);">Mon–Sat, 9:00 AM – 8:00 PM (PKT)</p></div></div>
        <div class="card" style="padding:20px;display:flex;gap:14px;"><span style="color:var(--accent);">${icon('map')}</span><div><b style="font-size:13.5px;">Flagship store</b><p style="font-size:13px;color:var(--muted);">Shahrah-e-Faisal, Karachi, Pakistan</p></div></div>
        <div class="card" style="padding:0;overflow:hidden;">
          <div style="aspect-ratio:16/9;background:var(--grey);display:flex;align-items:center;justify-content:center;color:var(--muted);">
            <div style="text-align:center;"><div style="width:28px;height:28px;margin:0 auto 6px;">${icon('map')}</div><span style="font-size:12px;">Store location map</span></div>
          </div>
        </div>
        <div class="social-row" style="justify-content:flex-start;">
          <a href="#" style="border-color:var(--border-dark);color:var(--ink);width:34px;height:34px;">${icon('mail')}</a>
        </div>
      </div>
    </div>
  </div>`;
}

/*PAGE: ACCOUNT*/
function pageAccount(){
  return `<div class="wrap" style="padding:70px 0;text-align:center;">
    <div style="color:var(--accent);margin:0 auto 16px;width:48px;height:48px;"><svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg></div>
    <h1 style="font-size:24px;margin-bottom:10px;">Account</h1>
    <p style="color:var(--muted);max-width:420px;margin:0 auto 22px;">Sign-in isn't wired up in this preview — browse freely. Your cart, wishlist, and compare list are saved on this device.</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
      <a href="wishlist.html" class="btn btn-outline">${icon('heart')} View wishlist</a>
      <a href="cart.html" class="btn btn-outline">${icon('cart')} View cart</a>
      <a href="shop.html" class="btn btn-primary">Continue shopping</a>
    </div>
  </div>`;
}

/*CHROME (shared navbar/footer bits) + PER-PAGE RENDER*/
function renderCatbar(){
  document.getElementById('catbar-inner').innerHTML = CATEGORIES.map(c=>`<a href="category.html?id=${c.id}">${c.name}</a>`).join('');
  document.getElementById('mobile-menu-links').innerHTML =
    ['index.html::Home','shop.html::Shop','deals.html::Deals','gaming.html::Gaming','brands.html::Brands','about.html::About','faq.html::Support / FAQ','contact.html::Contact','wishlist.html::Wishlist','cart.html::Cart']
    .map(s=>{const [h,l]=s.split('::');return `<a href="${h}" style="padding:12px 4px;border-bottom:1px solid var(--border);" onclick="closeMobileMenu()">${l}</a>`;}).join('');
}
function closeMobileMenu(){
  document.getElementById('mobile-menu').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
}
function highlightNav(){
  const current = location.pathname.split('/').pop() + location.search;
  const currentNoQuery = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href = a.getAttribute('href');
    a.classList.toggle('active', href===current || (href===currentNoQuery && !location.search));
  });
}

function rerender(){
  if(typeof window.renderCurrentPage !== 'function') return;
  document.getElementById('app').innerHTML = window.renderCurrentPage();
  if(window.CURRENT_PAGE==='deals'){ initCountdown(); }
  else if(window.__vertexCountdown){ clearInterval(window.__vertexCountdown); window.__vertexCountdown=null; }
  updateCounts();
  highlightNav();
  closeMobileMenu();
}
function initChrome(){
  loadState();
  renderCatbar();
  updateCounts();
  document.getElementById('overlay').addEventListener('click', ()=>{ closeMobileMenu(); closeQuickView(); });
  document.getElementById('btn-mobile-menu').addEventListener('click', ()=>{
    document.getElementById('mobile-menu').classList.add('show');
    document.getElementById('overlay').classList.add('show');
  });
  document.getElementById('btn-close-mobile').addEventListener('click', closeMobileMenu);
  document.getElementById('search-input').addEventListener('keydown', e=>{
    if(e.key==='Enter'){ location.href = 'shop.html?q=' + encodeURIComponent(e.target.value); }
  });
  rerender();
  window.scrollTo(0,0);
}
document.addEventListener('DOMContentLoaded', initChrome);
