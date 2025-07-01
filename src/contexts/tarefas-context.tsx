import { createContext, useContext, useState } from 'react'

interface TarefasContextType {
  reload: () => void
  reloadFlag: number
}

const TarefasContext = createContext<TarefasContextType>({} as any)

export function TarefasProvider({ children }: { children: React.ReactNode }) {
  const [reloadFlag, setReloadFlag] = useState(0)


  function reload() {
    setReloadFlag(flag => flag + 1)
  }

  return (
    <TarefasContext.Provider value={{ reload, reloadFlag }}>
      {children}
    </TarefasContext.Provider>
  )
}

export function useTarefasContext() {
  return useContext(TarefasContext)
}
