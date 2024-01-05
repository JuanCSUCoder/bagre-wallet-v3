import { ROUTES_MAP as ROUTES_SETTINGS_MAP } from './routes';

import GlobalBackTitle from "../../component-library/Global/GlobalBackTitle";
import GlobalLayout from "../../component-library/Global/GlobalLayout";
import { useNavigation, withParams } from '../../routes/hooks';
import { withTranslation } from '../../hooks/useTranslations';
import GlobalButton from '../../component-library/Global/GlobalButton';
import { useContext, useState } from 'react';
import { AppContext } from '../../AppProvider';
import GlobalInput from '../../component-library/Global/GlobalInput';
import GlobalPadding from '../../component-library/Global/GlobalPadding';
import GlobalText from '../../component-library/Global/GlobalText';

function AccountEditRPCPage({ params, t }) {
  const navigate = useNavigation();
  const onBack = () =>
    navigate(ROUTES_SETTINGS_MAP.SETTINGS_ACCOUNT_EDIT, {
      id: params.id,
    });
  
  const [{ accounts }, { editAccount }] = useContext(AppContext);

  const [configuring, setConfiguring] = useState(false);
  console.log(accounts.find(({ id }) => id === params.id)?.networksAccounts["solana-mainnet"][0].rpcUrl);
  window.solaccount = accounts.find(({ id }) => id === params.id);
  const [newRPCUrl, setNewRPCUrl] = useState(accounts.find(({ id }) => id === params.id)?.networksAccounts[0].rpcUrl);

  const configureRPC = async () => {
    setConfiguring(true);
    await editAccount(params.id, { rpcUrl: newRPCUrl });
    setConfiguring(false);
    onBack();
  }

  return (
    <GlobalLayout>
      <GlobalLayout.Header >
        <GlobalBackTitle
          title={"RPC Url"}
          onBack={onBack}

          secondaryTitle={"Solana Network"}
        />

        <GlobalPadding size="md" />

        <GlobalText>You can use the default rate limited RPC, use your local RPC Node or find an RPC provider to connect to the Solana Network</GlobalText>
        
        <GlobalPadding size="md" />

        <GlobalInput
          placeholder={"https://api.mainnet-beta.solana.com"}
          autoFocus={true}
        />
      </GlobalLayout.Header>
      <GlobalLayout.Footer>
        <GlobalButton
          title={"Configure RPC"}
          type={"primary"}
          onPress={configureRPC}
          disabled={configuring} 
          wideSmall
        />
      </GlobalLayout.Footer>
    </GlobalLayout>
  )
}

export default withParams(withTranslation()(AccountEditRPCPage));