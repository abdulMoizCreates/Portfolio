export default function Slider({ value, min = 0, max = 100, onChange, className = '', ...props }) {
  const pct = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100))
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      className={`range ${className}`}
      style={{ background: `linear-gradient(90deg, var(--color-teal) ${pct}%, rgb(255 255 255 / 0.08) ${pct}%)` }}
      {...props}
    />
  )
}
