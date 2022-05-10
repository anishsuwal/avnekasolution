

import { useWeb3 } from "components/providers"
import { ActiveLink, Button } from "components/ui/common"
import { useAccount } from "components/hooks/web3"
import { useRouter } from "next/router"

export default function Navbar() {
  const { connect, isLoading, requireInstall } = useWeb3()
  const { account } = useAccount()
  const { pathname } = useRouter()

  return (
    <section >
      <div className="relative pt-2 pb-2 px-4 sm:px-6 lg:px-8 bg  shadow-md rounded-lg">
        <nav className="relative" aria-label="Global">
          <div className="flex flex-col xs:flex-row justify-between items-center">
            <div>
              <ActiveLink href="/" >
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </ActiveLink>
              <ActiveLink href="/marketplace" >
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Marketplace
                </a>
              </ActiveLink>
              
            </div>
            <div className="text-center">
              
              {isLoading ?
                <Button
                  disabled={true}
                  onClick={connect}>
                  Loading...
                </Button> :
                account.data ?
                  <Button
                    hoverable={false}
                    className="cursor-default">
                    Hi there {account.isAdmin && "Admin"}
                  </Button> :
                  requireInstall ?
                    <Button
                      onClick={() => window.open("https://metamask.io/download.html", "_blank")}>
                      Install Metamask
                    </Button> :
                    <Button
                      onClick={connect}>
                      Connect
                    </Button>
              }
            </div>
          </div>
        </nav>
      </div>
      {account.data &&
        !pathname.includes("/marketplace") &&
        <div className="flex justify-end  pt-2">
          <div className="text-white bg-gradient-to-r from-cyan-500 to-sky-300 rounded-md shadow-md p-3">
            {account.data}
          </div>
        </div>
      }
    </section>
  )
}
