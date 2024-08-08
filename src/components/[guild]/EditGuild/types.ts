import { GuildContact, Schemas } from "@guildxyz/types"
import { EventSourcesKey, GuildTags } from "types"
import { Chain } from "wagmiConfig/chains"
import { FeatureFlag } from "./components/FeatureFlags"

export type EditGuildForm = Schemas["GuildUpdatePayload"] & {
  admins: { address: string }[]
  contacts: (Omit<GuildContact, "id" | "guildId"> & { id?: GuildContact["id"] })[]
  guildPin?: {
    chain: Chain | "FUEL"
    isActive: boolean
  }
  // We can delete an event source by passing "null" to it, that's why we need this custom type here
  eventSources?: Partial<Record<EventSourcesKey, string | null>>
  // Superadmin-only fields
  featureFlags?: FeatureFlag[]
  tags?: GuildTags[]
}
