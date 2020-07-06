import React from "react";

type Args = {
  [key: string]: number;
  id: number;
};

export default ({ id }: Args) => id;
