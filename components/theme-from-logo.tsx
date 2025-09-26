"use client"

import { useEffect } from "react"

function getLuminance(r: number, g: number, b: number) {
  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]
}

function clamp(n: number, min: number, max: number) { return Math.min(max, Math.max(min, n)) }

export function ThemeFromLogo() {
  useEffect(() => {
    const img = new Image()
    img.src = "/images/sahalogo-removebg-preview.png"
    img.crossOrigin = "anonymous"
    img.onload = () => {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      if (!ctx) return
      const w = (canvas.width = img.width)
      const h = (canvas.height = img.height)
      ctx.drawImage(img, 0, 0)
      const { data } = ctx.getImageData(0, 0, w, h)
      let r = 0, g = 0, b = 0, count = 0
      const step = Math.max(4, Math.floor((w * h) / 5000)) // sample ~5k pixels for speed
      for (let i = 0; i < data.length; i += 4 * step) {
        const alpha = data[i + 3]
        if (alpha < 128) continue // ignore transparent pixels
        r += data[i]
        g += data[i + 1]
        b += data[i + 2]
        count++
      }
      if (!count) return
      r = Math.round(r / count)
      g = Math.round(g / count)
      b = Math.round(b / count)

      // Create a rich, luxurious accent by nudging towards gold if the logo is grayscale/dark
      const isGrayscale = Math.abs(r - g) + Math.abs(g - b) + Math.abs(b - r) < 30
      let pr = r, pg = g, pb = b
      if (isGrayscale) {
        pr = 212; pg = 175; pb = 55 // tasteful gold accent
      }

      // Slightly increase saturation/brightness for stronger UI contrast
      const boost = 1.08
      pr = clamp(Math.round(pr * boost), 0, 255)
      pg = clamp(Math.round(pg * boost), 0, 255)
      pb = clamp(Math.round(pb * boost), 0, 255)

      const primary = `rgb(${pr}, ${pg}, ${pb})`
      const lum = getLuminance(pr, pg, pb)
      const primaryFg = lum > 0.5 ? "oklch(0.205 0 0)" : "oklch(0.985 0 0)" // dark text on light, light text on dark

      // Accent: a lighter tint of primary
      const accent = `rgba(${pr}, ${pg}, ${pb}, 0.85)`

      const targets: Element[] = [document.documentElement]
      const darkRoot = document.querySelector(".dark")
      if (darkRoot) targets.push(darkRoot)

      for (const el of targets) {
        ;(el as HTMLElement).style.setProperty("--primary", primary)
        ;(el as HTMLElement).style.setProperty("--primary-foreground", primaryFg)
        ;(el as HTMLElement).style.setProperty("--accent", accent)
        ;(el as HTMLElement).style.setProperty("--accent-foreground", primaryFg)
        // Keep the overall dark tone by ensuring background stays as-is; only accents change
      }
    }
  }, [])

  return null
}

export default ThemeFromLogo
