import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectPlayground } from "../../store/playground/playgroundSlice";

import { createHtmlElements } from "../../utils/createElements";

import { PreviewContainer } from "./preview.styles";

import { Component } from "../../store/playground/playground.types";

const Preview = () => {
  const location = useLocation();

  const params = useParams();
  console.log(params);

  const playground = useSelector(selectPlayground);

  const [previewComponents, setPreviewComponents] = useState<Component[]>([]);

  const getWebsiteComponents = async (websiteId: string) => {
    let response = await fetch(`/websites/components/${websiteId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();

    if (res.message === "Components succesfully fetched") {
      setPreviewComponents(res.components);
    }
  };

  useEffect(() => {
    if (params.websiteId) {
      getWebsiteComponents(params.websiteId);
    }
  }, []);

  if (location.pathname.split("/")[1] === "preview-website") {
    const renderComponents = previewComponents.map((component) => {
      return <div>{createHtmlElements(component)}</div>;
    });
    return <PreviewContainer>{renderComponents}</PreviewContainer>;
  } else {
    const renderComponents = playground.map((component) => {
      return <div>{createHtmlElements(component)}</div>;
    });
    return <PreviewContainer>{renderComponents}</PreviewContainer>;
  }
};

export default Preview;
