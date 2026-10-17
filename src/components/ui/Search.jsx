import { Search as SearchIcon } from 'lucide-react'
import Input from './Input'

export default function Search({ ref, className = '', ...props }) {
  return (
    <div className={`relative ${className}`}>
      <SearchIcon
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
        aria-hidden="true"
      />
      <Input ref={ref} className="pr-14 pl-11" {...props} />
      <kbd className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-lg bg-ink/10 px-2 py-0.5 text-[10px] font-semibold text-faint sm:block">
        /
      </kbd>
    </div>
  )
}
