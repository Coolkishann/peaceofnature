"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Unified Resort Items with categories
const items = [
  { title: "Oceanfront Sanctuary", category: "STAYS", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKYEeQzjzYp3rVqPuyY47xOgUEmfno_g3iWSqPETsLX9kIEiXXYLkPmCKZRQlWKxHewhMegonrEVrm8CdS2dIx4uMDNUIE-rw3XBmpoufOTaTIfKKxD3TN_Sn_Zl5uS0ITf3e_w3rSbPEtkNWCgWL-4rWacqTZSsBXr4GGl801wV3E5GODnhJmHvOOuj2KaAl0f15YYQDHvqkKuvaL5GwGEAGXp2eFpG_qq1NGohYnfbOAATqWKmqi7_mZWHasHpnv8rYXlZM3KwGN" },
  { title: "Michelin Dining Deck", category: "DINING", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3xACXopbM-XizcNkWStQYFPHxU0S86_dTKQcHflR40gXT-_VBssw0XfuVUHmQ_IV8F-zAtxeYhY2RfRQ1YDHsednPU-5sefEHIUgLNobdNA-OD90ii5NyPA7HZGJEBRwRU-I1gcsC8fgqoDS_1ihO3mjgRqnVHbhGdZsmPm67UH6OdLsG7D6BKvxvP09N-5z8XXB_5NFHGhzXXxHSqB7BxKHQfaT1WLFemWWnmx0OkBjF7Ih9yhLHuGFK7itGXgXHX2HS98iKaKXn" },
  { title: "Holistic Spa Retreat", category: "WELLNESS", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-ncCdNUQAwGZij4ZLvmPintu1N--n1odiZCfrwWUUbjiDUhL_STSMxqiBfaVSpkauKTs6KI7Dps6Jr3LK70BV_Oi82MKma0bhS-L1wZQ5HS0RwbfpRjtpZ_y5moJiehuHl8mHBs7MZhd72C1cGPN6S5tQpjL-FjeMS1EmF2MspeRiG_0_nn4RbqG7fqsyBV_rC8Oev8bMpTSgTXGzpPkbL77R2K3Ds38-NOMMSq5A3JQpcGRMhnctt-zOM_q3Tcmi2MGhrkIiX4fr" },
  { title: "Private Yacht Cruise", category: "WELLNESS", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnowW1ZgOmk8RPRE0ubuv-W1ltTydhwf0oFW3OWTtZroCyymmE4rIutAgf0rjaqp-aS419bhzJlGqQlS4GiOtoc-WTbbmUdZXxhulmnmnLfoQJ0gyMEv2nS07-CD9eu0Rkf4TiP0K1zr-lTZoeA2TP125WxaYCBTybiQ2sMSZB3ZuYaJTOvaFnM-OHUpTh3wpgowm8XVi_FKr0hP2uhsDyqmMvxVjSfIs2CHWFwlpdFpUp_euzLW-B9NWL17Wy-4xL9LjrmieW0L8V" },
  { title: "Sunset Lagoon Suite", category: "STAYS", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzO_IJKXLg5YzwVoBJSh7DAfHwB-WHPLDzG7YDWVEXhE9B79lT8LZ393BOnUEBKFpSERWxkRNyJwwf_tB5yDTVsLlElyImur79PEorTabhYuBCK3RAECHzt1i-pTH86dSiu7aGlRpxnMs6VdaxJz_ObpxCleDdPdA6qc9orztlUyYTuq9ijadkt4o4RUTzKUlXPid2ifOhwOfIJ_WdvOWcixKufD9khwD7YCZ7nIBociVE-KKoTSnntZrQm7VL4OV6UUQuA4zk5YBK" },
  { title: "Lagoon Canopy Dinner", category: "DINING", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ2a5Ehe2omfzptQY8nkKWfw5T3nitXnct5oGiQe4-ZOgwuEt2BT1vJT5cLYvuqJIWoy48rubRGym9QeL9N_78tuNDEIY-AC8Ng0BICA_7GJC_VmS9xkdLEqvfAT5T8dGlF-C3ucN4WdMaisw80MHFrB0r5GAJinB3KRZcrjbeiQDlJEhnmrJ9VRIJx8RBVcErMdkaqwgniAgpzrEbMLf8z-Y7EbDx-400CDiQ4-qKj4R1h9FPSvLGzh1DxS09QnKg3MjCB2utAx9K" },
  { title: "Infinity Thermal Soak", category: "WELLNESS", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800" },
  { title: "Tropical Gardens Lodge", category: "STAYS", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800" },
  { title: "Cliffside Penthouse", category: "STAYS", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800" },
  { title: "Helipad Transfer Service", category: "WELLNESS", image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=800" },
  { title: "Starlit Beach Lounge", category: "DINING", image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800" },
  { title: "Bespoke Concierge Spa", category: "WELLNESS", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800" }
];

// Configuration Settings optimized for bento density and physics
const settings = {
  baseWidth: 280,
  smallHeight: 220,
  itemGap: 30,
  hoverScale: 1.05,
  expandedScale: 0.45,
  dragEase: 0.08,
  momentumFactor: 180,
  bufferZone: 2.5,
  borderRadius: 16,
};

export default function GalleryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  
  // Filtering state
  const [activeCategory, setActiveCategory] = useState<"ALL" | "STAYS" | "DINING" | "WELLNESS">("ALL");
  const [activeTitle, setActiveTitle] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoomTarget, setZoomTarget] = useState<{
    id: string;
    src: string;
    rect: DOMRect;
    width: number;
    height: number;
    name: string;
    number: string;
  } | null>(null);

  // Dragging and animation ticker state refs
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
    lastUpdate: 0,
    hasMoved: false,
  });

  const columns = 4;
  const cellWidth = settings.baseWidth + settings.itemGap;
  const cellHeight = settings.smallHeight + settings.itemGap;
  const visibleItems = useRef<Set<string>>(new Set());

  // Helper: determine the Bento cell type for any grid coordinate
  const getBentoType = (col: number, row: number) => {
    const c = ((col % 3) + 3) % 3;
    const r = ((row % 2) + 2) % 2;

    if (c === 0 && r === 0) return "wide";      // wide card starts (spans 2 col, 1 row)
    if (c === 1 && r === 0) return "occupied";  // covered by wide card on left

    if (c === 2 && r === 0) return "tall";      // tall card starts (spans 1 col, 2 rows)
    if (c === 2 && r === 1) return "occupied";  // covered by tall card above

    return "square";                            // square card (spans 1 col, 1 row)
  };

  // Helper: get coordinates ID
  const getItemId = (col: number, row: number) => `${col},${row}`;

  // Helper: get top/left positions
  const getItemPosition = (col: number, row: number) => ({
    x: col * cellWidth,
    y: row * cellHeight,
  });

  // Main visibility logic: spawns grid items dynamically on scroll/drag
  const updateVisibleItems = () => {
    if (!canvasRef.current) return;

    const { currentX, currentY } = dragRef.current;
    const buffer = settings.bufferZone;
    const viewWidth = window.innerWidth * (1 + buffer);
    const viewHeight = window.innerHeight * (1 + buffer);

    const startCol = Math.floor((-currentX - viewWidth / 2) / cellWidth);
    const endCol = Math.ceil((-currentX + viewWidth * 1.5) / cellWidth);
    const startRow = Math.floor((-currentY - viewHeight / 2) / cellHeight) - 1;
    const endRow = Math.ceil((-currentY + viewHeight * 1.5) / cellHeight) + 1;

    const currentItems = new Set<string>();
    
    // Filter items based on active category
    const filtered = activeCategory === "ALL" 
      ? items 
      : items.filter(x => x.category === activeCategory);

    if (filtered.length === 0) return;

    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        const type = getBentoType(col, row);
        if (type === "occupied") continue;

        const itemId = getItemId(col, row);
        currentItems.add(itemId);

        // If already rendered, skip
        if (visibleItems.current.has(itemId)) continue;

        let width = settings.baseWidth;
        let height = settings.smallHeight;

        if (type === "wide") {
          width = settings.baseWidth * 2 + settings.itemGap;
        } else if (type === "tall") {
          height = settings.smallHeight * 2 + settings.itemGap;
        }

        const position = getItemPosition(col, row);
        const itemNum = Math.abs((row * columns + col) % filtered.length);
        const itemData = filtered[itemNum];

        // Create DOM element directly to match the fast vanilla CodePen performance
        const item = document.createElement("div");
        item.className = "absolute overflow-hidden bg-black select-none cursor-pointer shadow-lg transition-opacity duration-300";
        item.id = itemId;
        item.style.width = `${width}px`;
        item.style.height = `${height}px`;
        item.style.left = `${position.x}px`;
        item.style.top = `${position.y}px`;
        item.style.borderRadius = `${settings.borderRadius}px`;
        item.style.setProperty("--hover-scale", String(settings.hoverScale));

        // Dataset storage
        item.setAttribute("data-col", String(col));
        item.setAttribute("data-row", String(row));
        item.setAttribute("data-width", String(width));
        item.setAttribute("data-height", String(height));
        item.setAttribute("data-num", String(itemNum));

        // Image wrapper for inner hover styling
        const imgWrapper = document.createElement("div");
        imgWrapper.className = "w-full h-full relative overflow-hidden group";

        const img = document.createElement("img");
        img.src = itemData.image;
        img.alt = itemData.title;
        img.className = "w-full h-full object-cover transition-transform duration-500 ease-out select-none pointer-events-none group-hover:scale-105";
        imgWrapper.appendChild(img);

        // Caption overlay
        const caption = document.createElement("div");
        caption.className = "absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white pointer-events-none transition-opacity duration-300";
        caption.id = `caption-${itemId}`;

        const nameEl = document.createElement("div");
        nameEl.className = "font-headline-sm text-[12px] tracking-wider uppercase font-semibold";
        nameEl.textContent = itemData.title;

        const numEl = document.createElement("div");
        numEl.className = "font-label-md text-[9px] text-white/50 tracking-widest mt-1";
        numEl.textContent = `#${(itemNum + 1).toString().padStart(5, "0")}`;

        caption.appendChild(nameEl);
        caption.appendChild(numEl);
        imgWrapper.appendChild(caption);
        item.appendChild(imgWrapper);

        // Click handler inside useEffect context
        item.addEventListener("click", () => {
          if (dragRef.current.hasMoved || isExpanded) return;
          handleExpand(item, itemData.title, `#${(itemNum + 1).toString().padStart(5, "0")}`);
        });

        canvasRef.current.appendChild(item);
        visibleItems.current.add(itemId);
      }
    }

    // Garbage collect elements outside buffer bounds
    visibleItems.current.forEach((itemId) => {
      if (!currentItems.has(itemId)) {
        const item = document.getElementById(itemId);
        if (item && canvasRef.current) {
          canvasRef.current.removeChild(item);
        }
        visibleItems.current.delete(itemId);
      }
    });
  };

  // Handles expanding an item into fullscreen card zoom
  const handleExpand = (item: HTMLDivElement, name: string, number: string) => {
    setIsExpanded(true);
    const rect = item.getBoundingClientRect();
    const width = Number(item.getAttribute("data-width"));
    const height = Number(item.getAttribute("data-height"));
    const img = item.querySelector("img");

    if (!img) return;

    setActiveTitle(name);
    setZoomTarget({
      id: item.id,
      src: img.src,
      rect,
      width,
      height,
      name,
      number,
    });

    // Hide original element
    item.style.opacity = "0";

    // Fade out other grid items using standard classes
    document.querySelectorAll('[id*=","]').forEach((el) => {
      if (el.id !== item.id) {
        (el as HTMLElement).style.opacity = "0";
      }
    });
  };

  const closeExpandedItem = () => {
    if (!zoomTarget) return;

    setActiveTitle("");

    // Fade back all items
    document.querySelectorAll('[id*=","]').forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
    });

    // Just reset the zoom view state
    setZoomTarget(null);
    setIsExpanded(false);
  };

  // Rebuild grid when category changes
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.innerHTML = "";
    }
    visibleItems.current.clear();
    updateVisibleItems();
  }, [activeCategory]);

  // RequestAnimationFrame animation tick loop for dragging momentum inertia
  useEffect(() => {
    let animId: number;

    const tick = () => {
      if (!isExpanded && canvasRef.current) {
        const ease = settings.dragEase;
        const state = dragRef.current;

        // Center check on mount / first tick
        if (state.lastUpdate === 0) {
          const initX = window.innerWidth / 2 - cellWidth / 2;
          const initY = window.innerHeight / 2 - cellHeight / 2;
          state.targetX = initX;
          state.targetY = initY;
          state.currentX = initX;
          state.currentY = initY;
          state.lastX = initX;
          state.lastY = initY;
          state.lastUpdate = Date.now();
        }

        state.currentX += (state.targetX - state.currentX) * ease;
        state.currentY += (state.targetY - state.currentY) * ease;

        canvasRef.current.style.transform = `translate3d(${state.currentX}px, ${state.currentY}px, 0)`;

        const now = Date.now();
        const distMoved = Math.sqrt(
          Math.pow(state.currentX - state.lastX, 2) + Math.pow(state.currentY - state.lastY, 2)
        );

        if (distMoved > 40 || now - state.lastUpdate > 100) {
          updateVisibleItems();
          state.lastX = state.currentX;
          state.lastY = state.currentY;
          state.lastUpdate = now;
        }
      }
      animId = requestAnimationFrame(tick);
    };

    updateVisibleItems();
    tick();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isExpanded, cellWidth, cellHeight, activeCategory]);

  // Handle dragging events
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (isExpanded) return;
      const state = dragRef.current;
      state.isDragging = true;
      state.hasMoved = false;
      state.startX = e.clientX;
      state.startY = e.clientY;
      state.lastTime = Date.now();
      state.velocityX = 0;
      state.velocityY = 0;
      container.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: MouseEvent) => {
      const state = dragRef.current;
      if (!state.isDragging || isExpanded) return;

      const dx = e.clientX - state.startX;
      const dy = e.clientY - state.startY;

      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
        state.hasMoved = true;
      }

      const now = Date.now();
      const dt = Math.max(10, now - state.lastTime);
      state.lastTime = now;

      state.velocityX = dx / dt;
      state.velocityY = dy / dt;

      state.targetX += dx;
      state.targetY += dy;

      state.startX = e.clientX;
      state.startY = e.clientY;
    };

    const handleMouseUp = () => {
      const state = dragRef.current;
      if (!state.isDragging) return;

      state.isDragging = false;
      container.style.cursor = "grab";

      if (Math.abs(state.velocityX) > 0.08 || Math.abs(state.velocityY) > 0.08) {
        const factor = settings.momentumFactor;
        state.targetX += state.velocityX * factor;
        state.targetY += state.velocityY * factor;
      }
    };

    // Touch Support with full mobile momentum physics
    const handleTouchStart = (e: TouchEvent) => {
      if (isExpanded) return;
      const state = dragRef.current;
      state.isDragging = true;
      state.hasMoved = false;
      state.startX = e.touches[0].clientX;
      state.startY = e.touches[0].clientY;
      state.lastTime = Date.now();
      state.velocityX = 0;
      state.velocityY = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const state = dragRef.current;
      if (!state.isDragging || isExpanded) return;

      const dx = e.touches[0].clientX - state.startX;
      const dy = e.touches[0].clientY - state.startY;

      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
        state.hasMoved = true;
      }

      const now = Date.now();
      const dt = Math.max(10, now - state.lastTime);
      state.lastTime = now;

      state.velocityX = dx / dt;
      state.velocityY = dy / dt;

      state.targetX += dx;
      state.targetY += dy;

      state.startX = e.touches[0].clientX;
      state.startY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const state = dragRef.current;
      if (!state.isDragging) return;

      state.isDragging = false;

      if (Math.abs(state.velocityX) > 0.08 || Math.abs(state.velocityY) > 0.08) {
        const factor = settings.momentumFactor;
        state.targetX += state.velocityX * factor;
        state.targetY += state.velocityY * factor;
      }
    };

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      container.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isExpanded]);

  return (
    <div className="min-h-screen w-full flex flex-col bg-background text-primary relative overflow-hidden select-none">
      {/* Brand Navigation */}
      <Navbar />

      {/* Floating Category Filter Bar */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-24 left-1/2 z-40 bg-white/70 backdrop-blur-xl border border-primary/5 py-1.5 px-2 rounded-full flex gap-1 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {(["ALL", "STAYS", "DINING", "WELLNESS"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-label-md text-[10px] tracking-widest font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-sm"
                    : "text-primary/60 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Infinite Canvas Container */}
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-background select-none cursor-grab"
      >
        <div ref={canvasRef} className="absolute will-change-transform" style={{ left: 0, top: 0 }}>
          {/* Dynamic grid cells spawn here */}
        </div>
      </div>

      {/* Dynamic Title Slide Overlay with staggered character slide-up reveal */}
      <div className="project-title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-[1002] flex justify-center items-center">
        <AnimatePresence>
          {activeTitle && (
            <motion.p className="relative h-20 text-white font-headline-lg font-bold text-[36px] sm:text-[48px] md:text-[64px] tracking-tight uppercase flex gap-x-4 flex-wrap justify-center overflow-hidden">
              {activeTitle.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden py-1">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                    className="inline-block will-change-transform font-bold"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Image zoom lightbox */}
      <AnimatePresence>
        {isExpanded && zoomTarget && (
          <>
            {/* Blurring backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="overlay fixed inset-0 bg-primary/95 pointer-events-auto z-[999]"
              onClick={closeExpandedItem}
            />

            {/* Scale up card zoom container */}
            <motion.div
              layoutId="zoom-card"
              initial={{
                position: "fixed",
                x: zoomTarget.rect.left + zoomTarget.width / 2 - window.innerWidth / 2,
                y: zoomTarget.rect.top + zoomTarget.height / 2 - window.innerHeight / 2,
                width: zoomTarget.width,
                height: zoomTarget.height,
                borderRadius: `${settings.borderRadius}px`,
              }}
              animate={{
                position: "fixed",
                x: 0,
                y: 0,
                width: window.innerWidth * settings.expandedScale,
                height: window.innerWidth * settings.expandedScale * (zoomTarget.height / zoomTarget.width),
                borderRadius: `${settings.borderRadius}px`,
              }}
              exit={{
                x: zoomTarget.rect.left + zoomTarget.width / 2 - window.innerWidth / 2,
                y: zoomTarget.rect.top + zoomTarget.height / 2 - window.innerHeight / 2,
                width: zoomTarget.width,
                height: zoomTarget.height,
                borderRadius: `${settings.borderRadius}px`,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] overflow-hidden cursor-pointer"
              onClick={closeExpandedItem}
            >
              <img
                src={zoomTarget.src}
                alt={zoomTarget.name}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </motion.div>

            {/* Back button */}
            <button
              onClick={closeExpandedItem}
              className="fixed top-24 right-8 z-[1003] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white cursor-pointer transition-colors shadow-lg active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </>
        )}
      </AnimatePresence>

      {/* Coordinate & navigation detail footer matching the CodePen styling */}
      <footer className="footer fixed bottom-0 left-0 w-full p-6 z-[9998] grid grid-cols-12 gap-gutter font-mono text-[11px] text-primary/60 tracking-wider">
        <div className="coordinates-section col-span-3 text-primary/40">
          LAT 34.02° N / LON 118.49° W
        </div>
        <div className="links-section col-span-6 text-center flex justify-center items-center gap-4 text-primary/70">
          DRAG CANVAS TO EXPLORE RESORT
        </div>
        <div className="info-section col-span-3 text-right text-primary/40">
          © PEACE OF NATURE RESORT
        </div>
      </footer>
    </div>
  );
}
