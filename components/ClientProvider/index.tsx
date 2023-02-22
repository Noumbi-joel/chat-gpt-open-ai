"use client"

import React from "react";
import { Toaster } from "react-hot-toast";

type Props = {};

const ClientProvider = (props: Props) => {
  return (
    <div>
      <Toaster position="top-right" />
    </div>
  );
};

export default ClientProvider;
