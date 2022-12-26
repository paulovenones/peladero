import { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/db";

const getTest = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    const test = await db.collection("test").get();
    const testData = test.docs.map((test) => test.data());

    console.log("testData => ", testData);
    res.status(200).json({ data: testData });
  } catch (e) {
    console.error(e);
  }
};

export default getTest;
