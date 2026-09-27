const categories = [{
  id: 1,
  name: 'Appetizers',
  description: 'Small plates to start the table',
  icon: 'AP'
}, {
  id: 2,
  name: 'Soups and Salads',
  description: 'Fresh, bright and comforting',
  icon: 'SS'
}, {
  id: 3,
  name: 'Main Course',
  description: 'Signature plates from our kitchen',
  icon: 'MC'
}, {
  id: 4,
  name: 'Pizzas',
  description: 'Hand stretched and wood fired',
  icon: 'PZ'
}, {
  id: 5,
  name: 'Burgers',
  description: 'Stacked with house made flavor',
  icon: 'BG'
}, {
  id: 6,
  name: 'Desserts',
  description: 'A sweet finish to every meal',
  icon: 'DS'
}, {
  id: 7,
  name: 'Beverages',
  description: 'Refreshing pours and warm drinks',
  icon: 'BV'
}, {
  id: 8,
  name: 'Specials',
  description: 'Seasonal favorites and chef picks',
  icon: 'SP'
}];

const tags = ['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Spicy', "Chef's Special"];

let items = [{
    id: 1,
    name: 'Truffle Arancini',
    description: 'Crispy risotto bites, mozzarella center, truffle aioli.',
    price: 12.5,
    category: 1,
    tags: ['Vegetarian', 'Chef\'s Special'],
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600'
  },
  {
    id: 2,
    name: 'Garden Harvest Salad',
    description: 'Baby greens, roasted beet, citrus, toasted seeds.',
    price: 14,
    category: 2,
    tags: ['Vegan', 'Gluten-Free'],
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600'
  },
  {
    id: 3,
    name: 'Roasted Herb Chicken',
    description: 'Free range chicken, golden potatoes, pan jus.',
    price: 24,
    category: 3,
    tags: ['Gluten-Free'],
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600'
  },
  {
    id: 4,
    name: 'Spicy Soppressata Pizza',
    description: 'Tomato, mozzarella, soppressata, chili honey.',
    price: 19.5,
    category: 4,
    tags: ['Spicy', 'Chef\'s Special'],
    status: 'Limited Stock',
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600'
  },
  {
    id: 5,
    name: 'The Market Burger',
    description: 'Dry aged beef, smoked cheddar, onion jam, brioche.',
    price: 18,
    category: 5,
    tags: ['Non-Vegetarian'],
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600'
  },
  {
    id: 6,
    name: 'Lemon Olive Oil Cake',
    description: 'Whipped mascarpone, seasonal berries, lemon zest.',
    price: 10,
    category: 6,
    tags: ['Vegetarian'],
    status: 'New Item',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600'
  },
  {
    id: 7,
    name: 'Citrus Mint Spritz',
    description: 'Fresh citrus, mint, sparkling water, elderflower.',
    price: 8,
    category: 7,
    tags: ['Vegan', 'Gluten-Free'],
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600'
  },
  {
    id: 8,
    name: 'Chef\'s Seasonal Risotto',
    description: 'Creamy arborio rice, market vegetables, parmesan.',
    price: 22,
    category: 8,
    tags: ['Vegetarian', 'Chef\'s Special'],
    status: 'Out of Stock',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600'
  }
];

let inventory = [{
  name: 'Arborio rice',
  level: 12,
  unit: 'kg',
  min: 8,
  linked: 'Seasonal Risotto'
}, {
  name: 'Mozzarella',
  level: 5,
  unit: 'kg',
  min: 6,
  linked: 'Pizza, Arancini'
}, {
  name: 'Baby greens',
  level: 18,
  unit: 'bags',
  min: 10,
  linked: 'Harvest Salad'
}, {
  name: 'Soppressata',
  level: 3,
  unit: 'kg',
  min: 5,
  linked: 'Spicy Soppressata'
}, {
  name: 'Citrus',
  level: 26,
  unit: 'kg',
  min: 12,
  linked: 'Spritz, Cake'
}];

let offers = [{
  id: 1,
  name: 'Weekend welcome',
  type: 'percent',
  value: 15,
  active: true,
  scope: 'All items'
}, {
  id: 2,
  name: 'Sweet finish',
  type: 'fixed',
  value: 3,
  active: true,
  scope: 'Desserts'
}];

let versions = [{
  id: 1,
  version: 'v2.4',
  date: 'Today, 09:42 AM',
  summary: 'Updated seasonal specials and pricing',
  user: 'Zoe Winslow'
}, {
  id: 2,
  version: 'v2.3',
  date: 'May 18, 2025',
  summary: 'Added 3 new menu items',
  user: 'Anna Alexander'
}, {
  id: 3,
  version: 'v2.2',
  date: 'May 04, 2025',
  summary: 'Spring menu refresh',
  user: 'Invi Lee'
}];

