/* @ds-bundle: {"format":4,"namespace":"SaraKolataDesignSystem_4545a5","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"Lockup","sourcePath":"components/brand/Lockup.jsx"},{"name":"Mark","sourcePath":"components/brand/Mark.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"ImageFrame","sourcePath":"components/content/ImageFrame.jsx"},{"name":"PhaseList","sourcePath":"components/content/PhaseList.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextArea","sourcePath":"components/forms/TextArea.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"95e7f5ac0de8","components/actions/TextLink.jsx":"14dc02efacfa","components/brand/Lockup.jsx":"992386439dcc","components/brand/Mark.jsx":"051becdba035","components/content/Card.jsx":"04995368e0dd","components/content/ImageFrame.jsx":"4faaf9567b1b","components/content/PhaseList.jsx":"df5532f84623","components/content/PullQuote.jsx":"a8fa262a83b2","components/content/Tag.jsx":"041961ec552c","components/forms/Checkbox.jsx":"ce7c9c6213ed","components/forms/Radio.jsx":"7e3f32843bff","components/forms/Select.jsx":"4b12f4435a7d","components/forms/TextArea.jsx":"fff02761a178","components/forms/TextField.jsx":"2d669574c8b3","components/overlay/Dialog.jsx":"c12d37edca58","ui_kits/website/apply.jsx":"31e713cab337","ui_kits/website/books.jsx":"6f395d8b908e","ui_kits/website/chrome.jsx":"296622292b5e","ui_kits/website/home.jsx":"7d720072c715","ui_kits/website/method.jsx":"90135bc7afbe","ui_kits/website/press.jsx":"3e428d7e43dc","ui_kits/website/residency.jsx":"10e26ca80865"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SaraKolataDesignSystem_4545a5 = window.SaraKolataDesignSystem_4545a5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  primary: {
    bg: 'var(--cochineal)',
    fg: 'var(--quarry)',
    bd: 'var(--cochineal)',
    hbg: 'var(--action-primary-hover)',
    hbd: 'var(--action-primary-hover)',
    pbg: 'var(--action-primary-press)'
  },
  secondary: {
    bg: 'transparent',
    fg: 'var(--obsidian)',
    bd: 'var(--obsidian)',
    hbg: 'var(--obsidian)',
    hfg: 'var(--quarry)',
    pbg: '#000'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--obsidian)',
    bd: 'transparent',
    hbg: 'var(--quarry-deep)',
    pbg: 'var(--quarry-line)'
  },
  'on-dark': {
    bg: 'transparent',
    fg: 'var(--quarry)',
    bd: 'var(--quarry)',
    hbg: 'var(--quarry)',
    hfg: 'var(--ceremony-indigo)',
    pbg: 'var(--quarry-deep)'
  },
  gold: {
    bg: 'var(--inti-gold)',
    fg: 'var(--ceremony-indigo)',
    bd: 'var(--inti-gold)',
    hbg: '#B58A33',
    pbg: '#A27B2D'
  }
};
const SZ = {
  sm: {
    h: 40,
    px: 20,
    fs: 15
  },
  md: {
    h: 48,
    px: 28,
    fs: 16
  },
  lg: {
    h: 56,
    px: 36,
    fs: 17
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  type = 'button',
  style
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const v = V[variant] || V.primary;
  const s = SZ[size] || SZ.md;
  const st = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    minHeight: s.h,
    padding: '0 ' + s.px + 'px',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: s.fs,
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: '.01em',
    textDecoration: 'none',
    borderRadius: 'var(--radius-button)',
    border: '1px solid ' + (h && v.hbd ? v.hbd : v.bd),
    background: p ? v.pbg : h ? v.hbg : v.bg,
    color: h && v.hfg ? v.hfg : v.fg,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? .4 : 1,
    transition: 'background var(--dur-fast) var(--ease-settle), color var(--dur-fast) var(--ease-settle), border-color var(--dur-fast)',
    ...style
  };
  const ev = disabled ? {} : {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    onClick
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: st
  }, ev), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: st
  }, ev), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function TextLink({
  href = '#',
  tone = 'light',
  arrow = false,
  children,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const base = tone === 'dark' ? 'var(--quarry)' : 'var(--cochineal)';
  const hov = tone === 'dark' ? 'var(--inti-gold)' : 'var(--obsidian)';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 'inherit',
      color: h ? hov : base,
      textDecoration: 'underline',
      textDecorationThickness: '1px',
      textUnderlineOffset: '4px',
      transition: 'color var(--dur-fast) var(--ease-settle)',
      ...style
    }
  }, children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      transform: h ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-settle)'
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/brand/Mark.jsx
try { (() => {
const TONES = {
  primary: {
    stroke: 'var(--obsidian)',
    sun: 'var(--inti-gold)'
  },
  reversed: {
    stroke: 'var(--quarry)',
    sun: 'var(--inti-gold)'
  },
  'one-color': {
    stroke: 'currentColor',
    sun: 'currentColor'
  }
};
function Mark({
  variant = 'primary',
  size = 120,
  sun,
  strokeWidth,
  title = 'Sara Kolata',
  style
}) {
  const t = TONES[variant] || TONES.primary;
  const sw = strokeWidth ?? (size <= 64 ? 4 : size <= 100 ? 2.6 : 2.4);
  const r = size <= 64 ? 13 : 12;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 120 120",
    fill: "none",
    role: "img",
    "aria-label": title,
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 108 V56 A38 38 0 0 1 98 56 V108",
    stroke: t.stroke,
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "52",
    r: r,
    fill: sun || t.sun
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 108 L44 80 L55 92 L73 70 L98 108",
    stroke: t.stroke,
    strokeWidth: sw,
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "108",
    x2: "108",
    y2: "108",
    stroke: t.stroke,
    strokeWidth: sw
  }));
}
Object.assign(__ds_scope, { Mark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Mark.jsx", error: String((e && e.message) || e) }); }

// components/brand/Lockup.jsx
try { (() => {
function Lockup({
  layout = 'stacked',
  tone = 'light',
  tagline = false,
  size = 'md',
  style
}) {
  const dark = tone === 'dark';
  const ink = dark ? 'var(--quarry)' : 'var(--obsidian)';
  const S = {
    sm: {
      mark: 40,
      word: 30,
      tag: 22,
      gap: 12
    },
    md: {
      mark: 54,
      word: 40,
      tag: 28,
      gap: 16
    },
    lg: {
      mark: 120,
      word: 104,
      tag: 46,
      gap: 24
    },
    xl: {
      mark: 150,
      word: 128,
      tag: 46,
      gap: 28
    }
  }[size] || {};
  const word = /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: S.word,
      lineHeight: .95,
      letterSpacing: 'var(--tracking-display)',
      color: ink,
      whiteSpace: 'nowrap'
    }
  }, "Sara Kolata");
  const tag = tagline && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontSize: S.tag,
      lineHeight: 1,
      color: dark ? 'var(--inti-gold)' : 'var(--cochineal)'
    }
  }, "Go to the root");
  if (layout === 'horizontal') return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: S.gap,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    variant: dark ? 'reversed' : 'primary',
    size: S.mark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, word, tag));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: S.gap,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    variant: dark ? 'reversed' : 'primary',
    size: S.mark * (layout === 'stacked' && size !== 'lg' && size !== 'xl' ? 1.6 : 1)
  }), word, tag);
}
Object.assign(__ds_scope, { Lockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Lockup.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
const T = {
  raised: {
    bg: 'var(--quarry-light)',
    bd: 'var(--quarry-line)',
    title: 'var(--obsidian)',
    body: 'var(--stone-700)',
    meta: 'var(--stone-600)'
  },
  tint: {
    bg: 'var(--quarry-deep)',
    bd: 'var(--quarry-deep)',
    title: 'var(--obsidian)',
    body: 'var(--stone-700)',
    meta: 'var(--stone-600)'
  },
  dark: {
    bg: 'var(--ceremony-indigo)',
    bd: 'var(--ceremony-indigo)',
    title: 'var(--quarry)',
    body: 'var(--quarry-deep)',
    meta: 'var(--inti-gold)'
  },
  sage: {
    bg: 'var(--apu-sage)',
    bd: 'var(--apu-sage)',
    title: 'var(--quarry)',
    body: 'var(--quarry)',
    meta: 'var(--quarry)'
  },
  accent: {
    bg: 'var(--cochineal)',
    bd: 'var(--cochineal)',
    title: 'var(--quarry)',
    body: 'var(--cochineal-tint)',
    meta: 'var(--cochineal-tint)'
  }
};
function Card({
  tone = 'raised',
  meta,
  title,
  children,
  footer,
  href,
  onClick,
  padding = 28,
  style
}) {
  const t = T[tone] || T.raised;
  const [h, setH] = React.useState(false);
  const click = !!(href || onClick);
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      color: t.meta
    }
  }, meta), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      lineHeight: 1,
      color: t.title
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 300,
      lineHeight: 1.6,
      color: t.body
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8
    }
  }, footer));
  const st = {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding,
    boxSizing: 'border-box',
    background: t.bg,
    border: '1px solid ' + (click && h && tone === 'raised' ? 'var(--obsidian)' : t.bd),
    borderRadius: 'var(--radius-tile)',
    textDecoration: 'none',
    color: 'inherit',
    cursor: click ? 'pointer' : 'default',
    transition: 'border-color var(--dur-fast) var(--ease-settle)',
    ...style
  };
  if (href) return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: st,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, inner);
  return /*#__PURE__*/React.createElement("div", {
    style: st,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, inner);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/ImageFrame.jsx
try { (() => {
function ImageFrame({
  src,
  alt = '',
  ratio = '4 / 3',
  title,
  direction,
  field = 'var(--indigo-soft)',
  ink = 'var(--quarry)',
  position = 'center',
  radius = 'var(--radius-tile)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: ratio,
      borderRadius: radius,
      overflow: 'hidden',
      background: field,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 8,
      padding: 18,
      boxSizing: 'border-box'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      lineHeight: 1.05,
      color: ink
    }
  }, title), direction && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 300,
      lineHeight: 1.5,
      color: ink,
      opacity: .85,
      maxWidth: 420
    }
  }, direction)));
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/PhaseList.jsx
try { (() => {
const DEFAULT = [{
  name: 'Mother',
  body: 'Where the first pattern was written.'
}, {
  name: 'Father',
  body: 'How you learned to meet the world.'
}, {
  name: 'Ancestral',
  body: 'What the lineage carried before you.'
}, {
  name: 'Inner child',
  body: 'The one who learned to survive them.'
}];
function PhaseList({
  phases = DEFAULT,
  tone = 'light',
  layout = 'row',
  active,
  onSelect,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: layout === 'row' ? 'repeat(' + phases.length + ',minmax(0,1fr))' : '1fr',
      gap: layout === 'row' ? 24 : 0,
      ...style
    }
  }, phases.map((p, i) => {
    const on = active === i;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      onClick: onSelect ? () => onSelect(i) : undefined,
      style: {
        display: 'flex',
        flexDirection: layout === 'row' ? 'column' : 'row',
        gap: layout === 'row' ? 12 : 24,
        alignItems: 'baseline',
        padding: layout === 'row' ? '20px 0 0' : '22px 0',
        borderTop: '1px solid ' + (on ? dark ? 'var(--inti-gold)' : 'var(--cochineal)' : dark ? 'var(--border-on-dark)' : 'var(--quarry-line)'),
        cursor: onSelect ? 'pointer' : 'default',
        transition: 'border-color var(--dur-base) var(--ease-settle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: 500,
        color: dark ? 'var(--inti-gold)' : 'var(--cochineal)',
        minWidth: layout === 'row' ? 0 : 80
      }
    }, 'Phase ' + ['one', 'two', 'three', 'four', 'five', 'six'][i]), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 34,
        lineHeight: 1,
        color: dark ? 'var(--quarry)' : 'var(--obsidian)'
      }
    }, p.name), p.body && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        fontWeight: 300,
        lineHeight: 1.6,
        color: dark ? 'var(--quarry-deep)' : 'var(--stone-700)'
      }
    }, p.body)));
  }));
}
Object.assign(__ds_scope, { PhaseList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PhaseList.jsx", error: String((e && e.message) || e) }); }

// components/content/PullQuote.jsx
try { (() => {
function PullQuote({
  children,
  attribution,
  tone = 'light',
  align = 'left',
  size = 40,
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-accent)',
      fontSize: size,
      lineHeight: 1.2,
      color: dark ? 'var(--inti-gold)' : 'var(--cochineal)',
      textWrap: 'balance'
    }
  }, children), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 400,
      color: dark ? 'var(--quarry-deep)' : 'var(--stone-600)'
    }
  }, attribution));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
