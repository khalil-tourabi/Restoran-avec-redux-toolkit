import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  CircularProgress, 
  CircularProgressLabel
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { Cloudinary } from 'cloudinary-core';
import { useDispatch } from "react-redux";
import { updatePost } from "../../state/posts/postSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateArticleForm = () => {

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const notify = () => toast("Updating Article!!");

  const handleClick = () => {
    notify();
    // setIsButtonDisabled(true);
  };

  const dispatch = useDispatch();
  const [post, setPost] = useState({
    name: "",
    category: "",
    image: "",
    description: "",
    id: uuidv4(),
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();

  const cloudinary = new Cloudinary({
    cloud_name: 'diuoo1cnx',
    api_key: '328562688448333',
    api_secret: 'yupXjn_W-Dftnp1pHZ4ulYznVNs',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPost((prevPost) => ({
      ...prevPost,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (post.image && typeof post.image !== 'string') {
      const formData = new FormData();
      formData.append('file', post.image);
      formData.append('upload_preset', 'restoran');

      try {
        const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/image/upload`, formData);
        const imageUrl = res.data.secure_url;
        post.image = imageUrl;
      } catch (err) {
        console.error("Error while uploading image:", err);
        return;
      }
    }

    try {
      dispatch(updatePost({ id, data: post }));
      navigate("/articles");
    } catch (err) {
      console.error("Error while modifying post:", err);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        width: "50%",
        margin: "0 auto",
        textAlign: "center",
        marginTop: 100,
      }}
    >
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Titre</FormLabel>
          <Input
            name="name"
            placeholder="Article Title"
            value={post.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Categorie</FormLabel>
          <Select
            name="category"
            placeholder="Select Categorie"
            value={post.category}
            onChange={handleChange}
          >
            <option value="BreakFast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </Select>
        </FormControl>
        <div style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <label>Upload Image</label>
          </div>
          <div>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            value={post.description}
            onChange={handleChange}
            placeholder="Enter description"
            size="sm"
          />
        </FormControl>
        {isButtonDisabled ? <CircularProgress isIndeterminate color='green.300' style={{ marginTop: '10px' }}/> : 
        <Button
          marginTop={17}
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green.500"
          type="submit"
          onClick={handleClick}
          // disabled={isButtonDisabled}
        >
          Modifier
        </Button>
        }
      </form>
    </div>
  );
};

export default UpdateArticleForm;
