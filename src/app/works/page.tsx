import React from "react";
import * as Work from "@/app/features/works/components/index";
import { Metadata } from "next";
import StairsTransition from "../components/Animation/StairsTransition/StairsTransition";

export const metadata: Metadata = {
  title: "Works",
  description: "このページでは、Kaishu Aoyamaの制作実績をご覧いただけます。",
};

const WorksPage = () => {
  return (
    <>
      <div className="common-container">
        <StairsTransition>
          <Work.WorksSection />
        </StairsTransition>
      </div>
    </>
  );
};

export default WorksPage;
