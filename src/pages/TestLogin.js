import {
    AuthenticatedTemplate,
    UnauthenticatedTemplate,
    useMsal,
  } from "@azure/msal-react";
  import React, { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { userAuth } from "src/store/authSlice";
  import { getHomeSearch, homeSearchController } from "src/store/homeSearchSlice";
  import { fetchSearchResults } from "src/store/searchResultsSlice";
  
  function TestLogin() {
    const { instance } = useMsal();
    const idToken = useSelector((state) => state?.token);
    const dispatch = useDispatch();
//    const { data: homeSearch } = useSelector((state) => state?.homeSearch);
//    const { data: searchResults } = useSelector((state) => state?.searchResults);
  
    useEffect(() => {
      dispatch(getHomeSearch());
      return () => homeSearchController.abort();
    }, [dispatch]);
  
    const handleButtonClick = () => {
      const requestData = {
        dealerID: null,
        dealerName: "Mike Murphy Ford",
        dealerCity: "Morton",
        dealerState: null,
        dealerZip: "61550",
        dealerDistance: null,
        type: "Used",
        certified: false,
        vin: "1GNERGKW8KJ290403",
        stockNum: "290403",
        year: 2019,
        make: null,
        model: null,
        trim: null,
        color: "Graphite Metallic",
        price: 22995,
        mileage: 84389,
        bodyStyle: null,
        engine: "3.6L V6 SIDI VVT",
        transmission: "Automatic",
        driveTrain: "FWD",
        vdpURL: "",
      };

      dispatch(fetchSearchResults(requestData));
    };
  
    const Login = async () => {
      try {
        let { idToken } = await instance.loginPopup();
        dispatch(userAuth(idToken));
      } catch (error) {
        console.error(error);
      }
    };
  
    const Logout = async () => {
      try {
        await instance.logoutRedirect("/");
        dispatch(userAuth(""));
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="home">
        <p className="text-center fs-5 fw-bold">
          Authenticating a React App using Azure AD B2C
        </p>
        <AuthenticatedTemplate>
          <div className="alert alert-success" role="alert">
            You are authenticated! 😊
            <button
              type="button"
              className="btn btn-dark btn-sm float-end"
              onClick={() => Logout()}
            >
              Logout
            </button>
          </div>
          <div className="card">
            <div className="card-header">Id Token</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{idToken}</li>
              <li className="list-group-item">
                Paste the above on{" "}
                <span>
                  <a href="https://jwt.ms" target="_blank ">
                    jwt.ms
                  </a>
                </span>{" "}
                to decode the token
              </li>
            </ul>
          </div>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <div className="alert alert-warning" role="alert">
            You are not authenticated 🥺
            <button
              type="button"
              className="btn btn-dark btn-sm float-end"
              onClick={() => Login()}
            >
              Login
            </button>
          </div>
          <div>
            <button onClick={handleButtonClick}>Test Button</button>
          </div>
        </UnauthenticatedTemplate>
      </div>
    );
  }
  
  export default TestLogin;