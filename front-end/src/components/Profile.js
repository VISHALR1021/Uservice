import React, {useEffect,useState,useContext} from 'react';
import {UserContext} from '../App'
import '../App.css'
import profilePic from '../pictures/profilepic.png'


function Profile() {

      const {state,dispatch} = useContext(UserContext)
      console.log("state: ",state)
    return (
      <div className="Profile">
        Profile
        <div className="editInfo">

          <img className="profilepic" src={profilePic} />
          <h5>{state.userName}</h5>
          


          <form>
          <label >Add description</label>
          <br />
          <input />
          <button>Add</button>
          </form>
        </div>
      </div>
    );
  }
  
export default Profile