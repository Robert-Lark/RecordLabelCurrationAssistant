import React from 'react';

//HOOKS
import {useDispatch} from "react-redux";

//Utils
import { DataCheker } from '../../Utils/DataCheker';

//React Router
import {Link} from "react-router-dom";

//Font Awesum Icon Library Imports 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRecordVinyl} from "@fortawesome/free-solid-svg-icons";
import {faMusic} from "@fortawesome/free-solid-svg-icons";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {faDragon} from "@fortawesome/free-solid-svg-icons";





function Header(props) {
const dispatch = useDispatch();



    return (
        <div>
            <div className="headerContainer">
      <nav>
        <Link to={"/"}>
          <span onClick={loadData}>
            <FontAwesomeIcon
              className="fai"
              icon={faRecordVinyl}
            ></FontAwesomeIcon>
            <p>Label</p>
          </span>
        </Link>
        {/* <span onClick={() => dispatch(navSelectorDispatch("artist"))}>
          <FontAwesomeIcon className="fai" icon={faUserAlt}></FontAwesomeIcon>
          <p>Artist</p>
        </span> */}
        <Link to={"/search"}>
          <span onClick={searchHandler}>
            <FontAwesomeIcon className="fai" icon={faMusic}></FontAwesomeIcon>
            <p>Search</p>
          </span>
        </Link>
        {currentUser ? (
          <Link to={"/dashboard"}>
            <span onClick={() => dispatch(navVisibility())}>
              <FontAwesomeIcon
                className="fai"
                icon={faDragon}
              ></FontAwesomeIcon>
              <p>Dashboard</p>
            </span>
          </Link>
        ) : (
          <Link to={"/login"}>
            <span>
              <FontAwesomeIcon
                className="fai"
                icon={faDoorOpen}
              ></FontAwesomeIcon>
              <p>Sign In</p>
            </span>
          </Link>
        )}
      </nav>
    </div>
        </div>
    );
}

export default Header;