let users = [{
  name: 'Zoe Winslow',
  email: 'admin@menupro.test',
  password: 'admin123',
  role: 'Admin'
}, {
  name: 'Anna Alexander',
  email: 'manager@menupro.test',
  password: 'manager123',
  role: 'Manager'
}, {
  name: 'Invi Lee',
  email: 'staff@menupro.test',
  password: 'staff123',
  role: 'Staff'
}];

let currentUser = null,
  activePage = 'dashboard',
  editingId = null;

const icons = {
  dashboard: 'M3 12 12 3l9 9M5 10v10h14V10M9 20v-6h6v6',
  items: 'M4 6h16M4 12h16M4 18h10',
  categories: 'M4 5h16v14H4zM8 9h8M8 13h5',
  inventory: 'M5 20V8l7-4 7 4v12M9 20v-7h6v7',
  offers: 'M20 12 12 20l-8-8V4h8zM8 8h.01',
  tags: 'M20 12 12 20l-8-8V4h8zM8 8h.01',
  versions: 'M12 8v4l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0',
  analytics: 'M4 19V5M4 19h16M8 16v-5M12 16V7M16 16v-8',
  reports: 'M6 3h9l3 3v15H6zM9 12h6M9 16h6',
  menu: 'M4 5h16M4 12h16M4 19h16'
};

const navItems = [{
  key: 'dashboard',
  label: 'Dashboard',
  icon: 'dashboard'
}, {
  key: 'items',
  label: 'Menu items',
  icon: 'items'
}, {
  key: 'categories',
  label: 'Categories',
  icon: 'categories'
}, {
  key: 'inventory',
  label: 'Inventory',
  icon: 'inventory'
}, {
  key: 'offers',
  label: 'Pricing and offers',
  icon: 'offers'
}];

const manageItems = [{
  key: 'tags',
  label: 'Dietary tags',
  icon: 'tags'
}, {
  key: 'versions',
  label: 'Menu versions',
  icon: 'versions'
}, {
  key: 'analytics',
  label: 'Analytics',
  icon: 'analytics'
}, {
  key: 'reports',
  label: 'Reports',
  icon: 'reports'
}];

const svg = key => `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="${icons[key]}"/></svg>`;

function renderNav() {
  document.getElementById('nav').innerHTML = navItems.map(n => `<button data-page="${n.key}" class="nav-btn ${activePage===n.key?'nav-active':''} w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-left">${svg(n.icon)}${n.label}</button>`).join('');

  document.getElementById('manageNav').innerHTML = manageItems.map(n => `<button data-page="${n.key}" class="nav-btn ${activePage===n.key?'nav-active':''} w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-left">${svg(n.icon)}${n.label}</button>`).join('');

  document.querySelectorAll('.nav-btn').forEach(b => b.onclick = () => {
    activePage = b.dataset.page;
    render();
    closeSidebar();
  });
}

const money = n => '$' + Number(n).toFixed(2);
const catName = id => (categories.find(c => c.id == id) || {}).name || 'Uncategorized';

function statusBadge(s) {
  let c = s === 'Available' ? '#e8f7f0' : s === 'Out of Stock' ? '#fdecec' : s === 'Limited Stock' ? '#fff6df' : 'var(--color-accent)';
  let t = s === 'Available' ? 'var(--color-success)' : s === 'Out of Stock' ? 'var(--color-danger)' : 'var(--color-warning)';
  return `<span class="badge" style="background:${c};color:${t}">${s}</span>`;
}

function pageTitle(title, sub, action = '') {
  return `<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"><div><p class="text-sm font-semibold mb-2" style="color:var(--color-primary)">MenuPro workspace</p><h1 class="font-heading text-3xl sm:text-4xl">${title}</h1><p class="mt-2" style="color:var(--color-muted)">${sub}</p></div>${action}</div>`;
}

