import React, { CSSProperties } from "react";

<<<<<<< HEAD
import React from 'react';
import MainUi from './MainUI';
import { useCSVReader } from 'react-papaparse';

import {Routes, Route, useNavigate, Switch} from 'react-router-dom';


=======
import { useCSVReader } from "react-papaparse";
import MainApp from "./MainApp";

// for styling csv
>>>>>>> 1f77cb58a22274142006a7c0a2dead36cda868cb
const styles = {
  csvReader: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  browseFile: {
    width: "20%",
  },
  acceptedFile: {
    border: "1px solid #ccc",
    height: 45,
    lineHeight: 2.5,
    paddingLeft: 10,
    width: "80%",
  },
  remove: {
    borderRadius: 0,
    padding: "0 20px",
  },
  progressBarBackgroundColor: {
    backgroundColor: "red",
  },
};

function CsvReader() {
  const { CSVReader } = useCSVReader();
  let navigate = useNavigate();
  return (
    <div>
<<<<<<< HEAD
    <CSVReader
      onUploadAccepted={(results) => {
        console.log('---------------------------');
        console.log(results);
        console.log('---------------------------');
       navigate("/main",{replace:true})
      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }) => (
        <>
          <div style={styles.csvReader}>
            <button type='button' {...getRootProps()} style={styles.browseFile}>
              Browse file
            </button>
            <div style={styles.acceptedFile}>
              {acceptedFile && acceptedFile.name}
            </div>
            <button {...getRemoveFileProps()} style={styles.remove}>
              Remove
            </button>
          </div>
          <ProgressBar style={styles.progressBarBackgroundColor} />
        </>
      )}
    </CSVReader>
    <button onClick={()=> navigate("/main")}>

    </button>
=======
      <CSVReader
        onUploadAccepted={(results) => {
          console.log("---------------------------");
          console.log(results);
          console.log("---------------------------");
        }}
      >
        {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }) => (
          <>
            <div style={styles.csvReader}>
              <button
                type="button"
                {...getRootProps()}
                style={styles.browseFile}
              >
                Browse file
              </button>
              <div style={styles.acceptedFile}>
                {acceptedFile && acceptedFile.name}
              </div>
              <button {...getRemoveFileProps()} style={styles.remove}>
                Remove
              </button>
            </div>
            <ProgressBar style={styles.progressBarBackgroundColor} />
          </>
        )}
      </CSVReader>
      {/* add here just for testing */}
      <MainApp />
>>>>>>> 1f77cb58a22274142006a7c0a2dead36cda868cb
    </div>
  );
}

export default CsvReader;
