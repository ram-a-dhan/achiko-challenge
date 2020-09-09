import { IonAlert } from '@ionic/react';
import React from 'react';

interface ContainerProps {
  showAlert: boolean,
  setShowAlert: Function,
  alertContent: alertType,
}

const AlertBox: React.FC<ContainerProps> = ({showAlert, setShowAlert, alertContent}) => {
  return (
    <IonAlert
      isOpen={showAlert}
      onDidDismiss={() => setShowAlert(false)}
      header={alertContent.header}
      subHeader={alertContent.subheader}
      message={alertContent.message}
      buttons={['OK']}
    />
  );
};

export default AlertBox;
