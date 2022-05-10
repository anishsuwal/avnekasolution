
import { Web3Provider } from "components/providers"
import { Navbar, Footer } from "components/ui/common"

export default function BaseLayout({children}) {

    return (

        <Web3Provider>
            <div className="max-w-7xl mx-auto px-4 bg-gradient-to-r from-cyan-100 to-sky-100">
                <Navbar/>
                <div className="fit pt-5">
                    {children}
                </div>
                <Footer/>
            </div>            
        </Web3Provider>
    )
}