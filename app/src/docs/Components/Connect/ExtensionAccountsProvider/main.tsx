/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { DocProps } from "@docs/types";
import { Link } from "react-router-dom";
import { ProviderExample } from "./ProviderExample";
import { ConnectExample } from "./ConnectExample";
import { Note } from "@docs/Note";
import { AccountsExample } from "./AccountsExample";
import { H2, H3 } from "@docs/Headers";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Extension Accounts Provider"
        subtitle="Connect to available extensions and subscribe to accounts."
        npm={npm}
        status="stable"
      />
      <p>
        <a
          href="https://github.com/paritytech/polkadot-cloud/blob/main/packages/cloud-react/lib/connect/ExtensionAccountsProvider/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <code>ExtensionAccountsProvider</code>
        </a>{" "}
        provides a simple means of connecting to web3 extensions that implement
        the <code>window.injectedWeb3</code> interface, and subscribes to their
        accounts. It automatically re-connects to extensions on subsequent
        visits, and allows dapps to set an active account if found in an
        extension.
      </p>

      <Note>
        <p>
          This provider prevents the multiple pop-up issue (all available
          extensions popping up when connecting to extensions) by design. Such
          behaviour should be treated as an anti-pattern and be avoided.
        </p>
      </Note>

      <Note>
        <p>
          EVM accounts are not currently supported by{" "}
          <code>ExtensionAccountsProvider</code>.
        </p>
      </Note>

      <H3 id="requires">Requires:</H3>
      <p />
      <ul>
        <li>
          <Link to="/extensions-provider">
            <code>ExtensionsProvider</code>
          </Link>
          : Must wrap <code>ExtensionAccountsProvider</code> to provide the
          available extensions.
        </li>
      </ul>
      <hr />

      <H3 id="providers-setup">Providers Setup</H3>
      <p>
        Wrap your app with <code>ExtensionAccountsProvider</code> and provide
        the required props. Note that <code>ExtensionsProvider</code> is also
        required, in order to provide the available extensions to connect to.
        The required props are referenced further down.
      </p>

      <ProviderExample />

      <H3 id="connecting-extensions">Connecting Extensions</H3>

      <p>
        With the providers in place, you can call{" "}
        <code>connectExtensionAccounts</code> to connect to an extension. The
        following example attempts to find Subwallet JS from{" "}
        <code>extensions</code>, and connects to it via a button if found:
      </p>

      <ConnectExample />

      <p>
        It is recommended to carry out validation checks, such as if the
        extension is already connected and if it exists.
      </p>

      <H3 id="getting-accounts">Getting Accounts</H3>

      <p>
        Once connected to an extension, the subscribed accounts become available
        via <code>extensionAccounts</code>. The <code>address</code>,{" "}
        <code>name</code> of the account, and <code>signer</code> are returned
        for each account.
      </p>

      <AccountsExample />

      <H2 id="props">Props</H2>

      <H3 id="dappName" className="reference">
        dappName: string
      </H3>
      <p>
        A dapp identifier that is provided to the web3 extension(s) being
        connected to.
      </p>

      <H3 id="network" className="reference">
        network: "polkadot" | "kusama" | "westend"{" "}
      </H3>
      <p>The active network, in lower-case.</p>

      <H3 id="ss58" className="reference">
        ss58: number
      </H3>
      <p>The SS58 prefix of the current network.</p>
      <p>
        <i>
          Planned to be derived from <code>network</code> in a future release.
        </i>
      </p>

      <H3 id="activeAccount" className="reference">
        activeAccount: string | null
      </H3>
      <p>
        The current active account on your dapp, if any.{" "}
        <code>ExtensionAccountsProvider</code> will automatically connect to
        this active account, if found, when subscribing to extension account.
        See the next prop for more details.
      </p>

      <H3 id="setActiveAccount" className="reference">
        setActiveAccount(address: string)
      </H3>
      <p>
        Provide a setter function to call if the active account is found when
        subscribing to extension accounts.
      </p>

      <H2 id="values">Values</H2>

      <H3 id="connectExtensionAccounts" className="reference">
        connectExtensionAccounts(extension: ExtensionInjected):
        Promise&#60;boolean&#62;
      </H3>
      <p>
        Call this function to connect to the provided <code>extension</code> and
        subscribe to its accounts.
      </p>

      <H3 id="extensionAccounts" className="reference">
        extensionAccounts: ExtensionAccount[]
      </H3>
      <p>The list of extension accounts that have been subscribed to.</p>

      <H3 id="extensionAccountsSynced" className="reference">
        extensionAccountsSynced: boolean
      </H3>
      <p>
        Signals whether extensions are still being connected to and subscribed
        to. A value of <code>true</code> means that the process is complete.
      </p>

      <H3 id="forgetAccounts" className="reference">
        forgetAccounts(accounts: string[])
      </H3>
      <p>
        Call this function to forget an array of accounts that have been
        connected to. This effectively removes them from the provider state, and
        unsubscribes from them.
      </p>
    </>
  );
};