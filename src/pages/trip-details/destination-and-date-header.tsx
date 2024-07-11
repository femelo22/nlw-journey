import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function DestinationAndDateHeader() {
  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">Florianópolis, Brasil</span>
      </div>


      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">17 a 23 de agosto</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        {/* Quando precisamos componentizar algo como o botão, podemos passar qualquer coisa ao componente filho.
            O componte que receberá, terá uma propriedade 'children' em sua interface, que permite a passagem de qualquer informação (texto, icones..)*/}
        {/* Quando precisamos de estilos diferentes no mesmo botão, chamamos isso de 'variants' no CSS.
        Podemos resolver isso usando uma lib: 'npm i tailwind-variants' */}
        <Button variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  )
}