import { use } from "chai";
import { solidity } from "ethereum-waffle";

import { shouldBehaveLikeDepositActive } from "./DepositActive/depositActive.behavior";
import { shouldBehaveLikeUnipilotFactory } from "./UnipilotFactoryFunctions/UnipilotFactory.behavior";

use(solidity);

describe("Invokes Deposit Active Tests", async () => {
  await shouldBehaveLikeDepositActive();
});

describe("Invokes Unipilot Factory Tests", async () => {
  await shouldBehaveLikeUnipilotFactory();
});
