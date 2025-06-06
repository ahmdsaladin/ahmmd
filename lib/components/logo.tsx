import { Camera } from "lucide-react"

export default function Logo({ size = 24 }: { size?: number }) {
  return (
    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20">
      <Camera size={size} className="text-primary" />
    </div>
  )
}
