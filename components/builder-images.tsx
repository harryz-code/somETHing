import Image from "next/image"

export function BuilderImages() {
  const builders = [
    {
      name: "patrick",
      role: "cyfrin updraft",
      image: "/images/builders/patrick collins.png",
      alt: "Patrick"
    },
    {
      name: "austin",
      role: "speedrun ethereum",
      image: "/images/builders/speedrunethereum.png", 
      alt: "Austin"
    },
    {
      name: "kyle",
      role: "cryptozombies",
      image: "/images/builders/cryptozombies.png",
      alt: "Kyle"
    },
    {
      name: "gulcan",
      role: "risein",
      image: "/images/builders/risein.png",
      alt: "Gulcan"
    },
    {
      name: "irina",
      role: "buidlbox",
      image: "/images/builders/buidlbox.png",
      alt: "Irina"
    },
    {
      name: "kacie",
      role: "learnweb3",
      image: "/images/builders/learnweb3.png",
      alt: "Kacie"
    },
    {
      name: "wu xiao",
      role: "chainide",
      image: "/images/builders/eth shanghai.png",
      alt: "Wu Xiao"
    },
    {
      name: "enoch",
      role: "eth nigeria",
      image: "/images/builders/eth nigeria.png",
      alt: "Enoch"
    },
    {
      name: "tippi",
      role: "eth chicago",
      image: "/images/builders/eth chicago.png",
      alt: "Tippi"
    },
    {
      name: "maggie",
      role: "shefi",
      image: "/images/builders/shefi.png",
      alt: "Maggie"
    },
    {
      name: "nader",
      role: "developer dao",
      image: "/images/builders/developer dao.png",
      alt: "Nader"
    },
    {
      name: "bianca",
      role: "dev rel uni",
      image: "/images/builders/dev rel uni.png",
      alt: "Bianca"
    },
    {
      name: "harry",
      role: "hackquest",
      image: "/images/builders/hackquest.png",
      alt: "Harry"
    },
    {
      name: "revo",
      role: "eth jarkata",
      image: "/images/builders/eth jarkata.png",
      alt: "Revo"
    },
    {
      name: "farza",
      role: "buildspace",
      image: "/images/builders/buildspace.png",
      alt: "Farza"
    },
    {
      name: "0xaa",
      role: "wtf academy",
      image: "/images/builders/wtf academy.png",
      alt: "0xAA"
    },
    {
      name: "francesco",
      role: "metamask",
      image: "/images/builders/francesco.png",
      alt: "Francesco"
    },
    {
      name: "tracy",
      role: "her dao",
      image: "/images/builders/herdao.png",
      alt: "Tracy"
    },
    {
      name: "caio",
      role: "nearx",
      image: "/images/builders/caio.png",
      alt: "Caio"
    },
    {
      name: "agwn",
      role: "ludium",
      image: "/images/builders/ludium.png",
      alt: "AGWN"
    },
    {
      name: "qiuqiu",
      role: "openbuild",
      image: "/images/builders/openbuild.png",
      alt: "QiuQiu"
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="w-full px-4">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-4 text-balance tracking-tight">
            example episodes of ethereum <span className="text-primary">educators</span> to feature
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {builders.map((builder, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={builder.image}
                  alt={builder.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <h4 className="font-bold text-lg mb-3">{builder.name}</h4>
              <p className="text-sm text-muted-foreground">{builder.role}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-lg text-muted-foreground font-medium">...and many more</p>
        </div>
      </div>
    </section>
  )
}
