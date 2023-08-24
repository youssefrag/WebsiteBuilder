import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { PlaygroundSliceState } from "../../store/playground/playground.types";

import { useSelector } from "react-redux";

import { selectUser } from "../../store/user/userSlice";

import {
  CreateNew,
  PageContainer,
  PageTitle,
  SitesContainer,
} from "./websites.styles";

const Websites = () => {
  const [websites, getWebsites] = useState<PlaygroundSliceState | []>([]);

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
    // console.log(response);
  };

  useEffect(() => {
    if (currentUser) {
      getWebsitesForUser(currentUser.email);
    }
  }, []);

  return (
    <PageContainer>
      <PageTitle>My Websites</PageTitle>
      <SitesContainer>
        <CreateNew onClick={() => navigate("/playground")}>
          Create new site!
        </CreateNew>
      </SitesContainer>
    </PageContainer>
  );
};

export default Websites;