const T = {
  quarry: ['var(--quarry-deep)', 'var(--obsidian)'],
  outline: ['transparent', 'var(--obsidian)'],
  indigo: ['var(--ceremony-indigo)', 'var(--quarry)'],
  sage: ['var(--apu-sage)', 'var(--quarry)'],
  cochineal: ['var(--cochineal)', 'var(--quarry)'],
  gold: ['transparent', 'var(--inti-gold)']
};
function Tag({
  tone = 'quarry',
  children,
  style
}) {
  const [bg, fg] = T[tone] || T.quarry;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 28,
      padding: '0 12px',
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-button)',
      background: bg,
      color: fg,
      border: tone === 'outline' ? '1px solid var(--quarry-line)' : tone === 'gold' ? '1px solid var(--inti-gold)' : '1px solid transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '.02em',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked,
  defaultChecked = false,
  disabled = false,
  name,
  value,
  onChange,
  style
}) {
  const ctrl = checked !== undefined;
  const [c, setC] = React.useState(defaultChecked);
  const on = ctrl ? checked : c;
  const [f, setF] = React.useState(false);
  const toggle = e => {
    if (disabled) return;
    if (!ctrl) setC(!on);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: toggle,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1,
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      marginTop: 3,
      width: 20,
      height: 20,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-button)',
      border: '1px solid ' + (on ? 'var(--cochineal)' : 'var(--obsidian)'),
      background: on ? 'var(--cochineal)' : 'var(--quarry-light)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline: f ? '2px solid var(--focus-ring)' : 'none',
      outlineOffset: 2,
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5.2 4.3 8.5 11 1.5",
    stroke: "var(--quarry)",
    strokeWidth: "1.6"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 400,
      lineHeight: 1.5,
      color: 'var(--obsidian)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.5,
      color: 'var(--stone-600)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  description,
  checked,
  defaultChecked = false,
  disabled = false,
  name,
  value,
  onChange,
  style
}) {
  const ctrl = checked !== undefined;
  const [c, setC] = React.useState(defaultChecked);
  const on = ctrl ? checked : c;
  const [f, setF] = React.useState(false);
  const toggle = e => {
    if (disabled) return;
    if (!ctrl) setC(true);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: toggle,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1,
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      marginTop: 3,
      width: 20,
      height: 20,
      boxSizing: 'border-box',
      borderRadius: '50%',
      border: '1px solid ' + (on ? 'var(--cochineal)' : 'var(--obsidian)'),
      background: 'var(--quarry-light)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline: f ? '2px solid var(--focus-ring)' : 'none',
      outlineOffset: 2,
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--cochineal)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 400,
      lineHeight: 1.5,
      color: 'var(--obsidian)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.5,
      color: 'var(--stone-600)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const labelSt = {
  fontFamily: 'var(--font-body)',
  fontSize: 15,
  fontWeight: 500,
  color: 'var(--obsidian)'
};
const hintSt = err => ({
  fontFamily: 'var(--font-body)',
  fontSize: 14,
  lineHeight: 1.5,
  color: err ? 'var(--cochineal)' : 'var(--stone-600)'
});
const boxSt = (f, err, dis) => ({
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-body)',
  fontSize: 17,
  fontWeight: 300,
  color: 'var(--obsidian)',
  background: dis ? 'var(--quarry-deep)' : 'var(--quarry-light)',
  border: '1px solid ' + (err ? 'var(--cochineal)' : f ? 'var(--obsidian)' : 'var(--quarry-line)'),
  borderRadius: 'var(--radius-button)',
  outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-settle)',
  opacity: dis ? .6 : 1
});
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  value,
  defaultValue,
  placeholder,
  disabled = false,
  required = false,
  onChange,
  style
}) {
  const [f, setF] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: labelSt
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cochineal)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: fid,
    value: value,
    defaultValue: defaultValue ?? (placeholder ? '' : undefined),
    disabled: disabled,
    required: required,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...boxSt(f, error, disabled),
      height: 'var(--control-height)',
      padding: '0 44px 0 16px',
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: 'pointer'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "8",
    viewBox: "0 0 12 8",
    fill: "none",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1.5 6 6.5 11 1.5",
    stroke: "var(--obsidian)",
    strokeWidth: "1.4"
  }))), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: hintSt(!!error)
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextArea.jsx
try { (() => {
const labelSt = {
  fontFamily: 'var(--font-body)',
  fontSize: 15,
  fontWeight: 500,
  color: 'var(--obsidian)'
};
const hintSt = err => ({
  fontFamily: 'var(--font-body)',
  fontSize: 14,
  lineHeight: 1.5,
  color: err ? 'var(--cochineal)' : 'var(--stone-600)'
});
const boxSt = (f, err, dis) => ({
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-body)',
  fontSize: 17,
  fontWeight: 300,
  color: 'var(--obsidian)',
  background: dis ? 'var(--quarry-deep)' : 'var(--quarry-light)',
  border: '1px solid ' + (err ? 'var(--cochineal)' : f ? 'var(--obsidian)' : 'var(--quarry-line)'),
  borderRadius: 'var(--radius-button)',
  outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-settle)',
  opacity: dis ? .6 : 1
});
function TextArea({
  label,
  hint,
  error,
  id,
  rows = 5,
  value,
  defaultValue,
  placeholder,
  disabled = false,
  required = false,
  onChange,
  style
}) {
  const [f, setF] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: labelSt
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cochineal)'
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", {
    id: fid,
    rows: rows,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...boxSt(f, error, disabled),
      padding: '14px 16px',
      lineHeight: 1.6,
      resize: 'vertical'
    }
  }), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: hintSt(!!error)
  }, error || hint));
}
Object.assign(__ds_scope, { TextArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextArea.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
const labelSt = {
  fontFamily: 'var(--font-body)',
  fontSize: 15,
  fontWeight: 500,
  color: 'var(--obsidian)'
};
const hintSt = err => ({
  fontFamily: 'var(--font-body)',
  fontSize: 14,
  lineHeight: 1.5,
  color: err ? 'var(--cochineal)' : 'var(--stone-600)'
});
const boxSt = (f, err, dis) => ({
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-body)',
  fontSize: 17,
  fontWeight: 300,
  color: 'var(--obsidian)',
  background: dis ? 'var(--quarry-deep)' : 'var(--quarry-light)',
  border: '1px solid ' + (err ? 'var(--cochineal)' : f ? 'var(--obsidian)' : 'var(--quarry-line)'),
  borderRadius: 'var(--radius-button)',
  outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-settle)',
  opacity: dis ? .6 : 1
});
function TextField({
  label,
  hint,
  error,
  id,
  type = 'text',
  value,
  defaultValue,
  placeholder,
  disabled = false,
  required = false,
  onChange,
  style
}) {
  const [f, setF] = React.useState(false);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: labelSt
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cochineal)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...boxSt(f, error, disabled),
      height: 'var(--control-height)',
      padding: '0 16px'
    }
  }), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: hintSt(!!error)
  }, error || hint));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  width = 560,
  style
}) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const k = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(20,24,44,.72)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      boxSizing: 'border-box',
      background: 'var(--quarry)',
      borderRadius: 'var(--radius-tile)',
      boxShadow: 'var(--shadow-float)',
      padding: '40px 40px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      position: 'relative'
    }
  }, onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      width: 40,
      height: 40,
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1 13 13M13 1 1 13",
    stroke: "var(--obsidian)",
    strokeWidth: "1.4"
  }))), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      lineHeight: 1,
      color: 'var(--obsidian)',
      paddingRight: 32
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'var(--stone-700)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      paddingTop: 4
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/apply.jsx
try { (() => {
function ApplyScreen({
  go
}) {
  const {
    Button,
    TextField,
    TextArea,
    Select,
    Checkbox,
    Radio,
    Dialog
  } = window.SaraKolataDesignSystem_4545a5;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '180px 64px 120px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      position: 'sticky',
      top: 40,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 64,
      lineHeight: 1.02
    }
  }, "Apply for a residency"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'var(--stone-700)'
    }
  }, "Answer in your own words. There are no right answers, only honest ones.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Your name",
    required: true
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Email",
    type: "email",
    required: true
  })), /*#__PURE__*/React.createElement(Select, {
    label: "How did you find Sara?",
    placeholder: "Choose one",
    options: ['The book', 'A podcast', 'Press', 'A friend', 'Something else']
  }), /*#__PURE__*/React.createElement(TextArea, {
    label: "What pattern keeps returning?",
    rows: 5,
    hint: "Describe it as you live it."
  }), /*#__PURE__*/React.createElement(TextArea, {
    label: "What have you already tried?",
    rows: 4
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500
    }
  }, "Preferred season"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "season",
    label: "March to May",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "season",
    label: "September to November"
  }))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I can invest in the residency without strain"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg"
  }, "Send application"))), /*#__PURE__*/React.createElement(Dialog, {
    open: sent,
    title: "Your application is with Sara",
    onClose: () => setSent(false),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setSent(false);
        go('home');
      }
    }, "Return to the site"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => {
        setSent(false);
        go('books');
      }
    }, "Read while you wait"))
  }, "She reads every one herself. If it is a fit, you will hear from her team within two weeks."));
}
window.ApplyScreen = ApplyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/apply.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/books.jsx
try { (() => {
function BooksScreen({
  go
}) {
  const {
    Button,
    TextLink,
    ImageFrame,
    Tag,
    PullQuote
  } = window.SaraKolataDesignSystem_4545a5;
  const books = [{
    t: 'You Are God',
    d: 'The book behind the five-month program. The method, in Sara\'s words.',
    img: '../../assets/imagery/book-you-are-god-current.jpg'
  }, {
    t: 'The Healing Trap',
    d: 'For readers who have done the work and are still inside the same patterns.',
    field: 'var(--cochineal)'
  }, {
    t: 'Why You Got Sick',
    d: 'For the reader who arrives through the body first.',
    field: 'var(--apu-sage)'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '180px 64px 80px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 96,
      lineHeight: 1.02
    }
  }, "Books"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 300,
      lineHeight: 1.7,
      maxWidth: 440,
      color: 'var(--stone-700)'
    }
  }, "Each book is a front door for a different reader. All lead to the same root.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 64px 120px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 20
    }
  }, books.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: b.t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: b.img,
    ratio: "2 / 3",
    field: b.field,
    title: b.img ? undefined : b.t
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, i === 0 && /*#__PURE__*/React.createElement(Tag, {
    tone: "cochineal"
  }, "Start here"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Spiritual Ascent")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      lineHeight: 1
    }
  }, b.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'var(--stone-700)'
    }
  }, b.d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Buy the book"), /*#__PURE__*/React.createElement(TextLink, {
    arrow: true
  }, "Read an excerpt"))))));
}
window.BooksScreen = BooksScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/books.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
const {
  Button,
  TextLink,
  Lockup,
  Mark
} = window.SaraKolataDesignSystem_4545a5;
const NAV = [['home', 'Home'], ['method', 'The method'], ['residency', 'The residency'], ['books', 'Books'], ['press', 'Speaking & press']];
function SiteHeader({
  route,
  go,
  tone = 'light'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px 64px',
      color: dark ? 'var(--quarry)' : 'var(--obsidian)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Lockup, {
    layout: "horizontal",
    size: "sm",
    tone: tone
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, NAV.slice(1).map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(k);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: route === k ? 500 : 400,
      color: 'inherit',
      textDecoration: route === k ? 'underline' : 'none',
      textUnderlineOffset: 6,
      textDecorationThickness: 1
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: dark ? 'on-dark' : 'primary',
    onClick: () => go('apply')
  }, "Apply")));
}
function SiteFooter({
  go
}) {
  const col = (t, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--inti-gold)'
    }
  }, t), items.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      k && go(k);
    },
    style: {
      color: 'var(--quarry-deep)',
      textDecoration: 'none',
      fontSize: 15,
      fontWeight: 300
    }
  }, l)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ceremony-indigo)',
      color: 'var(--quarry)',
      padding: '72px 64px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Lockup, {
    layout: "horizontal",
    size: "md",
    tone: "dark",
    tagline: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'var(--quarry-deep)',
      maxWidth: 340
    }
  }, "Spiritual teacher and shamanic guide. Sacred Valley, Peru.")), col('The work', [['method', 'Karmic Recapitulation'], ['residency', 'The Peru Residency'], [null, 'Online courses'], [null, 'Guides']]), col('Read', [['books', 'You Are God'], ['books', 'The Healing Trap'], ['books', 'Why You Got Sick']]), col('Sara', [[null, 'About'], ['press', 'Speaking & press'], [null, 'Workshops & events'], [null, 'Contact']])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      borderTop: '1px solid var(--border-on-dark)',
      paddingTop: 24,
      fontSize: 13,
      color: 'var(--quarry-deep)',
      fontWeight: 300
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Sara Kolata"), /*#__PURE__*/React.createElement("span", null, "Courses and checkout on God in Training")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home.jsx
try { (() => {
function HomeScreen({
  go
}) {
  const {
    Button,
    TextLink,
    Card,
    ImageFrame,
    PullQuote,
    PhaseList
  } = window.SaraKolataDesignSystem_4545a5;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 760,
      background: 'var(--indigo-soft)',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    title: "",
    field: "var(--indigo-soft)",
    radius: 0,
    ratio: "auto",
    style: {
      position: 'absolute',
      inset: 0,
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 120,
      right: 64,
      maxWidth: 280,
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--quarry-deep)',
      fontWeight: 300,
      textAlign: 'right'
    }
  }, "Hero image to come: the valley at first light. Wide frame before sunrise, mist on the terraces."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 64px 88px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      maxWidth: 980
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 96,
      lineHeight: 1.02,
      letterSpacing: '-0.01em',
      color: 'var(--quarry)'
    }
  }, "You've done the work. You're still here."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontSize: 46,
      color: 'var(--inti-gold)',
      lineHeight: 1
    }
  }, "Go to the root"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    onClick: () => go('method')
  }, "Read the method"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    onClick: () => go('books')
  }, "Start with the book")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 64px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 64,
      lineHeight: 1.02
    }
  }, "There is a reason it hasn't held."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 300,
      lineHeight: 1.7,
      maxWidth: '34em'
    }
  }, "Patterns live below insight, in the body and the lineage. Understanding a pattern does not resolve it. Karmic Recapitulation goes there, and the You Are God program builds the life that follows."), /*#__PURE__*/React.createElement(TextLink, {
    arrow: true,
    onClick: e => {
      e.preventDefault();
      go('method');
    }
  }, "How the method works")), /*#__PURE__*/React.createElement(ImageFrame, {
    src: "../../assets/imagery/sara-portrait-linen.png",
    alt: "Sara Kolata",
    ratio: "4 / 5",
    position: "center 25%"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 64px 120px'
    }
  }, /*#__PURE__*/React.createElement(PhaseList, null)), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ceremony-indigo)',
      padding: '120px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 64,
      lineHeight: 1.02,
      color: 'var(--quarry)'
    }
  }, "From the book to the valley"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "raised",
    meta: "Book",
    title: "You Are God",
    footer: /*#__PURE__*/React.createElement(TextLink, {
      onClick: e => {
        e.preventDefault();
        go('books');
      },
      arrow: true
    }, "Read an excerpt")
  }, "The front door. The method, in Sara's words."), /*#__PURE__*/React.createElement(Card, {
    tone: "raised",
    meta: "Five months \xB7 Online",
    title: "The You Are God program",
    footer: /*#__PURE__*/React.createElement(TextLink, {
      arrow: true
    }, "See the program")
  }, "Resolution, then integration. Builds the life that follows."), /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    meta: "In person \xB7 Sacred Valley",
    title: "The Peru Residency",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "on-dark",
      size: "sm",
      onClick: () => go('residency')
    }, "About the residency")
  }, "Private and bespoke. By application."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 64px',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PullQuote, {
    align: "center",
    size: 46,
    attribution: "Residency guest"
  }, "I had understood it for years. This was the first time it moved.")));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/method.jsx
