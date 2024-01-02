/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.60.0
  Forc version: 0.44.0
  Fuel-Core version: 0.20.5
*/

import type {
  AbstractAddress,
  Account,
  BytesLike,
  DeployContractOptions,
  Provider,
} from "fuels"
import { Contract, ContractFactory, Interface } from "fuels"
import type {
  GuildPinContractAbi,
  GuildPinContractAbiInterface,
} from "./GuildPinContractAbi"

const _abi = {
  types: [
    {
      typeId: 0,
      type: "()",
      components: [],
      typeParameters: null,
    },
    {
      typeId: 1,
      type: "[_; 2]",
      components: [
        {
          name: "__array_element",
          type: 2,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 2,
      type: "b256",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 3,
      type: "enum AccessError",
      components: [
        {
          name: "NotOwner",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 4,
      type: "enum GuildAction",
      components: [
        {
          name: "Joined",
          type: 0,
          typeArguments: null,
        },
        {
          name: "Owner",
          type: 0,
          typeArguments: null,
        },
        {
          name: "Admin",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 5,
      type: "enum Identity",
      components: [
        {
          name: "Address",
          type: 15,
          typeArguments: null,
        },
        {
          name: "ContractId",
          type: 20,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 6,
      type: "enum InitError",
      components: [
        {
          name: "AlreadyInitialized",
          type: 0,
          typeArguments: null,
        },
        {
          name: "NotInitialized",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 7,
      type: "enum Option",
      components: [
        {
          name: "None",
          type: 0,
          typeArguments: null,
        },
        {
          name: "Some",
          type: 10,
          typeArguments: null,
        },
      ],
      typeParameters: [10],
    },
    {
      typeId: 8,
      type: "enum State",
      components: [
        {
          name: "Uninitialized",
          type: 0,
          typeArguments: null,
        },
        {
          name: "Initialized",
          type: 5,
          typeArguments: null,
        },
        {
          name: "Revoked",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 9,
      type: "enum TokenError",
      components: [
        {
          name: "AlreadyClaimed",
          type: 0,
          typeArguments: null,
        },
        {
          name: "AlreadyBurned",
          type: 0,
          typeArguments: null,
        },
        {
          name: "ExpiredSignature",
          type: 0,
          typeArguments: null,
        },
        {
          name: "InvalidSignature",
          type: 0,
          typeArguments: null,
        },
        {
          name: "InvalidAssetId",
          type: 0,
          typeArguments: null,
        },
        {
          name: "InvalidContractId",
          type: 0,
          typeArguments: null,
        },
        {
          name: "InsufficientAmount",
          type: 0,
          typeArguments: null,
        },
        {
          name: "PinIdDoesNotExist",
          type: 0,
          typeArguments: null,
        },
        {
          name: "NotPinOwner",
          type: 0,
          typeArguments: null,
        },
        {
          name: "CouldNotRemoveEntry",
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 10,
      type: "generic T",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 11,
      type: "raw untyped ptr",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 12,
      type: "str[5]",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 13,
      type: "str[64]",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 14,
      type: "str[9]",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 15,
      type: "struct Address",
      components: [
        {
          name: "value",
          type: 2,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 16,
      type: "struct AssetId",
      components: [
        {
          name: "value",
          type: 2,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 17,
      type: "struct B512",
      components: [
        {
          name: "bytes",
          type: 1,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 18,
      type: "struct Bytes",
      components: [
        {
          name: "buf",
          type: 27,
          typeArguments: null,
        },
        {
          name: "len",
          type: 31,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 19,
      type: "struct ClaimParameters",
      components: [
        {
          name: "recipient",
          type: 15,
          typeArguments: null,
        },
        {
          name: "action",
          type: 4,
          typeArguments: null,
        },
        {
          name: "user_id",
          type: 31,
          typeArguments: null,
        },
        {
          name: "guild_id",
          type: 31,
          typeArguments: null,
        },
        {
          name: "guild_name",
          type: 13,
          typeArguments: null,
        },
        {
          name: "created_at",
          type: 31,
          typeArguments: null,
        },
        {
          name: "signed_at",
          type: 31,
          typeArguments: null,
        },
        {
          name: "chain_id",
          type: 31,
          typeArguments: null,
        },
        {
          name: "cid",
          type: 13,
          typeArguments: null,
        },
        {
          name: "admin_treasury",
          type: 5,
          typeArguments: null,
        },
        {
          name: "admin_fee",
          type: 31,
          typeArguments: null,
        },
        {
          name: "contract_id",
          type: 20,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 20,
      type: "struct ContractId",
      components: [
        {
          name: "value",
          type: 2,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 21,
      type: "struct ContractInitialized",
      components: [
        {
          name: "owner",
          type: 5,
          typeArguments: null,
        },
        {
          name: "signer",
          type: 22,
          typeArguments: null,
        },
        {
          name: "treasury",
          type: 5,
          typeArguments: null,
        },
        {
          name: "fee",
          type: 31,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 22,
      type: "struct EvmAddress",
      components: [
        {
          name: "value",
          type: 2,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 23,
      type: "struct FeeChanged",
      components: [
        {
          name: "old",
          type: 31,
          typeArguments: null,
        },
        {
          name: "new",
          type: 31,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 24,
      type: "struct OwnerChanged",
      components: [
        {
          name: "old",
          type: 5,
          typeArguments: null,
        },
        {
          name: "new",
          type: 5,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 25,
      type: "struct PinBurned",
      components: [
        {
          name: "pin_owner",
          type: 15,
          typeArguments: null,
        },
        {
          name: "pin_id",
          type: 31,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 26,
      type: "struct PinMinted",
      components: [
        {
          name: "recipient",
          type: 15,
          typeArguments: null,
        },
        {
          name: "pin_id",
          type: 31,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 27,
      type: "struct RawBytes",
      components: [
        {
          name: "ptr",
          type: 11,
          typeArguments: null,
        },
        {
          name: "cap",
          type: 31,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 28,
      type: "struct SignerChanged",
      components: [
        {
          name: "old",
          type: 22,
          typeArguments: null,
        },
        {
          name: "new",
          type: 22,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 29,
      type: "struct String",
      components: [
        {
          name: "bytes",
          type: 18,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 30,
      type: "struct TreasuryChanged",
      components: [
        {
          name: "old",
          type: 5,
          typeArguments: null,
        },
        {
          name: "new",
          type: 5,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 31,
      type: "u64",
      components: null,
      typeParameters: null,
    },
    {
      typeId: 32,
      type: "u8",
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [],
      name: "initialize",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "fee",
          type: 31,
          typeArguments: null,
        },
      ],
      name: "set_fee",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "owner",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "set_owner",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "signer",
          type: 22,
          typeArguments: null,
        },
      ],
      name: "set_signer",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "treasury",
          type: 5,
          typeArguments: null,
        },
      ],
      name: "set_treasury",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [],
      name: "fee",
      output: {
        name: "",
        type: 31,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [],
      name: "signer",
      output: {
        name: "",
        type: 2,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [],
      name: "treasury",
      output: {
        name: "",
        type: 5,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "pin_id",
          type: 31,
          typeArguments: null,
        },
      ],
      name: "burn",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "params",
          type: 19,
          typeArguments: null,
        },
        {
          name: "signature",
          type: 17,
          typeArguments: null,
        },
      ],
      name: "claim",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: "payable",
          arguments: [],
        },
        {
          name: "storage",
          arguments: ["read", "write"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "id",
          type: 15,
          typeArguments: null,
        },
      ],
      name: "balance_of",
      output: {
        name: "",
        type: 31,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "user",
          type: 15,
          typeArguments: null,
        },
        {
          name: "guild_id",
          type: 31,
          typeArguments: null,
        },
        {
          name: "action",
          type: 4,
          typeArguments: null,
        },
      ],
      name: "pin_id_by_address",
      output: {
        name: "",
        type: 7,
        typeArguments: [
          {
            name: "",
            type: 31,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "user_id",
          type: 31,
          typeArguments: null,
        },
        {
          name: "guild_id",
          type: 31,
          typeArguments: null,
        },
        {
          name: "action",
          type: 4,
          typeArguments: null,
        },
      ],
      name: "pin_id_by_user_id",
      output: {
        name: "",
        type: 7,
        typeArguments: [
          {
            name: "",
            type: 31,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "pin_id",
          type: 31,
          typeArguments: null,
        },
      ],
      name: "pin_owner",
      output: {
        name: "",
        type: 7,
        typeArguments: [
          {
            name: "",
            type: 15,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [],
      name: "total_minted",
      output: {
        name: "",
        type: 31,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "guild_id",
          type: 31,
          typeArguments: null,
        },
      ],
      name: "total_minted_per_guild",
      output: {
        name: "",
        type: 31,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [],
      name: "owner",
      output: {
        name: "",
        type: 8,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "asset",
          type: 16,
          typeArguments: null,
        },
      ],
      name: "decimals",
      output: {
        name: "",
        type: 7,
        typeArguments: [
          {
            name: "",
            type: 32,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "asset",
          type: 16,
          typeArguments: null,
        },
      ],
      name: "name",
      output: {
        name: "",
        type: 7,
        typeArguments: [
          {
            name: "",
            type: 29,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "asset",
          type: 16,
          typeArguments: null,
        },
      ],
      name: "symbol",
      output: {
        name: "",
        type: 7,
        typeArguments: [
          {
            name: "",
            type: 29,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [],
      name: "total_assets",
      output: {
        name: "",
        type: 31,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "asset",
          type: 16,
          typeArguments: null,
        },
      ],
      name: "total_supply",
      output: {
        name: "",
        type: 7,
        typeArguments: [
          {
            name: "",
            type: 31,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "pin_id",
          type: 31,
          typeArguments: null,
        },
      ],
      name: "encoded_metadata",
      output: {
        name: "",
        type: 29,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
    {
      inputs: [
        {
          name: "pin_id",
          type: 31,
          typeArguments: null,
        },
      ],
      name: "metadata",
      output: {
        name: "",
        type: 29,
        typeArguments: null,
      },
      attributes: [
        {
          name: "storage",
          arguments: ["read"],
        },
      ],
    },
  ],
  loggedTypes: [
    {
      logId: 0,
      loggedType: {
        name: "",
        type: 6,
        typeArguments: [],
      },
    },
    {
      logId: 1,
      loggedType: {
        name: "",
        type: 21,
        typeArguments: [],
      },
    },
    {
      logId: 2,
      loggedType: {
        name: "",
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 3,
      loggedType: {
        name: "",
        type: 23,
        typeArguments: [],
      },
    },
    {
      logId: 4,
      loggedType: {
        name: "",
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 5,
      loggedType: {
        name: "",
        type: 24,
        typeArguments: [],
      },
    },
    {
      logId: 6,
      loggedType: {
        name: "",
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 7,
      loggedType: {
        name: "",
        type: 28,
        typeArguments: [],
      },
    },
    {
      logId: 8,
      loggedType: {
        name: "",
        type: 3,
        typeArguments: [],
      },
    },
    {
      logId: 9,
      loggedType: {
        name: "",
        type: 30,
        typeArguments: [],
      },
    },
    {
      logId: 10,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
    {
      logId: 11,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
    {
      logId: 12,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
    {
      logId: 13,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
    {
      logId: 14,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
    {
      logId: 15,
      loggedType: {
        name: "",
        type: 25,
        typeArguments: [],
      },
    },
    {
      logId: 16,
      loggedType: {
        name: "",
        type: 6,
        typeArguments: [],
      },
    },
    {
      logId: 17,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
    {
      logId: 18,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
    {
      logId: 19,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
    {
      logId: 20,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
    {
      logId: 21,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
    {
      logId: 22,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
    {
      logId: 23,
      loggedType: {
        name: "",
        type: 26,
        typeArguments: [],
      },
    },
    {
      logId: 24,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
    {
      logId: 25,
      loggedType: {
        name: "",
        type: 9,
        typeArguments: [],
      },
    },
  ],
  messagesTypes: [],
  configurables: [
    {
      name: "NAME",
      configurableType: {
        name: "",
        type: 14,
        typeArguments: null,
      },
      offset: 147320,
    },
    {
      name: "SYMBOL",
      configurableType: {
        name: "",
        type: 12,
        typeArguments: null,
      },
      offset: 147336,
    },
    {
      name: "OWNER",
      configurableType: {
        name: "",
        type: 5,
        typeArguments: [],
      },
      offset: 146552,
    },
    {
      name: "SIGNER",
      configurableType: {
        name: "",
        type: 2,
        typeArguments: null,
      },
      offset: 146520,
    },
    {
      name: "SIGNATURE_VALIDITY_PERIOD",
      configurableType: {
        name: "",
        type: 31,
        typeArguments: null,
      },
      offset: 147168,
    },
    {
      name: "TREASURY",
      configurableType: {
        name: "",
        type: 5,
        typeArguments: [],
      },
      offset: 146592,
    },
    {
      name: "FEE",
      configurableType: {
        name: "",
        type: 31,
        typeArguments: null,
      },
      offset: 146632,
    },
  ],
}

export class GuildPinContractAbi__factory {
  static readonly abi = _abi
  static createInterface(): GuildPinContractAbiInterface {
    return new Interface(_abi) as unknown as GuildPinContractAbiInterface
  }
  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): GuildPinContractAbi {
    return new Contract(
      id,
      _abi,
      accountOrProvider
    ) as unknown as GuildPinContractAbi
  }
  static async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<GuildPinContractAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet)
    const contract = await factory.deployContract(options)
    return contract as unknown as GuildPinContractAbi
  }
}