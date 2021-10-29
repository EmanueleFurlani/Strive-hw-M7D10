import { withRouter } from "react-router";

const Header = ({ history }) => {
  return (
    <>
      <div className="header-cont">
        <h1 onClick={() => history.push("/")}>STRI(w)EATHER</h1>
      </div>
    </>
  );
};

export default withRouter(Header);