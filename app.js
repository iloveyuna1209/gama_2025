(function () {
  const slides = window.SLIDES_DATA;
  const gameCaps = window.GAME_CAPABILITIES;

  let currentIdx = 0;
  let animEnabled = true;
  const revealedQA = new Set();
  const revealedGuess = new Map(); // slideId -> { choice: 'enabling'|'enhancing'|null }

  // Game state for p28.5
  let gameState = {
    placed: {}, // capId -> 'enabling' | 'enhancing'
    selectedBallId: null,
    activeExplainId: null
  };

  const stage = document.getElementById("stage");
  const root = document.getElementById("slide-root");
  const hudCounter = document.getElementById("hud-counter");
  const progressFill = document.getElementById("progress-fill");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnToc = document.getElementById("btn-toc");
  const btnReplay = document.getElementById("btn-replay");
  const btnAnimToggle = document.getElementById("btn-anim-toggle");
  const btnFullscreen = document.getElementById("btn-fullscreen");
  const hud = document.getElementById("hud");
  const btnHudHide = document.getElementById("btn-hud-hide");
  const btnHudShow = document.getElementById("btn-hud-show");
  const tocModal = document.getElementById("toc-modal");
  const tocGrid = document.getElementById("toc-grid");
  const btnTocClose = document.getElementById("btn-toc-close");
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img");
  const lbCap = document.getElementById("lightbox-cap");
  const btnLbClose = document.getElementById("btn-lb-close");
  const gameExplainModal = document.getElementById("game-explain-modal");
  const gameModalBadges = document.getElementById("game-modal-badges");
  const gameModalTitle = document.getElementById("game-modal-title");
  const gameModalBody = document.getElementById("game-modal-body");
  const btnGameModalClose = document.getElementById("btn-game-modal-close");

  const TOE_META = [
    { key: "T", label: "T｜技術脈絡", color: "blue" },
    { key: "O", label: "O｜組織脈絡", color: "coral" },
    { key: "E", label: "E｜環境脈絡", color: "teal" }
  ];

  function fitStage() {
    const pad = 20;
    const vw = window.innerWidth - pad;
    const vh = window.innerHeight - pad;
    const scale = Math.min(vw / 1280, vh / 720);
    stage.style.transform = `scale(${scale})`;
  }
  window.addEventListener("resize", fitStage);
  fitStage();

  function renderHeaderFooter(s) {
    const header = `
      <div class="slide-header anim-header">
        <div class="slide-title">${s.title}</div>
        ${s.tag ? `<div class="slide-tag ${s.tagColor || s.ctxColor || 'blue'}">${s.tag}</div>` : ""}
      </div>
    `;
    const footer = `
      <div class="slide-footer">
        <div>${s.source || ""}</div>
        <div class="slide-page">${s.label} / 39${s.id === "p28.5" ? " (互動)" : ""}</div>
      </div>
    `;
    return { header, footer };
  }

  function renderBullets(list, startDelay = 0) {
    return `<ul class="bullet-list">${list
      .map((item, i) => `<li class="anim-line" style="--ld:${startDelay + i}">${item}</li>`)
      .join("")}</ul>`;
  }

  function openLightbox(src, caption) {
    lbImg.src = src;
    lbCap.textContent = caption || "";
    lightbox.classList.remove("hidden");
  }

  function openGameExplainModal(cap) {
    if (!cap) return;
    const toeInfo = TOE_META.find((t) => t.key === cap.toe) || TOE_META[0];
    const isEnabling = cap.target === "enabling";
    gameModalBadges.innerHTML = `
      <span class="modal-pill ${toeInfo.color}">${toeInfo.label}</span>
      <span class="modal-pill ${isEnabling ? "gold" : "purple"}">${isEnabling ? "賦能創新能力 (Enabling)" : "增強創新能力 (Enhancing)"}</span>
    `;
    gameModalTitle.textContent = `能力 ${String(cap.id).padStart(2, "0")}：${cap.name}`;
    gameModalBody.innerHTML = `
      <div class="explain-block plain">
        <div class="explain-label">（1）此能力的白話解釋</div>
        <div>${cap.plainExplain}</div>
      </div>
      <div class="explain-block ${isEnabling ? "reason-enabling" : "reason-enhancing"}">
        <div class="explain-label">（2）為什麼屬於「${isEnabling ? "賦能創新能力" : "增強創新能力"}」？</div>
        <div>${cap.reason}</div>
      </div>
    `;
    gameExplainModal.classList.remove("hidden");
  }

  function closeGameExplainModal() {
    gameExplainModal.classList.add("hidden");
  }

  function renderCoverSVG() {
    return `
      <svg viewBox="0 0 540 560" width="100%" height="100%" style="max-height:580px;">
        <g stroke="#1E2428" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none" font-family="'Noto Serif TC', serif">
          <!-- AI應用 -->
          <rect x="200" y="16" width="140" height="46" rx="12" fill="#E03A33"/>
          <text x="270" y="46" text-anchor="middle" fill="#FFFFFF" stroke="none" font-size="20" font-weight="900">AI應用</text>
          <!-- Branches to 取代 強化 揭示 -->
          <path d="M270 62 V84 M110 84 H430 M110 84 V104 M270 84 V104 M430 84 V104"/>
          <rect x="50" y="104" width="120" height="44" rx="10" fill="#FDEFEE"/>
          <text x="110" y="133" text-anchor="middle" fill="#1E2428" stroke="none" font-size="20" font-weight="700">取代</text>
          <rect x="210" y="104" width="120" height="44" rx="10" fill="#FDEFEE"/>
          <text x="270" y="133" text-anchor="middle" fill="#1E2428" stroke="none" font-size="20" font-weight="700">強化</text>
          <rect x="370" y="104" width="120" height="44" rx="10" fill="#FDEFEE"/>
          <text x="430" y="133" text-anchor="middle" fill="#1E2428" stroke="none" font-size="20" font-weight="700">揭示</text>
          <!-- Down to TOE -->
          <path d="M110 148 V176 H430 V148 M270 148 V206"/>
          <path d="M262 196 L270 208 L278 196"/>
          <!-- Center TOE Circle -->
          <circle cx="270" cy="274" r="64" fill="#FFF9E6"/>
          <circle cx="270" cy="274" r="69" stroke-width="1.4" stroke-dasharray="14 6"/>
          <text x="270" y="282" text-anchor="middle" fill="#1E2428" stroke="none" font-size="22" font-weight="900">TOE框架</text>
          <!-- Left AI採用 Circle -->
          <circle cx="88" cy="274" r="56" fill="#335E95"/>
          <circle cx="88" cy="274" r="61" stroke-width="1.4" stroke-dasharray="12 6"/>
          <text x="88" y="282" text-anchor="middle" fill="#FFFFFF" stroke="none" font-size="22" font-weight="900">AI採用</text>
          <path d="M148 274 H202 M192 266 L204 274 L192 282"/>
          <!-- Right T O E -->
          <path d="M336 274 H378 M378 192 V356 M378 192 H408 M378 274 H408 M378 356 H408"/>
          <rect x="410" y="168" width="114" height="44" rx="10" fill="#EEF3FA"/>
          <text x="467" y="197" text-anchor="middle" fill="#1E2428" stroke="none" font-size="20" font-weight="700">技術</text>
          <rect x="410" y="252" width="114" height="44" rx="10" fill="#F2F7E8"/>
          <text x="467" y="281" text-anchor="middle" fill="#1E2428" stroke="none" font-size="20" font-weight="700">組織</text>
          <rect x="410" y="334" width="114" height="44" rx="10" fill="#E8F5F5"/>
          <text x="467" y="363" text-anchor="middle" fill="#1E2428" stroke="none" font-size="20" font-weight="700">環境</text>
          <!-- Bottom 創新能力 -> 賦能/增強 -> TOE -->
          <path d="M270 378 V344 M262 354 L270 342 L278 354"/>
          <path d="M155 416 V378 H385 V416"/>
          <rect x="85" y="416" width="140" height="46" rx="10" fill="#FFF9E6"/>
          <text x="155" y="446" text-anchor="middle" fill="#1E2428" stroke="none" font-size="20" font-weight="700">賦能能力</text>
          <rect x="315" y="416" width="140" height="46" rx="10" fill="#F8ECF5"/>
          <text x="385" y="446" text-anchor="middle" fill="#1E2428" stroke="none" font-size="20" font-weight="700">增強能力</text>
          <path d="M155 462 V486 H385 V462 M270 486 V504"/>
          <rect x="195" y="504" width="150" height="46" rx="12" fill="#9B0D76"/>
          <text x="270" y="534" text-anchor="middle" fill="#FFFFFF" stroke="none" font-size="20" font-weight="900">創新能力</text>
        </g>
      </svg>
    `;
  }

  function renderSlideHTML(s) {
    if (s.type === "cover") {
      return `
        <div class="cover-grid">
          <div class="cover-left">
            <div class="cover-pill anim-header">${s.tag}</div>
            <div class="cover-title-zh anim-line" style="--ld:0">${s.titleZh}</div>
            <div class="cover-sub-zh anim-line" style="--ld:1">${s.subtitleZh}</div>
            <div class="cover-title-en anim-line" style="--ld:2">${s.titleEn}</div>
            <div class="cover-rule anim-line" style="--ld:3"></div>
            <div class="cover-author anim-line" style="--ld:4"><strong class="kw-navy">論文作者：</strong>${s.authors}</div>
            <div class="cover-meta anim-line" style="--ld:5">${s.journal}</div>
            <div class="cover-presenter anim-line" style="--ld:6">${s.presenter}</div>
          </div>
          <div class="cover-right anim-card" style="--d:1">
            <div class="cover-diag-title">手繪理論架構圖</div>
            ${renderCoverSVG()}
          </div>
        </div>
      `;
    }

    const { header, footer } = renderHeaderFooter(s);
    let body = "";

    if (s.type === "roadmap") {
      body = `
        <div class="roadmap-wrap">
          <div class="lead-line anim-line" style="--ld:0">${s.lead}</div>
          <div class="roadmap-nodes anim-card" style="--d:1">
            <div class="road-circle navy">${s.steps[0].num}</div>
            <svg class="road-arrow" viewBox="0 0 115 36"><path d="M4 22 Q32 4 60 22 T106 14" stroke="#1E2428" stroke-width="3.5" fill="none"/><path d="M98 8 L110 14 L100 24" stroke="#1E2428" stroke-width="3.5" fill="none"/></svg>
            <div class="road-circle gold">${s.steps[1].num}</div>
            <svg class="road-arrow" viewBox="0 0 115 36"><path d="M4 16 Q32 32 60 16 T106 20" stroke="#1E2428" stroke-width="3.5" fill="none"/><path d="M98 12 L110 20 L100 28" stroke="#1E2428" stroke-width="3.5" fill="none"/></svg>
            <div class="road-circle coral">${s.steps[2].num}</div>
          </div>
          <div class="grid-3">
            ${s.steps
              .map(
                (st, i) => `
              <div class="sketch-card bg-${st.color} anim-card" style="--d:${i + 2}">
                <div class="card-cap ${st.color}">${st.header}</div>
                <div class="card-body">
                  <div style="font-weight:900;color:var(--${st.color});">${st.sub}</div>
                  ${renderBullets(st.items, i * 2 + 1)}
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      `;
    } else if (s.type === "columns3") {
      body = `
        <div class="lead-line anim-line" style="--ld:0">${s.lead}</div>
        <div class="grid-3">
          ${s.cards
            .map(
              (c, i) => `
            <div class="sketch-card bg-${c.color} anim-card" style="--d:${i + 1}">
              <div class="card-cap ${c.color}">${c.header}</div>
              <div class="card-body">
                <div class="anim-line" style="--ld:${i * 2 + 1};font-weight:700;">${c.lead}</div>
                ${renderBullets(c.bullets, i * 2 + 2)}
              </div>
            </div>`
            )
            .join("")}
        </div>
      `;
    } else if (s.type === "columns2") {
      body = `
        <div class="grid-2">
          ${s.cards
            .map(
              (c, i) => `
            <div class="sketch-card bg-${c.color} anim-card" style="--d:${i + 1}">
              <div class="card-cap ${c.color}">${c.header}</div>
              <div class="card-body">${renderBullets(c.bullets, i * 3)}</div>
            </div>`
            )
            .join("")}
        </div>
      `;
    } else if (s.type === "columns2_simple") {
      body = `
        <div class="grid-2" style="padding-top:14px;">
          ${s.cards
            .map(
              (c, i) => `
            <div class="sketch-card bg-${c.color} anim-card" style="--d:${i + 1}">
              <div class="card-cap ${c.color}">${c.header}</div>
              <div class="card-body" style="justify-content:center;font-size:26pt;line-height:1.35;">
                <div class="anim-line" style="--ld:${i + 1}">${c.text}</div>
              </div>
            </div>`
            )
            .join("")}
        </div>
      `;
    } else if (s.type === "columns3_simple") {
      body = `
        <div class="grid-3" style="padding-top:10px;">
          ${s.cards
            .map(
              (c, i) => `
            <div class="sketch-card bg-${c.color} anim-card" style="--d:${i + 1}">
              <div class="card-cap ${c.color}">${c.header}</div>
              <div class="card-body" style="justify-content:center;font-size:25pt;line-height:1.32;">
                <div class="anim-line" style="--ld:${i + 1}">${c.text}</div>
              </div>
            </div>`
            )
            .join("")}
        </div>
      `;
    } else if (s.type === "split_1_2") {
      body = `
        <div class="grid-2">
          <div class="sketch-card bg-${s.leftCard.color} anim-card" style="--d:1">
            <div class="card-cap ${s.leftCard.color}">${s.leftCard.header}</div>
            <div class="card-body">${renderBullets(s.leftCard.bullets, 0)}</div>
          </div>
          <div class="stack-2">
            <div class="sketch-card bg-${s.rightTopCard.color} anim-card" style="--d:2;flex:1;">
              <div class="card-cap ${s.rightTopCard.color}">${s.rightTopCard.header}</div>
              <div class="card-body">${renderBullets(s.rightTopCard.bullets, 3)}</div>
            </div>
            <div class="sketch-card bg-${s.rightBottomCard.color} anim-card" style="--d:3;flex:1.18;">
              <div class="card-cap ${s.rightBottomCard.color}">${s.rightBottomCard.header}</div>
              <div class="card-body">${renderBullets(s.rightBottomCard.bullets, 5)}</div>
            </div>
          </div>
        </div>
      `;
    } else if (s.type === "grid2x2") {
      body = `
        <div class="grid-2x2">
          ${s.cards
            .map(
              (c, i) => `
            <div class="sketch-card bg-${c.color} anim-card" style="--d:${i + 1}">
              <div class="card-cap ${c.color}">${c.header}</div>
              <div class="card-body" style="gap:3px;">
                <div class="anim-line" style="--ld:${i * 2};font-weight:900;">${c.zh}</div>
                <div class="anim-line" style="--ld:${i * 2 + 1};color:var(--muted);line-height:1.12;">${c.en}</div>
                <div class="anim-line" style="--ld:${i * 2 + 2};font-weight:900;color:var(--${c.color === 'gold' ? 'blue' : c.color});">${c.note}</div>
              </div>
            </div>`
            )
            .join("")}
        </div>
      `;
    } else if (s.type === "method_fig") {
      body = `
        <div class="cap-grid" style="grid-template-columns:1.08fr 1fr;">
          <div class="stack-2">
            ${s.steps
              .map(
                (st, i) => `
              <div class="sketch-card bg-${st.color} anim-card" style="--d:${i + 1};flex:1;">
                <div class="card-cap ${st.color}">${st.header}</div>
                <div class="card-body"><div class="anim-line" style="--ld:${i + 1}">${st.text}</div></div>
              </div>`
              )
              .join("")}
          </div>
          <div class="sketch-box anim-card" style="--d:2;padding:10px;display:flex;flex-direction:column;align-items:center;">
            <div style="font-size:24pt;font-weight:900;margin-bottom:6px;">${s.imgTitle}</div>
            <img class="paper-img" src="${s.imgSrc}" data-zoom="${s.imgSrc}" data-cap="${s.imgTitle}" style="flex:1;max-height:485px;" />
          </div>
        </div>
      `;
    } else if (s.type === "toe_intro") {
      body = `
        <div class="cap-grid" style="grid-template-columns:0.86fr 1.14fr;">
          <div class="sketch-card bg-${s.leftCard.color} anim-card" style="--d:1">
            <div class="card-cap ${s.leftCard.color}">${s.leftCard.header}</div>
            <div class="card-body">${renderBullets(s.leftCard.bullets, 0)}</div>
          </div>
          <div class="stack-2">
            ${s.rightCards
              .map(
                (rc, i) => `
              <div class="sketch-card bg-${rc.color} anim-card" style="--d:${i + 2};flex:1;">
                <div class="card-cap ${rc.color}">${rc.header}</div>
                <div class="card-body"><div class="anim-line" style="--ld:${i + 2}">${rc.text}</div></div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      `;
    } else if (s.type === "enabling_enhancing") {
      body = `
        <div class="sketch-box bg-light anim-card" style="--d:1;padding:10px 18px;margin-bottom:12px;">
          <div class="anim-line" style="--ld:0;font-size:24pt;font-weight:900;color:var(--navy);">${s.topDef.title}</div>
          <div class="anim-line" style="--ld:1;font-size:24pt;line-height:1.2;">${s.topDef.body}</div>
          <div class="anim-line" style="--ld:2;font-size:24pt;font-weight:900;color:var(--purple);">${s.topDef.highlight}</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:14px;align-items:center;flex:1;min-height:0;">
          <div class="sketch-card bg-gold anim-card" style="--d:2;height:100%;">
            <div class="card-cap gold">${s.leftCard.header}</div>
            <div class="card-body" style="justify-content:center;">${renderBullets(s.leftCard.bullets, 3)}</div>
          </div>
          <div class="anim-card" style="--d:3;display:flex;align-items:center;gap:6px;">
            <span style="font-size:28pt;font-weight:900;">→</span>
            <div style="width:128px;height:128px;border-radius:50%;background:var(--coral);color:#fff;border:3px solid var(--ink);display:flex;align-items:center;justify-content:center;text-align:center;font-size:24pt;font-weight:900;box-shadow:0 0 0 4px #fff, 0 0 0 6px var(--ink);white-space:pre-line;">${s.centerBadge}</div>
            <span style="font-size:28pt;font-weight:900;">→</span>
          </div>
          <div class="sketch-card bg-purple anim-card" style="--d:4;height:100%;">
            <div class="card-cap purple">${s.rightCard.header}</div>
            <div class="card-body" style="justify-content:center;">${renderBullets(s.rightCard.bullets, 6)}</div>
          </div>
        </div>
      `;
    } else if (s.type === "r3_theory") {
      body = `
        <div class="grid-2" style="flex:0 0 auto;margin-bottom:12px;">
          ${s.topBoxes
            .map(
              (tb, i) => `
            <div class="sketch-box bg-${tb.color} anim-card" style="--d:${i + 1};padding:10px 16px;">
              <div class="anim-line" style="--ld:${i};font-size:24pt;font-weight:900;color:var(--${tb.color});">${tb.title}</div>
              <div class="anim-line" style="--ld:${i + 1};font-size:24pt;line-height:1.18;">${tb.text}</div>
            </div>`
            )
            .join("")}
        </div>
        <div class="grid-3">
          ${s.cards
            .map(
              (c, i) => `
            <div class="sketch-card bg-${c.color} anim-card" style="--d:${i + 3}">
              <div class="card-cap ${c.color}">${c.header}</div>
              <div class="card-body">${renderBullets(c.bullets, i + 2)}</div>
            </div>`
            )
            .join("")}
        </div>
      `;
    } else if (s.type === "qa_2col" || s.type === "qa_3col") {
      const isOpen = revealedQA.has(s.id);
      const gridCls = s.type === "qa_3col" ? "grid-3" : "grid-2";
      body = `
        <div class="qa-banner anim-card" style="--d:1">
          <span>${s.question}</span>
          <button class="sketch-btn ${isOpen ? "teal" : "gold"}" data-qa-toggle="${s.id}">
            ${isOpen ? "隱藏解答" : "點擊揭曉答案"}
          </button>
        </div>
        ${
          isOpen
            ? `<div class="${gridCls}">
                ${s.cards
                  .map(
                    (c, i) => `
                  <div class="sketch-card bg-${c.color} reveal-box" style="animation-delay:${i * 90}ms">
                    <div class="card-cap ${c.color}">${c.header}</div>
                    <div class="card-body">${renderBullets(c.bullets, 0)}</div>
                  </div>`
                  )
                  .join("")}
              </div>`
            : `<div class="qa-hidden-stage anim-card" style="--d:2">
                <div class="qa-hidden-hint">思考一下！點擊右上方「點擊揭曉答案」按鈕（或按 A 鍵）顯示完整解答</div>
                <button class="sketch-btn gold" data-qa-toggle="${s.id}">點我揭曉答案</button>
              </div>`
        }
      `;
    } else if (s.type === "qa_fill") {
      const isOpen = revealedQA.has(s.id);
      body = `
        <div class="sketch-card bg-light anim-card" style="--d:1;margin-bottom:16px;">
          <div class="card-cap navy" style="display:flex;justify-content:space-between;align-items:center;">
            <span>問題（請補充這句話）</span>
            <button class="sketch-btn ${isOpen ? "teal" : "gold"}" style="font-size:16pt;padding:4px 14px;" data-qa-toggle="${s.id}">
              ${isOpen ? "隱藏解答" : "點擊揭曉答案"}
            </button>
          </div>
          <div class="card-body" style="font-size:28pt;line-height:1.45;padding:18px 22px;">
            <div class="anim-line" style="--ld:0">${s.questionPrompt}</div>
          </div>
        </div>
        ${
          isOpen
            ? `<div class="sketch-card bg-teal reveal-box" style="flex:1;">
                <div class="card-cap teal">解答</div>
                <div class="card-body" style="justify-content:center;font-size:28pt;line-height:1.45;padding:18px 22px;">
                  <div>${s.answerHtml}</div>
                </div>
              </div>`
            : `<div class="qa-hidden-stage anim-card" style="--d:2">
                <div class="qa-hidden-hint">請先思考空格內應填入哪兩種能力，再點擊揭曉解答（或按 A 鍵）</div>
                <button class="sketch-btn teal" data-qa-toggle="${s.id}">點我揭曉解答</button>
              </div>`
        }
      `;
    } else if (s.type === "capability") {
      const guessState = revealedGuess.get(s.id);
      const isRevealed = Boolean(guessState);
      const isCorrect = guessState && guessState.choice === s.guessType;
      const showFeedback = guessState && guessState.choice !== null;
      const ansColor = s.guessType === "enabling" ? "gold" : "purple";

      body = `
        <div class="cap-grid">
          <div class="sketch-card anim-card" style="--d:1">
            <div class="card-cap ${s.ctxColor}">${s.enSub}</div>
            <div class="card-body">
              <div class="cap-def-row">
                <div class="cap-def-text">${renderBullets(s.defBullets, 0)}</div>
                <div class="illus-thumb-wrap anim-card" style="--d:2" data-zoom="${s.analogyImg}" data-cap="${s.title}｜核心比喻手繪示意圖">
                  <img class="illus-thumb" src="${s.analogyImg}" alt="比喻示意圖" />
                  <span class="illus-label">比喻示意圖 🔍</span>
                </div>
              </div>
            </div>
          </div>

          <div class="cap-right-col">
            <div class="sketch-card bg-light anim-card" style="--d:2;flex:1.28;">
              <div class="card-cap navy">${s.caseTitle}</div>
              <div class="card-body">
                <div class="case-inner">
                  <div class="case-text">${renderBullets(s.caseBullets, 3)}</div>
                  <div class="illus-thumb-wrap" data-zoom="${s.caseImg}" data-cap="${s.caseTitle}｜實務案例手繪示意圖">
                    <img class="illus-thumb" src="${s.caseImg}" alt="案例示意圖" />
                    <span class="illus-label">案例示意圖 🔍</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="sketch-card ${isRevealed ? `bg-${ansColor}` : "bg-light"} anim-card guess-card" style="--d:3;flex:1;">
              <div class="card-cap ${isRevealed ? ansColor : "navy"}" style="display:flex;justify-content:space-between;align-items:center;">
                <span>猜猜看：賦能 vs. 增強？</span>
                ${isRevealed ? `<button class="sketch-btn" style="font-size:14pt;padding:2px 10px;" data-guess-reset="${s.id}">重猜</button>` : ""}
              </div>
              <div class="card-body">
                ${
                  isRevealed
                    ? `<div class="reveal-box">
                        ${
                          showFeedback
                            ? `<div class="reveal-feedback ${isCorrect ? "ok" : "oops"}">${
                                isCorrect ? "✓ 答對了！" : "✕ 再想一下，正確答案是："
                              }</div>`
                            : ""
                        }
                        <div class="reveal-title ${s.guessType}">${s.guessAnswer}</div>
                        <div style="font-size:17.5pt;line-height:1.3;">${s.guessReason}</div>
                      </div>`
                    : `<div class="guess-prompt">
                        <div style="font-size:18pt;font-weight:700;color:var(--title);text-align:center;">這項能力屬於導入 AI 前或導入後？</div>
                        <div class="guess-btn-row">
                          <button class="sketch-btn gold" style="flex:1;" data-guess-pick="${s.id}:enabling">賦能能力 (Enabling)</button>
                          <button class="sketch-btn purple" style="flex:1;" data-guess-pick="${s.id}:enhancing">增強能力 (Enhancing)</button>
                        </div>
                        <button class="sketch-btn" style="font-size:15pt;padding:4px 12px;" data-guess-pick="${s.id}:reveal">直接點擊揭曉答案</button>
                      </div>`
                }
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (s.type === "summary") {
      body = `
        <div class="lead-line anim-line" style="--ld:0">${s.question}</div>
        <div class="summary-list">
          ${s.rows
            .map(
              (r, i) => `
            <div class="summary-row ${r.type === "enabling" ? "bg-gold" : "bg-purple"} anim-card" style="--d:${i + 1}">
              <div class="summary-name">${r.name}</div>
              <div class="summary-q">${r.q}</div>
              <div class="summary-badge ${r.type}">${r.badge}</div>
            </div>`
            )
            .join("")}
        </div>
        <div class="summary-takeaway ${s.ctxColor} anim-card" style="--d:${s.rows.length + 1}">${s.takeaway}</div>
      `;
    } else if (s.type === "game") {
      const placedCount = Object.keys(gameState.placed).length;
      const unplaced = gameCaps.filter((c) => !gameState.placed[c.id]);
      const enablingKept = gameCaps.filter((c) => gameState.placed[c.id] === "enabling");
      const enhancingKept = gameCaps.filter((c) => gameState.placed[c.id] === "enhancing");

      const renderTubeTOE = (keptList, tubeType) =>
        TOE_META.map((t) => {
          const items = keptList.filter((c) => c.toe === t.key);
          const expected = gameCaps.filter((c) => c.target === tubeType && c.toe === t.key).length;
          return `
            <div class="tube-toe-group ${t.color}" data-drop-tube="${tubeType}" data-drop-toe="${t.key}">
              <div class="tube-toe-label ${t.color}">
                <span>${t.label}</span>
                <span class="tube-toe-count">${items.length} / ${expected}</span>
              </div>
              <div class="tube-toe-items">
                ${
                  items.length > 0
                    ? items
                        .map(
                          (c) => `
                        <button type="button" class="tube-ball-kept ${gameState.activeExplainId === c.id ? "active" : ""}" data-kept-id="${c.id}" title="點擊查看能力解析">
                          <span class="ball-num">${String(c.id).padStart(2, "0")}</span>
                          <span>${c.name}</span>
                        </button>`
                        )
                        .join("")
                    : `<span class="tube-toe-empty">拖曳或點擊投入「${t.label.split("｜")[1]}」能力</span>`
                }
              </div>
            </div>
          `;
        }).join("");

      body = `
        <div id="game-toast" class="game-toast hidden"></div>
        <div class="game-layout">
          <div class="game-topbar">
            <div class="game-status">
              拖曳或點擊選球投入對應「籤筒 × TOE 區塊」：已歸位 <strong class="kw-teal">${placedCount} / 13</strong>
              ${placedCount === 13 ? " 🎉 全部完成！點擊能力看解析" : ""}
            </div>
            <div class="game-controls">
              <button class="game-btn-sm" id="btn-game-solve">一鍵歸位解答</button>
              <button class="game-btn-sm" id="btn-game-reset">重置遊戲</button>
            </div>
          </div>

          <div class="ball-pool" id="ball-pool">
            ${
              unplaced.length > 0
                ? unplaced
                    .map(
                      (c) => `
                  <div class="cap-ball ${gameState.selectedBallId === c.id ? "selected" : ""}"
                       draggable="true"
                       data-ball-id="${c.id}">
                    <span class="ball-num">${String(c.id).padStart(2, "0")}</span>
                    <span>${c.name}</span>
                  </div>`
                    )
                    .join("")
                : `<div class="ball-pool-done">🎉 太棒了！13 項能力已全數依 TOE 框架歸位（點擊籤筒內任意能力即可開啟彈出視窗回顧解析）</div>`
            }
          </div>

          <div class="game-middle">
            <div class="tube-zone enabling" data-tube="enabling">
              <div class="tube-header">賦能創新能力籤筒（${enablingKept.length}/6）</div>
              <div class="tube-sub">導入 AI「前」必備基礎條件（請投入下方對應 TOE 區塊）</div>
              <div class="tube-vessel">
                ${renderTubeTOE(enablingKept, "enabling")}
              </div>
            </div>

            <div class="tube-zone enhancing" data-tube="enhancing">
              <div class="tube-header">增強創新能力籤筒（${enhancingKept.length}/7）</div>
              <div class="tube-sub">導入 AI「後」轉化與創造之能力（請投入下方對應 TOE 區塊）</div>
              <div class="tube-vessel">
                ${renderTubeTOE(enhancingKept, "enhancing")}
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (s.type === "fig_focus") {
      body = `
        <div class="sketch-box bg-purple anim-card" style="--d:1;padding:10px 16px;margin-bottom:12px;">
          <div class="anim-line" style="--ld:0;font-size:25pt;font-weight:900;color:var(--purple);">${s.question}</div>
        </div>
        <div class="sketch-box anim-card" style="--d:2;flex:1;padding:10px 12px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:6px;min-height:0;">
          <img class="paper-img" src="${s.imgSrc}" data-zoom="${s.imgSrc}" data-cap="${s.caption}" style="max-height:375px;" />
          <div style="font-size:15pt;font-weight:700;color:var(--title);text-align:center;">${s.caption}</div>
        </div>
      `;
    } else if (s.type === "table5_split") {
      body = `
        <div class="cap-grid" style="grid-template-columns:0.86fr 1.14fr;">
          <div class="sketch-box anim-card" style="--d:1;padding:8px;display:flex;align-items:center;justify-content:center;">
            <img class="paper-img" src="${s.imgSrc}" data-zoom="${s.imgSrc}" data-cap="表 5 AI 應用分類" style="max-height:550px;" />
          </div>
          <div class="stack-2">
            ${s.cards
              .map(
                (c, i) => `
              <div class="sketch-card bg-${c.color} anim-card" style="--d:${i + 2};flex:1;">
                <div class="card-cap ${c.color}">${c.header}</div>
                <div class="card-body">${renderBullets(c.bullets, i * 2 + 1)}</div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      `;
    } else if (s.type === "elsa") {
      body = `
        <div class="sketch-box bg-purple anim-card" style="--d:1;padding:10px 16px;margin-bottom:12px;">
          <div class="anim-line" style="--ld:0;font-size:24pt;font-weight:900;color:var(--purple);">${s.topTitle}</div>
          <div class="anim-line" style="--ld:1;font-size:24pt;line-height:1.2;">${s.topText}</div>
        </div>
        <div class="sketch-card anim-card" style="--d:2;flex:1;">
          <div class="card-cap navy">${s.cardTitle}</div>
          <div class="card-body">
            <div class="grid-2x2" style="gap:10px;">
              ${s.actions
                .map(
                  (a, i) => `
                <div class="sketch-box bg-${a.color} anim-line" style="--ld:${i + 2};padding:10px 14px;display:flex;flex-direction:column;justify-content:center;">
                  <div style="font-size:24pt;font-weight:900;color:var(--title);">${a.title}</div>
                  <div style="font-size:22pt;line-height:1.18;">${a.text}</div>
                </div>`
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
    } else if (s.type === "agenda") {
      body = `
        <div class="grid-2" style="gap:14px;">
          ${[s.left, s.right]
            .map(
              (col, i) => `
            <div style="display:flex;flex-direction:column;gap:10px;min-height:0;">
              <div class="sketch-card bg-${col.color} anim-card" style="--d:${i + 1};flex:0 0 auto;">
                <div class="card-cap ${col.color}">${col.header}</div>
                <div class="card-body" style="padding:8px 12px;">${renderBullets(col.bullets, i * 2)}</div>
              </div>
              <div class="sketch-box anim-card" style="--d:${i + 3};flex:1;padding:6px;display:flex;align-items:center;justify-content:center;min-height:0;">
                <img class="paper-img" src="${col.imgSrc}" data-zoom="${col.imgSrc}" data-cap="${col.imgLabel}" style="max-height:260px;" />
              </div>
            </div>`
            )
            .join("")}
        </div>
      `;
    } else if (s.type === "bridge") {
      body = `
        <div class="lead-line anim-line" style="--ld:0;color:var(--purple);">${s.lead}</div>
        <div class="stack-2" style="flex:1;">
          ${s.cards
            .map(
              (c, i) => `
            <div class="sketch-card bg-${c.color} anim-card" style="--d:${i + 1};flex:1;">
              <div class="card-cap ${c.color}">${c.header}</div>
              <div class="card-body" style="justify-content:center;">
                <div class="anim-line" style="--ld:${i + 1}">${c.text}</div>
              </div>
            </div>`
            )
            .join("")}
        </div>
      `;
    }

    return `${header}<div class="slide-body">${body}</div>${footer}`;
  }

  function showToast(msg, kind = "error") {
    const t = document.getElementById("game-toast");
    if (!t) return;
    t.textContent = msg;
    t.className = `game-toast ${kind}`;
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.add("hidden"), 1500);
  }

  function attemptDrop(ballId, targetTube, targetToe) {
    const cap = gameCaps.find((c) => c.id === Number(ballId));
    if (!cap) return;
    const tubeOk = cap.target === targetTube;
    const toeOk = cap.toe === targetToe;
    const toeInfo = TOE_META.find((t) => t.key === targetToe);
    if (tubeOk && toeOk) {
      gameState.placed[cap.id] = targetTube;
      gameState.selectedBallId = null;
      gameState.activeExplainId = cap.id;
      render(false);
      showToast(
        `✓ 正確！「${cap.name}」屬於${targetTube === "enabling" ? "賦能" : "增強"} × ${toeInfo ? toeInfo.label : targetToe}`,
        "success"
      );
      openGameExplainModal(cap);
    } else {
      gameState.selectedBallId = null;
      const el = root.querySelector(`.cap-ball[data-ball-id="${cap.id}"]`);
      if (el) {
        el.classList.remove("fail-shake");
        void el.offsetWidth;
        el.classList.add("fail-shake");
      }
      if (tubeOk && !toeOk) {
        showToast(`✕ 籤筒對了，但 TOE 脈絡不對！「${cap.name}」不屬於${toeInfo ? toeInfo.label : targetToe}`, "error");
      } else if (!tubeOk && toeOk) {
        showToast(`✕ TOE 脈絡對了，但籤筒不對！請再想想導入前或導入後！`, "error");
      } else {
        showToast(`✕ 配對失敗！「${cap.name}」不屬於此區塊，請再想想導入前後與 T/O/E 脈絡！`, "error");
      }
    }
  }

  function bindGameEvents() {
    const balls = root.querySelectorAll(".cap-ball");
    const dropZones = root.querySelectorAll(".tube-toe-group[data-drop-tube][data-drop-toe]");

    balls.forEach((b) => {
      const id = Number(b.dataset.ballId);
      b.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", String(id));
        b.classList.add("dragging");
      });
      b.addEventListener("dragend", () => b.classList.remove("dragging"));

      // Click-to-select fallback
      b.addEventListener("click", () => {
        gameState.selectedBallId = gameState.selectedBallId === id ? null : id;
        render(false);
      });
    });

    dropZones.forEach((zone) => {
      const targetTube = zone.dataset.dropTube;
      const targetToe = zone.dataset.dropToe;
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        zone.classList.add("drag-over");
      });
      zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        zone.classList.remove("drag-over");
        const id = e.dataTransfer.getData("text/plain");
        if (id) attemptDrop(id, targetTube, targetToe);
      });

      // Click TOE zone if a ball is selected
      zone.addEventListener("click", (e) => {
        if (e.target.closest(".tube-ball-kept")) return;
        if (gameState.selectedBallId) {
          attemptDrop(gameState.selectedBallId, targetTube, targetToe);
        }
      });
    });

    root.querySelectorAll(".tube-ball-kept").forEach((kept) => {
      kept.addEventListener("click", () => {
        const id = Number(kept.dataset.keptId);
        gameState.activeExplainId = id;
        render(false);
        openGameExplainModal(gameCaps.find((c) => c.id === id));
      });
    });

    const resetBtn = document.getElementById("btn-game-reset");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        gameState = { placed: {}, selectedBallId: null, activeExplainId: null };
        closeGameExplainModal();
        render(false);
      });
    }
    const solveBtn = document.getElementById("btn-game-solve");
    if (solveBtn) {
      solveBtn.addEventListener("click", () => {
        gameCaps.forEach((c) => {
          gameState.placed[c.id] = c.target;
        });
        gameState.activeExplainId = null;
        gameState.selectedBallId = null;
        closeGameExplainModal();
        render(false);
        showToast("✓ 13 項能力已全數依 TOE 框架歸位，點擊任一能力可查看解析！", "success");
      });
    }
  }

  function bindSlideEvents(s) {
    // QA click-to-reveal
    root.querySelectorAll("[data-qa-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.qaToggle;
        if (revealedQA.has(id)) revealedQA.delete(id);
        else revealedQA.add(id);
        render(false);
      });
    });

    // Capability guess click-to-reveal
    root.querySelectorAll("[data-guess-pick]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const [id, pick] = btn.dataset.guessPick.split(":");
        revealedGuess.set(id, { choice: pick === "reveal" ? null : pick });
        render(false);
      });
    });

    root.querySelectorAll("[data-guess-reset]").forEach((btn) => {
      btn.addEventListener("click", () => {
        revealedGuess.delete(btn.dataset.guessReset);
        render(false);
      });
    });

    // Zoomable illustrations & paper figures
    root.querySelectorAll("[data-zoom]").forEach((el) => {
      el.addEventListener("click", () => {
        openLightbox(el.dataset.zoom, el.dataset.cap);
      });
    });

    if (s.type === "game") {
      bindGameEvents();
    }
  }

  function render(playAnim = true) {
    const s = slides[currentIdx];
    root.classList.remove("anim-on");
    root.innerHTML = renderSlideHTML(s);
    if (playAnim && animEnabled) {
      void root.offsetWidth;
      root.classList.add("anim-on");
    }

    hudCounter.textContent = `${s.label} (${currentIdx + 1} / ${slides.length})`;
    progressFill.style.width = `${((currentIdx + 1) / slides.length) * 100}%`;
    btnPrev.disabled = currentIdx === 0;
    btnNext.disabled = currentIdx === slides.length - 1;
    bindSlideEvents(s);
  }

  function goTo(idx) {
    currentIdx = Math.max(0, Math.min(slides.length - 1, idx));
    render(true);
  }

  btnPrev.addEventListener("click", () => goTo(currentIdx - 1));
  btnNext.addEventListener("click", () => goTo(currentIdx + 1));
  btnReplay.addEventListener("click", () => render(true));
  btnAnimToggle.addEventListener("click", () => {
    animEnabled = !animEnabled;
    btnAnimToggle.textContent = `動畫：${animEnabled ? "開" : "關"}`;
    btnAnimToggle.classList.toggle("active", animEnabled);
  });

  btnFullscreen.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  });

  function buildTOC() {
    tocGrid.innerHTML = slides
      .map(
        (s, i) => `
      <button class="toc-item ${i === currentIdx ? "current" : ""}" data-go="${i}">
        <span class="toc-num">${s.label} ${s.tag ? "· " + s.tag : ""}</span>
        <span class="toc-title">${s.title || s.titleZh || ""}</span>
      </button>`
      )
      .join("");
    tocGrid.querySelectorAll("[data-go]").forEach((b) => {
      b.addEventListener("click", () => {
        goTo(Number(b.dataset.go));
        tocModal.classList.add("hidden");
      });
    });
  }

  btnToc.addEventListener("click", () => {
    buildTOC();
    tocModal.classList.remove("hidden");
  });
  btnTocClose.addEventListener("click", () => tocModal.classList.add("hidden"));
  tocModal.querySelector(".modal-backdrop").addEventListener("click", () => tocModal.classList.add("hidden"));

  btnLbClose.addEventListener("click", () => lightbox.classList.add("hidden"));
  lightbox.querySelector(".modal-backdrop").addEventListener("click", () => lightbox.classList.add("hidden"));

  btnGameModalClose.addEventListener("click", closeGameExplainModal);
  gameExplainModal.querySelector(".modal-backdrop").addEventListener("click", closeGameExplainModal);

  function setHudHidden(hidden) {
    hud.classList.toggle("hud-hidden", hidden);
    btnHudShow.classList.toggle("hidden", !hidden);
  }
  btnHudHide.addEventListener("click", () => setHudHidden(true));
  btnHudShow.addEventListener("click", () => setHudHidden(false));

  document.addEventListener("keydown", (e) => {
    if (
      !tocModal.classList.contains("hidden") ||
      !lightbox.classList.contains("hidden") ||
      !gameExplainModal.classList.contains("hidden")
    ) {
      if (e.key === "Escape") {
        tocModal.classList.add("hidden");
        lightbox.classList.add("hidden");
        closeGameExplainModal();
      }
      return;
    }
    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
      e.preventDefault();
      goTo(currentIdx + 1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      goTo(currentIdx - 1);
    } else if (e.key.toLowerCase() === "a") {
      const s = slides[currentIdx];
      if (s.type.startsWith("qa_")) {
        if (revealedQA.has(s.id)) revealedQA.delete(s.id);
        else revealedQA.add(s.id);
        render(false);
      } else if (s.type === "capability") {
        if (revealedGuess.has(s.id)) revealedGuess.delete(s.id);
        else revealedGuess.set(s.id, { choice: null });
        render(false);
      }
    } else if (e.key.toLowerCase() === "r") {
      render(true);
    } else if (e.key.toLowerCase() === "g") {
      buildTOC();
      tocModal.classList.remove("hidden");
    } else if (e.key.toLowerCase() === "f") {
      btnFullscreen.click();
    } else if (e.key.toLowerCase() === "h") {
      setHudHidden(!hud.classList.contains("hud-hidden"));
    }
  });

  render(true);
})();