function dashboard() {
  let low = inventory.filter(i => i.level <= i.min);

  return pageTitle('Hello, world! :) ', 'Here is what is happening across your menu today.', `<button class="btn-primary px-5 py-3 text-sm font-bold" onclick="openItemModal()">+ Add menu item</button>`) +
    `<div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-7">${[['Total menu items',items.length,'+12% this month','items'],['Categories',categories.length,'Fully organized','categories'],['Low stock alerts',low.length,low.length?'Needs attention':'All healthy','inventory'],['Menu views','12,840','+18.4% this week','analytics']].map(x=>`<div class="card p-5"><div class="flex justify-between items-start"><span class="text-sm" style="color:var(--color-muted)">${x[0]}</span><span class="p-2 rounded-lg" style="background:var(--color-accent);color:var(--color-primary)">${svg(x[3])}</span></div><div class="font-heading text-3xl mt-4">${x[1]}</div><div class="text-xs mt-2" style="color:${x[3]==='inventory'&&low.length?'var(--color-danger)':'var(--color-success)'}">${x[2]}</div></div>`).join('')}</div>` +
    `<div class="grid xl:grid-cols-3 gap-5"><div class="card p-6 xl:col-span-2"><div class="flex items-center justify-between mb-6"><div><h2 class="font-heading text-xl">Popular items</h2><p class="text-sm mt-1" style="color:var(--color-muted)">Based on simulated menu views</p></div><button class="text-sm font-bold" style="color:var(--color-primary)" onclick="go('analytics')">View analytics</button></div>${items.slice(0,5).map((i,n)=>`<div class="flex items-center gap-4 py-3 border-b last:border-0" style="border-color:var(--color-border)"><div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm" style="background:var(--color-accent);color:var(--color-primary)">${String(n+1).padStart(2,'0')}</div><div class="flex-1"><div class="font-semibold text-sm">${i.name}</div><div class="text-xs mt-1" style="color:var(--color-muted)">${catName(i.category)}</div></div><div class="text-right"><div class="font-semibold text-sm">${[2840,2190,1840,1620,1405][n].toLocaleString()}</div><div class="text-xs" style="color:var(--color-muted)">views</div></div></div>`).join('')}</div><div class="card p-6"><div class="flex justify-between mb-6"><div><h2 class="font-heading text-xl">Inventory alerts</h2><p class="text-sm mt-1" style="color:var(--color-muted)">Restock before service</p></div><button onclick="go('inventory')" style="color:var(--color-primary)">${svg('inventory')}</button></div>${low.map(i=>`<div class="flex items-center justify-between py-4 border-b" style="border-color:var(--color-border)"><div><div class="font-semibold text-sm">${i.name}</div><div class="text-xs mt-1" style="color:var(--color-muted)">Used in ${i.linked}</div></div><span class="badge" style="background:#fdecec;color:var(--color-danger)">${i.level} ${i.unit} left</span></div>`).join('')||'<p class="text-sm" style="color:var(--color-muted)">No low stock alerts today.</p>'}<button onclick="go('inventory')" class="btn-soft w-full py-3 text-sm font-bold mt-5">Manage inventory</button></div></div>`;
}

function itemsPage() {
  let q = (document.getElementById('globalSearch')?.value || '').toLowerCase();
  let list = items.filter(i => i.name.toLowerCase().includes(q) || catName(i.category).toLowerCase().includes(q));

  return pageTitle('Menu items', 'Create, organize, and keep your offerings fresh.', `<button class="btn-primary px-5 py-3 text-sm font-bold" onclick="openItemModal()">+ Add menu item</button>`) +
    `<div class="card overflow-hidden"><div class="p-5 border-b flex flex-wrap gap-3" style="border-color:var(--color-border)"><select id="itemFilter" class="field px-3 py-2 text-sm" onchange="render()"><option value="">All categories</option>${categories.map(c=>`<option>${c.name}</option>`).join('')}</select><select class="field px-3 py-2 text-sm" onchange="filterStatus(this.value)"><option value="">All statuses</option><option>Available</option><option>Limited Stock</option><option>Out of Stock</option><option>New Item</option></select><span class="text-sm ml-auto self-center" style="color:var(--color-muted)">${list.length} items</span></div><div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 p-5">${list.map(i=>`<div class="border rounded-2xl overflow-hidden" style="border-color:var(--color-border)"><img src="${i.image}" alt="${i.name}" class="w-full h-40 object-cover" onerror="this.style.display='none'"><div class="p-4"><div class="flex justify-between gap-2"><h3 class="font-heading text-lg">${i.name}</h3>${statusBadge(i.status)}</div><p class="text-sm mt-2 line-clamp-2" style="color:var(--color-muted)">${i.description}</p><div class="flex gap-1 flex-wrap mt-3">${i.tags.map(t=>`<span class="badge" style="background:var(--color-accent);color:var(--color-primary)">${t}</span>`).join('')}</div><div class="flex items-center justify-between mt-5"><strong class="font-heading text-lg">${money(i.price)}</strong><div class="flex gap-2"><button class="text-xs font-bold px-3 py-2 rounded-lg" style="color:var(--color-primary);background:var(--color-accent)" onclick="openItemModal(${i.id})">Edit</button><button class="text-xs font-bold px-3 py-2 rounded-lg" style="color:var(--color-danger);background:#fdecec" onclick="removeItem(${i.id})">Delete</button></div></div></div></div>`).join('')}</div></div>`;
}

