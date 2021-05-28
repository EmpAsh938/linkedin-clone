import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { BiPencil, BiLike, BiShareAlt, BiSend } from "react-icons/bi";
import { MdPhoto, MdEventNote } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { GoComment } from "react-icons/go";
import { FaPhotoVideo } from "react-icons/fa";

import DummyButton from "./DummyButton";
import { addPost, getFirebasePost } from "../redux/postSlice";
import { db } from "../firebase";
import "./Feed.css";

const Feed = ({ username, photo }) => {
  const [input, setInput] = useState("");
  const [tempPosts, setTempPosts] = useState([]);

  const messages = useSelector((state) => state.posts.userPosts);
  const user = useSelector((state) => state.posts.creds.fullName);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setTempPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    dispatch(getFirebasePost(tempPosts));
  }, [tempPosts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      db.collection("posts").add({
        id: new Date().getTime().toString(),
        text: input,
      });
      dispatch(
        addPost({
          id: new Date().getTime().toString(),
          text: input,
        })
      );
    }
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__comment">
        <form className="feed__write" onSubmit={handleSubmit}>
          <BiPencil />
          <input
            id="text"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <div className="feed__dummy">
          <DummyButton title="Photo" Icon={MdPhoto} />
          <DummyButton title="Video" Icon={FaPhotoVideo} />
          <DummyButton title="Events" Icon={MdEventNote} />
          <DummyButton title="Article" Icon={GrArticle} />
        </div>
      </div>
      <div className="feed__posts">
        {messages.length >= 1 &&
          messages.map((item) => {
            const { id, text } = item;
            return (
              <div className="feed__note" key={id}>
                <div className="feed__header">
                  <img
                    src={photo || "/images/avatar.jpeg"}
                    alt="profile"
                    className="feed__image"
                  />
                  <h3>{user || username}</h3>
                </div>
                <div className="feed__post">
                  <p>{text}</p>
                </div>
                <div className="feed__button">
                  <DummyButton Icon={BiLike} title="Like" />
                  <DummyButton Icon={GoComment} title="Comment" />
                  <DummyButton Icon={BiShareAlt} title="Share" />
                  <DummyButton Icon={BiSend} title="Send" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Feed;
