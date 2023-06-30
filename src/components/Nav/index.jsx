import React from "react";
import SearchBar from '../SearchBar/SearchBar'
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
    return (
        <div style={{
                width: '95%',
                display: 'flex',
                alignItems:'center',
                marginLeft: 'auto'
            }}>
            
            <SearchBar onSearch={onSearch} />

            <Link to="/home">
                <button style={{
                    display: "flex", 
                    position: "relative", 
                    padding: "5px",
                    margin: "5px", 
                    boxShadow: "3px 3px 3px 0px #00C957",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontFamily: "Rick2"
                }}>Home</button>
            </Link>

            <Link to="/favorites">
                <button style={{
                    display: "flex", 
                    position: "relative", 
                    padding: "5px",
                    margin: "5px", 
                    boxShadow: "3px 3px 3px 0px #00C957",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontFamily: "Rick2"
                }}>Favoritos</button>    
            </Link> 
            
            <Link to="about">
                <button style={{
                    display: "flex", 
                    position: "relative", 
                    padding: "5px",
                    margin: "5px", 
                    boxShadow: "3px 3px 3px 0px #00C957",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontFamily: "Rick2"
                }}>About</button>
            </Link>
        </div>
    )
}

export default Nav