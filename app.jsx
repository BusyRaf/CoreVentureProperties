// Core Property Ventures — Brand-aware wireframe explorations
// Three boutique-real-estate directions, side-by-side on a design canvas.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "navy-gold",
  "showHollyPhoto": true
}/*EDITMODE-END*/;

// ── Shared brand elements ──────────────────────────────────────────────────
const HollyCtx = React.createContext({ showPhoto: true });

function HollyImg({ width, height, round, frame = "navy" }) {
  const { showPhoto } = React.useContext(HollyCtx);
  const radius = round ? "50%" : 0;
  const border = frame === "gold"
    ? "1px solid var(--gold)"
    : frame === "none"
      ? "none"
      : "1px solid var(--navy)";
  if (showPhoto) {
    return (
      <div style={{
        width, height, borderRadius: radius,
        border,
        overflow: "hidden", flex: `0 0 ${width}px`,
        background: "var(--paper-2)",
      }}>
        <img src="assets/holly.jpg" alt="Holly McNally"
             style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    );
  }
  return (
    <div className="wf-imgbox" style={{ width, height, borderRadius: radius, flex: `0 0 ${width}px` }}>
      <span>HOLLY</span>
    </div>
  );
}
window.HollyImg = HollyImg;

// Recreated logo mark: navy circle, stacked gold bricks (3 rows, masonry)
function BrickMark({ size = 40, ring = 1.5 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: "var(--navy)",
      border: `${ring}px solid var(--gold)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      flex: "0 0 auto",
    }} aria-label="Core Property Ventures mark">
      <svg viewBox="0 0 24 16" width={size * 0.62} height={size * 0.42}>
        {/* bottom row — 4 bricks */}
        <rect x="0"  y="11" width="5" height="4" fill="var(--gold)" />
        <rect x="6"  y="11" width="5" height="4" fill="var(--gold)" />
        <rect x="12" y="11" width="5" height="4" fill="var(--gold)" />
        <rect x="18" y="11" width="5" height="4" fill="var(--gold)" />
        {/* middle row — 3 bricks offset */}
        <rect x="3"  y="6"  width="5" height="4" fill="var(--gold)" />
        <rect x="9"  y="6"  width="5" height="4" fill="var(--gold)" />
        <rect x="15" y="6"  width="5" height="4" fill="var(--gold)" />
        {/* top row — 2 bricks */}
        <rect x="6"  y="1"  width="5" height="4" fill="var(--gold)" />
        <rect x="12" y="1"  width="5" height="4" fill="var(--gold)" />
      </svg>
    </div>
  );
}
window.BrickMark = BrickMark;

// Full logo lockup — brick mark to the LEFT of the CORE wordmark
function CoreLockup({ size = "md" }) {
  const sizes = {
    sm: { word: 18, gap: 10, mark: 26, sub: 7,   subGap: 3 },
    md: { word: 26, gap: 12, mark: 36, sub: 8.5, subGap: 4 },
    lg: { word: 40, gap: 16, mark: 54, sub: 11,  subGap: 6 },
    xl: { word: 60, gap: 20, mark: 80, sub: 14,  subGap: 8 },
  };
  const s = sizes[size];
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: s.gap }}>
      <BrickMark size={s.mark} ring={size === "xl" ? 2 : 1.5} />
      <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start" }}>
        <span style={{
          fontFamily: "var(--display)", fontWeight: 800, fontSize: s.word,
          letterSpacing: "-.015em", color: "var(--navy)", lineHeight: 1
        }}>CORE</span>
        <div style={{ height: 1, background: "var(--gold)", width: "100%", marginTop: s.subGap }} />
        <div style={{
          fontFamily: "var(--type)", fontSize: s.sub, letterSpacing: ".35em",
          color: "var(--navy)", marginTop: s.subGap, textTransform: "uppercase", fontWeight: 500
        }}>
          Property · Ventures
        </div>
      </div>
    </div>
  );
}
window.CoreLockup = CoreLockup;

// ── App ────────────────────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    if (t.palette === "mono") {
      root.style.setProperty("--navy", "#1a1a1a");
      root.style.setProperty("--gold", "#1a1a1a");
    } else if (t.palette === "navy") {
      root.style.setProperty("--navy", "#15233d");
      root.style.setProperty("--gold", "#15233d");
    } else {
      root.style.setProperty("--navy", "#15233d");
      root.style.setProperty("--gold", "#c79a44");
    }
  }, [t.palette]);

  return (
    <HollyCtx.Provider value={{ showPhoto: t.showHollyPhoto }}>
      <DesignCanvas>
        <DCSection
          id="landing"
          title="Core Property Ventures · Landing wireframes"
          subtitle="Three brand-true directions. Mobile-first (QR entry from postcards).">
          <DCArtboard id="a" label="A · Cornerstone" width={400} height={2150}>
            <WireframeA />
          </DCArtboard>
          <DCArtboard id="b" label="B · Ledger" width={400} height={2300}>
            <WireframeB />
          </DCArtboard>
          <DCArtboard id="c" label="C · Foundation" width={400} height={2400}>
            <WireframeC />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette" />
        <TweakRadio
          label="Treatment"
          value={t.palette}
          options={[
            { value: "mono", label: "Mono" },
            { value: "navy", label: "Navy" },
            { value: "navy-gold", label: "Navy+Gold" },
          ]}
          onChange={(v) => setTweak("palette", v)}
        />

        <TweakSection label="Assets" />
        <TweakToggle
          label="Use Holly's real photo"
          value={t.showHollyPhoto}
          onChange={(v) => setTweak("showHollyPhoto", v)}
        />
      </TweaksPanel>
    </HollyCtx.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
