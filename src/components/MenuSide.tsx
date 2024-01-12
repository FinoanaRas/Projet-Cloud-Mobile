import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonMenu, IonTitle, IonToolbar } from "@ionic/react";

const LeftSideBar: React.FC = ({  }) => {
    return (
        <IonMenu contentId="main-content">
            <IonHeader>
            <IonToolbar>
                <IonTitle>Menu Content</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardContent>Mon Compte</IonCardContent>
                </IonCard>
                <br/>
                <IonCard>
                    <IonCardContent>
                        <IonButton>Se Deconnecter</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonMenu>
    );
};


export default LeftSideBar;