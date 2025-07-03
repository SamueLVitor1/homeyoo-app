import { createContext, useContext, useState } from 'react'

interface TarefasContextType {
  fnreloadCasa: () => void
  reloadCasa: number,
  tarefasReload: number,
  fnReloadTarefas: () => void
}

const TarefasContext = createContext<TarefasContextType>({} as any)

export function TarefasProvider({ children }: { children: React.ReactNode }) {
  const [reloadCasa, setReloadCasa] = useState(0)
  const [tarefasReload, setTarefasReload] = useState(0)

  function fnreloadCasa() {
    setReloadCasa(flag => flag + 1)
  }

  function fnReloadTarefas() {
    setTarefasReload(flag => flag + 1)
  }

  return (
    <TarefasContext.Provider value={{ fnreloadCasa, reloadCasa, fnReloadTarefas, tarefasReload }}>
      {children}
    </TarefasContext.Provider>
  )
}

export function useTarefasContext() {
  return useContext(TarefasContext)
}
