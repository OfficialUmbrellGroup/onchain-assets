import { useEffect, useRef, useState } from 'react'

const text =
  'Capital markets still settle in days, close on weekends and stop at borders. We are rebuilding them onchain: every asset programmable, every transfer final in seconds, every market open around the clock.'

const words = text.split(' ')

export default function Statement() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame
    const update = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = (vh * 0.85 - rect.top) / (rect.height + vh * 0.35)
      setProgress(Math.min(1, Math.max(0, p)))
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const lit = progress * words.length

  return (
    <section className="statement" ref={ref}>
      <div className="container">
        <p className="label">Our thesis</p>
        <p className="statement-text">
          {words.map((w, i) => (
            <span key={i} style={{ opacity: Math.min(1, Math.max(0.16, lit - i + 0.16)) }}>
              {w}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