try { (() => {
function MethodScreen({
  go
}) {
  const {
    Button,
    PhaseList,
    Card,
    Tag
  } = window.SaraKolataDesignSystem_4545a5;
  const [a, setA] = React.useState(0);
  const P = [{
    name: 'Mother',
    body: 'Where the first pattern was written.'
  }, {
    name: 'Father',
    body: 'How you learned to meet the world.'
  }, {
    name: 'Ancestral',
    body: 'What the lineage carried before you.'
  }, {
    name: 'Inner child',
    body: 'The one who learned to survive them.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '180px 64px 96px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      maxWidth: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--cochineal)'
    }
  }, "The method"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 96,
      lineHeight: 1.02,
      letterSpacing: '-0.01em'
    }
  }, "Karmic Recapitulation"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 300,
      lineHeight: 1.7,
      maxWidth: '34em'
    }
  }, "A four-phase method that works beneath insight, at the level where a pattern was first written: the mother, the father, the lineage, and the child who learned to survive them.")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ceremony-indigo)',
      padding: '96px 64px',
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(PhaseList, {
    tone: "dark",
    phases: P,
    active: a,
    onSelect: setA
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      lineHeight: 1.1,
      color: 'var(--quarry)',
      maxWidth: 900
    }
  }, "Phase ", ['one', 'two', 'three', 'four'][a], ": ", P[a].name, ". ", P[a].body)), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 64px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "tint",
    title: "Who it is for",
    padding: 36
  }, "People who have done years of therapy, retreats and courses, and whose patterns keep returning. High-functioning on the outside, unresolved on the inside."), /*#__PURE__*/React.createElement(Card, {
    tone: "raised",
    title: "Who it is not for",
    padding: 36
  }, "Anyone looking for a peak experience, a quick fix, or a group retreat. The work is built for resolution, then integration.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 64px 120px',
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('residency')
  }, "Work with Sara in person"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Begin Phase One online")));
}
window.MethodScreen = MethodScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/method.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/press.jsx
try { (() => {
function PressScreen({
  go
}) {
  const {
    Button,
    TextLink,
    ImageFrame,
    Card,
    Tag
  } = window.SaraKolataDesignSystem_4545a5;
  const topics = [['Below insight', 'Why years of inner work can leave the pattern intact.'], ['The lineage in the body', 'How mother, father and ancestry show up in a life.'], ['From architect to guide', 'Precision, dietas, and the Sacred Valley.']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--indigo-deep)',
      color: 'var(--quarry)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '180px 64px 120px',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 80,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--inti-gold)'
    }
  }, "Speaking & press"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 96,
      lineHeight: 1.02
    }
  }, "Lasting change happens at the root."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'var(--quarry-deep)',
      maxWidth: '30em'
    }
  }, "Sara speaks from lived experience and years of dietas. She names the mechanism instead of selling the mystery."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold"
  }, "Book Sara to speak"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark"
  }, "Download the media kit"))), /*#__PURE__*/React.createElement(ImageFrame, {
    src: "../../assets/imagery/sara-portrait-suit.png",
    ratio: "4 / 5",
    position: "center 20%"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 64px 120px',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 44,
      lineHeight: 1
    }
  }, "Talk topics"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 20
    }
  }, topics.map(([t, b]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "dark",
    title: t,
    style: {
      border: '1px solid var(--border-on-dark)'
    }
  }, b)))));
}
window.PressScreen = PressScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/press.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/residency.jsx
try { (() => {
function ResidencyScreen({
  go
}) {
  const {
    Button,
    ImageFrame,
    Tag
  } = window.SaraKolataDesignSystem_4545a5;
  const criteria = [['Genuine readiness', 'You are done with understanding and ready for resolution.'], ['Full surrender', 'You can set aside the life you built for the length of the stay.'], ['Capacity without strain', 'You can invest in this without it becoming a new weight.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 680,
      background: 'var(--indigo-deep)'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: "../../assets/imagery/sara-valley-ceremony.jpg",
    ratio: "auto",
    radius: 0,
    position: "center 30%",
    style: {
      position: 'absolute',
      inset: 0,
      height: '100%',
      opacity: .55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 64,
      bottom: 80,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "gold"
  }, "In person"), /*#__PURE__*/React.createElement(Tag, {
    tone: "gold"
  }, "Sacred Valley, Peru")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 96,
      lineHeight: 1.02,
      color: 'var(--quarry)'
    }
  }, "The Peru Residency"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'var(--quarry-deep)',
      maxWidth: '30em'
    }
  }, "A private, in-person path with Sara in the Sacred Valley. One guest at a time."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 64px',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 64,
      lineHeight: 1.02
    }
  }, "Three non-negotiables"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, criteria.map(([t, b], i) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gap: 24,
      padding: '26px 0',
      borderTop: '1px solid var(--quarry-line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--cochineal)'
    }
  }, ['One', 'Two', 'Three'][i]), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      lineHeight: 1
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'var(--stone-700)'
    }
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--apu-sage)',
      padding: '96px 64px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      lineHeight: 1.05,
      color: 'var(--quarry)',
      maxWidth: 760
    }
  }, "Sara reads every application herself."), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    size: "lg",
    onClick: () => go('apply')
  }, "Apply for a residency")));
}
window.ResidencyScreen = ResidencyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/residency.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Lockup = __ds_scope.Lockup;

__ds_ns.Mark = __ds_scope.Mark;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.PhaseList = __ds_scope.PhaseList;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
