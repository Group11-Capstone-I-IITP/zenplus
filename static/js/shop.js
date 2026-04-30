// Base URL for your GitHub repository images
const CDN_URL = "https://raw.githubusercontent.com/Group11-Capstone-I-IITP/zen_shop_images/main/";

const productData = {
  "Weight Loss": [
    {
      id: 101, name: "L-Carnitine Liquid", price: 1899, category: "Supplements", badge: "Fat Burn", badgeColor: "bg-orange-500/80", desc: "Converts fat into energy for intense workouts.", stockLabel: "Best Seller",
      image: CDN_URL + "l-carnitine.png",
    },
    {
      id: 102, name: "Fiber Pro Plus", price: 999, category: "Supplements", badge: "Digestion", badgeColor: "bg-green-500/80", desc: "Keep full for longer and manage appetite.",
      image: CDN_URL + "fiber-pro.png",
    },
    {
      id: 103, name: "Yoga Mat (Pro)", price: 1499, category: "Gear", badge: "Yoga", badgeColor: "bg-blue-500/80", desc: "Premium grip for your daily home sessions.",
      image: CDN_URL + "yoga-mat.png",
    },
    {
      id: 104, name: "Body Weight Scale", price: 2199, category: "Gear", badge: "Track", badgeColor: "bg-slate-500/80", desc: "Smart scale syncs with Zenpulse app.",
      image: CDN_URL + "scale.png",
    },
    {
      id: 105, name: "Detox Tea Set", price: 599, category: "Wellness", badge: "Cleanse", badgeColor: "bg-emerald-500/80", desc: "Natural herbs to boost metabolic rate.", stockLabel: "Only 3 left!",
      image: CDN_URL + "detox-tea.png",
    },
    {
      id: 106, name: "Fat Caliper", price: 299, category: "Gear", badge: "Measure", badgeColor: "bg-slate-500/80", desc: "Accurately measure body fat percentage.",
      image: CDN_URL + "fat-caliper.png",
    },
    {
      id: 107, name: "Jump Rope", price: 499, category: "Gear", badge: "Cardio", badgeColor: "bg-blue-500/80", desc: "High-speed ball bearing jump rope.",
      image: CDN_URL + "jump-rope.png",
    },
    {
      id: 108, name: "Meal Prep Containers", price: 899, category: "Gear", badge: "Diet", badgeColor: "bg-green-500/80", desc: "Set of 5 BPA-free portion control containers.",
      image: CDN_URL + "meal-prep.png",
    },
    {
      id: 109, name: "Green Tea Extract", price: 799, category: "Supplements", badge: "Metabolism", badgeColor: "bg-emerald-500/80", desc: "Antioxidant-rich capsules for daily wellness.",
      image: CDN_URL + "green-tea.png",
    },
    {
      id: 110, name: "Shaker Bottle", price: 349, category: "Gear", badge: "Hydrate", badgeColor: "bg-cyan-500/80", desc: "Leak-proof shaker with mixing ball.",
      image: CDN_URL + "shaker-bottle.png",
    }
  ],
  "Muscle Gain": [
    {
      id: 201, name: "Mass Gainer 2kg", price: 3499, category: "Supplements", badge: "High Calorie", badgeColor: "bg-red-500/80", desc: "1200kcal per serving to crush your goals.",
      image: CDN_URL + "mass-gainer.png",
    },
    {
      id: 202, name: "Adjustable Dumbbells", price: 8999, category: "Gear", badge: "Strength", badgeColor: "bg-slate-300/80", desc: "Space saving 2kg-20kg heavy weights.", stockLabel: "Best Seller",
      image: CDN_URL + "dumbbells.png",
    },
    {
      id: 203, name: "Wrist Wraps (Pair)", price: 799, category: "Gear", badge: "Support", badgeColor: "bg-indigo-500/80", desc: "Max support for heavy bench and overhead press.",
      image: CDN_URL + "wrist-wraps.png",
    },
    {
      id: 204, name: "ZMA Recovery", price: 1199, category: "Vitamins", badge: "Sleep", badgeColor: "bg-purple-500/80", desc: "Boost natural hormones for overnight repair.",
      image: CDN_URL + "zma.png",
    },
    {
      id: 205, name: "Pre-Workout Shot", price: 149, category: "Supplements", badge: "Power", badgeColor: "bg-yellow-500/80", desc: "High caffeine for explosive gym sessions.", stockLabel: "Only 12 left!",
      image: CDN_URL + "pre-workout.png",
    },
    {
      id: 206, name: "Creatine Monohydrate", price: 899, category: "Supplements", badge: "Strength", badgeColor: "bg-red-600/80", desc: "100% pure micronized creatine powder.",
      image: CDN_URL + "creatine.png",
    },
    {
      id: 207, name: "Lifting Belt", price: 1299, category: "Gear", badge: "Safety", badgeColor: "bg-white", desc: "Premium leather belt for heavy lifts.",
      image: CDN_URL + "lifting-belt.png",
    },
    {
      id: 208, name: "Protein Bars (Box)", price: 1199, category: "Supplements", badge: "Snack", badgeColor: "bg-amber-600/80", desc: "Pack of 12 chocolate peanut butter bars.",
      image: CDN_URL + "protein-bars.png",
    },
    {
      id: 209, name: "Resistance Bands", price: 899, category: "Gear", badge: "Mobility", badgeColor: "bg-orange-500/80", desc: "Set of 5 bands with different resistance levels.",
      image: CDN_URL + "resistance-bands.png",
    },
    {
      id: 210, name: "Liquid Chalk", price: 399, category: "Gear", badge: "Grip", badgeColor: "bg-gray-400/80", desc: "Mess-free grip enhancer for deadlifts.",
      image: CDN_URL + "liquid-chalk.png",
    }
  ],
  "Meditation": [
    {
      id: 301, name: "Zafu Cushion", price: 1899, category: "Gear", badge: "Comfort", badgeColor: "bg-teal-500/80", desc: "Ergonomic posture support for deep meditation.",
      image: CDN_URL + "zafu.png",
    },
    {
      id: 302, name: "Zen Diffuser", price: 2499, category: "Wellness", badge: "Aroma", badgeColor: "bg-pink-500/80", desc: "Ultrasonic tech with 7 color ambient LED.", stockLabel: "Best Seller",
      image: CDN_URL + "diffuser.png",
    },
    {
      id: 303, name: "Essential Oil Pack", price: 899, category: "Wellness", badge: "Relax", badgeColor: "bg-indigo-400/80", desc: "Lavender & Eucalyptus for stress relief.",
      image: CDN_URL + "essential-oils.png",
    },
    {
      id: 304, name: "Crystal Singing Bowl", price: 4299, category: "Wellness", badge: "Sound", badgeColor: "bg-amber-400/80", desc: "432Hz frequency for chakra alignment.", stockLabel: "Only 1 left!",
      image: CDN_URL + "singing-bowl.png",
    },
    {
      id: 305, name: "Journal & Pen Set", price: 699, category: "Wellness", badge: "Mindset", badgeColor: "bg-slate-400/80", desc: "Track your thoughts and mindfulness journey.",
      image: CDN_URL + "journal-set.png",
    },
    {
      id: 306, name: "Tibetan Bells", price: 1299, category: "Wellness", badge: "Focus", badgeColor: "bg-yellow-600/80", desc: "Handcrafted Tingsha bells for clarity.",
      image: CDN_URL + "tibetan-bells.png",
    },
    {
      id: 307, name: "Incense Sticks", price: 299, category: "Wellness", badge: "Aroma", badgeColor: "bg-orange-400/80", desc: "Sandalwood and Patchouli blend.",
      image: CDN_URL + "incense-sticks.png",
    },
    {
      id: 308, name: "Meditation Timer", price: 1499, category: "Gear", badge: "Track", badgeColor: "bg-slate-300/80", desc: "Silent visual timer for uninterrupted sessions.",
      image: CDN_URL + "meditation-timer.png",
    },
    {
      id: 309, name: "Mala Beads", price: 899, category: "Wellness", badge: "Mantra", badgeColor: "bg-red-800/80", desc: "108 bead traditional wooden mala.",
      image: CDN_URL + "mala-beads.png",
    },
    {
      id: 310, name: "Eye Mask", price: 499, category: "Wellness", badge: "Sleep", badgeColor: "bg-indigo-600/80", desc: "Silk mask for sensory deprivation.",
      image: CDN_URL + "eye-mask.png",
    }
  ]
};

