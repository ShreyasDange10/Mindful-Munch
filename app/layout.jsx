import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: "Promptopia",
  description: "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts."
}

const RootLayout = ( {children} ) => {
  return (
    <html lang = "en">
      <body>
      <Provider>  
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav/>
          {children}
        </main>
      </Provider>  
      </body>
    </html>
  )
}

export default RootLayout
 