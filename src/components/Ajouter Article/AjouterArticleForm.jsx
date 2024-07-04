import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Cloudinary } from "cloudinary-core";
import { useDispatch } from "react-redux";
import { addPost } from "../../state/posts/postSlice";
import { useNavigate } from "react-router-dom";

const AjouterArticleForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cloudinary = new Cloudinary({
    cloud_name: "diuoo1cnx",
    api_key: "328562688448333",
    api_secret: "yupXjn_W-Dftnp1pHZ4ulYznVNs",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      name: e.target.name.value,
      category: e.target.category.value,
      image: e.target.image.files[0],
      description: e.target.description.value,
      id: uuidv4(),
    };

    if (post.image) {
      const formData = new FormData();
      formData.append("file", post.image);
      formData.append("upload_preset", "restoran");

      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${
            cloudinary.config().cloud_name
          }/image/upload`,
          formData
        );
        const imageUrl = res.data.secure_url;
        post.image = imageUrl;

        dispatch(addPost(post));
        navigate("/articles");
      } catch (err) {
        console.error("Error while uploading image or adding post:", err);
      }
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
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Titre</FormLabel>
          <Input name="name" placeholder="Article Title" />
        </FormControl>
        <FormControl>
          <FormLabel>Categorie</FormLabel>
          <Select name="category" placeholder="Select Categorie">
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
              // onChange={handleFileChange}
            />
          </div>
        </div>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            name="description"
            placeholder="Enter description"
            size="sm"
          />
        </FormControl>
        <Button
          marginTop={17}
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green.500"
          type="submit"
        >
          Ajouter
        </Button>
      </form>
    </div>
  );
};

export default AjouterArticleForm;
