import Image from "next/image"

interface SectionImageProps {
  src?: string
  alt?: string
  caption?: string
  className?: string
  layout?: "single" | "collage"
  images?: Array<{
    src: string
    alt: string
    caption?: string
  }>
}

export function SectionImage({ 
  src, 
  alt, 
  caption, 
  className = "",
  layout = "single",
  images
}: SectionImageProps) {
  if (layout === "collage" && images) {
    return (
      <div className={`py-12 md:py-16 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {caption && (
              <div className="text-center mb-8">
                <p className="text-xl text-muted-foreground font-mono font-medium">
                  {caption}
                </p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      priority={index === 0}
                    />
                  </div>
                  {image.caption && (
                    <div className="mt-3 text-center">
                      <p className="text-sm text-muted-foreground font-medium">
                        {image.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!src || !alt) {
    return null
  }

  return (
    <div className={`py-8 md:py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {caption && (
            <div className="text-center mb-6">
              <p className="text-lg text-muted-foreground font-mono">
                {caption}
              </p>
            </div>
          )}
          <div className="relative">
            <Image
              src={src}
              alt={alt}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
