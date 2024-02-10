import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonMenu, IonTitle, IonToolbar } from "@ionic/react";
import './MenuSide.css';
import { useHistory } from "react-router";
const LeftSideBar: React.FC = ({  }) => {
    const history = useHistory();
    const logout = () => {
        // localStorage.removeItem("token");
        history.push("/");
    }
    return (
        <IonMenu contentId="main-content">
            <IonHeader>
            <IonToolbar>
                <IonTitle className="title">Fiar'Occaz</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardContent>Mon Compte</IonCardContent>
                </IonCard>
                <br/>
                <IonCard routerLink="/imageForm">
                    <IonCardContent>Ajouter images</IonCardContent>
                </IonCard>
                <br/>
                <IonCard>
                    <IonCardContent>
                        <IonButton onClick={logout}>Se Deconnecter</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonMenu>
    );
};


export default LeftSideBar;