// B · Ledger — property-prospectus aesthetic. Tabular, sober, document-grade.
function WireframeB() {
  return (
    <div className="wf-page" style={{ padding: 0 }}>

      {/* Document header band */}
      <div style={{ background: "var(--navy)", color: "var(--paper)", padding: "14px 22px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <BrickMark size={26} />
            <span style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 14, letterSpacing: "-.005em" }}>CORE</span>
            <span style={{ fontFamily: "var(--type)", fontSize: 8.5, letterSpacing: ".25em", color: "var(--gold)", textTransform: "uppercase" }}>
              Property · Ventures
            </span>
          </div>
          <span style={{ fontFamily: "var(--type)", fontSize: 9, letterSpacing: ".2em", color: "var(--gold)" }}>JAX · FL</span>
        </div>
      </div>

      {/* Doc meta band */}
      <div style={{
        padding: "12px 22px",
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        borderBottom: "1px solid var(--ink)",
        gap: 12,
        fontFamily: "var(--type)", fontSize: 9, letterSpacing: ".15em", color: "var(--ink-2)"
      }}>
        <div>
          <div style={{ color: "var(--ink-3)" }}>DOC. NO.</div>
          <div style={{ color: "var(--navy)", marginTop: 3 }}>CPV — 001</div>
        </div>
        <div>
          <div style={{ color: "var(--ink-3)" }}>PREPARED BY</div>
          <div style={{ color: "var(--navy)", marginTop: 3 }}>H. McNALLY</div>
        </div>
        <div>
          <div style={{ color: "var(--ink-3)" }}>DATE</div>
          <div style={{ color: "var(--navy)", marginTop: 3 }}>2026</div>
        </div>
      </div>

      {/* Hero statement */}
      <div style={{ padding: "44px 22px 0" }}>
        <div className="wf-eyebrow wf-eyebrow-gold">RE: YOUR PROPERTY</div>
        <h1 className="wf-display" style={{ fontSize: 48, margin: "12px 0 0" }}>
          A direct,<br/>
          all&#8209;cash<br/>
          offer.
        </h1>
        <div style={{
          marginTop: 22, display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 14px",
          paddingTop: 18, borderTop: "1px solid var(--ink)"
        }}>
          <span className="wf-eyebrow wf-eyebrow-navy">01</span>
          <span style={{ fontSize: 14, lineHeight: 1.5, color: "var(--ink-2)" }}>
            We buy homes throughout Jacksonville and the surrounding areas, direct from owners.
          </span>

          <span className="wf-eyebrow wf-eyebrow-navy" style={{ marginTop: 12 }}>02</span>
          <span style={{ fontSize: 14, lineHeight: 1.5, color: "var(--ink-2)", marginTop: 12 }}>
            As&#8209;is condition. No repairs, no cleaning, no renovations, no commissions.
          </span>

          <span className="wf-eyebrow wf-eyebrow-navy" style={{ marginTop: 12 }}>03</span>
          <span style={{ fontSize: 14, lineHeight: 1.5, color: "var(--ink-2)", marginTop: 12 }}>
            We pay cash and work on your timeline. All we need is a clean title.
          </span>
        </div>
      </div>

      {/* Owner card */}
      <div style={{ padding: "44px 22px 0" }}>
        <div style={{ height: 1, background: "var(--gold)", marginBottom: 16 }} />
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 16, alignItems: "stretch" }}>
          <HollyImg width={86} height={108} frame="navy" />
          <div style={{ borderLeft: "1px solid var(--ink-4)", paddingLeft: 14 }}>
            <div className="wf-eyebrow">OWNER</div>
            <div className="wf-serif" style={{ fontSize: 21, fontWeight: 600, color: "var(--navy)", marginTop: 4, lineHeight: 1 }}>
              Holly McNally
            </div>
            <div style={{ fontFamily: "var(--type)", fontSize: 9, letterSpacing: ".2em", color: "var(--ink-2)", textTransform: "uppercase", marginTop: 6 }}>
              Core Property Ventures
            </div>
            <div style={{ marginTop: 12, fontSize: 12.5, color: "var(--ink-2)", lineHeight: 1.45 }}>
              &ldquo;I&rsquo;m not a real estate agent. I buy directly, pay cash, and work on your timeline.&rdquo;
            </div>
          </div>
        </div>
      </div>

      {/* Section: PROPERTIES WE PURCHASE */}
      <div style={{ padding: "44px 22px 0" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <span className="wf-eyebrow wf-eyebrow-gold">§ 01</span>
          <span className="wf-eyebrow">PROPERTIES WE PURCHASE</span>
          <span style={{ flex: 1, height: 1, background: "var(--ink-4)" }} />
        </div>
        <div style={{ marginTop: 16 }}>
          {[
            ["Inherited", "Estate / probate-friendly."],
            ["Vacant", "Unoccupied or held long-term."],
            ["Tenant-occupied", "Active leases reviewed in-place."],
            ["Needs work", "Cosmetic to major rehab."],
            ["Any condition", "Clean title is the only requirement."],
          ].map(([k, v], i) => (
            <div key={k} style={{
              display: "grid", gridTemplateColumns: "auto 1fr",
              gap: 16, padding: "10px 0",
              borderBottom: i === 4 ? "1px solid var(--ink)" : "1px solid var(--ink-4)",
              borderTop: i === 0 ? "1px solid var(--ink)" : "none",
            }}>
              <span className="wf-serif" style={{ fontSize: 15, fontWeight: 600, color: "var(--navy)" }}>{k}</span>
              <span style={{ fontSize: 13, color: "var(--ink-2)", textAlign: "right" }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section: PROCESS — tabular */}
      <div style={{ padding: "40px 22px 0" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <span className="wf-eyebrow wf-eyebrow-gold">§ 02</span>
          <span className="wf-eyebrow">PROCESS</span>
          <span style={{ flex: 1, height: 1, background: "var(--ink-4)" }} />
        </div>

        <div style={{ marginTop: 14, border: "1px solid var(--ink)" }}>
          {[
            ["01", "INTAKE",     "Property details submitted",   "~2 MIN"],
            ["02", "CONTACT",    "Holly responds personally",     "<24 HRS"],
            ["03", "OFFER",      "Fair cash offer presented",     "3–5 DAYS"],
            ["04", "CLOSING",    "Title clears, funds transfer",  "7–21 DAYS"],
          ].map(([n, k, v, t], i) => (
            <div key={n} style={{
              display: "grid", gridTemplateColumns: "44px 1fr auto",
              alignItems: "center",
              borderBottom: i === 3 ? "none" : "1px solid var(--ink-4)",
              background: i % 2 === 0 ? "var(--paper)" : "var(--paper-2)",
            }}>
              <div style={{
                padding: "14px 0", textAlign: "center",
                fontFamily: "var(--type)", fontSize: 10, letterSpacing: ".15em",
                color: "var(--gold)", borderRight: "1px solid var(--ink-4)"
              }}>{n}</div>
              <div style={{ padding: "12px 14px" }}>
                <div className="wf-eyebrow" style={{ fontSize: 9, color: "var(--navy)" }}>{k}</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 14.5, color: "var(--ink)", marginTop: 2 }}>{v}</div>
              </div>
              <div style={{
                padding: "12px 14px",
                fontFamily: "var(--type)", fontSize: 9.5, letterSpacing: ".15em", color: "var(--ink-2)"
              }}>{t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: INTAKE FORM */}
      <div style={{ padding: "44px 22px 0" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <span className="wf-eyebrow wf-eyebrow-gold">§ 03</span>
          <span className="wf-eyebrow">SUBMIT FOR REVIEW</span>
          <span style={{ flex: 1, height: 1, background: "var(--ink-4)" }} />
        </div>

        <h2 className="wf-serif" style={{ fontSize: 26, fontWeight: 500, color: "var(--navy)", margin: "16px 0 0", lineHeight: 1.1 }}>
          Property intake.
        </h2>
        <div style={{ fontSize: 12.5, color: "var(--ink-2)", marginTop: 6, lineHeight: 1.5 }}>
          Confidential. No obligation. Reviewed personally by Holly.
        </div>

        <div style={{ marginTop: 22 }}>
          {[
            ["A.", "OWNER NAME",         "Your full name"],
            ["B.", "PHONE / EMAIL",      "Best way to reach you"],
            ["C.", "PROPERTY ADDRESS",   "Street, city, ZIP"],
            ["D.", "CONDITION (BRIEF)",  "Rough description"],
          ].map(([n, l, p]) => (
            <div key={l} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 12, padding: "14px 0", borderTop: "1px solid var(--ink-4)" }}>
              <div className="wf-eyebrow" style={{ color: "var(--gold)", marginTop: 6 }}>{n}</div>
              <div>
                <div className="wf-eyebrow" style={{ fontSize: 9, color: "var(--navy)", marginBottom: 4 }}>{l}</div>
                <input className="wf-field" placeholder={p} />
              </div>
            </div>
          ))}

          <div style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 12, padding: "14px 0", borderTop: "1px solid var(--ink-4)", borderBottom: "1px solid var(--ink)" }}>
            <div className="wf-eyebrow" style={{ color: "var(--gold)", marginTop: 6 }}>E.</div>
            <div>
              <div className="wf-eyebrow" style={{ fontSize: 9, color: "var(--navy)", marginBottom: 8 }}>TIMELINE</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["ASAP", "30 days", "60–90", "Curious"].map((c) => (
                  <span key={c} style={{
                    border: "1px solid var(--navy)", padding: "6px 11px", fontSize: 11,
                    fontFamily: "var(--type)", letterSpacing: ".1em", color: "var(--navy)", textTransform: "uppercase"
                  }}>{c}</span>
                ))}
              </div>
            </div>
          </div>

          <button className="wf-btn" style={{ marginTop: 22, width: "100%" }}>Submit for review</button>

          <div style={{ marginTop: 14, textAlign: "center", fontFamily: "var(--type)", fontSize: 10, letterSpacing: ".15em", color: "var(--ink-3)" }}>
            OR REACH HOLLY DIRECTLY
          </div>
          <div className="wf-serif" style={{ textAlign: "center", fontSize: 22, fontWeight: 600, color: "var(--navy)", marginTop: 6 }}>
            904 · 206 · 7479
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "44px 22px 28px" }}>
        <div style={{ height: 1, background: "var(--ink)" }} />
        <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontFamily: "var(--type)", fontSize: 9, letterSpacing: ".2em", color: "var(--ink-2)" }}>
            CORE PROPERTY VENTURES<br/>
            <span style={{ color: "var(--gold)" }}>EST. JACKSONVILLE FL</span>
          </div>
          <div style={{ fontFamily: "var(--type)", fontSize: 9, letterSpacing: ".15em", color: "var(--ink-3)", textAlign: "right" }}>
            HOLLY@COREPROPERTYVENTURES.COM<br/>
            END OF DOCUMENT
          </div>
        </div>
      </div>
    </div>
  );
}

window.WireframeB = WireframeB;
