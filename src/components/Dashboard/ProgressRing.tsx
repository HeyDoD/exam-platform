interface Props {
  percentage: number
  color: string
  label: string
  subtitle: string
  size?: number
}

export default function ProgressRing({ percentage, color, label, subtitle, size = 80 }: Props) {
  const radius = (size - 10) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (Math.min(percentage, 1) * circumference)

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#373737" strokeWidth={6} />
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none"
            stroke={color}
            strokeWidth={6}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 0.6s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-[#e6e6e6]">
            {Math.round(percentage * 100)}%
          </span>
        </div>
      </div>
      <div className="text-center">
        <div className="text-xs font-medium text-[#e6e6e6]">{label}</div>
        <div className="text-[10px] text-[#9b9b9b] mt-0.5">{subtitle}</div>
      </div>
    </div>
  )
}