function categoriesPage() {
  return pageTitle('Categories', 'Give guests and staff a clear path through your menu.', `<button class="btn-primary px-5 py-3 text-sm font-bold" onclick="openCategoryModal()">+ Add category</button>`) +
    `<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">${categories.map(c=>`<div class="card p-5"><div class="flex items-center justify-between"><div class="w-11 h-11 rounded-xl flex items-center justify-center font-heading" style="background:var(--color-accent);color:var(--color-primary)">${c.icon}</div><div class="flex gap-2"><button class="text-xs" style="color:var(--color-primary)" onclick="openCategoryModal(${c.id})">Edit</button><button class="text-xs" style="color:var(--color-danger)" onclick="removeCategory(${c.id})">Delete</button></div></div><h3 class="font-heading text-lg mt-5">${c.name}</h3><p class="text-sm mt-1" style="color:var(--color-muted)">${c.description}</p><p class="text-xs mt-5 font-bold" style="color:var(--color-primary)">${items.filter(i=>i.category===c.id).length} menu items</p></div>`).join('')}</div>`;
}

function inventoryPage() {
  return pageTitle('Inventory tracking', 'Keep ingredients ready for every service.', '') +
    `<div class="card overflow-hidden"><div class="p-5 border-b flex justify-between items-center" style="border-color:var(--color-border)"><div><h2 class="font-heading text-xl">Ingredient levels</h2><p class="text-sm mt-1" style="color:var(--color-muted)">Threshold alerts are simulated in memory.</p></div><button class="btn-primary px-4 py-2 text-sm" onclick="addInventory()">+ Add ingredient</button></div><div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr style="color:var(--color-muted)"><th class="p-4">Ingredient</th><th class="p-4">Level</th><th class="p-4">Minimum</th><th class="p-4">Linked menu items</th><th class="p-4">Status</th><th class="p-4">Action</th></tr></thead><tbody>${inventory.map((i,n)=>`<tr class="border-t" style="border-color:var(--color-border)"><td class="p-4 font-semibold">${i.name}</td><td class="p-4">${i.level} ${i.unit}</td><td class="p-4">${i.min} ${i.unit}</td><td class="p-4" style="color:var(--color-muted)">${i.linked}</td><td class="p-4">${i.level<=i.min?'<span class="badge" style="background:#fdecec;color:var(--color-danger)">Low stock</span>':'<span class="badge" style="background:#e8f7f0;color:var(--color-success)">Healthy</span>'}</td><td class="p-4"><button class="font-bold" style="color:var(--color-primary)" onclick="restock(${n})">Restock</button></td></tr>`).join('')}</tbody></table></div></div>`;
}

function offersPage() {
  return pageTitle('Pricing and offers', 'Set confident prices and create offers that convert.', '') +
    `<div class="grid lg:grid-cols-3 gap-5"><div class="card p-6 lg:col-span-2"><div class="flex justify-between items-center mb-5"><h2 class="font-heading text-xl">Special offers</h2><button class="btn-primary px-4 py-2 text-sm" onclick="openOfferModal()">+ New offer</button></div>${offers.map(o=>`<div class="flex flex-wrap gap-4 items-center justify-between p-4 rounded-xl mb-3" style="background:var(--color-bg)"><div><div class="font-semibold">${o.name}</div><div class="text-sm mt-1" style="color:var(--color-muted)">${o.scope} · ${o.type==='percent'?o.value+'% off':money(o.value)+' off'}</div></div><div class="flex items-center gap-3"><span class="badge" style="background:${o.active?'#e8f7f0':'var(--color-border)'};color:${o.active?'var(--color-success)':'var(--color-muted)'}">${o.active?'Active':'Paused'}</span><button onclick="toggleOffer(${o.id})" class="text-sm font-bold" style="color:var(--color-primary)">${o.active?'Pause':'Activate'}</button></div></div>`).join('')}</div><div class="card p-6"><h2 class="font-heading text-xl">Price summary</h2><p class="text-sm mt-2" style="color:var(--color-muted)">Average menu price</p><strong class="font-heading text-4xl block mt-4">${money(items.reduce((a,b)=>a+b.price,0)/items.length)}</strong><div class="mt-7 space-y-4">${items.slice(0,4).map(i=>`<div class="flex justify-between text-sm"><span>${i.name}</span><b>${money(i.price)}</b></div>`).join('')}</div></div></div>`;
}

function tagsPage() {
  return pageTitle('Dietary tags', 'Keep ingredient choices visible and easy to understand.', `<button class="btn-primary px-5 py-3 text-sm font-bold" onclick="addTag()">+ Add tag</button>`) +
    `<div class="card p-6"><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">${tags.map((t,n)=>`<div class="flex items-center justify-between p-4 rounded-xl" style="background:var(--color-bg)"><span class="font-semibold">${t}</span><span class="text-xs" style="color:var(--color-muted)">${items.filter(i=>i.tags.includes(t)).length} items</span></div>`).join('')}</div></div>`;
}

