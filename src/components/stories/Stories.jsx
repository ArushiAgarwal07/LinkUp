import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext";


const Stories = () => {

  const {currentUser}= useContext(AuthContext)

    const stories=[
        {
            id:1,
            name:"Palak",
            img:" https://images.pexels.com/photos/17738204/pexels-photo-17738204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id:2,
            name:"Bhavik",
            img:"https://images.pexels.com/photos/17721345/pexels-photo-17721345/free-photo-of-man-people-woman-business.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id:3,
            name:"Varun",
            img:"https://images.pexels.com/photos/16640522/pexels-photo-16640522/free-photo-of-a-person-making-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id:4,
            name:"Shweta",
            img: "https://images.pexels.com/photos/14605623/pexels-photo-14605623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]
  return (
    <div className='stories'>
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
      <button>+</button>
      </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;