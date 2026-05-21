// C · Foundation — architectural modernist. Bold navy slabs, gold inlay, brick motif.
function WireframeC() {
  return (
    <div className="wf-page" style={{ padding: 0 }}>

      {/* Navy hero slab */}
      <div style={{
        background: "var(--navy)", color: "var(--paper)",
        padding: "22px 22px 36px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Faint brick lattice */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(199,154,68,.12) 1px, transparent 1px), " +
            "linear-gradient(to bottom, rgba(199,154,68,.12) 1px, transparent 1px)",
          backgroundSize: "40px 20px",
          pointerEvents: "none",
        }} />

        {/* Nav row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <BrickMark size={28} />
            <div>
              <div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 16, letterSpacing: "-.005em", lineHeight: 1, color: "var(--paper)" }}>CORE</div>
              <div style={{ fontFamily: "var(--type)", fontSize: 7.5, letterSpacing: ".3em", color: "var(--gold)", marginTop: 4, textTransform: "uppercase" }}>
                Property · Ventures
              </div>
            </div>
          </div>
          <a className="wf-stamp" style={{ color: "var(--gold)", borderColor: "var(--gold)" }} href="#contact">
            ↓ CONTACT
          </a>
        </div>

        {/* Hero */}
        <div style={{ marginTop: 38, position: "relative" }}>
          <div className="wf-eyebrow" style={{ color: "var(--gold)" }}>JACKSONVILLE · FLORIDA</div>
          <h1 className="wf-display" style={{
            fontSize: 60, fontWeight: 800,
            color: "var(--paper)", margin: "14px 0 0", lineHeight: .92,
          }}>
            Built on
            <br />
            <span style={{ color: "var(--gold)" }}>solid ground.</span>
          </h1>
          <div style={{ marginTop: 22, fontSize: 14.5, lineHeight: 1.55, color: "rgba(244,241,234,.78)", maxWidth: 320 }}>
            Core Property Ventures buys homes directly, in cash, throughout
            Jacksonville and the surrounding areas — any condition, on your timeline.
          </div>

          <div style={{ marginTop: 26, display: "flex", gap: 10 }}>
            <a href="#form" style={{
              flex: 1, textAlign: "center",
              background: "var(--gold)", color: "var(--navy)",
              fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: ".15em",
              textTransform: "uppercase", padding: "16px 14px", textDecoration: "none",
            }}>
              Request an offer →
            </a>
            <a href="tel:9042067479" style={{
              flex: "0 0 auto", padding: "16px 14px",
              border: "1px solid var(--gold)", color: "var(--paper)",
              fontFamily: "var(--type)", fontSize: 11, letterSpacing: ".15em",
              textTransform: "uppercase", textDecoration: "none",
            }}>
              Text Holly
            </a>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        borderBottom: "1px solid var(--ink)",
      }}>
        {[
          ["CASH", "always"],
          ["AS-IS", "any condition"],
          ["7-21", "day close"],
        ].map(([k, v], i) => (
          <div key={k} style={{
            padding: "18px 12px",
            textAlign: "center",
            borderRight: i < 2 ? "1px solid var(--ink-4)" : "none",
          }}>
            <div className="wf-display" style={{ fontSize: 22, lineHeight: 1, color: "var(--navy)" }}>{k}</div>
            <div className="wf-eyebrow" style={{ fontSize: 9, marginTop: 6, color: "var(--gold)" }}>{v}</div>
          </div>
        ))}
      </div>

      {/* Owner block */}
      <div style={{ padding: "44px 22px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 110px", gap: 20, alignItems: "flex-start" }}>
          <div>
            <div className="wf-eyebrow wf-eyebrow-gold">FROM THE OWNER</div>
            <h2 className="wf-display" style={{ fontSize: 30, color: "var(--navy)", margin: "10px 0 0", lineHeight: 1 }}>
              Hi, I&rsquo;m Holly.
            </h2>
            <div style={{ height: 2, width: 32, background: "var(--gold)", marginTop: 14 }} />
            <div style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 14 }}>
              I&rsquo;m not a real estate agent. I buy directly, pay cash, and work on
              your timeline. All we need is a clean title and the opportunity to
              review the property.
            </div>
          </div>
          <HollyImg width={110} height={140} frame="navy" />
        </div>
      </div>

      {/* As-is block — brick-mark anchored */}
      <div style={{ padding: "48px 22px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <BrickMark size={32} />
          <span className="wf-eyebrow wf-eyebrow-navy">WE BUY AS&#8209;IS</span>
          <span style={{ flex: 1, height: 1, background: "var(--gold)" }} />
        </div>

        <h2 className="wf-display" style={{ fontSize: 30, color: "var(--navy)", margin: 0, lineHeight: 1 }}>
          Four things you<br/>don&rsquo;t have to do.
        </h2>

        <div style={{ marginTop: 22 }}>
          {[
            ["01", "Repairs"],
            ["02", "Cleaning"],
            ["03", "Renovations"],
            ["04", "Commissions or fees"],
          ].map(([n, k], i) => (
            <div key={n} style={{
              display: "grid", gridTemplateColumns: "auto 1fr auto",
              alignItems: "center", gap: 14,
              padding: "16px 0",
              borderTop: "1px solid var(--ink)",
              borderBottom: i === 3 ? "1px solid var(--ink)" : "none",
            }}>
              <span className="wf-display" style={{ fontSize: 18, color: "var(--gold)" }}>{n}</span>
              <span className="wf-serif" style={{ fontSize: 22, fontWeight: 500, color: "var(--navy)" }}>{k}</span>
              <span style={{ fontFamily: "var(--type)", fontSize: 13, color: "var(--ink-3)", letterSpacing: ".05em" }}>✗</span>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 16, lineHeight: 1.5 }}>
          Inherited, tenant&#8209;occupied, vacant, or needing work — all welcome.
        </div>
      </div>

      {/* Process — vertical timeline w/ brick column */}
      <div style={{ padding: "52px 22px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <BrickMark size={32} />
          <span className="wf-eyebrow wf-eyebrow-navy">THE PROCESS</span>
          <span style={{ flex: 1, height: 1, background: "var(--gold)" }} />
        </div>

        <h2 className="wf-display" style={{ fontSize: 30, color: "var(--navy)", margin: 0, lineHeight: 1 }}>
          Three steps.<br/>That&rsquo;s the whole thing.
        </h2>

        <div style={{ marginTop: 24, position: "relative" }}>
          {/* Spine */}
          <div style={{ position: "absolute", left: 18, top: 12, bottom: 12, width: 1, background: "var(--gold)" }} />
          {[
            ["01", "Submit details",        "Address, condition, your situation. ~2 min."],
            ["02", "Quick conversation",    "Holly calls or texts within 24 hours."],
            ["03", "Cash offer",            "Fair price, clean title, your timeline."],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: "grid", gridTemplateColumns: "38px 1fr", gap: 14, padding: "12px 0 18px", alignItems: "flex-start" }}>
              <div style={{
                width: 36, height: 36,
                background: "var(--navy)", color: "var(--gold)",
                fontFamily: "var(--display)", fontWeight: 800, fontSize: 14,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", zIndex: 1,
              }}>{n}</div>
              <div>
                <div className="wf-serif" style={{ fontSize: 18, fontWeight: 600, color: "var(--navy)", lineHeight: 1.2 }}>{t}</div>
                <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 4, lineHeight: 1.5 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form on navy card */}
      <div id="form" style={{ padding: "52px 22px 0" }}>
        <div style={{
          background: "var(--navy)", color: "var(--paper)",
          padding: "30px 22px 30px",
          position: "relative", overflow: "hidden"
        }}>
          <div style={{ position: "absolute", inset: 6, border: "1px solid var(--gold)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <div className="wf-eyebrow" style={{ color: "var(--gold)" }}>REQUEST AN OFFER</div>
            <h2 className="wf-display" style={{ fontSize: 30, margin: "10px 0 0", color: "var(--paper)", lineHeight: 1 }}>
              Tell Holly<br/>about the property.
            </h2>
            <div style={{ fontSize: 12.5, color: "rgba(244,241,234,.7)", marginTop: 8, lineHeight: 1.5 }}>
              No obligation. No agents. Response within 24 hours.
            </div>

            <div className="wf-col wf-gap-4" style={{ marginTop: 22 }}>
              {[
                ["NAME", "Your full name"],
                ["PHONE OR EMAIL", "Best way to reach you"],
                ["PROPERTY ADDRESS", "Street, city, ZIP"],
              ].map(([l, p]) => (
                <div key={l}>
                  <div className="wf-eyebrow" style={{ fontSize: 9, color: "var(--gold)", marginBottom: 4 }}>{l}</div>
                  <input style={{
                    width: "100%", background: "transparent",
                    border: "none", borderBottom: "1px solid var(--gold)",
                    color: "var(--paper)", padding: "8px 0 6px",
                    fontFamily: "var(--sans)", fontSize: 13.5, outline: "none"
                  }} placeholder={p} />
                </div>
              ))}

              <div style={{ marginTop: 4 }}>
                <div className="wf-eyebrow" style={{ fontSize: 9, color: "var(--gold)", marginBottom: 8 }}>TIMELINE</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {["ASAP", "30 days", "60–90", "Curious"].map((c) => (
                    <span key={c} style={{
                      border: "1px solid var(--gold)", padding: "6px 11px", fontSize: 11,
                      fontFamily: "var(--type)", letterSpacing: ".1em", color: "var(--paper)", textTransform: "uppercase"
                    }}>{c}</span>
                  ))}
                </div>
              </div>

              <button style={{
                marginTop: 14,
                background: "var(--gold)", color: "var(--navy)",
                border: "none", padding: "16px 14px",
                fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: ".18em",
                textTransform: "uppercase", cursor: "pointer",
              }}>
                Send to Holly →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Direct contact footer */}
      <div id="contact" style={{ padding: "44px 22px 36px", textAlign: "center" }}>
        <div className="wf-eyebrow wf-eyebrow-navy">PREFER TO TALK?</div>
        <div className="wf-display" style={{ fontSize: 36, color: "var(--navy)", marginTop: 8, letterSpacing: "-.01em" }}>
          904 · 206 · 7479
        </div>
        <div style={{ fontFamily: "var(--type)", fontSize: 11, letterSpacing: ".2em", color: "var(--ink-2)", marginTop: 10 }}>
          HOLLY@COREPROPERTYVENTURES.COM
        </div>

        <div style={{ marginTop: 28, height: 1, background: "var(--gold)" }} />
        <div style={{ marginTop: 18, display: "flex", justifyContent: "center" }}>
          <CoreLockup size="sm" />
        </div>
        <div style={{ marginTop: 10, fontFamily: "var(--type)", fontSize: 8.5, letterSpacing: ".25em", color: "var(--ink-3)" }}>
          JACKSONVILLE · FLORIDA · EST. 2024
        </div>
      </div>
    </div>
  );
}

window.WireframeC = WireframeC;
