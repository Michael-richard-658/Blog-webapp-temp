import Header from "./homelayout/header";
import './homelayout/header.css';
 
export default function Layout({ children }: { children: React.ReactNode }) {
    
      return (
        <html>
          <body>
            <Header />
            {children}
          </body>
        </html>
      )
    }