function versionsPage() {
  return pageTitle('Menu versions', 'Review menu history and safely restore an earlier version.', `<button class="btn-primary px-5 py-3 text-sm font-bold" onclick="createVersion()">Save current version</button>`) +
    `<div class="card p-6">${versions.map((v,n)=>`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 border-b last:border-0" style="border-color:var(--color-border)"><div class="flex gap-4"><div class="w-12 h-12 rounded-xl flex items-center justify-center font-bold" style="background:var(--color-accent);color:var(--color-primary)">${v.version}</div><div><h3 class="font-semibold">${v.summary}</h3><p class="text-sm mt-1" style="color:var(--color-muted)">${v.date} · by ${v.user}</p></div></div><button onclick="restoreVersion('${v.version}')" class="btn-soft px-4 py-2 text-sm font-bold">Restore</button></div>`).join('')}</div>`;
}

function analyticsPage() {
  return pageTitle('Menu analytics', 'Understand what guests notice and what they order most.', '') +
    `<div class="grid sm:grid-cols-3 gap-4 mb-5">${[['Menu views','12,840','18.4%'],['Average order value','$36.40','8.2%'],['Conversion rate','11.8%','3.6%']].map(x=>`<div class="card p-5"><p class="text-sm" style="color:var(--color-muted)">${x[0]}</p><strong class="font-heading text-3xl block mt-3">${x[1]}</strong><span class="text-xs" style="color:var(--color-success)">Up ${x[2]} vs last period</span></div>`).join('')}</div>` +
    `<div class="grid lg:grid-cols-2 gap-5"><div class="card p-6"><h2 class="font-heading text-xl">Views this week</h2><div class="h-56 flex items-end gap-3 sm:gap-5 mt-8 border-b" style="border-color:var(--color-border)">${[42,58,48,76,66,91,82].map((h,n)=>`<div class="flex-1 flex flex-col items-center gap-2"><div class="bar w-full" style="height:${h}%"></div><span class="text-xs" style="color:var(--color-muted)">${['M','T','W','T','F','S','S'][n]}</span></div>`).join('')}</div></div><div class="card p-6"><h2 class="font-heading text-xl">Top categories</h2><div class="space-y-5 mt-7">${[['Main Course',82],['Pizzas',68],['Burgers',54],['Desserts',41]].map(x=>`<div><div class="flex justify-between text-sm mb-2"><span>${x[0]}</span><b>${x[1]}%</b></div><div class="h-2 rounded-full" style="background:var(--color-accent)"><div class="h-2 rounded-full" style="width:${x[1]}%;background:var(--color-primary)"></div></div></div>`).join('')}</div></div></div>`;
}

function reportsPage() {
  return pageTitle('Reports', 'Prepare a clear snapshot for your next team meeting.', '') +
    `<div class="grid md:grid-cols-2 gap-5"><div class="card p-6"><h2 class="font-heading text-xl">Menu report</h2><p class="text-sm mt-2" style="color:var(--color-muted)">Item list by category with current pricing and statuses.</p><div class="flex gap-3 mt-7"><button class="btn-primary px-4 py-2 text-sm" onclick="printReport('menu')">Print report</button><button class="btn-soft px-4 py-2 text-sm font-bold" onclick="downloadCSV()">Export CSV</button></div></div><div class="card p-6"><h2 class="font-heading text-xl">Inventory report</h2><p class="text-sm mt-2" style="color:var(--color-muted)">Low stock and out of stock ingredients for purchasing.</p><button class="btn-primary px-4 py-2 text-sm mt-7" onclick="printReport('inventory')">Print report</button></div></div><div id="reportPrint" class="report-print hidden card p-6 mt-5"><h2 class="font-heading text-2xl">MenuPro report</h2><div class="mt-4">${items.map(i=>`<p class="py-2 border-b" style="border-color:var(--color-border)">${catName(i.category)} · ${i.name} · ${money(i.price)} · ${i.status}</p>`).join('')}</div></div>`;
}

