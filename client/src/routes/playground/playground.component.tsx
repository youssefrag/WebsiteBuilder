import { useSelector, useDispatch } from "react-redux";

import { createHtmlElements } from "../../utils/createElements";

import {
  resetPlayground,
  selectPlayground,
} from "../../store/playground/playgroundSlice";

import {
  SaveDeleteContainer,
  SaveButton,
  DeleteButton,
} from "./playground.styles";

import CanvasDrawer from "../../components/canvas-drawer/canvas-drawer.component";

const Playground = () => {
  const playground = useSelector(selectPlayground);
  const dispatch = useDispatch();

  const handleDeleteWebsite = () => {
    dispatch(resetPlayground());
  };

  const renderComponents = playground.map((component) => {
    return createHtmlElements(component);
  });

  console.log(renderComponents);

  return (
    <>
      {/* {renderComponents} */}
      <CanvasDrawer></CanvasDrawer>
      <SaveDeleteContainer>
        <SaveButton>Save website</SaveButton>
        <DeleteButton onClick={handleDeleteWebsite}>
          Delete website
        </DeleteButton>
      </SaveDeleteContainer>
    </>
  );
};

export default Playground;
