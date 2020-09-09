import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';
import './Global.css';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark">
        <div className="container background">
          <h1>Welcome to my app!</h1>
          <p>Please register first</p>
          <IonButton color="tertiary" onClick={() => history.push('/register')}>
            Register
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
