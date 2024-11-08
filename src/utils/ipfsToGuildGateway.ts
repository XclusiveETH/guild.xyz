import { env } from "env"
const ipfsToGuildGateway = (url: string) =>
  url?.replace("ipfs://", env.NEXT_PUBLIC_IPFS_GATEWAY)

export default ipfsToGuildGateway
