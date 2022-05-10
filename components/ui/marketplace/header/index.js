import { useAccount } from "components/hooks/web3"
import { Breadcrumbs } from "components/ui/common"
import { Walletbar } from "components/ui/web3"
import EthRates from "components/ui/web3/ethRates"


const LINKS = [{
  href: "/marketplace",
  value: "Buy"
}, {
  href: "/marketplace/courses/owned",
  value: "My Courses"
}, {
  href: "/marketplace/courses/managed",
  value: "Manage Courses",
  requireAdmin: true
}]

export default function Header() {
  const { account } = useAccount()
  return (
    <>
      <div>
        <Walletbar/>
      </div>
      <EthRates />
      <div className="flex flex-row-reverse ">
        <Breadcrumbs
          items={LINKS}
          isAdmin={account.isAdmin}
        />
      </div>
    </>
  )
}
