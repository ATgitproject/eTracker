"use client";
import { useRef, useState } from "react";
import { Box, Button, IconButton, InputLabel, Stack } from "@mui/material";
import { ImagePlus, X } from "lucide-react";

const PhotoUpload = ({
  id,
  name,
  label,
  required = false,
  value = "",
  onChange,
  disabled = false,
}) => {
  const inputRef = useRef(null);
  const [photo, setPhoto] = useState(value);

  const handleChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const dataUrl = reader.result;

      setPhoto(dataUrl);
      onChange?.(dataUrl);
    };

    reader.readAsDataURL(file);

    event.target.value = "";
  };

  const handleRemove = () => {
    setPhoto("");
    onChange?.("");
  };

  return (
    <div>
      <InputLabel htmlFor={id} className={required ? "asterisk" : ""}>
        {label}
      </InputLabel>

      <Box>
        <input
          ref={inputRef}
          id={id}
          name={name}
          type="file"
          accept="image/*"
          hidden
          disabled={disabled}
          onChange={handleChange}
        />

        <Button
          variant="outlined"
          disabled={disabled}
          startIcon={<ImagePlus size={18} />}
          onClick={() => inputRef.current?.click()}
        >
          Browse Photo
        </Button>

        {photo && (
          <Stack direction="row" mt={2}>
            <Box position="relative" width={100} height={100}>
              <Box
                component="img"
                src={photo}
                alt={name || "Uploaded photo"}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 1,
                }}
              />

              {!disabled && (
                <IconButton
                  size="small"
                  onClick={handleRemove}
                  aria-label="Remove photo"
                  sx={{
                    position: "absolute",
                    top: 2,
                    right: 2,
                    bgcolor: "background.paper",
                  }}
                >
                  <X size={16} />
                </IconButton>
              )}
            </Box>
          </Stack>
        )}
      </Box>
    </div>
  );
};

export default PhotoUpload;