let currentGoal = "Weight Loss";
let currentFilter = "All";
let cart = [];

function setGoal(goal) {
  currentGoal = goal;
  document.querySelectorAll(".goal-pill").forEach((p) => p.classList.remove("active"));
  document.getElementById(`pill-${goal.toLowerCase().split(" ")[0]}`).classList.add("active");

  document.getElementById("goalText").innerText = `${goal} Plan`;
  document.getElementById("goalIcon").innerText = goal === "Weight Loss" ? "🔥" : goal === "Muscle Gain" ? "💪" : "🧘";

  currentFilter = "All";
  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const data = productData[currentGoal];
  const filtered = currentFilter === "All" ? data : data.filter((p) => p.category === currentFilter);

  grid.innerHTML = filtered.map((p) => `
      <div class="glass-card p-5 flex flex-col animate-in fade-in zoom-in duration-500">
          <div class="product-image h-52 w-full mb-5 relative group cursor-pointer" onclick="openProductModal(${p.id})">
              <span class="absolute top-3 left-3 badge ${p.badgeColor} text-slate-800 z-10 font-heading shadow-md">${p.badge}</span>
              ${p.stockLabel ? `<span class="absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded-full bg-white/80 text-${p.stockLabel.includes("left") ? "red-400" : "yellow-400"} border border-${p.stockLabel.includes("left") ? "red-500/30" : "yellow-500/30"} z-10 backdrop-blur-md shadow-lg">${p.stockLabel}</span>` : ""}
              <img src="${p.image}" alt="${p.name}" class="rounded-2xl" onerror="this.src='https://via.placeholder.com/400x400?text=${encodeURIComponent(p.name)}'">
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10 rounded-2xl">
                  <span class="bg-white/20 backdrop-blur-md text-slate-800 px-4 py-2 rounded-full font-bold text-sm shadow-xl border border-white/20">Quick View</span>
              </div>
          </div>
          <div class="flex justify-between items-start mb-1">
              <h3 class="font-bold text-lg leading-tight text-slate-800 cursor-pointer hover:text-blue-600 transition-colors" onclick="openProductModal(${p.id})">${p.name}</h3>
              <span class="font-black text-xl neon-text">₹${p.price.toLocaleString()}</span>
          </div>
          <div class="mb-3"></div>
          <p class="text-slate-400 text-xs mb-5 flex-grow leading-relaxed">${p.desc}</p>
          <button onclick="addToCart('${p.name}', ${p.price}, ${p.id})" class="w-full py-4 neon-bg rounded-2xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_15px_rgba(0,255,163,0.2)]">Add to Plan</button>
      </div>
  `).join("");
}

