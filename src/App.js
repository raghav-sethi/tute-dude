import "./App.css";
import Container from "./Components/Container/Container";
import FriendsEnrolled from "./Components/FriendsContent/FriendsEnrolled";
import Navbar from "./Components/Navbar/Navbar";
import PathLinkCont from "./Components/Navbar/PathLinkCont";
import ReferralCont from "./Components/ReferralComponent/ReferralCont";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <PathLinkCont />
        <ReferralCont referralCode="EDCH54" balance="500" />
        <FriendsEnrolled friendsEnrolled="3" />
      </Container>
    </>
  );
}

export default App;
