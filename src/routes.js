import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdHome,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";

const routes = [
  {
    name: "Assistente text2sql",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='black' />,
    component: MainDashboard,
  },
];

export default routes;
