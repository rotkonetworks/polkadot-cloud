/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AccountCard,
  ExtraComponentProps,
  IconProps,
} from "@packages/cloud-react/lib/recipes/AccountCard";
import { Grid } from "@packages/cloud-react/lib/base/structure/Grid";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "../lib/SimpleEditor";

export const AccountCardPageAdvanced = () => {
  const code = `import { AccountCard, IconProps, } from "@polkadot-cloud/react/recipes/AccountCard";
...
const iconProps: IconProps = {
  noCopy: true,
  position: "right",
  gridSize: 3,
  justify: "space-around",
};
...
return (
  <AccountCard icon={iconProps} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} ellipsis={{ active: true }} />
);`;

  const iconProps: IconProps = {
    noCopy: true,
    position: "right",
    gridSize: 2,
    justify: "space-around",
  };

  return (
    <>
      <div className="demo">
        <Grid row>
          <Grid column sm={4}></Grid>
          <Grid column sm={4}>
            <AccountCard
              icon={iconProps}
              title={{
                address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
              }}
              ellipsis={{ active: true, position: "center" }}
            />
          </Grid>
          <Grid column sm={4}></Grid>
        </Grid>
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
