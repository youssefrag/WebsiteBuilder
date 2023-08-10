import { Box, ToggleButtonGroup } from "@mui/material";

import {
  StyledElementTitle,
  SelectedElementTitle,
  StyledToggleButton,
} from "./element-picker.styles";

interface EventPickerPropTypes {
  element: string;
  handlePickElement: (
    event: React.MouseEvent<HTMLElement>,
    pickedElement: string
  ) => void;
}

const ElementPicker = ({
  element,
  handlePickElement,
}: EventPickerPropTypes) => {
  return (
    <Box>
      <ToggleButtonGroup
        value={element}
        exclusive
        onChange={handlePickElement}
        aria-label="text alignment"
      >
        <StyledToggleButton value="heading" aria-label="left aligned">
          {element === "heading" ? (
            <SelectedElementTitle>Heading</SelectedElementTitle>
          ) : (
            <StyledElementTitle>Heading</StyledElementTitle>
          )}
        </StyledToggleButton>
        <StyledToggleButton value="text" aria-label="centered">
          {element === "text" ? (
            <SelectedElementTitle>Text</SelectedElementTitle>
          ) : (
            <StyledElementTitle>Text</StyledElementTitle>
          )}
        </StyledToggleButton>
        <StyledToggleButton value="image" aria-label="right aligned">
          {element === "image" ? (
            <SelectedElementTitle>image</SelectedElementTitle>
          ) : (
            <StyledElementTitle>image</StyledElementTitle>
          )}
        </StyledToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ElementPicker;
