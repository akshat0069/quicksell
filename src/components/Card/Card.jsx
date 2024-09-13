import React from 'react';
import './Card.css';
import highPriorityIcon from "./Img - High Priority.svg";
import mediumPriorityIcon from './Img - Medium Priority.svg'; 
import lowPriorityIcon from './Img - Low Priority.svg';
import noPriorityIcon from './No-priority.svg';
import userIcon from "./user"
const Card = ({ id, title, tag, status, priority }) => {

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'High':
        return highPriorityIcon;
      case 'Medium':
        return mediumPriorityIcon;
      case 'Low':
        return lowPriorityIcon;
      default:
        return noPriorityIcon;
    }
  };

  return (
    <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: 'uppercase' }} className="color-grey">
          {id}
        </span>
        <div className="imageContainer relative" style={{ width: '30px', height: '30px' }}>
          <img
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            src={userIcon}
            alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        <p>{title}</p>
      </div>
      <div className="cardTags">
        <div className="tags color-grey">
          <img src={getPriorityIcon(priority)} alt="Priority Icon" style={{ width: '20px', height: '20px' }} />
        </div>
        {tag?.map((elem, index) => {
          return (
            <div key={index} className="tags color-grey">
              <span>•</span> {elem}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
