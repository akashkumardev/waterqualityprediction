import React, { useState } from "react";
import "./water.css";
import TextField from "@mui/material/TextField";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import CustomizedTables from "./Table";

//styles for the application
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function WaterQualityPrediction() {
  //initial state of the form
  const [parameters, setParameters] = useState({
    pHValue: "",
    TDSValue: "",
    hardnessValue: "",
    alkalinityValue: "",
    nitrateValue: "",
    sulfateValue: "",
    fluorideValue: "",
    chlorideValue: "",
    turbidityValue: "",
    arsenicValue: "",
    copperValue: "",
    cadmiumValue: "",
    chromiumValue: "",
    leadValue: "",
    ironValue: "",
    zincValue: "",
  });

  //usestate=>to store state of application
  const [waterQuality, setWaterQuality] = useState("");
  const [open, setOpen] = useState(false);
  const [assessmentData, setAssessmentData] = useState([]);

  //function to close the popup
  const handleClose = () => setOpen(false);

  //function to handle submit of form
//function to handle submit of form
const assessWaterQuality = () => {
    setOpen(true);
    const limits = {
      pHValue: [6.5, 8.5],
      TDSValue: [500, 2000],
      hardnessValue: [200, 600],
      alkalinityValue: [200, 600],
      nitrateValue: [0, 45],
      sulfateValue: [200, 400],
      fluorideValue: [1, 1.5],
      chlorideValue: [250, 1000],
      turbidityValue: [1, 5],
      arsenicValue: [0.01, Infinity],
      copperValue: [0.05, 1.5],
      cadmiumValue: [0.003, Infinity],
      chromiumValue: [0.05, Infinity],
      leadValue: [0.01, Infinity],
      ironValue: [1.0, Infinity],
      zincValue: [5, 15],
    };
  
    let unfitParameters = [];
    let overallQuality = "Fit for drink";
  
    for (const parameter of Object.keys(parameters)) {
      if (parameters[parameter] !== "") {
        const value = parseFloat(parameters[parameter]);
        const [lowerLimit, upperLimit] = limits[parameter];
        if (value < lowerLimit || value > upperLimit) {
          unfitParameters.push(parameter);
          overallQuality = "Not fit for drink";
        }
      }
    }
  
    if (unfitParameters.length > 0) {
      let message = "Not fit for drink due to:";
      unfitParameters.forEach((parameter) => {
        message += ` ${parameter},`;
      });
      message = message.slice(0, -1); // Remove the trailing comma
      setWaterQuality(message);
    } else {
      setWaterQuality(overallQuality);
    }
  
    const assessmentResults = [];
    for (const parameter of Object.keys(parameters)) {
      if (parameters[parameter] !== "") {
        const value = parseFloat(parameters[parameter]);
        const [lowerLimit, upperLimit] = limits[parameter];
        let assessment = "";
        if (value < lowerLimit) {
          assessment = "Low";
        } else if (value > upperLimit) {
          assessment = "Critical";
        } else {
          assessment = "Within Range";
        }
        assessmentResults.push({
          parameter,
          value, // Include the value of the parameter
          range: `${lowerLimit} - ${upperLimit}`,
          assessment,
        });
      }
    }
    setAssessmentData(assessmentResults);
  };
  
  

  //function to handle onChange event of input field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setParameters({ ...parameters, [name]: value });
  };

  return (
    <>
      <div className="mainContainer">
        <div className="backgroundContainer"></div>
        <div className="contentContainer">
          <h1 style={{ textAlign: "center" }}>Water Quality Assessment</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter PH Value"
                name="pHValue"
                value={parameters?.pHValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter TDS Value"
                name="TDSValue"
                value={parameters?.TDSValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter Hardness Value"
                name="hardnessValue"
                value={parameters?.hardnessValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter Alkalinity Value"
                name="alkalinityValue"
                value={parameters?.alkalinityValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter Nitrate Value"
                name="nitrateValue"
                value={parameters?.nitrateValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter Sulfate Value"
                name="sulfateValue"
                value={parameters?.sulfateValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter Fluoride Value"
                name="fluorideValue"
                value={parameters?.fluorideValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter Chloride Value"
                name="chlorideValue"
                value={parameters?.chlorideValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter Turbidity Value"
                name="turbidityValue"
                value={parameters?.turbidityValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter Arsenic Value"
                name="arsenicValue"
                value={parameters?.arsenicValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter Copper Value"
                name="copperValue"
                value={parameters?.copperValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter Cadminum Value"
                name="cadmiumValue"
                value={parameters?.cadmiumValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter Chromium Value"
                name="chromiumValue"
                value={parameters?.chromiumValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter Lead Value"
                name="leadValue"
                value={parameters?.leadValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter Iron Value"
                name="ironValue"
                value={parameters?.ironValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                type="number"
                label="Enter Zink Value"
                name="zincValue"
                value={parameters?.zincValue}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item md={6}></Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Button onClick={assessWaterQuality} variant="contained">
                Assess Water Quality
              </Button>
            </Grid>
          </Grid>
          {/* <Button onClick={assessWaterQuality} variant="contained">
            Assess Water Quality
          </Button> */}
        </div>
      </div>

      {/* popup modal  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      
      >
        <Box sx={style}>
          <Button
           style={{
            background:
              "linear-gradient(to right, #30cfd0 0%, #330867 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
          id="modal-modal-title" variant="outlined" component="h2">
            Water Prediction Based On Data
          </Button>
          <Typography
          style={{
            background:
              "linear-gradient(to right, #30cfd0 0%, #330867 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
          id="modal-modal-title" variant="h6" component="h2">
           {waterQuality} 
          </Typography>

      

          <CustomizedTables data={assessmentData}/>
          <Button style={{marginTop:"20px"}} onClick={() => setOpen(false)} variant="outlined">
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default WaterQualityPrediction;