function filterProducts(cat) {
  currentFilter = cat;
  document.querySelectorAll(".cat-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.innerText.includes(cat));
  });
  renderProducts();
}

function getProductById(id) {
  for (const category in productData) {
    const product = productData[category].find((p) => p.id === id);
    if (product) return product;
  }
  return null;
}

function openProductModal(id) {
  const product = getProductById(id);
  if (!product) return;

  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalImage").onerror = function () {
    this.src = "https://via.placeholder.com/400x400?text=" + encodeURIComponent(product.name);
  };
  document.getElementById("modalBadge").className = `absolute top-4 left-4 badge ${product.badgeColor} text-slate-800 z-10 font-heading`;
  document.getElementById("modalBadge").innerText = product.badge;
  document.getElementById("modalTitle").innerText = product.name;
  document.getElementById("modalPrice").innerText = `₹${product.price.toLocaleString()}`;
  document.getElementById("modalDesc").innerText = product.desc;

  const btn = document.getElementById("modalAddBtn");
  btn.onclick = () => {
    addToCart(product.name, product.price, product.id);
    closeProductModal();
  };

  const modal = document.getElementById("productModal");
  const modalContent = document.getElementById("productModalContent");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  setTimeout(() => {
    modalContent.classList.remove("scale-95", "opacity-0");
    modalContent.classList.add("scale-100", "opacity-100");
  }, 10);
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  const modalContent = document.getElementById("productModalContent");

  modalContent.classList.remove("scale-100", "opacity-100");
  modalContent.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 300);
}

