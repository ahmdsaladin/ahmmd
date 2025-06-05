export default function TagList({
  tags,
  variant = "dark",
}: {
  tags: string[]
  variant?: "dark" | "light"
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`px-2 py-1 rounded-full text-xs ${
            variant === "light"
              ? "bg-white/20 text-white"
              : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
