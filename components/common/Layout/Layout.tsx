const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container md:max-w-sm md:max-h-150 overflow-y-auto mx-auto bg-black md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
      <h1>Hey, I will be around later ;)</h1>
      {children}
    </main>
  )
}

export default Layout
