import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants';

// No React, quando vamos receber um conteúdo, temos a propriedade 'children'
// Normalmente, a propriedade 'children' é do tipo ReactNode
// ReactNode permite que passe qualquer coisa que eu poderia escrever dentro de um HTML (text, icones, outros componentes)
// extends ComponentProps<'button'>:: Permite que nosso Button receba todas propriedades de um 'button' do HTML normal
// extends VariantProps<typeof buttonVariants>:: Permite que eu passe como parametro qualquer valor de 'variant'
// RestOperator:: Permite pegar todas props que meu Button recebe, e repassar para o 'button'

const buttonVariants = tv({
  base: 'rounded-lg px-5 font-medium justify-center flex items-center gap-2',

  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800 text-zinc-200  hover:bg-zinc-700'
    },
    size: {
      default: 'py-2',
      full: 'w-full h-11'
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default'
  }
})
interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  children: ReactNode
}
export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  )
}