function addToCart(name, price, id) {
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  updateUI();
  showFeedback();
}

function updateQuantity(id, change) {
  const itemIndex = cart.findIndex((item) => item.id === id);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += change;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
    updateUI();
  }
}

function updateUI() {
  const cartBar = document.getElementById("cartBar");
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartBar.classList.toggle("hidden", cart.length === 0);
  if (cart.length > 0) cartBar.classList.add("flex");

  document.getElementById("itemCount").innerText = `${totalCount} ITEM${totalCount !== 1 ? "S" : ""}`;
  document.getElementById("totalPreview").innerText = `₹${totalValue.toLocaleString()}`;
  document.getElementById("cartTotal").innerText = `₹${totalValue.toLocaleString()}`;

  const itemsContainer = document.getElementById("cartItems");
  if (cart.length === 0) {
    itemsContainer.innerHTML = `<div class="py-10 text-center opacity-30"><p>Cart is empty</p></div>`;
  } else {
    itemsContainer.innerHTML = cart.map((item, idx) => `
        <div class="flex justify-between items-center bg-slate-100/30 p-3 rounded-xl border border-slate-200/50">
            <div class="flex items-center gap-3 flex-1">
                <div class="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center text-[10px] font-bold text-blue-600">#${idx + 1}</div>
                <p class="font-semibold text-sm line-clamp-1">${item.name}</p>
            </div>
            <div class="flex items-center gap-3">
                <div class="flex items-center bg-white rounded-lg border border-slate-200 overflow-hidden shrink-0">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-slate-800 transition bg-white hover:bg-slate-200/50">-</button>
                    <span class="w-6 text-center text-sm font-bold bg-slate-100/20 leading-7">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-slate-800 transition bg-white hover:bg-slate-200/50">+</button>
                </div>
                <span class="font-bold text-sm w-16 text-right shrink-0">₹${(item.price * item.quantity).toLocaleString()}</span>
                <button onclick="updateQuantity(${item.id}, -${item.quantity})" class="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg></button>
            </div>
        </div>
    `).join("");
  }
}

function clearCart() {
  cart = [];
  updateUI();
  closeCart();
}

function openCart() {
  document.getElementById("cartDrawer").classList.remove("hidden");
  document.getElementById("cartDrawer").classList.add("flex");
}

function closeCart() {
  document.getElementById("cartDrawer").classList.add("hidden");
}

function showFeedback() {
  const fb = document.getElementById("feedback");
  fb.style.opacity = "1";
  fb.style.transform = "translateX(-50%) translateY(0)";
  setTimeout(() => {
    fb.style.opacity = "0";
    fb.style.transform = "translateX(-50%) translateY(-1rem)";
  }, 2000);
}

// Integrated Secure Checkout Logic
function checkout() {
  const totalValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  if (totalValue === 0) return; // Prevent empty checkouts

  // Create a hidden form to securely send the total to your Flask backend
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = '/shop_checkout'; 

  const amountInput = document.createElement('input');
  amountInput.type = 'hidden';
  amountInput.name = 'total_amount';
  amountInput.value = totalValue;

  form.appendChild(amountInput);
  document.body.appendChild(form);
  
  // Submit the form to redirect to the password confirmation page
  form.submit();
}

// Init
renderProducts();
document.getElementById("cartDrawer").addEventListener("click", function (e) {
  if (e.target === this) closeCart();
});