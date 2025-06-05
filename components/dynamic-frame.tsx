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
  {
    id: 2,
    video: "https://media-hosting.imagekit.io/9e487153d9a54ef4/Iceland.mp4?Expires=1841539098&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xhZsZnBOl26rS9YnGkWAUC4NDu6Yo8vXlnbbL4FQfMcZaLFpWKtoxfkIImECd63cXTeA-CGwZczf6Xu3tH2NH5jxp6hahFL~TT7X3vimxwezDScB4KqgaKC11dJoZ9fHZ0cQ4dpthLBuzlKmamxnvdim~Zx~QVqlaJSdnbYkfWfDZ8IceTkN7RLEn0kExepNhUtiKeSCmX9x-npiH-5uAoUTAI4Da9Wl96U6tZMxg4R2Hn0Dhu8iUzqcMDtFFwt72mYkBhqZTZcupXzIVXZbjSA8FwguMZ2kEBN~aLVlb7kKwBJYhHdM1rknc7QhHiH0ZSnS~RKCMGHxfxbTxJOyEQ__",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 3,
    video: "https://media-hosting.imagekit.io/eb6494d1d1cb4e2b/Morocco.mp4?Expires=1841539098&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kDJcYuztNpBFZCWYbDr5B~FhysQ3K5JdfBV725dcaNLfDUze9k0F6lE7kW0DyyQeP1Zpy8lg0bzmRpr7yo~mN58k2yD-nZ9rGzJqqbr06mutBKLsKfOsvlNH0BmMYjifFdD8Ia7lLToctqpDPChRBqJR2RneHp0AYTMdOQwHRTVdCsiWIolbHqwt7XK1bxI3xF-XcUmRMyLXFU0JenKIT~Sl5U7qTvNa9eV9plNbTHARcWfK7he9q276qxz78qaxsN6FAv~ELgtrUrO2k5LUrKWRKz4hWdFAgqNYxULT19vZub-TYe2pv5drLry6MiWuthaT2mZHeCuPRJyZ6rvLWg__",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 4,
    video: "https://media-hosting.imagekit.io/619d2cd6753d4dc6/New-Zealand.mp4?Expires=1841539098&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iZBZ7E50sua~r5gCAHuoOdCy~laItxd7fbaLeLFPf4dFt0mONgNGUKg4oMdqcB97aByFEoW9Dsy2EbsDoVSb5uswol7efqVVVFb~-fA93sk5FYmdCVjhnjgqCZtE3sCp8Cm0A9vRS6wpeQ0sN9evYaPRY3vyaPJpm9-aPp6xusXL~FMxgygtqOh09fMeSb4q1pmJ1VTatpzHpaXpTe2cM4ua1aQtURCQeKqqd0-MtB~EWQ19QWAPTFf4myIjMwt~r081N39oALfjTslCuPbQqs5dfWutg6Fm~BRpavcgEdZFpUiWMA8PbJhbDeNQWX73tA1nOFyVFafYU0JdD5-Evg__",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 5,
    video: "https://media-hosting.imagekit.io/8c8047bbebe64b5f/Bali.mp4?Expires=1841539012&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sCBkE4XOAih4-WjGvutLn4D0McOuMxgumM-UsGVAxWiYtD3zamhtNAYKjX75E3MoKRzndqTmfEcVVWqu71AMWiLkGQTyTIycgm7gBh6oMgY4KCAM8TATF0t6xeUT89sumgDpjwb9L3c9YDUP9liQSBPnjAX8XjfobNYh1vcT-wBleNbmchyQ86TONxDBuZH21njC~WORIBqlJVyeZIAs7IGX0NQR7qPJfTWPA2Ir9pQooyUkiNbnThhchvO2ugWwpjDHlYXzfAEtyFvDIYgRFa4gRZMEaVmQJeyCbi4Xo0zvFNe6eKzt3bNHqP1fYugFB26PkH-hThmPRGcXTFLPCw__",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 6,
    video: "https://media-hosting.imagekit.io/2ebca4464ea04f00/Urban.mp4?Expires=1841539098&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rTHVR92K4nBlmohA50dA18xi8BfJHGbjnUvstQMMgnVsgCGVFmQOl~GOgj1aHYy4or7tyRFSd5KyKDtCwC0Ps~1MLcgFBOq-qeB21~R50LWF-L4h06CD-Pp36dn6SDArlhyl769cdpyR4NUbKXX2jlx0uf9LOAuCziutkHIo2vkUeuTHBVhIkQY97FoxeevOdyVPkKdF3m577zIQHg70tIKx85XZemzwwKXcPtSuOfM0YKNQ9FL7FcSk8G6IUl458zjvv7pB517xm8NywKaxwYI-zPQb8usRah55cL6Ug7CTf5L9IAT3iqbwN4yMESC-TaaJFycWYF5nL9xHdfmuZg__",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 7,
    video: "https://media-hosting.imagekit.io/eb6494d1d1cb4e2b/Morocco.mp4?Expires=1841539098&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kDJcYuztNpBFZCWYbDr5B~FhysQ3K5JdfBV725dcaNLfDUze9k0F6lE7kW0DyyQeP1Zpy8lg0bzmRpr7yo~mN58k2yD-nZ9rGzJqqbr06mutBKLsKfOsvlNH0BmMYjifFdD8Ia7lLToctqpDPChRBqJR2RneHp0AYTMdOQwHRTVdCsiWIolbHqwt7XK1bxI3xF-XcUmRMyLXFU0JenKIT~Sl5U7qTvNa9eV9plNbTHARcWfK7he9q276qxz78qaxsN6FAv~ELgtrUrO2k5LUrKWRKz4hWdFAgqNYxULT19vZub-TYe2pv5drLry6MiWuthaT2mZHeCuPRJyZ6rvLWg__",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 8,
    video: "https://media-hosting.imagekit.io/9e487153d9a54ef4/Iceland.mp4?Expires=1841539098&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xhZsZnBOl26rS9YnGkWAUC4NDu6Yo8vXlnbbL4FQfMcZaLFpWKtoxfkIImECd63cXTeA-CGwZczf6Xu3tH2NH5jxp6hahFL~TT7X3vimxwezDScB4KqgaKC11dJoZ9fHZ0cQ4dpthLBuzlKmamxnvdim~Zx~QVqlaJSdnbYkfWfDZ8IceTkN7RLEn0kExepNhUtiKeSCmX9x-npiH-5uAoUTAI4Da9Wl96U6tZMxg4R2Hn0Dhu8iUzqcMDtFFwt72mYkBhqZTZcupXzIVXZbjSA8FwguMZ2kEBN~aLVlb7kKwBJYhHdM1rknc7QhHiH0ZSnS~RKCMGHxfxbTxJOyEQ__",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 9,
    video: "https://media-hosting.imagekit.io/3275dd59f8614064/Tokyo.mp4?Expires=1841539098&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qPhj3RHzDCW~ErfBHttazE3TBLQJMSRt2sszvSgG3RqruFgtmlXfTlelDjLFr4pcrdFbcu9Dc4bJOQN9YBT25r9PolODKO-YUC7JIyrOBYrq5EADb4HT63d6UK86ailaT0bL0acSe8mhaAoXLl4U9gdxPm6ih5mNbc6ckrDAYlx7FEVz-q270XCkukES5wmI4jAe5njqCh2GB8OP-i-QHQ93R9OpluzIJaqMthnkUw7DIjulvpu-CHtDxzFFyy0ty-vck69Lyc3xthppIpK41HG0CZu7TdRowzJNJm1x2SoLifk5QCLceWJigN7A1V7RgputDf4TzNrTRFdTBTLjIg__",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
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