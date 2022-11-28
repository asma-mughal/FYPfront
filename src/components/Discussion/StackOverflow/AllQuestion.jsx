
import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./css/AllQuestions.css";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
const AllQuestion = () => {
  return (
    <div className="all-questions font-poppins">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>  
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>0</p>
              <span>answers</span>
            </div>
            <div className="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to='/view'>title</Link>

          {/* <a href=>{data.title}</a> */}

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div>ReactHtmlParser(truncate(data.body, 200))</div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            
              <p
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                _tag
              </p>
           
          </div>
          <div className="author">
            <small>Timestamp</small>
            <div className="auth-details">
              <Avatar />
              <p>
               data name
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllQuestion
