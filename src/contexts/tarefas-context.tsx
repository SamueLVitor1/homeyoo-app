import { createContext, useContext, useState } from 'react'

interface TarefasContextType {
  reload: () => void
  reloadFlag: number,
  tarefasReload: number,
  fnReloadTarefas: () => void
}

const TarefasContext = createContext<TarefasContextType>({} as any)

export function TarefasProvider({ children }: { children: React.ReactNode }) {
  const [reloadFlag, setReloadFlag] = useState(0)
  const [tarefasReload, setTarefasReload] = useState(0)

  function reload() {
    setReloadFlag(flag => flag + 1)
  }

  function fnReloadTarefas() {
    setTarefasReload(flag => flag + 1)
  }

  return (
    <TarefasContext.Provider value={{ reload, reloadFlag, fnReloadTarefas, tarefasReload }}>
      {children}
    </TarefasContext.Provider>
  )
}

export function useTarefasContext() {
  return useContext(TarefasContext)
}
