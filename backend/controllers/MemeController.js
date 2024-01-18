import db from "../models/index.js";
import { json } from "sequelize";

const { MemeModel, UserModel } = db;

//create new meme
export const createMeme = async (req, res) => {
  const { imageURL, textCaption, userId } = req.body;
  try {
    if (!imageURL || !textCaption || !userId) {
      return res.status(400).json({ error: "Missing required" });
    }
    const newMeme = await MemeModel.create({
      imageURL,
      textCaption,
      userId,
    });
    res.status(200).json({ message: "Meme added successfuly", data: newMeme });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// get all meme
export const getAllMeme = async (req, res) => {
  try {
    const getMeme = await MemeModel.findAll({ include: [UserModel] });
    res.status(200).json({ message: "Get all Memes", data: getMeme });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

//get single meme by id
export const getMemeById = async (req, res) => {
  const { id } = req.params;
  try {
    const getById = await MemeModel.findByPk(id, { include: [UserModel] });
    if (getById) {
      res.status(200).json({ data: getById });
    } else {
      res.status(404).json(`message: Memes with id ${id} not found`);
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};


//update meme
export const updateMemeById = async (req, res) => {
  const { id, imageURL, textCaption } = req.body;

  try {
    // Check if the meme exists
    const findData = await MemeModel.findByPk(id);
    if (!findData) {
      return res.status(404).json({ error: 'The meme not found' });
    }


    // Update the meme properties
    const updateMeme = await MemeModel.update(
      {
        imageURL,
        textCaption,
      },
      {
        where: { id: id,},
      }
    );

    if (updateMeme[0] > 0) {
      return res.status(200).json({ message: 'Meme updated successfully' });
    } else {
      return res.status(400).json({ error: 'Error updating meme' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};


//function to delete meme
export const deleteMeme = async (req, res) => {
    const { id } = req.params;
    try {
        const findData = await MemeModel.findByPk(id);
        if (!findData) {
            return res.status(404).json({ message: 'Meme not found' });
        }

        await findData.destroy();
        res.status(200).json({ message: 'Meme deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