function digitalPage() {
  return `<div class="max-w-6xl mx-auto"><div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"><div><p class="font-heading text-2xl">MenuPro <span style="color:var(--color-primary)">/ The Garden Table</span></p><p class="text-sm mt-2" style="color:var(--color-muted)">Seasonal kitchen · Open today until 10 PM</p></div><div class="flex gap-2"><button class="btn-soft px-4 py-2 text-sm font-bold" onclick="go('dashboard')">Staff view</button><button class="btn-primary px-4 py-2 text-sm" onclick="showToast('QR menu link copied')">Share menu</button></div></div><div class="card p-6 sm:p-10 mb-10" style="background:linear-gradient(120deg,var(--color-accent),var(--color-surface))"><p class="text-xs uppercase tracking-widest font-bold" style="color:var(--color-primary)">Today\'s feature</p><div class="flex flex-col md:flex-row md:items-end justify-between gap-5"><div><h1 class="font-heading text-4xl sm:text-5xl mt-3">Made for lingering.</h1><p class="max-w-xl mt-3" style="color:var(--color-muted)">Thoughtful plates, bright ingredients, and a table worth gathering around.</p></div><button class="btn-primary px-5 py-3 font-bold">View chef's special</button></div></div>${categories.map(c=>{let ci=items.filter(i=>i.category===c.id);if(!ci.length)return '';return `<section class="mb-10"><div class="flex items-end justify-between mb-4"><div><h2 class="font-heading text-2xl">${c.name}</h2><p class="text-sm mt-1" style="color:var(--color-muted)">${c.description}</p></div><span class="text-xs" style="color:var(--color-muted)">${ci.length} selections</span></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">${ci.map(i=>`<article class="card overflow-hidden"><img src="${i.image}" alt="${i.name}" class="w-full h-48 object-cover"><div class="p-5"><div class="flex justify-between gap-3"><h3 class="font-heading text-lg">${i.name}</h3><strong style="color:var(--color-primary)">${money(i.price)}</strong></div><p class="text-sm leading-6 mt-2" style="color:var(--color-muted)">${i.description}</p><div class="flex flex-wrap gap-1 mt-4">${i.tags.map(t=>`<span class="badge" style="background:var(--color-accent);color:var(--color-primary)">${t}</span>`).join('')}</div><div class="mt-4">${statusBadge(i.status)}</div></div></article>`).join('')}</div></section>`}).join('')}</div>`;
}

function render() {
  renderNav();

  let pages = {
    dashboard,
    items: itemsPage,
    categories: categoriesPage,
    inventory: inventoryPage,
    offers: offersPage,
    tags: tagsPage,
    versions: versionsPage,
    analytics: analyticsPage,
    reports: reportsPage,
    menu: digitalPage
  };

  document.getElementById('main').innerHTML = pages[activePage]();
}

function go(p) {
  activePage = p;
  render();
  window.scrollTo(0, 0);
}

function showToast(m) {
  let t = document.getElementById('toast');
  t.textContent = m;
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), 2500);
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('mobileOverlay').classList.add('hidden');
}

function modal(title, body) {
  document.getElementById('modalRoot').innerHTML = `<div class="modal-backdrop fixed inset-0 z-40 flex items-center justify-center p-4" style="background:rgba(45,27,36,.45)"><div class="card w-full max-w-lg max-h-[90vh] overflow-y-auto p-6"><div class="flex justify-between items-center mb-5"><h2 class="font-heading text-2xl">${title}</h2><button onclick="closeModal()" class="text-2xl" style="color:var(--color-muted)">×</button></div>${body}</div></div>`;
}

function closeModal() {
  document.getElementById('modalRoot').innerHTML = '';
}

function openItemModal(id) {
  let i = items.find(x => x.id === id) || {
    name: '',
    description: '',
    price: '',
    category: 1,
    tags: [],
    status: 'Available',
    image: ''
  };

  editingId = id || null;

  modal(id ? 'Edit menu item' : 'Add menu item', `<form onsubmit="saveItem(event)"><div class="space-y-4"><label class="block text-sm font-semibold">Name<input required id="fName" value="${i.name}" class="field w-full px-3 py-3 mt-1"></label><label class="block text-sm font-semibold">Description<textarea required id="fDesc" class="field w-full px-3 py-3 mt-1" rows="3">${i.description}</textarea></label><div class="grid grid-cols-2 gap-3"><label class="block text-sm font-semibold">Price<input required min="0" step=".01" type="number" id="fPrice" value="${i.price}" class="field w-full px-3 py-3 mt-1"></label><label class="block text-sm font-semibold">Category<select id="fCat" class="field w-full px-3 py-3 mt-1">${categories.map(c=>`<option value="${c.id}" ${i.category===c.id?'selected':''}>${c.name}</option>`).join('')}</select></label></div><label class="block text-sm font-semibold">Image URL<input id="fImage" value="${i.image}" class="field w-full px-3 py-3 mt-1"></label><label class="block text-sm font-semibold">Status<select id="fStatus" class="field w-full px-3 py-3 mt-1">${['Available','Limited Stock','Out of Stock','New Item'].map(s=>`<option ${i.status===s?'selected':''}>${s}</option>`).join('')}</select></label><fieldset><legend class="text-sm font-semibold mb-2">Dietary tags</legend><div class="flex flex-wrap gap-2">${tags.map(t=>`<label class="text-xs px-3 py-2 rounded-lg" style="background:var(--color-accent);color:var(--color-primary)"><input type="checkbox" name="tag" value="${t}" ${i.tags.includes(t)?'checked':''}> ${t}</label>`).join('')}</div></fieldset><button class="btn-primary w-full py-3 font-bold mt-2">${id?'Save changes':'Add item'}</button></div></form>`);
}

