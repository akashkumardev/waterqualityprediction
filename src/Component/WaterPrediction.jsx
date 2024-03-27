import React, { useState } from "react";
import "./water.css";
import TextField from "@mui/material/TextField";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
function WaterQuality() {
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

  //usestate=>in
  const [waterQuality, setWaterQuality] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const assessWaterQuality = () => {
    setOpen(true)
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

    //     for (const parameter of Object.keys(parameters)) {
    //       const value = parseFloat(parameters[parameter]);
    //       const [lowerLimit, upperLimit] = limits[parameter];
    //       if (value < lowerLimit || value > upperLimit) {
    //         setWaterQuality('Not fit for drink');
    //         return;
    //       }
    //     }
    //     setWaterQuality('Fit for drink');
    //   };
    for (const parameter of Object.keys(parameters)) {
      const value = parseFloat(parameters[parameter]);
      console.log(value, parameter);
      let found = false;
      for (const limit in limits) {
        console.log(limit, "limit");
        if (parameter === limit) {
          const [lowerLimit, upperLimit] = limits[limit];
          if (value < lowerLimit || value > upperLimit) {
            setWaterQuality("Not fit for drink");
            return;
          }
          found = true;
          break;
        }
      }
      if (!found) {
        console.error(`No limit found for parameter ${parameter}`);
      }
    }
    setWaterQuality("Fit for drink");
    // setOpen(true)
  };
console.log(waterQuality,"water")
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
        {/* {Object.entries(parameters).map(([parameter, value]) => ( */}

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
        {/* ))} */}
        {/* <button onClick={assessWaterQuality}>Assess Water Quality</button> */}
        {/* {waterQuality && <p>{waterQuality}</p>} */}
      </div>
    </div>
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
     Water Prediction Based On Data
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    {waterQuality && <p style={{ background: 'linear-gradient(to right, #30cfd0 0%, #330867 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',fontWeight:"bold" }}  >{waterQuality}</p>}
    </Typography>
    <Button onClick={()=>setOpen(false)} variant="outlined">Close</Button>
  </Box>
</Modal>
    </>
  );
}

export default WaterQuality;
