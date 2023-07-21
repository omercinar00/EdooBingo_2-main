import * as React from "react";
import "./VideoEkle.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Margin } from "@mui/icons-material";



const videoEkle = () => {

  //  const [age, setAge] = React.useState("");

  //  const handleChange = (event) => {
  //    setAge(event.target.value);
  //  };

   const categories = ["ders", "ders1", "ders2", "ders3", "ders4"];
  return (
    <div className="videoEkle">
      <Sidebar />
      <div className="container">
        <Navbar />

        <React.Fragment>
          <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
            <Box sx={{ padding: 5 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={2}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Title
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    required
                    id="title"
                    name="title"
                    label="Title"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Content
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Content"
                    multiline
                    fullWidth
                    rows={4}
                  />
                </Grid>

                <Grid item xs={12} sm={2}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    URL
                  </InputLabel>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="url"
                    name="url"
                    label="Video url"
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={2}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Category
                  </InputLabel>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Age"
                      // onChange={handleChange}
                    >
                      {categories.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <ReactPlayer
                    style={{
                      margin: "0 0 0 50px",
                    }}
                    width={320}
                    height={180}
                    url="https://www.youtube.com/watch?v=RZ8mtyfxZhI"
                    controls={true}
                  />
                </Grid>

                <Grid item xs={12} sm={2}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Img Upload
                  </InputLabel>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Button>
                    <UploadFileIcon />
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6} />
                <Grid item xs={12} sm={5} />
                <Grid item xs={12} sm={4}>
                  <Button variant="contained" sx={{ color: "#fff" }}>
                    Save
                  </Button>
                </Grid>
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
              </Grid>
            </Box>
          </Paper>
        </React.Fragment>
      </div>
    </div>
  );
};

export default videoEkle;