function saveItem(e) {
  e.preventDefault();

  let obj = {
    id: editingId || Date.now(),
    name: fName.value,
    description: fDesc.value,
    price: Number(fPrice.value),
    category: Number(fCat.value),
    tags: [...document.querySelectorAll('[name=tag]:checked')].map(x => x.value),
    status: fStatus.value,
    image: fImage.value || 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600'
  };

  if (editingId) items = items.map(i => i.id === editingId ? obj : i);
  else items.push(obj);

  closeModal();
  render();
  showToast(editingId ? 'Menu item updated' : 'Menu item added');
}

function removeItem(id) {
  if (confirm('Delete this menu item? This action cannot be undone.')) {
    items = items.filter(i => i.id !== id);
    render();
    showToast('Menu item deleted');
  }
}

function openCategoryModal(id) {
  let c = categories.find(x => x.id === id) || {
    name: '',
    description: '',
    icon: 'CT'
  };

  editingId = id || null;

  modal(id ? 'Edit category' : 'Add category', `<form onsubmit="saveCategory(event)" class="space-y-4"><label class="block text-sm font-semibold">Name<input required id="cName" value="${c.name}" class="field w-full px-3 py-3 mt-1"></label><label class="block text-sm font-semibold">Description<textarea required id="cDesc" class="field w-full px-3 py-3 mt-1" rows="3">${c.description}</textarea></label><label class="block text-sm font-semibold">Short icon<input maxlength="2" id="cIcon" value="${c.icon}" class="field w-full px-3 py-3 mt-1"></label><button class="btn-primary w-full py-3 font-bold">${id?'Save changes':'Add category'}</button></form>`);
}

function saveCategory(e) {
  e.preventDefault();

  let c = {
    id: editingId || Date.now(),
    name: cName.value,
    description: cDesc.value,
    icon: cIcon.value || 'CT'
  };

  if (editingId) Object.assign(categories.find(x => x.id === editingId), c);
  else categories.push(c);

  closeModal();
  render();
  showToast('Category saved');
}

function removeCategory(id) {
  if (items.some(i => i.category === id)) {
    showToast('Move its items before deleting this category');
    return;
  }

  if (confirm('Delete this category?')) {
    categories.splice(categories.findIndex(c => c.id === id), 1);
    render();
    showToast('Category deleted');
  }
}

function openOfferModal() {
  modal('Create special offer', `<form onsubmit="saveOffer(event)" class="space-y-4"><label class="block text-sm font-semibold">Offer name<input required id="oName" class="field w-full px-3 py-3 mt-1"></label><div class="grid grid-cols-2 gap-3"><label class="block text-sm font-semibold">Discount type<select id="oType" class="field w-full px-3 py-3 mt-1"><option value="percent">Percentage</option><option value="fixed">Fixed amount</option></select></label><label class="block text-sm font-semibold">Value<input required min="0" type="number" step=".01" id="oValue" class="field w-full px-3 py-3 mt-1"></label></div><label class="block text-sm font-semibold">Applies to<select id="oScope" class="field w-full px-3 py-3 mt-1"><option>All items</option>${categories.map(c=>`<option>${c.name}</option>`).join('')}</select></label><button class="btn-primary w-full py-3 font-bold">Create offer</button></form>`);
}

function saveOffer(e) {
  e.preventDefault();

  offers.push({
    id: Date.now(),
    name: oName.value,
    type: oType.value,
    value: Number(oValue.value),
    scope: oScope.value,
    active: true
  });

  closeModal();
  render();
  showToast('Offer created');
}

function toggleOffer(id) {
  let o = offers.find(x => x.id === id);
  o.active = !o.active;
  render();
  showToast(o.active ? 'Offer activated' : 'Offer paused');
}

function restock(n) {
  inventory[n].level += 10;
  render();
  showToast(`${inventory[n].name} restocked`);
}

function addInventory() {
  let name = prompt('Ingredient name');

  if (name) {
    inventory.push({
      name,
      level: 20,
      unit: 'units',
      min: 8,
      linked: 'New menu item'
    });

    render();
    showToast('Ingredient added');
  }
}

