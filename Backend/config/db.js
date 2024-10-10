import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ranaharsh669:Harsh%40h4@harsh.mrc4t.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};
