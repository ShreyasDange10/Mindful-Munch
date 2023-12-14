import '@styles/globals.css';

export const metadata = {
  title: "Mindful Munch",
  description: ""
}

const RootLayout = () => {
  return (
    <html lang = "en">
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
 