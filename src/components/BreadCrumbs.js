import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

function MyBreadcrumbs() {

    return (
        <Breadcrumbs aria-label="breadcrumb">
     <Link component={RouterLink} color="inherit" to="/">
        Hem
            </Link>
            <Link component={RouterLink} color="inherit" to="/DoulaSkapet">
                DoulaSkapet
            </Link>
            <Link component={RouterLink} color="inherit" to="/DoulaPaket">
                DoulaPaket
            </Link>
            <Link component={RouterLink} color="inherit" to="/VarförDoula">
                Varför Doula?
            </Link>
            <Link component={RouterLink} color="inherit" to="/Kontakt">
                Kontakt
            </Link>
            


    </Breadcrumbs>
  );
};

export default MyBreadcrumbs;
