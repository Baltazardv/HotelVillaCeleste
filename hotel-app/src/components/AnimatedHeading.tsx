import { useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedHeading({ text, className = '', delay = 200 }: AnimatedHeadingProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  const lines = text.split('\n')
  const charDelay = 28
  let globalChar = 0

  return (
    <h1 className={className} style={{ letterSpacing: '-0.03em' }}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} style={{ display: 'block' }}>
          {line.split(' ').map((word, wordIdx) => {
            // Each word is kept together (inline-block) so it never breaks mid-word
            const wordSpan = (
              <span key={wordIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                {word.split('').map((char, ci) => {
                  const ms = delay + globalChar * charDelay
                  globalChar++
                  return (
                    <span
                      key={ci}
                      style={{
                        display: 'inline-block',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(-14px)',
                        transition: `opacity 450ms ease ${ms}ms, transform 450ms ease ${ms}ms`,
                      }}
                    >
                      {char}
                    </span>
                  )
                })}
              </span>
            )
            // account for the space delay between words
            globalChar++
            return (
              <span key={`w${wordIdx}`}>
                {wordSpan}
                {wordIdx < line.split(' ').length - 1 ? ' ' : ''}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
