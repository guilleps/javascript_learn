import mongoose from "mongoose";

const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    address: {
      type: String,
    },
    web: {
      type: String,
    },
    industry: {
      type: String,
    },
    status: {
      type: String,
    },
    phone: {
      type: String,
    },
    // hacemos una referencia a la tabla/coleccion de User, es como una relacion en una BD relacional
    user: {
      type: mongoose.Schema.Types.ObjectId, // es de tipo idUser en mongodb
      ref: "User", // necesario la referencia a la coleccion llamada User
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Client", clientSchema);
