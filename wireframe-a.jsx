// A · Cornerstone — boutique editorial, navy + gold, generous space.
function WireframeA() {
  return (
    <div className="wf-page" style={{ padding: "0 0 36px" }}>

      {/* Top nav strip */}
      <div style={{ padding: "16px 22px", borderBottom: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <CoreLockup size="sm" />
        <span className="wf-eyebrow" style={{ color: "var(--navy)" }}>JACKSONVILLE · FL</span>
      </div>

      {/* Hero */}
      <div style={{ padding: "44px 22px 0", position: "relative" }}>
        <div className="wf-eyebrow wf-eyebrow-gold">A LETTER FROM THE OWNER · 2026</div>
        <h1 className="wf-serif" style={{
          fontSize: 52, fontWeight: 400, color: "var(--navy)",
          margin: "16px 0 0", lineHeight: .98,
        }}>
          We buy houses
          <br />
          <em style={{ fontWeight: 400, color: "var(--ink)" }}>as&#8209;is</em>,
          <br />
          in cash,
          <br />
          on your timeline.
        </h1>
        <div style={{ marginTop: 22, height: 1, background: "var(--gold)", width: 80 }} />
        <div style={{
          marginTop: 14, fontFamily: "var(--sans)", fontSize: 14.5, lineHeight: 1.55,
          color: "var(--ink-2)", maxWidth: 340
        }}>
          Core Property Ventures is actively purchasing homes throughout Jacksonville
          and the surrounding areas — direct from owners, no agents, no fees.
        </div>
      </div>

      {/* Holly intro card */}
      <div style={{ padding: "36px 22px 0" }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <HollyImg width={90} height={108} frame="gold" />
          <div style={{ flex: 1 }}>
            <div className="wf-eyebrow wf-eyebrow-navy">YOUR DIRECT CONTACT</div>
            <div className="wf-serif" style={{ fontSize: 24, fontWeight: 500, color: "var(--navy)", marginTop: 4, lineHeight: 1 }}>
              Holly McNally
            </div>
            <div style={{ fontFamily: "var(--type)", fontSize: 9.5, letterSpacing: ".2em", color: "var(--ink-2)", marginTop: 6, textTransform: "uppercase" }}>
              Owner · Core PV
            </div>
            <div style={{ height: 1, background: "var(--gold)", width: 40, marginTop: 10 }} />
          </div>
        </div>
        <div className="wf-serif" style={{
          fontSize: 16, lineHeight: 1.55, color: "var(--ink-2)",
          marginTop: 18, fontStyle: "italic"
        }}>
          &ldquo;If you&rsquo;ve considered selling — or are simply curious what your
          property may be worth — I&rsquo;d love to have a quick, no&#8209;obligation
          conversation. I&rsquo;m not an agent. I buy directly, pay cash, and work
          on your timeline.&rdquo;
        </div>
      </div>

      {/* Section anchor: process */}
      <div style={{ padding: "52px 22px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
          <BrickMark size={34} />
          <div style={{ flex: 1, height: 1, background: "var(--navy)" }} />
          <span className="wf-eyebrow wf-eyebrow-navy">THE PROCESS</span>
        </div>

        {[
          ["I",   "You tell us about the property",   "A few details — address, condition, your situation. Two minutes."],
          ["II",  "A brief conversation",             "Holly responds within 24 hours. Honest, no script, no pressure."],
          ["III", "A fair cash offer",                "Direct from us. Clean title, your timeline. We can close in 7–21 days."],
        ].map(([n, t, d], i) => (
          <div key={i} style={{ display: "flex", gap: 18, padding: "20px 0", borderTop: i === 0 ? "1px solid var(--ink)" : "1px solid var(--ink-4)" }}>
            <div className="wf-serif" style={{
              fontSize: 38, fontWeight: 400, fontStyle: "italic",
              color: "var(--gold)", lineHeight: 1, width: 44, flex: "0 0 44px"
            }}>{n}</div>
            <div style={{ flex: 1, paddingTop: 4 }}>
              <div className="wf-serif" style={{ fontSize: 19, fontWeight: 600, color: "var(--navy)", lineHeight: 1.2 }}>{t}</div>
              <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 6, lineHeight: 1.5 }}>{d}</div>
            </div>
          </div>
        ))}
        <div style={{ height: 1, background: "var(--ink-4)" }} />
      </div>

      {/* As-is panel */}
      <div style={{ padding: "44px 22px 0" }}>
        <div style={{ background: "var(--navy)", color: "var(--paper)", padding: "26px 22px 28px", position: "relative" }}>
          <div style={{ position: "absolute", inset: 5, border: "1px solid var(--gold)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <div className="wf-eyebrow" style={{ color: "var(--gold)" }}>WE PURCHASE AS&#8209;IS</div>
            <div className="wf-serif" style={{ fontSize: 22, fontWeight: 500, marginTop: 6, color: "var(--paper)" }}>
              Which means, simply:
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 18px", marginTop: 18 }}>
              {["No repairs", "No cleaning", "No renovations", "No commissions"].map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--sans)", fontSize: 14 }}>
                  <span style={{ width: 6, height: 6, background: "var(--gold)", borderRadius: "50%", flex: "0 0 6px" }} />
                  {b}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 18, fontFamily: "var(--sans)", fontSize: 12.5, color: "rgba(244,241,234,.7)", lineHeight: 1.5 }}>
              Inherited, tenant&#8209;occupied, vacant, or in need of work — all welcome.
              All we need is a clean title.
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div style={{ padding: "52px 22px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <BrickMark size={34} />
          <div style={{ flex: 1, height: 1, background: "var(--navy)" }} />
          <span className="wf-eyebrow wf-eyebrow-navy">REQUEST AN OFFER</span>
        </div>

        <h2 className="wf-serif" style={{ fontSize: 32, fontWeight: 500, color: "var(--navy)", margin: 0, lineHeight: 1.05, letterSpacing: "-.02em" }}>
          Tell Holly<br/>about the property.
        </h2>
        <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 8, lineHeight: 1.5 }}>
          No obligation. No agents. Holly responds personally within 24 hours.
        </div>

        <div className="wf-col wf-gap-6" style={{ marginTop: 26 }}>
          {[
            ["NAME", "Your full name"],
            ["PHONE OR EMAIL", "Best way to reach you"],
            ["PROPERTY ADDRESS", "Street, city, ZIP"],
          ].map(([l, p]) => (
            <div key={l}>
              <div className="wf-eyebrow" style={{ fontSize: 9, color: "var(--navy)", marginBottom: 4 }}>{l}</div>
              <input className="wf-field" placeholder={p} />
            </div>
          ))}

          <div>
            <div className="wf-eyebrow" style={{ fontSize: 9, color: "var(--navy)", marginBottom: 8 }}>TIMELINE</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {["As soon as possible", "30 days", "60–90 days", "Just curious"].map((c) => (
                <span key={c} style={{
                  border: "1px solid var(--navy)", padding: "7px 11px", fontSize: 11.5,
                  fontFamily: "var(--sans)", color: "var(--navy)", letterSpacing: ".02em"
                }}>{c}</span>
              ))}
            </div>
          </div>

          <button className="wf-btn" style={{ marginTop: 8 }}>Request an offer</button>

          <div style={{ fontSize: 11.5, color: "var(--ink-3)", textAlign: "center", marginTop: 2, lineHeight: 1.5 }}>
            Prefer to talk? Call or text Holly directly at <span style={{ color: "var(--navy)", fontWeight: 600 }}>904 · 206 · 7479</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "40px 22px 0" }}>
        <div style={{ height: 1, background: "var(--gold)" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 18 }}>
          <CoreLockup size="sm" align="left" />
          <div style={{ textAlign: "right" }}>
            <div className="wf-eyebrow">CORE PV · JAX FL</div>
            <div style={{ fontFamily: "var(--type)", fontSize: 9.5, letterSpacing: ".15em", color: "var(--ink-3)", marginTop: 6 }}>
              HOLLY@COREPROPERTYVENTURES.COM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.WireframeA = WireframeA;
