const Pallet = {
  white: "#ffffff",
  black: "#000000",
  gray: "#999999",
  orange: "ff7400",
}
const Semantics = {
  defaultText: Pallet.black,
  defaultBg: Pallet.gray,
  corporate: Pallet.orange,
}
export const Color = Object.assign(Pallet, Semantics)

const siteWidth = 1200
export const Variables = {
  siteWidth: `${siteWidth}px`,
  breakPoint: {
    sp: "max-width: 767px",
    tablet: `max-width: ${siteWidth - 1}px`,
    pc: `min-width: ${siteWidth}px`,
  },
}
