import React from "react";

export const AuthContext = React.createContext({})

export const AuthProvider = ({ children }) => {
    
  const [users, setUsers] = React.useState(null)
  const [loading, setLoading] = React.useState(true)


  React.useEffect(() => {
    const Listen = user => {
      if (user) {
        setUsers({
          username: user.username,
          email: user.email,
          photo: user.avatarka,
        })
        setLoading(false)
      } else {
        setLoading(false)
      }
    }
    return () => Listen()
  }, [])


  const value = React.useMemo(() => ({
    users, 
    loading
  }), [users, loading] )

  return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
}