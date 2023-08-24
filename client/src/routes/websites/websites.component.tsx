import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Component } from "../../store/playground/playground.types";

import { useSelector } from "react-redux";

import { selectUser } from "../../store/user/userSlice";

import {
  CreateNew,
  PageContainer,
  PageTitle,
  SitesContainer,
} from "./websites.styles";

import WebsiteCard from "../../components/website-card/website-card.component";

const Websites = () => {
  const [websites, setWebsites] = useState<Component[]>([]);

  const navigate = useNavigate();

  const currentUser = useSelector(selectUser);

  const getWebsitesForUser = async (email: string) => {
    let response = await fetch(
      `http://localhost:8000/websites/user-websites/${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();

    if (res.message === "Websites succesfully fetched") {
      setWebsites(res.websites);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getWebsitesForUser(currentUser.email);
    }
  }, []);

  const renderWebsites = websites.map((website: any) => {
    return <WebsiteCard name={website.name} websiteId={website.websiteId} />;
  });

  return (
    <PageContainer>
      <PageTitle>My Websites</PageTitle>
      <SitesContainer>
        {renderWebsites}
        <CreateNew onClick={() => navigate("/playground")}>
          Create new site!
        </CreateNew>
      </SitesContainer>
    </PageContainer>
  );
};

export default Websites;
