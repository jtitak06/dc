import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeSearch, homeSearchController } from 'src/store/homeSearchSlice';
// import { fetchSearchResults } from 'src/store/searchResultsSlice';
import PathConstants from '../routes/PathConstants';
// import { useSearchParams } from 'react-router-dom';
import './SearchFilter.css';
import { updateSearchParams } from 'src/store/searchInputSlice';

export default function SearchFilter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {data: homeSearch} = useSelector(state => state?.homeSearch);
  const [yearToOptions, setYearToOptions] = useState([])
  const [currentMake, setCurrentMake] = useState("");
  const [currentModel, setCurrentModel] = useState("");
//  const [searchParms, useSearchParams] = useSearchParams();
  const [years, setYears] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [type, setType] = useState("New");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    dispatch(getHomeSearch());
  return () => homeSearchController.abort()
}, [dispatch]);

  useEffect(() => {
    const uniqueYears = new Set(homeSearch.map(vehicle => vehicle?.year));
    const uniqueYearsArray = Array.from(uniqueYears);
    setYears(uniqueYearsArray);
    const uniqueMakes = homeSearch.reduce((accumulator, vehicle) => {
      if (!accumulator.includes(vehicle.make)) {
        accumulator.push(vehicle.make);
      }
      return accumulator;
    }, []);
    setMakes(uniqueMakes);
    const uniqueModels = homeSearch.reduce((accumulator, vehicle) => {
      if (currentMake.includes(vehicle.make) && !accumulator.includes(vehicle.model)) {
        accumulator.push(vehicle.model);
      }
      return accumulator;
    }, []);
    setModels(uniqueModels);
  }, [homeSearch, currentMake]);

  useEffect(() => {
    if (yearFrom) {
      const availableYearsTo = years.slice().reverse().filter(year => year >= yearFrom);
      setYearToOptions(availableYearsTo);
    } else {
      setYearToOptions(years.slice().reverse());
    }
  }, [years, yearFrom]);

  const handleClickSearch = async (e) => {
    e.preventDefault();

    const queryParams = {
      zip: zipCode,
      distance: 10,
      type: type,
      certified: checked,
      yearFrom: yearFrom,
      yearTo: yearTo,
      makes: currentMake,
      models: currentModel,
      rows: 500,
    };

    await dispatch(updateSearchParams(queryParams))

    const queryString = new URLSearchParams(queryParams).toString(); 
    navigate(`/results?${queryString}`);
  };

    return (
      <>
        <form className="search-form">
          <div className="search-filter">
            <div className="search-filter-top-section">
              <div className="search-filter-year-wrapper">
                <select
                  className="search-filter-dropdown small"
                  onChange={(e) => setYearFrom(e.target.value)}
                >
                  <option value="">Select Year</option>
                  {years
                    ?.slice()
                    .reverse()
                    .map((year, i) => {
                      return (
                        <option key={i} value={year}>
                          {year}
                        </option>
                      );
                    })}
                </select>
                <p className="search-filter-dropdown-text">to</p>
                <select
                  className="search-filter-dropdown small"
                  onChange={(e) => setYearTo(e.target.value)}
                >
                  <option value="">Select Year</option>
                  {yearToOptions.map((year, i) => {
                    return (
                      <option key={i} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
              <input
                className="search-filter-input"
                placeholder="Enter Zip Code"
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            <div className="search-filter-middle-section">
              <select
                onChange={(e) => setCurrentMake(e.target.value)}
                className="search-filter-dropdown"
              >
                <option value="none">Select Make</option>
                {makes
                  ?.sort((a, b) => {
                    return a?.localeCompare(b);
                  })
                  .map((make, i) => {
                    return (
                      <option key={i} value={make}>
                        {make}
                      </option>
                    );
                  })}
              </select>
              <select
                onChange={(e) => setCurrentModel(e.target.value)}
                className="search-filter-dropdown"
              >
                <option value="none">Select Model</option>
                {models
                  ?.sort((a, b) => {
                    return a?.localeCompare(b);
                  })
                  .map((model, i) => {
                    return (
                      <option key={i} value={model}>
                        {model}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="search-filter-bottom-section">
              <select
                onChange={(e) => setType(e.target.value)}
                className="search-filter-dropdown small"
              >
                <option value="New">New</option>
                <option value="Used">Used</option>
              </select>
              <div className="search-filter-certified-wrapper">
                <input
                  className="search-filter-certified-checkbox"
                  type="checkbox"
                  onChange={() => setChecked(!checked)}
                />
                <label className="search-filter-certified-text">
                  Certified
                </label>
              </div>
            </div>
          </div>
          <Link
            className="search-filter-button-link"
            to={PathConstants.RESULTS}
          >
            <button
              className="search-filter-button"
              onClick={handleClickSearch}
            >
              Search
            </button>
          </Link>
        </form>
      </>
    );
}