(() => {
  const PHONE = "918857090799";
  const PROJECT = "Codename Greater Kharadi";
  const DEFAULT_MESSAGE = `Hi, I am interested in ${PROJECT}. Please share the latest price sheet, floor plans and availability.`;
  const encode = (message) => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  document.querySelectorAll(".wa-link").forEach((link) => {
    const label = (link.textContent || "").trim().toLowerCase();
    let message = DEFAULT_MESSAGE;
    if (label.includes("platinum")) message = `Hi, please share Platinum token details and current benefits for ${PROJECT}.`;
    else if (label.includes("gold")) message = `Hi, please share Gold token details and current benefits for ${PROJECT}.`;
    else if (label.includes("floor")) message = `Hi, please share the latest floor plans for ${PROJECT}.`;
    else if (label.includes("price")) message = `Hi, please share the latest unit-wise price sheet and availability for ${PROJECT}.`;
    link.href = encode(message);
    link.target = "_blank";
    link.rel = "noopener";
  });

  const header = document.querySelector(".site-header");
  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 12);
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".desktop-nav");
  toggle?.addEventListener("click", () => nav.classList.toggle("open"));
  nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  const modal = document.getElementById("privacy-modal");
  document.getElementById("privacy-open")?.addEventListener("click", () => modal.showModal());
  modal?.querySelector(".modal-close")?.addEventListener("click", () => modal.close());
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });

  // Google Ads conversion tracking: insert the verified project conversion ID/label before campaign launch.
  // No unverified conversion ID has been fabricated or copied from another project.
  window.fireFormConversion = function () {
    if (typeof window.gtag === "function" && window.PROJECT_CONVERSION_SEND_TO) {
      window.gtag("event", "conversion", { send_to: window.PROJECT_CONVERSION_SEND_TO });
    }
  };
})();