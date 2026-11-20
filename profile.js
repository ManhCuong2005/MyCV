const editor = document.querySelector(".editor");
const tabList = document.querySelector(".editor-tabs");
const tabs = [...tabList.querySelectorAll("button")];
const panels = tabs.map((tab) => document.getElementById(tab.getAttribute("aria-controls")));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const navLinks = [...document.querySelectorAll(".nav a")];
const sections = navLinks.map((link) => document.querySelector(link.hash));
const header = document.querySelector(".header");
const progress = document.querySelector(".reading-progress");
const { gsap, ScrollTrigger } = window;

function selectTrack(index, animate = true) {
  const activePanel = panels[index];
  tabs.forEach((tab, tabIndex) => {
    const isSelected = tabIndex === index;
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
    panels[tabIndex].hidden = !isSelected;
  });
  editor.dataset.track = tabs[index].dataset.track;

  if (animate && gsap && !reducedMotion.matches) {
    gsap.fromTo([activePanel, ".track-glyph"], { opacity: .4, y: 9 }, {
      opacity: 1, y: 0, duration: .34, ease: "power2.out", overwrite: true, clearProps: "opacity,transform"
    });
  }
}

tabList.setAttribute("role", "tablist");
tabList.setAttribute("aria-label", "Lĩnh vực kinh nghiệm");
tabs.forEach((tab, index) => {
  tab.setAttribute("role", "tab");
  panels[index].setAttribute("role", "tabpanel");
  panels[index].setAttribute("aria-labelledby", tab.id);
  panels[index].tabIndex = 0;
  tab.addEventListener("click", () => selectTrack(index));
});
selectTrack(0, false);
tabList.hidden = false;

tabList.addEventListener("keydown", (event) => {
  const current = tabs.indexOf(event.target);
  if (current < 0) return;

  let next;
  switch (event.key) {
    case "ArrowRight": next = (current + 1) % tabs.length; break;
    case "ArrowLeft": next = (current + tabs.length - 1) % tabs.length; break;
    case "Home": next = 0; break;
    case "End": next = tabs.length - 1; break;
    default: return;
  }
  event.preventDefault();
  tabs[next].focus({ preventScroll: true });
  selectTrack(next);
});

let pendingFrame = 0;
let currentSection = -1;

function updateReadingPosition() {
  pendingFrame = 0;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrollY = Math.max(0, window.scrollY);
  const fraction = scrollable > 0 ? Math.min(1, scrollY / scrollable) : 0;
  const readingLine = header.offsetHeight + Math.min(110, window.innerHeight * .16);
  const visible = sections.findLastIndex((section) => section.getBoundingClientRect().top <= readingLine);
  const next = fraction >= .99 ? sections.length - 1 : visible;

  progress.style.transform = `scaleX(${fraction})`;
  if (currentSection === next) return;
  navLinks[currentSection]?.removeAttribute("aria-current");
  navLinks[next]?.setAttribute("aria-current", "location");
  currentSection = next;
}

function queueReadingUpdate() {
  if (!pendingFrame) pendingFrame = requestAnimationFrame(updateReadingPosition);
}

window.addEventListener("scroll", queueReadingUpdate, { passive: true });
window.addEventListener("resize", queueReadingUpdate);
queueReadingUpdate();

if (gsap && ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  const motion = gsap.matchMedia();

  motion.add("(prefers-reduced-motion: no-preference)", () => {
    if (!location.hash && window.scrollY < 40) {
      gsap.timeline({ defaults: { ease: "power3.out", duration: .8 } })
        .addLabel("opening")
        .from(".art-reveal", { clipPath: "inset(0 0 100% 0)", duration: 1.16 }, "opening")
        .from(".hero-role", { opacity: 0, y: 10, duration: .55 }, "opening+=0.10")
        .from(".title-mask > span", { yPercent: 118, stagger: .11, duration: .92 }, "opening+=0.20")
        .from(".hero-description, .hero-actions", { opacity: 0, y: 13, stagger: .11 }, "opening+=0.47")
        .from(".viewfinder, .art-center", { opacity: 0, duration: .45 }, "opening+=0.68");
    }

    gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: { trigger: ".hero", start: "top 75px", end: "bottom top", scrub: .65 }
    })
      .to(".art-parallax", { yPercent: 10, scale: 1.075 }, 0)
      .to(".viewfinder", { yPercent: -5 }, 0);

    const networkPackets = gsap.utils.toArray(".network-packet");
    gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        id: "network-flow",
        trigger: ".network-diagram",
        start: "top 90%",
        end: "bottom 30%",
        scrub: .55,
        invalidateOnRefresh: true
      }
    })
      .to(networkPackets, {
        x: (index, packet) => packet.parentElement.clientWidth * (index === 0 ? .63 : -.61)
      }, 0)
      .from(".network-node span", { scale: .8, opacity: .65 }, 0);

    gsap.timeline({
      defaults: { ease: "power2.out", duration: .45 },
      scrollTrigger: { trigger: ".commerce-diagram", start: "top 79%", once: true }
    })
      .addLabel("route")
      .from(".commerce-core", { scale: .84, opacity: .62 }, "route")
      .from(".commerce-bus", { scaleY: .18, transformOrigin: "top" }, "route+=0.14")
      .from(".commerce-modules span", { y: 12, opacity: .55, stagger: .09 }, "route+=0.32");

    gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: { trigger: ".education", start: "top 90%", end: "bottom 30%", scrub: .55 }
    })
      .fromTo(".academic-type", { xPercent: -8 }, { xPercent: 7 }, 0)
      .fromTo(".academic-glow", { xPercent: -18, opacity: .52 }, { xPercent: 10, opacity: 1 }, 0);

    gsap.from(".timeline-track span", {
      scaleX: .15,
      transformOrigin: "left center",
      duration: .65,
      stagger: .10,
      ease: "power3.out",
      scrollTrigger: { trigger: ".editor-timeline", start: "clamp(top 92%)", once: true }
    });
  });

  document.fonts.ready.then(() => {
    ScrollTrigger.refresh();
    queueReadingUpdate();
  });
}
