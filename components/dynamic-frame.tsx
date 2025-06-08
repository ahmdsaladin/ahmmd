"use client"

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout"

const dynamicFrames = [
  {
    id: 1,
    video: "https://media-hosting.imagekit.io/3275dd59f8614064/Tokyo.mp4?Expires=1841539098&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qPhj3RHzDCW~ErfBHttazE3TBLQJMSRt2sszvSgG3RqruFgtmlXfTlelDjLFr4pcrdFbcu9Dc4bJOQN9YBT25r9PolODKO-YUC7JIyrOBYrq5EADb4HT63d6UK86ailaT0bL0acSe8mhaAoXLl4U9gdxPm6ih5mNbc6ckrDAYlx7FEVz-q270XCkukES5wmI4jAe5njqCh2GB8OP-i-QHQ93R9OpluzIJaqMthnkUw7DIjulvpu-CHtDxzFFyy0ty-vck69Lyc3xthppIpK41HG0CZu7TdRowzJNJm1x2SoLifk5QCLceWJigN7A1V7RgputDf4TzNrTRFdTBTLjIg__",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
]

export function DynamicFrame() {
  return (
    <div className="h-screen w-screen bg-zinc-900 mb-32">
      <DynamicFrameLayout 
        frames={dynamicFrames} 
        className="w-full h-full" 
        hoverSize={5}
        gapSize={20}
      />
    </div>
  )
}