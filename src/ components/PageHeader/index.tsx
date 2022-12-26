import React from "react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Link from "next/link";
import Image from "next/image";

// import { Container } from './styles';

const PageHeader: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <Image src={ArrowRightAltIcon} alt="Voltar" />
      </Link>
    </div>
  );
};

export default PageHeader;