function addTag() {
  let t = prompt('New dietary tag');

  if (t && !tags.includes(t)) {
    tags.push(t);
    render();
    showToast('Dietary tag added');
  }
}

function createVersion() {
  versions.unshift({
    id: Date.now(),
    version: 'v2.' + (versions.length + 4),
    date: 'Just now',
    summary: 'Saved current menu state',
    user: currentUser.name
  });

  render();
  showToast('Version saved');
}

function restoreVersion(v) {
  if (confirm(`Restore ${v}? This is an in-memory simulation.`)) {
    showToast(`${v} restored successfully`);
  }
}

function printReport() {
  document.getElementById('reportPrint').classList.remove('hidden');
  window.print();
}

function downloadCSV() {
  let csv = 'Category,Item,Price,Status\n' + items.map(i => `"${catName(i.category)}","${i.name}",${i.price},"${i.status}"`).join('\n');

  let a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], {
    type: 'text/csv'
  }));
  a.download = 'menupro-report.csv';
  a.click();
  showToast('CSV report downloaded');
}

function filterStatus(v) {
  document.querySelectorAll('[data-page]').length;

  let q = v.toLowerCase();

  if (!q) {
    render();
    return;
  }

  let old = items;
  items = items.filter(i => i.status.toLowerCase() === q);
  render();
  items = old;
}

function auth(mode = 'login') {
  document.getElementById('authContent').innerHTML = mode === 'login' ? `<h2 class="font-heading text-2xl">Welcome back</h2><p class="text-sm mt-2" style="color:var(--color-muted)">Sign in to manage your restaurant menu.</p><form onsubmit="login(event)" class="space-y-4 mt-7"><label class="block text-sm font-semibold">Email<input required id="email" type="email" value="admin@menupro.test" class="field w-full px-3 py-3 mt-1"></label><label class="block text-sm font-semibold">Password<input required id="password" type="password" value="admin123" class="field w-full px-3 py-3 mt-1"></label><button class="btn-primary w-full py-3 font-bold">Sign in</button></form><div class="text-center text-sm mt-5" style="color:var(--color-muted)">New to MenuPro? <button onclick="auth('register')" class="font-bold" style="color:var(--color-primary)">Create an account</button></div><p class="text-xs text-center mt-6 p-3 rounded-lg" style="background:var(--color-bg);color:var(--color-muted)">Demo access: admin@menupro.test / admin123</p>` : `<h2 class="font-heading text-2xl">Create your account</h2><p class="text-sm mt-2" style="color:var(--color-muted)">Start organizing your restaurant today.</p><form onsubmit="register(event)" class="space-y-4 mt-7"><label class="block text-sm font-semibold">Full name<input required id="rName" class="field w-full px-3 py-3 mt-1"></label><label class="block text-sm font-semibold">Email<input required id="rEmail" type="email" class="field w-full px-3 py-3 mt-1"></label><label class="block text-sm font-semibold">Password<input required minlength="6" id="rPassword" type="password" class="field w-full px-3 py-3 mt-1"></label><label class="block text-sm font-semibold">Role<select id="rRole" class="field w-full px-3 py-3 mt-1"><option>Manager</option><option>Staff</option></select></label><button class="btn-primary w-full py-3 font-bold">Register</button></form><div class="text-center text-sm mt-5" style="color:var(--color-muted)">Already have an account? <button onclick="auth('login')" class="font-bold" style="color:var(--color-primary)">Sign in</button></div>`;
}

function login(e) {
  e.preventDefault();

  let u = users.find(x => x.email === email.value && x.password === password.value);

  if (!u) {
    alert('We could not match those credentials. Try the demo access shown below.');
    return;
  }

  startApp(u);
}

function register(e) {
  e.preventDefault();

  let u = {
    name: rName.value,
    email: rEmail.value,
    password: rPassword.value,
    role: rRole.value
  };

  users.push(u);
  startApp(u);
}

function startApp(u) {
  currentUser = u;
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  document.getElementById('userName').textContent = u.name;
  document.getElementById('userRole').textContent = u.role + ' access';
  document.getElementById('profileBtn').textContent = u.name[0];
  render();
}

document.getElementById('viewMenuBtn').onclick = () => go('menu');

document.getElementById('globalSearch').oninput = () => {
  if (activePage === 'items') render();
};

document.getElementById('themeBtn').onclick = () => document.body.classList.toggle('dark-mode');

document.getElementById('profileBtn').onclick = () => {
  if (confirm('Sign out of MenuPro?')) {
    document.getElementById('app').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
    auth('login');
  }
};

document.getElementById('menuToggle').onclick = () => {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('mobileOverlay').classList.remove('hidden');
};

document.getElementById('mobileOverlay').onclick = closeSidebar;

auth();
