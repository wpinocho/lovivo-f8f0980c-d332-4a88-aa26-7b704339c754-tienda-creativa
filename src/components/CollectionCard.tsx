import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0">
      <CardContent className="p-0">
        <div 
          className="aspect-[4/3] overflow-hidden relative"
          onClick={() => onViewProducts(collection.id)}
        >
          {collection.image ? (
            <>
              <img 
                src={collection.image} 
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
              Sin imagen
            </div>
          )}
          
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-black text-2xl mb-2 line-clamp-2">
                {collection.name.toUpperCase()}
              </h3>
              
              {collection.description && (
                <p className="text-white/90 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {collection.description}
                </p>
              )}
              
              <Button 
                className="bg-white text-black hover:bg-white/90 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={(e) => {
                  e.stopPropagation()
                  onViewProducts(collection.id)
                }}
              >
                VER PRODUCTOS
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}