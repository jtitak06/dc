import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHomeSearch, homeSearchController } from 'src/store/homeSearchSlice';
import { fetchSearchResults } from "src/store/searchResultsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faX } from "@fortawesome/free-solid-svg-icons";
import { bodyTypes } from "src/lists/BodyTypes";
import { colors } from "src/lists/Colors";
import { driveTrains } from "src/lists/DriveTrains";
import { engines } from "src/lists/Engines";
import { mileage } from "src/lists/Mileage";
import { prices } from "src/lists/Prices";
import { transmissions } from "src/lists/Transmissions";
import "./SideMenu.css";

export default function SideMenu(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dropdown, setDropdown] = useState({
      make: false,
      model: false,
      color: false,
      price: false,
      mileage: false,
      body: false,
      engine: false,
      transmission: false,
      train: false,
    })
//    const carsHistory = React.useRef(cars);
    const {data: homeSearch } = useSelector(state => state?.homeSearch);
    const testParams = useSelector(state => state.searchInput);
    const [yearToOptions, setYearToOptions] = useState([]);
    const [yearOptions, setYearOptions] = useState([]);
    const [makeOptions, setMakeOptions] = useState([]);
    const [modelOptions, setModelOptions] = useState([]);
    const [searchParams, setSearchParams] = useState({
      zip: "",
      distance: 10,
      type: "New",
      certified: false,
      yearFrom: "",
      yearTo: "",
      makeArray: [],
      modelArray: [],
      colorsArray: [],
      priceArray: [],
      mileageArray: [],
      bodyArray: [],
      engineArray: [],
      transmissionArray: [],
      trainArray: [],
    });

    useEffect(() => {
      dispatch(getHomeSearch());
    return () => homeSearchController.abort()
  }, [dispatch]);

  useEffect(() => {
    const uniqueYears = new Set(homeSearch.map(vehicle => vehicle?.year));
    const uniqueYearsArray = Array.from(uniqueYears);
    setYearOptions(uniqueYearsArray);
  }, [homeSearch]);
  
  useEffect(() => {
    if (searchParams.yearFrom) {
    // Filter years greater than or equal to yearFrom
    const availableYearsTo = yearOptions
      .filter(year => year >= searchParams.yearFrom)
      .slice() // create a copy to avoid mutating the original array
      .reverse();

    setYearToOptions(availableYearsTo);
    } else {
      setYearToOptions(yearOptions.slice().reverse());
    }
  }, [searchParams.yearFrom, yearOptions]);

  useEffect(() => {
    const uniqueMakes = homeSearch.reduce((accumulator, vehicle) => {
      if (!accumulator.includes(vehicle.make)) {
        accumulator.push(vehicle.make);
      }
      return accumulator;
    }, []);
    setMakeOptions(uniqueMakes);
  }, [homeSearch]);

  useEffect(() => {
    const newModelOptions = homeSearch.reduce((accumulator, vehicle) => {
      if (searchParams.makeArray.includes(vehicle.make) && !accumulator.includes(vehicle.model)) {
        accumulator.push(vehicle.model);
      }
      return accumulator;
    }, []);
    setModelOptions(newModelOptions);
  }, [homeSearch, searchParams.makeArray]);
  console.log(testParams.make)

    const removeMake = (index) => {
      setSearchParams((prevState) => {
        const updated = [...prevState.makeArray];
        updated.splice(index, 1);
        return { ...prevState, makeArray: updated };
      });
    };

    const removeModel = (index) => {
      setSearchParams((prevState) => {
        const updated = [...prevState.modelArray];
        updated.splice(index, 1);
        return { ...prevState, modelArray: updated };
      });
    }

    const removeColor = (index) => {
      setSearchParams((prevState) => {
        const updated = [...prevState.colorsArray];
        updated.splice(index, 1);
        return { ...prevState, colorsArray: updated };
      });
    }

    const removePrice = (index) => {
      setSearchParams((prevState) => {
        const updated = [...prevState.priceArray];
        updated.splice(index, 1);
        return { ...prevState, priceArray: updated };
      });
    }

    const removeMileage = (index) => {
      setSearchParams((prevState) => {
        const updated = [...prevState.mileageArray];
        updated.splice(index, 1);
        return { ...prevState, mileageArray: updated };
      });
    }

    const removeBody = (index) => {
      setSearchParams((prevState) => {
        const updated = [...prevState.bodyArray];
        updated.splice(index, 1);
        return { ...prevState, bodyArray: updated };
      });
    }

    const removeEngine = (index) => {
      setSearchParams((prevState) => {
        const updated = [...prevState.engineArray];
        updated.splice(index, 1);
        return { ...prevState, engineArray: updated };
      });
    }

    const removeTransmission = (index) => {
      setSearchParams((prevState) => {
        const updated = [...prevState.transmissionArray];
        updated.splice(index, 1);
        return { ...prevState, transmissionArray: updated };
      });
    }

    const removeTrain = (index) => {
      setSearchParams((prevState) => {
        const updated = [...prevState.trainArray];
        updated.splice(index, 1);
        return { ...prevState, trainArray: updated };
      });
    }

    const handleClickSearch = async (e) => {
      e.preventDefault();
    
      const queryParams = {
        zip: searchParams.zip,
        distance: searchParams.distance,
        type: searchParams.type,
        certified: searchParams.certified,
        yearFrom: searchParams.yearFrom,
        yearTo: searchParams.yearTo,
        makes: searchParams.makeArray.join(","),
        models: searchParams.modelArray.join(","),
        colors: searchParams.colorsArray.join(","),
        bodyStyles: searchParams.bodyArray.join(","),
        mileage: searchParams.mileageArray.length > 0 ? searchParams.mileageArray.map((item) => item.value).join(",") : "",
        price: searchParams.priceArray.length > 0 ? searchParams.priceArray.map((price) => price.value).join(",") : "",
        engines: searchParams.engineArray.join(","),
        transmissions: searchParams.transmissionArray.join(","),
        driveTrains: searchParams.trainArray.join(","),    
        rows: 500
      };
    
      try {

        await dispatch(fetchSearchResults(queryParams));

        const queryString = new URLSearchParams(queryParams).toString();
        navigate(`/results?${queryString}`);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    return (
      <>
        <div className="results-side-menu desktop">
            <h3 className="results-side-menu-title">Search</h3>
            <form className="results-side-menu-form">
              <div className="results-side-menu-form-row">
                <div className="results-side-menu-wrapper">
                  <label className="results-side-menu-label">Within</label>
                  <select onChange={(e) => setSearchParams({ ...searchParams, distance: e.target.value })} className="results-side-menu-select">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={75}>75</option>
                    <option value={100}>100</option>
                    <option value={250}>250</option>
                  </select>
                </div>
                <div className="results-side-menu-wrapper">
                  <label className="results-side-menu-label">Miles of</label>
                  <input
                    className="results-side-menu-input"
                    placeholder="Zip Code"
                    onChange={(e) => setSearchParams({ ...searchParams, zip: e.target.value })}
                  /> 
                </div>
              </div>
              <div className="results-side-menu-form-row">
                <select defaultValue={testParams.yearFrom} onChange={(e) => setSearchParams({ ...searchParams, yearFrom: e.target.value })} className="results-side-menu-select">
                <option value="">Select Year</option>
                  {yearOptions.slice().reverse().map((year, i) => {
                    return <option key={i} value={year}>{year}</option>
                  })}
                </select>
                <span>to</span>
                <select defaultValue={testParams.yearTo} onChange={(e) => setSearchParams({ ...searchParams, yearTo: e.target.value })} className="results-side-menu-select">
                <option value="">Select Year</option>
                {yearToOptions.map((year, i) => {
                  return <option key={i} value={year}>{year}</option>
                })}
                </select>
              </div>
              <div className="results-side-menu-form-row">
              <select onChange={(e) => setSearchParams({ ...searchParams, type: e.target.value })} className="results-side-menu-select">
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
                <div>
                  <input
                    className="results-side-menu-certified-checkbox"
                    type="checkbox"
                    onChange={() => setSearchParams({ ...searchParams, certified: !searchParams.certified })}
                  />
                  <label className="results-side-menu-certified-text">
                    Certified
                  </label>
                </div>
              </div>
              <div className="results-side-menu-form-row">
                <button onClick={handleClickSearch} className="results-side-menu-button">Search</button>
              </div>
            </form>
            <div className="results-section">
              <button onClick={!dropdown.make ? () => setDropdown({...dropdown, make: true}) : () => setDropdown({...dropdown, make: false})} className="results-side-menu-dropdown">
                <h5 className="results-side-menu-subtitle">Make</h5>
                <FontAwesomeIcon icon={dropdown.make ? faAngleUp : faAngleDown} />
              </button>
                {searchParams.makeArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.makeArray.sort((a,b) => {
                   // searchParams.make.split().sort((a,b) => {
                  return a.localeCompare(b);
                }).map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeMake(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.make && (
                <ul className="results-dropdown-list">
                  {makeOptions.sort((a,b) => {
                  return a.localeCompare(b);
                }).map((vehicle, i) => {
                    return (
                      <li className="results-dropdown-list-item" key={i}>
                        <button
                          className="results-dropdown-list-button"
                          onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const vehicleToAdd = vehicle;
                              const isDuplicate = prevSearchParams.makeArray.includes(vehicleToAdd);
                             // const isDuplicate = prevSearchParams.make.includes(vehicleToAdd);
                              if (!isDuplicate) {
                                const updatedMakeArray = [...prevSearchParams.makeArray, vehicleToAdd];
                                return { ...prevSearchParams, makeArray: updatedMakeArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", vehicleToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}
                        >
                          {vehicle}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="results-section">
              <button
                onClick={!dropdown.model ? () => setDropdown({...dropdown, model: true}) : () => setDropdown({...dropdown, model: false})}
                className="results-side-menu-dropdown"
              >
                <h5 className="results-side-menu-subtitle">Model</h5>
                <FontAwesomeIcon icon={dropdown.model ? faAngleUp : faAngleDown} />
              </button>
              {searchParams.modelArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.modelArray.sort((a,b) => {
                  return a.localeCompare(b);
                }).map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeModel(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.model && (<ul className="results-dropdown-list">
                  {modelOptions.sort((a,b) => {
                  return a.localeCompare(b);
                }).map((vehicle, i) => { 
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button"  onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const vehicleToAdd = vehicle;
                              const isDuplicate = prevSearchParams.modelArray.includes(vehicleToAdd);
                        
                              if (!isDuplicate) {
                                const updatedModelArray = [...prevSearchParams.modelArray, vehicleToAdd];
                                return { ...prevSearchParams, modelArray: updatedModelArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", vehicleToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{vehicle}</button>
                      </li>
                    )
                  })}
                </ul>
                )}
            </div>
            <div className="results-section">
              <button onClick={!dropdown.color ? () => setDropdown({...dropdown, color: true}) : () => setDropdown({...dropdown, color: false})} className="results-side-menu-dropdown">
                <h5 className="results-side-menu-subtitle">Color</h5>
                <FontAwesomeIcon icon={dropdown.color ? faAngleUp : faAngleDown} />
              </button>
              {searchParams.colorsArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.colorsArray.sort((a,b) => {
                  return a.localeCompare(b);
                }).map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeColor(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.color && (
                <ul className="results-dropdown-list">
                  {colors.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const itemToAdd = item;
                              const isDuplicate = prevSearchParams.colorsArray.includes(itemToAdd);
                        
                              if (!isDuplicate) {
                                const updatedColorsArray = [...prevSearchParams.colorsArray, itemToAdd];
                                return { ...prevSearchParams, colorsArray: updatedColorsArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", itemToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="results-section">
              <button
                onClick={!dropdown.price ? () => setDropdown({...dropdown, price: true}) : () => setDropdown({...dropdown, price: false})}
                className="results-side-menu-dropdown"
              >
                <h5 className="results-side-menu-subtitle">Price</h5>
                <FontAwesomeIcon icon={dropdown.price ? faAngleUp : faAngleDown} />
              </button>
              {searchParams.priceArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.priceArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item.label}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removePrice(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.price && (
                <ul className="results-dropdown-list">
                  {prices.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={() => {
            setSearchParams((prevSearchParams) => {
              const itemToAdd = item;
              const isDuplicate = prevSearchParams.priceArray.some((price) => price.value === itemToAdd.value);
              
              if (!isDuplicate) {
                const updatedPriceArray = [...prevSearchParams.priceArray, itemToAdd];
                return { ...prevSearchParams, priceArray: updatedPriceArray };
              } else {
                // Handle duplicate value, e.g., show an error message
                console.log("Duplicate value: ", itemToAdd.value);
                return prevSearchParams;
              }
            });
          }}>{item.label}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="results-section">
              <button
                onClick={!dropdown.mileage ? () => setDropdown({...dropdown, mileage: true}) : () => setDropdown({...dropdown, mileage: false})}
                className="results-side-menu-dropdown"
              >
                <h5 className="results-side-menu-subtitle">Mileage</h5>
                <FontAwesomeIcon icon={dropdown.mileage ? faAngleUp : faAngleDown} />
              </button>
              {searchParams.mileageArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.mileageArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item.label}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeMileage(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.mileage && (
                <ul className="results-dropdown-list">
                  {mileage.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const itemToAdd = item;
                              const isDuplicate = prevSearchParams.mileageArray.includes(itemToAdd);
                        
                              if (!isDuplicate) {
                                const updatedMileageArray = [...prevSearchParams.mileageArray, itemToAdd];
                                return { ...prevSearchParams, mileageArray: updatedMileageArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", itemToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{item.label}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="results-section">
              <button onClick={!dropdown.body ? () => setDropdown({...dropdown, body: true}) : () => setDropdown({...dropdown, body: false})} className="results-side-menu-dropdown">
                <h5 className="results-side-menu-subtitle">Body Type</h5>
                <FontAwesomeIcon icon={dropdown.body ? faAngleUp : faAngleDown} />
              </button>
              {searchParams.bodyArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.bodyArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeBody(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.body && (
                <ul className="results-dropdown-list">
                  {bodyTypes.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const itemToAdd = item;
                              const isDuplicate = prevSearchParams.bodyArray.includes(itemToAdd);
                        
                              if (!isDuplicate) {
                                const updatedBodyArray = [...prevSearchParams.bodyArray, itemToAdd];
                                return { ...prevSearchParams, bodyArray: updatedBodyArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", itemToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="results-section">
              <button
                onClick={!dropdown.engine ? () => setDropdown({...dropdown, engine: true}) : () => setDropdown({...dropdown, engine: false})}
                className="results-side-menu-dropdown"
              >
                <h5 className="results-side-menu-subtitle">Engine</h5>
                <FontAwesomeIcon icon={dropdown.engine ? faAngleUp : faAngleDown} />
              </button>
              {searchParams.engineArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.engineArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeEngine(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.engine && (
                <ul className="results-dropdown-list">
                  {engines.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const itemToAdd = item;
                              const isDuplicate = prevSearchParams.engineArray.includes(itemToAdd);
                        
                              if (!isDuplicate) {
                                const updatedEngineArray = [...prevSearchParams.engineArray, itemToAdd];
                                return { ...prevSearchParams, engineArray: updatedEngineArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", itemToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="results-section">
              <button
                onClick={!dropdown.transmission ? () => setDropdown({...dropdown, transmission: true}) : () => setDropdown({...dropdown, transmission: false})}
                className="results-side-menu-dropdown"
              >
                <h5 className="results-side-menu-subtitle">Transmission</h5>
                <FontAwesomeIcon
                  icon={dropdown.transmission ? faAngleUp : faAngleDown}
                />
              </button>
              {searchParams.transmissionArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.transmissionArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeTransmission(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.transmission && (
                <ul className="results-dropdown-list">
                  {transmissions.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const itemToAdd = item;
                              const isDuplicate = prevSearchParams.transmissionArray.includes(itemToAdd);
                        
                              if (!isDuplicate) {
                                const updatedTransmissionArray = [...prevSearchParams.transmissionArray, itemToAdd];
                                return { ...prevSearchParams, transmissionArray: updatedTransmissionArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", itemToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="results-section">
              <button
                onClick={!dropdown.train ? () => setDropdown({...dropdown, train: true}) : () => setDropdown({...dropdown, train: false})}
                className="results-side-menu-dropdown"
              >
                <h5 className="results-side-menu-subtitle">Drive Train</h5>
                <FontAwesomeIcon
                  icon={dropdown.train ? faAngleUp : faAngleDown}
                />
              </button>
              {searchParams.trainArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.trainArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeTrain(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                      </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.train && (
                <ul className="results-dropdown-list">
                  {driveTrains.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const itemToAdd = item;
                              const isDuplicate = prevSearchParams.trainArray.includes(itemToAdd);
                        
                              if (!isDuplicate) {
                                const updatedTrainArray = [...prevSearchParams.trainArray, itemToAdd];
                                return { ...prevSearchParams, trainArray: updatedTrainArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", itemToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
        </div>
        {
          <div className="side-menu-overlay">
            <div className="mobile-side-menu">
                <div className="title-section">
                  <h3 className="mobile-side-menu-title">Search</h3>
                  <button className="mobile-side-menu-close" onClick={props.mobileMenu}>
                    <FontAwesomeIcon icon={faX} />
                  </button>
                </div>
                <div>
                <div className="results-side-menu-form-row mobile">
                <div className="results-side-menu-wrapper">
                  <label className="results-side-menu-label">Within</label>
                  <select onChange={(e) => setSearchParams({ ...searchParams, distance: e.target.value })} className="results-side-menu-select">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={75}>75</option>
                    <option value={100}>100</option>
                    <option value={250}>250</option>
                  </select>
                </div>
                <div className="results-side-menu-wrapper">
                  <label className="results-side-menu-label">Miles of</label>
                  <input
                    className="results-side-menu-input"
                    placeholder="Zip Code"
                    onChange={(e) => setSearchParams({ ...searchParams, zipCode: e.target.value })}
                  />
                </div>
              </div>
              <div className="results-side-menu-form-row mobile">
                <select onChange={(e) => setSearchParams({ ...searchParams, yearFrom: e.target.value })} className="results-side-menu-select">
                <option value="none">Select Year</option>
                  {yearOptions.slice().reverse().map((year, i) => {
                    return <option key={i} value={year}>{year}</option>
                  })}
                </select>
                <span>to</span>
                <select onChange={(e) => setSearchParams({ ...searchParams, yearTo: e.target.value })} className="results-side-menu-select">
                <option value="none">Select Year</option>
                  {yearToOptions.map((year, i) => {
                    return <option key={i} value={year}>{year}</option>
                  })}
                </select>
              </div>
              <div className="results-side-menu-form-row mobile">
              <select onChange={(e) => setSearchParams({ ...searchParams, type: e.target.value })} className="results-side-menu-select">
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
                <div>
                  <input
                    className="results-side-menu-certified-checkbox"
                    type="checkbox"
                    onChange={() => setSearchParams({ ...searchParams, certified: !searchParams.certified })}
                  />
                  <label className="results-side-menu-certified-text">
                    Certified
                  </label>
                </div>
              </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.make ? () => setDropdown({...dropdown, make: true}) : () => setDropdown({...dropdown, make: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Make</h5>
                    <FontAwesomeIcon icon={dropdown.make ? faAngleUp : faAngleDown} />
                  </button>
                  {/* searchParams.makeArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.makeArray.sort((a,b) => {
                  return a.localeCompare(b);
                }).map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeMake(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div> */}
                <div>{testParams.make}</div>
                  {dropdown.make && (
                    <ul className="results-dropdown-list">
                      {makeOptions.sort((a,b) => {
                  return a.localeCompare(b);
                }).map((vehicle, i) => {
                        return(
                          <li className="results-dropdown-list-item" key={i}>
                            <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const vehicleToAdd = vehicle;
                              const isDuplicate = prevSearchParams.makeArray.includes(vehicleToAdd);
                        
                              if (!isDuplicate) {
                                const updatedMakeArray = [...prevSearchParams.makeArray, vehicleToAdd];
                                return { ...prevSearchParams, makeArray: updatedMakeArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", vehicleToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{vehicle}</button>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.model ? () => setDropdown({...dropdown, model: true}) : () => setDropdown({...dropdown, model: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Model</h5>
                    <FontAwesomeIcon icon={dropdown.model ? faAngleUp : faAngleDown} />
                  </button>
                  {searchParams.modelArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.modelArray.sort((a,b) => {
                  return a.localeCompare(b);
                }).map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeModel(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
                  {dropdown.model && (<ul className="results-dropdown-list">
                  {modelOptions.sort((a,b) => {
                  return a.localeCompare(b);
                }).map((vehicle, i) => { 
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const vehicleToAdd = vehicle;
                              const isDuplicate = prevSearchParams.modelArray.includes(vehicleToAdd);
                        
                              if (!isDuplicate) {
                                const updatedModelArray = [...prevSearchParams.modelArray, vehicleToAdd];
                                return { ...prevSearchParams, modelArray: updatedModelArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", vehicleToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{vehicle}</button>
                      </li>
                    )
                  })}
                </ul>
                )}
                </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.color ? () => setDropdown({...dropdown, color: true}) : () => setDropdown({...dropdown, color: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Color</h5>
                    <FontAwesomeIcon icon={dropdown.color ? faAngleUp : faAngleDown} />
                  </button>
                  {searchParams.colorsArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.colorsArray.sort((a,b) => {
                  return a.localeCompare(b);
                }).map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeColor(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
                  {dropdown.color && (
                <ul className="results-dropdown-list">
                  {colors.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const itemToAdd = item;
                              const isDuplicate = prevSearchParams.colorsArray.includes(itemToAdd);
                        
                              if (!isDuplicate) {
                                const updatedColorArray = [...prevSearchParams.colorsArray, itemToAdd];
                                return { ...prevSearchParams, colorsArray: updatedColorArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", itemToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
                </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.price ? () => setDropdown({...dropdown, price: true}) : () => setDropdown({...dropdown, price: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Price</h5>
                    <FontAwesomeIcon icon={dropdown.price ? faAngleUp : faAngleDown} />
                  </button>
                  {searchParams.priceArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.priceArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item.label}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removePrice(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
                  {dropdown.price && (
                    <ul className="results-dropdown-list">
                      {prices.map((item, i) => {
                        return(
                          <li className="results-dropdown-list-item" key={i}>
                            <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const itemToAdd = item;
                              const isDuplicate = prevSearchParams.priceArray.includes(itemToAdd);
                        
                              if (!isDuplicate) {
                                const updatedPriceArray = [...prevSearchParams.priceArray, itemToAdd];
                                return { ...prevSearchParams, priceArray: updatedPriceArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", itemToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{item.label}</button>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.mileage ? () => setDropdown({...dropdown, mileage: true}) : () => setDropdown({...dropdown, mileage: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Mileage</h5>
                    <FontAwesomeIcon icon={dropdown.mileage ? faAngleUp : faAngleDown} />
                  </button>
                  {searchParams.mileageArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.mileageArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item.label}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeMileage(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
                  {dropdown.mileage && (
                    <ul className="results-dropdown-list">
                      {mileage.map((item, i) => {
                        return(
                          <li className="results-dropdown-list-item" key={i}>
                            <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const itemToAdd = item;
                              const isDuplicate = prevSearchParams.mileageArray.includes(itemToAdd);
                        
                              if (!isDuplicate) {
                                const updatedMileageArray = [...prevSearchParams.mileageArray, itemToAdd];
                                return { ...prevSearchParams, mileageArray: updatedMileageArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", itemToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{item.label}</button>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.body ? () => setDropdown({...dropdown, body: true}) : () => setDropdown({...dropdown, body: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Body</h5>
                    <FontAwesomeIcon icon={dropdown.body ? faAngleUp : faAngleDown} />
                  </button>
                  {searchParams.bodyArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.bodyArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeBody(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
                  {dropdown.body && (
                    <ul className="results-dropdown-list">
                      {bodyTypes.map((item, i) => {
                        return(
                          <li className="results-dropdown-list-item" key={i}>
                            <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const itemToAdd = item;
                              const isDuplicate = prevSearchParams.bodyArray.includes(itemToAdd);
                        
                              if (!isDuplicate) {
                                const updatedBodyArray = [...prevSearchParams.bodyArray, itemToAdd];
                                return { ...prevSearchParams, bodyArray: updatedBodyArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", itemToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{item}</button>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.engine ? () => setDropdown({...dropdown, engine: true}) : () => setDropdown({...dropdown, engine: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Engine</h5>
                    <FontAwesomeIcon icon={dropdown.engine ? faAngleUp : faAngleDown} />
                  </button>
                  {searchParams.engineArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.engineArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeEngine(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.engine && (
                <ul className="results-dropdown-list">
                  {engines.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const itemToAdd = item;
                              const isDuplicate = prevSearchParams.engineArray.includes(itemToAdd);
                        
                              if (!isDuplicate) {
                                const updatedEngineArray = [...prevSearchParams.engineArray, itemToAdd];
                                return { ...prevSearchParams, engineArray: updatedEngineArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", itemToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
                </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.transmission ? () => setDropdown({...dropdown, transmission: true}) : () => setDropdown({...dropdown, transmission: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Transmission</h5>
                    <FontAwesomeIcon
                      icon={dropdown.transmission ? faAngleUp : faAngleDown}
                    />
                  </button>
                  {searchParams.transmissionArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.transmissionArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeTransmission(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.transmission && (
                <ul className="results-dropdown-list">
                  {transmissions.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const itemToAdd = item;
                              const isDuplicate = prevSearchParams.transmissionArray.includes(itemToAdd);
                        
                              if (!isDuplicate) {
                                const updatedTransmissionArray = [...prevSearchParams.transmissionArray, itemToAdd];
                                return { ...prevSearchParams, transmissionArray: updatedTransmissionArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", itemToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
                </div>
                <div className="results-section">
              <button
                onClick={!dropdown.train ? () => setDropdown({...dropdown, train: true}) : () => setDropdown({...dropdown, train: false})}
                className="results-side-menu-dropdown"
              >
                <h5 className="results-side-menu-subtitle">Drive Train</h5>
                <FontAwesomeIcon
                  icon={dropdown.train ? faAngleUp : faAngleDown}
                />
              </button>
              {searchParams.trainArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {searchParams.trainArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={() => removeTrain(i)}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.train && (
                <ul className="results-dropdown-list">
                  {driveTrains.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={() => {
                            setSearchParams((prevSearchParams) => {
                              const itemToAdd = item;
                              const isDuplicate = prevSearchParams.trainArray.includes(itemToAdd);
                        
                              if (!isDuplicate) {
                                const updatedTrainArray = [...prevSearchParams.trainArray, itemToAdd];
                                return { ...prevSearchParams, trainArray: updatedTrainArray };
                              } else {
                                // Handle duplicate value, e.g., show an error message
                                console.log("Duplicate value: ", itemToAdd);
                                return prevSearchParams;
                              }
                            });
                          }}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="mobile-side-menu-button-wrapper">
            <button onClick={handleClickSearch} className="results-side-menu-button">Search</button>
            </div>
            </div>
            </div>
          </div>
        }
      </>
    );
};
