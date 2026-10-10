"use client";
import { useRef, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { FileText, Upload, X } from "lucide-react";

const DocumentUpload = ({
  id,
  name,
  label,
  placeholder,
  required = false,
  value = "",
  onChange,
  disabled = false,
  multiple = false,
}) => {
  const inputRef = useRef(null);
  const [documents, setDocuments] = useState([]);

  const handleChange = (event) => {
    const selected = Array.from(event.target.files || []);

    setDocuments((prev) => {
      const updated = multiple ? [...prev, ...selected] : selected;
      onChange?.(updated);
      return updated;
    });

    event.target.value = "";
  };

  const handleRemove = (index) => {
    setDocuments((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      onChange?.(updated);
      return updated;
    });
  };

  return (
    <div>
      <InputLabel className={required ? "asterisk" : ""}>{label}</InputLabel>
      <Box>
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.csv"
          multiple={multiple}
          hidden
          onChange={handleChange}
        />

        <Button
          variant="outlined"
          startIcon={<Upload size={18} />}
          onClick={() => inputRef.current?.click()}
        >
          Browse Documents
        </Button>

        <Stack spacing={1} mt={2}>
          {documents.map((document, index) => (
            <Box
              key={`${document.name}-${index}`}
              display="flex"
              alignItems="center"
              gap={1}
              p={1}
              border="1px solid"
              borderColor="divider"
              borderRadius={1}
            >
              <FileText size={20} />

              <Typography
                variant="body2"
                sx={{ flex: 1, overflowWrap: "anywhere" }}
              >
                {document.name}
              </Typography>

              <IconButton
                size="small"
                onClick={() => handleRemove(index)}
                aria-label={`Remove ${document.name}`}
              >
                <X size={18} />
              </IconButton>
            </Box>
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default DocumentUpload;
