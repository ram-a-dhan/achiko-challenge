import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton, IonCheckbox, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';
import './Global.css';
import useRegister from '../hooks/useRegister';
import AlertBox from '../components/AlertBox';

const Home: React.FC = () => {
  const { regData, handleRegChange, handleRegSubmit, showAlert, setShowAlert, alertContent } = useRegister();

  return (
    <IonPage>
      {/* <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={alertContent.header}
        subHeader={alertContent.subheader}
        message={alertContent.message}
        buttons={['OK']}
      /> */}
      <AlertBox showAlert={showAlert} setShowAlert={setShowAlert} alertContent={alertContent} />
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
          </IonButtons>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark">
        <div className="container background">
          <form className="container" onSubmit={handleRegSubmit}>
            <IonCard color="dark" style={{minWidth: '300px', maxWidth: '380px'}}>
              <IonCardHeader>
                <IonCardTitle style={{textAlign: 'center'}}>
                  Registration Form
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonItem color="dark">
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput type="text" name="email" value={regData.email} onIonChange={handleRegChange}></IonInput>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonItem color="dark">
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type="password" name="password" value={regData.password} onIonChange={handleRegChange}></IonInput>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonItem color="dark">
                        <IonLabel position="floating">Confirm Password</IonLabel>
                        <IonInput type="password" name="passwordConfirm" value={regData.passwordConfirm} onIonChange={handleRegChange}></IonInput>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonItem color="dark">
                        <IonLabel>I have read the terms & conditions</IonLabel>
                        <IonCheckbox color="tertiary" slot="start" name="tcChecked" checked={regData.tcChecked} onIonChange={handleRegChange} />
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonButton color="tertiary" expand="block" type="submit">
                        Submit
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
