import { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/db";

const createGroup = async (req: NextApiRequest, res: NextApiResponse) => {
  const { groupName, playersQuantity } = req.body;
  const nowDate = new Date(Date.now());
  db.collection("groups")
    .add({
      name: groupName,
      gameSettings: {
        goalkeepersQuantity: 0,
        playersByTeam: playersQuantity,
        totalPlayers: 0,
      },
      created_at: nowDate,
      updated_at: nowDate,
    })
    .then((docRef) => {
      console.log("Group document written with ID: ", docRef.id);
      res.status(201);
    })
    .catch((err) => {
      console.log("Error adding group document: ", err);
      res.status(500);
    });
};

export default createGroup;
