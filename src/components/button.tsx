import { ComponentProps, ReactNode } from "react";

// No React, quando vamos receber um conteúdo, temos a propriedade 'children'
// Normalmente, a propriedade 'children' é do tipo ReactNode
// ReactNode permite que passe qualquer coisa que eu poderia escrever dentro de um HTML (text, icones, outros componentes)
// extends ComponentProps<'button'>:: Permite que nosso Button receba todas propriedades de um 'button' do HTML normal
// RestOperator:: Permite pegar todas props que meu Button recebe, e repassar para o 'button'
interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}
export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
      {children}
    </button>
  )
}